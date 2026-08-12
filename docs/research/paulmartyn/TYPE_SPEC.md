# Type Specification — design requirements

Measured with All values from `getComputedStyle()` in Chrome.

---

## 1. The font situation — decision required

The theme declares `font-family: articulat-cf, sans-serif` on `body` and every heading.
The Typekit kit (`use.typekit.net/mnb3rhf.css`) serves **only** `neue-haas-unica` and
`orpheuspro`. There is **no `@font-face` for `articulat-cf` anywhere on the page**, and every
kit face reports `status: "unloaded"` in `document.fonts`.

**The reference site never renders Articulat CF.** It falls through to the generic
`sans-serif` — Helvetica on macOS, Arial on Windows. That is what every screenshot shows.

Three options:

| Option | Result | Cost |
|---|---|---|
| **A. Match what's on screen** (current) | `articulat-cf, "Helvetica Neue", Helvetica, Arial, sans-serif` — no webfont request | Free. Identical to the reference as rendered. |
| **B. Licence Articulat CF** | The intended design; noticeably more geometric than Helvetica | Adobe Fonts subscription; add the kit `<link>` |
| **C. Free near-match** | e.g. Archivo, Inter, Manrope via `next/font` | Free, self-hosted, but visibly different |

Currently on **A**. `articulat-cf` stays first in the stack, so if the kit is ever fixed or
licensed the site upgrades with no code change.

Fonts in the reference that we do **not** carry over: Poppins (Trustindex widget — removed),
Nunito (form plugin — not used), Font Awesome (icons — redrawn as inline SVG).

---

## 2. Headings are FLUID, not fixed

Every heading uses `calc(<n>em + <n>vw)` against the 15px base. There are no fixed pixel
heading sizes and no breakpoint steps.

This is why a size audit reports *ranges* like "H2: 52.38–56.82px" or "H3: 32.88–38.88px".
Those are not ranges — they are **two different selectors**, each sampled at one viewport
width. At a viewport of 894px all four reproduce exactly:

| Rule | Formula | @894px |
|---|---|---|
| `.slider-text h2` (hero) | `calc(2em + 3vw)` | **56.82px** |
| `h2` | `calc(2.3em + 2vw)` | **52.38px** |
| `h3` | `calc(1.4em + 2vw)` | **38.88px** |
| `.repeater-text-inner h3` | `calc(1em + 2vw)` | **32.88px** |

### Computed at common widths

| Role | Formula | 390 | 768 | 1280 | 1440 | 1920 | Class |
|---|---|---|---|---|---|---|---|
| Hero h2 | `calc(30px + 3vw)` | 41.7 | 53.0 | 68.4 | 73.2 | 87.6 | `.t-hero` |
| Section h2 | `calc(34.5px + 2vw)` | 42.3 | 49.9 | 60.1 | 63.3 | 72.9 | `.t-h2` |
| Centred h3 | `calc(21px + 2vw)` | 28.8 | 36.4 | 46.6 | 49.8 | 59.4 | `.t-h3-lg` |
| Section h3 | `calc(15px + 2vw)` | 22.8 | 30.4 | 40.6 | 43.8 | 53.4 | `.t-h3` |

All headings: `font-weight: 500`, `line-height: 1.1`. The hero overrides to `line-height: 1`.
Heading `margin-bottom`: `1em` (h3), `0.8em` (hero h2).

---

## 3. Fixed sizes — an em scale off a 15px base

Every non-fluid size is a clean multiple of the 15px root:

| em | px | Used for | Weight | Line height |
|---|---|---|---|---|
| 0.9em | **13.5** | Topbar strapline, phone, email | 300 | 20.25 (1.5) |
| 1.0em | **15** | Body copy, footer menu links, service pills, buttons | 300 (pills 400) | 22.5 (1.5) |
| 1.1em | **16.5** | Primary nav, header CTA, h5 | 300 (h5 500) | 24.75 (1.5) |
| 1.2em | **18** | Eyebrow / label `h1`, list items | 200 | 19.8 (1.1) |
| 1.6em | **24** | Box-link card titles (h4) | 500 | 26.4 (1.1) |
| 1.7em | **25.5** | Footer contact line | 300 | 38.25 (1.5) |
| 2.2em | **33** | Testimonial title (h4) | 500 | 36.3 (1.1) |
| — | **50** | Inner-page title (`.highcontent h1`) | 500 | 55 (1.1) |
| — | **13.5** | Inner-page eyebrow, uppercase, ls 1px | 300 | — |

**Letter-spacing:** `normal` everywhere except the eyebrow (`1px`) and uppercase attribution
names (`~1.5px`).

**Weights in use:** 200 (eyebrow), 300 (body/nav/links — the default), 400 (service pills),
500 (all headings), 700 (attribution names).

---

## 4. Colour pairing

| Token | Hex | Applied to |
|---|---|---|
| Ink | `#070707` | Headings, nav on white |
| Slate | `#677c83` | Body paragraphs |
| White | `#ffffff` | All type on teal/dark grounds |
| Gold | `#cea66d` | Accent, active pill, step numbers |

> **Specificity warning.** Do not set body colour via `.pm-site p { color }`. That
> selector scores (0,1,1) and out-specifies Tailwind's `text-white` (0,1,0), silently turning
> every white paragraph slate. Same trap applies to `margin: 0` on headings vs `mx-auto`.
> Set colour per element.

---

## 5. Consolidated scale for the rebuild

Rather than carrying every incidental size, the build uses:

```
Fluid:  .t-hero  calc(30px + 3vw)     .t-h2   calc(34.5px + 2vw)
        .t-h3-lg calc(21px + 2vw)     .t-h3   calc(15px + 2vw)

Fixed:  13.5 · 15 · 16.5 · 18 · 24 · 25.5 · 33 · 50
Weights: 200 · 300 · 400 · 500 · 700
Line height: 1.1 headings · 1.5 body
```

Defined once in `src/app/globals.css` under `.pm-site`, scoped to the route so it cannot
leak into other pages added later.
