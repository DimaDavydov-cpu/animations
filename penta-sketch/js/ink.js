/* Penta Sketch: pressure-sensitive ink rendering.
 * Turns sampled points {x, y, p} into a filled SVG outline path (variable width). */
(function () {
  const PS = (window.PS = window.PS || {});

  function smooth(points) {
    if (points.length < 3) return points.slice();
    const out = [points[0]];
    for (let i = 1; i < points.length - 1; i++) {
      const a = points[i - 1], b = points[i], c = points[i + 1];
      out.push({ x: (a.x + 2 * b.x + c.x) / 4, y: (a.y + 2 * b.y + c.y) / 4, p: (a.p + 2 * b.p + c.p) / 4 });
    }
    out.push(points[points.length - 1]);
    return out;
  }

  /* Drop points that are closer than minDist to the previous kept point. */
  function decimate(points, minDist) {
    if (!points.length) return [];
    const out = [points[0]];
    for (let i = 1; i < points.length; i++) {
      const l = out[out.length - 1];
      if (Math.hypot(points[i].x - l.x, points[i].y - l.y) >= minDist) out.push(points[i]);
    }
    if (out.length > 1 || points.length === 1) {
      const last = points[points.length - 1];
      if (out[out.length - 1] !== last) out.push(last);
    }
    return out;
  }

  /* size: base diameter in artboard px. */
  PS.strokePath = function (raw, size) {
    const pts = smooth(smooth(decimate(raw, 1.2)));
    if (!pts.length) return '';
    const r = (p) => (size / 2) * (0.45 + 0.85 * Math.min(1, Math.max(0.05, p)));
    if (pts.length === 1) {
      const p = pts[0], rr = r(p.p);
      return `M${p.x - rr},${p.y}a${rr},${rr} 0 1,0 ${rr * 2},0a${rr},${rr} 0 1,0 ${-rr * 2},0Z`;
    }
    const left = [], right = [];
    for (let i = 0; i < pts.length; i++) {
      const prev = pts[Math.max(0, i - 1)], next = pts[Math.min(pts.length - 1, i + 1)];
      let dx = next.x - prev.x, dy = next.y - prev.y;
      const len = Math.hypot(dx, dy) || 1;
      dx /= len; dy /= len;
      // taper the ends slightly
      const t = Math.min(1, i / 3, (pts.length - 1 - i) / 3 + 0.35);
      const rr = r(pts[i].p) * (0.55 + 0.45 * t);
      left.push([pts[i].x - dy * rr, pts[i].y + dx * rr]);
      right.push([pts[i].x + dy * rr, pts[i].y - dx * rr]);
    }
    const f = (n) => Math.round(n * 10) / 10;
    let d = `M${f(left[0][0])},${f(left[0][1])}`;
    for (let i = 1; i < left.length; i++) d += `L${f(left[i][0])},${f(left[i][1])}`;
    // round end cap
    const end = pts[pts.length - 1], er = r(end.p) * 0.55;
    d += `A${f(er)},${f(er)} 0 0,1 ${f(right[right.length - 1][0])},${f(right[right.length - 1][1])}`;
    for (let i = right.length - 2; i >= 0; i--) d += `L${f(right[i][0])},${f(right[i][1])}`;
    const sr = r(pts[0].p) * 0.55;
    d += `A${f(sr)},${f(sr)} 0 0,1 ${f(left[0][0])},${f(left[0][1])}Z`;
    return d;
  };
})();
