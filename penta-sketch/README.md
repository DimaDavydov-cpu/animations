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
* Drag the **handle on the canvas's right edge** to resize it (it stays centered; dragging past the edge returns to Adaptive)
* **iPad** 834 and **Mobile** 390 in the top bar, or tap the **width readout** next to the scale (e.g. `1194 px`) to type any width
* The canvas never scrolls sideways
* Only the width is a design decision. The height is automatic: it fills the screen and grows with your content
* **Scale** is set only from the percentage control in the top bar: 100%, 75% or 50%. Touch never changes it
* The canvas does not pan: the page **scrolls** like a web page (finger or trackpad), and the artboard sits in it like a resizable iframe

## Cards and the grid

* When a card snaps to the layout grid with either edge, its width snaps to a **whole number of columns** and it is **bound** to them (Width: Columns). It is responsive: when the canvas width changes it follows the grid (e.g. 5 of 12 columns becomes the same share of 8)
* Width **Fixed** keeps the px width whatever the artboard does. **Hug** fits the content
* Inside a horizontal stack or a **Grid** stack, cards **Fill** by default and share the space. Set one to Fixed and it keeps its width while the others resize around it
* **Grid stack columns**: *Count* (2 to 6 fixed columns) or *Auto-fit*: `repeat(auto-fit, minmax(MIN, 1fr))`, where MIN is a number in px, %, vw, vh or rem. On the canvas vw / vh mean the canvas width / visible height (it behaves like an iframe). Exported CSS keeps the real units
* **Mobile reflow** (4-column grid): cards narrower than 5 of 12 columns that sit beside a main card (more than half the grid) move under it, stacked in reading order at the main card's width, and the main card spans the full mobile width. Content below moves down. This is display only: Adaptive / iPad show the original layout
* Closing the card panel or the text toolbar (×) keeps the item selected: you can still resize, drag or keep writing, and tapping it again (finger or Pencil) brings the controls back. Tap empty canvas to deselect
* To move an item with a finger: tap it to select it, then drag. A finger drag on anything else scrolls the page
* Settings panels are dark, compact, and can be dragged by their header / grip. They always stay inside the visible area below the top bar

## How to use

| Gesture | Result |
|---|---|
| Draw a rectangle or square with Pencil. It does not have to be closed: all four edges (top, right, bottom, left) are enough, in one stroke or several, then pause | Creates a Penta card. Every card is a flex **stack** (vertical by default, gap 16, padding 24) |
| Draw a rectangle inside a card / around existing items | Nests a card in the stack / wraps those items in a new stack |
| Finger tap on a card | Opens the **card panel**: direction, wrap, gap, padding, align, distribute, size (Fixed / Fill / Hug), fill, border, radius, elevation |
| Draw a wide, short rectangle (up to ~72px tall, at least 3x wider than tall) | A small chooser asks: **Card** or **Input**. An input is a Penta text field (44px, hairline border); type its placeholder. On the canvas it snaps to whole grid columns and stays bound to them |
| Draw a straight horizontal line with Pencil | Adds a text box, inside a card or out on the canvas. On the canvas it snaps to whole grid columns (never fewer than two) and stays bound to them, so it follows the grid. Inside a card it joins the stack |
| Tap with Pencil | Places a text box. Handwrite inside it and iPadOS **Scribble** converts it to text |
| Text toolbar | Display, H1, H2, H3, H4, Subtitle, Body, Body S, Caption, Overline + color role |
| Finger tap on the empty artboard | Background color picker: Penta palette + exact hex (shows the token name, or flags off-system values) |
| Finger drag an item | Reorders it in its stack, moves it into another card, or out onto the artboard |
| Tap the artboard title (above its top-left corner) | Opens size editing: preset, exact W × H, and edge handles to drag. Size is not editable otherwise |
| Draw / move / resize a card near the layout grid | Its edges snap to column edges, page margins and artboard edges within 20 px (red guide). Otherwise 8 px snapping |
| Finger drag on the background | Scrolls the page |
| Tap existing text (finger) | Edit it with the caret at the end. While editing, a finger tap places the caret exactly there and a finger drag selects text |
| Drag the dashed frame around selected text | Moves the text (or reorders it in its stack) |
| Write over existing text with Pencil | Edit it. Scratch out words to delete them (Scribble gestures) |

Scribble must be on: iPad Settings → Apple Pencil → Scribble.

Desktop testing: the mouse draws in **Draw** mode, and a click places text. Switch to **Select** (V) to select, move and pick the background color.
Shortcuts: Cmd+Z / Cmd+Shift+Z, Delete, Cmd+D duplicate, G grid, 0 fit, +/- zoom.

## Other features

* **Card heights snap to the 24px rhythm** (minimum 24): when drawing, resizing with a handle, or typing a height in the panel. Hug and Fill heights follow their content / space
* The layout grid overlay is **on by default** (toggle it with the grid button)
* Layout grid overlay (grid toggle): Penta columns plus a light vertical rhythm, a faint line every 8px and a stronger one every 24px
* Artboard presets: Desktop 1440, Tablet 834, Mobile 390, with the Penta 12 / 8 / 4 column grid overlay
* Autosave in the browser. Save and open `.json` projects from the ••• menu
* Export HTML is hidden for now (the code stays in `js/export.js`)

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
