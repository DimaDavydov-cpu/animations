/* Penta Sketch: main editor.
 * Pencil draws (rectangles become stack cards, a tap places a text box for Scribble),
 * finger selects / moves / pans / zooms, finger tap on the background picks its color.
 * Cards are flex stacks: children flow vertically or horizontally with Penta gap/padding. */
(function () {
  const PS = window.PS;
  const $ = (id) => document.getElementById(id);

  const viewportEl = $('viewport'), worldEl = $('world'), artboardEl = $('artboard');
  const elementsEl = $('elements'), inkEl = $('ink'), selectionEl = $('selection');
  const gridEl = $('gridOverlay'), inspectorEl = $('inspector'), panelEl = $('panel'), hintEl = $('emptyHint');
  const colorPop = $('colorPopover'), toastEl = $('toast');

  const STORAGE_KEY = 'penta-sketch:v1';
  const SNAP = PS.GRID.snap;
  const colBound = (el) => !!el && (el.type === 'card' || el.type === 'asset' || (el.type === 'text' && el.w && el.variant !== 'button'));
  const boxLike = (el) => !!el && (el.type === 'card' || el.type === 'asset');   // things with resize handles
  /* an asset with a locked ratio derives its height from its width */
  const syncAssetH = (el) => { if (el && el.type === 'asset' && el.lock !== false && el.ratio) el.h = Math.max(24, Math.round(el.w / el.ratio)); };
  const isBox = (el) => ['input', 'button', 'select', 'tabs'].includes(el.variant);   // text variants drawn as boxes (not plain text)
  const snap = (v) => Math.round(v / SNAP) * SNAP;
  /* Card heights snap to the 24px vertical rhythm (min one rhythm step) */
  const RHYTHM = 24;
  const snapH = (v) => Math.max(RHYTHM, Math.round(v / RHYTHM) * RHYTHM);
  const uid = () => Math.random().toString(36).slice(2, 9);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const ARTBOARD_MIN = 320, ARTBOARD_MAX = 4000;   // the canvas is never narrower than 320px

  const PLAINTEXT_OK = (() => { const d = document.createElement('div'); try { d.contentEditable = 'plaintext-only'; } catch (e) { return false; } return d.contentEditable === 'plaintext-only'; })();

  /* ─────────────── State ─────────────── */
  const newDoc = (preset = 'full') => ({
    version: 2,
    artboard: { preset, w: PS.PRESETS[preset].w || 1194, h: PS.PRESETS[preset].h || 778, bg: '--color-white' },
    elements: [],
  });
  let doc = newDoc('full');
  const view = { x: 0, y: 0, s: 1 };
  const ui = { zoom: 1, tool: 'select', fingerDraws: true, grid: true, selectedId: null, editingId: null, lastLevel: 'body' };
  let past = [], future = [], editSnapshot = null;

  const snapDoc = () => JSON.stringify(doc);
  const byId = (id) => doc.elements.find((e) => e.id === id);
  const childrenOf = (pid) => doc.elements.filter((e) => (e.parent || null) === (pid || null));

  /* v1 projects: cards had absolute children. Give cards a stack and order children by position. */
  function migrate(d) {
    if (d.artboard && d.artboard.preset !== 'full' && d.artboard.w < 320) { d.artboard.w = 320; d.artboard.preset = 'custom'; }
    for (const e of d.elements) {
      if (e.type !== 'card') continue;
      if (!e.layout) e.layout = PS.defaultLayout();
      if (!e.sizeW) e.sizeW = 'fixed';
      if (!e.sizeH) e.sizeH = 'fixed';
    }
    if ((d.version || 1) < 2) {
      const top = d.elements.filter((e) => !e.parent);
      const kids = d.elements.filter((e) => e.parent).sort((a, b) => a.y - b.y || a.x - b.x);
      d.elements = top.concat(kids);
      d.version = 2;
    }
    return d;
  }

  function checkpoint() {
    if (ui.editingId && editSnapshot != null) {
      if (editSnapshot !== snapDoc()) past.push(editSnapshot);
      editSnapshot = null;
    }
    past.push(snapDoc());
    if (past.length > 150) past.shift();
    future = [];
  }
  function mutate(fn) {
    checkpoint();
    fn();
    if (ui.editingId) editSnapshot = snapDoc();
    render();
  }
  function restore(json) {
    doc = migrate(JSON.parse(json));
    if (doc.artboard.preset === 'full') doc.artboard.w = Math.round(viewportEl.getBoundingClientRect().width);
    if (ui.selectedId && !byId(ui.selectedId)) ui.selectedId = null;
    render(true);
  }
  function undo() {
    blurEditing();
    if (!past.length) return toast('Nothing to undo');
    future.push(snapDoc());
    restore(past.pop());
  }
  function redo() {
    blurEditing();
    if (!future.length) return toast('Nothing to redo');
    past.push(snapDoc());
    restore(future.pop());
  }

  /* ─────────────── Geometry & tree helpers ─────────────── */
  function toArtboard(cx, cy) {
    const r = viewportEl.getBoundingClientRect();
    return { x: (cx - r.left + viewportEl.scrollLeft - view.x) / view.s, y: (cy - r.top + viewportEl.scrollTop - view.y) / view.s };
  }
  /* element rect in artboard coordinates, measured from the DOM (works for flowed children) */
  function rectOf(id) {
    const n = nodes.get(id);
    if (!n) return { x: 0, y: 0, w: 0, h: 0 };
    const r = n.getBoundingClientRect();
    const a = toArtboard(r.left, r.top);
    return { x: a.x, y: a.y, w: r.width / view.s, h: r.height / view.s };
  }
  function descendants(id) {
    const out = [];
    const walk = (pid) => doc.elements.forEach((e) => { if (e.parent === pid) { out.push(e); walk(e.id); } });
    walk(id);
    return out;
  }
  const rectInside = (a, b) => a.x >= b.x - 2 && a.y >= b.y - 2 && a.x + a.w <= b.x + b.w + 2 && a.y + a.h <= b.y + b.h + 2;
  /* deepest (smallest) card that fully contains the rect */
  function containerFor(rect, exclude = new Set()) {
    let best = null, bestArea = Infinity;
    for (const e of doc.elements) {
      if (e.type !== 'card' || exclude.has(e.id)) continue;
      const r = rectOf(e.id);
      if (rectInside(rect, r) && r.w * r.h < bestArea) { best = e; bestArea = r.w * r.h; }
    }
    return best;
  }
  /* where along the stack's main axis a point falls */
  function insertionIndex(card, pt, excludeId) {
    const sibs = childrenOf(card.id).filter((s) => s.id !== excludeId);
    const row = card.layout.dir !== 'column';
    const rows = card.layout.dir === 'grid' || (row && card.layout.wrap);
    for (let i = 0; i < sibs.length; i++) {
      const r = rectOf(sibs[i].id);
      if (rows && (pt.y < r.y || pt.y > r.y + r.h)) { if (pt.y < r.y) return i; continue; }
      const mid = row ? r.x + r.w / 2 : r.y + r.h / 2;
      if ((row ? pt.x : pt.y) < mid) return i;
    }
    return sibs.length;
  }
  /* put `el` into card at sibling index (array order = stack order) */
  function placeInto(el, card, index) {
    doc.elements = doc.elements.filter((e) => e !== el);
    el.parent = card ? card.id : null;
    const sibs = childrenOf(el.parent);
    if (index < sibs.length) doc.elements.splice(doc.elements.indexOf(sibs[index]), 0, el);
    else doc.elements.push(el);
  }
  function surfaceUnder(parentId) {
    let p = parentId ? byId(parentId) : null;
    while (p && p.fill === 'transparent') p = p.parent ? byId(p.parent) : null;   // a transparent stack shows what is behind it
    return p ? p.fill : doc.artboard.bg;
  }
  function isDark(color) {
    const hex = color && color.startsWith('--') ? PS.tokenValue(color) : PS.normalizeHex(color);
    if (!hex) return false;
    const n = parseInt(hex.slice(1), 16);
    const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.35;
  }

  /* ─────────────── Rendering ─────────────── */
  const nodes = new Map();
  const applyCss = (node, pairs) => { node.style.cssText = ''; pairs.forEach(([k, v]) => node.style.setProperty(k, v)); };

  function makeNode(el) {
    const node = document.createElement('div');
    node.dataset.id = el.id;
    if (el.type === 'card') node.className = 'el el-card';
    else if (el.type === 'asset') {
      node.className = 'el el-asset';
      const img = document.createElement('img');
      img.draggable = false;
      img.alt = el.name || 'Asset';
      node.appendChild(img);
    } else {
      const edit = document.createElement('div');
      edit.className = 'el-text__edit';
      edit.contentEditable = PLAINTEXT_OK ? 'plaintext-only' : 'true';
      edit.spellcheck = false;
      edit.dataset.placeholder = 'Write here';
      edit.textContent = el.text || '';
      node.appendChild(edit);
    }
    return node;
  }

  function renderElements(force) {
    applyColumnBindings();
    const kids = new Map();
    for (const e of doc.elements) { const k = e.parent || ''; if (!kids.has(k)) kids.set(k, []); kids.get(k).push(e); }
    const seen = new Set();
    const place = (container, list, parent) => {
      list.forEach((el, i) => {
        let node = nodes.get(el.id);
        if (!node || (force && !node.contains(document.activeElement))) {
          const old = node;
          node = makeNode(el);
          if (old) old.replaceWith(node);
          nodes.set(el.id, node);
        }
        seen.add(el.id);
        const ref = container.children[i];
        if (ref !== node) container.insertBefore(node, ref || null);
        if (el.type === 'card') {
          applyCss(node, [...PS.sizeCss(el, parent), ...PS.stackCss(el, kids.get(el.id) || [], artboardUnitPx), ...PS.skinCss(el)]);
          const ch = kids.get(el.id) || [];
          place(node, ch, el);
          while (node.children.length > ch.length) node.lastChild.remove();
        } else if (el.type === 'asset') {
          node.className = 'el el-asset';
          const img = node.firstChild;
          const src = srcOf(el);
          if (img.getAttribute('src') !== src) img.setAttribute('src', src);
          img.alt = el.name || 'Asset';
          img.style.objectFit = el.fit || 'contain';
          const rad = PS.RADII.find((x) => x.id === el.radius);
          applyCss(node, [...PS.sizeCss(el, parent), ...(rad && rad.token ? [['border-radius', `var(${rad.token})`]] : [])]);
        } else {
          node.className = `el el-text t-${PS.level(el.level).id}${el.variant === 'input' ? ' is-input' : ''}${el.variant === 'select' ? ' is-input is-select' : ''}${el.variant === 'tabs' ? ' is-tabs' : ''}${el.variant === 'button' ? ` is-button btn-${el.btnStyle || 'solid'} btn-${el.btnSize || 'big'} btn-c-${el.btnContent || 'label'}` : ''}`;
          if (el.variant === 'input') node.firstChild.dataset.placeholder = 'Input';
          if (el.variant === 'button') { node.firstChild.dataset.placeholder = 'Button'; renderBtnIcon(el, node); }
          if (el.variant === 'select') node.firstChild.dataset.placeholder = 'Select';
          if (el.variant === 'tabs') renderTabsView(el, node);
          node.classList.toggle('has-w', !!el.w && !parent);
          node.classList.toggle('is-empty', !el.text && !isBox(el));
          const extra = parent ? [] : [['max-width', Math.max(48, doc.artboard.w - el.x) + 'px']];
          applyCss(node, [...PS.sizeCss(el, parent), ...extra, ...(el.variant === 'button' ? [] : PS.textColorCss(el))]);
          const edit = node.firstChild;
          if (document.activeElement !== edit && edit.textContent !== el.text) edit.textContent = el.text;
        }
        node.classList.toggle('is-selected', ui.selectedId === el.id);
        node.classList.toggle('is-empty-stack', el.type === 'card' && !(kids.get(el.id) || []).length);
      });
    };
    place(elementsEl, kids.get('') || [], null);
    for (const [id, node] of nodes) if (!seen.has(id)) { node.remove(); nodes.delete(id); }
    applyResponsive();
  }

  /* ─────────────── Mobile reflow ───────────────
   * On the 4-column (mobile) grid, cards bound to less than 5 of 12 columns that sit
   * beside a "main" card (more than half of the grid) move under it, stacked in reading
   * order at the main card's width; everything below moves down. Display only: the
   * stored (wide) layout is unchanged, so Adaptive / iPad show the original. */
  let responsive = new Map();
  const spanShare = (el) => (el.sizeW === 'cols' && el.col ? ((el.col.end === el.col.of ? el.col.of - 1 : el.col.end) - (el.col.start === -1 ? 0 : el.col.start) + 1) / el.col.of : null);
  function applyResponsive() {
    responsive = new Map();
    if (columnsFor(doc.artboard.w) !== 4) return;
    const gap = PS.GRID.gutter;
    const tops = childrenOf(null).map((el) => {
      const n = nodes.get(el.id);
      return { el, x: el.x, y: el.y, w: el.type === 'card' ? el.w : n.offsetWidth, h: el.type === 'card' && el.sizeH !== 'hug' ? el.h : n.offsetHeight, share: spanShare(el) };
    });
    const mains = tops.filter((t) => t.el.type === 'card' && t.share != null && t.share > 0.5);
    const side = new Map(); // main id -> side items
    const taken = new Set();
    for (const m of mains.sort((a, b) => a.y - b.y)) {
      const list = tops.filter((t) => t !== m && !taken.has(t.el.id) && t.el.type === 'card' && t.share != null && t.share < 5 / 12
        && t.y < m.y + m.h && t.y + t.h > m.y);
      list.sort((a, b) => a.y - b.y || a.x - b.x).forEach((t) => taken.add(t.el.id));
      if (list.length) side.set(m.el.id, list);
    }
    // main cards use the full mobile content width (bleed edges stay bleed)
    const G = gridLines();
    const fullSpan = (el) => ({ x: el.col.start === -1 ? 0 : G.colStarts[0], w: (el.col.end === el.col.of ? doc.artboard.w : G.colEnds[G.n - 1]) - (el.col.start === -1 ? 0 : G.colStarts[0]) });
    if (!mains.length) return;
    let offset = 0;
    for (const t of [...tops].sort((a, b) => a.y - b.y || a.x - b.x)) {
      if (taken.has(t.el.id)) continue;
      const y = t.y + offset;
      const isMain = mains.includes(t);
      if (isMain) responsive.set(t.el.id, { y, ...fullSpan(t.el) });
      else if (offset) responsive.set(t.el.id, { y });
      const list = side.get(t.el.id);
      if (!list) continue;
      const mx = fullSpan(t.el);
      let cy = y + t.h + gap;
      for (const s2 of list) { responsive.set(s2.el.id, { x: mx.x, w: mx.w, y: cy }); cy += s2.h + gap; }
      offset += cy - (y + t.h);
    }
    for (const [id, o] of responsive) {
      const n = nodes.get(id);
      if (!n) continue;
      n.style.top = o.y + 'px';
      if (o.x != null) { n.style.left = o.x + 'px'; n.style.width = o.w + 'px'; }
      n.classList.add('is-reflowed');
    }
    nodes.forEach((n, id) => { if (!responsive.has(id)) n.classList.remove('is-reflowed'); });
  }

  /* vw / vh inside the canvas mean the artboard's width / visible height, like in an iframe */
  function artboardUnitPx(v, u) {
    if (u === 'vw') return Math.round((doc.artboard.w * v) / 100);
    const visibleH = Math.max(1, (viewportEl.clientHeight - topInset()) / view.s);
    return Math.round((visibleH * v) / 100);
  }
  function columnsFor(w) { return w >= 1024 ? 12 : w >= 600 ? 8 : 4; }

  /* ─────────────── Grid snapping ───────────────
   * Card edges snap to the layout grid (column edges, page margins, artboard edges)
   * when within GRID_SNAP design px; otherwise they fall back to the 8px grid. */
  const GRID_SNAP = 20;
  function gridLines() {
    const a = doc.artboard, n = columnsFor(a.w), M = PS.GRID.margin, G = PS.GRID.gutter;
    const cw = (a.w - 2 * M - (n - 1) * G) / n;
    const colStarts = [], colEnds = [];
    for (let i = 0; i < n; i++) { const x = M + i * (cw + G); colStarts.push(Math.round(x)); colEnds.push(Math.round(x + cw)); }
    // left edges snap to column starts (or the artboard edge), right edges to column ends
    return { n, colStarts, colEnds, starts: [0, ...colStarts], ends: [...colEnds, a.w], xs: [0, a.w, ...colStarts, ...colEnds], ys: [0, M] };
  }

  /* A top-level card whose edges sit on the grid is BOUND to those columns (sizeW 'cols'):
   * when the artboard width changes, it keeps spanning the same columns. -1 / n = bleed edge. */
  const LINE_TOL = 2; // px: DOM measurements are sub-pixel, grid lines are rounded
  const lineIndex = (v, arr) => arr.findIndex((l) => Math.abs(l - v) <= LINE_TOL);
  function bindToColumns(el) {
    if (!colBound(el) || el.parent || el.sizeW === 'hug') return;
    const L = gridLines();
    let x1 = el.x, x2 = el.x + el.w;
    if (Math.abs(x1) <= LINE_TOL) x1 = 0;
    if (Math.abs(x2 - doc.artboard.w) <= LINE_TOL) x2 = doc.artboard.w;
    const start = x1 === 0 ? -1 : lineIndex(x1, L.colStarts);
    const end = x2 === doc.artboard.w ? L.n : lineIndex(x2, L.colEnds);
    if (start !== -1 || x1 === 0) {
      if (end !== -1 && (start === -1 ? 0 : start) <= (end === L.n ? L.n - 1 : end) && !el.lockW) {
        el.sizeW = 'cols';
        el.col = { start, end, of: L.n };
        return;
      }
    }
    if (el.sizeW === 'cols') el.sizeW = 'fixed';
  }
  /* If one edge of a top-level card sits on the grid, snap the other edge to the nearest
   * column line too, so the card is a whole number of columns wide, then bind it. */
  function snapToColumns(el) {
    if (!colBound(el) || el.parent || el.sizeW === 'hug' || el.lockW) return false;
    const L = gridLines();
    let x1 = el.x, x2 = el.x + el.w;
    const si = lineIndex(x1, L.starts), ei = lineIndex(x2, L.ends);
    if (si !== -1) x1 = el.x = L.starts[si];
    if (ei !== -1) x2 = L.ends[ei];
    el.w = x2 - x1;
    const onStart = si !== -1, onEnd = ei !== -1;
    if (!onStart && !onEnd) return false;
    const near = (v, arr) => arr.reduce((a, b) => (Math.abs(b - v) < Math.abs(a - v) ? b : a));
    if (onStart && !onEnd) { const ends = L.ends.filter((e) => e > x1); if (ends.length) el.w = near(x2, ends) - x1; }
    if (onEnd && !onStart) { const starts = L.starts.filter((v) => v < x2); if (starts.length) { el.x = near(x1, starts); el.w = x2 - el.x; } }
    if (el.sizeW === 'cols') el.sizeW = 'fixed';
    bindToColumns(el);
    return el.sizeW === 'cols';
  }
  function colSpanRect(col) {
    const L = gridLines(), n = L.n;
    const map = (i, isEnd) => (i === -1 ? -1 : i === col.of ? n : clamp(Math.round(((i + (isEnd ? 1 : 0)) / col.of) * n) - (isEnd ? 1 : 0), 0, n - 1));
    let s = map(col.start, false), e = map(col.end, true);
    if (s !== -1 && e !== n && e < s) e = s;
    const x1 = s === -1 ? 0 : L.colStarts[s];
    const x2 = e === n ? doc.artboard.w : L.colEnds[e];
    return { x: x1, w: Math.max(SNAP * 3, x2 - x1) };
  }
  function applyColumnBindings() {
    for (const el of doc.elements) {
      if (colBound(el) && !el.parent && el.sizeW === 'cols' && el.col) { Object.assign(el, colSpanRect(el.col)); syncAssetH(el); }
    }
  }
  function nearestLine(v, lines) {
    let best = null;
    for (const l of lines) { const d = Math.abs(v - l); if (!best || d < best.d) best = { line: l, d }; }
    return best && best.d <= GRID_SNAP ? best : null;
  }
  /* one moving edge (resize / drawn edge) */
  function snapEdge(v, lines, guides) {
    const n = nearestLine(v, lines);
    if (n) { guides.push(n.line); return n.line; }
    return snap(v);
  }
  /* a whole span moving together (drag): snap whichever edge is closer */
  function snapSpan(v1, v2, lines, guides, lines2 = lines) {
    const a = nearestLine(v1, lines), b = nearestLine(v2, lines2);
    if (a && (!b || a.d <= b.d)) { guides.push(a.line); return a.line; }
    if (b) { guides.push(b.line); return v1 + (b.line - v2); }
    return snap(v1);
  }
  function showGuides(gx, gy) {
    selectionEl.querySelectorAll('.snap-guide').forEach((n) => n.remove());
    const a = doc.artboard;
    gx.forEach((x) => { const d = document.createElement('div'); d.className = 'snap-guide snap-guide--v'; d.style.left = x + 'px'; d.style.height = a.h + 'px'; selectionEl.appendChild(d); });
    gy.forEach((y) => { const d = document.createElement('div'); d.className = 'snap-guide snap-guide--h'; d.style.top = y + 'px'; d.style.width = a.w + 'px'; selectionEl.appendChild(d); });
  }
  let guideTimer = null;
  function flashGuides(gx, gy) {
    showGuides(gx, gy);
    clearTimeout(guideTimer);
    guideTimer = setTimeout(() => showGuides([], []), 700);
  }

  function renderArtboard() {
    const a = doc.artboard;
    artboardEl.style.width = a.w + 'px';
    artboardEl.style.height = a.h + 'px';
    artboardEl.style.background = PS.colorCss(a.bg);
    positionKnob();
    inkEl.setAttribute('viewBox', `0 0 ${a.w} ${a.h}`);
    inkEl.setAttribute('width', a.w);
    inkEl.setAttribute('height', a.h);
    const label = a.preset === 'custom' ? 'Custom' : PS.PRESETS[a.preset].label;
    $('artboardLabel').textContent = `${a.w} px`;
    $('artboardLabel').title = `${label} canvas width. Tap to type a width or pick a preset`;
    $('presetSelect').value = a.preset;
    document.querySelectorAll('[data-preset]').forEach((w) => {
      const on = w.dataset.preset === a.preset;
      w.classList.toggle('gost', !on);
      w.classList.toggle('is-current', on);
    });
    worldEl.classList.toggle('is-full', a.preset === 'full');
    if (document.activeElement !== $('abW')) $('abW').value = a.w;
    const cols = columnsFor(a.w);
    if (gridEl.childElementCount !== cols) {
      gridEl.innerHTML = '';
      for (let i = 0; i < cols; i++) gridEl.appendChild(document.createElement('span'));
    }
    gridEl.style.padding = `0 ${PS.GRID.margin}px`;
    gridEl.style.gap = `${PS.GRID.gutter}px`;
    gridEl.classList.toggle('is-on', ui.grid);
    $('gridToggleWrap').classList.toggle('is-active', ui.grid);
    $('gridState').textContent = ui.grid ? 'On' : 'Off';
    hintEl.classList.toggle('is-hidden', doc.elements.length > 0);
  }

  /* The resize knob stays at the vertical middle of the screen (fixed, never scrolls away);
   * horizontally it sits just inside the canvas's right edge and follows it. */
  const KNOB_W = 24;
  function positionKnob() {
    const knob = $('abKnob');
    if (!knob) return;
    const r = viewportEl.getBoundingClientRect();
    const edge = r.left + view.x + doc.artboard.w * view.s - viewportEl.scrollLeft;
    const left = clamp(edge - KNOB_W, r.left, window.innerWidth - KNOB_W);
    knob.style.left = Math.round(left) + 'px';
  }
  function applyView() {
    worldEl.style.transform = `translate(${view.x}px, ${view.y}px) scale(${view.s})`;
    worldEl.style.setProperty('--inv', 1 / view.s);
    $('zoomBtn').firstChild.nodeValue = Math.round(view.s * 100) + '% ';
    document.querySelectorAll('[data-zoom]').forEach((a) => a.classList.toggle('is-current', +a.dataset.zoom === view.s));
    positionInspector();
    positionKnob();
  }

  function renderSelection() {
    selectionEl.innerHTML = '';
    const el = ui.selectedId && byId(ui.selectedId);
    if (!el) return;
    const r = rectOf(el.id);
    const box = document.createElement('div');
    box.className = 'sel-box';
    Object.assign(box.style, { left: r.x + 'px', top: r.y + 'px', width: r.w + 'px', height: r.h + 'px' });
    if (el.type === 'text') {
      // the frame around the text: drag it to move the text (the text itself is for editing)
      box.classList.add('sel-box--text');
      for (const k of ['t', 'r', 'b', 'l']) {
        const f = document.createElement('div');
        f.className = `move-frame move-frame--${k}`;
        f.dataset.moveFrame = '';
        f.title = 'Drag to move';
        box.appendChild(f);
      }
    }
    if (el.type === 'asset') {
      for (const k of (el.parent ? ['se'] : ['nw', 'ne', 'sw', 'se'])) {
        const hd = document.createElement('div');
        hd.className = `handle handle--${k}`;
        hd.dataset.handle = k;
        box.appendChild(hd);
      }
      const badge = document.createElement('div');
      badge.className = 'sel-size';
      badge.textContent = `${el.name || 'Asset'} · ${Math.round(r.w)} × ${Math.round(r.h)}${el.lock !== false ? ' · ratio locked' : ''}`;
      box.appendChild(badge);
    }
    if (el.type === 'card') {
      const handles = el.parent ? ['se'] : ['nw', 'ne', 'sw', 'se'];
      for (const k of handles) {
        const hd = document.createElement('div');
        hd.className = `handle handle--${k}`;
        hd.dataset.handle = k;
        box.appendChild(hd);
      }
      const L = el.layout;
      const badge = document.createElement('div');
      badge.className = 'sel-size';
      badge.textContent = `${L.dir === 'grid' ? (L.gridMode === 'auto' ? `▦ Auto-fit ≥ ${L.minVal || 200}${L.minUnit || 'px'}` : `▦ Grid ${L.cols || 2}`) : L.dir === 'row' ? '→ Horizontal' : '↓ Vertical'} · gap ${PS.spacePx(L.gap)} · ${Math.round(r.w)} × ${Math.round(r.h)}`;
      box.appendChild(badge);
      // padding visualisation
      const pad = document.createElement('div');
      pad.className = 'sel-pad';
      Object.assign(pad.style, { borderWidth: `${PS.spacePx(L.padY)}px ${PS.spacePx(L.padX)}px` });
      box.appendChild(pad);
    }
    selectionEl.appendChild(box);
  }

  /* ─────────────── Assets ───────────────
   * Library assets (assets.js) are referenced by id and read from ../Assets. Uploaded images are kept in a
   * separate store (and in localStorage), NOT in the document, so undo snapshots stay small. */
  const STORE_ASSETS = 'penta-sketch:assets:v1';
  const uploads = new Map();                  // 'up:xyz' -> { src (data URL), name, w, h }
  let assetsSig = '';
  const assetMeta = (id) => (id && id.startsWith('lib:') ? (() => { const a = PS.libraryAsset(id.slice(4)); return a ? { src: a.src, name: a.name, w: a.w, h: a.h } : null; })() : uploads.get(id) || null);
  const srcOf = (el) => { const m = assetMeta(el.assetId); return m ? m.src : ''; };
  PS.assetSrc = srcOf;
  /* every image id the document points at: asset elements and button icons */
  const assetRefs = () => doc.elements.flatMap((e) => (e.type === 'asset' ? [e.assetId] : e.btnIcon ? [e.btnIcon] : []));
  function usedUploads() {
    const out = {};
    assetRefs().forEach((id) => { if (uploads.has(id)) out[id] = uploads.get(id); });
    return out;
  }
  function saveUploads() {
    const sig = assetRefs().join('|');
    if (sig === assetsSig) return;
    assetsSig = sig;
    try { localStorage.setItem(STORE_ASSETS, JSON.stringify(usedUploads())); } catch (e) { toast('This browser has no room to remember the uploaded image after a reload'); }
  }
  function loadUploads() {
    try { const o = JSON.parse(localStorage.getItem(STORE_ASSETS) || '{}'); Object.keys(o).forEach((k) => uploads.set(k, o[k])); } catch (e) { /* ignore */ }
    assetsSig = assetRefs().join('|');
  }

  let saveTimer = null;
  function render(force) {
    renderArtboard();
    renderElements(force);
    updateAutoHeight();
    renderSelection();
    renderInspector();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 300);
  }

  /* ─────────────── Persistence ─────────────── */
  function save() {
    try { localStorage.setItem(STORAGE_KEY, snapDoc()); } catch (e) { /* storage unavailable: app still works */ }
    saveUploads();
  }
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) { const d = JSON.parse(raw); if (d && d.artboard && Array.isArray(d.elements)) doc = migrate(d); }
    } catch (e) { /* ignore */ }
  }

  /* ─────────────── View ─────────────── */
  /* Scaling strategy: the scale is only set by the zoom control in the top bar
   * (100% / 75% / 50%), never by touch. Only the artboard WIDTH is a design decision:
   * Full screen = the screen's width, edge to edge; presets or a typed width otherwise.
   * The height is automatic: it fills the screen and grows with the content. */
  /* The top bar floats over the canvas; at scroll 0 the canvas starts just below it,
   * and scrolled content passes underneath the bar. */
  const topbarEl = document.querySelector('.topbar');
  const topInset = () => Math.ceil(topbarEl.getBoundingClientRect().bottom - viewportEl.getBoundingClientRect().top + 8);
  const ZOOMS = [1, 0.75, 0.5];
  const isFull = () => doc.artboard.preset === 'full';
  function sizeToViewport() {
    doc.artboard.w = viewportEl.clientWidth;
  }
  /* The canvas behaves like an iframe in a scrolling page: no panning, the page scrolls. */
  function updateScrollArea() {
    const a = doc.artboard;
    const sizer = $('scrollSizer');
    sizer.style.width = Math.max(viewportEl.clientWidth, Math.ceil(a.w * view.s + view.x * 2)) + 'px';
    sizer.style.height = Math.ceil(topInset() + a.h * view.s) + 'px';
  }
  function updateAutoHeight() {
    let bottom = 0;
    for (const e of childrenOf(null)) { const rr = rectOf(e.id); bottom = Math.max(bottom, rr.y + rr.h); }
    const h = Math.max(Math.floor((viewportEl.clientHeight - topInset()) / view.s), Math.ceil(bottom + 64));
    if (h === doc.artboard.h) { updateScrollArea(); return; }
    doc.artboard.h = h;
    artboardEl.style.height = h + 'px';
    inkEl.setAttribute('viewBox', `0 0 ${doc.artboard.w} ${h}`);
    inkEl.setAttribute('height', h);
    updateScrollArea();
  }
  function fit() {
    const a = doc.artboard, vw = viewportEl.clientWidth;
    view.s = ui.zoom;
    worldEl.classList.toggle('is-full', isFull());
    // rounded corners whenever the canvas is not edge to edge (scaled down or narrower)
    worldEl.classList.toggle('is-inset', view.s < 1 || a.w * view.s < vw - 1);
    view.x = a.w * view.s <= vw ? Math.round((vw - a.w * view.s) / 2) : 0;
    view.y = topInset();
    applyView();
    updateAutoHeight();
  }
  function setZoom(z) {
    ui.zoom = z;
    fit();
    renderSelection();
    positionInspector();
  }
  function setPreset(id) {
    if (id === 'full') { doc.artboard.preset = 'full'; sizeToViewport(); }
    else { const p = PS.PRESETS[id]; setArtboardSize(p.w, p.h, id); }
  }

  /* ─────────────── Artboard size ─────────────── */
  function setArtboardSize(w, h, preset) {
    w = clamp(Math.round(w), ARTBOARD_MIN, ARTBOARD_MAX);
    const match = Object.keys(PS.PRESETS).find((k) => !PS.PRESETS[k].dynamic && PS.PRESETS[k].w === w);
    doc.artboard.w = w;
    doc.artboard.preset = preset || match || 'custom';
  }

  /* ─────────────── Ink & recognition ─────────────── */
  const SVGNS = 'http://www.w3.org/2000/svg';
  let pending = { strokes: [], paths: [], timer: null };

  function pendingBounds() {
    let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
    for (const p of pending.strokes.flat()) { x1 = Math.min(x1, p.x); y1 = Math.min(y1, p.y); x2 = Math.max(x2, p.x); y2 = Math.max(y2, p.y); }
    return { x1, y1, x2, y2 };
  }
  function fadeInk(paths, cls = 'is-fading') {
    paths.forEach((p) => { p.classList.add(cls); setTimeout(() => p.remove(), 400); });
  }
  function flushPending() {
    clearTimeout(pending.timer);
    const { strokes, paths } = pending;
    pending = { strokes: [], paths: [], timer: null };
    if (!strokes.length) return;
    const plus = PS.recognizePlus(strokes);
    if (plus) {                                   // a drawn "+": open the Add menu there
      fadeInk(paths, 'is-absorbed');
      openAddMenu({ x: plus.x, y: plus.y });
      return;
    }
    const btn = PS.recognizeButton(strokes);
    if (btn && btn.type === 'button') {          // small rectangle with a line inside
      createButton(btn);
      fadeInk(paths, 'is-absorbed');
      return;
    }
    if (btn && btn.type === 'bigshape') {        // larger rectangle with a line inside: a card with that line as text
      createCard(btn.rect);
      createTextFromLine(btn.line);
      fadeInk(paths, 'is-absorbed');
      return;
    }
    const res = PS.recognize(strokes);
    const line = res.type === 'rect' ? null : PS.recognizeLine(strokes);
    if (res.type === 'rect' && res.h <= 72 && res.w >= 3 * res.h) {
      askShape(res, paths);            // wide and short: a card, or an input?
    } else if (res.type === 'rect') {
      createCard(res);
      fadeInk(paths, 'is-absorbed');
    } else if (line) {
      createTextFromLine(line);
      fadeInk(paths, 'is-absorbed');
    } else {
      fadeInk(paths);
      const many = strokes.length > 2 || res.reason === 'interior';
      toast(many ? 'To write text: tap with Pencil first, then write inside the box' : 'Not recognized. Draw a rectangle with all four edges to make a card');
    }
  }

  /* ── wide, short shape: ask whether it is a card or an input ── */
  const choiceEl = $('shapeChoice');
  let choice = null;
  function askShape(res, paths) {
    dismissChoice();
    choice = { res, paths };
    choiceEl.classList.add('is-open');
    const rr = viewportEl.getBoundingClientRect();
    const cx = rr.left + view.x + (res.x + res.w / 2) * view.s - viewportEl.scrollLeft;
    const cy = rr.top + view.y + res.y * view.s - viewportEl.scrollTop;
    const b = choiceEl.getBoundingClientRect();
    let y = cy - b.height - 10;
    if (y < topbarEl.getBoundingClientRect().bottom + 8) y = rr.top + view.y + (res.y + res.h) * view.s - viewportEl.scrollTop + 10;
    placeBox(choiceEl, cx - b.width / 2, y);
  }
  function dismissChoice(fade = true) {
    if (!choice) return;
    if (fade) fadeInk(choice.paths);
    choice = null;
    choiceEl.classList.remove('is-open');
  }
  choiceEl.addEventListener('click', (e) => {
    const b = e.target.closest('[data-choice]');
    if (!b || !choice) return;
    const { res, paths } = choice;
    const kind = b.dataset.choice;
    choice = null;
    choiceEl.classList.remove('is-open');
    if (kind === 'card') { createCard(res); fadeInk(paths, 'is-absorbed'); }
    else if (kind === 'input') { createInput(res); fadeInk(paths, 'is-absorbed'); }
    else fadeInk(paths);
  });

  /* Button icon: a mask of the icon image painted in the button's own text color, so any single-color
   * icon follows Solid / Outlined / Ghost. It sits after the label in the DOM; CSS order puts it first. */
  function renderBtnIcon(el, node) {
    let ic = node.querySelector('.btn-icon');
    if ((el.btnContent || 'label') === 'label' || !el.btnIcon) { if (ic) ic.remove(); return; }
    if (!ic) { ic = document.createElement('span'); ic.className = 'btn-icon'; ic.setAttribute('aria-hidden', 'true'); node.appendChild(ic); }
    const m = assetMeta(el.btnIcon);
    ic.style.setProperty('--icon', m ? `url("${m.src}")` : 'none');
  }
  /* an icon-only button is square (the size's height); other contents get their label width back */
  function btnApply(el) {
    const H = (el.btnSize || 'big') === 'small' ? 36 : 42;
    if ((el.btnContent || 'label') === 'icon') {
      if (el.w && el.wLabel === undefined) el.wLabel = el.w;
      if (el.w !== undefined || el.wLabel !== undefined) el.w = H;
    } else if (el.wLabel !== undefined) { el.w = el.wLabel; delete el.wLabel; }
  }

  function renderTabsView(el, node) {
    let v = node.querySelector('.tabs-view');
    if (!v) { v = document.createElement('div'); v.className = 'tabs-view'; node.appendChild(v); }
    v.textContent = '';
    (el.tabs || []).forEach((t, i) => {
      const sp = document.createElement('span');
      sp.className = 'tab' + (i === (el.active || 0) ? ' is-active' : '');
      sp.textContent = t;
      v.appendChild(sp);
    });
  }

  /* ─────────────── Add menu ───────────────
   * Opens on a drawn "+" or a double tap. Items are created where the menu was opened,
   * inside the card under that point when there is one, otherwise out on the canvas. */
  const addMenuEl = $('addMenu');
  let addAt = null;
  const toClient = (pt) => {
    const r = viewportEl.getBoundingClientRect();
    return { x: r.left + view.x + pt.x * view.s - viewportEl.scrollLeft, y: r.top + view.y + pt.y * view.s - viewportEl.scrollTop };
  };
  function openAddMenu(pt) {
    cancelPendingPanels();
    dismissChoice();
    closeColor();
    addAt = pt;
    addMenuEl.classList.add('is-open');
    const c = toClient(pt);
    placeBox(addMenuEl, c.x + 10, c.y + 10);
  }
  function dismissAdd() {
    if (!addAt && !addMenuEl.classList.contains('is-open')) return;
    addAt = null;
    addMenuEl.classList.remove('is-open');
  }
  /* default column span for things dropped out on the canvas (grid-bound, responsive) */
  function colPlacement(px, span) {
    const L = gridLines();
    span = Math.max(1, Math.min(span, L.n));
    let s0 = 0;
    L.colStarts.forEach((v, i) => { if (Math.abs(v - px) < Math.abs(L.colStarts[s0] - px)) s0 = i; });
    s0 = Math.min(s0, L.n - span);
    const e0 = s0 + span - 1;
    return { x: L.colStarts[s0], w: L.colEnds[e0] - L.colStarts[s0], col: { start: s0, end: e0, of: L.n }, n: L.n };
  }
  function addBox(pt, stack) {
    blurEditing();
    const parent = containerFor({ x: pt.x, y: pt.y, w: 0, h: 0 });
    const card = {
      id: uid(), type: 'card', parent: null, x: 0, y: snap(pt.y), w: 0, h: stack ? 96 : 192,
      fill: stack ? 'transparent' : '--color-white', border: stack ? 'none' : 'secondary', radius: stack ? 'none' : 'lg', elevation: 'none',
      layout: PS.defaultLayout(), sizeW: 'fixed', sizeH: 'fixed',
    };
    // Stack: a card without border or radius, horizontal, space-between
    if (stack) Object.assign(card.layout, { dir: 'row', justify: 'space-between', align: 'center', padX: '--space-0', padY: '--space-0' });
    mutate(() => {
      if (parent) {
        card.sizeW = 'fill'; card.h = stack ? 72 : 96;
        placeInto(card, parent, insertionIndex(parent, pt));
      } else {
        const n = gridLines().n;
        const cp = colPlacement(pt.x, stack ? Math.ceil(n / 2) : Math.ceil(n / 3));
        Object.assign(card, { x: cp.x, w: cp.w, sizeW: 'cols', col: cp.col });
        doc.elements.push(card);
      }
      ui.selectedId = card.id;
      ui.panelHidden = false;
    });
    const node = nodes.get(card.id);
    if (node) { node.classList.add('el--enter'); setTimeout(() => node.classList.remove('el--enter'), 400); }
  }
  function addTabs(pt) {
    blurEditing();
    const before = snapDoc();
    const parent = containerFor({ x: pt.x, y: pt.y, w: 0, h: 0 });
    const el = { id: uid(), type: 'text', variant: 'tabs', tabs: ['Tab 1', 'Tab 2', 'Tab 3'], active: 0, parent: null, x: 0, y: snap(pt.y), text: '', level: 'body', color: 'primary' };
    if (parent) placeInto(el, parent, insertionIndex(parent, pt));
    else {
      const cp = colPlacement(pt.x, Math.ceil(gridLines().n / 2));
      Object.assign(el, { x: cp.x, w: cp.w, sizeW: 'cols', col: cp.col });
      doc.elements.push(el);
    }
    ui.selectedId = el.id;
    ui.panelHidden = false;
    render();
    editSnapshot = null;
    past.push(before); future = [];
    const inp = inspectorEl.querySelector('.tabs-input input');
    if (inp) { inp.focus(); inp.select(); }
    toast('Tabs added. Type the labels, separated by commas');
  }
  function addElement(kind, pt) {
    const c = toClient(pt);
    if (kind === 'card') addBox(pt, false);
    else if (kind === 'stack') addBox(pt, true);
    else if (kind === 'text') createTextAt(pt, c.x, c.y, false);
    else if (kind === 'button') createButton({ rect: { x: pt.x - 70, y: pt.y - 21, w: 140, h: 42 } });
    else if (kind === 'input') createInput({ x: pt.x - 160, y: pt.y - 22, w: 320, h: 44 }, 'input');
    else if (kind === 'select') createInput({ x: pt.x - 160, y: pt.y - 22, w: 320, h: 44 }, 'select');
    else if (kind === 'tabs') addTabs(pt);
    else if (kind === 'asset') openAssetPicker(pt);
  }
  addMenuEl.addEventListener('click', (e) => {
    const a = e.target.closest('[data-add]');
    if (!a) return;
    e.preventDefault();
    const pt = addAt;
    dismissAdd();
    if (pt) addElement(a.dataset.add, pt);
  });
  addMenuEl.addEventListener('pointerdown', (e) => e.preventDefault());   // keep focus where it is

  /* ── Asset picker: the built-in library plus uploads from the device ── */
  const pickerEl = $('assetPicker'), pickBody = $('assetBody'), assetFile = $('assetFile');
  let pickCtx = null;
  function buildPicker() {
    pickBody.textContent = '';
    const up = document.createElement('div');
    up.className = 'button small asset-upload';
    const ub = document.createElement('button');
    ub.type = 'button';
    ub.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 9.5V2M4 4.5L7 1.5l3 3M2 9v2.5h10V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Upload from device…';
    ub.addEventListener('click', () => assetFile.click());
    up.appendChild(ub);
    pickBody.appendChild(up);
    const hint = document.createElement('p');
    hint.className = 'asset-picker__hint';
    hint.textContent = 'PNG, JPG, SVG, GIF or WebP, up to 10 MB';
    pickBody.appendChild(hint);
    const group = (name, items) => {
      if (!items.length) return;
      const h = document.createElement('h4');
      h.className = 'panel__heading';
      h.textContent = name;
      const grid = document.createElement('div');
      grid.className = 'asset-grid';
      items.forEach((it) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'asset-tile';
        b.dataset.id = it.id;
        b.title = it.name;
        const th = document.createElement('span');
        th.className = 'thumb';
        const im = document.createElement('img');
        im.src = it.src; im.alt = ''; im.draggable = false; im.loading = 'lazy';
        th.appendChild(im);
        const lb = document.createElement('span');
        lb.className = 'lbl';
        lb.textContent = it.name;
        b.append(th, lb);
        b.addEventListener('click', () => chooseAsset(it.id));
        grid.appendChild(b);
      });
      pickBody.append(h, grid);
    };
    group('Uploaded', [...uploads.entries()].map(([id, m]) => ({ id, name: m.name, src: m.src })));
    (pickCtx && pickCtx.iconFor ? ['Icons'] : ['Brand', 'Icons', 'Images']).forEach((g) => group(g, PS.LIBRARY.filter((a) => a.group === g).map((a) => ({ id: 'lib:' + a.id, name: a.name, src: a.src }))));
  }
  function openAssetPicker(pt, replaceId, opts = {}) {
    cancelPendingPanels();
    dismissAdd();
    pickCtx = { pt, replaceId, iconFor: opts.iconFor || null };
    pickerEl.querySelector('.asset-picker__title').textContent = pickCtx.iconFor ? 'Choose an icon' : 'Assets';
    buildPicker();
    pickerEl.classList.add('is-open');
    pickBody.scrollTop = 0;
    placeBox(pickerEl, (window.innerWidth - pickerEl.getBoundingClientRect().width) / 2, topbarEl.getBoundingClientRect().bottom + 24);
  }
  function dismissAssetPicker() {
    pickCtx = null;
    pickerEl.classList.remove('is-open');
  }
  $('assetClose').addEventListener('click', dismissAssetPicker);
  function chooseAsset(id) {
    const m = assetMeta(id);
    const ctx = pickCtx;
    dismissAssetPicker();
    if (!m || !ctx) return;
    if (ctx.iconFor) {                                    // picking an icon for a button
      const b = byId(ctx.iconFor);
      if (b) mutate(() => { b.btnIcon = id; if ((b.btnContent || 'label') === 'label') { b.btnContent = 'icon'; } btnApply(b); });
      return;
    }
    if (ctx.replaceId) {
      const el = byId(ctx.replaceId);
      if (el) mutate(() => { el.assetId = id; el.name = m.name; el.ratio = m.w / m.h; syncAssetH(el); });
      return;
    }
    addAssetAt(id, m, ctx.pt);
  }
  function addAssetAt(id, m, pt) {
    blurEditing();
    const parent = containerFor({ x: pt.x, y: pt.y, w: 0, h: 0 });
    const ratio = m.w / m.h;
    const room = parent ? Math.max(48, rectOf(parent.id).w - 2 * PS.spacePx(parent.layout.padX)) : doc.artboard.w - 64;
    const w = Math.max(24, Math.round(Math.min(m.w, 480, room)));
    const el = { id: uid(), type: 'asset', parent: null, assetId: id, name: m.name, ratio, lock: true, fit: 'contain', radius: 'none', x: 0, y: 0, w, h: Math.max(24, Math.round(w / ratio)), sizeW: 'fixed', sizeH: 'fixed' };
    mutate(() => {
      if (parent) placeInto(el, parent, insertionIndex(parent, pt));
      else {
        el.x = Math.max(0, snap(pt.x - w / 2)); el.y = Math.max(0, snap(pt.y - el.h / 2));
        doc.elements.push(el);
      }
      ui.selectedId = el.id;
      ui.panelHidden = false;
    });
    toast(`${m.name} added. Drag a corner to resize it`);
  }
  async function readImageFile(f) {
    if (!/^image\//.test(f.type) && !/\.(svg|png|jpe?g|gif|webp)$/i.test(f.name)) throw new Error('Choose an image file');
    if (f.size > 10 * 1024 * 1024) throw new Error('That image is over 10 MB');
    const name = f.name.replace(/\.[^.]+$/, '') || 'Image';
    const dataUrl = await new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = () => rej(new Error('Could not read that file')); fr.readAsDataURL(f); });
    const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => rej(new Error('That file is not a readable image')); i.src = dataUrl; });
    let w = img.naturalWidth, h = img.naturalHeight, src = dataUrl;
    if (/svg/.test(f.type) || /\.svg$/i.test(f.name)) {
      if (!w || !h) {
        const vb = /viewBox="[\d.\-]+[ ,]+[\d.\-]+[ ,]+([\d.]+)[ ,]+([\d.]+)"/.exec(await f.text());
        w = vb ? +vb[1] : 200; h = vb ? +vb[2] : 200;
      }
    } else if (Math.max(w, h) > 1600) {                 // keep stored images (and undo history) light
      const k = 1600 / Math.max(w, h), c = document.createElement('canvas');
      c.width = Math.round(w * k); c.height = Math.round(h * k);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      src = c.toDataURL(/jpe?g/.test(f.type) ? 'image/jpeg' : 'image/png', 0.9);
      w = c.width; h = c.height;
    }
    return { src, name, w, h };
  }
  assetFile.addEventListener('change', async () => {
    const f = assetFile.files[0];
    assetFile.value = '';
    if (!f) return;
    try {
      const m = await readImageFile(f);
      const id = 'up:' + uid();
      uploads.set(id, m);
      chooseAsset(id);
    } catch (err) { toast(err.message || 'Could not read that image'); }
  });

  /* Double tap on the canvas opens the same menu. It is decided when the SECOND tap completes
   * without moving, so a press that turns into a drag is never mistaken for it. Text with content,
   * handles and the resize knob keep their own behavior; an empty text box made by the first tap
   * is dropped. */
  const tdown = new Map();
  let dblTap = null;
  /* Palm rejection: while Pencil is touching (or hovering just above), finger touches are ignored,
   * so a resting hand never draws into the group the Pencil is building. */
  let penDown = false, lastPenAt = -1e9;
  const penBusy = () => ui.palmReject !== false && (penDown || performance.now() - lastPenAt < 500);
  ['pointerdown', 'pointermove', 'pointerup', 'pointercancel'].forEach((n) => viewportEl.addEventListener(n, (e) => {
    if (e.pointerType !== 'pen') return;
    lastPenAt = performance.now();
    if (n === 'pointerdown') penDown = true;
    if (n === 'pointerup' || n === 'pointercancel') penDown = false;
  }, true));
  viewportEl.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch' && penBusy()) { e.preventDefault(); e.stopImmediatePropagation(); return; }
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    clearTimeout(panelTimer);                                         // a new press cancels a panel that was about to open
    if (ui.panelDeferred) { ui.panelDeferred = false; }
    const t = e.target;
    const own = t.closest && t.closest('[data-handle], [data-ab-handle], [data-move-frame]');
    const onText = t.closest && t.closest('.el-text:not(.is-empty)');
    tdown.set(e.pointerId, { x: e.clientX, y: e.clientY, t: performance.now(), moved: false, own: !!own, text: !!onText });
  }, true);
  viewportEl.addEventListener('pointermove', (e) => {
    const d = tdown.get(e.pointerId);
    if (d && Math.hypot(e.clientX - d.x, e.clientY - d.y) > 10) d.moved = true;
  }, true);
  let dblPointerId = null;           // the pointer whose release completed a double tap (the main handler must skip it)
  const tapUp = (e) => {
    const d = tdown.get(e.pointerId);
    tdown.delete(e.pointerId);
    if (!d || d.moved || d.own || d.text || e.type === 'pointercancel') return;
    const now = performance.now();
    if (now - d.t >= 350) { dblTap = null; return; }                 // a long press is not a tap
    if (dblTap && now - dblTap.t < 350 && Math.hypot(d.x - dblTap.x, d.y - dblTap.y) < 32) {
      dblTap = null;
      dblPointerId = e.pointerId;
      cancelPendingPanels();                                          // no settings panel for a double tap, only the Add menu
      dismissChoice();
      closeColor();
      blurEditing();                                                  // an empty text box from the first tap disappears
      ui.panelHidden = true;                                          // the tapped element's panel stays closed (a tap on it brings it back)
      renderInspector();
      const pt = toArtboard(e.clientX, e.clientY);
      const a = doc.artboard;
      if (pt.x >= 0 && pt.y >= 0 && pt.x <= a.w && pt.y <= a.h) openAddMenu(pt);                // on a card or the page background
      return;
    }
    dblTap = { x: d.x, y: d.y, t: now };
  };
  viewportEl.addEventListener('pointerup', tapUp, true);
  viewportEl.addEventListener('pointercancel', tapUp, true);

  /* A button: a small rectangle with a line inside. Solid dark (Penta default) with white text;
   * style (Solid / Outlined / Ghost) and size (Small 36px / Big 42px) are chosen in the toolbar. */
  function createButton(b) {
    blurEditing();
    const r = b.rect;
    const before = snapDoc();
    const size = r.h <= 40 ? 'small' : 'big';
    const H = size === 'small' ? 36 : 42;
    const mid = { x: r.x + r.w / 2, y: r.y + r.h / 2 };
    const parent = containerFor({ x: mid.x, y: mid.y, w: 0, h: 0 });
    const el = { id: uid(), type: 'text', variant: 'button', btnStyle: 'solid', btnSize: size, parent: null, x: snap(r.x), y: snap(mid.y - H / 2), w: Math.max(64, snap(r.w)), text: '', level: 'body', color: 'primary' };
    if (parent) { delete el.w; placeInto(el, parent, insertionIndex(parent, mid)); }
    else doc.elements.push(el);
    ui.selectedId = el.id;
    ui.panelHidden = false;
    render();
    editSnapshot = before;
    nodes.get(el.id).firstChild.focus();
    toast('Button added. Write its label');
  }

  /* An input is a Penta text field: a text element with variant 'input' (44px, hairline border).
   * Out on the canvas it snaps to whole grid columns and stays bound to them. */
  function createInput(r, variant = 'input') {
    blurEditing();
    const before = snapDoc();
    const mid = { x: r.x + r.w / 2, y: r.y + r.h / 2 };
    const parent = containerFor({ x: mid.x, y: mid.y, w: 0, h: 0 });
    const el = { id: uid(), type: 'text', variant, parent: null, x: 0, y: snap(mid.y - 22), text: '', level: 'body', color: 'secondary' };
    if (parent) placeInto(el, parent, insertionIndex(parent, mid));
    else {
      const L = gridLines(), gx = [];
      const x1 = snapEdge(r.x, L.starts, gx), x2 = snapEdge(r.x + r.w, L.ends, gx);
      el.x = x1; el.w = Math.max(SNAP * 6, x2 - x1);
      doc.elements.push(el);
      snapToColumns(el); bindToColumns(el);
      if (gx.length) flashGuides(gx, []);
    }
    ui.selectedId = el.id;
    ui.panelHidden = false;
    render();
    editSnapshot = before;
    nodes.get(el.id).firstChild.focus();
    toast(variant === 'select' ? 'Select added. Type its placeholder' : 'Input added. Type its placeholder');
  }

  let createGuides = null;
  function createCard(r) {
  createGuides = null;
    let x = snap(r.x), y = snap(r.y);
    let w = Math.max(SNAP * 3, snap(r.x + r.w) - x), h = snapH(snap(r.y + r.h) - y);
    let parent = containerFor({ x, y, w, h });
    // Drawing a peer next to a Fill item in a horizontal / grid stack: the empty Fill item
    // stretches over the free space, so a similarly tall rectangle means "sibling", not "nest".
    if (parent && parent.parent && !childrenOf(parent.id).length && parent.sizeW === 'fill') {
      const gp = byId(parent.parent);
      if (gp && gp.layout.dir !== 'column' && h >= rectOf(parent.id).h * 0.6) parent = gp;
    }
    if (!parent) {
      // a top-level card's drawn edges snap to the layout grid
      const L = gridLines(), gx = [], gy = [];
      const x1 = snapEdge(r.x, L.starts, gx), x2 = snapEdge(r.x + r.w, L.ends, gx);
      const y1 = snapEdge(r.y, L.ys, gy), y2 = snapEdge(r.y + r.h, L.ys, gy);
      if (x2 - x1 >= SNAP * 3) { x = x1; w = x2 - x1; }
      if (gx.length) {
        const tmp = { type: 'card', parent: null, x, w, sizeW: 'fixed' };
        snapToColumns(tmp);
        x = tmp.x; w = tmp.w;
        gx.splice(0, gx.length, x, x + w);
      }
      if (y2 - y1 >= SNAP * 3) { y = y1; h = snapH(y2 - y1); }
      createGuides = [gx, gy];
    }
    const rect = { x, y, w, h };
    const card = {
      id: uid(), type: 'card', parent: parent ? parent.id : null, x, y, w, h,
      fill: '--color-white', border: 'secondary', radius: 'lg', elevation: 'none',
      layout: PS.defaultLayout(), sizeW: 'fixed', sizeH: 'fixed',
    };
    // siblings fully enclosed by the drawn rectangle become the card's stack items
    const enclosed = childrenOf(card.parent).map((e) => ({ e, r: rectOf(e.id) })).filter((o) => rectInside(o.r, rect));
    if (enclosed.length >= 2) {
      const xs = enclosed.map((o) => o.r.x + o.r.w / 2), ys = enclosed.map((o) => o.r.y + o.r.h / 2);
      if (Math.max(...xs) - Math.min(...xs) > Math.max(...ys) - Math.min(...ys)) card.layout.dir = 'row';
    }
    if (parent) {
      // inside a stack: share the space (Fill); the drawn size only sets the height
      const row = parent.layout.dir !== 'column';
      card.sizeW = 'fill';
      card.sizeH = row ? 'fill' : 'fixed';
      if (parent.layout.dir === 'grid') card.sizeH = 'fixed';
      if (enclosed.length) card.sizeH = row ? 'fill' : 'hug';
    }
    if (!parent) bindToColumns(card);
    const center = { x: x + w / 2, y: y + h / 2 };
    const index = parent ? insertionIndex(parent, center) : 0;
    mutate(() => {
      if (parent) {
        const firstEnclosed = enclosed.length ? childrenOf(parent.id).indexOf(enclosed[0].e) : -1;
        placeInto(card, parent, firstEnclosed >= 0 ? firstEnclosed : index);
      } else {
        const firstIdx = enclosed.length ? Math.min(...enclosed.map((o) => doc.elements.indexOf(o.e))) : -1;
        if (firstIdx >= 0) doc.elements.splice(firstIdx, 0, card); else doc.elements.push(card);
      }
      const row = card.layout.dir === 'row';
      enclosed.sort((a, b) => (row ? a.r.x - b.r.x : a.r.y - b.r.y))
        .forEach((o) => placeInto(o.e, card, Infinity));
      ui.selectedId = card.id;
    });
    if (createGuides && (createGuides[0].length || createGuides[1].length)) flashGuides(createGuides[0], createGuides[1]);
    const node = nodes.get(card.id);
    if (node) { node.classList.add('el--enter'); setTimeout(() => node.classList.remove('el--enter'), 400); }
  }

  function createTextAt(pt, cx, cy, defer = true) {
    blurEditing();
    const under = document.elementFromPoint(cx, cy);
    const cardNode = under && under.closest && under.closest('.el-card');
    const parent = cardNode ? byId(cardNode.dataset.id) : null;
    const lvl = PS.level(ui.lastLevel);
    const before = snapDoc();
    const el = { id: uid(), type: 'text', parent: null, x: snap(pt.x), y: snap(pt.y - lvl.line / 2), text: '', level: lvl.id, color: 'primary' };
    el.color = isDark(surfaceUnder(parent && parent.id)) ? 'inverse' : 'primary';
    if (parent) placeInto(el, parent, insertionIndex(parent, pt));
    else doc.elements.push(el);
    ui.selectedId = el.id;
    if (defer) holdPanels();                 // a tap-made text box shows its toolbar after the tap delay
    render();
    editSnapshot = before;
    nodes.get(el.id).firstChild.focus();
  }

  /* A drawn horizontal line makes a text box, inside a card or out on the canvas.
   * Out on the canvas it spans whole grid columns, never fewer than two, bound to them. */
  function createTextFromLine(line) {
    blurEditing();
    const lvl = PS.level(ui.lastLevel);
    const mid = (line.x1 + line.x2) / 2;
    const parent = containerFor({ x: mid, y: line.y, w: 0, h: 0 });
    const before = snapDoc();
    const el = { id: uid(), type: 'text', parent: null, x: 0, y: snap(line.y - lvl.line / 2), text: '', level: lvl.id, color: 'primary' };
    el.color = isDark(surfaceUnder(parent && parent.id)) ? 'inverse' : 'primary';
    if (parent) {
      placeInto(el, parent, insertionIndex(parent, { x: mid, y: line.y }));
    } else {
      const L = gridLines();
      const nearIdx = (v, arr) => arr.reduce((bi, b, i) => (Math.abs(b - v) < Math.abs(arr[bi] - v) ? i : bi), 0);
      let s0 = nearIdx(line.x1, L.colStarts), e0 = nearIdx(line.x2, L.colEnds);
      if (e0 < s0 + 1) {              // at least two columns
        e0 = Math.min(L.n - 1, s0 + 1);
        s0 = Math.max(0, e0 - 1);
      }
      el.x = L.colStarts[s0];
      el.w = L.colEnds[e0] - el.x;
      el.sizeW = 'cols';
      el.col = { start: s0, end: e0, of: L.n };
      doc.elements.push(el);
    }
    ui.selectedId = el.id;
    ui.panelHidden = false;
    render();
    editSnapshot = before;
    const edit = nodes.get(el.id).firstChild;
    edit.focus();
    toast(parent ? 'Text added. Write in it' : `Text added across ${el.col.end - el.col.start + 1} columns. Write in it`);
  }

  /* ─────────────── Text editing ─────────────── */
  /* Enter editing with the caret at the END of the text. */
  function focusAtEnd(edit) {
    if (!edit) return;
    if (document.activeElement !== edit) edit.focus({ preventScroll: true });
    const last = edit.lastChild;
    const sel = getSelection();
    if (last && last.nodeType === 3) sel.setBaseAndExtent(last, last.length, last, last.length);
    else { const r = document.createRange(); r.selectNodeContents(edit); r.collapse(false); sel.removeAllRanges(); sel.addRange(r); }
  }
  /* Text position under a point, clamped to the given editable. */
  function caretAt(edit, x, y) {
    let r = null;
    if (document.caretRangeFromPoint) r = document.caretRangeFromPoint(x, y);
    else if (document.caretPositionFromPoint) { const p = document.caretPositionFromPoint(x, y); if (p) { r = document.createRange(); r.setStart(p.offsetNode, p.offset); r.collapse(true); } }
    if (r && edit.contains(r.startContainer)) return { node: r.startContainer, offset: r.startOffset };
    // outside the text: before it (above / left) or after it
    const b = edit.getBoundingClientRect();
    const end = !(y < b.top + 4 || (y < b.bottom && x < b.left + 4));
    const t = document.createRange(); t.selectNodeContents(edit); t.collapse(!end);
    return { node: t.startContainer, offset: t.startOffset };
  }
  function blurEditing() {
    const a = document.activeElement;
    if (a && a.classList && a.classList.contains('el-text__edit')) a.blur();
  }
  elementsEl.addEventListener('focusin', (e) => {
    const node = e.target.closest('.el-text');
    if (!node) return;
    ui.editingId = node.dataset.id;
    ui.selectedId = node.dataset.id;
    if (editSnapshot == null) editSnapshot = snapDoc();
    ui.panelHidden = false;
    node.classList.add('is-editing');
    if (!(inspectorEl.classList.contains('is-open') && inspectorEl.dataset.forId === node.dataset.id) && !ui.panelDeferred) holdPanels();
    renderElements();
    renderSelection();
    renderInspector();
  });
  elementsEl.addEventListener('input', (e) => {
    const node = e.target.closest('.el-text');
    const el = node && byId(node.dataset.id);
    if (!el) return;
    el.text = e.target.innerText.replace(/\n$/, '');
    node.classList.toggle('is-empty', !el.text && !isBox(el));
    renderSelection();
    positionInspector();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 300);
  });
  elementsEl.addEventListener('focusout', (e) => {
    const node = e.target.closest('.el-text');
    if (!node) return;
    node.classList.remove('is-editing');
    { const sel = getSelection(); if (sel.anchorNode && e.target.contains(sel.anchorNode)) sel.removeAllRanges(); }
    const el = byId(node.dataset.id);
    ui.editingId = null;
    if (el) {
      el.text = e.target.innerText.replace(/\n$/, '').replace(/ /g, ' ');
      if (!el.text.trim() && !isBox(el)) {
        doc.elements = doc.elements.filter((x) => x.id !== el.id);
        if (ui.selectedId === el.id) ui.selectedId = null;
      }
    }
    if (editSnapshot != null && editSnapshot !== snapDoc()) { past.push(editSnapshot); future = []; }
    editSnapshot = null;
    render();
  });

  /* ─────────────── Pointer input ─────────────── */
  const pointers = new Map();
  let gesture = null;
  let spaceDown = false;
  let lastTap = { id: null, t: 0 };
  const dropMarker = document.createElement('div');
  dropMarker.className = 'drop-marker';

  function roleFor(e) {
    if (ui.selectedId && e.target.closest && e.target.closest('[data-handle]')) return 'nav';   // resize handles work in any tool
    if (e.pointerType === 'pen') return ui.tool === 'select' ? 'nav' : 'draw';
    if (e.pointerType === 'mouse') return ui.tool === 'select' || spaceDown || e.button === 1 ? 'nav' : 'draw';
    // finger: draws in Draw mode, except on text (tap = edit / place caret) 
    const onText = e.target.closest && e.target.closest('.el-text');
    return ui.fingerDraws && ui.tool === 'draw' && !onText ? 'draw' : 'nav';
  }
  function syncFingerMode() {
    viewportEl.dataset.fingerDraw = ui.fingerDraws && ui.tool === 'draw' ? '1' : '0';
    $('fingerState').textContent = ui.fingerDraws ? 'On' : 'Off';
  }
  const pressure = (e) => (e.pointerType === 'pen' ? e.pressure || 0.5 : 0.5);

  viewportEl.addEventListener('pointerdown', (e) => {
    if (e.button === 2) return;
    closeMenu();
    dismissChoice();
    dismissAdd();
    dismissAssetPicker();
    if (colorPop.classList.contains('is-open')) { closeColor(); if (e.pointerType !== 'pen') return; }
    const role = roleFor(e);
    const editable = e.target.closest('.el-text__edit');
    const abHandle = e.target.closest('[data-ab-handle]');
    if (ui.abEdit && !abHandle) { closeArtboardEdit(); if (e.pointerType !== 'pen') return; }

    const frame = e.target.closest('[data-move-frame]');
    const editingHere = editable && document.activeElement === editable;
    // tapping the text being edited brings a closed toolbar back
    if (editingHere && ui.panelHidden && e.pointerType !== 'mouse') { ui.panelHidden = false; renderInspector(); }
    // Mouse inside the text being edited: native caret / selection
    if (editingHere && e.pointerType === 'mouse') return;
    // Pencil / mouse on a text box: hand over to the browser (Scribble, caret).
    if (role === 'draw' && editable && !abHandle && !editingHere) return;
    if (editingHere && e.pointerType === 'pen') return;   // Pencil writing into text (Scribble) in any tool

    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, type: e.pointerType });
    e.preventDefault();

    const touches = [...pointers.values()].filter((p) => p.type === 'touch');
    if (e.pointerType === 'touch' && touches.length === 2) {
      if (gesture && (gesture.kind === 'move' || gesture.kind === 'resize' || gesture.kind === 'artboard') && gesture.moved) restore(gesture.before);
      if (gesture && gesture.kind === 'draw') gesture.path.remove();
      dropMarker.remove();
      // two fingers: the browser scrolls natively, except while finger drawing blocks it (then we scroll by hand)
      const [a, b] = touches;
      gesture = { kind: 'pinch', manual: ui.fingerDraws && ui.tool === 'draw', c0: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }, s0: { left: viewportEl.scrollLeft, top: viewportEl.scrollTop } };
      return;
    }
    // a lost pointerup (e.g. the OS took the touch) must not block the next stroke
    if (gesture && e.pointerType !== 'touch' && gesture.kind !== 'pinch') {
      if (gesture.kind === 'draw') gesture.path.remove();
      const n = gesture.elId && nodes.get(gesture.elId);
      if (n) { n.classList.remove('is-dragging'); n.style.transform = ''; }
      pointers.delete(gesture.id);
      gesture = null;
    }
    if (gesture) return;

    try { viewportEl.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    const pt = toArtboard(e.clientX, e.clientY);

    // artboard resize handles work with any input
    if (abHandle) {
      blurEditing();
      gesture = { kind: 'artboard', id: e.pointerId, edge: abHandle.dataset.abHandle, start: pt, sx: e.clientX, w0: doc.artboard.w, h0: doc.artboard.h, before: snapDoc(), moved: false };
      return;
    }

    if (role === 'draw' && !frame) {
      blurEditing();
      clearTimeout(pending.timer);
      if (pending.strokes.length) {
        const b = pendingBounds(), m = 160;
        if (pt.x < b.x1 - m || pt.x > b.x2 + m || pt.y < b.y1 - m || pt.y > b.y2 + m) flushPending();
      }
      const path = document.createElementNS(SVGNS, 'path');
      inkEl.appendChild(path);
      gesture = { kind: 'draw', id: e.pointerId, pts: [{ ...pt, p: pressure(e) }], path, t0: performance.now(), sx: e.clientX, sy: e.clientY, travel: 0 };
      drawPath();
      return;
    }

    // Finger inside the text being edited: tap = place caret there, drag = select text
    if (editingHere && e.pointerType === 'touch') {
      const a = caretAt(editable, e.clientX, e.clientY);
      gesture = { kind: 'textsel', id: e.pointerId, edit: editable, anchor: a, sx: e.clientX, sy: e.clientY };
      getSelection().setBaseAndExtent(a.node, a.offset, a.node, a.offset);
      return;
    }
    // The frame around selected text moves it (any input)
    if (frame && ui.selectedId) {
      gesture = { kind: 'move', id: e.pointerId, elId: ui.selectedId, draggable: true, start: pt, sx: e.clientX, sy: e.clientY, rect0: rectOf(ui.selectedId), before: snapDoc(), moved: false, target: null, fromFrame: true };
      return;
    }
    const handle = e.target.closest('[data-handle]');
    const elNode = e.target.closest('.el');
    if (handle && ui.selectedId) {
      const el = byId(ui.selectedId);
      gesture = { kind: 'resize', id: e.pointerId, handle: handle.dataset.handle, start: pt, orig: { ...el, ...(el.parent ? {} : { x: el.x, y: el.y }) }, rect0: rectOf(el.id), before: snapDoc(), moved: false };
      return;
    }
    if (elNode) {
      const draggable = e.pointerType !== 'touch' || elNode.dataset.id === ui.selectedId;
      gesture = { kind: 'move', draggable, id: e.pointerId, elId: elNode.dataset.id, start: pt, sx: e.clientX, sy: e.clientY, rect0: rectOf(elNode.dataset.id), before: snapDoc(), moved: false, target: null };
      return;
    }
    gesture = { kind: 'tapOrPan', id: e.pointerId, sx: e.clientX, sy: e.clientY, v0: { ...view }, moved: false, pt };
  });

  function drawPath() { gesture.path.setAttribute('d', PS.strokePath(gesture.pts, 3.4 / view.s)); }

  /* drop target while dragging: deepest card under the finger (not the dragged subtree) */
  function updateDropTarget(g, cx, cy, pt) {
    const under = document.elementFromPoint(cx, cy);
    const cardNode = under && under.closest && under.closest('.el-card');
    const card = cardNode ? byId(cardNode.dataset.id) : null;
    if (!card || card.id === g.elId) { g.target = null; dropMarker.remove(); return; }
    const index = insertionIndex(card, pt, g.elId);
    g.target = { card, index };
    // marker between stack items
    const row = card.layout.dir !== 'column';
    const sibs = childrenOf(card.id).filter((s) => s.id !== g.elId);
    const cr = rectOf(card.id), gap = PS.spacePx(card.layout.gap);
    const px = PS.spacePx(card.layout.padX), py = PS.spacePx(card.layout.padY);
    let m;
    if (!sibs.length) m = row ? { x: cr.x + px, y: cr.y + py, w: 0, h: cr.h - py * 2 } : { x: cr.x + px, y: cr.y + py, w: cr.w - px * 2, h: 0 };
    else if (index < sibs.length) {
      const r = rectOf(sibs[index].id);
      m = row ? { x: r.x - gap / 2, y: r.y, w: 0, h: r.h } : { x: r.x, y: r.y - gap / 2, w: r.w, h: 0 };
    } else {
      const r = rectOf(sibs[sibs.length - 1].id);
      m = row ? { x: r.x + r.w + gap / 2, y: r.y, w: 0, h: r.h } : { x: r.x, y: r.y + r.h + gap / 2, w: r.w, h: 0 };
    }
    dropMarker.classList.toggle('is-row', row);
    Object.assign(dropMarker.style, { left: m.x + 'px', top: m.y + 'px', width: m.w + 'px', height: m.h + 'px' });
    if (!dropMarker.parentNode) selectionEl.appendChild(dropMarker);
  }

  viewportEl.addEventListener('pointermove', (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, type: e.pointerType });
    if (!gesture) return;

    if (gesture.kind === 'pinch') {
      if (gesture.manual) {
        const t2 = [...pointers.values()].filter((p) => p.type === 'touch');
        if (t2.length >= 2) {
          const c = { x: (t2[0].x + t2[1].x) / 2, y: (t2[0].y + t2[1].y) / 2 };
          viewportEl.scrollTop = gesture.s0.top - (c.y - gesture.c0.y);
          viewportEl.scrollLeft = gesture.s0.left - (c.x - gesture.c0.x);
        }
      }
      return;
    }
    if (e.pointerId !== gesture.id) return;
    const g = gesture;

    if (g.kind === 'draw') {
      const evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
      for (const ev of evs.length ? evs : [e]) g.pts.push({ ...toArtboard(ev.clientX, ev.clientY), p: pressure(ev) });
      g.travel = Math.max(g.travel, Math.hypot(e.clientX - g.sx, e.clientY - g.sy));
      drawPath();
      return;
    }
    if (g.kind === 'textsel') {
      if (Math.hypot(e.clientX - g.sx, e.clientY - g.sy) < 4 && !g.moved) return;
      g.moved = true;
      const f = caretAt(g.edit, e.clientX, e.clientY);
      getSelection().setBaseAndExtent(g.anchor.node, g.anchor.offset, f.node, f.offset);
      return;
    }
    if (g.kind === 'tapOrPan') {
      if (Math.hypot(e.clientX - g.sx, e.clientY - g.sy) > 6) g.moved = true; // the page scrolls natively
      return;
    }
    const pt = toArtboard(e.clientX, e.clientY);
    if (g.kind === 'artboard') {
      g.moved = true;
      const maxW = Math.floor(viewportEl.clientWidth / view.s);
      const w = clamp(snap(g.w0 + (2 * (e.clientX - g.sx)) / view.s), ARTBOARD_MIN, maxW);
      if (w >= maxW && view.s === 1) { doc.artboard.preset = 'full'; doc.artboard.w = maxW; }
      else setArtboardSize(w);
      renderArtboard(); fit(); renderElements(); renderSelection();
      $('abKnob').classList.add('is-dragging');
      return;
    }
    if (g.kind === 'move') {
      if (!g.moved && Math.hypot(e.clientX - g.sx, e.clientY - g.sy) < 6) return;
      if (!g.draggable) { g.scrolled = true; return; }
      const node = nodes.get(g.elId);
      if (!g.moved) { g.moved = true; blurEditing(); ui.selectedId = g.elId; node.classList.add('is-dragging'); hideInspector(); selectionEl.innerHTML = ''; }
      const dx = pt.x - g.start.x, dy = pt.y - g.start.y;
      const el = byId(g.elId);
      updateDropTarget(g, e.clientX, e.clientY, pt);
      let sdx = dx, sdy = dy;
      const gx = [], gy = [];
      if (!g.target) {
        // landing on the artboard: snap to the layout grid, else to 8px
        const r = g.rect0, L = gridLines();
        if (boxLike(el)) {
          sdx = snapSpan(r.x + dx, r.x + r.w + dx, L.starts, gx, L.ends) - r.x;
          sdy = snapSpan(r.y + dy, r.y + r.h + dy, L.ys, gy) - r.y;
        } else {
          sdx = snapEdge(r.x + dx, L.starts, gx) - r.x;
          sdy = snap(r.y + dy) - r.y;
        }
      }
      showGuides(gx, gy);
      node.style.transform = `translate(${sdx}px, ${sdy}px)`;
      g.dx = sdx; g.dy = sdy;
      return;
    }
    if (g.kind === 'resize') {
      g.moved = true;
      const el = byId(g.orig.id), o = g.rect0, min = SNAP * 3;
      const dx = pt.x - g.start.x, dy = pt.y - g.start.y;
      if (!el.parent) {
        let x1 = Math.round(o.x), y1 = Math.round(o.y), x2 = Math.round(o.x + o.w), y2 = Math.round(o.y + o.h);
        const L = gridLines(), gx = [], gy = [];
        if (g.handle.includes('w')) x1 = Math.min(snapEdge(o.x + dx, L.starts, gx), x2 - min);
        if (g.handle.includes('e')) x2 = Math.max(snapEdge(o.x + o.w + dx, L.ends, gx), x1 + min);
        if (g.handle.includes('n')) y1 = Math.min(snapEdge(o.y + dy, L.ys, gy), y2 - min);
        if (g.handle.includes('s')) y2 = Math.max(snapEdge(o.y + o.h + dy, L.ys, gy), y1 + min);
        if (el.type === 'asset' && el.lock !== false) {
          // ratio locked: the corner you drag sets the width (whichever way you pull), the height follows
          const east = g.handle.includes('e'), south = g.handle.includes('s');
          const wx = o.w + (east ? dx : -dx), wy = (o.h + (south ? dy : -dy)) * (el.ratio || 1);
          const w = Math.max(min, Math.abs(dx) >= Math.abs(dy) * (el.ratio || 1) ? wx : wy);
          if (east) x2 = snapEdge(x1 + w, L.ends, gx); else x1 = snapEdge(x2 - w, L.starts, gx);
          const h2 = Math.max(min, Math.round((x2 - x1) / (el.ratio || 1)));
          if (g.handle.includes('n')) y1 = y2 - h2; else y2 = y1 + h2;
        } else {
          // heights land on the 24px rhythm; the edge opposite the dragged handle stays put
          const hh = snapH(y2 - y1);
          if (g.handle.includes('n')) y1 = y2 - hh; else y2 = y1 + hh;
        }
        Object.assign(el, { x: x1, y: y1, w: x2 - x1, h: y2 - y1, sizeW: el.sizeW === 'cols' ? 'cols' : 'fixed', sizeH: 'fixed' });
        if (el.sizeW === 'cols') { el.sizeW = 'fixed'; el.lockW = false; bindToColumns(el); }
        renderElements(); renderSelection(); hideInspector(); showGuides(gx, gy);
        return;
      } else {
        if (el.type === 'asset' && el.lock !== false) {
          const w = Math.abs(dx) >= Math.abs(dy) * (el.ratio || 1) ? o.w + dx : (o.h + dy) * (el.ratio || 1);
          el.w = Math.max(min, Math.round(w)); el.sizeW = 'fixed'; syncAssetH(el);
        } else {
          if (Math.abs(dx) >= SNAP / 2) { el.w = Math.max(min, snap(o.w + dx)); el.sizeW = 'fixed'; }
          if (Math.abs(dy) >= SNAP / 2) { el.h = snapH(o.h + dy); el.sizeH = 'fixed'; }
        }
      }
      renderElements(); renderSelection(); hideInspector();
    }
  });

  function endPointer(e, cancelled) {
    if (!pointers.has(e.pointerId)) return;
    pointers.delete(e.pointerId);
    if (e.pointerId === dblPointerId) {                               // this release completed a double tap: nothing else may happen
      dblPointerId = null;
      if (gesture && gesture.kind === 'draw') gesture.path.remove();
      if (gesture && gesture.elId && nodes.get(gesture.elId)) { const nd = nodes.get(gesture.elId); nd.classList.remove('is-dragging'); nd.style.transform = ''; }
      gesture = null;
      dropMarker.remove();
      return;
    }
    if (!gesture) return;
    if (gesture.kind === 'pinch') {
      if ([...pointers.values()].filter((p) => p.type === 'touch').length < 2) { gesture = null; pointers.clear(); }
      return;
    }
    if (e.pointerId !== gesture.id) return;
    const g = gesture;
    gesture = null;
    dropMarker.remove();

    if (g.kind === 'textsel') return; // caret / selection already set
    if (g.kind === 'draw') {
      if (cancelled) { g.path.remove(); return; }
      if (g.travel < 6 && performance.now() - g.t0 < 400) {
        g.path.remove();
        flushPending();
        createTextAt(g.pts[0], e.clientX, e.clientY);
        return;
      }
      pending.strokes.push(g.pts);
      pending.paths.push(g.path);
      // wait longer when this looks like the start of a rectangle (an L, a U, two parallel sides)
      const done = PS.recognizePlus(pending.strokes) || PS.recognize(pending.strokes).type === 'rect' || PS.recognizeButton(pending.strokes);
      pending.timer = setTimeout(flushPending, !done && PS.looksPartialRect(pending.strokes) ? 1300 : 700);
      return;
    }
    if (g.kind === 'tapOrPan') {
      if (g.moved && !cancelled && e.pointerType === 'pen' && ui.tool === 'select') toast('Arrow is active. Tap the pencil icon to draw');
      if (g.moved || cancelled) return;
      const a = doc.artboard;
      const onArtboard = g.pt.x >= 0 && g.pt.y >= 0 && g.pt.x <= a.w && g.pt.y <= a.h;
      if (ui.selectedId || ui.editingId) { blurEditing(); select(null); return; }
      if (onArtboard) {
        const cx = e.clientX, cy = e.clientY;
        deferPanel(() => { if (!ui.selectedId && !addMenuEl.classList.contains('is-open')) openColor({ kind: 'artboard' }, cx, cy); });
      }
      return;
    }
    if (g.kind === 'artboard') {
      $('abKnob').classList.remove('is-dragging');
      if (!g.moved) return;
      if (cancelled) { restore(g.before); return; }
      past.push(g.before); future = [];
      render();
      return;
    }
    if (g.kind === 'move') {
      const node = nodes.get(g.elId);
      if (node) { node.classList.remove('is-dragging'); node.style.transform = ''; }
      if ((cancelled || g.scrolled) && !g.moved) return;
      if (!g.moved) {
        const now = performance.now();
        const el = byId(g.elId);
        if (el.type === 'text' && !g.fromFrame && el.variant !== 'tabs') { selectDeferred(g.elId); focusAtEnd(nodes.get(el.id).firstChild); }
        else { blurEditing(); selectDeferred(g.elId); }
        lastTap = { id: g.elId, t: now };
        return;
      }
      if (cancelled) { restore(g.before); return; }
      const el = byId(g.elId);
      past.push(g.before); future = [];
      if (g.target) {
        placeInto(el, g.target.card, g.target.index);
        if (el.type === 'text') { delete el.w; delete el.col; el.sizeW = 'fill'; }
        if (el.type === 'asset' && el.sizeW === 'cols') el.sizeW = 'fixed';
        if (el.type === 'card') {
          // in a stack, cards share the space unless their width was set to Fixed
          if (!el.lockW || el.sizeW === 'cols') { el.sizeW = 'fill'; el.lockW = false; }
          if (g.target.card.layout.dir === 'row' && el.sizeH === 'fixed') el.sizeH = 'fill';
        }
      } else {
        const r = g.rect0;
        const wasChild = !!el.parent;
        if (responsive.has(el.id)) { el.x = Math.round(el.x + g.dx); el.y = Math.round(el.y + g.dy); }
        else { el.x = Math.round(r.x + g.dx); el.y = Math.round(r.y + g.dy); }
        if (el.type === 'card' && wasChild) { el.w = snap(r.w); el.h = snapH(r.h); el.sizeW = 'fixed'; el.sizeH = el.sizeH === 'hug' ? 'hug' : 'fixed'; }
        if (el.type === 'asset' && wasChild) { el.w = Math.round(r.w); el.h = Math.round(r.h); el.sizeW = 'fixed'; }
        if (wasChild) placeInto(el, null, Infinity);
        if (colBound(el)) { if (el.sizeW === 'cols') el.sizeW = 'fixed'; snapToColumns(el); bindToColumns(el); syncAssetH(el); }
      }
      render();
      return;
    }
    if (g.kind === 'resize') {
      if (!g.moved) return;
      if (cancelled) { restore(g.before); return; }
      past.push(g.before); future = [];
      const rel = byId(g.orig.id);
      if (rel && !rel.parent) {
        const bottom = rel.y + rel.h;
        rel.lockW = false; if (rel.sizeW === 'cols') rel.sizeW = 'fixed'; snapToColumns(rel); bindToColumns(rel); syncAssetH(rel);
        if (rel.type === 'asset' && rel.lock !== false && g.handle.includes('n')) rel.y = bottom - rel.h;   // a top handle keeps the bottom edge
      }
      render();
    }
  }
  viewportEl.addEventListener('pointerup', (e) => endPointer(e, false));
  viewportEl.addEventListener('pointercancel', (e) => endPointer(e, true));

  // Keep a finger tap on a text box from focusing it (finger = select, Pencil = write).
  let touchStartPt = null;
  viewportEl.addEventListener('touchend', (e) => {
    const t = e.changedTouches[0];
    const editable = e.target.closest && e.target.closest('.el-text__edit');
    if (editable && t && t.touchType !== 'stylus') {
      if (document.activeElement !== editable) {
        // finger tap on text: edit with the caret at the end (focus inside the touch gesture so the keyboard opens)
        e.preventDefault();
        const moved = touchStartPt && Math.hypot(t.clientX - touchStartPt.x, t.clientY - touchStartPt.y) > 8;
        if (!moved && ui.selectedId === editable.closest('.el').dataset.id) focusAtEnd(editable);
      } else e.preventDefault(); // our own caret / selection handling
    }
  }, { passive: false });
  document.addEventListener('gesturestart', (e) => e.preventDefault());

  // Native scrolling. Block it only where a touch is ours: Pencil drawing, dragging the
  // selected item or a handle. Fingers elsewhere scroll the page like any web page.
  viewportEl.addEventListener('touchstart', (e) => {
    const t = e.changedTouches[0];
    if (!t || !e.target.closest) return;
    const stylus = t.touchType === 'stylus';
    if (stylus && e.target.closest('.el-text__edit')) return; // Scribble
    const onText = !!e.target.closest('.el-text');
    const drawing = ui.tool === 'draw' && (stylus || (ui.fingerDraws && !onText));
    const sel = e.target.closest('.el');
    const ed = e.target.closest('.el-text__edit');
    const ours = e.target.closest('[data-handle], [data-ab-handle], [data-move-frame]') || (sel && sel.dataset.id === ui.selectedId) || (ed && document.activeElement === ed);
    touchStartPt = { x: t.clientX, y: t.clientY };
    if (drawing || (ours && e.touches.length === 1)) e.preventDefault();
  }, { passive: false });
  viewportEl.addEventListener('wheel', (e) => { if (e.ctrlKey || e.metaKey) e.preventDefault(); }, { passive: false }); // no zoom gestures
  viewportEl.addEventListener('scroll', () => positionInspector(), { passive: true });

  /* ─────────────── Selection, text toolbar, card panel ─────────────── */
  /* Settings panels (card panel, text toolbar, background color panel) open a moment after a TAP,
   * so a double tap goes straight to the Add menu without any settings panel flashing open. */
  let panelTimer = null;
  const panelDelay = () => (ui.panelDelay === undefined ? 380 : ui.panelDelay);
  function deferPanel(fn) {
    clearTimeout(panelTimer);
    const d = panelDelay();
    if (d > 0) panelTimer = setTimeout(fn, d); else fn();
  }
  function holdPanels() {                                    // hide the selected element's panel; show it after the delay
    if (panelDelay() <= 0) return;
    ui.panelDeferred = true;
    deferPanel(() => { ui.panelDeferred = false; renderInspector(); });
  }
  function cancelPendingPanels() {
    clearTimeout(panelTimer);
    ui.panelDeferred = false;
  }
  function selectDeferred(id) {                              // selection frame now, panel after the delay
    ui.panelHidden = false;
    ui.selectedId = id;
    if (panelDelay() > 0) ui.panelDeferred = true;
    renderElements();
    renderSelection();
    renderInspector();
    holdPanels();
  }
  /* Selecting (or tapping the already selected card again) always shows its panel. */
  function select(id) {
    cancelPendingPanels();
    ui.panelHidden = false;
    ui.selectedId = id;
    renderElements();
    renderSelection();
    renderInspector();
  }
  function hideInspector() { inspectorEl.classList.remove('is-open'); }

  function chip(label, active, onTap, title, disabled) {
    const wrap = document.createElement('div');
    wrap.className = 'button small ' + (active ? 'is-current' : 'gost');
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = label;
    if (title) b.title = title;
    b.disabled = !!disabled;
    b.setAttribute('aria-pressed', active ? 'true' : 'false');
    b.addEventListener('click', onTap);
    wrap.appendChild(b);
    return wrap;
  }
  function chips(options, value, onPick, disabledIds = []) {
    const row = document.createElement('div');
    row.className = 'chips';
    options.forEach((o) => row.appendChild(chip(o.icon ? `${o.icon} ${o.label}` : o.label, o.id === value, () => onPick(o.id), o.title, disabledIds.includes(o.id))));
    return row;
  }
  function field(label, ...children) {
    const g = document.createElement('div');
    g.className = 'field';
    const l = document.createElement('span');
    l.className = 'field__label';
    l.textContent = label;
    g.appendChild(l);
    const c = document.createElement('div');
    c.className = 'field__control';
    children.forEach((x) => c.appendChild(x));
    g.appendChild(c);
    return g;
  }
  function section(title, ...children) {
    const s = document.createElement('section');
    s.className = 'panel__section';
    const h = document.createElement('h4');
    h.className = 'panel__heading';
    h.textContent = title;
    s.appendChild(h);
    children.forEach((c) => s.appendChild(c));
    return s;
  }
  function selectCtl(label, options, value, onChange) {
    const s = document.createElement('select');
    s.className = 'select-sm';
    s.setAttribute('aria-label', label);
    options.forEach((o) => { const op = document.createElement('option'); op.value = o.id; op.textContent = o.long || o.label; s.appendChild(op); });
    s.value = value;
    if (options.some((o) => o.long)) {
      // show the short label while closed, the long one while choosing
      const short = () => [...s.options].forEach((op, i) => { op.textContent = String(options[i].id) === String(s.value) ? options[i].label : options[i].long; });
      short();
      s.addEventListener('focus', () => [...s.options].forEach((op, i) => { op.textContent = options[i].long; }));
      s.addEventListener('blur', short);
      s.addEventListener('change', short);
      const cur = options.find((o) => o.id === value);
      if (cur) s.title = cur.long;
    }
    s.addEventListener('change', () => onChange(s.value));
    return s;
  }
  // compact: the closed select shows px; the open list also names the Penta token
  const spaceOptions = () => PS.SPACING.map((t) => ({ id: t, label: `${PS.spacePx(t)}`, long: `${PS.spacePx(t)} · ${t.replace('--', '')}` }));
  /* several fields side by side in one row */
  function fieldRow(...fields) {
    const r = document.createElement('div');
    r.className = 'field-row';
    r.style.gridTemplateColumns = `repeat(${fields.length}, minmax(0, 1fr))`;
    fields.forEach((f) => r.appendChild(f));
    return r;
  }
  function numberCtl(label, value, onCommit, disabled, step) {
    const wrap = document.createElement('div');
    wrap.className = 'input num-input';
    const i = document.createElement('input');
    i.type = 'number';
    i.inputMode = 'numeric';
    i.min = String(step || 8);
    i.step = String(step || 8);
    i.value = Math.round(value);
    i.disabled = !!disabled;
    i.setAttribute('aria-label', label);
    i.addEventListener('change', () => { const v = parseInt(i.value, 10); if (v > 0) onCommit(v); });
    i.addEventListener('keydown', (e) => { if (e.key === 'Enter') i.blur(); });
    wrap.appendChild(i);
    return wrap;
  }
  function iconBtn(svg, label, onTap, cls = 'gost') {
    const wrap = document.createElement('div');
    wrap.className = `button small icon ${cls}`;
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', label);
    b.title = label;
    b.innerHTML = svg;
    b.addEventListener('click', onTap);
    wrap.appendChild(b);
    return wrap;
  }
  const GRIP = '<span class="grip" data-drag-handle title="Drag to move" aria-hidden="true"><svg width="10" height="16" viewBox="0 0 10 16" fill="currentColor"><circle cx="2.5" cy="3" r="1.3"/><circle cx="7.5" cy="3" r="1.3"/><circle cx="2.5" cy="8" r="1.3"/><circle cx="7.5" cy="8" r="1.3"/><circle cx="2.5" cy="13" r="1.3"/><circle cx="7.5" cy="13" r="1.3"/></svg></span>';
  const ICON_TRASH = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.5 4h11M6 4V2.5h4V4M4 4l.7 9.5h6.6L12 4" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  const ICON_DUP = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="8.5" height="8.5" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M11 3V2.5H2.5V11H3" stroke="currentColor" stroke-width="1.5"/></svg>';
  const ICON_UP = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 13V3M4 7l4-4 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const ICON_CLOSE = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';

  function renderInspector() {
    inspectorEl.innerHTML = '';
    panelEl.innerHTML = '';
    const el = ui.selectedId && byId(ui.selectedId);
    // a different element (e.g. a newly drawn card) brings the panel back
    if ((el ? el.id : null) !== ui.panelFor) { if (el) ui.panelHidden = false; ui.panelFor = el ? el.id : null; }
    if (el && ui.panelDeferred) { panelEl.classList.remove('is-open'); hideInspector(); return; }   // opens after the tap delay
    panelEl.classList.toggle('is-open', !!el && boxLike(el) && !ui.panelHidden);
    if (!el) { hideInspector(); return; }
    if (el.type === 'text') { if (ui.panelHidden) hideInspector(); else renderTextToolbar(el); }
    else { hideInspector(); (el.type === 'asset' ? renderAssetPanel : renderCardPanel)(el); }
    if (panelEl.dataset.moved && panelEl.classList.contains('is-open')) reclampOne(panelEl);
  }

  function renderTextToolbar(el) {
    inspectorEl.dataset.forId = el.id;
    const grip = document.createElement('span');
    grip.innerHTML = GRIP;
    inspectorEl.appendChild(grip.firstChild);
    const levels = document.createElement('div');
    levels.className = 'insp-chips';
    PS.TEXT_LEVELS.forEach((l) => levels.appendChild(chip(l.label, el.level === l.id, () => {
      ui.lastLevel = l.id;
      mutate(() => { el.level = l.id; });
    }, `${l.size}/${l.line}`)));
    const g = (label, ...c) => { const d = document.createElement('div'); d.className = 'insp-group'; if (label) { const s = document.createElement('span'); s.className = 'insp-label'; s.textContent = label; d.appendChild(s); } c.forEach((x) => d.appendChild(x)); return d; };
    if (el.variant === 'button') {
      inspectorEl.appendChild(g('Style', chips(PS.BTN_STYLES, el.btnStyle || 'solid', (v) => mutate(() => { el.btnStyle = v; }))));
      inspectorEl.appendChild(g('Size', chips(PS.BTN_SIZES, el.btnSize || 'big', (v) => mutate(() => { el.btnSize = v; btnApply(el); }))));
      inspectorEl.appendChild(g('Content', chips(PS.BTN_CONTENT, el.btnContent || 'label', (v) => mutate(() => {
        el.btnContent = v;
        if (v !== 'label' && !el.btnIcon) el.btnIcon = 'lib:star';
        btnApply(el);
      }))));
      if ((el.btnContent || 'label') !== 'label') {
        const wrap = document.createElement('div');
        wrap.className = 'button small border icon-pick';
        const b = document.createElement('button');
        b.type = 'button';
        b.title = 'Choose the icon';
        b.setAttribute('aria-label', 'Choose the icon');
        const prev = document.createElement('span');
        prev.className = 'btn-icon icon-pick__preview';
        const m = assetMeta(el.btnIcon);
        prev.style.setProperty('--icon', m ? `url("${m.src}")` : 'none');
        b.append(prev, document.createTextNode(' Icon…'));
        b.addEventListener('click', () => openAssetPicker(null, null, { iconFor: el.id }));
        wrap.appendChild(b);
        inspectorEl.appendChild(g(null, wrap));
      }
    } else if (el.variant === 'tabs') {
      const wrap = document.createElement('div');
      wrap.className = 'input tabs-input';
      const inp = document.createElement('input');
      inp.type = 'text';
      inp.value = (el.tabs || []).join(', ');
      inp.placeholder = 'Tab 1, Tab 2, Tab 3';
      inp.setAttribute('aria-label', 'Tab labels, separated by commas');
      inp.addEventListener('change', () => {
        const list = inp.value.split(',').map((x) => x.trim()).filter(Boolean).slice(0, 6);
        if (list.length < 2) { inp.value = el.tabs.join(', '); toast('Tabs need at least two labels'); return; }
        mutate(() => { el.tabs = list; if ((el.active || 0) >= list.length) el.active = 0; });
      });
      inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') inp.blur(); });
      wrap.appendChild(inp);
      inspectorEl.appendChild(g('Labels', wrap));
      inspectorEl.appendChild(g('Active', chips((el.tabs || []).map((t, i) => ({ id: i, label: String(i + 1), title: t })), el.active || 0, (v) => mutate(() => { el.active = v; }))));
    } else if (el.variant === 'input' || el.variant === 'select') {
      inspectorEl.appendChild(g('Type', chips([{ id: 'text', label: 'Text' }, { id: 'input', label: 'Input' }, { id: 'select', label: 'Select' }], el.variant, (v) => mutate(() => { if (v === 'text') { delete el.variant; el.color = 'primary'; } else el.variant = v; }))));
    } else if (false) {
      inspectorEl.appendChild(g('Type', chips([{ id: 'text', label: 'Text' }, { id: 'input', label: 'Input' }], 'input', (v) => { if (v === 'text') mutate(() => { delete el.variant; el.color = 'primary'; }); })));
    } else {
      inspectorEl.appendChild(g('Text', levels));
      inspectorEl.appendChild(g('Color', selectCtl('Text color', PS.TEXT_COLORS, el.color, (v) => mutate(() => { el.color = v; }))));
    }
    const tools = [iconBtn(ICON_DUP, 'Duplicate', () => duplicate(el.id)), iconBtn(ICON_TRASH, 'Delete', () => removeSelected())];
    if (el.parent) tools.unshift(iconBtn(ICON_UP, 'Select parent card', () => { blurEditing(); select(el.parent); }));
    // close hides the toolbar only: the text stays selected (and in editing, if it was)
    tools.push(iconBtn(ICON_CLOSE, 'Close toolbar', () => { ui.panelHidden = true; renderInspector(); }));
    inspectorEl.appendChild(g(null, ...tools));
    inspectorEl.classList.add('is-open');
    positionInspector();
  }

  /* ── flex property editor: icon groups like the browser DevTools flexbox editor ──
   * Icons are drawn for the row orientation; in a column stack they are transposed (CSS), so
   * justify-content / align-items always show the real direction. */
  const FI = (inner) => `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">${inner}</svg>`;
  const box = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1" fill="currentColor"/>`;
  const tick = (d) => `<path d="${d}" stroke="currentColor" stroke-width="1" opacity=".45"/>`;
  const items3 = (xs) => tick('M.7 2v12M15.3 2v12') + xs.map((x) => box(x, 4, 2, 8)).join('');
  const bars2 = (a, b) => tick('M1.5 .8h13M1.5 15.2h13') + box(4.5, a[0], 3, a[1]) + box(9.5, b[0], 3, b[1]);
  const FLEX_ICONS = {
    row: FI(box(2, 2.5, 4.5, 5.5) + box(9, 2.5, 4.5, 5.5) + '<path d="M2 12.5h11M10.4 10l3 2.5-3 2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>'),
    grid: FI(box(2, 2, 5, 5) + box(9, 2, 5, 5) + box(2, 9, 5, 5) + box(9, 9, 5, 5)),
    nowrap: FI(box(1.5, 4.5, 3.5, 7) + box(6.25, 4.5, 3.5, 7) + box(11, 4.5, 3.5, 7)),
    wrap: FI(box(1.5, 2, 3.5, 5) + box(6.25, 2, 3.5, 5) + box(11, 2, 3.5, 5) + box(1.5, 9, 3.5, 5) + box(6.25, 9, 3.5, 5)),
    'j-flex-start': FI(items3([1.5, 5, 8.5])),
    'j-center': FI(items3([3.5, 7, 10.5])),
    'j-flex-end': FI(items3([5, 8.5, 12])),
    'j-space-between': FI(items3([1.5, 7, 12.5])),
    'j-space-around': FI(items3([2.7, 7, 11.3])),
    'j-space-evenly': FI(items3([3.25, 7, 10.75])),
    'a-flex-start': FI(bars2([3, 9], [3, 5])),
    'a-center': FI(bars2([3.5, 9], [5.5, 5])),
    'a-flex-end': FI(bars2([4, 9], [8, 5])),
    'a-stretch': FI(bars2([3, 10], [3, 10])),
    'a-baseline': FI(tick('M1.5 14h13') + '<path d="M2 12.5L5 4l3 8.5M3.2 9.6h3.6M9.6 12.5L11.8 7l2.2 5.5M10.4 11h2.8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>'),
  };
  function flexGroup(key, prop, current, options, onPick, transpose) {
    const g = document.createElement('div');
    g.className = 'flex-group';
    const lab = document.createElement('div');
    lab.className = 'flex-group__label';
    lab.innerHTML = `<span class="prop">${prop}</span><span class="val">: ${current}</span>`;
    const row = document.createElement('div');
    row.className = 'flex-icons';
    options.forEach((o) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'flex-ic' + ((o.transpose !== undefined ? o.transpose : transpose) ? ' flex-t' : '');
      b.dataset.key = key;
      b.dataset.value = o.id;
      b.title = `${prop}: ${o.id}`;
      b.setAttribute('aria-label', `${prop}: ${o.id}`);
      b.setAttribute('aria-pressed', o.id === current ? 'true' : 'false');
      b.innerHTML = FLEX_ICONS[o.icon];
      b.addEventListener('click', () => onPick(o.id));
      row.appendChild(b);
    });
    g.append(lab, row);
    return g;
  }

  function renderAssetPanel(el) {
    const parent = el.parent ? byId(el.parent) : null;
    const set = (fn) => mutate(() => { fn(); syncAssetH(el); });
    const head = document.createElement('div');
    head.className = 'panel__head';
    head.dataset.dragHandle = '';
    const title = document.createElement('div');
    title.className = 'panel__titles';
    title.innerHTML = `${GRIP}<div class="panel__title">Asset</div><div class="panel__sub"></div>`;
    title.querySelector('.panel__sub').textContent = el.name || 'Image';
    const actions = document.createElement('div');
    actions.className = 'panel__actions';
    if (parent) actions.appendChild(iconBtn(ICON_UP, 'Select parent card', () => select(parent.id)));
    actions.appendChild(iconBtn(ICON_DUP, 'Duplicate', () => duplicate(el.id)));
    actions.appendChild(iconBtn(ICON_TRASH, 'Delete', () => removeSelected()));
    actions.appendChild(iconBtn(ICON_CLOSE, 'Close panel', () => { ui.panelHidden = true; renderInspector(); }));
    head.append(title, actions);
    panelEl.appendChild(head);

    const r = rectOf(el.id);
    const modes = parent ? [{ id: 'fixed', label: 'Fixed' }, { id: 'fill', label: 'Fill' }]
      : [{ id: 'cols', label: 'Columns', title: 'Span layout-grid columns; resizes with the artboard' }, { id: 'fixed', label: 'Fixed' }];
    const pick = (v) => set(() => {
      el.lockW = v === 'fixed';
      if (v === 'fixed') { el.w = Math.round(r.w); el.sizeW = 'fixed'; return; }
      if (v === 'cols') {
        const L2 = gridLines();
        const near = (val, arr) => arr.reduce((a, b) => (Math.abs(b - val) < Math.abs(a - val) ? b : a));
        el.x = near(el.x, L2.starts); const x2 = near(el.x + el.w, L2.ends.filter((e2) => e2 > el.x));
        el.w = x2 - el.x; el.sizeW = 'fixed'; bindToColumns(el); return;
      }
      el.sizeW = v;
    });
    const widthCtl = [chips(modes, el.sizeW === 'fill' || el.sizeW === 'cols' ? el.sizeW : 'fixed', pick)];
    if (el.sizeW === 'cols' && el.col) {
      const L2 = gridLines();
      const opts = [{ id: -1, label: 'Edge' }, ...L2.colStarts.map((_, i) => ({ id: i, label: String(i + 1) }))];
      const optsEnd = [...L2.colEnds.map((_, i) => ({ id: i, label: String(i + 1) })), { id: L2.n, label: 'Edge' }];
      const cur = colSpanRect(el.col);
      const s0 = cur.x === 0 ? -1 : L2.colStarts.indexOf(cur.x), e0 = cur.x + cur.w === doc.artboard.w ? L2.n : L2.colEnds.indexOf(cur.x + cur.w);
      const setSpan = (start, end) => set(() => { el.col = { start, end: Math.max(end, start === -1 ? 0 : start), of: L2.n }; });
      widthCtl.push(selectCtl('From column', opts, s0, (v) => setSpan(+v, e0)), selectCtl('To column', optsEnd, e0, (v) => setSpan(s0, +v)));
      const hint = document.createElement('span');
      hint.className = 'field__hint';
      hint.textContent = `${Math.round(el.w)} px · of ${L2.n} columns`;
      widthCtl.push(hint);
    } else {
      widthCtl.push(numberCtl('Width in px', el.sizeW === 'fill' ? r.w : el.w, (v) => set(() => { el.w = Math.max(24, v); el.sizeW = 'fixed'; el.lockW = true; }), el.sizeW === 'fill'));
    }
    const locked = el.lock !== false;
    panelEl.appendChild(section('Size',
      field('Width', ...widthCtl),
      field('Height', chips([{ id: 'lock', label: 'Keep ratio', title: 'Height follows the width' }, { id: 'free', label: 'Free' }], locked ? 'lock' : 'free',
        (v) => set(() => { if (v === 'lock') el.lock = true; else { el.h = Math.round(r.h); el.lock = false; } })),
      numberCtl('Height in px', locked ? r.h : el.h, (v) => set(() => { el.h = snapH(v); }), locked, RHYTHM)),
    ));
    const fitHint = document.createElement('span');
    fitHint.className = 'field__hint';
    fitHint.textContent = locked ? 'Fit only matters when the ratio is free' : '';
    panelEl.appendChild(section('Appearance',
      field('Fit', chips([{ id: 'contain', label: 'Contain' }, { id: 'cover', label: 'Cover' }, { id: 'fill', label: 'Stretch' }], el.fit || 'contain', (v) => set(() => { el.fit = v; })), fitHint),
      fieldRow(field('Radius', selectCtl('Corner radius', PS.RADII, el.radius || 'none', (v) => set(() => { el.radius = v; })))),
    ));
    const rep2 = document.createElement('div');
    rep2.className = 'button small border panel__replace';
    const rb = document.createElement('button');
    rb.type = 'button';
    rb.textContent = 'Replace image…';
    rb.addEventListener('click', () => openAssetPicker(null, el.id));
    rep2.appendChild(rb);
    panelEl.appendChild(rep2);
  }

  function renderCardPanel(el) {
    const L = el.layout;
    const parent = el.parent ? byId(el.parent) : null;
    const set = (fn) => mutate(fn);

    // header
    const head = document.createElement('div');
    head.className = 'panel__head';
    head.dataset.dragHandle = '';
    const title = document.createElement('div');
    title.className = 'panel__titles';
    const count = childrenOf(el.id).length;
    title.innerHTML = `${GRIP}<div class="panel__title">${parent ? 'Nested card' : 'Card'}</div><div class="panel__sub">${L.dir === 'grid' ? (L.gridMode === 'auto' ? `Auto-fit grid, min ${L.minVal || 200}${L.minUnit || 'px'}` : `Grid, ${L.cols || 2} columns`) : L.dir === 'row' ? 'Horizontal stack' : 'Vertical stack'} · ${count} item${count === 1 ? '' : 's'}</div>`;
    const actions = document.createElement('div');
    actions.className = 'panel__actions';
    if (parent) actions.appendChild(iconBtn(ICON_UP, 'Select parent card', () => select(parent.id)));
    actions.appendChild(iconBtn(ICON_DUP, 'Duplicate', () => duplicate(el.id)));
    actions.appendChild(iconBtn(ICON_TRASH, 'Delete', () => removeSelected()));
    // close hides the panel only: the card stays selected (handles, resize, drag)
    actions.appendChild(iconBtn(ICON_CLOSE, 'Close panel', () => { ui.panelHidden = true; renderInspector(); }));
    head.append(title, actions);
    panelEl.appendChild(head);

    // stack
    const colDir = L.dir === 'column';
    const dirGroup = flexGroup('direction', L.dir === 'grid' ? 'display' : 'flex-direction', L.dir, [
      { id: 'row', icon: 'row', transpose: false },
      { id: 'column', icon: 'row', transpose: true },
      { id: 'grid', icon: 'grid', transpose: false },
    ], (v) => set(() => { L.dir = v; if (v !== 'row') L.wrap = false; if (v === 'grid' && !L.cols) L.cols = 2; }));
    const wrapGroup = L.dir === 'row' ? [flexGroup('wrap', 'flex-wrap', L.wrap ? 'wrap' : 'nowrap', [{ id: 'nowrap', icon: 'nowrap' }, { id: 'wrap', icon: 'wrap' }], (v) => set(() => { L.wrap = v === 'wrap'; }), false)] : [];
    const justifyGroup = L.dir === 'grid' ? [] : [flexGroup('justify', 'justify-content', L.justify, PS.JUSTIFIES.map((o) => ({ id: o.id, icon: 'j-' + o.id })), (v) => set(() => { L.justify = v; }), colDir)];
    const alignGroup = flexGroup('align', 'align-items', L.align, PS.ALIGNS.map((o) => ({ id: o.id, icon: 'a-' + o.id })), (v) => set(() => { L.align = v; }), colDir);
    const gridCols = [];
    if (L.dir === 'grid') {
      const mode = L.gridMode || 'count';
      const modeChips = chips(PS.GRID_MODES, mode, (v) => set(() => { L.gridMode = v; if (v === 'auto' && !L.minVal) { L.minVal = 200; L.minUnit = 'px'; } }));
      if (mode === 'count') {
        gridCols.push(field('Grid columns', modeChips, chips(PS.GRID_COLS.map((n) => ({ id: n, label: String(n) })), L.cols, (v) => set(() => { L.cols = v; }))));
      } else {
        const unitSel = selectCtl('Minimum unit', PS.MIN_UNITS.map((u) => ({ id: u, label: u })), L.minUnit || 'px', (v) => set(() => { L.minUnit = v; }));
        unitSel.classList.add('unit-select');
        const minInput = numberCtl('Minimum column width', L.minVal || 200, (v) => set(() => { L.minVal = v; }));
        const inp = minInput.querySelector('input');
        inp.step = 'any'; inp.min = '1';
        const hint = document.createElement('span');
        hint.className = 'field__hint';
        hint.textContent = `minmax(${L.minVal || 200}${L.minUnit || 'px'}, 1fr) · as many columns as fit`;
        gridCols.push(field('Grid columns', modeChips));
        gridCols.push(field('Min column width (max 1fr)', minInput, unitSel, hint));
      }
    }
    panelEl.appendChild(section('Stack',
      dirGroup,
      ...wrapGroup,
      ...gridCols,
      fieldRow(
        field('Gap', selectCtl('Gap', spaceOptions(), L.gap, (v) => set(() => { L.gap = v; }))),
        field('Pad ↔', selectCtl('Padding left and right', spaceOptions(), L.padX, (v) => set(() => { L.padX = v; }))),
        field('Pad ↕', selectCtl('Padding top and bottom', spaceOptions(), L.padY, (v) => set(() => { L.padY = v; }))),
      ),
      ...justifyGroup,
      alignGroup,
    ));

    // size
    const r = rectOf(el.id);
    const noFill = parent ? [] : ['fill'];
    // width: top-level cards can follow the layout grid (Columns); in a stack they Fill
    const widthModes = parent
      ? PS.SIZE_MODES
      : [{ id: 'cols', label: 'Columns', title: 'Span layout-grid columns; resizes with the artboard' }, { id: 'fixed', label: 'Fixed' }, { id: 'hug', label: 'Hug' }];
    const pickWidth = (v) => set(() => {
      el.lockW = v === 'fixed';
      if (v === 'fixed') { el.w = Math.round(r.w); el.sizeW = 'fixed'; return; }
      if (v === 'cols') {
        const L2 = gridLines();
        const near = (val, arr) => arr.reduce((a, b) => (Math.abs(b - val) < Math.abs(a - val) ? b : a));
        el.x = near(el.x, L2.starts); const x2 = near(el.x + el.w, L2.ends.filter((e) => e > el.x));
        el.w = x2 - el.x; el.sizeW = 'fixed'; bindToColumns(el); return;
      }
      el.sizeW = v;
    });
    const widthCtl = [chips(widthModes, el.sizeW, pickWidth, parent ? [] : noFill)];
    if (el.sizeW === 'cols' && el.col) {
      const L2 = gridLines();
      const opts = [{ id: -1, label: 'Edge' }, ...L2.colStarts.map((_, i) => ({ id: i, label: String(i + 1) }))];
      const optsEnd = [...L2.colEnds.map((_, i) => ({ id: i, label: String(i + 1) })), { id: L2.n, label: 'Edge' }];
      const cur = colSpanRect(el.col);
      const s0 = cur.x === 0 ? -1 : L2.colStarts.indexOf(cur.x), e0 = cur.x + cur.w === doc.artboard.w ? L2.n : L2.colEnds.indexOf(cur.x + cur.w);
      const setSpan = (start, end) => set(() => { el.col = { start, end: Math.max(end, start === -1 ? 0 : start), of: L2.n }; });
      widthCtl.push(selectCtl('From column', opts, s0, (v) => setSpan(+v, e0)), selectCtl('To column', optsEnd, e0, (v) => setSpan(s0, +v)));
      const hint = document.createElement('span');
      hint.className = 'field__hint';
      hint.textContent = `${Math.round(el.w)} px · of ${L2.n} columns`;
      widthCtl.push(hint);
    } else {
      widthCtl.push(numberCtl('Width in px', el.sizeW === 'fixed' ? el.w : r.w, (v) => set(() => { el.w = v; el.sizeW = 'fixed'; el.lockW = true; }), el.sizeW !== 'fixed'));
    }
    if (parent && parent.layout.dir !== 'column') {
      const hint = document.createElement('span');
      hint.className = 'field__hint';
      hint.textContent = el.sizeW === 'fixed' ? 'Keeps its width; other items resize around it' : 'Shares the free space with the other items';
      widthCtl.push(hint);
    }
    panelEl.appendChild(section('Size',
      field('Width', ...widthCtl),
      field('Height', chips(PS.SIZE_MODES, el.sizeH, (v) => set(() => { if (v === 'fixed') el.h = snapH(r.h); el.sizeH = v; }), parent ? [] : ['fill']),
        numberCtl('Height in px', el.sizeH === 'fixed' ? el.h : r.h, (v) => set(() => { el.h = snapH(v); el.sizeH = 'fixed'; }), el.sizeH !== 'fixed', RHYTHM)),
    ));

    // appearance
    const fillBtn = document.createElement('button');
    fillBtn.type = 'button';
    fillBtn.className = 'swatch swatch--btn';
    fillBtn.style.background = PS.colorCss(el.fill);
    fillBtn.setAttribute('aria-label', 'Fill color');
    fillBtn.addEventListener('click', () => { const b = fillBtn.getBoundingClientRect(); openColor({ kind: 'card', id: el.id }, b.left + b.width / 2, b.bottom); });
    const fillName = document.createElement('span');
    fillName.className = 'field__hint';
    fillName.textContent = el.fill.startsWith('--') ? el.fill.replace('--', '') : el.fill.toUpperCase();
    panelEl.appendChild(section('Appearance',
      field('Fill', fillBtn, fillName),
      fieldRow(
        field('Border', selectCtl('Border', PS.BORDERS, el.border, (v) => set(() => { el.border = v; }))),
        field('Radius', selectCtl('Corner radius', PS.RADII, el.radius, (v) => set(() => { el.radius = v; }))),
        field('Elevation', selectCtl('Elevation', PS.ELEVATIONS, el.elevation, (v) => set(() => { el.elevation = v; }))),
      ),
    ));

    const tip = document.createElement('p');
    tip.className = 'panel__tip';
    tip.textContent = 'Tap with Pencil inside the card to add text. Draw a rectangle inside to nest a card. Drag items to reorder them.';
    panelEl.appendChild(tip);
  }

  // keep focus in the text box while tapping toolbar chips
  inspectorEl.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) e.preventDefault(); });

  function positionInspector() {
    if (!inspectorEl.classList.contains('is-open') || inspectorEl.dataset.moved) return;
    const el = ui.selectedId && byId(ui.selectedId);
    const node = el && nodes.get(el.id);
    if (!node) return;
    const r = node.getBoundingClientRect();
    const ir = inspectorEl.getBoundingClientRect();
    const top = topbarEl.getBoundingClientRect().bottom;
    let y = r.top - ir.height - 16;
    if (y < top + 8) y = r.bottom + 16;
    placeBox(inspectorEl, r.left + r.width / 2 - ir.width / 2, y);
  }

  function removeSelected() {
    const id = ui.selectedId;
    if (!id) return;
    blurEditing();
    const el = byId(id);
    if (!el) return;
    const kids = childrenOf(id).map((k) => ({ k, r: rectOf(k.id) }));
    const siblingIndex = childrenOf(el.parent).indexOf(el);
    const parent = el.parent ? byId(el.parent) : null;
    mutate(() => {
      // children are kept: they move up to where the card was
      kids.forEach(({ k, r }, i) => {
        if (parent) placeInto(k, parent, siblingIndex + i);
        else {
          k.x = snap(r.x); k.y = snap(r.y);
          if (k.type === 'card') { k.w = snap(r.w); k.h = snapH(r.h); if (k.sizeW === 'fill') k.sizeW = 'fixed'; if (k.sizeH === 'fill') k.sizeH = 'fixed'; }
          placeInto(k, null, Infinity);
        }
      });
      doc.elements = doc.elements.filter((e) => e.id !== id);
      ui.selectedId = null;
    });
  }

  function duplicate(id) {
    blurEditing();
    const el = byId(id);
    if (!el) return;
    mutate(() => {
      const map = new Map();
      const subtree = [el, ...descendants(el.id)];
      const copies = subtree.map((s) => { const c = JSON.parse(JSON.stringify(s)); c.id = uid(); map.set(s.id, c.id); return c; });
      copies.forEach((c, i) => { if (i > 0) c.parent = map.get(c.parent); });
      const root = copies[0];
      if (!root.parent) { root.x += 24; root.y += 24; }
      // copy sits right after the original in its stack
      const pos = doc.elements.indexOf(el) + 1;
      doc.elements.splice(pos, 0, root);
      doc.elements.push(...copies.slice(1));
      ui.selectedId = root.id;
    });
  }

  /* ─────────────── Color picker ─────────────── */
  let colorTarget = null, colorCheckpointed = false;

  function buildRamps() {
    const wrap = $('colorRamps');
    wrap.innerHTML = '';
    PS.PALETTE.forEach((g) => {
      const row = document.createElement('div');
      row.className = 'ramp';
      const head = document.createElement('div');
      head.className = 'ramp__head';
      head.innerHTML = `<span class="ramp__name">${g.family}</span>${g.note ? `<span class="ramp__note">${g.note}</span>` : ''}`;
      row.appendChild(head);
      const sw = document.createElement('div');
      sw.className = 'ramp__swatches';
      g.tokens.forEach((t) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'swatch';
        b.dataset.token = t;
        b.style.background = `var(${t})`;
        b.title = `${t}  ${PS.tokenValue(t) || ''}`;
        b.setAttribute('aria-label', t.replace(/^--/, ''));
        b.addEventListener('click', () => applyColor(t));
        sw.appendChild(b);
      });
      row.appendChild(sw);
      wrap.appendChild(row);
    });
  }
  function currentColor() {
    if (!colorTarget) return null;
    if (colorTarget.kind === 'artboard') return doc.artboard.bg;
    const el = byId(colorTarget.id);
    return el ? el.fill : null;
  }
  function syncColorUI() {
    const c = currentColor();
    const hex = c && c.startsWith('--') ? PS.tokenValue(c) : PS.normalizeHex(c);
    const token = c && c.startsWith('--') ? c : PS.tokenForHex(hex);
    $('colorPreview').style.background = hex || 'transparent';
    if (document.activeElement !== $('hexInput')) $('hexInput').value = (hex || '').toUpperCase();
    const tokenEl = $('colorToken');
    if (token) { tokenEl.textContent = `Penta token  ${token.replace(/^--/, '')}`; tokenEl.classList.remove('is-custom'); }
    else { tokenEl.textContent = 'Custom value, not a Penta token'; tokenEl.classList.add('is-custom'); }
    colorPop.querySelectorAll('.swatch[data-token]').forEach((b) => b.classList.toggle('is-current', b.dataset.token === token));
  }
  function applyColor(value) {
    if (!colorTarget) return;
    if (!colorCheckpointed) { checkpoint(); colorCheckpointed = true; }
    if (colorTarget.kind === 'artboard') doc.artboard.bg = value;
    else { const el = byId(colorTarget.id); if (el) el.fill = value; }
    render();
    syncColorUI();
  }
  function openColor(target, cx, cy) {
    closeMenu();
    colorTarget = target;
    colorCheckpointed = false;
    $('colorTitle').textContent = target.kind === 'artboard' ? 'Background' : 'Card fill';
    colorPop.classList.add('is-open');
    syncColorUI();
    if (colorPop.dataset.moved) return;
    const r = colorPop.getBoundingClientRect();
    let y = cy + 12;
    if (y + r.height > window.innerHeight - 8) y = cy - r.height - 12;
    placeBox(colorPop, cx - r.width / 2, y);
  }
  function closeColor() {
    colorPop.classList.remove('is-open');
    colorTarget = null;
    $('hexInput').blur();
  }
  $('hexInput').addEventListener('input', (e) => {
    const raw = e.target.value.replace('#', '');
    const hex = PS.normalizeHex(e.target.value);
    if (!hex || (raw.length !== 6 && raw.length !== 3)) return;
    applyColor(PS.tokenForHex(hex) || hex);
  });
  $('hexInput').addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === 'Escape') closeColor(); });
  $('colorClose').addEventListener('click', closeColor);
  document.addEventListener('pointerdown', (e) => {
    if (colorPop.classList.contains('is-open') && !colorPop.contains(e.target) && !viewportEl.contains(e.target) && !e.target.closest('.swatch--btn')) closeColor();
    if (!e.target.closest('.menu-anchor')) closeMenu();
    if (!e.target.closest('.zoom-anchor')) $('zoomMenu').classList.remove('show');
    if (addMenuEl.classList.contains('is-open') && !addMenuEl.contains(e.target) && !viewportEl.contains(e.target)) dismissAdd();
    if (pickerEl.classList.contains('is-open') && !pickerEl.contains(e.target) && !viewportEl.contains(e.target)) dismissAssetPicker();
  });

  /* ─────────────── Top bar ─────────────── */
  function setTool(t) {
    ui.tool = t;
    document.querySelectorAll('[data-tool]').forEach((w) => {
      const on = w.dataset.tool === t;
      w.classList.toggle('gost', !on);
      w.classList.toggle('is-current', on);
    });
    viewportEl.dataset.tool = t;
    syncFingerMode();
  }
  document.querySelectorAll('[data-tool]').forEach((w) => w.addEventListener('click', () => setTool(w.dataset.tool)));
  $('undoBtn').addEventListener('click', undo);
  $('redoBtn').addEventListener('click', redo);
  $('zoomBtn').addEventListener('click', () => $('zoomMenu').classList.toggle('show'));
  $('zoomMenu').addEventListener('click', (e) => {
    const a = e.target.closest('[data-zoom]');
    if (!a) return;
    e.preventDefault();
    $('zoomMenu').classList.remove('show');
    setZoom(+a.dataset.zoom);
  });
  $('gridToggle').addEventListener('click', () => { ui.grid = !ui.grid; renderArtboard(); });
  $('presetSelect').addEventListener('change', (e) => {
    const p = PS.PRESETS[e.target.value];
    if (!p) { renderArtboard(); return; }
    mutate(() => setPreset(e.target.value));
    fit();
    if (ui.abEdit) openArtboardEdit();
  });
  document.querySelectorAll('[data-preset]').forEach((w) => w.addEventListener('click', () => {
    const id = w.dataset.preset;
    closeArtboardEdit();
    if (id !== doc.artboard.preset) mutate(() => setPreset(id));
    fit();
    renderSelection();
  }));
  function openArtboardEdit() {
    blurEditing();
    closeColor();
    select(null);
    ui.abEdit = true;
    worldEl.classList.add('is-ab-edit');
    $('abKnob').classList.add('is-active');
    const pop = $('artboardPop');
    pop.classList.add('is-open');
    renderArtboard();
    if (pop.dataset.moved) return;
    const r = $('artboardLabel').getBoundingClientRect();
    const pr = pop.getBoundingClientRect();
    placeBox(pop, r.right - pr.width, r.bottom + 8);
  }
  function closeArtboardEdit() {
    if (!ui.abEdit) return;
    ui.abEdit = false;
    worldEl.classList.remove('is-ab-edit');
    $('abKnob').classList.remove('is-active');
    $('artboardPop').classList.remove('is-open');
    document.activeElement && document.activeElement.blur && document.activeElement.blur();
  }
  $('artboardLabel').addEventListener('click', () => (ui.abEdit ? closeArtboardEdit() : openArtboardEdit()));
  $('abClose').addEventListener('click', closeArtboardEdit);
  $('abDone').addEventListener('click', () => { commitSize(); closeArtboardEdit(); });
  const commitSize = () => {
    const typed = parseInt($('abW').value, 10);
    if (!(typed > 0)) { renderArtboard(); return; }
    const w = clamp(typed, ARTBOARD_MIN, ARTBOARD_MAX);
    $('abW').value = w;                         // show the value that was actually applied
    if (w === doc.artboard.w) return;
    mutate(() => setArtboardSize(w));
    fit();
    if (ui.abEdit) openArtboardEdit();
  };
  ['abW'].forEach((id) => {
    $(id).addEventListener('change', commitSize);
    $(id).addEventListener('keydown', (e) => { if (e.key === 'Enter') $(id).blur(); });
  });

  function closeMenu() { $('menu').classList.remove('show'); }
  $('menuBtn').addEventListener('click', () => $('menu').classList.toggle('show'));
  $('menu').addEventListener('click', (e) => {
    const a = e.target.closest('[data-action]');
    if (!a) return;
    e.preventDefault();
    closeMenu();
    const act = a.dataset.action;
    if (act === 'save') download('penta-sketch.json', JSON.stringify({ ...doc, assets: usedUploads() }), 'application/json');
    if (act === 'open') $('fileInput').click();
    if (act === 'help') $('helpScrim').classList.add('is-open');
    if (act === 'grid') { ui.grid = !ui.grid; renderArtboard(); }
    if (act === 'finger') {
      ui.fingerDraws = !ui.fingerDraws;
      syncFingerMode();
      toast(ui.fingerDraws ? 'Finger mode on: finger draws in Draw mode, two fingers scroll' : 'Finger mode off: Pencil draws, finger selects and scrolls');
    }
    if (act === 'clear') {
      mutate(() => { doc.elements = []; doc.artboard.bg = '--color-white'; ui.selectedId = null; });
      toast('Artboard cleared. Undo brings it back');
    }
  });
  $('fileInput').addEventListener('change', async (e) => {
    const f = e.target.files[0];
    if (!f) return;
    try {
      const d = JSON.parse(await f.text());
      if (!d.artboard || !Array.isArray(d.elements)) throw new Error('bad file');
      if (d.assets) { Object.keys(d.assets).forEach((k) => uploads.set(k, d.assets[k])); delete d.assets; }
      checkpoint();
      doc = migrate(d);
      ui.selectedId = null;
      render(true);
      fit();
      toast('Project opened');
    } catch (err) { toast('That file is not a Penta Sketch project'); }
    e.target.value = '';
  });

  function download(name, text, type) {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  let exported = '';
  $('exportBtn').addEventListener('click', () => {
    blurEditing();
    exported = PS.exportHTML(doc, 'Penta Sketch export');
    $('exportCode').textContent = exported;
    $('exportScrim').classList.add('is-open');
  });
  $('exportClose').addEventListener('click', () => $('exportScrim').classList.remove('is-open'));
  $('helpClose').addEventListener('click', () => $('helpScrim').classList.remove('is-open'));
  document.querySelectorAll('.scrim').forEach((s) => s.addEventListener('click', (e) => { if (e.target === s) s.classList.remove('is-open'); }));
  $('downloadBtn').addEventListener('click', () => download('penta-sketch.html', exported, 'text/html'));
  $('previewBtn').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([exported], { type: 'text/html' }));
    window.open(url, '_blank');
  });
  $('copyBtn').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(exported); toast('HTML copied'); }
    catch (err) {
      const r = document.createRange(); r.selectNodeContents($('exportCode'));
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      toast('Code selected. Use Copy from the edit menu');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === ' ' && !isTyping()) spaceDown = true;
    if (isTyping()) { if (e.key === 'Escape') blurEditing(); return; }
    const mod = e.metaKey || e.ctrlKey;
    if (mod && e.key.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? redo() : undo(); return; }
    if (mod && e.key.toLowerCase() === 'y') { e.preventDefault(); redo(); return; }
    if (mod && e.key.toLowerCase() === 'd') { e.preventDefault(); if (ui.selectedId) duplicate(ui.selectedId); return; }
    if (mod) return;
    if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); removeSelected(); }
    else if (e.key === 'Escape') { dismissAssetPicker(); dismissAdd(); dismissChoice(); closeArtboardEdit(); closeColor(); select(null); document.querySelectorAll('.scrim').forEach((s) => s.classList.remove('is-open')); }
    else if (e.key === 'v' || e.key === 'V') setTool('select');
    else if (e.key === 'p' || e.key === 'P') setTool('draw');
    else if (e.key === 'g' || e.key === 'G') { ui.grid = !ui.grid; renderArtboard(); }
    else if (e.key === '0') fit();
    else if (e.key === '=' || e.key === '+') { const i = ZOOMS.indexOf(ui.zoom); setZoom(ZOOMS[Math.max(0, i - 1)]); }
    else if (e.key === '-') { const i = ZOOMS.indexOf(ui.zoom); setZoom(ZOOMS[Math.min(ZOOMS.length - 1, i + 1)]); }
  });
  document.addEventListener('keyup', (e) => { if (e.key === ' ') spaceDown = false; });
  function isTyping() {
    const a = document.activeElement;
    return a && (a.isContentEditable || a.tagName === 'INPUT' || a.tagName === 'TEXTAREA' || a.tagName === 'SELECT');
  }

  let toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('is-open');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-open'), 2600);
  }

  /* Popped-up controls always stay inside the visible area BELOW the top bar. */
  function safeArea() {
    const top = topbarEl.getBoundingClientRect().bottom + 8;
    return { top, left: 8, right: window.innerWidth - 8, bottom: window.innerHeight - 8 };
  }
  /* loose = the user is placing it: the body may slide below the bottom edge as long as the
   * header (the part you drag by) stays fully visible with a small margin. Otherwise the whole
   * box must fit on screen. */
  function placeBox(box, x, y, loose = false) {
    const a = safeArea();
    box.style.maxHeight = (a.bottom - a.top) + 'px';
    const r = box.getBoundingClientRect();
    x = clamp(x, a.left, Math.max(a.left, a.right - r.width));
    let maxY = a.bottom - Math.min(r.height, a.bottom - a.top);
    if (loose) {
      const hd = box.querySelector('[data-drag-handle]');
      const headerH = Math.min(r.height, Math.max(hd ? hd.getBoundingClientRect().height : 0, box.classList.contains('panel') ? 56 : 24));
      maxY = Math.max(maxY, window.innerHeight - headerH - 16);
    }
    y = clamp(y, a.top, Math.max(a.top, maxY));
    box.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
  }
  function reclampOne(b) {
    const r = b.getBoundingClientRect();
    placeBox(b, r.left, r.top, true);
  }
  function reclampMoved() {
    document.querySelectorAll('.floating-ui[data-moved]').forEach((b) => {
      if (!b.offsetParent && getComputedStyle(b).display === 'none') return;
      reclampOne(b);
    });
  }
  window.addEventListener('resize', reclampMoved);

  /* ─────────────── Movable controls ───────────────
   * Every popped-up control (card panel, text toolbar, color picker, artboard size)
   * can be dragged by its header / grip. It then stays where you put it. */
  document.addEventListener('pointerdown', (e) => {
    const handle = e.target.closest('[data-drag-handle]');
    if (!handle || e.target.closest('button, select, input, a')) return;
    const box = handle.closest('.floating-ui');
    if (!box) return;
    e.preventDefault();
    const r = box.getBoundingClientRect();
    const start = { x: e.clientX, y: e.clientY };
    box.classList.add('is-dragging-ui');
    Object.assign(box.style, { left: '0px', top: '0px', right: 'auto', bottom: 'auto' });
    const place = (cx, cy) => placeBox(box, r.left + cx - start.x, r.top + cy - start.y, true);
    place(e.clientX, e.clientY);
    box.dataset.moved = '1';
    const move = (ev) => place(ev.clientX, ev.clientY);
    const up = () => { box.classList.remove('is-dragging-ui'); window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); window.removeEventListener('pointercancel', up); };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  });

  /* ─────────────── Boot ─────────────── */
  load();
  loadUploads();
  if (isFull()) sizeToViewport();
  buildRamps();
  setTool('select');
  render(true);
  fit();
  renderSelection();
  // Full screen follows the screen (rotation, split view); not an undo step
  window.addEventListener('resize', () => {
    if (isFull()) sizeToViewport();
    renderArtboard(); renderElements();
    fit();
    renderSelection();
  });
  window.addEventListener('pagehide', save);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') save(); });
  if (document.fonts) document.fonts.ready.then(() => { renderSelection(); positionInspector(); });

  PS.app = { get doc() { return doc; }, view, ui, fit, flushPending, undo, redo };
})();
