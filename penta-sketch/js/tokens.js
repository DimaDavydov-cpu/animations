/* Penta Sketch: token definitions.
 * Color VALUES are read at runtime from ../ds_penta.css (the repo's Penta token file),
 * so this file only lists token names and their intent. Change a token there and the
 * app follows. */
(function () {
  const PS = (window.PS = window.PS || {});

  const css = () => getComputedStyle(document.documentElement);
  const read = (name) => css().getPropertyValue(name).trim();

  /* Palette shown in the color picker, grouped by Penta family.
   * Grey is the UI default; chromatic families are functional (see Penta rules). */
  PS.PALETTE = [
    { family: 'Neutral', note: 'UI default', tokens: ['--color-white', '--grey-100', '--grey-200', '--grey-300', '--grey-400', '--grey-500', '--grey-600', '--grey-700', '--grey-800', '--grey-900', '--grey-1000', '--grey-1100', '--grey-1200', '--color-black'] },
    { family: 'Green', note: 'Positive / success', tokens: ['--green-100', '--green-200', '--green-300', '--green-400', '--green-500', '--green-600', '--green-700', '--green-800', '--green-900', '--green-1000'] },
    { family: 'Blue', note: 'Informative', tokens: ['--blue-100', '--blue-500', '--blue-700'] },
    { family: 'Orange', note: 'Warning', tokens: ['--orange-100', '--orange-500', '--orange-700'] },
    { family: 'Red', note: 'Critical / destructive', tokens: ['--red-100', '--red-500', '--red-700'] },
    { family: 'Yellow', note: '', tokens: ['--yellow-100', '--yellow-500', '--yellow-700'] },
    { family: 'Purple', note: 'Tier / brand accent', tokens: ['--purple-100', '--purple-500', '--purple-700'] },
    { family: 'Lime', note: '', tokens: ['--lime-light', '--lime'] },
  ];

  /* Normalize any CSS color string we read into lowercase #rrggbb. */
  PS.normalizeHex = function (v) {
    if (!v) return null;
    v = v.trim().toLowerCase();
    if (!v.startsWith('#')) v = '#' + v;
    if (/^#[0-9a-f]{3}$/.test(v)) v = '#' + v[1] + v[1] + v[2] + v[2] + v[3] + v[3];
    return /^#[0-9a-f]{6}$/.test(v) ? v : null;
  };

  PS.tokenValue = (name) => PS.normalizeHex(read(name));

  /* hex -> token name (first match in palette order), or null when it is not a Penta token */
  PS.tokenForHex = function (hex) {
    hex = PS.normalizeHex(hex);
    if (!hex) return null;
    for (const g of PS.PALETTE) for (const t of g.tokens) if (PS.tokenValue(t) === hex) return t;
    return null;
  };

  /* Text levels: Penta type ramp (Macan). tag = semantic HTML used on export. */
  PS.TEXT_LEVELS = [
    { id: 'display', label: 'Display', tag: 'h1', size: 48, line: 57, weight: 700 },
    { id: 'h1', label: 'H1', tag: 'h1', size: 32, line: 38, weight: 700 },
    { id: 'h2', label: 'H2', tag: 'h2', size: 24, line: 32, weight: 700 },
    { id: 'h3', label: 'H3', tag: 'h3', size: 20, line: 28, weight: 700 },
    { id: 'h4', label: 'H4', tag: 'h4', size: 18, line: 25, weight: 700 },
    { id: 'subtitle', label: 'Subtitle', tag: 'h5', size: 16, line: 24, weight: 700 },
    { id: 'body', label: 'Body', tag: 'p', size: 16, line: 24, weight: 400 },
    { id: 'body-sm', label: 'Body S', tag: 'p', size: 14, line: 22, weight: 400 },
    { id: 'caption', label: 'Caption', tag: 'p', size: 12, line: 18, weight: 400 },
    { id: 'overline', label: 'Overline', tag: 'span', size: 10, line: 17, weight: 700, caps: true },
  ];
  PS.level = (id) => PS.TEXT_LEVELS.find((l) => l.id === id) || PS.TEXT_LEVELS[6];

  /* Text color by role (foreground tokens), not by value. */
  PS.TEXT_COLORS = [
    { id: 'primary', label: 'Primary', token: '--foreground-primary' },
    { id: 'secondary', label: 'Secondary', token: '--foreground-secondary' },
    { id: 'tertiary', label: 'Tertiary', token: '--foreground-tertiary' },
    { id: 'inverse', label: 'Inverse', token: '--foreground-inverse' },
  ];

  PS.RADII = [
    { id: 'none', label: '0', token: null, px: 0 },
    { id: 'xs', label: '4', token: '--radius-xs' },
    { id: 'sm', label: '6', token: '--radius-sm' },
    { id: 'md', label: '8', token: '--radius-md' },
    { id: 'lg', label: '12', token: '--radius-lg' },
    { id: 'xl', label: '16', token: '--radius-xl' },
    { id: '2xl', label: '20', token: '--radius-2xl' },
  ];

  /* Card border by role. Resting cards use a hairline border, not a shadow. */
  PS.BORDERS = [
    { id: 'none', label: 'None', token: null },
    { id: 'secondary', label: 'Hairline', token: '--border-secondary' },
    { id: 'primary', label: 'Default', token: '--border-primary' },
    { id: 'strong', label: 'Strong', token: '--border-strong' },
  ];

  PS.ELEVATIONS = [
    { id: 'none', label: 'Flat', token: null },
    { id: 'z1', label: 'Z1', token: '--shadow-z1' },
    { id: 'z2', label: 'Z2', token: '--shadow-z2' },
    { id: 'z3', label: 'Z3', token: '--shadow-z3' },
    { id: 'z4', label: 'Z4', token: '--shadow-z4' },
  ];

  /* Artboard presets with the Penta column grid (12 / 8 / 4, gutter 16, margin 32). */
  /* full = the artboard is the screen itself (size follows the viewport, 100% scale) */
  PS.PRESETS = {
    full: { label: 'Adaptive', dynamic: true },
    tablet: { label: 'iPad', w: 834, h: 1194, columns: 8 },
    mobile: { label: 'Mobile', w: 390, h: 844, columns: 4 },
    desktop: { label: 'Desktop', w: 1440, h: 1024, columns: 12 },
  };
  PS.GRID = { gutter: 16, margin: 32, snap: 8 };

  PS.cssVar = (token) => (token ? `var(${token})` : null);
  PS.read = read;
})();

/* ── Stack (auto-layout) options for cards ── */
(function () {
  const PS = window.PS;
  /* Penta spacing scale from ds_penta.css (gap + padding) */
  PS.SPACING = ['--space-0', '--space-1', '--space-2', '--space-3', '--space-4', '--space-5', '--space-6', '--space-7', '--space-8', '--space-10', '--space-12', '--space-16', '--space-20'];
  PS.spacePx = (t) => parseInt(PS.read(t), 10) || 0;
  PS.DIRECTIONS = [
    { id: 'column', label: 'Vertical', icon: '↓' },
    { id: 'row', label: 'Horizontal', icon: '→' },
    { id: 'grid', label: 'Grid', icon: '▦' },
  ];
  PS.GRID_COLS = [2, 3, 4, 5, 6];
  /* Grid stack column modes: a fixed count, or auto-fit with minmax(MIN, 1fr) */
  PS.GRID_MODES = [
    { id: 'count', label: 'Count' },
    { id: 'auto', label: 'Auto-fit', title: 'repeat(auto-fit, minmax(min, 1fr))' },
  ];
  PS.MIN_UNITS = ['px', '%', 'vw', 'vh', 'rem'];
  /* Buttons: Penta default = solid dark (surface-inverse) with white text */
  PS.BTN_STYLES = [{ id: 'solid', label: 'Solid' }, { id: 'outline', label: 'Outlined' }, { id: 'ghost', label: 'Ghost' }];
  PS.BTN_SIZES = [{ id: 'small', label: 'Small', title: '36px (ds_penta .small)' }, { id: 'big', label: 'Big', title: '42px (ds_penta default)' }];
  PS.ALIGNS = [
    { id: 'flex-start', label: 'Start' },
    { id: 'center', label: 'Center' },
    { id: 'flex-end', label: 'End' },
    { id: 'stretch', label: 'Stretch' },
    { id: 'baseline', label: 'Baseline' },
  ];
  PS.JUSTIFIES = [
    { id: 'flex-start', label: 'Start' },
    { id: 'center', label: 'Center' },
    { id: 'flex-end', label: 'End' },
    { id: 'space-between', label: 'Between' },
    { id: 'space-around', label: 'Around' },
    { id: 'space-evenly', label: 'Evenly' },
  ];
  PS.SIZE_MODES = [
    { id: 'fixed', label: 'Fixed' },
    { id: 'fill', label: 'Fill' },
    { id: 'hug', label: 'Hug' },
  ];
  PS.defaultLayout = () => ({ dir: 'column', gap: '--space-4', padX: '--space-6', padY: '--space-6', align: 'stretch', justify: 'flex-start', wrap: false, cols: 2 });
})();
