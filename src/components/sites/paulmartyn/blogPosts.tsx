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
      <rect width="400" height="400" fill="#1f2a30"/>
      <text x="32" y="46" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#e8e4dc">Bat activity surveys</text>
      <text x="32" y="68" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fill="#8fa0a8">When they can legally be carried out</text>
      <path d="M 201.55 122.02 L 202.68 68.03 A 128 128 0 0 1 261.66 83.83 L 235.65 131.15 A 74 74 0 0 0 201.55 122.02 Z" fill="#2c3a42"/>
      <text x="238.8" y="51.1" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central">J</text>
      <path d="M 238.33 132.70 L 266.31 86.51 A 128 128 0 0 1 309.49 129.69 L 263.30 157.67 A 74 74 0 0 0 238.33 132.70 Z" fill="#2c3a42"/>
      <text x="306.1" y="89.9" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central">F</text>
      <path d="M 264.85 160.35 L 312.17 134.34 A 128 128 0 0 1 327.97 193.32 L 273.98 194.45 A 74 74 0 0 0 264.85 160.35 Z" fill="#2c3a42"/>
      <text x="344.9" y="157.2" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central">M</text>
      <path d="M 273.98 197.55 L 327.97 198.68 A 128 128 0 0 1 312.17 257.66 L 264.85 231.65 A 74 74 0 0 0 273.98 197.55 Z" fill="#2c3a42"/>
      <text x="344.9" y="234.8" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central">A</text>
      <path d="M 263.30 234.33 L 309.49 262.31 A 128 128 0 0 1 266.31 305.49 L 238.33 259.30 A 74 74 0 0 0 263.30 234.33 Z" fill="#e08a2b"/>
      <text x="306.1" y="302.1" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e08a2b" textAnchor="middle" dominantBaseline="central">M</text>
      <path d="M 235.65 260.85 L 261.66 308.17 A 128 128 0 0 1 202.68 323.97 L 201.55 269.98 A 74 74 0 0 0 235.65 260.85 Z" fill="#e08a2b"/>
      <text x="238.8" y="340.9" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e08a2b" textAnchor="middle" dominantBaseline="central">J</text>
      <path d="M 198.45 269.98 L 197.32 323.97 A 128 128 0 0 1 138.34 308.17 L 164.35 260.85 A 74 74 0 0 0 198.45 269.98 Z" fill="#e08a2b"/>
      <text x="161.2" y="340.9" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e08a2b" textAnchor="middle" dominantBaseline="central">J</text>
      <path d="M 161.67 259.30 L 133.69 305.49 A 128 128 0 0 1 90.51 262.31 L 136.70 234.33 A 74 74 0 0 0 161.67 259.30 Z" fill="#e08a2b"/>
      <text x="93.9" y="302.1" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e08a2b" textAnchor="middle" dominantBaseline="central">A</text>
      <path d="M 135.15 231.65 L 87.83 257.66 A 128 128 0 0 1 72.03 198.68 L 126.02 197.55 A 74 74 0 0 0 135.15 231.65 Z" fill="#2c3a42"/>
      <text x="55.1" y="234.8" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central">S</text>
      <path d="M 126.02 194.45 L 72.03 193.32 A 128 128 0 0 1 87.83 134.34 L 135.15 160.35 A 74 74 0 0 0 126.02 194.45 Z" fill="#2c3a42"/>
      <text x="55.1" y="157.2" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central">O</text>
      <path d="M 136.70 157.67 L 90.51 129.69 A 128 128 0 0 1 133.69 86.51 L 161.67 132.70 A 74 74 0 0 0 136.70 157.67 Z" fill="#2c3a42"/>
      <text x="93.9" y="89.9" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central">N</text>
      <path d="M 164.35 131.15 L 138.34 83.83 A 128 128 0 0 1 197.32 68.03 L 198.45 122.02 A 74 74 0 0 0 164.35 131.15 Z" fill="#2c3a42"/>
      <text x="161.2" y="51.1" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#8fa0a8" textAnchor="middle" dominantBaseline="central">D</text>
      <text x="200" y="186" fontFamily="Helvetica,Arial,sans-serif" fontSize="30" fontWeight="700" fill="#e8e4dc" textAnchor="middle">MAY</text>
      <text x="200" y="208" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fill="#8fa0a8" textAnchor="middle">to</text>
      <text x="200" y="236" fontFamily="Helvetica,Arial,sans-serif" fontSize="30" fontWeight="700" fill="#e8e4dc" textAnchor="middle">AUG</text>
      <text x="32" y="356" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fill="#8fa0a8">Preliminary roost assessment: any time of year</text>
      <text x="32" y="378" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#e08a2b" letterSpacing="1.4">PAUL MARTYN</text>
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
      <rect width="400" height="400" fill="#1f2a30"/>
      <text x="32" y="46" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#e8e4dc">What sits behind the tile</text>
      <text x="32" y="68" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fill="#8fa0a8">BS 5385-1 — wet areas, in order</text>
      <rect x="150" y="120" width="180" height="58" fill="#2c3a42"/><text x="342" y="149" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#e8e4dc" dominantBaseline="central">Substrate</text><rect x="150" y="178" width="180" height="20" fill="#e08a2b"/><text x="342" y="188" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#e8e4dc" dominantBaseline="central">Tanking membrane</text><rect x="150" y="198" width="180" height="16" fill="#46555e"/><text x="342" y="206" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#e8e4dc" dominantBaseline="central">Adhesive</text><rect x="150" y="214" width="180" height="26" fill="#5b6b74"/><text x="342" y="227" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#e8e4dc" dominantBaseline="central">Tile</text>
      <rect x="150" y="120" width="180" height="120" fill="none" stroke="#0f1619" strokeWidth="1"/>
      <path d="M138 120 L138 240" stroke="#e08a2b" strokeWidth="2"/>
      <path d="M132 120 L144 120 M132 240 L144 240" stroke="#e08a2b" strokeWidth="2"/>
      <text x="126" y="180" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#e08a2b" textAnchor="end" dominantBaseline="central">150mm</text>
      <text x="32" y="286" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fill="#e8e4dc">Minimum upstand above finished floor</text>
      <path d="M32 316 L330 316" stroke="#2c3a42" strokeWidth="1"/>
      <text x="32" y="342" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fill="#e8e4dc">Wet room floor fall</text>
      <text x="330" y="342" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#e08a2b" textAnchor="end">1:80 min</text>
      <text x="32" y="378" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#e08a2b" letterSpacing="1.4">PAUL MARTYN</text>
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
      <rect width="400" height="400" fill="#1f2a30"/>
      <text x="32" y="46" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#e8e4dc">Foundation depth near trees</text>
      <text x="32" y="68" fontFamily="Helvetica,Arial,sans-serif" fontSize="12.5" fill="#8fa0a8">NHBC Standards, chapter 4.2 — typical range</text>
      <path d="M60 118 l16 -28 l16 28 z" fill="#46555e"/>
      <path d="M64 100 l12 -22 l12 22 z" fill="#46555e"/>
      <rect x="73" y="118" width="6" height="16" fill="#46555e"/>
      <text x="104" y="112" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#8fa0a8">Inside the zone of influence if the tree is</text>
      <text x="104" y="128" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#8fa0a8">closer than its own mature height</text>
      <rect x="150" y="150" width="51" height="26" fill="#46555e"/><text x="211" y="163" fontFamily="Helvetica,Arial,sans-serif" fontSize="14" fontWeight="700" fill="#e8e4dc" dominantBaseline="central">0.9m</text><text x="138" y="157" fontFamily="Helvetica,Arial,sans-serif" fontSize="10.5" fill="#8fa0a8" textAnchor="end" dominantBaseline="central">Low demand,</text><text x="138" y="171" fontFamily="Helvetica,Arial,sans-serif" fontSize="10.5" fill="#8fa0a8" textAnchor="end" dominantBaseline="central">low shrinkage</text><rect x="150" y="216" width="102" height="26" fill="#46555e"/><text x="262" y="229" fontFamily="Helvetica,Arial,sans-serif" fontSize="14" fontWeight="700" fill="#e8e4dc" dominantBaseline="central">1.8m</text><text x="138" y="223" fontFamily="Helvetica,Arial,sans-serif" fontSize="10.5" fill="#8fa0a8" textAnchor="end" dominantBaseline="central">Moderate</text><rect x="150" y="282" width="170" height="26" fill="#e08a2b"/><text x="330" y="295" fontFamily="Helvetica,Arial,sans-serif" fontSize="14" fontWeight="700" fill="#e8e4dc" dominantBaseline="central">3.0m</text><text x="138" y="289" fontFamily="Helvetica,Arial,sans-serif" fontSize="10.5" fill="#8fa0a8" textAnchor="end" dominantBaseline="central">High demand,</text><text x="138" y="303" fontFamily="Helvetica,Arial,sans-serif" fontSize="10.5" fill="#8fa0a8" textAnchor="end" dominantBaseline="central">high shrinkage</text>
      <text x="32" y="368" fontFamily="Helvetica,Arial,sans-serif" fontSize="11.5" fill="#8fa0a8">Site investigation required — never assume</text>
      <text x="330" y="368" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#e08a2b" letterSpacing="1.4" textAnchor="end">PAUL MARTYN</text>
    </svg>
    ),
  },
];
