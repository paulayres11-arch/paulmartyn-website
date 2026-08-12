# Page Topology — Paul Martyn Construction (homepage)


- **site-key:** `paulmartyn`
- **page-key:** `root-8a5edab2`
- **Destination route:** `/` (`src/app/page.tsx`) — fresh template scaffold, approved for replacement
- **Original stack:** WordPress 7.0.3, Bootstrap 5 (tabs), Slick carousel, Contact Form 7
- **Document height:** 5055px at 1440w desktop

## Layout model

Single normal-flow scroll document. No scroll-snap, no smooth-scroll library (no Lenis/Locomotive).
Outer wrapper `#page.site > .colourarchive` holds all flow content.

Two overlay layers sit outside normal flow:

| Layer | Element | Behavior |
|---|---|---|
| Header | `header#masthead.site-header.homemenuover` | `position: absolute` over the hero at rest; becomes `position: fixed` white bar with `.is-sticky` |
| Reviews badge | `div.ti-widget` (Trustindex) | Fixed bottom-right Google reviews pill, 5.0 / 40 reviews |

## Section order (top to bottom)

| # | Name | Selector | Top | Height | Interaction model |
|---|---|---|---|---|---|
| 1 | Top contact bar | `.topbar` | 0 | 46 | static |
| 2 | Header / primary nav | `#masthead` | 46 | 107 | **scroll-driven** (sticky transform) + hover dropdowns |
| 3 | Hero slider | `.simple-slick-slider` | 46 | 600 | **time-driven** (Slick autoplay, 2 slides, no dots/arrows) |
| 4 | Intro | `.section.sectionpad.intro` | 646 | 518 | static |
| 5 | Strapline band | `.section.sectionpad.zeropaddingbottom` | 1164 | 68 | static |
| 6 | Box links | `.section.sectionpad.boxlinks` | 1232 | 666 | static + link hover |
| 7 | Our Services | `.sectionpad.zeropaddingtop` | 1850 | 691 | **click-driven** (Bootstrap tabs) |
| 8 | Services tab panel | (within #7) | 2541 | 635 | driven by #7 |
| 9 | Proven track record | `.bg-2` | 3177 | 373 | **click-driven** (Slick testimonial slider, next arrow) |
| 10 | Commitment to quality | `.sectionpad` | 3549 | 643 | static |
| 11 | CTA | `.background-image.cta` | 4192 | 460 | static + button hover |
| 12 | Footer | `footer#colophon.site-footer-2` | 4653 | 448 | static + link hover |

## Dependencies

- The header overlays section 3 only (`.homemenuover` modifier). Hero must therefore reserve no top offset — the header floats above it.
- Sections 7 and 8 are one component: the pill row switches the panel below it.
- Section 9's testimonial slider holds **10** testimonials; only one is visible at a time.

## Component plan

```
src/components/sites/paulmartyn/
  shared/icons.tsx          Logo mark, phone, envelope, hammer, speech, pencil-ruler, arrow, facebook, instagram, star
  root-8a5edab2/
    TopBar.tsx              Section 1
    SiteHeader.tsx          Section 2 (client — sticky scroll state)
    HeroSlider.tsx          Section 3 (client — autoplay)
    IntroSection.tsx        Section 4
    StraplineBand.tsx       Section 5
    BoxLinks.tsx            Section 6
    ServicesTabs.tsx        Sections 7+8 (client — tab state)
    TrackRecord.tsx         Section 9 (client — slider state)
    CommitmentSection.tsx   Section 10
    QuoteCta.tsx            Section 11
    SiteFooter.tsx          Section 12
    ReviewsBadge.tsx        Fixed Trustindex badge
```
