# index.html - Build Instructions

Source: Who should be your friend - file key `3nagfZ1gOvtJoFfZbcrF8h`
Base frame size: **1920 x 1080** (px -> vw divides by 1920; vertical % divides by 1080)
Base template: `basic-template.html` - content goes in `.main-container > .stage`
Coordinates: top-level CSS from the Figma MCP is 20px short of the true frame position (the frame has a 20px white border); children of `contents` groups already carry true frame coordinates. Positions below are TRUE frame coordinates.
Spacer: 1920x1080 (the white frame border spans the whole frame, so content extent = frame).

**STATUS: built**

## Navigation
from: none (entry page). Home icon reloads this page.
to: who.html, types.html, virtues.html (menu buttons)
Frames 13-684 (intro) and 7-2 (menu) are two STATES of one page. Toggle class: `body.is-intro`. The intro plays once per session (sessionStorage `introSeen`); later visits show the menu state directly. Trigger and timing are not in the Figma data (get_motion_context returned nothing) - the hands high-five when the pointer enters `.hover-zone` over the characters (also touch/click), 0.9s ease; stays high-fived afterwards.

## 0. Assets
`background.jpg`, `char-{grandma,boy,girl}-{start,end}.png` (rendered from the Figma vector layers incl. masks, 2x), `icon-home.png`, `menu-ring.png`, `menu-who.png`, `menu-types.png`, `menu-virtues.png`. Fonts: Luckiest Guy (title), Bangers (menu labels), Baloo 2 (lang).

## 3. Frame 13-684 - intro state
  3.1 characters start poses: grandma (1420,148.5), boy (888,404.5), girl (1525.5,535.5)
  3.2 title and menu parked off-left (title x-880, labels -290, circles -100); lang pill opacity 0; home at x 5.54(+20)

## 4. Frame 7-2 - menu state
  4.1 characters end poses: grandma (1343,148.5), boy (888.5,322), girl (1299,398.5), hands overlap
  4.2 title "Who should / be your / friend" Luckiest Guy 128px, line height 125.5px, block top y=196, left 139, "friend" #ffda7d
  4.3 menu circles 113.67px at (130.09,655.9), (130.09,833.82), (608.37,834) with ring + thumbnail
  4.4 labels Bangers 48px white: (276,650.82) "Who Should / Be Your Friend", (279,833.82) "Different / types of Friends", (757.28,833.82) "Virtues of / a Friend"
  4.5 on click of each circle/label -> who.html / types.html / virtues.html

## 5. Open questions
1. Intro trigger and easing are assumed.
2. Hindi / Gujarati text needed.


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

## Joining-hands animation (continuous, no opacity changes)
Every moving piece is ONE image that travels and scales between its raised-hand geometry (`body.is-intro`) and the high-five geometry, by transitioning `left/top/width` (1.1s, `--move` ease). Nothing fades. Teardrops are static images; faces, sweater, body and arm pieces that sit inside a teardrop are children of `.char-clip`, clipped with a `clip-path` polygon traced from the teardrop. Layers (assets/images): `char-<who>-teardrop`, grandma `sweater/face/glasses/mouth/cuff/hand`, boy `body/arm/sleeve`, girl `back/arm/front`. Plays automatically 1.2s after EVERY load; hover/touch on `.hover-zone` starts it early. Title, menu, home and language pill slide in (no fade).
The end-pose art is used throughout and scaled to the start pose, so the start frame differs from Figma 13-684 by a few percent (boy head ~7% small).
