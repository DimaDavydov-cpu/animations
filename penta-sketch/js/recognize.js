/* Penta Sketch: shape recognition (fully local, geometric heuristics, no ML).
 * recognize(strokes) -> { type: 'rect', x, y, w, h, score } | { type: 'none', reason } */
(function () {
  const PS = (window.PS = window.PS || {});

  function pathLength(pts) {
    let L = 0;
    for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
    return L;
  }

  /* Evenly resample a stroke so point density does not depend on drawing speed. */
  function resample(pts, step) {
    if (pts.length < 2) return pts.slice();
    const out = [{ x: pts[0].x, y: pts[0].y }];
    let acc = 0;
    for (let i = 1; i < pts.length; i++) {
      let a = { x: pts[i - 1].x, y: pts[i - 1].y };
      const b = pts[i];
      let seg = Math.hypot(b.x - a.x, b.y - a.y);
      while (acc + seg >= step) {
        const t = (step - acc) / seg;
        a = { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
        out.push(a);
        seg = Math.hypot(b.x - a.x, b.y - a.y);
        acc = 0;
      }
      acc += seg;
    }
    return out;
  }

  function hullArea(points) {
    const p = points.map((q) => [q.x, q.y]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    if (p.length < 3) return 0;
    const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const lower = [], upper = [];
    for (const q of p) { while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], q) <= 0) lower.pop(); lower.push(q); }
    for (let i = p.length - 1; i >= 0; i--) { const q = p[i]; while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], q) <= 0) upper.pop(); upper.push(q); }
    const h = lower.slice(0, -1).concat(upper.slice(0, -1));
    let A = 0;
    for (let i = 0; i < h.length; i++) { const a = h[i], b = h[(i + 1) % h.length]; A += a[0] * b[1] - b[0] * a[1]; }
    return Math.abs(A) / 2;
  }

  const median = (arr) => { const s = arr.slice().sort((a, b) => a - b); return s.length ? s[Math.floor(s.length / 2)] : NaN; };

  function coverage(values, from, to, bins) {
    const filled = new Array(bins).fill(false);
    const span = to - from || 1;
    for (const v of values) {
      const i = Math.floor(((v - from) / span) * bins);
      if (i >= 0 && i < bins) filled[i] = true;
    }
    return filled.filter(Boolean).length / bins;
  }

  /* A single, straight, roughly level stroke = a line of text (wireframe convention). */
  PS.recognizeLine = function (strokes, minLen = 40) {
    if (strokes.length !== 1) return null;
    const pts = strokes[0];
    if (pts.length < 4) return null;
    const a = pts[0], b = pts[pts.length - 1];
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    if (len < minLen) return null;
    let minY = Infinity, maxY = -Infinity, minX = Infinity, maxX = -Infinity, L = 0;
    for (let i = 0; i < pts.length; i++) {
      minX = Math.min(minX, pts[i].x); maxX = Math.max(maxX, pts[i].x);
      minY = Math.min(minY, pts[i].y); maxY = Math.max(maxY, pts[i].y);
      if (i) L += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
    }
    const w = maxX - minX, h = maxY - minY;
    if (h > Math.max(14, w * 0.1)) return null;        // roughly level
    // straight: no point strays far from the chord (jitter-proof), and no back-and-forth
    let dev = 0;
    for (const q of pts) dev = Math.max(dev, Math.abs((b.x - a.x) * (a.y - q.y) - (a.x - q.x) * (b.y - a.y)) / len);
    if (dev > Math.max(5, len * 0.04)) return null;
    if (L / Math.max(len, 1) > 1.6) return null;
    return { type: 'line', x1: minX, x2: maxX, y: (a.y + b.y) / 2 };
  };

  /* A small rectangle with a short straight line inside it = a button (the line is its label).
   * The rectangle may be several strokes; the line is one stroke lying inside it. */
  PS.recognizeButton = function (strokes) {
    if (strokes.length < 2) return null;
    for (let i = 0; i < strokes.length; i++) {
      const line = PS.recognizeLine([strokes[i]], 20);
      if (!line) continue;
      const rect = PS.recognize(strokes.filter((_, j) => j !== i));
      if (rect.type !== 'rect') continue;
      const inside = line.x1 >= rect.x + 3 && line.x2 <= rect.x + rect.w - 3 && line.y > rect.y + 0.2 * rect.h && line.y < rect.y + 0.8 * rect.h;
      if (!inside) continue;
      if (rect.h > 80 || rect.w > 400) return { type: 'bigshape', rect, line };   // too large for a button
      return { type: 'button', rect, line };
    }
    return null;
  };

  PS.recognize = function (strokes) {
    const raw = strokes.flat();
    if (raw.length < 4) return { type: 'none', reason: 'tiny' };
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const p of raw) { minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y); }
    const w = maxX - minX, h = maxY - minY, minSide = Math.min(w, h);
    if (w < 32 || h < 24) return { type: 'none', reason: 'small' };

    const L = strokes.reduce((s, st) => s + pathLength(st), 0);
    const P = 2 * (w + h);
    const lengthRatio = L / P;
    // an open rectangle (gaps, loose corners) is fine: it just needs enough ink for four edges
    if (lengthRatio < 0.5 || lengthRatio > 1.9) return { type: 'none', reason: 'length', lengthRatio };

    const step = Math.max(2, P / 200);
    const pts = strokes.flatMap((st) => resample(st, step));

    // 1) almost all ink lies near the bounding box edges
    const tol = Math.max(10, 0.2 * minSide);
    const sides = { l: [], r: [], t: [], b: [] };
    let near = 0;
    for (const p of pts) {
      const d = { l: p.x - minX, r: maxX - p.x, t: p.y - minY, b: maxY - p.y };
      const k = Object.keys(d).reduce((a, b2) => (d[a] <= d[b2] ? a : b2));
      if (d[k] <= tol) { near++; sides[k].push(p); }
    }
    const nearFrac = near / pts.length;
    if (nearFrac < 0.85) return { type: 'none', reason: 'interior', nearFrac };

    // 2) all four edges (top, right, bottom, left) are present; they need not be closed or complete
    const cov = {
      l: coverage(sides.l.map((p) => p.y), minY, maxY, 10),
      r: coverage(sides.r.map((p) => p.y), minY, maxY, 10),
      t: coverage(sides.t.map((p) => p.x), minX, maxX, 10),
      b: coverage(sides.b.map((p) => p.x), minX, maxX, 10),
    };
    const minCov = Math.min(cov.l, cov.r, cov.t, cov.b);
    if (minCov < 0.3) return { type: 'none', reason: 'open', cov };

    // 3) square-ish corners: rectangles fill their bbox, ellipses fill ~78%
    const fill = hullArea(pts) / (w * h);
    if (fill < 0.8) return { type: 'none', reason: 'round', fill };

    // Use medians of side points (ignores corner overshoot) for the final edges.
    const x1 = median(sides.l.map((p) => p.x)), x2 = median(sides.r.map((p) => p.x));
    const y1 = median(sides.t.map((p) => p.y)), y2 = median(sides.b.map((p) => p.y));
    const rx = isNaN(x1) ? minX : x1, ry = isNaN(y1) ? minY : y1;
    const rw = (isNaN(x2) ? maxX : x2) - rx, rh = (isNaN(y2) ? maxY : y2) - ry;
    const score = (nearFrac + minCov + fill) / 3;
    return { type: 'rect', x: rx, y: ry, w: rw, h: rh, score, debug: { nearFrac, cov, fill, lengthRatio } };
  };
})();
