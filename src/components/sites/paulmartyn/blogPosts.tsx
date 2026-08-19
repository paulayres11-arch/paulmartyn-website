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
    slug: "cranleigh-neighbourhood-plan-householders",
    title: "The Cranleigh Neighbourhood Plan: what it changed for householders",
    category: "Planning & surveys",
    date: "2026-08-19",
    seoTitle: "Cranleigh Neighbourhood Plan | What Changed for Homeowners",
    metaDescription:
      "Made in July 2024, the Cranleigh Neighbourhood Plan now decides planning applications here. The rooflines policy that affects any extension, explained.",
    imageAlt:
      "Illustration of a Cranleigh street skyline with a dashed line marking the prevailing roofline across four house silhouettes, and a fifth house's amber two-storey extension breaking above it, beside a small scroll stamped MADE and dated 15 July 2024",
    body: [
      "Cranleigh got a new planning document in 2024, and it already shapes what extensions get approved. The Cranleigh Neighbourhood Development Plan 2021–2032 was made on 15 July 2024, after residents backed it at referendum, and now sits alongside the Waverley Local Plan, part of what Waverley Borough Council uses to decide applications here.",
      "One policy homeowners feel directly: new development, extensions included, should not exceed two storeys or rise above the prevailing roofline unless it can be robustly shown that doing so won't harm views, the streetscape or local character. That is a higher bar than \"it looks fine\" — it wants evidence.",
      "For a dormer or a two-storey side extension in Cranleigh, the neighbouring rooflines are now part of the design brief, not an afterthought once drawings are done.",
      "We check the streetscene before we draw anything, so that test is answered before the application goes in, not after.",
    ],
    art: (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="npsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cee2ef" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="nproof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b98a0" /><stop offset="1" stopColor="#6a7880" />
          </linearGradient>
          <linearGradient id="npamber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
          <linearGradient id="npgrass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8bbf68" /><stop offset="1" stopColor="#6a9a4c" />
          </linearGradient>
          <linearGradient id="nppaper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fbf6ec" /><stop offset="1" stopColor="#f0e6d2" />
          </linearGradient>
        </defs>

        <rect width="400" height="400" fill="url(#npsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">One line, new limits</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Cranleigh Neighbourhood Plan — made 15 July 2024</text>

        {/* skyline: four houses under the prevailing roofline, one breaking it */}
        <rect x="24" y="270" width="352" height="30" fill="url(#npgrass)" />

        <path d="M24 152 L58 116 L92 152 Z" fill="url(#nproof)" />
        <rect x="32" y="152" width="52" height="118" fill="#dfe5e8" />
        <rect x="42" y="164" width="14" height="16" fill="#aebcc2" />
        <rect x="62" y="164" width="14" height="16" fill="#aebcc2" />

        <path d="M96 158 L128 124 L160 158 Z" fill="url(#nproof)" />
        <rect x="104" y="158" width="48" height="112" fill="#dfe5e8" />
        <rect x="112" y="170" width="14" height="16" fill="#aebcc2" />
        <rect x="132" y="170" width="14" height="16" fill="#aebcc2" />

        <path d="M164 150 L198 114 L232 150 Z" fill="url(#nproof)" />
        <rect x="172" y="150" width="52" height="120" fill="#dfe5e8" />
        <rect x="182" y="162" width="14" height="16" fill="#aebcc2" />
        <rect x="202" y="162" width="14" height="16" fill="#aebcc2" />

        <path d="M236 156 L266 122 L296 156 Z" fill="url(#nproof)" />
        <rect x="244" y="156" width="44" height="114" fill="#dfe5e8" />
        <rect x="252" y="168" width="14" height="16" fill="#aebcc2" />

        {/* fifth house, extension in amber breaking the guideline */}
        <path d="M300 158 L328 128 L356 158 Z" fill="url(#nproof)" />
        <rect x="306" y="158" width="44" height="112" fill="#dfe5e8" />
        <rect x="314" y="170" width="14" height="16" fill="#aebcc2" />
        <path d="M330 158 L352 92 L374 158 Z" fill="url(#npamber)" />
        <rect x="336" y="158" width="32" height="52" fill="url(#npamber)" />
        <rect x="346" y="176" width="12" height="14" fill="#fbe3c4" />

        {/* prevailing roofline guide */}
        <path d="M20 118 h384" stroke="#1f2a30" strokeWidth="2" strokeDasharray="6 5" opacity=".55" />
        <text x="24" y="110" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#1f2a30" opacity=".7">the prevailing roofline</text>
        <path d="M352 92 l-10 20 l20 0 z" fill="#e08a2b" opacity=".9" />
        <text x="352" y="86" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fontWeight="700" fill="#c4741f" textAnchor="middle">evidence needed</text>

        {/* the plan itself, made */}
        <g transform="translate(28,146)">
          <rect x="0" y="0" width="72" height="52" rx="3" fill="url(#nppaper)" stroke="#d8c9a8" strokeWidth="2" />
          <path d="M8 12 h56 M8 22 h56 M8 32 h40" stroke="#b7a67e" strokeWidth="2" opacity=".7" />
          <circle cx="58" cy="38" r="12" fill="url(#npamber)" stroke="#c4741f" strokeWidth="1.5" />
          <text x="58" y="41" fontFamily="Helvetica,Arial,sans-serif" fontSize="7" fontWeight="700" fill="#1f2a30" textAnchor="middle">MADE</text>
        </g>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">Exceed the roofline, and you need evidence</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">The Plan now sits in the development plan Waverley uses</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: Cranleigh Neighbourhood Development Plan 2021–2032</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
    ),
  },
  {
    slug: "cranleigh-buildings-of-local-merit",
    title: "Cranleigh heritage: the second list your house might be on",
    category: "Heritage",
    date: "2026-08-17",
    seoTitle: "Buildings of Local Merit in Cranleigh | Heritage & Planning",
    metaDescription:
      "Cranleigh has 81 nationally listed buildings — and 174 Buildings of Local Merit. What that second list means for your extension, and how to check before you draw.",
    imageAlt:
      "Illustration of a Cranleigh street elevation with two buildings picked out in amber as nationally listed and five more outlined as buildings of local merit, above the figures 81 and 174",
    body: [
      "Cranleigh's heritage is usually measured in listed buildings: the parish has 81, 80 at Grade II and one at Grade II* — the Church of St Nicolas. Fewer owners know about the second list. The Cranleigh Neighbourhood Plan records 174 Buildings of Local Merit, more than twice as many, and your house can be on it without being listed.",
      "A Building of Local Merit is not statutory listing and brings no listed building consent with it. It is a non-designated heritage asset, so Waverley weighs its significance when deciding an application. People tend to find out at the wrong moment — after the drawings are done.",
      "The conservation area is the other half of the picture. Its extension was adopted on 19 July 2016, taking in the south side of the High Street and Cranleigh Common. The Cranleigh Society, which took part in the review alongside local historians and the Surrey Archaeological Society, said the extension \"will ultimately help to safeguard the heritage and design assets of Cranleigh village centre\".",
      "So three things are worth establishing before anything is drawn: whether the building is listed, whether it is on the local merit list, and whether it sits in the conservation area. We check all three at the start, because each changes what can be built.",
    ],
    art: (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="lmsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfe3ee" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="lmamber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
          <linearGradient id="lmroof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b5a49" /><stop offset="1" stopColor="#6a4034" />
          </linearGradient>
        </defs>

        <rect width="400" height="400" fill="url(#lmsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">Two lists, not one</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Cranleigh parish — listed, and locally significant</text>

        {/* Street elevation. Two amber (nationally listed), five outlined
            (buildings of local merit) — the ratio the numbers below state. */}
        <g>
          {/* Listed, amber */}
          <path d="M28 150 L58 124 L88 150 Z" fill="url(#lmroof)" />
          <rect x="34" y="150" width="48" height="72" fill="url(#lmamber)" />
          <rect x="52" y="188" width="14" height="34" fill="#6a4034" />
          <rect x="40" y="160" width="12" height="14" fill="#fdf3e2" />
          <rect x="66" y="160" width="12" height="14" fill="#fdf3e2" />

          {/* Local merit, outlined */}
          <path d="M96 158 L122 134 L148 158 Z" fill="none" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="101" y="158" width="42" height="64" fill="#ffffff" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="116" y="192" width="12" height="30" fill="none" stroke="#9fb0b6" strokeWidth="2" />

          <path d="M156 152 L182 128 L208 152 Z" fill="none" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="161" y="152" width="42" height="70" fill="#ffffff" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="176" y="192" width="12" height="30" fill="none" stroke="#9fb0b6" strokeWidth="2" />

          {/* Listed, amber */}
          <path d="M212 146 L242 120 L272 146 Z" fill="url(#lmroof)" />
          <rect x="218" y="146" width="48" height="76" fill="url(#lmamber)" />
          <rect x="236" y="188" width="14" height="34" fill="#6a4034" />
          <rect x="224" y="156" width="12" height="14" fill="#fdf3e2" />
          <rect x="250" y="156" width="12" height="14" fill="#fdf3e2" />

          <path d="M276 158 L302 134 L328 158 Z" fill="none" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="281" y="158" width="42" height="64" fill="#ffffff" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="296" y="192" width="12" height="30" fill="none" stroke="#9fb0b6" strokeWidth="2" />

          <path d="M334 152 L358 130 L382 152 Z" fill="none" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="338" y="152" width="40" height="70" fill="#ffffff" stroke="#9fb0b6" strokeWidth="2" />
          <rect x="352" y="192" width="12" height="30" fill="none" stroke="#9fb0b6" strokeWidth="2" />
        </g>

        <rect x="24" y="222" width="354" height="2" fill="#b7c5cb" />

        {/* Legend */}
        <rect x="24" y="240" width="14" height="14" fill="url(#lmamber)" />
        <text x="46" y="252" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#1f2a30">81 nationally listed</text>
        <text x="46" y="268" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#5d7078">80 Grade II, one Grade II* — St Nicolas</text>

        <rect x="222" y="240" width="14" height="14" fill="#ffffff" stroke="#9fb0b6" strokeWidth="2" />
        <text x="244" y="252" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#1f2a30">174 local merit</text>
        <text x="244" y="268" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#5d7078">Not listed. Still weighed.</text>

        <text x="24" y="330" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">Your house can be heritage without being listed</text>
        <text x="24" y="354" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Check listing, local merit and conservation area first</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: Cranleigh Neighbourhood Plan; Waverley Borough Council</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
    ),
  },
  {
    slug: "building-control-completion-certificate",
    title: "Building control: what a completion certificate is actually for",
    category: "Building control",
    date: "2026-08-17",
    seoTitle: "Building Control Completion Certificates | What They Prove",
    metaDescription:
      "A completion certificate proves work meets the Building Regulations 2010. Why solicitors, lenders and insurers always ask for one before a sale completes.",
    imageAlt:
      "Illustration of a house beside a building control clipboard with a checklist, connected by a dashed amber line to a certificate scroll stamped with an amber wax seal, marking the eight week statutory deadline for a completion certificate",
    body: [
      "A completion certificate is the one building regulations document buyers' solicitors always ask for, yet plenty of homeowners have never heard of it until they come to sell.",
      "Under regulation 17 of the Building Regulations 2010, once notifiable work finishes you must tell your local authority within five days; the council or an approved inspector then has up to eight weeks to issue the certificate, confirming the finished work meets the regulations in force when it was built.",
      "No certificate does not mean the work is unsafe, but it does make a sale harder — lenders and insurers use it as their evidence, and its absence tends to knock money off an offer or trigger an indemnity policy.",
      "We notify building control ourselves and chase the certificate through to completion, so it is in the file long before anyone asks for it.",
    ],
    art: (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="ccsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfe3ee" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="ccbrick" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c58462" /><stop offset="1" stopColor="#9d6044" />
          </linearGradient>
          <linearGradient id="ccroof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b5a49" /><stop offset="1" stopColor="#6a4034" />
          </linearGradient>
          <linearGradient id="ccgrass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8bbf68" /><stop offset="1" stopColor="#6a9a4c" />
          </linearGradient>
          <linearGradient id="ccpaper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fbf6ec" /><stop offset="1" stopColor="#f0e6d2" />
          </linearGradient>
          <linearGradient id="ccseal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#ccsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">The certificate that matters</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Building Regulations 2010 — completion sign-off</text>

        {/* house */}
        <path d="M40 200 L110 140 L180 200 Z" fill="url(#ccroof)" />
        <rect x="52" y="200" width="116" height="76" fill="url(#ccbrick)" />
        <path d="M52 214 h116 M52 228 h116 M52 242 h116 M52 256 h116" stroke="#8a5138" strokeWidth="1" opacity=".45" />
        <rect x="64" y="210" width="28" height="26" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="120" y="210" width="28" height="26" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="94" y="250" width="24" height="26" fill="#40525a" />
        <rect x="24" y="276" width="352" height="24" fill="url(#ccgrass)" />

        {/* inspector's clipboard */}
        <g transform="translate(228,108)">
          <rect x="0" y="0" width="66" height="86" rx="4" fill="#e7edf1" stroke="#c3ccd1" strokeWidth="2" />
          <rect x="20" y="-8" width="26" height="14" rx="3" fill="#8b98a0" />
          <path d="M10 22 h46 M10 38 h46 M10 54 h32" stroke="#5d7078" strokeWidth="2" opacity=".6" />
          <path d="M8 22 l7 7 l-7 7" stroke="#4c9a5b" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(-2,44)" />
        </g>

        {/* dashed line: inspection leads to certificate */}
        <path d="M240 196 q-10 18 -10 30" stroke="#e08a2b" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="1 7" />

        {/* certificate scroll with amber wax seal */}
        <g transform="translate(210,228)">
          <rect x="0" y="0" width="150" height="56" rx="4" fill="url(#ccpaper)" stroke="#d8c9a8" strokeWidth="2" />
          <path d="M10 16 h130 M10 28 h130 M10 40 h92" stroke="#b7a67e" strokeWidth="2" opacity=".7" />
          <circle cx="128" cy="42" r="17" fill="url(#ccseal)" stroke="#c4741f" strokeWidth="2" />
          <path d="M120 42 l5 5 l10 -12" stroke="#1f2a30" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">Eight weeks is the statutory deadline</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Notify within 5 days of finishing — the clock starts there</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: The Building Regulations 2010, regulation 17</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
    ),
  },
  {
    slug: "extension-value-cranleigh",
    title: "Does an extension add value in Cranleigh? What the numbers say",
    category: "Extensions",
    date: "2026-08-14",
    seoTitle: "House Extension Value in Cranleigh | What the Data Really Says",
    metaDescription:
      "What does an extension actually add in Cranleigh? Nationwide's data on value, and the Waverley settlement boundary rules that decide what you can build first.",
    imageAlt:
      "Illustration of a house in Cranleigh with a single-storey extension added in amber and a value tag reading plus 24 percent rising above the roofline, with a dashed settlement boundary line marked across the rear garden",
    body: [
      "Cranleigh homeowners ask this more than most: is an extension worth the disruption, or just nice to have? Nationwide's research on home improvements found that a loft conversion or extension adding a double bedroom and bathroom can add up to around 24% to a three-bedroom house's value, with an extra bathroom alone worth roughly 6%.",
      "Those are national averages rather than a Cranleigh figure, and Nationwide is clear the effect varies by area — in a village where buyers are competing for family space, a good conversion tends to sit at the stronger end.",
      "The planning route matters as much as the value. A single-storey rear extension can often go ahead as permitted development, but where your plot sits relative to Cranleigh's settlement boundary decides how much latitude you have: the built-up area falls outside both the Green Belt and the countryside beyond it, while land past the boundary is judged against much tighter countryside policy. Since the Cranleigh Neighbourhood Plan was made in July 2024, Waverley Borough Council uses it to help determine applications here.",
      "We check that before a client spends anything on drawings.",
    ],
    art: (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="evsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cee2ef" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="evbrick" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c58462" /><stop offset="1" stopColor="#9d6044" />
          </linearGradient>
          <linearGradient id="evroof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b5a49" /><stop offset="1" stopColor="#6a4034" />
          </linearGradient>
          <linearGradient id="evext" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
          <linearGradient id="evgrass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8bbf68" /><stop offset="1" stopColor="#6a9a4c" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#evsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">Does it add value?</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Cranleigh extensions — national data, local planning</text>

        {/* garden with Green Belt boundary */}
        <rect x="0" y="252" width="400" height="48" fill="url(#evgrass)" />
        <path d="M0 264 h180 M228 264 h172" stroke="#1f2a30" strokeWidth="2" strokeDasharray="7 5" opacity=".55" />
        <rect x="180" y="256" width="4" height="16" fill="#6a4034" />
        <rect x="224" y="256" width="4" height="16" fill="#6a4034" />
        <text x="202" y="250" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fontWeight="700" fill="#4c6b3c" textAnchor="middle" letterSpacing="0.5">GREEN BELT</text>

        {/* original house */}
        <path d="M46 170 L108 116 L170 170 Z" fill="url(#evroof)" />
        <rect x="58" y="170" width="100" height="82" fill="url(#evbrick)" />
        <path d="M58 186 h100 M58 202 h100 M58 218 h100 M58 234 h100" stroke="#8a5138" strokeWidth="1" opacity=".45" />
        <rect x="70" y="182" width="28" height="26" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="118" y="182" width="28" height="26" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="92" y="222" width="24" height="30" fill="#40525a" />

        {/* extension, amber to mark the added value */}
        <rect x="158" y="204" width="66" height="48" fill="url(#evext)" />
        <path d="M158 204 L191 178 L224 204 Z" fill="#c4741f" />
        <rect x="172" y="216" width="24" height="24" fill="#fbe3c4" stroke="#f6cf9a" strokeWidth="2" />
        <path d="M158 252 h66" stroke="#a8652a" strokeWidth="2" />

        {/* value tag rising from the extension */}
        <path d="M205 178 q6 -34 24 -50" stroke="#e08a2b" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="1 7" />
        <path d="M224 104 l28 -8 l7 26 l-16 12 l-19 -8 z" fill="#e08a2b" />
        <text x="238" y="120" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#1f2a30" textAnchor="middle">+24%</text>
        <text x="238" y="132" fontFamily="Helvetica,Arial,sans-serif" fontSize="8" fill="#3a2a12" textAnchor="middle">nationally*</text>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">National data says up to 24%*</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Outside the settlement boundary, Waverley judges it as countryside</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">*Nationwide research on home improvements, 2025</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
    ),
  },
  {
    slug: "party-wall-notice-timing",
    title: "The party wall notice that sets your start date",
    category: "Planning & surveys",
    date: "2026-08-13",
    seoTitle: "Party Wall Notice Periods | When You Must Serve",
    metaDescription:
      "Two months, one month, or fourteen days? The Party Wall etc. Act 1996 notice periods that quietly decide when your extension can actually start.",
    imageAlt:
      "Illustration of two semi-detached houses sharing a party wall picked out in amber, with a countdown strip beneath it marking two months' notice for work to an existing party wall, one month for excavation, and the neighbour's fourteen days to reply",
    body: [
      "The Party Wall etc. Act 1996 is statute, not guidance, and it quietly sets your start date.",
      "The government's explanatory booklet is clear on the timing: two months' notice for work to an existing party wall or party structure, and one month for a new wall at the line of junction, or for excavation near a neighbour's foundations. Your neighbour then has 14 days to consent in writing. If they object — or simply say nothing — a dispute is deemed to have arisen, and surveyors are appointed.",
      "A notice is also only valid for a year, so serving one far too early is its own mistake.",
      "Most delays we see are not the building work. They are a notice served the week the diggers were booked. We put the notice period in the programme at the start.",
    ],
    art: (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="pwsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d3e4ee" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="pwbrick" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c3805c" /><stop offset="1" stopColor="#9d5f42" />
          </linearGradient>
          <linearGradient id="pwroof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b5a49" /><stop offset="1" stopColor="#6a4034" />
          </linearGradient>
          <linearGradient id="pwwall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0a94a" /><stop offset="1" stopColor="#e08a2b" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#pwsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">Before you can start</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Party Wall etc. Act 1996 — notice periods</text>

        {/* the pair of houses, sharing one wall */}
        <path d="M40 150 L118 96 L196 150 Z" fill="url(#pwroof)" />
        <path d="M204 150 L282 96 L360 150 Z" fill="url(#pwroof)" />
        <rect x="52" y="150" width="144" height="86" fill="url(#pwbrick)" />
        <rect x="204" y="150" width="144" height="86" fill="url(#pwbrick)" />
        <path d="M52 164 h144 M52 180 h144 M52 196 h144 M52 212 h144 M52 228 h144" stroke="#8a5138" strokeWidth="1" opacity=".45" />
        <path d="M204 164 h144 M204 180 h144 M204 196 h144 M204 212 h144 M204 228 h144" stroke="#8a5138" strokeWidth="1" opacity=".45" />
        <rect x="74" y="170" width="34" height="30" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="140" y="170" width="34" height="30" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="226" y="170" width="34" height="30" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="292" y="170" width="34" height="30" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="86" y="210" width="24" height="26" fill="#40525a" />
        <rect x="290" y="210" width="24" height="26" fill="#40525a" />

        {/* the party wall itself */}
        <rect x="196" y="90" width="8" height="146" fill="url(#pwwall)" />
        <path d="M200 78 v14" stroke="#e08a2b" strokeWidth="3" strokeLinecap="round" />
        <circle cx="200" cy="72" r="5" fill="#e08a2b" />
        <text x="200" y="252" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#a8652a" textAnchor="middle">the party wall</text>
        <rect x="24" y="236" width="352" height="6" fill="#b9c8ce" />

        {/* countdown strip */}
        <rect x="24" y="258" width="352" height="30" rx="4" fill="#ffffff" stroke="#c3d0d5" strokeWidth="1.5" />
        <rect x="24" y="258" width="176" height="30" rx="4" fill="#e08a2b" opacity=".16" />
        <path d="M200 258 v30 M288 258 v30" stroke="#c3d0d5" strokeWidth="1.5" />
        <text x="112" y="271" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#1f2a30" textAnchor="middle">2 months</text>
        <text x="112" y="283" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fill="#5d7078" textAnchor="middle">existing party wall</text>
        <text x="244" y="271" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#1f2a30" textAnchor="middle">1 month</text>
        <text x="244" y="283" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fill="#5d7078" textAnchor="middle">excavation</text>
        <text x="332" y="271" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#1f2a30" textAnchor="middle">14 days</text>
        <text x="332" y="283" fontFamily="Helvetica,Arial,sans-serif" fontSize="9" fill="#5d7078" textAnchor="middle">to reply</text>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">Serve it early, or it moves your start date</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">Silence counts as a dispute. A notice lapses after a year.</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: GOV.UK Party Wall etc. Act 1996 explanatory booklet</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
    ),
  },
  {
    slug: "loft-conversions-cranleigh-roof-types",
    title: "Loft conversions in Cranleigh: which roofs work and which do not",
    category: "Loft conversions",
    date: "2026-08-13",
    seoTitle: "Loft Conversions in Cranleigh | Which Roofs Work",
    metaDescription:
      "In Cranleigh the roof decides your loft conversion. Cut roofs convert easily; trussed rafters do not. How to tell, and the head height to measure first.",
    imageAlt:
      "Illustration comparing two roof cross-sections: on the left a traditional cut roof with rafters and purlins leaving the loft space open and a 2.2 metre head height arrow, and on the right a modern W-shaped trussed rafter roof with its braced members blocking the same space",
    body: [
      "In Cranleigh the roof decides the loft conversion, not the floor plan. Houses built before the 1960s generally have a cut roof — rafters and purlins, with the triangle underneath largely open. Later houses tend to have W-shaped trussed rafters, and as the Planning Portal puts it, the inner members of a truss cannot normally be removed.",
      "That does not rule a trussed roof out, but it changes the job: new floor joists and collars, usually steel at ridge and floor level, and a structural engineer's design. It is a different budget, and much better known at the start than halfway through.",
      "Measure before anything else. Building regulations allow 2.2m of head height, though 2.4m is far more comfortable once a new floor and ceiling finish have eaten into it. Take it from the ridge down to the top of the ceiling joist.",
      "If it is marginal, we would rather tell you before you spend on drawings.",
    ],
    art: (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="lwsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfe2ee" /><stop offset="1" stopColor="#f0f5f7" />
          </linearGradient>
          <linearGradient id="lwtile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7d8f97" /><stop offset="1" stopColor="#5c6d75" />
          </linearGradient>
          <linearGradient id="lwtimber" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d8bd92" /><stop offset="1" stopColor="#b3966a" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#lwsky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">The roof decides</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">Cranleigh loft conversions — cut roof vs trussed rafters</text>

        {/* left: cut roof, convertible */}
        <path d="M28 214 L110 108 L192 214 Z" fill="#ffffff" opacity=".72" />
        <path d="M28 214 L110 108 L192 214" fill="none" stroke="url(#lwtile)" strokeWidth="11" strokeLinejoin="round" />
        <rect x="56" y="164" width="9" height="9" fill="url(#lwtimber)" stroke="#8f7550" strokeWidth="1.5" />
        <rect x="155" y="164" width="9" height="9" fill="url(#lwtimber)" stroke="#8f7550" strokeWidth="1.5" />
        <rect x="28" y="214" width="164" height="9" fill="url(#lwtimber)" stroke="#8f7550" strokeWidth="1.5" />
        <path d="M110 122 v88" stroke="#7f9aa6" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M110 132 v66" stroke="#e08a2b" strokeWidth="2.5" />
        <path d="M110 128 l-5 8 h10 z M110 202 l-5 -8 h10 z" fill="#e08a2b" />
        <text x="118" y="168" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#a8652a">2.2m</text>
        <circle cx="110" cy="244" r="13" fill="#3f7d54" />
        <path d="M104 244 l4 5 l8 -10" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="110" y="278" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#1f2a30" textAnchor="middle">Cut roof</text>
        <text x="110" y="292" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fill="#5d7078" textAnchor="middle">pre-1960s — space is open</text>

        {/* right: trussed rafters, blocked */}
        <path d="M208 214 L290 108 L372 214 Z" fill="#ffffff" opacity=".72" />
        <path d="M208 214 L290 108 L372 214" fill="none" stroke="url(#lwtile)" strokeWidth="11" strokeLinejoin="round" />
        <rect x="208" y="214" width="164" height="9" fill="url(#lwtimber)" stroke="#8f7550" strokeWidth="1.5" />
        <path d="M290 112 L238 214 M290 112 L342 214 M252 186 L290 214 M328 186 L290 214" stroke="url(#lwtimber)" strokeWidth="8" strokeLinecap="round" />
        <path d="M290 112 L238 214 M290 112 L342 214 M252 186 L290 214 M328 186 L290 214" stroke="#8f7550" strokeWidth="1" opacity=".6" fill="none" />
        <circle cx="290" cy="244" r="13" fill="#b04434" />
        <path d="M284 238 l12 12 M296 238 l-12 12" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <text x="290" y="278" fontFamily="Helvetica,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#1f2a30" textAnchor="middle">Trussed rafters</text>
        <text x="290" y="292" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fill="#5d7078" textAnchor="middle">later builds — members in the way</text>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">Measure ridge to ceiling joist first</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">2.2m is the minimum; 2.4m is comfortable after finishes.</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: Planning Portal loft conversion guidance</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
    ),
  },
  {
    slug: "extending-1930s-semi-cranleigh",
    title: "Extending a 1930s semi in Cranleigh: what to expect",
    category: "Extensions",
    date: "2026-08-13",
    seoTitle: "Extending a 1930s Semi in Cranleigh | What to Expect",
    metaDescription:
      "How far back can you extend a 1930s semi in Cranleigh? The 3m and 6m permitted development limits, Waverley's design guidance, and the foundations underneath.",
    imageAlt:
      "Illustration of a 1930s semi in side elevation with its rear extension drawn in two stages — the first three metres shown as solid brick under permitted development, the next three metres outlined in amber to mark the prior approval zone — with a dimension line beneath",
    body: [
      "If you own a 1930s semi in Cranleigh, the first question is nearly always how far back you can go. The government's permitted development technical guidance allows a single-storey rear extension on a semi to project 3m beyond the original rear wall, up to 4m high. Between 3m and 6m you can still avoid a full application, but only through the larger home extension prior approval route: neighbours are consulted, and you cannot start until the council decides or 42 days pass.",
      "Locally that is Waverley Borough Council, whose Residential Extensions SPD — adopted in October 2010 and still the guidance your application is measured against — is worth reading before anything is drawn. Waverley also expects an extension to complement the existing house in style, scale and materials, which for a 1930s semi usually means matching the eaves line and the brickwork rather than fighting them. If the property sits outside Cranleigh's settlement boundary, or inside the village conservation area, the tests are tighter again.",
      "Then there is the house itself. A 1930s semi usually sits on shallow foundations, so new footings rarely match the old.",
      "We survey that before quoting, rather than discovering it in a trench.",
    ],
    art: (
      <svg viewBox="0 0 400 400" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="cosky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cee2ef" /><stop offset="1" stopColor="#eff4f7" />
          </linearGradient>
          <linearGradient id="cobrick" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c58462" /><stop offset="1" stopColor="#9d6044" />
          </linearGradient>
          <linearGradient id="cotile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b5a49" /><stop offset="1" stopColor="#6a4034" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#cosky)" />
        <rect y="300" width="400" height="100" fill="#1f2a30" />
        <text x="24" y="36" fontFamily="Helvetica,Arial,sans-serif" fontSize="17" fontWeight="700" fill="#1f2a30">How far back can you go?</text>
        <text x="24" y="56" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#5d7078">1930s semi, Cranleigh — single-storey rear extension</text>

        {/* garden */}
        <rect x="24" y="232" width="352" height="18" fill="#7ba05f" />
        <rect x="24" y="250" width="352" height="10" fill="#5f8149" />

        {/* the original house */}
        <path d="M24 128 L86 84 L148 128 Z" fill="url(#cotile)" />
        <rect x="34" y="128" width="104" height="104" fill="url(#cobrick)" />
        <path d="M34 146 h104 M34 164 h104 M34 182 h104 M34 200 h104 M34 218 h104" stroke="#8a5138" strokeWidth="1" opacity=".45" />
        <rect x="46" y="140" width="30" height="26" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="96" y="140" width="30" height="26" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />
        <rect x="102" y="92" width="14" height="30" fill="#8a5138" />
        <text x="86" y="222" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fill="#f2e2d8" textAnchor="middle">original house</text>

        {/* original rear wall datum */}
        <path d="M138 76 v170" stroke="#1f2a30" strokeWidth="2" strokeDasharray="5 4" />
        <text x="138" y="70" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#1f2a30" textAnchor="middle">original rear wall</text>

        {/* first 3m — permitted development */}
        <rect x="138" y="170" width="90" height="62" fill="url(#cobrick)" />
        <path d="M138 186 h90 M138 202 h90 M138 218 h90" stroke="#8a5138" strokeWidth="1" opacity=".45" />
        <rect x="134" y="164" width="98" height="8" fill="#6a4034" />
        <rect x="160" y="186" width="46" height="34" fill="#dfe9ee" stroke="#f4f7f8" strokeWidth="2" />

        {/* 3m to 6m — prior approval */}
        <rect x="228" y="170" width="90" height="62" fill="#e08a2b" opacity=".14" />
        <rect x="228" y="170" width="90" height="62" fill="none" stroke="#e08a2b" strokeWidth="2.5" strokeDasharray="7 5" />
        <text x="273" y="196" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#a8652a" textAnchor="middle">prior</text>
        <text x="273" y="210" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fontWeight="700" fill="#a8652a" textAnchor="middle">approval</text>

        {/* dimensions */}
        <path d="M138 272 h90 M228 272 h90" stroke="#1f2a30" strokeWidth="1.5" />
        <path d="M138 266 v12 M228 266 v12 M318 266 v12" stroke="#1f2a30" strokeWidth="1.5" />
        <text x="183" y="288" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#1f2a30" textAnchor="middle">3m</text>
        <text x="273" y="288" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#a8652a" textAnchor="middle">to 6m</text>

        <text x="24" y="326" fontFamily="Helvetica,Arial,sans-serif" fontSize="15" fontWeight="700" fill="#e8e4dc">3m as of right. To 6m, neighbours get a say.</text>
        <text x="24" y="352" fontFamily="Helvetica,Arial,sans-serif" fontSize="12" fill="#8fa0a8">No start until Waverley decides, or 42 days pass.</text>
        <text x="24" y="376" fontFamily="Helvetica,Arial,sans-serif" fontSize="11" fill="#8fa0a8">Source: GOV.UK householder permitted development guidance</text>
        <text x="376" y="392" fontFamily="Helvetica,Arial,sans-serif" fontSize="10" fontWeight="700" fill="#e08a2b" letterSpacing="1.3" textAnchor="end">PAUL MARTYN</text>
      </svg>
    ),
  },
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
    slug: "bat-surveys-timing-cranleigh",
    title: "Bat surveys in Cranleigh: why timing can cost you a year",
    category: "Planning & surveys",
    date: "2026-08-13",
    seoTitle: "Bat Surveys in Cranleigh | Why Timing Can Cost a Year",
    metaDescription:
      "A bat survey can delay a Cranleigh build by a year if you miss the May to August window. What triggers one, the law behind it, and how to plan around it.",
    imageAlt:
      "Twelve-month wheel showing bat activity surveys can only be carried out between May and August, with a preliminary roost assessment possible at any time of year",
    body: [
      "If your project touches an older roof, a barn, hanging tiles or timber cladding, Waverley may ask for a bat survey before it will decide your application. Around Cranleigh that catches a lot of projects, because the older cottages, tile-hung elevations and converted farm buildings here are exactly the structures bats roost in.",
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
    slug: "trees-and-foundation-depth-cranleigh",
    title: "In Cranleigh, the tree in your garden sets your foundation depth",
    category: "Foundations",
    date: "2026-08-13",
    seoTitle: "Foundation Depth Near Trees | Weald Clay in Cranleigh",
    metaDescription:
      "Cranleigh sits on Weald clay, so a mature tree near your extension can push foundations from 0.9m to 3.0m deep. How NHBC chapter 4.2 works, and what it costs.",
    imageAlt:
      "Bar chart of typical foundation depths near trees, from 0.9 metres for a low water demand species on low shrinkage soil to 3.0 metres for a high demand species on highly shrinkable clay",
    body: [
      "Cranleigh sits on the Weald clay of the Low Weald, which makes this a local problem rather than a general one. Clay shrinks as it dries and swells as it wets, and Weald clay is stiff, fissured and particularly prone to it. Trees drink a great deal of water, so a mature tree near your extension can move the ground beneath it — and moving ground is what cracks buildings.",
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
