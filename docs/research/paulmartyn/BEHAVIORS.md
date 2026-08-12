# Behaviors — Paul Martyn Construction (homepage)

All values below are from `getComputedStyle()` in Chrome at 1440px width, not estimated.

## 1. Header sticky transform — SCROLL-DRIVEN

The single most visible behavior on the page. The theme toggles `.is-sticky` on `#masthead`.

| Property | State A (at rest, scroll 0) | State B (`.is-sticky`) |
|---|---|---|
| `position` | `absolute` | `fixed` |
| `top` | `46px` (sits below the topbar) | `0` |
| `height` | `107px` | `69px` |
| `background-color` | `rgba(0,0,0,0)` | `rgb(255,255,255)` |
| `box-shadow` | `none` | `rgba(0,0,0,0.06) 0 3px 12px 0` |
| nav link `color` | `rgb(255,255,255)` | `rgb(7,7,7)` |
| logo | the full wordmark @ 124×83 (full wordmark) | `display:none` |
| sticky icon | not rendered | `favicon.png` @ 45×45 (`img.stickyicon`) |

- **Trigger:** the topbar + header scroll out of view (~153px). Verified sticky at scrollY 2608, not sticky at scrollY 0.
- **Transition:** `top 0.35s, opacity 0.35s`.
- **Implementation:** `useState` + scroll listener on `window`, threshold 153px, `passive: true`.
- The topbar itself scrolls away normally — it is not sticky.

## 2. Hero slider — TIME-DRIVEN

- Slick carousel, `.simple-slick-slider`, height `600px`.
- **2 slides**, both carrying identical copy; only the background photograph differs.
- **No dots, no arrows** (`.slick-dots` absent, 0 `.slick-arrow`).
- Autoplay with crossfade between the two background images.
- Backgrounds: `hero-panorama-2.jpg`, `about-intro.jpg` (plus `hero-panorama.jpg` used elsewhere).
- Dark teal overlay sits above the photo so white type stays legible.

## 3. Services tabs — CLICK-DRIVEN (confirmed, not scroll-driven)

Evidence: buttons carry `data-bs-toggle="tab"`, `data-bs-target`, `role="tab"`, `aria-selected`, `aria-controls`. These are Bootstrap 5 tabs. There is **no** IntersectionObserver driving them.

- 4 tab buttons + 1 outline link button ("View all services").
- Panes `#content-0..3`, classes `tab-pane fade` / `tab-pane fade show active`.
- **Active pill:** background `#cea66d` (gold), white text.
- **Inactive pill:** background `#265457` (teal), white text.
- **"View all services":** transparent with `1px` border, dark text — a link to `/services`, not a tab.
- **Transition:** Bootstrap `fade` — `opacity 0 → 1` over `0.15s linear`.
- Each pane shows: large heading, one body paragraph, `Read more >>` link. The photo to the left changes with the pane.

## 4. Testimonial slider — CLICK-DRIVEN

- Slick slider inside `.bg-2`, **10 testimonials**, one visible at a time.
- Next arrow only (`.slick-next`), rendered as a thin right-pointing arrow, white, right-hand side.
- Each slide: 5 gold/white stars, bold heading, body copy, uppercase attribution name.

## 5. Hover states

| Element | Change |
|---|---|
| Primary nav link | colour shift; dropdown `ul` reveals on hover for "Services" (8 children) |
| `.topbar a` | colour transition |
| `.boxlinks a` | rule at `theme.css:2907` — link block hover |
| `.stickyquote` (Get a Quote) | `transition: 0.4s ease-out`, inset box-shadow fill `rgb(38,84,87)` |
| Footer links | colour transition |

## 6. Responsive

Breakpoints present in `theme.css` (max-width unless noted):
`1160, 1050, 990, 900, 870, 800, 767, 600, 575, 480, 400, 350, 300` plus min-width `750` and `900`.

Primary structural breaks:
- **≤990px** — primary nav collapses; `.menu-toggle.c-hamburger.c-hamburger--htx` burger appears (present in DOM at all widths, hidden on desktop).
- **≤767px** — two-column section layouts (text + image) stack to one column.
- **≤575px** — footer link columns stack; hero type scales down.

> Note: live viewport resizing via the extension did not take effect (window stayed ≥1280px), so responsive rules were read from `theme.css` rather than measured in-browser. Mobile fidelity should be re-checked in the browser during QA.

## 7. Explicitly absent

- No scroll-snap containers.
- No smooth-scroll library (no `.lenis`, no Locomotive).
- No entrance/reveal animations on scroll — sections are painted statically.
- No parallax.
- No modals except the consent plugin (excluded from the clone).
