/* Penta Sketch: main app.
 * Pencil draws (rectangles become cards, a tap places a text box for Scribble),
 * finger selects / moves / pans / zooms, finger tap on the background picks its color. */
(function () {
  const PS = window.PS;
  const $ = (id) => document.getElementById(id);

  const viewportEl = $('viewport'), worldEl = $('world'), artboardEl = $('artboard');
  const elementsEl = $('elements'), inkEl = $('ink'), selectionEl = $('selection');
  const gridEl = $('gridOverlay'), inspectorEl = $('inspector'), hintEl = $('emptyHint');
  const colorPop = $('colorPopover'), toastEl = $('toast');

  const STORAGE_KEY = 'penta-sketch:v1';
  const SNAP = PS.GRID.snap;
  const snap = (v) => Math.round(v / SNAP) * SNAP;
  const uid = () => Math.random().toString(36).slice(2, 9);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  const PLAINTEXT_OK = (() => { const d = document.createElement('div'); try { d.contentEditable = 'plaintext-only'; } catch (e) { return false; } return d.contentEditable === 'plaintext-only'; })();

  /* ─────────────── State ─────────────── */
  const newDoc = (preset = 'desktop') => ({
    version: 1,
    artboard: { preset, w: PS.PRESETS[preset].w, h: PS.PRESETS[preset].h, bg: '--color-white' },
    elements: [],
  });
  let doc = newDoc();
  const view = { x: 0, y: 0, s: 1 };
  const ui = { tool: 'draw', fingerDraws: false, grid: false, selectedId: null, editingId: null, lastLevel: 'body' };
  let past = [], future = [], editSnapshot = null;

  const snapDoc = () => JSON.stringify(doc);
  const byId = (id) => doc.elements.find((e) => e.id === id);

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
    doc = JSON.parse(json);
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

  /* ─────────────── Tree helpers ─────────────── */
  function descendants(id) {
    const out = [];
    const walk = (pid) => doc.elements.forEach((e) => { if (e.parent === pid) { out.push(e); walk(e.id); } });
    walk(id);
    return out;
  }
  /* Smallest card that fully contains the rect (excluding `excludeIds`). */
  function containerFor(rect, excludeIds = new Set()) {
    let best = null;
    for (const e of doc.elements) {
      if (e.type !== 'card' || excludeIds.has(e.id)) continue;
      if (rect.x >= e.x - 2 && rect.y >= e.y - 2 && rect.x + rect.w <= e.x + e.w + 2 && rect.y + rect.h <= e.y + e.h + 2) {
        if (!best || e.w * e.h < best.w * best.h) best = e;
      }
    }
    return best;
  }
  /* Move an element and its subtree to the end of the paint order (front). */
  function bringSubtreeToFront(el) {
    const ids = new Set([el.id, ...descendants(el.id).map((d) => d.id)]);
    const moving = doc.elements.filter((e) => ids.has(e.id));
    doc.elements = doc.elements.filter((e) => !ids.has(e.id)).concat(moving);
  }
  function surfaceUnder(el) {
    const p = el.parent ? byId(el.parent) : null;
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

  function cardCss(el, node) {
    const b = PS.BORDERS.find((x) => x.id === el.border);
    const r = PS.RADII.find((x) => x.id === el.radius);
    const e = PS.ELEVATIONS.find((x) => x.id === el.elevation);
    Object.assign(node.style, {
      left: el.x + 'px', top: el.y + 'px', width: el.w + 'px', height: el.h + 'px',
      background: PS.colorCss(el.fill),
      border: b && b.token ? `1px solid var(${b.token})` : 'none',
      borderRadius: r && r.token ? `var(${r.token})` : '0',
      boxShadow: e && e.token ? `var(${e.token})` : 'none',
    });
  }

  function textCss(el, node) {
    const c = PS.TEXT_COLORS.find((x) => x.id === el.color) || PS.TEXT_COLORS[0];
    const parent = el.parent ? byId(el.parent) : null;
    const right = parent ? parent.x + parent.w : doc.artboard.w;
    node.className = `el el-text t-${PS.level(el.level).id}`;
    Object.assign(node.style, {
      left: el.x + 'px', top: el.y + 'px', color: `var(${c.token})`,
      maxWidth: Math.max(48, right - el.x) + 'px',
      width: el.w ? el.w + 'px' : '',
    });
  }

  function makeNode(el) {
    const node = document.createElement('div');
    node.dataset.id = el.id;
    if (el.type === 'card') {
      node.className = 'el el-card';
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
    const seen = new Set();
    doc.elements.forEach((el, i) => {
      let node = nodes.get(el.id);
      if (!node || force) {
        if (node && node.contains(document.activeElement)) { /* keep focused node */ }
        else {
          if (node) node.remove();
          node = makeNode(el);
          nodes.set(el.id, node);
        }
      }
      seen.add(el.id);
      if (el.type === 'card') cardCss(el, node);
      else {
        textCss(el, node);
        const edit = node.firstChild;
        if (document.activeElement !== edit && edit.textContent !== el.text) edit.textContent = el.text;
      }
      node.classList.toggle('is-selected', ui.selectedId === el.id);
      if (elementsEl.children[i] !== node) elementsEl.insertBefore(node, elementsEl.children[i] || null);
    });
    for (const [id, node] of nodes) if (!seen.has(id)) { node.remove(); nodes.delete(id); }
  }

  function renderArtboard() {
    const a = doc.artboard;
    artboardEl.style.width = a.w + 'px';
    artboardEl.style.height = a.h + 'px';
    artboardEl.style.background = PS.colorCss(a.bg);
    inkEl.setAttribute('viewBox', `0 0 ${a.w} ${a.h}`);
    inkEl.setAttribute('width', a.w);
    inkEl.setAttribute('height', a.h);
    $('artboardLabel').textContent = `${PS.PRESETS[a.preset].label} · ${a.w} × ${a.h}`;
    $('presetSelect').value = a.preset;
    // layout grid overlay (Penta 12 / 8 / 4 columns)
    const cols = PS.PRESETS[a.preset].columns;
    if (gridEl.childElementCount !== cols) {
      gridEl.innerHTML = '';
      for (let i = 0; i < cols; i++) gridEl.appendChild(document.createElement('span'));
    }
    gridEl.style.padding = `0 ${PS.GRID.margin}px`;
    gridEl.style.gap = `${PS.GRID.gutter}px`;
    gridEl.classList.toggle('is-on', ui.grid);
    $('gridToggleWrap').classList.toggle('is-active', ui.grid);
    hintEl.classList.toggle('is-hidden', doc.elements.length > 0);
  }

  function applyView() {
    worldEl.style.transform = `translate(${view.x}px, ${view.y}px) scale(${view.s})`;
    worldEl.style.setProperty('--inv', 1 / view.s);
    $('zoomLabel').textContent = Math.round(view.s * 100) + '%';
    positionInspector();
  }

  function renderSelection() {
    selectionEl.innerHTML = '';
    const el = ui.selectedId && byId(ui.selectedId);
    if (!el) return;
    const node = nodes.get(el.id);
    const box = document.createElement('div');
    box.className = 'sel-box';
    const w = el.type === 'card' ? el.w : node.offsetWidth;
    const h = el.type === 'card' ? el.h : node.offsetHeight;
    Object.assign(box.style, { left: el.x + 'px', top: el.y + 'px', width: w + 'px', height: h + 'px' });
    if (el.type === 'card') {
      for (const k of ['nw', 'ne', 'sw', 'se']) {
        const hd = document.createElement('div');
        hd.className = `handle handle--${k}`;
        hd.dataset.handle = k;
        box.appendChild(hd);
      }
      const size = document.createElement('div');
      size.className = 'sel-size';
      size.textContent = `${Math.round(el.w)} × ${Math.round(el.h)}`;
      box.appendChild(size);
    }
    selectionEl.appendChild(box);
  }

  let saveTimer = null;
  function render(force) {
    renderArtboard();
    renderElements(force);
    renderSelection();
    renderInspector();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 300);
  }

  /* ─────────────── Persistence ─────────────── */
  function save() {
    try { localStorage.setItem(STORAGE_KEY, snapDoc()); } catch (e) { /* storage unavailable: app still works */ }
  }
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) { const d = JSON.parse(raw); if (d && d.artboard && Array.isArray(d.elements)) doc = d; }
    } catch (e) { /* ignore */ }
  }

  /* ─────────────── View ─────────────── */
  function fit() {
    const r = viewportEl.getBoundingClientRect();
    const pad = 48;
    const a = doc.artboard;
    view.s = clamp(Math.min((r.width - pad * 2) / a.w, (r.height - pad * 2) / a.h), 0.1, 1);
    view.x = (r.width - a.w * view.s) / 2;
    view.y = Math.max(pad, (r.height - a.h * view.s) / 2);
    applyView();
  }
  function toArtboard(cx, cy) {
    const r = viewportEl.getBoundingClientRect();
    return { x: (cx - r.left - view.x) / view.s, y: (cy - r.top - view.y) / view.s };
  }
  function zoomAt(cx, cy, s) {
    const r = viewportEl.getBoundingClientRect();
    const px = cx - r.left, py = cy - r.top;
    const wx = (px - view.x) / view.s, wy = (py - view.y) / view.s;
    view.s = clamp(s, 0.1, 4);
    view.x = px - wx * view.s;
    view.y = py - wy * view.s;
    applyView();
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
    const res = PS.recognize(strokes);
    if (res.type === 'rect') {
      createCard(res);
      fadeInk(paths, 'is-absorbed');
    } else {
      fadeInk(paths);
      const many = strokes.length > 2 || res.reason === 'interior';
      toast(many
        ? 'To write text: tap with Pencil first, then write inside the box'
        : 'Not recognized. Draw a closed rectangle to make a card');
    }
  }

  function createCard(r) {
    const x = snap(r.x), y = snap(r.y);
    const w = Math.max(SNAP * 3, snap(r.x + r.w) - x), h = Math.max(SNAP * 3, snap(r.y + r.h) - y);
    const rect = { x, y, w, h };
    const parent = containerFor(rect);
    const card = {
      id: uid(), type: 'card', parent: parent ? parent.id : null, x, y, w, h,
      fill: '--color-white', border: 'secondary', radius: 'lg', elevation: 'none',
    };
    mutate(() => {
      // adopt elements the new card fully encloses (siblings at the same level)
      const enclosed = doc.elements.filter((e) => e.parent === card.parent && inside(e, rect));
      const firstIdx = enclosed.length ? Math.min(...enclosed.map((e) => doc.elements.indexOf(e))) : -1;
      enclosed.forEach((e) => (e.parent = card.id));
      if (firstIdx >= 0) doc.elements.splice(firstIdx, 0, card);
      else doc.elements.push(card);
      ui.selectedId = card.id;
    });
    const node = nodes.get(card.id);
    if (node) { node.classList.add('el--enter'); setTimeout(() => node.classList.remove('el--enter'), 400); }
  }

  function inside(e, rect) {
    const n = nodes.get(e.id);
    const w = e.type === 'card' ? e.w : n ? n.offsetWidth : 0;
    const h = e.type === 'card' ? e.h : n ? n.offsetHeight : 0;
    return e.x >= rect.x && e.y >= rect.y && e.x + w <= rect.x + rect.w && e.y + h <= rect.y + rect.h;
  }

  function createTextAt(pt) {
    const lvl = PS.level(ui.lastLevel);
    const x = snap(pt.x), y = snap(pt.y - lvl.line / 2);
    const parent = containerFor({ x, y, w: 1, h: 1 });
    blurEditing();
    const before = snapDoc();
    const el = { id: uid(), type: 'text', parent: parent ? parent.id : null, x, y, text: '', level: lvl.id, color: 'primary' };
    el.color = isDark(surfaceUnder(el)) ? 'inverse' : 'primary';
    doc.elements.push(el);
    ui.selectedId = el.id;
    render();
    const edit = nodes.get(el.id).firstChild;
    editSnapshot = before;
    edit.focus();
  }

  /* ─────────────── Text editing ─────────────── */
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
    node.classList.add('is-editing');
    renderSelection();
    renderInspector();
  });
  elementsEl.addEventListener('input', (e) => {
    const node = e.target.closest('.el-text');
    if (!node) return;
    const el = byId(node.dataset.id);
    if (!el) return;
    el.text = e.target.innerText.replace(/\n$/, '');
    renderSelection();
    positionInspector();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 300);
  });
  elementsEl.addEventListener('focusout', (e) => {
    const node = e.target.closest('.el-text');
    if (!node) return;
    node.classList.remove('is-editing');
    const el = byId(node.dataset.id);
    ui.editingId = null;
    if (el) {
      el.text = e.target.innerText.replace(/\n$/, '').replace(/ /g, ' ');
      if (!el.text.trim()) {
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
  let gesture = null; // { kind: 'draw'|'tapOrPan'|'move'|'resize'|'pinch'|'pan', ... }
  let spaceDown = false;
  let lastTap = { id: null, t: 0 };

  function roleFor(e) {
    if (e.pointerType === 'pen') return ui.tool === 'select' ? 'nav' : 'draw';
    if (e.pointerType === 'mouse') return ui.tool === 'select' || spaceDown || e.button === 1 ? 'nav' : 'draw';
    return ui.fingerDraws && ui.tool === 'draw' ? 'draw' : 'nav';
  }

  viewportEl.addEventListener('pointerdown', (e) => {
    if (e.button === 2) return;
    closeMenu();
    if (colorPop.classList.contains('is-open')) { closeColor(); if (e.pointerType !== 'pen') return; }
    const role = roleFor(e);
    const editable = e.target.closest('.el-text__edit');

    // Pencil / mouse on a text box: hand over to the browser (Scribble, caret).
    if (role === 'draw' && editable) return;

    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, type: e.pointerType });
    e.preventDefault();

    // Second finger: switch to pinch / pan.
    const touches = [...pointers.values()].filter((p) => p.type === 'touch');
    if (e.pointerType === 'touch' && touches.length === 2) {
      if (gesture && gesture.kind === 'move' && gesture.moved) { restore(gesture.before); past.pop(); }
      if (gesture && gesture.kind === 'draw') { gesture.path.remove(); }
      const [a, b] = touches;
      gesture = { kind: 'pinch', d0: Math.hypot(a.x - b.x, a.y - b.y), c0: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }, v0: { ...view } };
      return;
    }
    if (gesture) return;

    try { viewportEl.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    const pt = toArtboard(e.clientX, e.clientY);

    if (role === 'draw') {
      blurEditing();
      clearTimeout(pending.timer);
      // a stroke far from the pending group starts a new group
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

    // nav role
    const handle = e.target.closest('[data-handle]');
    const elNode = e.target.closest('.el');
    if (handle && ui.selectedId) {
      const el = byId(ui.selectedId);
      gesture = { kind: 'resize', id: e.pointerId, handle: handle.dataset.handle, start: pt, orig: { ...el }, before: snapDoc(), moved: false };
      return;
    }
    if (elNode) {
      const el = byId(elNode.dataset.id);
      const subtree = [el, ...descendants(el.id)];
      gesture = {
        kind: 'move', id: e.pointerId, elId: el.id, start: pt, sx: e.clientX, sy: e.clientY,
        origins: subtree.map((x) => ({ id: x.id, x: x.x, y: x.y })), before: snapDoc(), moved: false,
      };
      return;
    }
    gesture = { kind: 'tapOrPan', id: e.pointerId, sx: e.clientX, sy: e.clientY, v0: { ...view }, moved: false, pt };
  });

  function pressure(e) {
    if (e.pointerType === 'pen') return e.pressure || 0.5;
    return 0.5;
  }

  function drawPath() {
    gesture.path.setAttribute('d', PS.strokePath(gesture.pts, 3.4 / view.s));
  }

  viewportEl.addEventListener('pointermove', (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, type: e.pointerType });
    if (!gesture) return;

    if (gesture.kind === 'pinch') {
      const touches = [...pointers.values()].filter((p) => p.type === 'touch');
      if (touches.length < 2) return;
      const [a, b] = touches;
      const d = Math.hypot(a.x - b.x, a.y - b.y), c = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      const r = viewportEl.getBoundingClientRect();
      const s = clamp(gesture.v0.s * (d / gesture.d0), 0.1, 4);
      const wx = (gesture.c0.x - r.left - gesture.v0.x) / gesture.v0.s, wy = (gesture.c0.y - r.top - gesture.v0.y) / gesture.v0.s;
      view.s = s;
      view.x = c.x - r.left - wx * s;
      view.y = c.y - r.top - wy * s;
      applyView();
      return;
    }
    if (e.pointerId !== gesture.id) return;

    if (gesture.kind === 'draw') {
      const evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
      for (const ev of evs.length ? evs : [e]) {
        const p = toArtboard(ev.clientX, ev.clientY);
        gesture.pts.push({ ...p, p: pressure(ev) });
      }
      gesture.travel = Math.max(gesture.travel, Math.hypot(e.clientX - gesture.sx, e.clientY - gesture.sy));
      drawPath();
      return;
    }

    const dist = Math.hypot(e.clientX - gesture.sx, e.clientY - gesture.sy);
    if (gesture.kind === 'tapOrPan') {
      if (dist > 6) gesture.moved = true;
      if (gesture.moved) {
        view.x = gesture.v0.x + (e.clientX - gesture.sx);
        view.y = gesture.v0.y + (e.clientY - gesture.sy);
        applyView();
      }
      return;
    }
    const pt = toArtboard(e.clientX, e.clientY);
    if (gesture.kind === 'move') {
      if (!gesture.moved && dist < 6) return;
      if (!gesture.moved) { gesture.moved = true; blurEditing(); ui.selectedId = gesture.elId; }
      const dx = snap(pt.x - gesture.start.x), dy = snap(pt.y - gesture.start.y);
      for (const o of gesture.origins) { const el = byId(o.id); el.x = o.x + dx; el.y = o.y + dy; }
      renderElements(); renderSelection(); hideInspector();
      return;
    }
    if (gesture.kind === 'resize') {
      gesture.moved = true;
      const o = gesture.orig, el = byId(o.id), min = SNAP * 3;
      let x1 = o.x, y1 = o.y, x2 = o.x + o.w, y2 = o.y + o.h;
      const dx = pt.x - gesture.start.x, dy = pt.y - gesture.start.y;
      if (gesture.handle.includes('w')) x1 = Math.min(snap(o.x + dx), x2 - min);
      if (gesture.handle.includes('e')) x2 = Math.max(snap(o.x + o.w + dx), x1 + min);
      if (gesture.handle.includes('n')) y1 = Math.min(snap(o.y + dy), y2 - min);
      if (gesture.handle.includes('s')) y2 = Math.max(snap(o.y + o.h + dy), y1 + min);
      Object.assign(el, { x: x1, y: y1, w: x2 - x1, h: y2 - y1 });
      renderElements(); renderSelection(); hideInspector();
    }
  });

  function endPointer(e, cancelled) {
    if (!pointers.has(e.pointerId)) return;
    pointers.delete(e.pointerId);
    if (!gesture) return;

    if (gesture.kind === 'pinch') {
      if ([...pointers.values()].filter((p) => p.type === 'touch').length < 2) {
        gesture = null;
        pointers.clear();
      }
      return;
    }
    if (e.pointerId !== gesture.id) return;
    const g = gesture;
    gesture = null;

    if (g.kind === 'draw') {
      if (cancelled) { g.path.remove(); return; }
      const isTap = g.travel < 6 && performance.now() - g.t0 < 400;
      if (isTap) {
        g.path.remove();
        flushPending();
        createTextAt(g.pts[0]);
        return;
      }
      pending.strokes.push(g.pts);
      pending.paths.push(g.path);
      pending.timer = setTimeout(flushPending, 700);
      return;
    }
    if (g.kind === 'tapOrPan') {
      if (g.moved || cancelled) return;
      const a = doc.artboard;
      const onArtboard = g.pt.x >= 0 && g.pt.y >= 0 && g.pt.x <= a.w && g.pt.y <= a.h;
      if (ui.selectedId || ui.editingId) { blurEditing(); select(null); return; }
      if (onArtboard) openColor({ kind: 'artboard' }, e.clientX, e.clientY);
      return;
    }
    if (g.kind === 'move') {
      if (!g.moved) {
        const now = performance.now();
        const el = byId(g.elId);
        // double tap on text with a finger: edit with keyboard
        if (el.type === 'text' && lastTap.id === el.id && now - lastTap.t < 350) {
          nodes.get(el.id).firstChild.focus();
        } else {
          blurEditing();
          select(g.elId);
        }
        lastTap = { id: g.elId, t: now };
        return;
      }
      if (cancelled) { restore(g.before); return; }
      // commit move: reparent by drop location
      const el = byId(g.elId);
      const node = nodes.get(el.id);
      const w = el.type === 'card' ? el.w : node.offsetWidth, h = el.type === 'card' ? el.h : node.offsetHeight;
      const exclude = new Set([el.id, ...descendants(el.id).map((d) => d.id)]);
      const cx = el.x + w / 2, cy = el.y + h / 2;
      const parent = containerFor({ x: cx, y: cy, w: 0, h: 0 }, exclude);
      past.push(g.before); future = [];
      const newParent = parent ? parent.id : null;
      if (newParent !== el.parent) { el.parent = newParent; bringSubtreeToFront(el); }
      render();
      return;
    }
    if (g.kind === 'resize') {
      if (!g.moved) return;
      if (cancelled) { restore(g.before); return; }
      past.push(g.before); future = [];
      render();
    }
  }
  viewportEl.addEventListener('pointerup', (e) => endPointer(e, false));
  viewportEl.addEventListener('pointercancel', (e) => endPointer(e, true));

  // Keep a finger tap on a text box from focusing it (finger = select, Pencil = write).
  viewportEl.addEventListener('touchend', (e) => {
    const t = e.changedTouches[0];
    const editable = e.target.closest && e.target.closest('.el-text__edit');
    if (editable && t && t.touchType !== 'stylus' && document.activeElement !== editable && !ui.fingerDraws) e.preventDefault();
  }, { passive: false });
  document.addEventListener('gesturestart', (e) => e.preventDefault());
  document.addEventListener('dblclick', (e) => { if (viewportEl.contains(e.target) && !e.target.closest('.el-text__edit')) e.preventDefault(); });

  viewportEl.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.ctrlKey || e.metaKey) zoomAt(e.clientX, e.clientY, view.s * Math.exp(-e.deltaY * 0.01));
    else { view.x -= e.deltaX; view.y -= e.deltaY; applyView(); }
  }, { passive: false });

  /* ─────────────── Selection & inspector ─────────────── */
  function select(id) {
    ui.selectedId = id;
    renderElements();
    renderSelection();
    renderInspector();
  }

  function hideInspector() { inspectorEl.classList.remove('is-open'); }

  function chip(label, active, onTap, title) {
    const wrap = document.createElement('div');
    wrap.className = 'button small ' + (active ? 'is-current' : 'gost');
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = label;
    if (title) b.title = title;
    b.setAttribute('aria-pressed', active ? 'true' : 'false');
    b.addEventListener('click', onTap);
    wrap.appendChild(b);
    return wrap;
  }
  function group(label, ...children) {
    const g = document.createElement('div');
    g.className = 'insp-group';
    if (label) { const l = document.createElement('span'); l.className = 'insp-label'; l.textContent = label; g.appendChild(l); }
    children.forEach((c) => g.appendChild(c));
    return g;
  }
  function selectCtl(label, options, value, onChange) {
    const s = document.createElement('select');
    s.className = 'select-sm';
    s.setAttribute('aria-label', label);
    options.forEach((o) => { const op = document.createElement('option'); op.value = o.id; op.textContent = o.label; s.appendChild(op); });
    s.value = value;
    s.addEventListener('change', () => onChange(s.value));
    return s;
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
  const ICON_TRASH = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.5 4h11M6 4V2.5h4V4M4 4l.7 9.5h6.6L12 4" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  const ICON_DUP = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="8.5" height="8.5" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M11 3V2.5H2.5V11H3" stroke="currentColor" stroke-width="1.5"/></svg>';

  function renderInspector() {
    inspectorEl.innerHTML = '';
    const el = ui.selectedId && byId(ui.selectedId);
    if (!el) { hideInspector(); return; }

    if (el.type === 'text') {
      const levels = document.createElement('div');
      levels.className = 'insp-chips';
      PS.TEXT_LEVELS.forEach((l) => levels.appendChild(chip(l.label, el.level === l.id, () => {
        ui.lastLevel = l.id;
        mutate(() => { el.level = l.id; });
      }, `${l.size}/${l.line}`)));
      inspectorEl.appendChild(group('Text', levels));
      inspectorEl.appendChild(group('Color', selectCtl('Text color', PS.TEXT_COLORS, el.color, (v) => mutate(() => { el.color = v; }))));
    } else {
      const fillBtn = document.createElement('button');
      fillBtn.type = 'button';
      fillBtn.className = 'swatch swatch--btn';
      fillBtn.style.background = PS.colorCss(el.fill);
      fillBtn.setAttribute('aria-label', 'Fill color');
      fillBtn.addEventListener('click', () => {
        const r = fillBtn.getBoundingClientRect();
        openColor({ kind: 'card', id: el.id }, r.left + r.width / 2, r.bottom);
      });
      inspectorEl.appendChild(group('Fill', fillBtn));
      inspectorEl.appendChild(group('Border', selectCtl('Border', PS.BORDERS, el.border, (v) => mutate(() => { el.border = v; }))));
      inspectorEl.appendChild(group('Radius', selectCtl('Corner radius', PS.RADII, el.radius, (v) => mutate(() => { el.radius = v; }))));
      inspectorEl.appendChild(group('Elevation', selectCtl('Elevation', PS.ELEVATIONS, el.elevation, (v) => mutate(() => { el.elevation = v; }))));
    }
    inspectorEl.appendChild(group(null,
      iconBtn(ICON_DUP, 'Duplicate', () => duplicate(el.id)),
      iconBtn(ICON_TRASH, 'Delete', () => removeSelected())));
    inspectorEl.classList.add('is-open');
    positionInspector();
  }

  // keep focus in the text box while tapping inspector chips
  inspectorEl.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) e.preventDefault(); });

  function positionInspector() {
    if (!inspectorEl.classList.contains('is-open')) return;
    const el = ui.selectedId && byId(ui.selectedId);
    const node = el && nodes.get(el.id);
    if (!node) return;
    const r = node.getBoundingClientRect();
    const ir = inspectorEl.getBoundingClientRect();
    const top = $('viewport').getBoundingClientRect().top;
    let y = r.top - ir.height - 16;
    if (y < top + 8) y = r.bottom + 16;
    if (y + ir.height > window.innerHeight - 8) y = window.innerHeight - ir.height - 16;
    let x = r.left + r.width / 2 - ir.width / 2;
    x = clamp(x, 8, window.innerWidth - ir.width - 8);
    inspectorEl.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
  }

  function removeSelected() {
    const id = ui.selectedId;
    if (!id) return;
    blurEditing();
    if (!byId(id)) return;
    mutate(() => {
      const el = byId(id);
      // children move up to the removed element's parent
      doc.elements.forEach((e) => { if (e.parent === id) e.parent = el.parent; });
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
      const copies = subtree.map((s) => { const c = { ...s, id: uid(), x: s.x + 24, y: s.y + 24 }; map.set(s.id, c.id); return c; });
      copies.forEach((c) => { if (map.has(c.parent)) c.parent = map.get(c.parent); });
      doc.elements.push(...copies);
      ui.selectedId = copies[0].id;
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
    const r = colorPop.getBoundingClientRect();
    const x = clamp(cx - r.width / 2, 8, window.innerWidth - r.width - 8);
    let y = cy + 12;
    if (y + r.height > window.innerHeight - 8) y = Math.max(8, cy - r.height - 12);
    colorPop.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
  }
  function closeColor() {
    colorPop.classList.remove('is-open');
    colorTarget = null;
    $('hexInput').blur();
  }

  $('hexInput').addEventListener('input', (e) => {
    const hex = PS.normalizeHex(e.target.value);
    if (!hex || e.target.value.replace('#', '').length < 6 && e.target.value.replace('#', '').length !== 3) return;
    applyColor(PS.tokenForHex(hex) || hex);
  });
  $('hexInput').addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === 'Escape') closeColor(); });
  $('colorClose').addEventListener('click', closeColor);
  document.addEventListener('pointerdown', (e) => {
    if (colorPop.classList.contains('is-open') && !colorPop.contains(e.target) && !viewportEl.contains(e.target) && !e.target.closest('.swatch--btn')) closeColor();
    if (!e.target.closest('.menu-anchor')) closeMenu();
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
  }
  document.querySelectorAll('[data-tool]').forEach((w) => w.addEventListener('click', () => setTool(w.dataset.tool)));
  $('undoBtn').addEventListener('click', undo);
  $('redoBtn').addEventListener('click', redo);
  $('fitBtn').addEventListener('click', fit);
  $('gridToggle').addEventListener('click', () => { ui.grid = !ui.grid; renderArtboard(); });
  $('presetSelect').addEventListener('change', (e) => {
    const p = PS.PRESETS[e.target.value];
    mutate(() => { doc.artboard.preset = e.target.value; doc.artboard.w = p.w; doc.artboard.h = p.h; });
    fit();
  });

  function closeMenu() { $('menu').classList.remove('show'); }
  $('menuBtn').addEventListener('click', () => $('menu').classList.toggle('show'));
  $('menu').addEventListener('click', (e) => {
    const a = e.target.closest('[data-action]');
    if (!a) return;
    e.preventDefault();
    closeMenu();
    const act = a.dataset.action;
    if (act === 'save') download('penta-sketch.json', snapDoc(), 'application/json');
    if (act === 'open') $('fileInput').click();
    if (act === 'help') $('helpScrim').classList.add('is-open');
    if (act === 'finger') {
      ui.fingerDraws = !ui.fingerDraws;
      $('fingerState').textContent = ui.fingerDraws ? 'On' : 'Off';
      toast(ui.fingerDraws ? 'Finger draws in Draw mode. Two fingers pan and zoom.' : 'Pencil draws, finger selects');
    }
    if (act === 'clear' && confirm('Clear the artboard? You can undo this.')) {
      mutate(() => { doc.elements = []; doc.artboard.bg = '--color-white'; ui.selectedId = null; });
    }
  });
  $('fileInput').addEventListener('change', async (e) => {
    const f = e.target.files[0];
    if (!f) return;
    try {
      const d = JSON.parse(await f.text());
      if (!d.artboard || !Array.isArray(d.elements)) throw new Error('bad file');
      checkpoint();
      doc = d;
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

  /* Export */
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
      toast('Selected. Use Copy from the menu');
    }
  });

  /* Keyboard (for desktop testing / iPad keyboard) */
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ' && !isTyping()) spaceDown = true;
    if (isTyping()) { if (e.key === 'Escape') blurEditing(); return; }
    const mod = e.metaKey || e.ctrlKey;
    if (mod && e.key.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? redo() : undo(); return; }
    if (mod && e.key.toLowerCase() === 'y') { e.preventDefault(); redo(); return; }
    if (mod && e.key.toLowerCase() === 'd') { e.preventDefault(); if (ui.selectedId) duplicate(ui.selectedId); return; }
    if (mod) return;
    if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); removeSelected(); }
    else if (e.key === 'Escape') { closeColor(); select(null); document.querySelectorAll('.scrim').forEach((s) => s.classList.remove('is-open')); }
    else if (e.key === 'v' || e.key === 'V') setTool('select');
    else if (e.key === 'p' || e.key === 'P') setTool('draw');
    else if (e.key === 'g' || e.key === 'G') { ui.grid = !ui.grid; renderArtboard(); }
    else if (e.key === '0') fit();
    else if (e.key === '=' || e.key === '+') { const r = viewportEl.getBoundingClientRect(); zoomAt(r.left + r.width / 2, r.top + r.height / 2, view.s * 1.2); }
    else if (e.key === '-') { const r = viewportEl.getBoundingClientRect(); zoomAt(r.left + r.width / 2, r.top + r.height / 2, view.s / 1.2); }
  });
  document.addEventListener('keyup', (e) => { if (e.key === ' ') spaceDown = false; });
  function isTyping() {
    const a = document.activeElement;
    return a && (a.isContentEditable || a.tagName === 'INPUT' || a.tagName === 'TEXTAREA' || a.tagName === 'SELECT');
  }

  /* Toast */
  let toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('is-open');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-open'), 2600);
  }

  /* ─────────────── Boot ─────────────── */
  load();
  buildRamps();
  setTool('draw');
  render(true);
  fit();
  window.addEventListener('resize', fit);
  window.addEventListener('pagehide', save);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') save(); });
  if (document.fonts) document.fonts.ready.then(() => { renderSelection(); positionInspector(); });

  // test / debug hook
  PS.app = { get doc() { return doc; }, view, ui, fit, flushPending, undo, redo };
})();
