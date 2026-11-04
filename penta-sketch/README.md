# Penta Sketch

Sketch interfaces on an iPad with Apple Pencil and get real Penta elements back.
Plain HTML, CSS and JavaScript. No build step, no backend, no cloud calls.
Tokens come from the repo's `../ds_penta.css`, so changing a token there changes the app.

## Run it

You need to serve it from the **repo root**, because the app loads `../ds_penta.css`:

```bash
cd animations            # repo root
python3 -m http.server 8000
```

* On the computer, open <http://localhost:8000/penta-sketch/>
* On the iPad (same Wi-Fi), open `http://<your-computer-ip>:8000/penta-sketch/`
  (on a Mac: System Settings → Wi-Fi → Details shows the IP)
* Optional: Safari → Share → **Add to Home Screen** for a full-screen app

`npx serve .` works too. The only network request is the Macan font from the Fiverr CDN.
Without it the app falls back to Helvetica.

## Width and scale

* **Adaptive** (default): the artboard is your screen's width, edge to edge, and follows rotation
* **iPad** 834 and **Mobile** 390 in the top bar, or tap the artboard title to type any width or drag its right edge
* Only the width is a design decision. The height is automatic: it fills the screen and grows with your content
* **Scale** is set only from the percentage control in the top bar: 100%, 75% or 50%. Touch never changes it
* The canvas does not pan: the page **scrolls** like a web page (finger or trackpad), and the artboard sits in it like a resizable iframe

## Cards and the grid

* A card whose edges snap onto the layout grid is **bound to those columns** (Width: Columns). When the artboard width changes it keeps spanning the same columns
* Width **Fixed** keeps the px width whatever the artboard does. **Hug** fits the content
* Inside a horizontal stack or a **Grid** stack, cards **Fill** by default and share the space. Set one to Fixed and it keeps its width while the others resize around it
* To move an item with a finger: tap it to select it, then drag. A finger drag on anything else scrolls the page
* Settings panels are dark, compact, and can be dragged by their header / grip

## How to use

| Gesture | Result |
|---|---|
| Draw a rectangle or square with Pencil (one stroke or several, then pause) | Creates a Penta card. Every card is a flex **stack** (vertical by default, gap 16, padding 24) |
| Draw a rectangle inside a card / around existing items | Nests a card in the stack / wraps those items in a new stack |
| Finger tap on a card | Opens the **card panel**: direction, wrap, gap, padding, align, distribute, size (Fixed / Fill / Hug), fill, border, radius, elevation |
| Tap with Pencil | Places a text box. Handwrite inside it and iPadOS **Scribble** converts it to text |
| Text toolbar | Display, H1, H2, H3, H4, Subtitle, Body, Body S, Caption, Overline + color role |
| Finger tap on the empty artboard | Background color picker: Penta palette + exact hex (shows the token name, or flags off-system values) |
| Finger drag an item | Reorders it in its stack, moves it into another card, or out onto the artboard |
| Tap the artboard title (above its top-left corner) | Opens size editing: preset, exact W × H, and edge handles to drag. Size is not editable otherwise |
| Draw / move / resize a card near the layout grid | Its edges snap to column edges, page margins and artboard edges within 20 px (red guide). Otherwise 8 px snapping |
| Finger drag on the background | Scrolls the page |
| Write over existing text with Pencil | Edit it. Scratch out words to delete them (Scribble gestures) |

Scribble must be on: iPad Settings → Apple Pencil → Scribble.

Desktop testing: the mouse draws in **Draw** mode, and a click places text. Switch to **Select** (V) to select, move and pick the background color.
Shortcuts: Cmd+Z / Cmd+Shift+Z, Delete, Cmd+D duplicate, G grid, 0 fit, +/- zoom.

## Other features

* Artboard presets: Desktop 1440, Tablet 834, Mobile 390, with the Penta 12 / 8 / 4 column grid overlay
* Autosave in the browser. Save and open `.json` projects from the ••• menu
* **Export HTML**: a standalone file with only the Penta tokens it uses. Copy it, download it or preview it

## Files

```
index.html        app shell (uses ds_penta.css buttons, inputs, dropdown)
app.css           tool chrome; non-Penta CSS is marked PENTA-FALLBACK
js/tokens.js      palette, type ramp, radius, border, elevation (token names only, values read from CSS)
js/ink.js         pressure-sensitive stroke rendering
js/recognize.js   rectangle recognizer (geometry, runs locally)
js/export.js      shared stack/size/skin CSS builders + HTML export
js/editor.js      state, input, stacks, card panel, text toolbar, color picker
```
