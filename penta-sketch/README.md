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
* Drag the **knob on the canvas's right edge** to resize it. It stays fixed at the vertical middle of the screen (it does not scroll away) and rides the canvas edge (it stays centered; dragging past the edge returns to Adaptive)
* **iPad** 834 and **Mobile** 390 in the top bar, or tap the **width readout** next to the scale (e.g. `1194 px`) to type any width
* The canvas is never narrower than **320px** (handle, typed width and saved projects are all held to it)
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
* The **arrow (Select)** is the tool when the prototype opens, and it is the first button of the switch; tap the **pencil (Draw)** to sketch. In Select mode a Pencil drag on empty canvas shows a hint instead of drawing. Pencil can still write into text (Scribble) in either tool
* **Palm rejection**: while Pencil is touching or hovering (and for half a second after), finger touches on the canvas are ignored, so a resting hand never draws into the shape you are making
* **Finger mode is on by default**: in Draw mode a finger draws like Pencil (rectangles, lines, tap for text) and two fingers scroll the page. A finger tap on existing text still edits it. Use **Select** (or switch Finger mode off in the ••• menu) to select cards, pick colors and move things with a finger
* **Settings panels open a moment after a tap** (about 0.4s): the card panel, the text toolbar and the background color panel. A double tap cancels them, so it shows only the Add menu. The selection frame, and typing in a text box, are immediate; panels for things you just created (drawn or from the Add menu) open at once
* The double tap is decided when the second tap lifts without moving, so tapping a card and quickly dragging it is still a drag. A double tap on text with content, handles or the resize knob keeps its own behavior
* To move an item with a finger: tap it to select it, then drag. A finger drag on anything else scrolls the page
* Settings panels are dark, compact, and can be dragged by their header / grip. They stay below the top bar. The card panel is as tall as its content (it scrolls inside itself only when taller than the screen), and when you drag a panel its body may slide below the bottom edge as long as its header stays fully visible, so the grip is always reachable

## How to use

| Gesture | Result |
|---|---|
| Draw a rectangle or square with Pencil. It does not have to be closed or neat: four straight-ish sides (top, right, bottom, left), each at least about a third drawn, are enough, in one stroke or several. Bulging sides, rounded corners, overshoot and gaps are fine; circles, triangles and three-sided shapes are not rectangles. If what you drew looks like part of a rectangle (an L, a U, two parallel sides) the app waits 1.3s instead of 0.7s for the rest | Creates a Penta card. Every card is a flex **stack** (vertical by default, gap 16, padding 24) |
| Draw a rectangle inside a card / around existing items | Nests a card in the stack / wraps those items in a new stack |
| Finger tap on a card | Opens the **card panel**: direction, wrap, gap, padding, align, distribute, size (Fixed / Fill / Hug), fill, border, radius, elevation |
| Draw a wide, short rectangle (up to ~72px tall, at least 3x wider than tall) | A small chooser asks: **Card** or **Input**. An input is a Penta text field (44px, hairline border); type its placeholder. On the canvas it snaps to whole grid columns and stays bound to them |
| Draw a **small rectangle with a line inside** (the line is the label; draw both within a short pause) | Makes a **button**: solid dark gray with white text by default. The toolbar lets you pick **Solid / Outlined / Ghost**, **Small (36px) / Big (42px)** and the **Content**: Label, **Icon** (a square icon-only button, 36 or 42px), Icon + label or Label + icon. **Icon…** picks the icon from the library's icon set or an image you upload; the icon is painted in the button's text color, so it follows Solid / Outlined / Ghost; write the label in it. A rectangle up to 40px tall starts Small, taller starts Big. Rectangle plus line that is larger than a button (over 80px tall or 400px wide) makes a card with that line as text |
| Draw a **+** with Pencil (two crossing straight strokes), or **double-tap** the page or a card | Opens the **Add** menu at that spot: **Card, Stack, Text, Button, Input, Select, Tabs**. The item is created there, inside the card under that point if there is one, otherwise out on the canvas bound to grid columns. **Stack** is a card with no border or radius (transparent, no padding), horizontal, space-between. **Select** is an input with a chevron. **Tabs** is a tab row: type the labels (comma separated) and pick the active tab in the toolbar |
| Add menu > **Asset** | Opens the asset picker: the built-in library (Brand: the Fiverr logo and badges; Icons; Images, all from `../Assets`) and **Upload from device…** (PNG, JPG, SVG, GIF, WebP up to 10 MB; big photos are stored at 1600px). The asset drops where you drew the + or double-tapped, inside the card under that point if there is one. It resizes like a card: corner handles (they work in any tool), grid snapping, and in the panel Width = Columns / Fixed / Fill, Height = Keep ratio (default) or Free, Fit, Radius and **Replace image…**. Uploaded images are kept outside the document (so undo stays light), in the browser storage, and inside the saved `.json` project |
| Draw a straight horizontal line with Pencil | Adds a text box, inside a card or out on the canvas. On the canvas it snaps to whole grid columns (never fewer than two) and stays bound to them, so it follows the grid. Inside a card it joins the stack |
| Tap with Pencil | Places a text box. Handwrite inside it and iPadOS **Scribble** converts it to text |
| Text toolbar | Display, H1, H2, H3, H4, Subtitle, Body, Body S, Caption, Overline + color role |
| **Tap** the page background | Background color picker, a moment later (0.4s): Penta palette + exact hex (shows the token name, or flags off-system values) |
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
* The card panel's flex controls are DevTools-style icon groups: `flex-direction` (row, column, grid), `flex-wrap`, `justify-content` (start, center, end, between, around, evenly) and `align-items` (start, center, end, stretch, baseline); icons turn with the direction
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
js/assets.js      the built-in asset library (files from ../Assets, with their sizes)
js/export.js      shared stack/size/skin CSS builders + HTML export
js/editor.js      state, input, stacks, card panel, text toolbar, color picker
```
