/* Penta Sketch: export the artboard to standalone HTML + CSS using Penta tokens. */
(function () {
  const PS = (window.PS = window.PS || {});

  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  PS.colorCss = (v) => (!v ? 'transparent' : v.startsWith('--') ? `var(${v})` : v);

  /* Collect every token the document references so :root only ships what is used. */
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
      } else if (el.type === 'text') {
        add((PS.TEXT_COLORS.find((c) => c.id === el.color) || {}).token);
      }
    }
    return [...used];
  }

  function cardStyle(el, parent) {
    const b = PS.BORDERS.find((x) => x.id === el.border);
    const r = PS.RADII.find((x) => x.id === el.radius);
    const e = PS.ELEVATIONS.find((x) => x.id === el.elevation);
    const s = [
      `left: ${el.x - (parent ? parent.x : 0)}px`, `top: ${el.y - (parent ? parent.y : 0)}px`,
      `width: ${el.w}px`, `height: ${el.h}px`,
      `background: ${PS.colorCss(el.fill)}`,
    ];
    if (b && b.token) s.push(`border: 1px solid var(${b.token})`);
    if (r) s.push(`border-radius: ${r.token ? `var(${r.token})` : '0'}`);
    if (e && e.token) s.push(`box-shadow: var(${e.token})`);
    return s.join('; ');
  }

  function textStyle(el, parent) {
    const c = PS.TEXT_COLORS.find((x) => x.id === el.color) || PS.TEXT_COLORS[0];
    const s = [`left: ${el.x - (parent ? parent.x : 0)}px`, `top: ${el.y - (parent ? parent.y : 0)}px`, `color: var(${c.token})`];
    if (el.w) s.push(`width: ${el.w}px`);
    if (el.align && el.align !== 'left') s.push(`text-align: ${el.align}`);
    return s.join('; ');
  }

  PS.exportHTML = function (doc, title) {
    const byParent = new Map();
    for (const el of doc.elements) {
      const k = el.parent || 'root';
      if (!byParent.has(k)) byParent.set(k, []);
      byParent.get(k).push(el);
    }
    const index = new Map(doc.elements.map((e) => [e.id, e]));

    const render = (parentId, depth) => {
      const kids = byParent.get(parentId) || [];
      const pad = '  '.repeat(depth);
      return kids.map((el) => {
        const parent = el.parent ? index.get(el.parent) : null;
        if (el.type === 'card') {
          const inner = render(el.id, depth + 1);
          return `${pad}<div class="card" style="${cardStyle(el, parent)}">${inner ? '\n' + inner + '\n' + pad : ''}</div>`;
        }
        const lvl = PS.level(el.level);
        const text = esc(el.text).replace(/\n/g, '<br>');
        return `${pad}<${lvl.tag} class="t-${lvl.id}" style="${textStyle(el, parent)}">${text}</${lvl.tag}>`;
      }).join('\n');
    };

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
    .card { position: absolute; }
    .artboard h1, .artboard h2, .artboard h3, .artboard h4, .artboard h5, .artboard p, .artboard span { position: absolute; margin: 0; white-space: pre-wrap; letter-spacing: 0; }
${levelCss}
  </style>
</head>
<body>
  <main class="artboard">
${render('root', 2)}
  </main>
</body>
</html>
`;
  };
})();
