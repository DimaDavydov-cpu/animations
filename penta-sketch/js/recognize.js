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
  /* A "+" drawn with two strokes: one horizontal, one vertical, crossing near both middles. */
  PS.recognizePlus = function (strokes) {
    if (strokes.length !== 2) return null;
    const info = strokes.map((pts) => {
      if (pts.length < 4) return null;
      const a = pts[0], b = pts[pts.length - 1];
      const len = Math.hypot(b.x - a.x, b.y - a.y);
      if (len < 20 || len > 260) return null;
      let dev = 0;
      for (const q of pts) dev = Math.max(dev, Math.abs((b.x - a.x) * (a.y - q.y) - (a.x - q.x) * (b.y - a.y)) / len);
      if (dev > Math.max(5, len * 0.06)) return null;            // straight
      const dx = Math.abs(b.x - a.x), dy = Math.abs(b.y - a.y);
      const orient = dx > dy * 3 ? 'h' : dy > dx * 3 ? 'v' : null;
      if (!orient) return null;
      return { orient, len, x1: Math.min(a.x, b.x), x2: Math.max(a.x, b.x), y1: Math.min(a.y, b.y), y2: Math.max(a.y, b.y), my: (a.y + b.y) / 2, mx: (a.x + b.x) / 2 };
    });
    if (!info[0] || !info[1] || info[0].orient === info[1].orient) return null;
    const h = info.find((i) => i.orient === 'h'), v = info.find((i) => i.orient === 'v');
    const ratio = h.len / v.len;
    if (ratio < 0.45 || ratio > 2.2) return null;
    const inX = v.mx > h.x1 + 0.25 * h.len && v.mx < h.x2 - 0.25 * h.len;   // vertical crosses the horizontal near its middle
    const inY = h.my > v.y1 + 0.25 * v.len && h.my < v.y2 - 0.25 * v.len;
    if (!inX || !inY) return null;
    return { type: 'plus', x: v.mx, y: h.my };
  };

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

  const strictRect = function (strokes) {
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

  /* ── loose rectangle: four straight-ish sides in four places, no closed loop needed ── */
  function rdp(pts, eps) {
    const keep = new Array(pts.length).fill(false);
    keep[0] = keep[pts.length - 1] = true;
    const stack = [[0, pts.length - 1]];
    while (stack.length) {
      const [a, b] = stack.pop();
      const A = pts[a], B = pts[b];
      const dx = B.x - A.x, dy = B.y - A.y, len = Math.hypot(dx, dy);
      let maxD = 0, idx = -1;
      for (let i = a + 1; i < b; i++) {
        const q = pts[i];
        const d = len < 2 ? Math.hypot(q.x - A.x, q.y - A.y) : Math.abs(dx * (A.y - q.y) - (A.x - q.x) * dy) / len;
        if (d > maxD) { maxD = d; idx = i; }
      }
      if (maxD > eps && idx > 0) { keep[idx] = true; stack.push([a, idx], [idx, b]); }
    }
    return pts.filter((_, i) => keep[i]);
  }
  function segmentsOf(stroke, eps) {
    const pts = resample(stroke, 3);
    if (pts.length < 2) return [];
    const poly = rdp(pts, eps);
    const out = [];
    for (let i = 1; i < poly.length; i++) {
      const a = poly[i - 1], b = poly[i], len = Math.hypot(b.x - a.x, b.y - a.y);
      if (len >= 8) out.push({ a, b, len });
    }
    return out;
  }
  function unionLen(iv) {
    iv.sort((p, q) => p[0] - q[0]);
    let tot = 0, cs = null, ce = null;
    for (const [s0, e0] of iv) {
      if (cs === null) { cs = s0; ce = e0; }
      else if (s0 > ce) { tot += ce - cs; cs = s0; ce = e0; }
      else ce = Math.max(ce, e0);
    }
    return cs === null ? 0 : tot + (ce - cs);
  }
  function straightSides(strokes) {
    const raw = strokes.flat();
    if (raw.length < 4) return null;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const p of raw) { minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y); }
    const w = maxX - minX, h = maxY - minY;
    const eps = Math.max(3, 0.03 * Math.max(w, h));
    const segs = strokes.flatMap((st) => segmentsOf(st, eps));
    const H = [], V = [];
    let total = 0, aligned = 0;
    for (const sg of segs) {
      total += sg.len;
      const dx = Math.abs(sg.b.x - sg.a.x), dy = Math.abs(sg.b.y - sg.a.y);
      if (dx > dy * 2.5) { H.push(sg); aligned += sg.len; } else if (dy > dx * 2.5) { V.push(sg); aligned += sg.len; }
    }
    return { minX, minY, maxX, maxY, w, h, H, V, total, aligned };
  }
  function looseRect(strokes) {
    const g = straightSides(strokes);
    if (!g || g.w < 32 || g.h < 24 || !g.total) return null;
    if (g.aligned / g.total < 0.6) return null;                 // mostly curves or diagonals: not a rectangle
    const bandH = 0.3 * g.h, bandW = 0.3 * g.w;
    const my = (s) => (s.a.y + s.b.y) / 2, mx = (s) => (s.a.x + s.b.x) / 2;
    const top = g.H.filter((s) => my(s) - g.minY <= bandH), bot = g.H.filter((s) => g.maxY - my(s) <= bandH);
    const left = g.V.filter((s) => mx(s) - g.minX <= bandW), right = g.V.filter((s) => g.maxX - mx(s) <= bandW);
    const cov = (runs, axis, size) => unionLen(runs.map((s) => (axis === 'x' ? [Math.min(s.a.x, s.b.x), Math.max(s.a.x, s.b.x)] : [Math.min(s.a.y, s.b.y), Math.max(s.a.y, s.b.y)]))) / size;
    const need = 0.35;                                            // each side only needs to be visible, not complete
    if (cov(top, 'x', g.w) < need || cov(bot, 'x', g.w) < need || cov(left, 'y', g.h) < need || cov(right, 'y', g.h) < need) return null;
    const wmean = (runs, f) => runs.reduce((sum, s) => sum + s.len * f(s), 0) / runs.reduce((sum, s) => sum + s.len, 0);
    const y1 = wmean(top, my), y2 = wmean(bot, my), x1 = wmean(left, mx), x2 = wmean(right, mx);
    if (x2 - x1 < 0.6 * g.w || y2 - y1 < 0.6 * g.h) return null;
    return { type: 'rect', x: x1, y: y1, w: x2 - x1, h: y2 - y1, score: 0.5, loose: true };
  }
  PS.recognize = function (strokes) {
    const r = strictRect(strokes);
    if (r.type === 'rect') return r;
    return looseRect(strokes) || r;
  };

  /* Does what is drawn so far look like PART of a rectangle (an L, a U, two parallel sides)?
   * Then the app waits longer for the remaining strokes. */
  PS.looksPartialRect = function (strokes) {
    const g = straightSides(strokes);
    if (!g || !g.total || g.aligned / g.total < 0.6) return false;
    const long = (runs, min) => runs.filter((s) => s.len >= min);
    const H = long(g.H, 25), V = long(g.V, 25);
    if (H.length && V.length) return true;                                           // a corner or more
    const spread = (runs, f) => runs.length >= 2 && Math.max(...runs.map(f)) - Math.min(...runs.map(f)) >= 24;
    return spread(H, (s) => (s.a.y + s.b.y) / 2) || spread(V, (s) => (s.a.x + s.b.x) / 2);   // two parallel sides
  };
})();
