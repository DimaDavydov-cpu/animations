/* Penta Sketch: shared style builders (used by the canvas AND the HTML export, so what
 * you see is what you export) + standalone HTML export. */
(function () {
  const PS = (window.PS = window.PS || {});

  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  PS.colorCss = (v) => (!v ? 'transparent' : v.startsWith('--') ? `var(${v})` : v);

  /* Card as a flex stack: direction, gap, padding, alignment. */
  /* kids: the card's children in order (Grid uses them to build its column tracks:
   * a Fixed-width child keeps its px track, every other column shares the rest). */
  PS.stackCss = function (el, kids = []) {
    const L = el.layout;
    if (L.dir === 'grid') {
      const n = L.cols || 2;
      const tracks = [];
      for (let i = 0; i < n; i++) {
        const k = kids[i];
        tracks.push(k && k.type === 'card' && k.sizeW === 'fixed' ? `${k.w}px` : 'minmax(0, 1fr)');
      }
      return [
        ['display', 'grid'],
        ['grid-template-columns', tracks.join(' ')],
        ['gap', `var(${L.gap})`],
        ['padding', `var(${L.padY}) var(${L.padX})`],
        ['align-items', L.align],
      ];
    }
    const out = [
      ['display', 'flex'],
      ['flex-direction', L.dir],
      ['gap', `var(${L.gap})`],
      ['padding', `var(${L.padY}) var(${L.padX})`],
      ['align-items', L.align],
      ['justify-content', L.justify],
    ];
    if (L.wrap && L.dir === 'row') out.push(['flex-wrap', 'wrap']);
    return out;
  };

  PS.skinCss = function (el) {
    const b = PS.BORDERS.find((x) => x.id === el.border);
    const r = PS.RADII.find((x) => x.id === el.radius);
    const e = PS.ELEVATIONS.find((x) => x.id === el.elevation);
    const out = [['background', PS.colorCss(el.fill)]];
    if (b && b.token) out.push(['border', `1px solid var(${b.token})`]);
    out.push(['border-radius', r && r.token ? `var(${r.token})` : '0']);
    if (e && e.token) out.push(['box-shadow', `var(${e.token})`]);
    return out;
  };

  /* Position + sizing. Top-level elements sit absolutely on the artboard;
   * elements inside a card are flex children sized by Fixed / Fill / Hug. */
  PS.sizeCss = function (el, parent) {
    const out = [];
    if (!parent) {
      out.push(['position', 'absolute'], ['left', el.x + 'px'], ['top', el.y + 'px']);
      if (el.type === 'card') {
        // 'cols': width derived from the layout grid columns it spans (x/w kept in sync)
        out.push(['width', el.sizeW === 'hug' ? 'max-content' : el.w + 'px']);
        out.push(el.sizeH === 'hug' ? ['min-height', '24px'] : ['height', el.h + 'px']);
      }
      return out;
    }
    out.push(['position', 'relative']);
    if (el.type !== 'card') { out.push(['min-width', '0']); return out; }
    if (parent.layout.dir === 'grid') {
      // grid cell: Fixed width is the column track itself; Fill/Hug live inside the cell
      if (el.sizeW === 'hug') out.push(['justify-self', 'start']);
      out.push(['min-width', '0']);
      if (el.sizeH === 'fixed') out.push(['height', el.h + 'px']);
      else if (el.sizeH === 'fill') out.push(['align-self', 'stretch']);
      else if (parent.layout.align === 'stretch') out.push(['align-self', 'start']);
      return out;
    }
    const row = parent.layout.dir === 'row';
    const main = row ? el.sizeW : el.sizeH, cross = row ? el.sizeH : el.sizeW;
    const mainProp = row ? 'width' : 'height', crossProp = row ? 'height' : 'width';
    const mainPx = row ? el.w : el.h, crossPx = row ? el.h : el.w;
    if (main === 'fill') out.push(['flex', '1 1 0'], ['min-' + mainProp, '0']);
    else if (main === 'fixed') out.push([mainProp, mainPx + 'px'], ['flex-shrink', '0']);
    else out.push(['flex', '0 0 auto']);
    if (cross === 'fill') out.push(['align-self', 'stretch']);
    else if (cross === 'fixed') out.push([crossProp, crossPx + 'px']);
    if (cross !== 'fill' && parent.layout.align === 'stretch') out.push(['align-self', 'flex-start']);
    return out;
  };

  PS.textColorCss = (el) => [['color', `var(${(PS.TEXT_COLORS.find((x) => x.id === el.color) || PS.TEXT_COLORS[0]).token})`]];

  const toStyle = (pairs) => pairs.map(([k, v]) => `${k}: ${v}`).join('; ');

  function collectTokens(doc) {
    const used = new Set(['--font-primary', '--grey-200']);
    const add = (t) => t && t.startsWith('--') && used.add(t);
    add(doc.artboard.bg);
    for (const el of doc.elements) {
      if (el.type === 'card') {
        add(el.fill);
        add((PS.BORDERS.find((b) => b.id === el.border) || {}).token);
        add((PS.RADII.find((r) => r.id === el.radius) || {}).token);
        add((PS.ELEVATIONS.find((e) => e.id === el.elevation) || {}).token);
        add(el.layout.gap); add(el.layout.padX); add(el.layout.padY);
      } else if (el.type === 'text') {
        add((PS.TEXT_COLORS.find((c) => c.id === el.color) || {}).token);
      }
    }
    return [...used];
  }

  PS.exportHTML = function (doc, title) {
    const kids = new Map();
    for (const el of doc.elements) {
      const k = el.parent || '';
      if (!kids.has(k)) kids.set(k, []);
      kids.get(k).push(el);
    }
    const index = new Map(doc.elements.map((e) => [e.id, e]));

    const render = (parentId, depth) => (kids.get(parentId) || []).map((el) => {
      const parent = el.parent ? index.get(el.parent) : null;
      const pad = '  '.repeat(depth);
      if (el.type === 'card') {
        const style = toStyle([...PS.sizeCss(el, parent), ...PS.stackCss(el, kids.get(el.id) || []), ...PS.skinCss(el)]);
        const inner = render(el.id, depth + 1);
        return `${pad}<div class="card" style="${style}">${inner ? '\n' + inner + '\n' + pad : ''}</div>`;
      }
      const lvl = PS.level(el.level);
      const extra = parent ? [] : [['max-width', Math.max(48, doc.artboard.w - el.x) + 'px']];
      const style = toStyle([...PS.sizeCss(el, parent), ...extra, ...PS.textColorCss(el)]);
      return `${pad}<${lvl.tag} class="t-${lvl.id}" style="${style}">${esc(el.text).replace(/\n/g, '<br>')}</${lvl.tag}>`;
    }).join('\n');

    const tokens = collectTokens(doc).map((t) => `      ${t}: ${PS.read(t)};`).join('\n');
    const levelsUsed = [...new Set(doc.elements.filter((e) => e.type === 'text').map((e) => e.level))];
    const levelCss = levelsUsed.map((id) => {
      const l = PS.level(id);
      return `    .t-${l.id} { font-size: ${l.size}px; line-height: ${l.line}px; font-weight: ${l.weight};${l.caps ? ' text-transform: uppercase; letter-spacing: 0.5px;' : ''} }`;
    }).join('\n');
    const a = doc.artboard;

    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title || 'Penta Sketch export')}</title>
  <style>
    @font-face { font-family: 'Macan'; src: url('https://npm-assets.fiverrcdn.com/assets/uploads/macan-regular.woff2') format('woff2'); font-weight: 400; }
    @font-face { font-family: 'Macan'; src: url('https://npm-assets.fiverrcdn.com/assets/uploads/macan-semibold.woff2') format('woff2'); font-weight: 600; }
    @font-face { font-family: 'Macan'; src: url('https://npm-assets.fiverrcdn.com/assets/uploads/macan-bold.woff2') format('woff2'); font-weight: 700; }

    /* Penta tokens (from ds_penta.css) */
    :root {
${tokens}
    }

    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; font-family: var(--font-primary); background: var(--grey-200); }
    .artboard { position: relative; width: ${a.w}px; min-height: ${a.h}px; margin: 0 auto; overflow: hidden; background: ${PS.colorCss(a.bg)}; }
    .artboard h1, .artboard h2, .artboard h3, .artboard h4, .artboard h5, .artboard p, .artboard span { margin: 0; white-space: pre-wrap; overflow-wrap: break-word; letter-spacing: 0; }
${levelCss}
  </style>
</head>
<body>
  <main class="artboard">
${render('', 2)}
  </main>
</body>
</html>
`;
  };
})();
