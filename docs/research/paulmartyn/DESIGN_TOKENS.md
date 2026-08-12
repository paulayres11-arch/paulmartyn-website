# Design Tokens — Paul Martyn Construction (homepage)

## Typography

### The font situation (important)

The theme declares `font-family: articulat-cf, sans-serif` on `body` and every heading.
The Typekit kit (`use.typekit.net/mnb3rhf.css`) serves **only** `neue-haas-unica` and `orpheuspro`
— there is **no `@font-face` for `articulat-cf` anywhere on the page**, and every kit face reports
`status: "unloaded"` in `document.fonts`.

**Consequence:** the live site never renders Articulat CF. It falls through to the generic
`sans-serif` — Helvetica on macOS, Arial on Windows. That is what every screenshot shows.

**Clone decision:** reproduce the *observed* rendering with a matching stack rather than licensing
a font the original does not load:

```css
--font-sans: articulat-cf, "Helvetica Neue", Helvetica, Arial, sans-serif;
```

`articulat-cf` stays first so the clone upgrades automatically if the kit is ever fixed or licensed.
No webfont is downloaded — matching the original's actual network behavior.

### Scale — FLUID, not fixed

Every heading is sized with `calc(<n>em + <n>vw)` against the 15px body base, so type
scales continuously with viewport width. **There are no fixed pixel heading sizes and no
breakpoint steps.** Measuring a heading at one window width and hard-coding that pixel
value is wrong at every other width — verified: the hero reads 68.4px at 1280px wide and
48.18px at 606px wide, matching `2em + 3vw` exactly at both.

| Role | Rule | @1280px | Weight | Line height | Colour | Clone class |
|---|---|---|---|---|---|---|
| `body` | 15px | 15px | 300 | 22.5px | `#070707` | — |
| Hero `h2` (`.slider-text h2`) | `calc(2em + 3vw)` | 68.4px | 500 | 1.0 | `#fff` | `.t-hero` |
| Big centred `h2` (CTA) | `calc(2.3em + 2vw)` | 60.5px | 500 | 1.1 | `#fff` | `.t-h2` |
| Centred `h3` (box links) | `calc(1.4em + 2vw)` | 46.6px | 500 | 1.1 | `#fff` | `.t-h3-lg` |
| Section `h3` (`.repeater-text-inner h3`) | `calc(1em + 2vw)` | 40.6px | 500 | 1.1 | `#070707` | `.t-h3` |
| Testimonial `h4` | `2.2em` (fixed) | 33px | 500 | 1.1 | `#fff` | `.t-h4` |
| Box-link title `h4` | fixed | 24px | 500 | 1.1 | `#fff` | `.t-card-title` |
| Eyebrow (`h1` in intro) | fixed | 18px | 200 | 19.8px | `#070707` | `.t-eyebrow` |
| Body paragraph | fixed | 15px | 300 | 22.5px | `#677c83` | — |
| Footer contact line | fixed | 25.5px | 300 | 38.25px | `#677c83` | — |
| Attribution name | fixed | 15px | 700 | — | `#fff` | — |

All headings inherit `line-height: 1.1`; the hero overrides to `1`.
Body copy is a muted slate `#677c83`, distinctly lighter than heading black `#070707`.

## Colour palette

| Token | Hex | Usage | Occurrences in theme.css |
|---|---|---|---|
| Teal (primary) | `#265457` | topbar, inactive pills, buttons, hover fills | 35 |
| Teal dark | `#073538` | `.bg-2` track-record band | 6 |
| Gold (accent) | `#cea66d` | Get a Quote button, active pill, logo | 14 |
| Gold variants | `#cba46b`, `#cca56d` | hover/edge cases | 4 |
| Ink | `#070707` | headings, sticky nav links | 10 |
| White | `#fff` | reversed type, sticky header bg | 51 |
| Body slate | `#677c83` | paragraph text | 1 |
| Muted greys | `#7c7c7c`, `#969696`, `#818181` | secondary text | 3 |
| Cream | `#f5f3ed` | soft section background | 1 |
| Borders | `#ddd`, `#ccc`, `#eee` | rules, outline button | 17 |

## Spacing — viewport-HEIGHT based

Section rhythm is driven by `vh`, not pixels (theme.css:2467–2474). Section offsets
therefore shift when the window height changes, which makes absolute-position comparisons
between two differently-sized windows meaningless.

| Class | Rule | @632px tall |
|---|---|---|
| `.sectionpadlarge` | `padding: 16vh 0` | 101px |
| `.sectionpad` | `padding: 10vh 0` | 63.2px |
| `.sectionpadsmall` | `padding: 5vh 0` | 31.6px |
| `.site-footer-2` | `padding: 7vh 0 2vh` | 44.2 / 12.6px |

Modifiers `.zeropaddingtop` / `.zeropaddingbottom` zero one side.

- Content container: the theme overrides Bootstrap to `max-width: 2000px` with `padding-inline: 3%`
  (38.4px at 1280px wide) — it is near-full-width, not a 1320px Bootstrap container.

### Fixed component dimensions (measured @1280×632)

| Element | Size |
|---|---|
| Topbar | h46 |
| Header at rest / sticky | h107 / h69 |
| Hero band | h600; heading 258px from top, buttons 89px from bottom |
| Hero buttons | 196×61, 15px text |
| Intro photo | h450, 28.8% width |
| Box-links band | h515 inner |
| Services photo (block A) | h575 |
| Service pills | h58, 15px text, 25px grid gap |
| Service pane photo | 565×450 (44.1% width), 60px below pills |
| Track-record band | h363, bg `#073538` |
| CTA band | h445 |
| Footer logo / badges | 80×80 / max 150×65 |

## Components

| Element | Spec |
|---|---|
| Topbar | height 46px, bg `#265457`, white 15px text, phone + envelope icons |
| Header (rest) | height 107px, transparent, logo 124×83, white nav |
| Header (sticky) | height 69px, white, shadow `0 3px 12px rgba(0,0,0,.06)`, icon 45×45 |
| Get a Quote button | bg `#cea66d`, white text, ~186×62, square corners |
| Hero buttons | translucent teal fill, white text, square corners, ~230×56 and ~228×56 |
| Service pill (active) | bg `#cea66d`, white, ~232×66, square |
| Service pill (inactive) | bg `#265457`, white, ~232×66, square |
| Outline button | transparent, 1px `#ddd` border, dark text |
| Images | square corners throughout — **no border-radius anywhere on the page** |

## Global notes

- Border radius is effectively `0` across the whole design. Do not let shadcn defaults round anything.
- No gradients except the dark overlay scrims on hero and CTA background photos.
- Font Awesome 6 Pro/Sharp is loaded for icons (phone, envelope, hammer, comment, pencil-ruler,
  arrow, facebook, instagram). These are reproduced as inline SVG in `shared/icons.tsx` rather than
  pulling a licensed icon font.
