# who.html - Build Instructions

Source: Who should be your friend - file key `3nagfZ1gOvtJoFfZbcrF8h`
Base frame size: **1920 x 1080** (px -> vw divides by 1920; vertical % divides by 1080)
Base template: `basic-template.html` - content goes in `.main-container > .stage`
Coordinates: top-level CSS from the Figma MCP is 20px short of the true frame position (the frame has a 20px white border); children of `contents` groups already carry true frame coordinates. Positions below are TRUE frame coordinates.
Spacer: 1920x1080 (the white frame border spans the whole frame, so content extent = frame).

**STATUS: built (frame 19:955 "point 1")**

## Navigation
from: index.html menu, bottom nav
to: home icon and back arrow -> index.html; bottom nav -> types.html / virtues.html

## 0. Assets
`assets/images/who/1.jpg` (844x574, native 1x capture of the Figma image box - the image sits in a nested instance the MCP cannot export, so it is a screenshot crop), `who-back.png`.

## 3. Frame 19:955 Guidelines
  3.1 title pill "Who should be your / friend" (pill at 587.2, 62)
  3.2 image box (143.5, 308.5) 860x590, border 8 white, radius 30, two-panel image
  3.3 text (1041.05, vertically centred at y 606.5) width 736, Luckiest Guy 48px white, shadow 0 4 4 rgba(0,0,0,.25): "We are shaped by the company we keep. When we are surrounded by good company, we thrive in all areas of life, while bad company leads to failure"
  3.4 back arrow (73.26, 580.09) 51.66px white circle
  3.5 bottom nav, first pill active (#8949dc)
  3.6 off-canvas layers skipped (characters at x>1900, title at x<0, menu parked at x<0)

## 5. Open questions
1. Back arrow target is not in the frame; it links to index.html.


## Content source
All visible text (en / hi / gj) and each slide's image path live in `assets/js/data.js` (`SITE_DATA`). The HTML only has placeholders (`data-lines`, `data-text`, `data-panels`); `custom.js` (`renderData`, `buildPanels`) fills them. Edit data.js, not the HTML. Hindi / Gujarati were translated by Claude and need a native review.

## Shared elements (assets/css/common.css)

- `.frame-border` - 20px white border (1.0417vw), outer radius 21px, over everything
- `.back-btn` - home icon `icon-home.png`, box 60x54 at (60, 56.5)
- `#langSelect` - pill 153x57 at (1712, 55), white, 2px #8d40f2 border; circles 40px, Baloo 36px #8d40f2; checked = filled purple
- `.bottom-nav` - three pills 226.97x81.42 at (574.29 / 846.68 / 1119.08, 953.59), Allan 36px, idle #be8cff, active #8949dc, white 3px border, radius 50, drop-shadow 0 4 2 #8655ff
- `.title-pill` - (607.2, 82) 745.6x151, 7px white border, radius 45, Luckiest Guy 64px centred, line 1 white, line 2 #ffda7d, text-shadow 8px 0 8px rgba(103,30,181,.5)
- Fonts in /fonts/: Luckiest Guy, Bangers, Imbue, Baloo 2 (stand-in for Baloo), Allan, Abhaya Libre ExtraBold, Momo Trust Display
- Palette: --purple #8d40f2, --purple-tab #8a38f5, --yellow #ffda7d, --orange #ff9666, --nav-idle #be8cff, --nav-active #8949dc, --nav-shadow #8655ff

Translations: Figma carries English only. Every text node has `english` / `hindi` / `gujrati` spans; Hindi and Gujarati are intentionally empty (not invented). Empty ones fall back to English in `custom.js`.
