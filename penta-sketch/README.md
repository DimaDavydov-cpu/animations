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

## How to use

| Gesture | Result |
|---|---|
| Draw a rectangle or square with Pencil (one stroke or several, then pause) | Creates a Penta card (white, hairline border, radius 12, 8px snapping) |
| Tap with Pencil | Places a text box. Handwrite inside it and iPadOS **Scribble** converts it to text |
| Text toolbar | Display, H1, H2, H3, H4, Subtitle, Body, Body S, Caption, Overline + color role |
| Finger tap on the empty artboard | Background color picker: Penta palette + exact hex (shows the token name, or flags off-system values) |
| Finger tap on an element | Selects it. Drag moves it (cards take their contents along). Corner handles resize |
| Card toolbar | Fill, border, radius, elevation (Z1 to Z4), duplicate, delete |
| Two fingers | Pan and pinch zoom |
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
js/export.js      HTML export
js/app.js         state, input handling, inspector, color picker
```
