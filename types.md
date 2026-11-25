# types.html - Build Instructions

Source: Who should be your friend - file key `3nagfZ1gOvtJoFfZbcrF8h`
Base frame size: **1920 x 1080** (px -> vw divides by 1920; vertical % divides by 1080)
Base template: `basic-template.html` - content goes in `.main-container > .stage`
Coordinates: top-level CSS from the Figma MCP is 20px short of the true frame position (the frame has a 20px white border); children of `contents` groups already carry true frame coordinates. Positions below are TRUE frame coordinates.
Spacer: 1920x1080 (the white frame border spans the whole frame, so content extent = frame).

**STATUS: built (2 images missing, see Assets)**

## Navigation
from: index.html menu, bottom nav
to: who.html / virtues.html (bottom nav), home icon -> index.html
One page, two views. Toggle class `.stage.is-detail`. Frame 19-1447 = list view; frames 31-1678, 43-315, 43-485, 43-655 = detail views of the four types. Click a card or pill -> detail for that type; bottom pill "Different types of Friends" returns to the list (assumption).

## 0. Assets
Cards `card-service|virtues-loving|satsang|purity.jpg` (1024x1536). Slide images in four folders under `assets/images/types/`, each numbered from 1 in slide order: `service/` (1-2), `virtue/` (1-2, the Virtues Loving Friend type), `satsang/` (1-6), `purity/` (1-7).
**Missing:** `types/service/2.jpg` and `types/virtue/2.jpg` are grey placeholders (the second image of each pair sits in a nested Figma instance that cannot be exported). `types/service/1.jpg` and `types/virtue/1.jpg` are native 1x captures (844x574). Replace the two placeholders at 1376x768 with the same names.
Fonts: Luckiest Guy, Imbue (pills), Abhaya Libre ExtraBold + Momo Trust Display (tabs), Allan (bottom nav).

## 3. Frame 19-1447 - list view
  3.1 title pill text "Different types of / friend"
  3.2 four cards (inner square 437.83px, rotated +15/-15/+15/-15, border 11 white, radius 45, shadow 0 10 9.6 4 rgba(103,30,181,.5), gradient #ffda7d to #ff9666), wrappers 536.23px at (78.68,299.6) (485.27,294.83) (891.86,300.05) (1295.77,294.83)
  3.3 four label pills 366.8x75.67 white radius 37.8 at x 147.47 / 581.01 / 1014.55 / 1448.09, y 935.96; Imbue 48px #8d40f2
  3.4 off-canvas layers skipped (home characters at x>1900 or <0, parked popup at opacity 0)

## 4. Frames 31-1678 / 43-315 / 43-485 / 43-655 - detail views
  4.1 image box (202.44,309) 860x590, border 8 white, radius 30, bg #a0a0a0, vertical Swiper
  4.2 description text (1101,433) 745x342, Luckiest Guy 48px white, text-shadow 0 4 4 rgba(0,0,0,.25), vertically centred, synced with the image swiper
  4.3 up arrow (76,500.05) = next slide, down arrow (76,621.79) = previous; faded when unavailable
  4.4 tabs 1-4 at right (x 1824.47, y 395.96 / 498.63 / 601.3 / 703.96, 284x76, white, left radius 38, purple circle 64 + Momo 36px number) switch type; hover reveals label (Abhaya 24px #8a38f5)
  4.4b home icon is replaced by a back arrow (`.detail-back`, same asset as the who page, at (64.2, 57.7), 51.66px) in the detail view; it returns to the types list. The list view keeps the home icon.
  4.5 bottom nav, active = "Different types of Friends"
  4.6 slide counts: service 2, virtue 2, satsang 6, purity 7

## 5. Open questions
1. Four slide images missing (above).
2. Purity has 7 texts / 7 images (7th "He is free from all bad addictions." with purity-7); Figma shows only 6 stacked.
3. Active tab visual state is not in Figma - tab only expands on hover/focus.
4. Direction of the arrows is inferred from the faded state on slide 1.


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
