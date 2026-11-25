# pranam.html - Build Instructions

Source: copied 1:1 from `projects/aprigrah/projects/aprigrah/pranam.html` (itself copied from the "patience" project). No Figma frame.
Base frame size: **1920 x 1080** (px -> vw divides by 1920). Spacer: 1920x1080.
Base template: `basic-template.html` - content goes in `.main-container > .stage`

**STATUS: built**

## What is different from the Aparigrah page
- **Background is this project's own**: `page-bg` = `background.jpg` + the white `.frame-border`. Aparigrah's decoration (grain, rings, dots, plus signs, its own frame, `bg.png`) is NOT used.
- Aparigrah's stage was 1920x1027 starting at frame y=29.22, so every vertical % is converted: `top% = (29.22 + top_a/100 * 1027) / 1080 * 100`. Left and width % are unchanged.
- Text comes from `assets/js/data.js` (`pranam.title`, `pranam.home`), not hard-coded.

## Navigation
from: `virtues.html` - the purple Pranam arrow appears on the LAST slide only (like Aparigrah Examples), on the nav pills' row, `right: 5%` of the stage (centred on y 994.3).
to: `index.html` (HOME pill). Back arrow (top left): `virtues.html`.

## 0. Assets
| File | Use |
|---|---|
| images/pranam-card.png | tall purple/white card behind the disc (866x866) |
| images/pranam-video-sizer.png | transparent 415x464 sizer for the video box |
| images/pranam-home.png | HOME pill art (421x131) |
| images/who-back.png | back arrow: this project's own (shared with the who page and Types detail), not Aparigrah's |
| videos/pranam.mp4 | looping muted video inside the disc |
| audio/pranam.mp3 | plays once on open; if the browser blocks it, on the first click / key / touch |
Fonts: Baloo 2 (title, HOME label), Baloo Bhai 2 for Gujarati (global rules).

## 1. Palette
```
--white:        #ffffff
--white:        #ffffff   "Pranam" title and HOME label
--ring-glow:    #fff186   thin yellow ring around the disc
```

## 2. Structure (true frame y, px)
```
.stage
├── img.stage-spacer
├── .frame-border                 (shared)
├── a.back-button  -> virtues.html   x 64.2   y 57.7   w 51.66 (same as the Types detail back arrow)
├── .pranam-card                  x 600.35 y 156.49 w 736.1 (38.339%)
├── .pranam-disc, .pranam-ring    x 681.1  y 237.23 w 567.8 (29.573%)
├── .pranam-video (video+sizer)   x 749.5  y 280.00 w 431.0 (22.448%), radius 7.526vw
├── h1.pranam-title               centre x 50.26%, y 196.00  Baloo 700, 4vw (Hindi/Gujarati 3.2vw), white (same as the HOME label)
└── a.home-pill -> index.html     x 792.5  y 819.49 w 357.9 (18.638%), label white Baloo 700 3.099vw
```
No entrance animation (removed on request): everything is in place as soon as the page loads. Only the hover scale on the HOME pill and the back arrow remains.

## 3. Translations (data.js)
| English | Hindi | Gujarati |
|---|---|---|
| Pranam | प्रणाम | પ્રણામ |
| HOME | होम | હોમ |

## Sounds
`pranam.mp3` plays on open (pranam.js). Lang toggle, HOME pill and back arrow use the shared sounds in custom.js (see `.claude/rules/figma-mcp-notes.md`).

## 4. Open questions
1. None.
