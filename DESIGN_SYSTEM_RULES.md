# Penta UI Design System Rules

> **Purpose**: Design system tokens and rules for LLM-powered prototype generation via vibe coding.

---

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing](#spacing)
4. [Border Radius](#border-radius)
5. [Shadows & Elevation](#shadows--elevation)
6. [Grid System](#grid-system)
7. [Z-Index Layers](#z-index-layers)
8. [Responsive Breakpoints](#responsive-breakpoints)
9. [CSS Variables Reference](#css-variables-reference)

---

## Color System

### Base Color Palette

```css
:root {
  /* Greys */
  --color-grey-100: #F7F7F7;
  --color-grey-200: #EFEFF0;
  --color-grey-300: #E4E4E5;
  --color-grey-400: #C8C8CA;
  --color-grey-500: #B1B1B4;
  --color-grey-600: #949497;
  --color-grey-700: #74747A;
  --color-grey-800: #62626A;
  --color-grey-900: #404047;
  --color-grey-1000: #2E2E33;
  --color-grey-1100: #222226;
  --color-grey-1200: #18181B;

  /* White & Black */
  --color-white: #FFFFFF;
  --color-black: #0D0D0D;

  /* Green (Primary) */
  --color-green-100: #EFFAF4;
  --color-green-200: #D6F3E2;
  --color-green-300: #A2E4BD;
  --color-green-400: #6DD598;
  --color-green-500: #38C673;
  --color-green-600: #22B35E;
  --color-green-700: #1DBF57;
  --color-green-800: #19A34A;
  --color-green-900: #158A3F;
  --color-green-1000: #136534;
  --color-green-1100: #0E4826;
  --color-green-1200: #0A2E19;

  /* Blue */
  --color-blue-100: #F0F5FF;
  --color-blue-200: #D9E6FF;
  --color-blue-300: #B3CDFF;
  --color-blue-400: #8CB3FF;
  --color-blue-500: #669AFF;
  --color-blue-600: #4080FF;
  --color-blue-700: #3373F5;
  --color-blue-800: #2B63D6;
  --color-blue-900: #2352B3;
  --color-blue-1000: #1A3D85;
  --color-blue-1100: #112857;
  --color-blue-1200: #091429;

  /* Red */
  --color-red-100: #FEF2F2;
  --color-red-200: #FEE2E2;
  --color-red-300: #FECACA;
  --color-red-400: #FCA5A5;
  --color-red-500: #F87171;
  --color-red-600: #EF4444;
  --color-red-700: #DC2626;
  --color-red-800: #B91C1C;
  --color-red-900: #991B1B;
  --color-red-1000: #7F1D1D;
  --color-red-1100: #5C1515;
  --color-red-1200: #3B0E0E;

  /* Orange */
  --color-orange-100: #FFF7ED;
  --color-orange-200: #FFEDD5;
  --color-orange-300: #FED7AA;
  --color-orange-400: #FDBA74;
  --color-orange-500: #FB923C;
  --color-orange-600: #F97316;
  --color-orange-700: #EA580C;
  --color-orange-800: #C2410C;
  --color-orange-900: #9A3412;
  --color-orange-1000: #7C2D12;
  --color-orange-1100: #5C2210;
  --color-orange-1200: #3B160A;

  /* Yellow */
  --color-yellow-100: #FEFCE8;
  --color-yellow-200: #FEF9C3;
  --color-yellow-300: #FEF08A;
  --color-yellow-400: #FDE047;
  --color-yellow-500: #FACC15;
  --color-yellow-600: #EAB308;
  --color-yellow-700: #CA8A04;
  --color-yellow-800: #A16207;
  --color-yellow-900: #854D0E;
  --color-yellow-1000: #713F12;
  --color-yellow-1100: #532F0D;
  --color-yellow-1200: #362008;

  /* Lime */
  --color-lime-100: #F7FEE7;
  --color-lime-200: #ECFCCB;
  --color-lime-300: #D9F99D;
  --color-lime-400: #BEF264;
  --color-lime-500: #A3E635;
  --color-lime-600: #84CC16;
  --color-lime-700: #65A30D;
  --color-lime-800: #4D7C0F;
  --color-lime-900: #3F6212;
  --color-lime-1000: #365314;
  --color-lime-1100: #283E0F;
  --color-lime-1200: #1A290A;

  /* Teal */
  --color-teal-100: #F0FDFA;
  --color-teal-200: #CCFBF1;
  --color-teal-300: #99F6E4;
  --color-teal-400: #5EEAD4;
  --color-teal-500: #2DD4BF;
  --color-teal-600: #14B8A6;
  --color-teal-700: #0D9488;
  --color-teal-800: #0F766E;
  --color-teal-900: #115E59;
  --color-teal-1000: #134E4A;
  --color-teal-1100: #103B38;
  --color-teal-1200: #0C2826;

  /* Purple */
  --color-purple-100: #FAF5FF;
  --color-purple-200: #F3E8FF;
  --color-purple-300: #E9D5FF;
  --color-purple-400: #D8B4FE;
  --color-purple-500: #C084FC;
  --color-purple-600: #A855F7;
  --color-purple-700: #9333EA;
  --color-purple-800: #7E22CE;
  --color-purple-900: #6B21A8;
  --color-purple-1000: #581C87;
  --color-purple-1100: #421566;
  --color-purple-1200: #2C0E44;

  /* Pink */
  --color-pink-100: #FDF2F8;
  --color-pink-200: #FCE7F3;
  --color-pink-300: #FBCFE8;
  --color-pink-400: #F9A8D4;
  --color-pink-500: #F472B6;
  --color-pink-600: #EC4899;
  --color-pink-700: #DB2777;
  --color-pink-800: #BE185D;
  --color-pink-900: #9D174D;
  --color-pink-1000: #831843;
  --color-pink-1100: #621233;
  --color-pink-1200: #410C22;

  /* Pro (Fiverr Pro) */
  --color-pro-100: #F5F0F3;
  --color-pro-200: #EBE0E7;
  --color-pro-300: #D6C2CF;
  --color-pro-400: #C2A3B8;
  --color-pro-500: #AD85A0;
  --color-pro-600: #996688;
  --color-pro-700: #7A5270;
  --color-pro-800: #5C3E54;
  --color-pro-900: #4D3447;
  --color-pro-1000: #3D293A;
  --color-pro-1100: #2E1F2C;
  --color-pro-1200: #1F151D;
}
```

### Semantic Color Tokens

#### Light Mode

```css
[data-theme="light"], :root {
  /* Background */
  --color-background-primary: var(--color-white);
  --color-background-secondary: var(--color-grey-100);

  /* Surface */
  --color-surface-primary: var(--color-white);
  --color-surface-secondary: var(--color-grey-100);
  --color-surface-tertiary: var(--color-grey-200);
  --color-surface-disabled: var(--color-grey-200);
  --color-surface-inverse: var(--color-grey-1200);

  /* Surface Accent */
  --color-surface-accent-primary: var(--color-green-700);
  --color-surface-accent-primary-hover: var(--color-green-800);
  --color-surface-accent-primary-active: var(--color-green-900);
  --color-surface-accent-secondary: var(--color-green-100);
  --color-surface-accent-secondary-hover: var(--color-green-200);

  /* Foreground */
  --color-foreground-primary: var(--color-grey-1200);
  --color-foreground-secondary: var(--color-grey-700);
  --color-foreground-tertiary: var(--color-grey-600);
  --color-foreground-disabled: var(--color-grey-500);
  --color-foreground-inverse: var(--color-white);
  --color-foreground-on-accent: var(--color-white);
  --color-foreground-link: var(--color-green-700);

  /* Border */
  --color-border-primary: var(--color-grey-300);
  --color-border-secondary: var(--color-grey-200);
  --color-border-accent: var(--color-green-700);
  --color-border-focus: var(--color-green-700);
  --color-border-error: var(--color-red-600);

  /* Feedback Colors */
  --color-feedback-success: var(--color-green-700);
  --color-feedback-error: var(--color-red-600);
  --color-feedback-warning: var(--color-orange-600);
  --color-feedback-info: var(--color-blue-600);
  --color-feedback-neutral: var(--color-grey-600);

  /* Overlay */
  --color-overlay-low: rgba(13, 13, 13, 0.4);
  --color-overlay-medium: rgba(13, 13, 13, 0.6);
  --color-overlay-high: rgba(13, 13, 13, 0.8);
}
```

#### Dark Mode

```css
[data-theme="dark"] {
  /* Background */
  --color-background-primary: var(--color-black);
  --color-background-secondary: var(--color-grey-1200);

  /* Surface */
  --color-surface-primary: var(--color-grey-1200);
  --color-surface-secondary: var(--color-grey-1100);
  --color-surface-tertiary: var(--color-grey-1000);
  --color-surface-disabled: var(--color-grey-1000);
  --color-surface-inverse: var(--color-white);

  /* Surface Accent */
  --color-surface-accent-primary: var(--color-green-700);
  --color-surface-accent-primary-hover: var(--color-green-600);
  --color-surface-accent-primary-active: var(--color-green-500);
  --color-surface-accent-secondary: var(--color-green-1100);
  --color-surface-accent-secondary-hover: var(--color-green-1000);

  /* Foreground */
  --color-foreground-primary: var(--color-white);
  --color-foreground-secondary: var(--color-grey-400);
  --color-foreground-tertiary: var(--color-grey-500);
  --color-foreground-disabled: var(--color-grey-700);
  --color-foreground-inverse: var(--color-grey-1200);
  --color-foreground-on-accent: var(--color-white);
  --color-foreground-link: var(--color-green-500);

  /* Border */
  --color-border-primary: var(--color-grey-900);
  --color-border-secondary: var(--color-grey-1000);
  --color-border-accent: var(--color-green-700);
  --color-border-focus: var(--color-green-500);
  --color-border-error: var(--color-red-500);

  /* Overlay */
  --color-overlay-low: rgba(0, 0, 0, 0.4);
  --color-overlay-medium: rgba(0, 0, 0, 0.6);
  --color-overlay-high: rgba(0, 0, 0, 0.8);
}
```

### Gradients

```css
:root {
  --gradient-blue: linear-gradient(135deg, #4080FF 0%, #669AFF 100%);
  --gradient-red: linear-gradient(135deg, #DC2626 0%, #F87171 100%);
  --gradient-pink: linear-gradient(135deg, #DB2777 0%, #F472B6 100%);
  --gradient-orange: linear-gradient(135deg, #EA580C 0%, #FB923C 100%);
  --gradient-yellow: linear-gradient(135deg, #CA8A04 0%, #FACC15 100%);
  --gradient-purple: linear-gradient(135deg, #9333EA 0%, #C084FC 100%);
  --gradient-green: linear-gradient(135deg, #1DBF57 0%, #38C673 100%);
}
```

---

## Typography

### Font Family

```css
:root {
  --font-family-primary: 'Macan', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-mono: 'SF Mono', 'Monaco', 'Consolas', monospace;
}
```

### Font Weights

```css
:root {
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### Type Scale

#### Headings

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `--text-h1` | 48px | Bold | 1.2 | Page titles, hero sections |
| `--text-h2` | 40px | Bold | 1.2 | Section headers |
| `--text-h3` | 32px | Bold | 1.25 | Subsection headers |
| `--text-h4` | 24px | Semibold | 1.3 | Card titles |
| `--text-h5` | 20px | Semibold | 1.4 | Widget headers |
| `--text-h6` | 18px | Semibold | 1.4 | Small headers |

```css
:root {
  /* Heading sizes */
  --text-h1-size: 48px;
  --text-h2-size: 40px;
  --text-h3-size: 32px;
  --text-h4-size: 24px;
  --text-h5-size: 20px;
  --text-h6-size: 18px;
}
```

#### Body Text

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `--text-body-lg` | 18px | Regular | 1.5 | Large body text |
| `--text-body-md` | 16px | Regular | 1.5 | Default body text |
| `--text-body-sm` | 14px | Regular | 1.5 | Secondary text |
| `--text-body-xs` | 12px | Regular | 1.5 | Captions, labels |

```css
:root {
  /* Body sizes */
  --text-body-lg-size: 18px;
  --text-body-md-size: 16px;
  --text-body-sm-size: 14px;
  --text-body-xs-size: 12px;

  /* Line heights */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

### Typography CSS Classes

```css
/* Headings */
.text-h1 {
  font-size: var(--text-h1-size);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

.text-h2 {
  font-size: var(--text-h2-size);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

.text-h3 {
  font-size: var(--text-h3-size);
  font-weight: var(--font-weight-bold);
  line-height: 1.25;
}

.text-h4 {
  font-size: var(--text-h4-size);
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
}

.text-h5 {
  font-size: var(--text-h5-size);
  font-weight: var(--font-weight-semibold);
  line-height: 1.4;
}

.text-h6 {
  font-size: var(--text-h6-size);
  font-weight: var(--font-weight-semibold);
  line-height: 1.4;
}

/* Body */
.text-body-lg {
  font-size: var(--text-body-lg-size);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}

.text-body-md {
  font-size: var(--text-body-md-size);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}

.text-body-sm {
  font-size: var(--text-body-sm-size);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}

.text-body-xs {
  font-size: var(--text-body-xs-size);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
}
```

---

## Spacing

### Spacing Scale

```css
:root {
  --space-0: 0px;
  --space-px: 1px;
  --space-0-5: 2px;
  --space-1: 4px;
  --space-1-5: 6px;
  --space-2: 8px;
  --space-2-5: 10px;
  --space-3: 12px;
  --space-3-5: 14px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 28px;
  --space-8: 32px;
  --space-9: 36px;
  --space-10: 40px;
  --space-11: 44px;
  --space-12: 48px;
  --space-14: 56px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-28: 112px;
  --space-32: 128px;
  --space-36: 144px;
  --space-40: 160px;
}
```

### Spacing Reference Table

| Token | Value | Common Uses |
|-------|-------|-------------|
| `--space-1` | 4px | Icon padding, tight gaps |
| `--space-2` | 8px | Button padding, small gaps |
| `--space-3` | 12px | Input padding, component gaps |
| `--space-4` | 16px | Card padding, section gaps |
| `--space-5` | 20px | Medium component spacing |
| `--space-6` | 24px | Large gaps |
| `--space-8` | 32px | Section padding |
| `--space-10` | 40px | Large section spacing |
| `--space-12` | 48px | Hero section padding |
| `--space-16` | 64px | Major section breaks |

---

## Border Radius

```css
:root {
  --radius-none: 0px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 20px;
  --radius-full: 9999px;
}
```

### Border Radius Usage

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0px | Sharp corners, dividers |
| `--radius-sm` | 4px | Small buttons, tags, chips |
| `--radius-md` | 6px | Input fields, small cards |
| `--radius-lg` | 8px | Cards, dropdowns |
| `--radius-xl` | 12px | Large cards, modals |
| `--radius-2xl` | 16px | Hero sections, large containers |
| `--radius-3xl` | 20px | Feature cards |
| `--radius-full` | 9999px | Avatars, pills, circular buttons |

---

## Shadows & Elevation

### Shadow Tokens

```css
:root {
  /* Z1 - Subtle elevation (links, subtle hover) */
  --shadow-z1: 0px 1px 2px rgba(13, 13, 13, 0.04),
               0px 2px 4px rgba(13, 13, 13, 0.04);

  /* Z2 - Cards, containers */
  --shadow-z2: 0px 2px 4px rgba(13, 13, 13, 0.04),
               0px 4px 8px rgba(13, 13, 13, 0.06);

  /* Z3 - Dropdowns, select menus */
  --shadow-z3: 0px 4px 8px rgba(13, 13, 13, 0.06),
               0px 8px 16px rgba(13, 13, 13, 0.08);

  /* Z4 - Popovers, tooltips */
  --shadow-z4: 0px 8px 16px rgba(13, 13, 13, 0.08),
               0px 16px 32px rgba(13, 13, 13, 0.10);

  /* Z5 - Modals, drawers */
  --shadow-z5: 0px 16px 32px rgba(13, 13, 13, 0.12),
               0px 32px 64px rgba(13, 13, 13, 0.14);

  /* AA - Accessibility focus ring */
  --shadow-focus: 0px 0px 0px 2px var(--color-surface-accent-primary);
}
```

### Elevation Usage Map

| Level | Shadow Token | Components |
|-------|--------------|------------|
| Z1 | `--shadow-z1` | Links, subtle hover states |
| Z2 | `--shadow-z2` | Cards, link cards, containers |
| Z3 | `--shadow-z3` | Dropdowns, select menus |
| Z4 | `--shadow-z4` | Popovers, tooltips |
| Z5 | `--shadow-z5` | Modals, drawers, dialogs |

---

## Grid System

### Container Widths

```css
:root {
  --container-xl: 1400px;
  --container-lg: 1336px;
  --container-md: 1160px;
  --container-sm: 900px;
}
```

### Grid Fractions

| Token | Value | Percentage |
|-------|-------|------------|
| `1/2` | 50% | Half width |
| `1/3` | 33.333% | One third |
| `2/3` | 66.666% | Two thirds |
| `1/4` | 25% | Quarter |
| `2/4` | 50% | Half |
| `3/4` | 75% | Three quarters |

### Grid CSS

```css
.container {
  width: 100%;
  max-width: var(--container-xl);
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
}

.grid {
  display: grid;
  gap: var(--gutter);
}

.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
.grid-cols-6 { grid-template-columns: repeat(6, 1fr); }
.grid-cols-12 { grid-template-columns: repeat(12, 1fr); }
```

---

## Z-Index Layers

```css
:root {
  --z-hide: -1;
  --z-auto: auto;
  --z-base: 0;
  --z-dropdown: 1000;
  --z-sticky: 1100;
  --z-fixed: 1200;
  --z-overlay: 1300;
  --z-modal: 1400;
  --z-popover: 1500;
  --z-toast: 1600;
  --z-tooltip: 1700;
  --z-education-tooltip: 1900;
}
```

### Z-Index Usage

| Layer | Token | Components |
|-------|-------|------------|
| Base | `--z-base` | Default content |
| Dropdown | `--z-dropdown` | Select menus, dropdowns |
| Sticky | `--z-sticky` | Sticky headers |
| Fixed | `--z-fixed` | Fixed elements |
| Overlay | `--z-overlay` | Modal backdrops |
| Modal | `--z-modal` | Modal dialogs, drawers |
| Popover | `--z-popover` | Popovers, floating UI |
| Toast | `--z-toast` | Toast notifications |
| Tooltip | `--z-tooltip` | Tooltips |

---

## Responsive Breakpoints

### Breakpoint Values

```css
:root {
  --breakpoint-xs: 0px;
  --breakpoint-sm: 600px;
  --breakpoint-md: 900px;
  --breakpoint-lg: 1160px;
  --breakpoint-xl: 1400px;
  --breakpoint-2xl: 1760px;
}
```

### Breakpoint Reference

| Breakpoint | Range | Gutter | Margin | Columns |
|------------|-------|--------|--------|---------|
| XS | 0 - 599px | 16px | 16px | 4 |
| SM | 600 - 899px | 16px | 24px | 8 |
| MD | 900 - 1159px | 16px | 32px | 12 |
| LG | 1160 - 1399px | 24px | 40px | 12 |
| XL | 1400 - 1759px | 24px | 40px | 12 |
| 2XL | 1760px+ | 24px | 48px | 12 |

### Media Query Mixins

```css
/* Mobile First Approach */
@media (min-width: 600px) { /* SM and up */ }
@media (min-width: 900px) { /* MD and up */ }
@media (min-width: 1160px) { /* LG and up */ }
@media (min-width: 1400px) { /* XL and up */ }
@media (min-width: 1760px) { /* 2XL and up */ }

/* Max Width (Desktop First) */
@media (max-width: 599px) { /* XS only */ }
@media (max-width: 899px) { /* SM and below */ }
@media (max-width: 1159px) { /* MD and below */ }
```

### Responsive Gutter & Margin

```css
:root {
  --gutter: 16px;
  --margin: 16px;
}

@media (min-width: 600px) {
  :root {
    --margin: 24px;
  }
}

@media (min-width: 900px) {
  :root {
    --margin: 32px;
  }
}

@media (min-width: 1160px) {
  :root {
    --gutter: 24px;
    --margin: 40px;
  }
}

@media (min-width: 1760px) {
  :root {
    --margin: 48px;
  }
}
```

---

## CSS Variables Reference

### Complete Variables Template

```css
:root {
  /* ===== COLORS ===== */
  /* Base Palette - See Color System section */
  
  /* Semantic Colors */
  --color-background-primary: var(--color-white);
  --color-surface-primary: var(--color-white);
  --color-foreground-primary: var(--color-grey-1200);
  --color-border-primary: var(--color-grey-300);
  --color-surface-accent-primary: var(--color-green-700);
  
  /* ===== TYPOGRAPHY ===== */
  --font-family-primary: 'Macan', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* ===== SPACING ===== */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  
  /* ===== BORDER RADIUS ===== */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 9999px;
  
  /* ===== SHADOWS ===== */
  --shadow-z1: 0px 1px 2px rgba(13, 13, 13, 0.04);
  --shadow-z2: 0px 2px 4px rgba(13, 13, 13, 0.04), 0px 4px 8px rgba(13, 13, 13, 0.06);
  --shadow-z3: 0px 4px 8px rgba(13, 13, 13, 0.06), 0px 8px 16px rgba(13, 13, 13, 0.08);
  
  /* ===== LAYOUT ===== */
  --container-xl: 1400px;
  --gutter: 16px;
  --margin: 32px;
  
  /* ===== Z-INDEX ===== */
  --z-modal: 1400;
  --z-popover: 1500;
  --z-tooltip: 1700;
  
  /* ===== TRANSITIONS ===== */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
}
```

---

## Component Styling Rules

### Buttons

```css
.btn {
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-body-md-size);
  line-height: 1;
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
  cursor: pointer;
}

.btn-primary {
  background: var(--color-surface-accent-primary);
  color: var(--color-foreground-on-accent);
  border: none;
}

.btn-primary:hover {
  background: var(--color-surface-accent-primary-hover);
}

.btn-secondary {
  background: transparent;
  color: var(--color-foreground-primary);
  border: 1px solid var(--color-border-primary);
}

/* Button Sizes */
.btn-sm { padding: var(--space-2) var(--space-3); }
.btn-md { padding: var(--space-3) var(--space-4); }
.btn-lg { padding: var(--space-4) var(--space-6); }
```

### Input Fields

```css
.input {
  font-family: var(--font-family-primary);
  font-size: var(--text-body-md-size);
  padding: var(--space-3) var(--space-4);
  background: var(--color-surface-primary);
  color: var(--color-foreground-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast);
}

.input:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: var(--shadow-focus);
}

.input::placeholder {
  color: var(--color-foreground-tertiary);
}
```

### Cards

```css
.card {
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-z2);
}

.card-hover:hover {
  box-shadow: var(--shadow-z3);
  transform: translateY(-2px);
  transition: all var(--transition-base);
}
```

---

## Usage Guidelines for LLMs

### Quick Reference

1. **Primary action color**: `--color-green-700` (#1DBF57)
2. **Default body text**: 16px, regular weight
3. **Standard spacing unit**: 4px (use multiples)
4. **Card border radius**: `--radius-xl` (12px)
5. **Modal shadow**: `--shadow-z5`
6. **Focus ring**: 2px solid primary accent color

### Best Practices

- Use semantic color tokens instead of raw color values
- Maintain consistent spacing using the spacing scale
- Apply appropriate elevation (shadow) based on component hierarchy
- Use the type scale for consistent typography
- Follow the responsive breakpoint system for layouts

### Code Generation Template

When generating UI components, use this structure:

```html
<div class="card" style="
  --local-padding: var(--space-6);
  --local-radius: var(--radius-xl);
">
  <h3 class="text-h4">Title</h3>
  <p class="text-body-md">Content</p>
  <button class="btn btn-primary btn-md">Action</button>
</div>
```

---

*Generated from Penta UI Figma file: `✳️ Penta-UI - Core`*

