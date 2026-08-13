import type { BlogPost } from "@/types/paulmartyn";

/**
 * Blog posts, newest first.
 *
 * Every image is an ORIGINAL infographic drawn here as inline SVG. Nothing is
 * lifted from the web: reusing stock or press photography on a commercial site
 * is a real legal exposure, and these are cheap to draw and sharper at any size
 * than a bitmap would be. House style is dark slate with an amber accent and
 * the brand name in the corner, per the blog brief.
 *
 * Facts are checked against named UK sources and the source is stated in the
 * post, so a reader can verify it and the page reads as expert rather than
 * assertive. Figures are given as guides with a "get it assessed" caveat,
 * because they genuinely vary by site.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bathroom-fitting-cost-cranleigh",
    title: "What a bathroom fitting costs in Cranleigh, and what changes the price",
    category: "Bathrooms",
    date: "2026-08-13",
    seoTitle: "Bathroom Fitting Cost in Cranleigh | 2026 Price Guide",
    metaDescription:
      "What a bathroom fitting costs in Cranleigh in 2026, and what actually moves the price — from Checkatrade's cost guide to Waverley's older housing stock.",
    imageAlt:
      "Illustration of a Cranleigh bathroom split in two: a finished tiled bath on one side, and a cutaway of the wall behind it on the other showing old corroded pipework with a price tag marking the hidden cost of moving it",
    body: [
      "What does a bathroom cost in Cranleigh? Checkatrade's 2026 cost guide puts a typical UK refit, materials included, at roughly £5,500 to £8,000, rising past £14,000 for a larger or higher-spec room — a guide only, since your own quote depends on what's behind the wall.",
      "In Cranleigh and the wider Waverley area, that's usually the pipework. Many of the village's older cottages and 1930s semis have plumbing runs that were never meant to move, so relocating a bath or shower — rather than replacing it where it stands — is normally the single biggest addition to a job.",
      "Layout comes next, then tiling and waterproofing.",
      "We always walk the room in Cranleigh before quoting — a like-for-like swap and a full reconfiguration are different jobs entirely.",
    ],
    art: (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="cbwall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dfe7ea"/><stop offset="1" stopColor="#c3d0d5"/>
        </linearGradient>
        <linearGradient id="cbstud" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cdb896"/><stop offset="1" stopColor="#a98f68"/>
        </linearGradient>
        <radialGradient id="cbglow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#e08a2b" stopOpacity=".35"/><stop offset="1" stopColor="#e08a2b" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="#eef2f4"/>
      <rect y="300" width="400" height="100" fill="#1f2a30"/>
      <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">What moves the price</text>
      <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Cranleigh bathroom fittings — Checkatrade, 2026</text>
      <rect x="24" y="72" width="162" height="196" fill="url(#cbwall)"/>
      <path d="M24 104 h162 M24 136 h162 M24 168 h162 M24 200 h162 M24 232 h162 M24 264 h162" stroke="#b7c5cb" strokeWidth="1"/>
      <path d="M65 72 v196 M106 72 v196 M147 72 v196" stroke="#b7c5cb" strokeWidth="1"/>
      <rect x="98" y="80" width="18" height="46" rx="3" fill="#dfe7ea" stroke="#9fb0b6" strokeWidth="1.5"/>
      <circle cx="107" cy="92" r="3" fill="#9fb0b6"/>
      <path d="M107 95 v14" stroke="#9fb0b6" strokeWidth="2"/>
      <path d="M34 240 q0 -22 22 -22 h96 q22 0 22 22 v18 h-140 z" fill="#ffffff" stroke="#9fb0b6" strokeWidth="2"/>
      <rect x="34" y="258" width="140" height="10" fill="#dfe7ea" stroke="#9fb0b6" strokeWidth="1.5"/>
      <rect x="30" y="266" width="8" height="10" rx="2" fill="#c3d0d5"/>
      <rect x="166" y="266" width="8" height="10" rx="2" fill="#c3d0d5"/>
      <path d="M186 72 L200 96 L189 118 L200 146 L188 172 L200 198 L189 224 L200 250 L188 268 L186 268 Z" fill="#f6f8f9"/>
      <path d="M186 72 L200 96 L189 118 L200 146 L188 172 L200 198 L189 224 L200 250 L188 268" fill="none" stroke="#b7c5cb" strokeWidth="1.5"/>
      <rect x="200" y="72" width="176" height="196" fill="url(#cbstud)"/>
      <rect x="228" y="72" width="10" height="196" fill="#8f7550" opacity=".6"/>
      <rect x="330" y="72" width="10" height="196" fill="#8f7550" opacity=".6"/>
      <circle cx="284" cy="180" r="70" fill="url(#cbglow)"/>
      <path d="M280 78 q10 20 -6 38 q-16 18 4 34 q18 14 -4 36 q-18 18 6 40 q14 16 -8 34 q-14 12 2 30" fill="none" stroke="#6b4a30" strokeWidth="9" strokeLinecap="round"/>
      <path d="M280 78 q10 20 -6 38 q-16 18 4 34 q18 14 -4 36 q-18 18 6 40 q14 16 -8 34 q-14 12 2 30" fill="none" stroke="#b0703f" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="270" cy="128" r="5" fill="#5a3a24"/>
      <circle cx="292" cy="176" r="4" fill="#5a3a24"/>
      <circle cx="266" cy="230" r="4.5" fill="#5a3a24"/>
      <path d="M270 240 q-4 10 2 16" fill="none" stroke="#7a97a3" strokeWidth="2" opacity=".7"/>
      <path d="M296 270 l30 -4 l4 16 l-14 10 l-16 -6 z" fill="#e08a2b"/>
      <circle cx="308" cy="272" r="2.6" fill="#1f2a30"/>
      <text x="311" y="285" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#1f2a30" textAnchor="middle">+£</text>
      <path d="M280 254 q10 8 16 16" fill="none" stroke="#e08a2b" strokeWidth="2"/>
      <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">The pipe behind the wall, not the suite</text>
      <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Full refit, materials included: £5,500–£14,000+</text>
      <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Checkatrade 2026 cost guide, not a fixed quote</text>
      <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
    </svg>
    ),
  },
  {
    slug: "bat-surveys-timing-surrey",
    title: "Bat surveys: why timing can cost you a year",
    category: "Planning & surveys",
    date: "2026-08-13",
    seoTitle: "Bat Surveys in Surrey | Why Timing Can Cost a Year",
    metaDescription:
      "A bat survey can delay a build by a year if you miss the May to August window. What triggers one, the law behind it, and how to plan around it.",
    imageAlt:
      "Twelve-month wheel showing bat activity surveys can only be carried out between May and August, with a preliminary roost assessment possible at any time of year",
    body: [
      "If your project touches an older roof, a barn, hanging tiles or timber cladding, your council may ask for a bat survey before it will decide your application.",
      "Every UK bat species is a European protected species under the Conservation of Habitats and Species Regulations 2017. It is an offence to disturb them or damage a roost, even without meaning to.",
      "Here is the part that catches people out. A preliminary roost assessment can be done at any time of year — but if it finds evidence, the follow-up activity surveys have to happen while bats are active. That means roughly May to August, with at least two visits between mid-May and August.",
      "Miss that window and you wait until next spring.",
      "We look for survey triggers at design stage, so it lands in the programme instead of stopping it.",
    ],
    art: (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
      <defs>
        <radialGradient id="bnight" cx="50%" cy="45%" r="65%">
          <stop offset="0" stopColor="#2b3a44"/><stop offset="1" stopColor="#141d23"/>
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#bnight)"/>
      <circle cx="52" cy="52" r="1.6" fill="#e8e4dc" opacity=".7"/>
      <circle cx="352" cy="70" r="1.4" fill="#e8e4dc" opacity=".6"/>
      <circle cx="330" cy="330" r="1.5" fill="#e8e4dc" opacity=".5"/>
      <circle cx="66" cy="342" r="1.3" fill="#e8e4dc" opacity=".55"/>
      <text x="200" y="40" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#e8e4dc" textAnchor="middle">Bat activity surveys</text>
      <path d="M 202.25 120.03 L 203.66 66.05 A 140 140 0 0 1 266.80 82.97 L 241.04 130.42 A 86 86 0 0 0 202.25 120.03 Z" fill="#31424b"/><text x="229.2" y="96.9" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(15 229.2 96.9)">Jan</text><path d="M 244.93 132.67 L 273.15 86.63 A 140 140 0 0 1 319.37 132.85 L 273.33 161.07 A 86 86 0 0 0 244.93 132.67 Z" fill="#31424b"/><text x="279.9" y="126.1" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(45 279.9 126.1)">Feb</text><path d="M 275.58 164.96 L 323.03 139.20 A 140 140 0 0 1 339.95 202.34 L 285.97 203.75 A 86 86 0 0 0 275.58 164.96 Z" fill="#31424b"/><text x="309.1" y="176.8" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(75 309.1 176.8)">Mar</text><path d="M 285.97 208.25 L 339.95 209.66 A 140 140 0 0 1 323.03 272.80 L 275.58 247.04 A 86 86 0 0 0 285.97 208.25 Z" fill="#31424b"/><text x="309.1" y="235.2" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(105 309.1 235.2)">Apr</text><path d="M 273.33 250.93 L 319.37 279.15 A 140 140 0 0 1 273.15 325.37 L 244.93 279.33 A 86 86 0 0 0 273.33 250.93 Z" fill="#e08a2b"/><text x="279.9" y="285.9" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#3a2a12" textAnchor="middle" dominantBaseline="central" transform="rotate(135 279.9 285.9)">May</text><path d="M 241.04 281.58 L 266.80 329.03 A 140 140 0 0 1 203.66 345.95 L 202.25 291.97 A 86 86 0 0 0 241.04 281.58 Z" fill="#e08a2b"/><text x="229.2" y="315.1" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#3a2a12" textAnchor="middle" dominantBaseline="central" transform="rotate(165 229.2 315.1)">Jun</text><path d="M 197.75 291.97 L 196.34 345.95 A 140 140 0 0 1 133.20 329.03 L 158.96 281.58 A 86 86 0 0 0 197.75 291.97 Z" fill="#e08a2b"/><text x="170.8" y="315.1" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#3a2a12" textAnchor="middle" dominantBaseline="central" transform="rotate(195 170.8 315.1)">Jul</text><path d="M 155.07 279.33 L 126.85 325.37 A 140 140 0 0 1 80.63 279.15 L 126.67 250.93 A 86 86 0 0 0 155.07 279.33 Z" fill="#e08a2b"/><text x="120.1" y="285.9" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#3a2a12" textAnchor="middle" dominantBaseline="central" transform="rotate(225 120.1 285.9)">Aug</text><path d="M 124.42 247.04 L 76.97 272.80 A 140 140 0 0 1 60.05 209.66 L 114.03 208.25 A 86 86 0 0 0 124.42 247.04 Z" fill="#31424b"/><text x="90.9" y="235.2" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(255 90.9 235.2)">Sep</text><path d="M 114.03 203.75 L 60.05 202.34 A 140 140 0 0 1 76.97 139.20 L 124.42 164.96 A 86 86 0 0 0 114.03 203.75 Z" fill="#31424b"/><text x="90.9" y="176.8" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(285 90.9 176.8)">Oct</text><path d="M 126.67 161.07 L 80.63 132.85 A 140 140 0 0 1 126.85 86.63 L 155.07 132.67 A 86 86 0 0 0 126.67 161.07 Z" fill="#31424b"/><text x="120.1" y="126.1" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(315 120.1 126.1)">Nov</text><path d="M 158.96 130.42 L 133.20 82.97 A 140 140 0 0 1 196.34 66.05 L 197.75 120.03 A 86 86 0 0 0 158.96 130.42 Z" fill="#31424b"/><text x="170.8" y="96.9" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central" transform="rotate(345 170.8 96.9)">Dec</text>
      <circle cx="200" cy="206" r="76" fill="#0f1619"/>
      <path d="M200 196 l7 -9 l3 11 l16 -10 q18 -10 34 2 q-16 2 -24 12 q-9 12 -25 12 l-11 6 l-11 -6 q-16 0 -25 -12 q-8 -10 -24 -12 q16 -12 34 -2 l16 10 l3 -11 z" fill="#e08a2b"/>
      <text x="200" y="252" fontFamily="Helvetica,Arial,sans-serif" fontSize="26" fontWeight="700" fill="#e8e4dc" textAnchor="middle">MAY–AUG</text>
      <text x="200" y="270" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8" textAnchor="middle">the only window</text>
      <text x="200" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#8fa0a8" textAnchor="middle">Preliminary roost assessment: any time of year</text>
      <text x="376" y="394" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
    </svg>
    ),
  },
  {
    slug: "tiles-are-not-waterproof",
    title: "Tiles are not waterproof, and why that matters",
    category: "Bathrooms",
    date: "2026-08-13",
    seoTitle: "Bathroom Tanking Explained | Tiles Are Not Waterproof",
    metaDescription:
      "Tiles and grout are water-resistant, not waterproof. What BS 5385-1 says about tanking wet areas, and why it matters behind the tile.",
    imageAlt:
      "Cutaway diagram of a tiled wet area showing substrate, tanking membrane, adhesive and tile, with the 150mm minimum upstand and 1:80 floor fall marked",
    body: [
      "An expensive and very common misunderstanding: tiles and grout are water-resistant, not waterproof. Water works through the grout lines over time and soaks whatever is behind them.",
      "Since its 2018 revision, BS 5385-1 — the British Standard for wall tiling — has said substrates in wet areas should be waterproofed with a proprietary tanking membrane before a single tile goes on. That covers ordinary shower enclosures and bath surrounds, not only wet rooms.",
      "For a wet room the floor also needs a fall of at least 1:80 towards the drain, and the tanking carried a minimum of 150mm up the walls.",
      "It is a standard rather than a statutory regulation. But skipping it is exactly how plasterboard rots behind a two-year-old bathroom.",
      "We tank as standard. It is worth asking anyone who quotes you whether they do.",
    ],
    art: (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="wtile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dfe7ea"/><stop offset="1" stopColor="#c3d0d5"/>
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="#eef2f4"/>
      <rect y="286" width="400" height="114" fill="#1f2a30"/>
      <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">Tiles are not waterproof</text>
      <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">What has to sit behind them — BS 5385-1</text>
      <rect x="150" y="70" width="34" height="216" fill="#8d99a0"/>
      <rect x="184" y="70" width="16" height="216" fill="#e08a2b"/>
      <rect x="200" y="70" width="10" height="216" fill="#a9b6bb"/>
      <rect x="210" y="70" width="26" height="216" fill="url(#wtile)"/>
      <path d="M210 104 h26 M210 138 h26 M210 172 h26 M210 206 h26 M210 240 h26" stroke="#9fb0b6" strokeWidth="1.5"/>
      <path d="M196 92 q6 9 0 13 q-6 -4 0 -13 z" fill="#8fd4f0" opacity=".9"/><path d="M232 74 q6 9 0 13 q-6 -4 0 -13 z" fill="#8fd4f0" opacity=".9"/><path d="M266 96 q6 9 0 13 q-6 -4 0 -13 z" fill="#8fd4f0" opacity=".9"/>
      <path d="M300 78 l-52 0" stroke="#5d7078" strokeWidth="1.4"/>
      <text x="306" y="82" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#1f2a30">Tile</text>
      <path d="M300 108 l-96 0" stroke="#5d7078" strokeWidth="1.4"/>
      <text x="306" y="112" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#1f2a30">Adhesive</text>
      <path d="M300 138 l-108 0" stroke="#e08a2b" strokeWidth="2"/>
      <text x="306" y="142" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#c4741f">Tanking</text>
      <text x="306" y="157" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#c4741f">membrane</text>
      <path d="M300 186 l-134 0" stroke="#5d7078" strokeWidth="1.4"/>
      <text x="306" y="190" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#1f2a30">Substrate</text>
      <path d="M132 214 L132 286" stroke="#e08a2b" strokeWidth="2.5"/>
      <path d="M126 214 h12 M126 286 h12" stroke="#e08a2b" strokeWidth="2.5"/>
      <text x="120" y="254" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#c4741f" textAnchor="end">150mm</text>
      <text x="24" y="316" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fill="#e8e4dc">Minimum upstand above finished floor</text>
      <text x="24" y="342" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fill="#e8e4dc">Wet room floor fall</text>
      <text x="376" y="342" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#e08a2b" textAnchor="end">1:80 min</text>
      <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">A standard, not a statutory regulation</text>
      <text x="376" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
    </svg>
    ),
  },
  {
    slug: "trees-and-foundation-depth",
    title: "The tree in your garden sets your foundation depth",
    category: "Foundations",
    date: "2026-08-13",
    seoTitle: "Foundation Depth Near Trees | Clay Soil in Surrey",
    metaDescription:
      "A mature tree near your extension can push foundations from 0.9m to 3.0m deep. How NHBC chapter 4.2 works, and why it belongs in the budget early.",
    imageAlt:
      "Bar chart of typical foundation depths near trees, from 0.9 metres for a low water demand species on low shrinkage soil to 3.0 metres for a high demand species on highly shrinkable clay",
    body: [
      "Clay shrinks as it dries and swells as it wets. Trees drink a great deal of water, so a mature tree near your extension can move the ground beneath it — and moving ground is what cracks buildings.",
      "NHBC Standards chapter 4.2 handles this with a ratio: the distance from the tree divided by that species' mature height. Broadly, if a tree stands closer than its own mature height, your foundations are inside its zone of influence.",
      "The practical range is wide. A low water demand species on low shrinkage soil may need only the standard 0.9m minimum. A thirsty species on highly shrinkable clay can push you to 3.0m.",
      "That gap is thousands of pounds of concrete, so it belongs in the budget early — confirmed by a site investigation, never a guess.",
    ],
    art: (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="tsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a9fd4"/><stop offset="1" stopColor="#9fd3ea"/>
        </linearGradient>
        <linearGradient id="tsoil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5b4530"/><stop offset="1" stopColor="#3a2b1d"/>
        </linearGradient>
      </defs>
      <rect width="400" height="236" fill="url(#tsky)"/>
      <circle cx="326" cy="58" r="22" fill="#ffe9a8" opacity=".85"/>
      <ellipse cx="92" cy="70" rx="42" ry="15" fill="#ffffff" opacity=".55"/>
      <ellipse cx="120" cy="62" rx="28" ry="12" fill="#ffffff" opacity=".45"/>
      <rect y="228" width="400" height="14" fill="#6ab04a"/>
      <rect y="242" width="400" height="158" fill="url(#tsoil)"/>
      <path d="M150 250 Q 90 296 41 301" stroke="#c9b79a" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".9"/><path d="M150 250 Q 92 326 44 356" stroke="#c9b79a" strokeWidth="6" fill="none" strokeLinecap="round" opacity=".9"/><path d="M150 250 Q 105 353 68 405" stroke="#c9b79a" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".9"/><path d="M150 250 Q 136 349 124 398" stroke="#c9b79a" strokeWidth="4" fill="none" strokeLinecap="round" opacity=".9"/><path d="M150 250 Q 191 339 225 380" stroke="#c9b79a" strokeWidth="4" fill="none" strokeLinecap="round" opacity=".9"/><path d="M150 250 Q 222 332 280 367" stroke="#c9b79a" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".9"/><path d="M150 250 Q 225 303 286 313" stroke="#c9b79a" strokeWidth="6" fill="none" strokeLinecap="round" opacity=".9"/><path d="M150 250 Q 215 277 269 267" stroke="#c9b79a" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".9"/>
      <rect x="144" y="196" width="13" height="58" fill="#7a5b3a"/>
      <circle cx="150" cy="168" r="46" fill="#3f8f37"/>
      <circle cx="118" cy="186" r="30" fill="#4aa33f"/>
      <circle cx="182" cy="186" r="30" fill="#4aa33f"/>
      <circle cx="150" cy="140" r="30" fill="#57b449"/>
      <rect x="286" y="150" width="96" height="78" fill="#efe9df"/>
      <path d="M280 152 L334 118 L388 152 Z" fill="#b4442f"/>
      <rect x="304" y="180" width="22" height="24" fill="#8fc4dd"/>
      <rect x="344" y="180" width="22" height="24" fill="#8fc4dd"/>
      <rect x="286" y="242" width="96" height="86" fill="#9a9a95"/>
      <path d="M286 242 h96" stroke="#e08a2b" strokeWidth="3"/>
      <path d="M272 242 L272 328" stroke="#e08a2b" strokeWidth="2.5"/>
      <path d="M266 242 h12 M266 328 h12" stroke="#e08a2b" strokeWidth="2.5"/>
      <text x="260" y="288" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#ffd79a" textAnchor="end">0.9m</text>
      <text x="260" y="308" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#ffd79a" textAnchor="end">to 3.0m</text>
      <rect y="336" width="400" height="64" fill="#1f2a30" opacity=".92"/>
      <text x="24" y="360" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">Roots drink the clay. Clay shrinks.</text>
      <text x="24" y="380" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Depth set by species and soil — NHBC ch. 4.2</text>
      <text x="376" y="380" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
    </svg>
    ),
  },
];
