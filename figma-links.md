# Figma Frame Links

## Base frame width

1920

<!-- The Figma frame's width in px. Every px -> vw conversion divides by this.
     Get it wrong and the whole page mis-scales. Usually 1440 or 1920. -->

## Frame Index

## [index].html

| Frame | Node ID | Figma Link                                                                                         |
| ----- | ------- | -------------------------------------------------------------------------------------------------- |
|       |         | https://www.figma.com/design/3nagfZ1gOvtJoFfZbcrF8h/Who-should-be-your-friend?node-id=13-684&m=dev |
|       |         | https://www.figma.com/design/3nagfZ1gOvtJoFfZbcrF8h/Who-should-be-your-friend?node-id=7-2&m=dev    |

## [who].html

| Frame   | Node ID | Figma Link                                                                                         |
| ------- | ------- | -------------------------------------------------------------------------------------------------- |
| point 1 |         | https://www.figma.com/design/3nagfZ1gOvtJoFfZbcrF8h/Who-should-be-your-friend?node-id=19-955&m=dev |

## [types].html

| Frame | Node ID | Figma Link                                                                                          |
| ----- | ------- | --------------------------------------------------------------------------------------------------- |
|       |         | https://www.figma.com/design/3nagfZ1gOvtJoFfZbcrF8h/Who-should-be-your-friend?node-id=19-1447&m=dev |
|       |         | https://www.figma.com/design/3nagfZ1gOvtJoFfZbcrF8h/Who-should-be-your-friend?node-id=31-1678&m=dev |
|       |         | https://www.figma.com/design/3nagfZ1gOvtJoFfZbcrF8h/Who-should-be-your-friend?node-id=43-315&m=dev  |
|       |         | https://www.figma.com/design/3nagfZ1gOvtJoFfZbcrF8h/Who-should-be-your-friend?node-id=43-315&m=dev  |
|       |         | https://www.figma.com/design/3nagfZ1gOvtJoFfZbcrF8h/Who-should-be-your-friend?node-id=43-485&m=dev  |
|       |         | https://www.figma.com/design/3nagfZ1gOvtJoFfZbcrF8h/Who-should-be-your-friend?node-id=43-655&m=dev  |
|       |         | https://www.figma.com/design/3nagfZ1gOvtJoFfZbcrF8h/Who-should-be-your-friend?node-id=50-525&m=dev  |
|       |         | https://www.figma.com/design/3nagfZ1gOvtJoFfZbcrF8h/Who-should-be-your-friend?node-id=50-4178&m=dev |

<!-- One row per frame.
     Node ID must match the node-id in the URL — e.g. a link ending
     ?node-id=82-860 means the Node ID column reads node-id=82-860.
     Several frames can map to one HTML file when they are states of the
     same page (an intro that expands on click, for example).
     Add another "## [page].html" heading per page. -->

---

## How to Read Each Frame

For every frame listed above, read ALL of the following from the Figma MCP
local server using get_design_context / get_metadata:

- Layout & spacing — exact positions, padding, margin, gap, alignment
- Layer names — use as class names and image filenames
- Layer hierarchy — parent > child order must match in the HTML DOM
- Colors & gradients — exact hex/rgba values
- Typography — font family, size, weight, letter spacing, line height
- Images — read layer name, map to /assets/images/[layer-name].png
- Prototypes & interactions — every click, tap, hover action
- Navigation targets — which frame or page each interaction leads to
- Animations & transitions — type, duration, easing
- Overlays — position, backdrop, close behavior
- Scroll behavior — fixed, sticky, overflow settings
- Component states — default, hover, pressed, disabled
- Variants — all variant properties for each component
- Auto layout — direction, spacing, padding, fill/hug/fixed sizing
- Constraints — how layers scale or pin relative to parent

Note: layers at `opacity: 0` in a frame are usually that state's start/end
position for an animation, not separate elements. Check whether two frames are
two pages or one page in two states before building.

Note: a layer positioned beyond the frame edge (e.g. `left: 2063px` in a
1920-wide frame) is parked off-canvas. Ask before building it.

---

## Interaction Map

> Fill after reading Figma. Drives click events and navigation.

| Page | Layer Name | Interaction | Target | Animation |
| ---- | ---------- | ----------- | ------ | --------- |
|      |            |             |        |           |

---

## Sliders

> Fill when a page has a slider. Swiper.js only.

| Page | Slider Layer | Slides (node ids) | Effect | Synced with |
| ---- | ------------ | ----------------- | ------ | ----------- |
|      |              |                   |        |             |

---

## Translations

> Figma usually carries English only. Every visible text node needs all three.

| Page | English | Hindi | Gujarati |
| ---- | ------- | ----- | -------- |
|      |         |       |          |
