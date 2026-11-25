# virtues.html - Build Instructions

Source: Who should be your friend - file key `3nagfZ1gOvtJoFfZbcrF8h`
Base frame size: **1920 x 1080** (px -> vw divides by 1920; vertical % divides by 1080)
Base template: `basic-template.html` - content goes in `.main-container > .stage`
Coordinates: top-level CSS from the Figma MCP is 20px short of the true frame position (the frame has a 20px white border); children of `contents` groups already carry true frame coordinates. Positions below are TRUE frame coordinates.
Spacer: 1920x1080 (the white frame border spans the whole frame, so content extent = frame).

**STATUS: built**

## Navigation
from: index.html menu, bottom nav "Virtues of a Friend"
to: who.html / types.html (bottom nav), home icon -> index.html
Frames 50-525 (Honest) and 50-4178 (Compassion) are two positions of ONE vertical slider (13 virtues in data.js; a virtue is shown only once it has an image, so right now 6 are visible).

## Pranam arrow
`a.pranam-arrow` -> `pranam.html`, hidden until the slider is on its last slide (`slider.image.isEnd`). Placed on the nav pills' row, `right: 5%` of the stage (centred on y 994.3), 180px wide, bobs 12px sideways. Label = `pranam.title` from data.js.

## 0. Assets
`assets/images/virtues/1..6` exist (1.jpg, 2-6.png). Virtues 7-13 (Generous, Compassion, Forgiving, Helpful, Co operative, Selfless, Supportive / Motivation) are in `assets/js/data.js` with `image: null`: add the file and set its `image` path and the slide appears. Order top to bottom in Figma: Honest, Kind, Caring, Mutual understanding, Truthful, Loyal, Generous, Compassion, Forgiving, Helpful, Co operative, Selfless, Supportive / Motivation.

## 3. Frame 50-525 Guidelines
  3.1 title pill "Virtues of a / friend"
  3.2 image box (202.5,308.5) 860x590 border 8 white radius 30, Swiper vertical (13 entries in data.js; only entries with an image are shown)
  3.3 virtue word (1101,432.5) 745x342 Luckiest Guy 96px centred white, text-shadow 0 4 4 rgba(0,0,0,.25)
  3.4 up arrow next / down arrow previous as on types; bottom nav active = "Virtues of a Friend"

## 4. Frame 50-4178 - slide 8 (Compassion): same layout, slider moved

## 5. Open questions
1. Image/word pairing follows stack order (verified for Honest and Compassion).


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
