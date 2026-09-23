import type { BlogPost } from "@/types/paulmartyn";
import { BLOG_ART } from "./blogArt";

/**
 * Blog posts, newest first.
 *
 * REWRITTEN LONG-FORM 2026-09-04. Every post was previously three paragraphs —
 * about 210 words — and all fifteen shared the /blog URL, which is why none of
 * them ranked for anything. A 210-word page has nothing for Google to match a
 * real question against, and fifteen subjects on one URL can only ever have one
 * title tag. Posts now run 1,500–2,000 words and each has its own page at
 * /blog/{slug}. See src/app/blog/[slug]/page.tsx.
 *
 * The brief every post is written to, and the standard the automation has to
 * hit, is docs/BLOG_AUTOMATION.md. In short:
 *
 *   1. SEO FIRST, and the target is local. The commercial phrase this site has
 *      to win is "builders Cranleigh" / "Cranleigh builders". Individual posts
 *      will not rank for that head term themselves and should not try — they
 *      rank for the long questions a Cranleigh homeowner actually types, and
 *      then pass authority to /areas/cranleigh with that anchor text. Every
 *      post links there at least once, in a sentence, not as a footer.
 *   2. START FROM A PAIN POINT. Not "here is a regulation" but "here is the
 *      thing that costs you money or a season, and here is how to avoid it."
 *      Cost overruns and delay are the two things homeowners fear most —
 *      unforeseen costs are the single biggest cause of payment disputes in
 *      UK construction — so every post should say plainly what to budget and
 *      when to book it.
 *   3. SHOW THE SAVING. At least one callout per post that is worth real money
 *      or real weeks: a fee avoided, a survey booked in the right month, a
 *      re-quote that finds a wrong assumption.
 *   4. QUOTE THE TRADE. Paul's own words, attributed. This is the part a
 *      content farm cannot copy and the part Google's helpful-content signals
 *      are looking for: first-hand experience of the actual job.
 *   5. FACTS ARE CHECKED against named UK sources and the source is stated in
 *      the post, so a reader can verify it. Figures are guides with a "get it
 *      assessed" caveat, because they genuinely vary by site. Fee and
 *      regulation figures carry the date they applied from — a stale figure in
 *      a post that claims expertise does more damage than no post at all.
 *
 * Cost figures must agree with the rest of the site: /pricing and
 * /guides/house-extension-costs-surrey are the source of truth for rates.
 * If you change one, change all three.
 *
 * Art lives in blogArt.tsx, keyed by slug.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "barn-conversions-cranleigh-planning-route",
    title: "Barn conversions around Cranleigh: the planning route",
    category: "Planning & surveys",
    date: "2026-09-23",
    seoTitle: "Barn Conversions in Cranleigh: The Class Q Planning Route",
    metaDescription:
      "Converting a barn near Cranleigh? What Class Q permitted development allows since the 2024 rule change, when you need full planning, and what it costs.",
    excerpt:
      "Four walls and a roof don't make a barn most of the way to being a house. Whether it can become one without full planning permission comes down to Class Q rules that changed substantially in 2024 — and most Cranleigh farmland qualifies, if you check the right things first.",
    imageAlt:
      "Illustration of a traditional weatherboarded barn in a Cranleigh field at golden hour, with an open hay-loft hatch showing a roosting bat, and a signpost forking toward a tick-marked Class Q route leading to the barn and a crossed-out Full Planning route leading to a distant village skyline representing the conservation area",
    related: [
      "cranleigh-settlement-boundary",
      "bat-surveys-timing-cranleigh",
      "structural-calculations-building-control",
      "cranleigh-conservation-area-consent",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "Most working barns around Cranleigh can become a home without full planning permission, using **Class Q** permitted development — but the rules changed substantially on **21 May 2024**, and the old \"465 square metres\" figure quoted in a lot of guides is now out of date.",
          "Current Class Q limits, per agricultural unit: **up to 10 dwellings**, **1,000m² of total floorspace**, **150m² per dwelling** — plus, new since 2024, a single-storey rear extension of up to 4m.",
          "Class Q permits a **conversion**, not a rebuild. A barn needing its walls or roof substantially reconstructed falls outside the right — a 2016 High Court case, Hibbitt v Secretary of State, is what planning officers cite when refusing one.",
          "Class Q does not apply on **Article 2(3) land** — conservation areas, National Parks and the Surrey Hills National Landscape among them — or to **listed buildings**. Most Cranleigh farmland sits outside the village's conservation area, but check, don't assume.",
          "Get the structural survey and the designation check done before you commission drawings. A prior approval refused because the barn doesn't qualify costs the fee, the 56-day wait, and starts the clock again under full planning.",
        ],
      },
      {
        type: "p",
        text: "Somebody rings us most months about a barn — already theirs, standing behind a farmhouse bought years ago and never used, or a field and a barn coming up for sale near Cranleigh with the sums being done before an offer's even accepted. Both calls start the same way: the barn already has four walls and a roof, so surely it's most of the way to being a house.",
      },
      {
        type: "p",
        text: "It's an understandable assumption, and usually a wrong one, in the way that costs people money. Whether a barn can become a home without a full planning application depends on a permitted development right called **Class Q**, on whether the land sits where that right doesn't apply, and on whether the building is sound enough to convert rather than rebuild. None of that shows up on the estate agent's particulars, and it decides your budget and timeline before a single brick moves.",
      },
      { type: "h2", text: "Class Q or full planning permission: which route applies?" },
      {
        type: "p",
        text: "There are two ways an agricultural building becomes a home. **Class Q**, part of the General Permitted Development Order, lets you convert a qualifying agricultural building to residential use without a full planning application, subject to **prior approval** on a defined list of issues rather than a wide-open assessment. Failing that, a standard **full planning application** applies whenever the building, the site or the scale of what you want falls outside what Class Q allows. Class Q is the quicker, cheaper route where it applies, and most working farmland around Cranleigh qualifies in principle — the rest of this post is about the conditions that decide it either way.",
      },
      { type: "h2", text: "What the 2024 rule change actually allows now" },
      {
        type: "p",
        text: "Class Q was substantially rewritten by **SI 2024/579**, in force from **21 May 2024**. Anything written about barn conversions before that date — plenty of guides still sitting online included — quotes figures now wrong for an application submitted today.",
      },
      {
        type: "table",
        caption: "Class Q limits, per agricultural unit — GPDO 2015, as amended by SI 2024/579.",
        head: ["Limit", "Before 21 May 2024", "From 21 May 2024"],
        rows: [
          ["Maximum new dwellings", "5", "10"],
          ["Maximum total floorspace converted", "465m²", "1,000m²"],
          ["Maximum floorspace per dwelling", "Up to 465m² (fewer, larger units)", "150m²"],
          ["Rear extension as part of conversion", "Not permitted", "Single-storey, up to 4m"],
        ],
      },
      {
        type: "p",
        text: "Two other changes matter as much as the numbers. The old test — that the building must itself have been used **solely for agriculture** — has gone, replaced by whether it formed part of an **established agricultural unit** on **24 July 2023** (or for 10 years since, if it joined later). And a **former** agricultural building, sold off separately from the working farm years ago, can now qualify too, provided it hasn't had any non-agricultural use since — a genuine gap the old rules left plenty of Cranleigh barns falling through.",
      },
      { type: "h2", text: "The catch: conversion, not rebuild" },
      {
        type: "p",
        text: "Class Q lets you convert a building. It does not let you demolish one and build a new house that looks like it — a distinction that sounds obvious until you're standing in a barn with a sagging ridge line and an engineer telling you the roof needs to come off.",
      },
      {
        type: "p",
        text: "The case planning officers point to is **Hibbitt v Secretary of State for Communities and Local Government [2016] EWHC 2853 (Admin)**, which found that works amounting to a rebuild — rather than genuine conversion of a structurally capable building — fall outside Class Q entirely, whatever the drawings call it. Class Q does allow the building operations reasonably necessary to convert a barn — new windows and doors, new services, some partial works — but the shell has to already be capable of doing the job.",
      },
      {
        type: "quote",
        text: "The first thing I look at with a barn isn't the layout, it's the roof structure and the walls. If the trusses are sound and the walls are standing plumb, Class Q usually has room to work with. If I'm looking at temporary props holding the roof up, that's not a conversion anymore, whatever the estate agent called it — and that changes the whole planning route, not just the build cost.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      {
        type: "p",
        text: "This is also what the Class Q **prior approval** conditions are really testing. The council has 56 days to assess transport and highway impacts, noise, contamination, flood risk, siting and practicality, design and external appearance, and natural light to habitable rooms. That siting-and-practicality test is where a barn needing rebuilding, rather than converting, gets refused.",
      },
      { type: "h2", text: "Where Class Q doesn't apply near Cranleigh" },
      {
        type: "p",
        text: "Class Q does not apply to **listed buildings**, or on what the legislation calls **Article 2(3) land** — conservation areas, National Parks, National Landscapes (the redesignated Areas of Outstanding Natural Beauty) and a handful of similar designations. Convert a barn in any of those without a full application and you haven't used a permitted development right — you've built without permission.",
      },
      {
        type: "p",
        text: "Locally, that mostly means the **Cranleigh Conservation Area** — designated 1973, extended 1985 and 2016 — which covers the High Street and village centre, not the farmland around it. Most parish barns sit outside it, so Class Q applies in principle to most of them. The **Surrey Hills National Landscape** is the other one to check: its boundary currently runs east of the Cranleigh–Shamley Green–Wonersh road, short of the village, but Natural England has had it under review, so confirm with Waverley before you assume rather than after.",
      },
      { type: "h2", text: "What it costs and how long it takes" },
      {
        type: "table",
        caption: "Fees current for applications made before 8 December 2026, when most planning fees rise again.",
        head: ["Route", "Application fee", "Typical determination"],
        rows: [
          ["Class Q — no building operations", "£249 (£310 from 8 Dec 2026)", "56 days"],
          ["Class Q — with building operations", "£536 (£667 from 8 Dec 2026)", "56 days"],
          ["Full planning application", "£610 per dwelling (from 1 Apr 2026)", "8 weeks (typical minor application)"],
        ],
      },
      {
        type: "p",
        text: "The build cost is the bigger number, and it isn't on our standard rate card because a barn conversion isn't quite like anything else we price — a complete, insulated, serviced dwelling built inside a shell never meant to keep anyone warm, with new drainage, electrics and water run from scratch. Our **new-build rate of around £2,700 per m²**, the same figure on our [pricing page](/pricing), is the closer comparison than an extension rate; where the barn is of traditional or listed construction, our **heritage rate of £3,400–£4,200 per m²** is the more realistic guide once repair and matching materials are priced in. Get a site-specific quote once the survey is done — structure condition moves this more than anything else.",
      },
      {
        type: "callout",
        title: "The saving",
        text: "A Class Q application refused because the barn sits in the conservation area, is listed, or needs rebuilding rather than converting doesn't just cost the fee back — it costs the 56 days the council held it, plus whatever you'd already spent on drawings and a survey aimed at the wrong route. Checking the barn's designation status and getting a structural opinion first typically avoids **two to three months** of restarting from scratch under full planning.",
      },
      { type: "h2", text: "If Class Q doesn't fit: the full planning route" },
      {
        type: "p",
        text: "If your barn is listed, sits on Article 2(3) land, needs rebuilding, or you want more than the 150m²-per-dwelling cap allows, the route is a full application rather than prior approval — not a dead end, just a different test.",
      },
      {
        type: "p",
        text: "Following the NPPF's restructure into named, numbered policies in August 2026, the relevant provision is **Policy HO11** — what earlier versions numbered paragraph 84, before that 79 and 55 — supporting reuse of a redundant or disused building in the countryside where it enhances its immediate setting, including long-term reuse of an underused listed building. Locally, **Waverley's Local Plan Part 2, Policy DM15** sets the general test for rural development — avoiding isolation from services, respecting the countryside's character, protecting the best agricultural land — assessed alongside HO11.",
      },
      {
        type: "ul",
        items: [
          "A **heritage or design and access statement**, especially for a traditional or listed barn — where the case for reuse under Policy HO11 is actually made.",
          "A **structural survey** showing what's kept and repaired, not replaced — the evidence a rebuild objection would otherwise succeed on.",
          "A **bat survey**, timed to the season. Barns are prime roosting sites, and getting the timing wrong is a common way a conversion loses months, not weeks — see [bat surveys: why timing can cost you a year](/blog/bat-surveys-timing-cranleigh).",
          "A **drainage strategy**. Cranleigh sits on Weald Clay, a barn's remote setting rarely guarantees a mains connection, and foul and surface water need deciding at design stage — see [building on the Weald Clay around Cranleigh](/blog/building-on-weald-clay-cranleigh-footings).",
        ],
      },
      {
        type: "p",
        text: "Whichever route ends up applying, the questions worth answering before you buy the barn — or pay an architect to draw it — come down to the same handful: whether it was part of an established agricultural unit on 24 July 2023 (or for 10 years since); whether it's listed or sits on Article 2(3) land; whether the structure is sound enough to convert in an engineer's opinion; and which route your engineer and architect expect to run with, in writing, before either is paid for anything beyond that first survey.",
      },
      {
        type: "p",
        text: "A barn is one of the more rewarding conversions we take on — the scale and timber structure give a kind of room a new-build extension can't, and Cranleigh's farmland has no shortage of candidates. Whether that becomes a straightforward Class Q conversion or a drawn-out full application is almost entirely settled before the first survey is booked, which is why it's worth a structural and planning opinion from **builders in Cranleigh** who do this route regularly, rather than treating a barn like any other renovation.",
      },
    ],
    faqs: [
      {
        question: "Do I need planning permission to convert a barn near Cranleigh?",
        answer:
          "Not necessarily a full planning application — most working barns can be converted using Class Q permitted development rights, subject to a prior approval application rather than a full one. You will need full planning permission instead if the barn is listed, sits in the Cranleigh Conservation Area or on other protected land, needs substantial rebuilding rather than conversion, or exceeds the Class Q size caps.",
      },
      {
        question: "What is Class Q permitted development?",
        answer:
          "Class Q is a national permitted development right that lets a qualifying agricultural building change to residential use without a full planning application. Since it was amended on 21 May 2024, it allows up to 10 dwellings and 1,000m² of converted floorspace per agricultural unit, capped at 150m² per dwelling, subject to prior approval from the council on issues including highways, noise, flood risk, siting, design and natural light.",
      },
      {
        question: "Can I convert a barn under Class Q if it's in a conservation area?",
        answer:
          "No. Class Q does not apply on what the legislation calls Article 2(3) land, which includes conservation areas, National Parks and National Landscapes (the former Areas of Outstanding Natural Beauty). In Cranleigh that mainly means the conservation area around the High Street and village centre; most farmland further out sits outside it, but the boundary should be checked against the specific site.",
      },
      {
        question: "How long does a Class Q prior approval application take?",
        answer:
          "The council has 56 days to determine a valid Class Q prior approval application, compared with around 8 weeks for a typical full planning application for a minor development. If the council misses the 56-day deadline on a proposal that genuinely qualifies as permitted development, consent is deemed to have been granted.",
      },
      {
        question: "What happens if my barn isn't structurally sound enough to convert?",
        answer:
          "Class Q only permits conversion of an existing, structurally capable building, not a rebuild. Following the High Court's decision in Hibbitt v Secretary of State [2016], works amounting to substantial reconstruction fall outside the right entirely, and the application would need to proceed as a full planning application instead, assessed on its own merits rather than as permitted development.",
      },
      {
        question: "Does a barn conversion need a bat survey?",
        answer:
          "Very often, yes. Barns are one of the most common bat roosting sites, and an ecologist normally needs to assess the building before works can proceed, with some surveys only possible in the warmer months. Getting this timed into the programme early is one of the most effective ways to avoid losing a season, as covered in our post on bat survey timing.",
      },
    ],
    art: BLOG_ART["barn-conversions-cranleigh-planning-route"],
  },
  {
    slug: "building-on-weald-clay-cranleigh-footings",
    title: "Building on the Weald Clay around Cranleigh: what it means for your footings",
    category: "Foundations",
    date: "2026-09-21",
    seoTitle: "Building on Weald Clay in Cranleigh: Footings Explained",
    metaDescription:
      "Cranleigh sits on shrinkable Weald Clay. What that means for foundation depth, drainage and the joint between old and new footings — and what changes the price.",
    excerpt:
      "The clay under Cranleigh decides more than your foundation depth — it decides whether a soakaway will work, how your new footings meet the old ones, and how many wet days the digger loses.",
    imageAlt:
      "Illustration of a garden cutaway on Weald Clay showing cracked dry clay under a sunny sky on one side and swollen, wet clay under a rain cloud on the other, meeting beneath a house drawn with a stepped foundation joining a shallow old footing to a deeper new one",
    related: [
      "trees-and-foundation-depth-cranleigh",
      "structural-calculations-building-control",
      "extending-1930s-semi-cranleigh",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "Cranleigh sits on the **Weald Clay Formation**, classed by the British Geological Survey among the more reactive shrink–swell soils in England — the same shrinkability band as London Clay and Gault Clay.",
          "That matters even with no tree in sight. Dry summers and wet winters move shrinkable clay on their own, which is why **Approved Document A** requires a foundation designed to resist ground movement, not just carry the building's weight.",
          "Extending an older house means joining new, deeper footings to old, shallower ones. Done badly, that joint is where the cracks appear — NHBC guidance calls for a **stepped foundation** or an engineered movement joint, not a straight abutment.",
          "Clay is also why a standard soakaway often fails here. **BRE Digest 365**'s percolation test routinely rules them out on heavy clay, so surface water drainage needs deciding at design stage, not after the first flood.",
          "None of this is expensive to get right when it's investigated before the contract is signed. It gets expensive once it's discovered with the digger already on site.",
        ],
      },
      {
        type: "p",
        text: "Ask ten homeowners in Cranleigh what worried them most about their extension, and foundations rarely make the list — until the digger hits something the drawing didn't allow for, and a two-week groundworks job becomes a six-week one. Weald Clay is usually the reason.",
      },
      {
        type: "p",
        text: "It isn't only about trees, either. Our piece on [the tree in your garden setting your foundation depth](/blog/trees-and-foundation-depth-cranleigh) covers what a mature oak does to a design. This one is about everything else the same clay does — to a garden with no trees near it at all, to the joint where a new extension meets an old cottage, and to the rainwater that has to go somewhere once the roof is on.",
      },
      {
        type: "p",
        text: "None of it is exotic. It is well documented, and if you ask the right questions before you sign, it is entirely priceable rather than something that turns up as a surprise on an invoice.",
      },
      { type: "h2", text: "What Weald Clay does to a garden, with or without a tree in it" },
      {
        type: "p",
        text: "Cranleigh sits largely on the **Weald Clay Formation**, part of the Low Weald. It is a stiff, fissured clay, and the British Geological Survey's shrink–swell mapping places it among the more reactive clays in England — the same broad band as London Clay, Gault Clay and Lias Clay, the formations most associated with subsidence claims nationally.",
      },
      {
        type: "p",
        text: "Shrinkable clay moves on a seasonal cycle whether or not a tree is involved. It loses moisture and shrinks in a dry summer, and takes moisture back up and swells over a wet winter. **NHBC Standards Chapter 4.1** classifies clay by its volume change potential — low, medium or high, judged from its plasticity — and **Chapter 4.2** builds the tree-specific depth guidance on top of that baseline. Weald Clay's baseline is already toward the high end before a single root is added to the picture.",
      },
      {
        type: "p",
        text: "The general-purpose reference for building on shrinkable clay away from trees is **BRE Digest 240 (Low-rise buildings on shrinkable clay soils)**. Read alongside Building Regulations **Approved Document A**, which simply requires a foundation to remain stable and not be impaired by ground movement, the practical answer for most sites here is a minimum foundation depth of around **0.9m** — deeper if a site investigation shows the clay is more reactive than average, and deeper again if a tree adds to it.",
      },
      { type: "h2", text: "Choosing the foundation type: trench fill, raft, or piled and beam" },
      {
        type: "p",
        text: "Depth is one variable. The type of foundation is the other, and on Weald Clay it is not always trench fill dug a bit deeper.",
      },
      {
        type: "table",
        caption: "Indicative only — NHBC Chapters 4.3 and 4.4. Your engineer chooses the type from a site investigation, not from a table.",
        head: ["Foundation type", "Typically used when", "Relative cost"],
        rows: [
          ["Trench fill", "Depth up to roughly 1.2–1.5m, reasonable access for a digger and concrete wagon", "Baseline"],
          ["Deep trench fill", "Depth up to roughly 2.5m — more concrete and spoil, trench support needed for safety", "Meaningfully more than baseline"],
          ["Raft foundation", "Variable or soft ground where a single stiff slab spreads the load evenly", "Similar to deep trench fill, but less excavation"],
          ["Piled and beam", "Beyond about 2.5m, restricted access, or where the ground varies across the footprint", "The most expensive option, plus a specialist piling rig"],
        ],
      },
      {
        type: "p",
        text: "NHBC's own foundation guidance — Chapters 4.3 and 4.4, and its more recent **NF93** paper on foundation solutions — treats raft and piled options as ordinary tools for difficult ground, not last resorts. The point of a proper site investigation is choosing the right one before pricing the job, not partway through it.",
      },
      { type: "h2", text: "The joint nobody thinks about: where new footings meet old" },
      {
        type: "p",
        text: "Most Cranleigh extensions are not built on a clear site. They are built onto a Victorian cottage or a 1930s semi that already has its own foundations, often shallower than anything a modern engineer would specify today.",
      },
      {
        type: "p",
        text: "Left to itself, a new, deeper foundation and an old, shallower one move at different rates on shrinkable clay — more in a dry summer, less in a wet winter — and the mismatch shows up as a crack exactly where the new brickwork meets the old. The standard answer is a **stepped foundation**, typically in 300–500mm steps down to the new depth, or a structural movement joint specified by an engineer where a straight step is not practical.",
      },
      {
        type: "quote",
        text: "The join between old and new footings is where I look first on any extension survey here. Two good foundations, badly joined, still crack. It costs almost nothing to detail that step properly at design stage, and a great deal to underpin a crack that opens two winters after everyone's moved back in.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      {
        type: "p",
        text: "This is also a building control matter, not just good practice — the inspector checking your foundations before they're covered will want to see how the junction has been detailed, and a structural engineer's input here is the same £1,500–£3,000 already covered on our [pricing page](/pricing) for steelwork and foundation design generally, not a separate fee.",
      },
      { type: "h2", text: "Why a soakaway probably won't work on Weald Clay, and what does" },
      {
        type: "p",
        text: "Foundations get the attention; drainage gets forgotten, and clay affects both. A soakaway — a buried chamber that lets rainwater percolate away into the surrounding ground — is the cheapest way to deal with roof and surface water, and it is the first thing a lot of homeowners assume will handle the new extension's guttering.",
      },
      {
        type: "p",
        text: "On heavy clay it usually will not. **BRE Digest 365**, the standard reference for soakaway design, requires a percolation test on site before one is specified, and clay routinely fails it — the guidance treats a soil infiltration rate below roughly 1 × 10⁻⁶ metres per second, typical of heavy clay, as unworkable regardless of how large the soakaway is dug.",
      },
      {
        type: "ul",
        items: [
          "**Test before you design**, not after — a percolation test costs a fraction of a redesigned drainage run and tells you immediately whether a soakaway is viable at all.",
          "**Attenuation, not disposal**, is the usual fallback on clay: a tank that stores water and releases it slowly into the surface water sewer, a ditch, or a watercourse at a controlled rate, rather than trying to lose it into the ground.",
          "**Permeable paving with a storage layer** can do the same job for a driveway or patio, where the ground itself will not accept the water directly.",
          "**Waverley's planning conditions** commonly ask for a drainage strategy on anything beyond a small extension, so this needs deciding at design stage, before an application is submitted — not treated as a groundworks afterthought.",
        ],
      },
      { type: "h2", text: "What clay does to programme and price" },
      {
        type: "p",
        text: "Cost overruns on a Weald Clay job rarely come from one dramatic mistake. They come from several ordinary things stacking up, none of which show on a drawing.",
      },
      {
        type: "table",
        caption: "Typical extras on a Weald Clay groundworks package — actual figures depend on depth, access and the site investigation.",
        head: ["What clay adds", "Why"],
        rows: [
          ["More spoil to cart away", "A deeper or wider trench on clay produces significantly more muck-away than the same footprint on firm sand or chalk"],
          ["Trench support", "Clay trenches below about 1.2m need shoring or battering for safe working, which firmer ground may not"],
          ["Lost working days in wet weather", "Wet clay becomes unworkable and unsafe to stand plant on; a dry-ground job simply does not lose these days"],
          ["A structural engineer's foundation design", "£1,500–£3,000 — not optional on variable clay, and cheaper booked before the quote than added as a variation"],
        ],
      },
      {
        type: "callout",
        title: "The saving",
        text: "The single biggest cost jump on a Weald Clay job is switching foundation type mid-groundworks — trench fill to piled, say, because the trial hole findings did not match the assumption in the quote. Confirming the foundation type and assumed depth in writing before the contract is signed, from a proper site investigation rather than a guess, typically avoids **one to two weeks** remobilising different plant and a specialist contractor once the digger is already on site.",
      },
      { type: "h2", text: "What to ask your builder before you sign" },
      {
        type: "ol",
        items: [
          "**Ask what foundation depth and type the quote assumes**, in writing. This is the one question that makes two quotes for the same drawing genuinely comparable.",
          "**Ask whether a trial hole or site investigation is included**, and if not, get one done before you sign — a few hundred pounds against a project running into tens of thousands.",
          "**Ask how a variation would be priced** if the ground turns out to need a deeper or different foundation than assumed.",
          "**Ask how the junction with the existing house will be detailed** — a stepped foundation or a movement joint should be shown on the drawings, not left for site to sort out.",
          "**Ask what the drainage strategy is**, and whether it depends on a soakaway that has actually been tested rather than assumed.",
        ],
      },
      {
        type: "p",
        text: "Weald Clay is not bad ground. It is ordinary, well-understood ground that happens to move more than most, and it has been built on successfully in Cranleigh for centuries — the timber-framed cottages on the High Street are proof of that. What it is not forgiving of is a foundation, a joint or a drainage run designed on the assumption that it behaves like anywhere else. Getting the site investigation and the engineer's input right at the start is the difference between a quote that holds and one that grows once the trench is open, and it is exactly the kind of local knowledge that is worth using [builders in Cranleigh](/areas/cranleigh) for rather than a firm working from a generic national spec.",
      },
    ],
    faqs: [
      {
        question: "Do I need a soil survey to build an extension in Cranleigh?",
        answer:
          "It is strongly recommended rather than legally required for most domestic extensions, but on Weald Clay it is the best-value investigation you can commission. A trial hole and, where warranted, a soil investigation with plasticity testing gives your structural engineer the evidence to specify the right foundation depth and type, instead of a quote based on assumption.",
      },
      {
        question: "Can I use a soakaway for my extension on Weald Clay?",
        answer:
          "Sometimes, but it needs testing first, not assuming. BRE Digest 365 requires an on-site percolation test before a soakaway is specified, and heavy clay commonly fails it. If your site fails the test, the usual alternative is an attenuation tank that stores rainwater and releases it slowly into a sewer, ditch or watercourse.",
      },
      {
        question: "Why does my new extension need a different foundation depth to my existing house?",
        answer:
          "Older foundations, especially on a Victorian or 1930s house, are often shallower than current guidance requires on shrinkable clay. A new foundation built to today's depth will move at a different rate to the old one, so the junction between them needs a stepped foundation or an engineered movement joint to stop that difference showing as a crack.",
      },
      {
        question: "What is the cheapest foundation type on clay?",
        answer:
          "Trench fill, where the depth and ground conditions allow it — typically up to around 1.2–1.5m with reasonable access. Beyond that, or where the ground is inconsistent across the footprint, a raft or piled-and-beam foundation is often more cost-effective than continuing to deepen a trench, even though the unit cost looks higher on paper.",
      },
      {
        question: "Does clay ground slow down an extension?",
        answer:
          "It can, mainly through trench support requirements below about 1.2m, more spoil to remove than on firmer ground, and lost working days in wet weather when clay becomes unsafe to work or stand plant on. None of this is dramatic on its own, but it is why a groundworks programme on clay needs more contingency than the same job on chalk or sand.",
      },
      {
        question: "Is Weald Clay bad for building on?",
        answer:
          "No — it is ordinary, well-understood ground that Cranleigh's older buildings have stood on for centuries. It simply needs designing for: the right foundation depth and type from a proper site investigation, a detailed junction where new footings meet old ones, and a drainage strategy that does not assume a soakaway will work without testing it first.",
      },
    ],
    art: BLOG_ART["building-on-weald-clay-cranleigh-footings"],
  },
  {
    slug: "retention-snagging-practical-completion",
    title: "Retention, snagging and practical completion: what they actually mean for your build",
    category: "Contracts & payment",
    date: "2026-09-18",
    seoTitle: "Retention, Snagging & Practical Completion Explained",
    metaDescription:
      "Retention, snagging and practical completion decide when your builder gets paid in full and when you can chase them back. How they work, and what's changing.",
    excerpt:
      "Retention, snagging and practical completion aren't legal jargon — they decide whether a sticking door gets fixed for free or turns into an argument over an invoice you've already paid in full.",
    imageAlt:
      "Illustration of a nearly finished house with one scaffold pole already down, connected by a dashed line to an amber strongbox labelled 5% representing retention held back, and a snagging checklist with a tick mark waiting to be signed off before the strongbox opens",
    related: [
      "building-control-completion-certificate",
      "structural-calculations-building-control",
      "kitchen-extensions-cranleigh-layout-budget",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "**Practical completion** isn't defined in law — it's whatever your contract says it is, usually meaning the work is finished enough to use safely, bar minor snags. It starts several clocks at once: half your retention, the defects period, and your right to move back in.",
          "**Retention** is money withheld from what you pay your builder — typically **5%**, often reduced to **2.5%** at practical completion, with the rest released once the defects period ends, usually **6–12 months** later.",
          "A **building control completion certificate** and **practical completion** are two different things — see [what a completion certificate is actually for](/blog/building-control-completion-certificate) — and mixing them up is how people pay the final invoice before the snags are even listed.",
          "Extending your own home makes you a **'residential occupier'** under the **Housing Grants, Construction and Regeneration Act 1996** — so the statutory protections that cover commercial contracts don't automatically cover yours, unless your written contract puts them there itself.",
          "The government has proposed **banning retention outright**, following its Late Payment consultation response published **24 March 2026**. It isn't law yet, but it's worth knowing before you sign a contract that assumes retention always works the way it does today.",
        ],
      },
      {
        type: "p",
        text: "It's rarely the big things that end in an argument. It's a dripping tap discovered on a Friday evening, a door that catches on the frame, a patch of paint the wrong side of matt and gloss — small, and entirely normal on a finishing building job. What turns normal into an argument is a builder who's already been paid in full, a homeowner who assumed the final invoice meant the job was finished, and neither side having agreed in writing what 'finished' was supposed to mean.",
      },
      {
        type: "p",
        text: "That gap is what retention, snagging and practical completion exist to close. None of them are exotic — they're three ordinary pieces of a building contract that, used properly, keep a small percentage of your money as leverage until the small stuff is done, instead of trusting a verbal promise made on the day the skip leaves the drive.",
      },
      {
        type: "p",
        text: "Almost nobody explains any of this to a homeowner before they sign, because most domestic work — a kitchen, a loft, a rear extension — happens on a short quote letter, not a full contract with a surveyor running the payment schedule. That doesn't mean these ideas don't apply to you. It means you have to put them in writing yourself.",
      },
      { type: "h2", text: "What does 'practical completion' actually mean?" },
      {
        type: "p",
        text: "For a phrase used on almost every building contract in the country, practical completion has no statutory definition. It comes from case law and standard forms like those published by the Joint Contracts Tribunal (JCT), and the closest the courts have come to a working test is that the works are complete for practical purposes, with no defect serious enough to stop you using the building for its intended purpose. A genuinely trivial defect — a scuff, a missing screw cap — doesn't hold it up, even though it still needs fixing.",
      },
      {
        type: "p",
        text: "What matters for you is what it triggers: it usually starts the defects (rectification) period running, it's the point half your retention becomes due, it shifts responsibility for insuring the building to you, and it's normally when beneficial use of the space becomes yours. None of that should happen informally, on the day it 'feels' finished — it should happen against a written list, on an agreed date, confirmed in an email both sides can point back to.",
      },
      {
        type: "p",
        text: "Practical completion also isn't the same thing as a building control completion certificate, even though people conflate the two constantly. Practical completion is a milestone in your contract with your builder; a completion certificate is issued separately once building control confirms the work meets the Building Regulations — see [what a completion certificate is actually for](/blog/building-control-completion-certificate). You can reach one weeks before the other, in either order.",
      },
      { type: "h2", text: "What is retention, and how much should be held back?" },
      {
        type: "p",
        text: "Retention is an agreed percentage of what you owe your builder that you don't pay over as the job goes — held back, in writing, until specific conditions are met. On the JCT forms used across the industry, including the **JCT Building Contract for a Homeowner/Occupier**, written specifically for domestic clients, **5%** is standard, sometimes reduced to **3%** on larger or lower-risk jobs. It isn't usually paid out in one go: the common pattern halves it, with 2.5% back at practical completion and the rest held until the defects period ends.",
      },
      {
        type: "table",
        head: ["Stage", "Typical retention", "What releases it"],
        rows: [
          ["During the works", "5% of each stage payment", "Held back from every interim payment as the job proceeds"],
          ["At practical completion", "Reduced to 2.5%", "The other half released once practical completion is agreed in writing"],
          ["End of the defects period", "Remaining 2.5% released in full", "Usually 6–12 months after practical completion, once any snags are confirmed fixed"],
        ],
        caption: "The standard JCT pattern. Put the actual percentages and dates in your own contract — 'reasonable' isn't a figure either side can plan around.",
      },
      { type: "h2", text: "When do you actually get your retention back?" },
      {
        type: "p",
        text: "The trigger for the final release isn't simply a date passing. Most contracts release it on written confirmation that outstanding defects have been made good — the JCT calls this a **Notice of Completion of Making Good Defects** — not automatically once twelve months have ticked over. Without that in writing, 'the end of the defects period' can quietly become 'whenever somebody remembers to chase it'.",
      },
      {
        type: "ul",
        items: [
          "**Agree the length of the defects period before you sign** — commonly 6 to 12 months; put a number in the contract rather than leaving it as 'a reasonable period'.",
          "**Confirm defects are fixed in writing**, ideally with photos, before releasing the final sum — a text saying 'looks fine' isn't the same as a signed list.",
          "**Don't assume a new-build warranty covers this.** NHBC Buildmark runs the builder's own cover for the first two years, then structural insurance to year ten — but it doesn't apply to a standard extension or renovation, so retention is usually your only real leverage here.",
        ],
      },
      { type: "h2", text: "What is a snagging list, and what actually belongs on it?" },
      {
        type: "p",
        text: "A snagging list is the inspection you and your builder do together at practical completion, walking the finished job and noting everything that isn't quite right — things that don't stop you using the space, but that a careful buyer wouldn't accept as finished. A job with no snags at all is rarer than a job with a short, tidy list that gets ticked off within a couple of weeks.",
      },
      {
        type: "ul",
        items: [
          "**Genuinely a snag:** a sticking door, a paint touch-up, a socket faceplate off level, a kitchen drawer that needs adjusting.",
          "**Not a snag — a defect:** a leak, a moving crack, a floor that isn't level — anything affecting how the building performs, not just how it looks, and possibly whether practical completion should be certified at all.",
          "**Get it in writing, dated, and agreed by both sides.** A verbal list is a list that gets shorter every time it's remembered.",
        ],
      },
      { type: "h2", text: "Does the law protect you the way it protects a commercial client?" },
      {
        type: "p",
        text: "Less than most homeowners assume. Part II of the **Housing Grants, Construction and Regeneration Act 1996** — the Construction Act — gives commercial construction contracts a statutory right to staged payments and to refer a dispute to adjudication, a fast, relatively cheap route to a binding decision. Section 106 excludes a contract with a **'residential occupier'**: broadly, someone having work done on the home they live in, or intend to live in.",
      },
      {
        type: "p",
        text: "That exclusion protects homeowners from a commercial-style adjudication process over a modest domestic job — but it also means those statutory protections don't apply to you automatically. The fix is straightforward: write retention, a defects period and a dispute route into your own contract. A recognised domestic form such as the JCT Homeowner Contract already has these built in.",
      },
      { type: "h2", text: "What's changing: the government's plan to end retention" },
      {
        type: "p",
        text: "On **24 March 2026** the government published its response to the 2025 Late Payment consultation, in which the large majority of respondents backed reforming how retention works. Rather than a lighter-touch fix, the government's stated preference is to **ban the deduction and withholding of retention payments** altogether, alongside wider reforms including maximum 60-day payment terms and statutory interest on late payment. The **Small Business Protections (Late Payments) Bill**, announced in the King's Speech on **13 May 2026**, is the vehicle intended to carry this through.",
      },
      {
        type: "p",
        text: "None of this is law yet. For now, retention remains a normal, useful tool on a domestic job — but it's worth asking your builder how they'd structure payment if retention were removed, because a straightforward answer tells you a lot about how comfortable they are with the current system.",
      },
      { type: "h2", text: "How to handle retention and snagging without it turning into a dispute" },
      {
        type: "ol",
        items: [
          "**Put a number and a written trigger in the contract before you sign** — the percentage retained, when it drops to half, and what releases the rest.",
          "**Agree what 'practical completion' means for your specific job**, in writing, rather than relying on the general legal test.",
          "**Do the snagging walk-round together**, room by room, with a written list and photos, on the day you'd otherwise hand over the balance.",
          "**Set a real date for the final release**, tied to defects being fixed and confirmed, not to a vague sense that 'enough time has passed'.",
          "**Keep retention as a genuine holdback**, not cash paid over informally — if the money has already left your account, it isn't retention any more.",
        ],
      },
      {
        type: "quote",
        text: "The clients who never have a retention argument are the ones who ask about it before the contract's signed, not after the last coat of paint's gone on. Agree the number, agree the date, walk the snag list together — it's the difference between a builder popping back to fix a sticking door and a stand-off over an invoice neither of us remembers agreeing to.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      {
        type: "callout",
        title: "The saving",
        text: "On a typical **£48,000** single-storey extension, a 5% retention is **£2,400** — roughly what a modest snagging list costs to put right if it's ever left to the homeowner. Get that figure and a release date written into the contract before you sign, and it stays real leverage until the job is finished, not a promise that quietly evaporates once the builder's van is gone for good.",
      },
      {
        type: "p",
        text: "If your contract doesn't currently say anything about retention, a defects period or what happens at practical completion, that's worth fixing before you sign, whatever size the job. It's a standing part of how [builders in Cranleigh](/areas/cranleigh) structure a contract before a spade goes in the ground — see our [pricing guide](/pricing) for what a typical job costs before that conversation.",
      },
    ],
    faqs: [
      {
        question: "What percentage retention should I withhold from my builder?",
        answer:
          "5% is the industry standard, reflected in JCT contracts including the JCT Homeowner Contract, often reducing to 2.5% once practical completion is reached and the remaining 2.5% held until the defects period ends. There's no legal minimum or maximum for a domestic job — the figure has to be agreed and written into your contract.",
      },
      {
        question: "When should I release the final retention payment?",
        answer:
          "Once any defects found during the snagging walk-round have actually been fixed and confirmed in writing — not simply once a set number of months has passed. Agree the length of the defects period (commonly 6–12 months) in the contract, but link the final payment to the work being done, not the calendar alone.",
      },
      {
        question: "What's the difference between practical completion and a building control completion certificate?",
        answer:
          "Practical completion is a milestone in your contract with your builder, triggering retention release and the defects period. A completion certificate is issued separately by building control once inspections confirm the work meets the Building Regulations. They can happen weeks apart, and having one doesn't mean you automatically have the other.",
      },
      {
        question: "Does the Construction Act protect me if I'm extending my own home?",
        answer:
          "Not automatically. Section 106 of the Housing Grants, Construction and Regeneration Act 1996 excludes contracts with a 'residential occupier' from the Act's statutory payment and adjudication protections. You can still get equivalent protection — it just has to be written into your own contract rather than assumed from the law.",
      },
      {
        question: "Is retention going to be banned in the UK?",
        answer:
          "The government has proposed banning retention in construction contracts, set out in its response to the Late Payment consultation published on 24 March 2026, with the Small Business Protections (Late Payments) Bill announced to carry the reform forward. It isn't law yet, so retention remains a normal part of a domestic building contract for now — but it's worth asking how your builder would structure payment without it.",
      },
      {
        question: "What should go on a snagging list, and what shouldn't?",
        answer:
          "Minor finishing issues belong on a snagging list — a sticking door, a paint touch-up, a wonky socket faceplate. Anything affecting how the building actually performs, such as a leak, a moving crack or an unlevel floor, is a defect rather than a snag, and needs addressing properly rather than just noted for later.",
      },
    ],
    art: BLOG_ART["retention-snagging-practical-completion"],
  },
  {
    slug: "garden-rooms-cranleigh-permitted-development",
    title: "Garden rooms in Cranleigh: permitted development limits, and where they stop",
    category: "Planning & surveys",
    date: "2026-09-16",
    seoTitle: "Garden Rooms In Cranleigh: Permitted Development Limits",
    metaDescription:
      "Most Cranleigh garden rooms don't need planning permission — but height, coverage and conservation area rules can remove that right. Here's where it stops.",
    excerpt:
      "A garden room in Cranleigh is usually permitted development — until it isn't. Here's exactly where the height, coverage and conservation area limits sit, and what pushes a straightforward build into a full planning application.",
    imageAlt:
      "Illustration of a Cranleigh back garden with a garden room reaching a 4-metre height limit beyond a dashed line marking 2 metres from the boundary, a smaller shed capped at 2.5 metres inside that zone, a red crossed-out raised deck in front of the garden room, and an inset diagram showing a hatched no-permitted-development strip down the side of a house in a conservation area",
    related: [
      "cranleigh-conservation-area-consent",
      "cranleigh-buildings-of-local-merit",
      "trees-and-foundation-depth-cranleigh",
      "party-wall-notice-timing",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "A single-storey garden room in Cranleigh usually falls under **permitted development** and needs no planning application, provided it stays within the height, position and coverage limits set out in **Part 1, Class E** of the Town and Country Planning (General Permitted Development) Order 2015.",
          "Height is capped at **2.5m** for anything within 2m of a boundary, rising to **4m** with a dual-pitched roof (**3m** for any other roof shape) further back — eaves height is capped at 2.5m wherever it sits.",
          "Together with every other outbuilding and extension already in the garden, a new garden room can cover **no more than half** the plot around the original house — and that limit is cumulative, not per building.",
          "Inside the **Cranleigh Conservation Area**, permitted development is withdrawn for any outbuilding placed between the side wall of the house and the boundary — a rule a Cranleigh-wide guide would miss, and a nationally listed house loses these rights altogether.",
          "A raised deck, veranda or balcony over **0.3m** high removes permitted development from the whole structure, not just the platform, and sleeping accommodation triggers full **Building Regulations** regardless of the room's size.",
        ],
      },
      {
        type: "p",
        text: "The call usually comes after the garden room is already up. Someone has ordered a smart insulated cabin for the end of the garden, had it built over a long weekend, and only then discovered — from a neighbour, or a letter from the council's enforcement team — that it sits too close to the boundary, or that the raised deck out front took the whole structure outside permitted development. Taking it down, or applying for retrospective permission with a council now primed to look closely, costs far more than checking the rules would have.",
      },
      {
        type: "p",
        text: "Most garden rooms in Cranleigh genuinely don't need planning permission — the rights that cover them are generous, and for a garden office, gym or studio behind an ordinary house they usually do the job alone. But \"usually\" is doing a lot of work in that sentence, and the exceptions are specific enough that working from a garden-room company's brochure rather than the actual rules can produce something that isn't permitted at all.",
      },
      {
        type: "p",
        text: "That matters more here than in most towns, because Cranleigh has a genuinely local trap built into it: a conservation area rule that removes permitted development for an outbuilding at the side of the house, which a guide written for the whole country will not mention, because most gardens aren't in one.",
      },
      { type: "h2", text: "How tall can a garden room be without planning permission?" },
      {
        type: "p",
        text: "The rules sit in **Part 1, Class E** of the Town and Country Planning (General Permitted Development) Order 2015 — the schedule covering buildings and enclosures within a house's curtilage. For height, the position relative to the boundary decides it:",
      },
      {
        type: "ul",
        items: [
          "**Within 2m of any boundary** of the garden: maximum overall height **2.5m**, whatever the roof shape.",
          "**More than 2m from a boundary, dual-pitched roof**: maximum overall height **4m**.",
          "**More than 2m from a boundary, any other roof** — flat or mono-pitch, which is what most modern garden rooms actually have: maximum overall height **3m**.",
          "**Eaves height**: capped at **2.5m** wherever the building sits, regardless of the overall height allowed there.",
        ],
      },
      {
        type: "p",
        text: "Single storey is a condition in its own right, too. A garden room with a mezzanine sleeping platform or usable roof space isn't single storey, whatever the eaves height, and loses permitted development on that basis alone.",
      },
      { type: "h2", text: "The rule that catches Cranleigh's Conservation Area" },
      {
        type: "p",
        text: "This is the one a generic garden room guide won't tell you, and it's squarely a Cranleigh issue. On what the Order calls **\"Article 2(3) land\"** — a conservation area, among other designations — permitted development for a garden room is withdrawn if any part of it would sit between a side wall of the house and the boundary of the garden. It has to go behind the house, not down the side, once the house is inside one.",
      },
      {
        type: "p",
        text: "Cranleigh's designated conservation area centres on the **High Street**, first designated in **October 1973** and extended in **July 1985** and **July 2016**. A house here with a return frontage or a side garden that would otherwise be the obvious spot for a garden office needs to check this before ordering anything — see [building inside the Cranleigh Conservation Area](/blog/cranleigh-conservation-area-consent) for what else the designation covers. Outside the conservation area boundary, this particular restriction doesn't apply, and the standard Class E limits above are what govern the build.",
      },
      {
        type: "p",
        text: "Listed buildings lose these rights altogether: permitted development for outbuildings doesn't apply within the curtilage of a listed building at all, so a garden room next to one of the parish's roughly **81 listed buildings** needs a full planning application whatever its size or position. Being on the parish's other list — the **174 [Buildings of Local Merit](/blog/cranleigh-buildings-of-local-merit)** — doesn't remove permitted development the same way; it's a material consideration Waverley weighs on an application, not a statutory trigger for needing one.",
      },
      { type: "h2", text: "How much of the garden can you build on?" },
      {
        type: "p",
        text: "Class E also limits total coverage, not just the one new building. Every outbuilding and extension added since the house was originally built — sheds, garages, conservatories, an earlier garden room — is added together, and the total can't exceed **50% of the land around the \"original house\"**, meaning the house as it stood when first built, or as it stood on 1 July 1948, whichever is later. A garden room that would tip a plot over that limit needs a planning application even if it meets every height and position rule on its own.",
      },
      {
        type: "p",
        text: "It's worth measuring this properly rather than guessing. We've had a garden room design shrunk by a third at the quote stage once an existing shed, an old lean-to and a previous side extension were all added into the same 50% figure — a five-minute calculation that avoided a wasted planning application.",
      },
      { type: "h2", text: "Decking, verandas, and where permitted development stops completely" },
      {
        type: "p",
        text: "A few features remove permitted development from a garden room outright, rather than just reducing what's allowed:",
      },
      {
        type: "ul",
        items: [
          "**A veranda, balcony, or raised platform over 0.3m high.** A garden room that looks identical from the outside but sits on a deck 400mm off the ground needs full planning permission — the platform, not the building, is what triggers it.",
          "**Position forward of the principal elevation.** Nothing under Class E can go in front of the wall that faces the road, whatever the size.",
          "**Sleeping accommodation.** A garden room used, even occasionally, for someone to sleep in changes both the Building Regulations position (below) and potentially the planning use — a different question from the permitted development limits in this post, and worth raising with a planning consultant before you build to that brief.",
        ],
      },
      {
        type: "p",
        text: "None of these is really a grey area once you know to look for it — the specific list of things that turn \"we built a garden room\" into \"we built an unauthorised structure\", and each one is avoidable by asking before the concrete is poured, not after.",
      },
      { type: "h2", text: "Building Regulations: the approval permitted development doesn't cover" },
      {
        type: "p",
        text: "Permitted development is a planning question. Building Regulations are a separate, safety-focused approval, and a garden room can be permitted development and still need Building Regulations sign-off, or the other way round.",
      },
      {
        type: "ul",
        items: [
          "**Under 15m² floor area, no sleeping accommodation:** generally exempt from Building Regulations, provided it's a detached, single-storey structure.",
          "**15m²–30m², no sleeping accommodation:** also generally exempt, unless it sits **less than 1m from a boundary** and isn't built substantially from non-combustible materials.",
          "**Over 30m², or containing sleeping accommodation at any size:** Building Regulations approval applies.",
          "**Electrics are a separate question regardless of floor area.** Any new circuit run out to a garden building is covered by **Part P**, and — as with wiring inside the house — is notifiable work, either through a registered electrician's competent person scheme or a direct building control notification.",
        ],
      },
      {
        type: "p",
        text: "A base close to a boundary is also where the **Party Wall etc. Act 1996** can quietly become relevant: excavating a new foundation within 3m of a neighbour's building can require notice before you dig, or within 6m if the dig cuts below a line taken at 45 degrees down from their foundations — see [the party wall notice that sets your start date](/blog/party-wall-notice-timing) for the timing. On Cranleigh's Weald Clay, a garden room base near a mature tree is exactly the kind of shallow-foundation decision that deserves the same thinking as a house extension — see [the tree in your garden sets your foundation depth](/blog/trees-and-foundation-depth-cranleigh).",
      },
      { type: "h2", text: "What a garden room costs in Cranleigh" },
      {
        type: "table",
        head: ["Item", "Typical guide cost", "Notes"],
        rows: [
          ["Insulated garden room, 12–15m², basic fit-out", "£18,000 – £28,000", "Foundations, insulation, double glazing and a single electrical circuit"],
          ["Fully finished garden office, powered and heated", "£25,000 – £38,000", "Includes plastering, full electrics, heating and VAT"],
          ["Foundation upgrade near a mature tree or on soft ground", "add roughly £1,500 – £4,000", "Screw piles or a deeper pad on Cranleigh's Weald Clay, confirmed on site"],
          ["Certificate of Lawful Development (Proposed), if needed", "£274", "Half the £548 householder planning fee from 1 April 2026 — see \"the saving\" below"],
        ],
        caption: "National guide figures, 2026. Get a fixed quote once the design, services and foundation type are confirmed — these are a starting point for budgeting, not a substitute for a site visit.",
      },
      {
        type: "quote",
        text: "Nine times out of ten a garden room in Cranleigh is a straightforward job — check the boundary distances, check what else is already in the garden, and get on with it. The one we get called back for is always the same shape: someone added a deck afterwards to level up sloping ground, and it's the deck that needed planning permission all along, not the room sitting on it.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      {
        type: "callout",
        title: "The saving",
        text: "If there's any doubt — a side-garden position, a sloping plot needing a plinth, a size close to the 50% coverage limit — a **Certificate of Lawful Development (Proposed)** settles it in writing from Waverley Borough Council before you build, for half the standard householder fee: about **£274** from 1 April 2026 against the full **£548**. That's a fixed, modest cost against a retrospective planning application submitted after the room is finished, when refusal means altering or removing a structure you've already paid to build.",
      },
      {
        type: "p",
        text: "If you're planning a garden room on a Cranleigh plot with a slope, a mature tree nearby, or a house inside the conservation area, get the boundary and coverage measurements checked before you commit to a design — a five-minute calculation is considerably cheaper than a retrospective application. It's exactly the sort of detail that's second nature to [builders in Cranleigh](/areas/cranleigh) working Waverley's planning rules on this ground every week, rather than a generic national guide.",
      },
    ],
    faqs: [
      {
        question: "Do I need planning permission for a garden room in Cranleigh?",
        answer:
          "Usually not, provided it stays single storey, within the height limits for its distance from the boundary, doesn't cover more than half the garden together with other outbuildings, and isn't fitted with a raised deck, veranda or balcony. If the house is inside the Cranleigh Conservation Area, an extra rule also rules out putting it down the side of the house rather than behind it.",
      },
      {
        question: "How tall can a garden room be without planning permission?",
        answer:
          "Up to 2.5m if any part is within 2m of a boundary. Further back, up to 4m with a dual-pitched roof or 3m with any other roof shape, including the shallow mono-pitch roof most modern garden rooms use. Eaves height is capped at 2.5m wherever the building sits.",
      },
      {
        question: "Can I put a garden room at the side of my house in Cranleigh?",
        answer:
          "Only if the house is outside the Cranleigh Conservation Area. Inside it, the General Permitted Development Order withdraws permitted development for any outbuilding placed between a side wall of the house and the boundary, so it has to go behind the house instead.",
      },
      {
        question: "Does a garden room need Building Regulations approval?",
        answer:
          "Not usually if it's under 15m² with no sleeping accommodation. Between 15m² and 30m² it's still generally exempt unless it's within 1m of a boundary and not built from substantially non-combustible materials. Above 30m², or with any sleeping accommodation, Building Regulations apply regardless of size, and the electrics are notifiable under Part P either way.",
      },
      {
        question: "What happens if my garden room turns out not to be permitted development?",
        answer:
          "You need a retrospective planning application, decided against the same policies as if you'd applied first, with the difference that the structure is already built and visible — and if it's refused, you may have to alter or remove it. Checking first, or applying for a Certificate of Lawful Development before you build, avoids that risk for a modest fixed fee.",
      },
      {
        question: "Does a raised deck under my garden room affect the planning rules?",
        answer:
          "Yes, significantly. A veranda, balcony or platform raised more than 0.3m above ground level removes permitted development from the whole structure, not just the deck, even if the garden room itself would otherwise comply with every other limit.",
      },
    ],
    art: BLOG_ART["garden-rooms-cranleigh-permitted-development"],
  },
  {
    slug: "cranleigh-victorian-cottage-rewire-replumb",
    title: "Cranleigh's Victorian cottages: what a sympathetic rewire and replumb involves",
    category: "Electrics & plumbing",
    date: "2026-09-14",
    seoTitle: "Rewiring & Replumbing A Victorian Cottage In Cranleigh",
    metaDescription:
      "Old wiring and lead or galvanised pipework are common in Cranleigh's Victorian cottages. What's notifiable, what a sympathetic route costs, and what to avoid.",
    excerpt:
      "Round-pin sockets, a fuse box instead of a consumer unit, and pipework older than the phone line — a Victorian cottage rewire and replumb is rarely optional. Here's what to expect, and how to do it without chasing out the lath and plaster.",
    imageAlt:
      "Illustration of a Victorian brick cottage elevation beside a wall cutaway showing an amber cable routed through a floor void to a socket, and a red crossed-out line marking a chase avoided straight through the solid brick wall, with an old lead pipe stub beside new pipework",
    related: [
      "wet-rooms-cranleigh-cottage",
      "cranleigh-buildings-of-local-merit",
      "bathroom-fitting-cost-cranleigh",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "Round-pin sockets, a fuse box instead of a consumer unit, and rubber- or fabric-insulated cable are the three signs a Victorian cottage's wiring predates modern safety standards — get an **EICR** before agreeing any scope of work.",
          "A full or partial rewire, a new consumer unit and any electrical work in a kitchen or bathroom are all **notifiable** under **Part P** of the Building Regulations, certified either through a registered electrician's **competent person scheme** or via building control directly.",
          "Lead pipe wasn't banned in new plumbing until **1969**, so a cottage of this age can still have original lead supply pipe; galvanised steel pipe is nearly as old and corrodes from the inside, showing up as discoloured water and falling pressure long before it fails outright.",
          "\"Sympathetic\" means routing cable and pipework through floor and ceiling voids wherever you can, not chasing straight through solid Victorian brick and lath-and-plaster — Historic England's own guidance treats chasing as a last resort, not a starting point.",
          "Most Victorian cottages in Cranleigh are not nationally listed, so the rewire and replumb themselves rarely need consent — the requirement is compliance with **Part P** and the **Water Regulations**, not planning permission.",
        ],
      },
      {
        type: "p",
        text: "The first sign is never the wiring itself. It's the smell of warm plastic behind a socket, or a shower that runs fine until someone flushes a toilet upstairs and the pressure drops to nothing. By the time a cottage owner calls us about rewiring or replumbing, the house has usually been quietly telling them something for a while.",
      },
      {
        type: "p",
        text: "Cranleigh has plenty of Victorian cottages and terraces — solid brick, built in the second half of the 19th century, without the cavity wall a house built even fifty years later would have as standard. Most have been touched since: a socket added here, a section rewired in the 1990s and left to meet the rest of the house somewhere in the middle. That patchwork is normal, and it's exactly what an EICR and a plumbing survey are for — finding out what's actually behind the plaster before anyone prices the job.",
      },
      { type: "h2", text: "The signs a Victorian cottage's wiring or plumbing needs attention" },
      {
        type: "p",
        text: "None of these mean the house is dangerous today. They mean it was wired or plumbed to a standard that has since moved on, and that a professional survey — not a guess — should decide what to do about it.",
      },
      {
        type: "ul",
        items: [
          "**Round-pin sockets**, or a mix of round-pin and modern flat-pin, which usually means a rewire was started at some point and never finished",
          "A **fuse box** with rewireable fuse wire rather than a consumer unit with RCD or RCBO protection, which won't trip fast enough to prevent a shock in the way a modern circuit breaker will",
          "**Rubber- or fabric-insulated cable**, which perishes and cracks with age — often visible in the loft or under a lifted floorboard, long before it causes a fault anyone notices day to day",
          "**Low pressure or discoloured water** at particular taps, a common sign of galvanised steel pipe corroding and narrowing from the inside",
          "**No stopcock or isolation valves** near individual fittings, so a single dripping tap means shutting off the whole house to fix it",
        ],
      },
      {
        type: "p",
        text: "An **Electrical Installation Condition Report (EICR)** is the starting point for the wiring side — a qualified electrician tests the existing circuits and rates any faults found by how urgently they need attention. Electrical Safety First, the industry safety body, recommends an EICR at least every 10 years for an owner-occupied home, sooner for anything older or where the history is unclear. It typically costs in the region of **£120–£300** for a house this size, against a rewire that, done blind, can mean redoing work that didn't need touching.",
      },
      { type: "h2", text: "Is rewiring or replumbing a Victorian cottage notifiable work?" },
      {
        type: "p",
        text: "Yes, for most of what a Victorian cottage typically needs. **Part P of the Building Regulations** covers electrical safety in dwellings in England, and it splits work into notifiable and non-notifiable. A full or partial rewire is notifiable. So is a **new consumer unit** — added to the notifiable list in 2016 — and so is any electrical work in a kitchen, bathroom or other \"special location\", regardless of how minor it looks.",
      },
      {
        type: "p",
        text: "Notifiable work is signed off one of two ways: a registered electrician working under a **competent person scheme** — NICEIC and NAPIT are the two most widely used — self-certifies the job and notifies building control on your behalf, or you notify building control directly and pay for their own inspection. Either route should end with an **Electrical Installation Certificate**, not just an invoice. The technical standard the work is judged against is **BS 7671**, the IET Wiring Regulations, currently the 18th Edition — Part P sets the legal requirement to be safe, BS 7671 is how an electrician shows that it is.",
      },
      {
        type: "p",
        text: "Plumbing has its own version of the same split. Any significant change to the pipework in a house has to comply with the **Water Supply (Water Fittings) Regulations 1999**, which can require notifying your water supplier before certain work goes ahead — and fitting an **unvented hot water cylinder** is separately notifiable under **Building Regulations Approved Document G3**, either by an installer holding a G3 qualification or through building control directly. A full replumb touching both usually needs both boxes ticked, not just one.",
      },
      { type: "h2", text: "Working with the cottage's fabric, not against it" },
      {
        type: "p",
        text: "This is where a Victorian cottage differs from a modern house, and where \"sympathetic\" earns its place in the brief rather than being a nice word for expensive. A cavity wall gives a modern electrician somewhere to hide a cable without weakening anything. Solid Victorian brick has no cavity — a chase cut into it removes structural material from the only leaf of wall there is, and it does the same to lime or lath-and-plaster on the inner face, which is far easier to crack than modern plasterboard and far harder to match once it's gone.",
      },
      {
        type: "p",
        text: "Historic England's own guidance on installing new services is blunt about the order of preference: avoid chasing where you can, route cable and pipe through the voids under floors and above ceilings instead, share a single route between several services rather than cutting several separate chases, and use wireless controls for lighting or heating where a hard-wired connection isn't essential. Chasing is the last resort in that list, not the first move.",
      },
      {
        type: "quote",
        text: "You never fully know what's in a Victorian wall until you're in it. We've found candle wax on old cable, and a length of copper pipe soldered straight onto a lead stub that was only ever meant to be temporary forty years ago. The plan has to survive contact with what's actually behind the plaster, not just what the drawing assumed was there — which is exactly why we route through the floor void first and only chase where there genuinely isn't another way.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      {
        type: "callout",
        title: "The saving",
        text: "Routing new cable and pipe runs through the floor and ceiling voids that already exist, rather than chasing straight through solid Victorian brick, is what keeps a rewire from turning into a full replaster. Making good a wall after chasing it typically adds **£800–£2,500** in replastering on top of the electrical work itself — a cost a sympathetic route avoids almost entirely, while leaving the original lath-and-plaster intact instead of losing it.",
      },
      { type: "h2", text: "What it costs" },
      {
        type: "table",
        head: ["Item", "Typical guide cost", "Notes"],
        rows: [
          ["EICR (electrical survey)", "£120 – £300", "Do this before agreeing any scope — you're pricing what's actually there"],
          ["Full rewire, 3-bed cottage", "£4,500 – £8,500", "A Victorian cottage with solid walls and awkward access often sits toward the top of this range"],
          ["Full replumb, 3-bed cottage", "£4,500 – £9,500", "Wide range because it depends how much of the run is lead or galvanised versus already updated"],
          ["Internal lead pipe replacement", "£200 – £600 per run", "External supply pipe under a driveway or path costs more, and separately, to reinstate"],
        ],
        caption: "National guide figures, 2026. Get a fixed quote once a survey has actually seen the house — these are a starting point for budgeting, not a substitute for one.",
      },
      { type: "h2", text: "Do you need permission for any of this in Cranleigh?" },
      {
        type: "p",
        text: "Usually not, and that's a genuine difference from a job like a [wet room in a listed Cranleigh cottage](/blog/wet-rooms-cranleigh-cottage), where cutting into the floor structure itself can trigger listed building consent. The Cranleigh Neighbourhood Plan records **81 nationally listed buildings** in the parish, predominantly the older 15th–17th century timber-framed stock — most of Cranleigh's Victorian cottages and terraces are not on that list, so rewiring and replumbing them is a Part P and Water Regulations matter, not a planning one.",
      },
      {
        type: "p",
        text: "Being on the parish's other list — the **174 [Buildings of Local Merit](/blog/cranleigh-buildings-of-local-merit)** Waverley also tracks — doesn't change that either. It's a material consideration the council weighs when it assesses a planning application, not a statutory designation, so it has no bearing on internal work like a rewire. Where permission can come into it is if something changes on the outside of a house that also sits inside the **Cranleigh Conservation Area** — a new boiler flue, an extractor vent, a satellite dish — because that's an external, visible change, not because of the cable or the pipe behind it. See [building inside the Cranleigh Conservation Area](/blog/cranleigh-conservation-area-consent) for what does and doesn't need consent there.",
      },
      { type: "h2", text: "Getting the sequence right" },
      {
        type: "ol",
        items: [
          "**Book an EICR and a plumbing survey** before agreeing any scope of work — you're pricing what's actually behind the plaster, not a guess from the outside.",
          "**Agree cable and pipe routes through the floor and ceiling voids first**, and treat chasing into brick or lath-and-plaster as the fallback, not the default.",
          "**Use a registered electrician on a competent person scheme** so the rewire self-certifies under Part P, rather than needing a separate building control notification and inspection.",
          "**Get first fix — cable, pipe and containment — inspected and signed off before any replastering or redecoration**, so nothing has to be opened up again once the walls are finished.",
          "**Keep the Electrical Installation Certificate, the EICR and any Water Regulations notification together** — a mortgage lender or a buyer's solicitor will ask for them when the house is eventually sold.",
        ],
      },
      {
        type: "p",
        text: "If your cottage still has round-pin sockets, a fuse box, or a stopcock nobody can find, that's worth a proper survey before you plan anything else around it — getting the sequence right is exactly the kind of detail that separates a sympathetic rewire from a re-plastered mess afterwards, and it's the sort of thing worth raising early with [builders in Cranleigh](/areas/cranleigh) who work on this housing stock every month, not once a year.",
      },
    ],
    faqs: [
      {
        question: "Do I need permission to rewire a Victorian cottage in Cranleigh?",
        answer:
          "In most cases, no. Nationally listed buildings need listed building consent for work affecting historic fabric, but most of Cranleigh's Victorian cottages are unlisted, so rewiring and replumbing only need to comply with Part P and the Water Regulations, not planning consent. An externally visible change inside the Cranleigh Conservation Area, such as a new boiler flue, can need consent even though the wiring or pipework itself does not.",
      },
      {
        question: "How much does it cost to rewire a Victorian cottage?",
        answer:
          "National guide figures put a full rewire of a typical three-bedroom house at roughly £4,500–£8,500, with a Victorian cottage often toward the top of that range because of solid walls and more awkward access than a modern house. Get a fixed quote once an electrician has actually surveyed the property.",
      },
      {
        question: "Is a full replumb notifiable work?",
        answer:
          "Not automatically as a whole, but specific parts of it are. An unvented hot water cylinder needs Building Regulations Part G3 sign-off, and significant changes to pipework must comply with the Water Supply (Water Fittings) Regulations 1999, which can mean notifying your water supplier before work starts.",
      },
      {
        question: "How do I know if my cottage still has lead pipes?",
        answer:
          "Lead wasn't banned in new plumbing until 1969, so any house built or last replumbed before then can still have some. It's dull grey, scratches easily to reveal a shiny surface underneath, and gives a dull sound rather than copper's ring when tapped — but the only reliable way to know for certain is to have it checked during a plumbing survey.",
      },
      {
        question: "What is BS 7671, and how is it different from Part P?",
        answer:
          "Part P is the Building Regulation requiring electrical work in a home to be safe. BS 7671, the IET Wiring Regulations, currently the 18th Edition, is the technical standard a registered electrician works to in order to show that it is. Compliance with BS 7671 is what satisfies Part P, not a separate requirement on top of it.",
      },
      {
        question: "Does being on Waverley's Buildings of Local Merit list mean I need consent to rewire?",
        answer:
          "No. The Buildings of Local Merit list is a material planning consideration Waverley weighs when assessing proposals, not a statutory designation like listing. Internal work such as rewiring or replumbing doesn't need consent because a building appears on it.",
      },
    ],
    art: BLOG_ART["cranleigh-victorian-cottage-rewire-replumb"],
  },
  {
    slug: "structural-calculations-building-control",
    title: "Structural calculations: what a building control officer looks for",
    category: "Building control",
    date: "2026-09-11",
    seoTitle: "Structural Calculations | What Building Control Checks",
    metaDescription:
      "Removing a wall or adding a steel beam needs structural calculations building control can check. What they cost, who checks them, and what skipping costs.",
    excerpt:
      "A structural calculation is the only proof, in writing, that a beam or a floor will actually carry what's built on it — and getting it agreed before the steel is ordered is far cheaper than defending it afterwards.",
    imageAlt:
      "Illustration of a structural engineer's calculation sheet showing a beam diagram and load arrows on the left, linked by a dashed arrow to a house wall cutaway on the right showing a steel beam resting on two padstones under a load",
    related: [
      "building-control-completion-certificate",
      "kitchen-extensions-cranleigh-layout-budget",
      "loft-conversions-cranleigh-roof-types",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "Any work that touches a load-bearing wall, a roof structure or the foundations — a knocked-through wall, a loft conversion, a two-storey extension — needs **structural calculations** before building control will sign it off, not after.",
          "Calculations are normally produced by a structural or civil engineer, working to the **Eurocodes** — the British Standards suite for structural design. Budget **£1,500–£3,000**, whatever the size of the opening.",
          "You can apply through **Full Plans** (checked and approved before you start), a **Building Notice** (start almost immediately, reviewed as the job proceeds) or a **Registered Building Control Approver** — the private-sector route since **6 April 2024**, replacing the old \"Approved Inspector\" scheme.",
          "A building control officer does not redesign your beam. They check what's proposed — and later what's built — against the calculation: the span, the load, the bearing, the deflection and the restraint straps.",
          "Start structural work before the calculation is approved and the risk is real: opening up finished plasterboard for an inspection, a redesigned beam, and weeks added to getting a **completion certificate**.",
        ],
      },
      {
        type: "p",
        text: "The phone call we dread is the one after the work is already covered up. Someone has taken out a wall, put a beam in sized by \"what the builder down the road used last time,\" boarded over it, and then rung building control to book the final inspection — only to be told the inspector needs to see the beam and its padstones before anything goes over them, and now has to look at calculations for something that is already hidden behind plasterboard.",
      },
      {
        type: "p",
        text: "Structural calculations are not a formality building control invents to justify a fee. They are the only evidence, in writing, that a beam, a foundation or a roof will carry what is about to be built on it — and getting that evidence agreed before work starts, rather than defended afterwards, is the difference between a routine inspection and a very expensive afternoon with a crowbar.",
      },
      { type: "h2", text: "What actually needs a structural calculation" },
      {
        type: "p",
        text: "**Part A of the Building Regulations 2010 — Structure** — requires a building to be built so the loads it carries are sustained and transmitted safely to the ground, without excessive deflection or ground movement causing damage. **Approved Document A** sets out how a designer shows that. On a typical domestic project, that means anywhere you are:",
      },
      {
        type: "ul",
        items: [
          "**Removing or altering a load-bearing wall** — an opening for a [kitchen extension](/blog/kitchen-extensions-cranleigh-layout-budget), a knocked-through lounge, a doorway wider than a stud partition allows",
          "**Adding a new floor or roof structure** — a loft conversion, a room over a garage, a new dormer",
          "**Extending or altering foundations**, especially near a tree or on sloping or made-up ground",
          "**Fitting a rooflight or lantern** that interrupts the roof structure rather than sitting within it",
          "**Cutting or notching floor joists** for new drainage, a [wet room](/blog/wet-rooms-cranleigh-cottage) or underfloor heating pipework",
        ],
      },
      {
        type: "p",
        text: "What does not usually need a full calculation is like-for-like work — a replacement window in a non-structural opening, a new stud partition carrying no load, or decoration. The test is whether the job changes how load moves through the building. If it does, an engineer has to show, on paper, that it still works once it is finished.",
      },
      { type: "h2", text: "Who produces the calculations, and what they cost" },
      {
        type: "p",
        text: "Calculations are normally produced by a chartered structural or civil engineer, working to the **Eurocodes** — BS EN 1990 to BS EN 1999, the British and European standards suite that replaced the older British Standard codes for structural design. For a single beam or opening that is one drawing and one calculation sheet. For a loft conversion, or a project changing several structural elements at once, it is a fuller package covering everything that changes.",
      },
      {
        type: "table",
        head: ["Job", "Typical structural engineer's fee", "What's covered"],
        rows: [
          ["Single opening or beam (kitchen extension, knocked-through wall)", "£1,500 – £3,000", "Beam size, padstones, lintel over the opening"],
          ["Loft conversion", "£1,500 – £3,000", "New floor joists, roof strengthening, stair opening"],
          ["Full renovation or two-storey extension", "£1,500 – £3,000, sometimes more than one calculation", "Every structural element that changes, plus foundation design"],
        ],
        caption: "One fee for a single opening, whatever the room size — get it agreed before the kitchen or loft is designed around it, not after.",
      },
      { type: "h2", text: "Full Plans, Building Notice, or a Registered Building Control Approver" },
      {
        type: "p",
        text: "There are three routes into building control, and the choice decides when you find out whether the calculation is accepted.",
      },
      {
        type: "table",
        head: ["Route", "When you can start", "What it means for structural work"],
        rows: [
          ["Full Plans (local authority)", "After plans and calculations are checked — 5 weeks statutory target, or 2 months by agreement", "Calculations are reviewed on paper before a spade goes in, so disagreements get resolved before you have committed to a design"],
          ["Building Notice (local authority)", "As little as 2 days after notice is given", "No prior check of plans or calculations — the inspector reviews the structural work as it happens on site, which is late for a beam you have already ordered"],
          ["Registered Building Control Approver (private, since 6 April 2024)", "Similar to Full Plans, agreed directly with the approver", "Replaced the old \"Approved Inspector\" scheme under the Building Safety Act 2022 reforms; same principle of checking the calculation before work starts"],
        ],
        caption: "A Building Notice is the fastest way to start and the slowest way to find out a beam calculation has a problem.",
      },
      {
        type: "p",
        text: "For anything genuinely structural, Full Plans or a Registered Building Control Approver is the safer route — not because a Building Notice is unlawful, but because the calculation gets checked while it is still a drawing, not after the beam is already built into the wall.",
      },
      { type: "h2", text: "What the officer is actually checking the calculation against" },
      {
        type: "p",
        text: "A building control surveyor is not redesigning the structure — re-deriving someone else's calculation from scratch is not the job. What they check is that the calculation is complete, uses a recognised design standard, and that what gets built on site matches what was calculated. For a typical beam or opening that means:",
      },
      {
        type: "ul",
        items: [
          "The **span**, and the load it carries — one storey of roof, or a full two-storey load above",
          "The **size and grade** of the steel or timber, checked against the calculated capacity",
          "What the beam **bears on** — the padstones, and whether the wall below can take the extra point load",
          "**Deflection** — how much the beam is allowed to sag under load without cracking the ceiling or the wall above it",
          "**Lateral restraint** — the straps tying the beam and the surrounding structure together, easy to miss on site and one of the more common reasons for a failed inspection",
        ],
      },
      {
        type: "p",
        text: "This is also why the timing of the inspection matters. Building control needs to see the beam and its bearings before they are covered by plasterboard or insulation. An inspection booked after the ceiling is boarded means either exposing it again or a delay while the inspector reviews photographs instead, which not every building control body will accept in place of seeing it directly.",
      },
      { type: "h2", text: "What happens if you start before the calculation is approved" },
      {
        type: "p",
        text: "On a Building Notice you can, technically, start almost immediately, calculation or not. In practice, starting the structural work before an engineer has sized the beam is how the phone call at the start of this piece happens. If the officer's inspection finds work that does not match an approved calculation — or no calculation at all — every option left is worse than doing it in the right order: opening up finished work for inspection, commissioning a retrospective calculation for something already built and hoping the as-built condition genuinely satisfies it, or, at worst, taking down and rebuilding a beam that was undersized.",
      },
      {
        type: "quote",
        text: "The beam is never the expensive part of the job. Taking a beam out again after the plasterboard is up and the kitchen units are booked in — that is the expensive part. We get the structural engineer's drawing agreed before we order the steel, not after it has been delivered, because reordering a beam costs a fraction of what reordering a finished ceiling does.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      {
        type: "callout",
        title: "The saving",
        text: "Agreeing the structural calculation and having it accepted by building control before the steel is ordered, rather than after work is already covered, typically avoids **£1,000–£2,000** in exposing and redoing finished work, and **two to four weeks** lost to a second inspection and, where the design has to change, a revised calculation.",
      },
      { type: "h2", text: "How long structural calculations realistically add to a programme" },
      {
        type: "table",
        head: ["Stage", "Typical time", "Notes"],
        rows: [
          ["Structural engineer's site visit and calculation", "1 – 2 weeks", "Do this before ordering steel or agreeing a kitchen or loft layout"],
          ["Full Plans or Registered Building Control Approver check", "Up to 5 weeks statutory target, or agreed directly with an RBCA", "Runs alongside other design work if started early enough"],
          ["Building Notice, if used", "Can start within days", "Calculation still needed, but reviewed on site rather than in advance — higher risk of a mismatch found late"],
          ["Site inspections at key stages", "Ongoing through the build", "Foundation, damp-proof course, beam or structure before covering, completion"],
        ],
        caption: "Getting the calculation done early is the one step that shortens every route through building control, not just the slow one.",
      },
      { type: "h2", text: "Getting the order right" },
      {
        type: "ol",
        items: [
          "**Get a structural engineer involved** as soon as you know a wall, a floor or a roof is changing — before the kitchen or loft is designed around it.",
          "**Choose Full Plans or a Registered Building Control Approver** for anything genuinely structural, rather than a Building Notice, so the calculation is checked before you start.",
          "**Order the steel or timber** only once the calculation is accepted, not once it is merely written.",
          "**Book the inspection** before anything covers the beam or its bearings — plasterboard, insulation or a ceiling.",
          "**Keep the calculation and the [completion certificate](/blog/building-control-completion-certificate) together** — a buyer's solicitor will ask for both when the house is sold.",
        ],
      },
      {
        type: "p",
        text: "If you are planning any work that touches a wall, a floor or a roof structure, get the structural engineer involved at the same time as the kitchen or loft designer, not after — it is the one conversation that decides whether the rest of the project runs to the programme you were quoted. It is exactly the kind of thing worth raising early with [builders in Cranleigh](/areas/cranleigh) who deal with building control on every job, not only the awkward ones.",
      },
    ],
    faqs: [
      {
        question: "Do I need structural calculations to remove a wall in my house?",
        answer:
          "Yes, if the wall is load-bearing. Part A of the Building Regulations 2010 requires any change that alters how loads are carried to be shown, in writing, to be safe — usually a beam and padstone calculation from a structural engineer, checked by building control before the work is signed off.",
      },
      {
        question: "How much do structural calculations cost?",
        answer:
          "Typically £1,500–£3,000 for a single opening or beam, whatever the size of the room, covering the engineer's site visit, the calculation and the drawing building control needs. A loft conversion or a project with several structural changes may need more than one calculation within the same range, or a fee toward the top of it.",
      },
      {
        question: "What's the difference between a Building Notice and Full Plans?",
        answer:
          "A Building Notice lets you start work within a couple of days, but building control does not check your plans or calculations in advance — they review the structural work as it happens on site. Full Plans, or a Registered Building Control Approver, checks the calculation before you start, which is the safer route for anything genuinely structural.",
      },
      {
        question: "What is a Registered Building Control Approver?",
        answer:
          "The private-sector alternative to a local authority's building control department, called an \"Approved Inspector\" until the role was replaced under the Building Safety Act 2022. Since 6 April 2024, private building control work in England has been carried out by Registered Building Control Approvers registered with the Building Safety Regulator instead.",
      },
      {
        question: "What happens if I start structural work before building control has approved the calculation?",
        answer:
          "You risk the inspector finding, at a later visit, that what's built does not match an approved design — which can mean opening up finished work such as plasterboard or insulation for inspection, or commissioning a retrospective calculation for something already built. It is far cheaper to get the calculation agreed before the steel is ordered.",
      },
      {
        question: "Does a small steel beam still need a calculation?",
        answer:
          "Yes. Building control does not have a size threshold below which structural work is exempt — any beam replacing a load-bearing wall or carrying a genuine structural load needs a calculation, however short the span.",
      },
    ],
    art: BLOG_ART["structural-calculations-building-control"],
  },
  {
    slug: "wet-rooms-cranleigh-cottage",
    title: "Wet rooms in a Cranleigh cottage: what an older building needs",
    category: "Bathrooms",
    date: "2026-09-09",
    seoTitle: "Wet Room In A Cranleigh Cottage | Floor & Consent Guide",
    metaDescription:
      "A wet room needs a floor that falls to a drain — in a Cranleigh cottage that's old timber, not concrete. What it costs, what needs consent, and timing.",
    excerpt:
      "A wet room needs a floor that falls to a drain, and in a Cranleigh cottage that floor is almost always old timber, not concrete. Here's what has to happen before you choose a single tile.",
    imageAlt:
      "Illustration of a Cranleigh cottage elevation beside a cutaway of its old timber floor, showing joists in cross-section, an amber tanking membrane sloping down to a drain, and tiles laid over the fall",
    related: [
      "bathroom-fitting-cost-cranleigh",
      "tiles-are-not-waterproof",
      "cranleigh-conservation-area-consent",
      "cranleigh-victorian-cottage-rewire-replumb",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "A wet room is not a shower with the tray taken out. The **floor** has to form a fall to a drain, and in a Cranleigh cottage that floor is almost always suspended timber, not a concrete slab — check it before anything else is drawn up.",
          "If the cottage is one of Cranleigh's **81 listed buildings**, cutting or notching joists, changing a floor level or moving a wall for the drainage run needs **listed building consent** in its own right, even though the plumbing itself does not.",
          "Waterproofing follows **BS 5385** — a code of practice, not a building regulation — but skipping it is the single biggest reason a wet room in an old cottage fails within two years.",
          "Ventilation is a regulation, not a code of practice: **Approved Document F** requires at least **15 litres per second** of intermittent extract where there's a bath or shower, rising to **4 air changes per hour** if the room has no external wall.",
          "Budget **from £9,000** for the bathroom itself, a **structural engineer's assessment at £1,500–£3,000** for the floor, and — if the house is listed — an **8-week statutory wait** for consent before work can start.",
        ],
      },
      {
        type: "p",
        text: "The conversation usually starts with a photograph — a stone-floored wet room, no step, no tray, water just running away to a slot in the floor — and a question about fitting one into a cottage bathroom that has had the same bath in it since the 1970s. We like the idea as much as the client does. The problem is never the plumbing. It is what is under the floor.",
      },
      {
        type: "p",
        text: "Most bathrooms in and around the Cranleigh conservation area sit on a suspended timber floor — joists spanning between walls, with boards nailed across them — not the solid concrete slab a new-build wet room assumes. Forming a fall to a drain in a floor like that, without weakening it, is a proper piece of design, not a fitting job. And if the cottage is listed, which a good number of the older ones near the High Street are, the floor itself is protected before a single tile is chosen.",
      },
      { type: "h2", text: "Why the floor comes first, not the tiles" },
      {
        type: "p",
        text: "A wet room floor has to do two things a normal bathroom floor does not: fall consistently towards a drain, typically at around 1:60 to 1:80, and stay completely rigid while it does it. Any deflection under a footstep or a filling bath cracks the tanking exactly where it needs to hold, and once that happens the water goes into the floor void, not down the drain.",
      },
      {
        type: "p",
        text: "On a suspended timber floor, that means checking the joists before anything else: their size, their span, their condition, and whether they were ever meant to carry the extra weight of a full bath or a tiled floor build-up in the first place. The Planning Portal's own guidance on kitchen and bathroom floor structures is blunt about this — a timber floor can be overloaded once a bath is filled with water and in use — and strengthening it is a job for a structural engineer or surveyor, not a guess made on site.",
      },
      {
        type: "ul",
        items: [
          "**Firring pieces or counter-battens** fixed across the existing joists, tapering the floor build-up towards the drain — the most common fix, and the one that leaves the joists themselves untouched.",
          "**A new, engineered floor structure** where the existing joists are undersized or badly worn — more work, but sometimes the only honest answer.",
          "**Notching or cutting joists**, only where an engineer has calculated it is safe, and never as the first option — this is the step that most often needs sign-off before building control will accept it.",
        ],
      },
      { type: "h2", text: "Tanking and ventilation: one is trade guidance, one is law" },
      {
        type: "p",
        text: "We've covered proper tanking in detail elsewhere — see [tiles are not waterproof](/blog/tiles-are-not-waterproof) — so here is the short version for a wet room specifically. **BS 5385**, the wall and floor tiling code of practice, sets out that the structure behind and beneath the tiles in a wet room has to be tanked as a continuous membrane, floor and walls together, because there is no shower tray to contain a leak. The whole floor is doing the tray's job.",
      },
      {
        type: "p",
        text: "Ventilation is different: it is a building regulation, not a code of practice. **Approved Document F, Volume 1** requires at least **15 litres per second** of intermittent mechanical extract in a room with a bath or shower, or **8 litres per second** if it runs continuously. Where the wet room has no external wall or window — common in a cottage where the bathroom has been carved out of a middle room — the requirement rises to **4 air changes per hour**. That is not a style choice; it is why cottage wet rooms tucked into windowless corners are the ones that come back to us with mould in the grout eighteen months later.",
      },
      {
        type: "quote",
        text: "Every cottage floor is a slightly different job. The joists are never quite the sizes the old drawings say, one end is often resting on something it shouldn't be, and we lift a board before we agree a number with anyone. Fit a wet room to the floor you assume is there and you find out what is actually there halfway through the job — which is the expensive way to find out.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      { type: "h2", text: "Do you need listed building consent for a wet room in Cranleigh?" },
      {
        type: "p",
        text: "Cranleigh parish has **81 nationally listed buildings** — 80 Grade II and one Grade II*, the Church of St Nicolas — per the Cranleigh Neighbourhood Plan, plus a further **174 Buildings of Local Merit** that Waverley weighs as non-designated heritage assets even though they carry no statutory protection. If your cottage is on the first list, the distinction matters enormously for a wet room.",
      },
      {
        type: "p",
        text: "Listed building consent covers any work that affects a listed building's character, and that is not limited to the front elevation. Cutting or replacing floor joists, changing a floor level to form a fall, and moving an internal wall for the drainage run can all require consent in their own right — separate from, and in addition to, any building control sign-off for the structural work itself. Carrying it out without consent is a **criminal offence**, and Waverley can require unauthorised work to be reversed.",
      },
      {
        type: "p",
        text: "There is **no application fee** for listed building consent itself, and the statutory target for a decision is the same **8 weeks** as a full planning application. A **Building of Local Merit** does not need listed building consent for internal work like this — the 174-strong list is a material planning consideration, not a statutory designation, so the structural and building control route is the same as for any older house. Where it does matter is if the cottage also sits inside the **Cranleigh Conservation Area**, where anything visible from outside — a new rooflight for the wet room, for instance — is the trigger, not the bathroom itself. See [building inside the Cranleigh Conservation Area](/blog/cranleigh-conservation-area-consent) for what needs consent there.",
      },
      {
        type: "callout",
        title: "The saving",
        text: "Submitting a bare listed building consent application and waiting for the case officer to come back with questions is the single most common way this process runs long. Get the structural engineer's floor assessment and method statement done first, and submit it **with** the application rather than after a request for further information — that alone typically avoids a second 8-week determination period stacked on the first, and on a project already booked in with a builder, an unplanned 8 weeks is real money sitting idle, not just a delay.",
      },
      { type: "h2", text: "What a wet room costs in an older Cranleigh cottage" },
      {
        type: "p",
        text: "Start from the same baseline as any full bathroom refit here: **from £9,000** for a complete job — strip-out, plumbing, electrics, tiling, suite and decoration (see [what a bathroom fitting costs in Cranleigh](/blog/bathroom-fitting-cost-cranleigh) for what moves that number generally). A wet room in an older cottage adds to it in three specific, checkable places.",
      },
      {
        type: "table",
        head: ["What's added", "Typical cost", "Why it's needed"],
        rows: [
          ["Structural engineer's floor assessment", "£1,500 – £3,000", "One fee whatever the room size — covers the joist survey and the method statement for building control, and for listed building consent if it applies"],
          ["Floor strengthening or rebuild", "Varies with what's found", "Firring pieces are inexpensive; a full joist rebuild is a different job — get this priced only after the survey, never before it"],
          ["Listed building consent", "No application fee", "But budget the 8-week statutory decision period into your programme, not your invoice"],
        ],
        caption: "Guide figures for Cranleigh, 2026. A full structural quote can only follow the survey, not precede it.",
      },
      { type: "h2", text: "How long it actually takes" },
      {
        type: "p",
        text: "The wet room itself is rarely the slow part of the programme. The paperwork and the floor survey are.",
      },
      {
        type: "table",
        head: ["Stage", "Typical time", "Notes"],
        rows: [
          ["Floor survey and structural engineer's report", "1 – 2 weeks", "Do this before any consent application, not after"],
          ["Listed building consent, if needed", "8 weeks statutory target", "Longer if the application is incomplete or the case officer asks for more information"],
          ["Building control submission and approval", "Can run alongside consent", "The structural method statement usually does double duty for both"],
          ["Strip-out and floor build-up", "1 – 2 weeks", "The stage most affected by what the survey actually finds"],
          ["Tanking, tiling and fit-out", "2 – 3 weeks", "Cannot be rushed — tanking systems need proper curing time between coats"],
        ],
        caption: "A realistic total for a listed cottage is 10–14 weeks from survey to finished room; nearer 5–7 weeks where no consent is needed.",
      },
      {
        type: "p",
        text: "Get the floor looked at before you fall in love with a particular finish, and a wet room in even the oldest Cranleigh cottage is entirely achievable — the joists just decide the order things happen in, not whether they happen at all. If you are weighing a wet room against a simpler refit, or wondering whether your cottage needs consent before a tile is chosen, that is exactly the sort of conversation to have early with [builders in Cranleigh](/areas/cranleigh) who will still be maintaining the tanking in twenty years' time.",
      },
    ],
    faqs: [
      {
        question: "Do I need listed building consent for a wet room in a Cranleigh cottage?",
        answer:
          "Only if the cottage is one of Cranleigh's 81 listed buildings, and then usually yes — cutting or altering floor joists, changing floor levels or moving a wall for drainage all affect the building's character and need consent in their own right, separately from building control. There is no application fee, but budget an 8-week statutory decision period.",
      },
      {
        question: "Can an old suspended timber floor take a wet room?",
        answer:
          "Usually, once it has been assessed. Most Cranleigh cottage floors are suspended timber rather than solid concrete, and the Planning Portal's own guidance is clear that a timber floor can be overloaded by a bath in use — a structural engineer needs to check the joists and specify how the fall to the drain is formed before any floor build-up goes down.",
      },
      {
        question: "What ventilation does a wet room need?",
        answer:
          "Approved Document F requires at least 15 litres per second of intermittent extract where there's a bath or shower, or 8 l/s continuous. A wet room with no external wall needs 4 air changes per hour instead. This is a building regulation, not a preference.",
      },
      {
        question: "Is tanking a building regulation?",
        answer:
          "No — tanking a wet room follows BS 5385, a code of practice, not a statutory building regulation. That does not make it optional: it is the specification the trade and building control both expect, and skipping it is the most common cause of an early wet room failure.",
      },
      {
        question: "How much more does a wet room cost than a standard bathroom refit in Cranleigh?",
        answer:
          "Start from the same £9,000 baseline as any full bathroom refit, then add a structural engineer's assessment at £1,500–£3,000 and whatever floor strengthening the survey finds is needed — which can range from a straightforward set of firring pieces to a more involved rebuild. Get the survey done before you price the floor work, not after.",
      },
    ],
    art: BLOG_ART["wet-rooms-cranleigh-cottage"],
  },
  {
    slug: "kitchen-extensions-cranleigh-layout-budget",
    title: "Kitchen extensions in Cranleigh: layout before budget",
    category: "Kitchens",
    date: "2026-09-07",
    seoTitle: "Kitchen Extensions Cranleigh | Cost & Layout Guide 2026",
    metaDescription:
      "A kitchen extension in Cranleigh costs £3,500–£4,500 per m² fitted, but layout decides the price, not the units. What to plan first, and what can wait.",
    excerpt:
      "A kitchen extension here typically runs £3,500–£4,500 per m² once fitted — but the layout, not the worktop, is what actually sets the price. Here's what to decide before you choose a kitchen range.",
    imageAlt:
      "Illustration of a house cutaway showing an existing kitchen on the left and a new glass-roofed kitchen extension on the right, joined by an amber steel beam resting on two grey padstones, with a dashed drainage pipe running underground to a manhole",
    related: [
      "structural-calculations-building-control",
      "extending-1930s-semi-cranleigh",
      "party-wall-notice-timing",
      "extension-value-cranleigh",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "A kitchen extension in Cranleigh typically costs **£3,500–£4,500 per m²** including fit-out — more than a plain single-storey extension at £2,700–£3,100 per m², because a kitchen adds drainage, gas, ventilation and cabinetry on top of the shell.",
          "The number that moves most is not the units or the worktop. It is the **structural opening** — where the steel goes and what it lands on.",
          "Decide the **layout** before you choose a kitchen range. Reversing that order is the most common cause of a mid-project redesign.",
          "A single-storey rear extension can often be built under **permitted development**, but the larger neighbour consultation scheme (up to 6m attached, 8m detached) does not apply inside the Cranleigh Conservation Area.",
          "Budget **8–12 weeks for design and approvals** before a spade goes in, and a further **10–14 weeks to build** a typical single-storey kitchen extension.",
        ],
      },
      {
        type: "p",
        text: "The conversation almost always starts the same way. Someone shows us a photograph of a kitchen — an island, a run of full-height glazing, a particular tap — and asks what it costs. We have to ask a different question first: where is the wall coming out, and what is going to hold the roof up over the gap.",
      },
      {
        type: "p",
        text: "That is not us being difficult. The layout of a kitchen extension decides most of the price before a single unit is chosen, and it is the part people think about last.",
      },
      { type: "h2", text: "What a kitchen extension actually costs in Cranleigh" },
      {
        type: "p",
        text: "A plain single-storey extension here runs **£2,700–£3,100 per m²** — a shell: foundations, walls, roof, windows and a plastered box, per our [pricing page](/pricing) and the [house extension costs guide](/guides/house-extension-costs-surrey). A kitchen extension costs more for the same footprint, because it is never just a shell.",
      },
      {
        type: "table",
        head: ["Item", "Typical rate", "Why it costs more than a plain shell"],
        rows: [
          ["Plain single-storey extension", "£2,700 – £3,100 per m²", "Structure only — no drainage, no kitchen services, no fit-out"],
          ["Kitchen extension incl. fit-out", "£3,500 – £4,500 per m²", "New drainage run, gas or induction supply, extract ventilation, cabinetry and worktop labour"],
          ["Structural engineer's calculations", "£1,500 – £3,000", "One fee whatever the size of the opening — get it early"],
        ],
        caption: "Guide prices for Cranleigh, 2026. A difficult drainage run or an awkward party wall moves this more than room size does.",
      },
      { type: "h2", text: "Why the layout decides the price, not the worktop" },
      {
        type: "p",
        text: "A kitchen extension almost always means opening up a load-bearing wall between the old kitchen and the new space. That opening is held up by a steel beam sitting on padstones built into the surrounding walls. Its size is set by the span, the load above it — one storey or two — and how wide the opening is. A four-metre run of bifold doors needs a heavier beam than a two-and-a-half-metre doorway, and a heavier beam can mean rebuilding a section of wall to take the padstone.",
      },
      {
        type: "p",
        text: "None of that shows in a kitchen brochure. A structural engineer decides it from a drawing, and it should happen **before** anyone chooses a kitchen range — the steel's position decides where units can go, where the ceiling can drop for services, and how wide the opening to the old room can be.",
      },
      {
        type: "quote",
        text: "People ask for the price of the kitchen before they have agreed where the wall is coming out. I understand why — it is the fun part — but the steel goes where the structure needs it, not where the island looks best in a magazine, and if you pick the layout after the steel is calculated you are designing around a beam instead of a room.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      {
        type: "callout",
        title: "The saving",
        text: "Agree the opening, beam position and rooflight with a structural engineer before the kitchen designer finalises anything. Move the beam after the kitchen is designed and you typically face a revised calculation, a second building control submission, **2–3 weeks lost**, and a further **£500–£1,500** in redesign and re-quoting. Getting the order right costs nothing extra — it is the same conversation, earlier.",
      },
      { type: "h2", text: "Side-return, rear extension or wrap-around: which suits your house" },
      {
        type: "p",
        text: "Cranleigh's housing stock is mostly 1930s semis and detached houses with generous plots, plus older cottages nearer the centre — see [extending a 1930s semi in Cranleigh](/blog/extending-1930s-semi-cranleigh) for what those houses hide structurally. That mix decides which layout actually fits.",
      },
      {
        type: "table",
        head: ["Layout", "Suits", "What it does to the job"],
        rows: [
          ["Rear extension", "Detached and semi-detached houses with garden depth to spare", "The simplest structurally — one new wall, one roof, one steel opening"],
          ["Side-return", "Terraces and semis with an unused side passage", "Cheap floor area, but the new roof usually ties into the existing one — a second structural junction"],
          ["Wrap-around", "Larger plots where both are available", "Widest open-plan kitchen-diner, but two structural openings, not one"],
        ],
        caption: "The right layout is decided by the plot and the existing structure, not by which one looks biggest on paper.",
      },
      {
        type: "p",
        text: "A wrap-around gives the most floor area for the money, but it is also the layout most likely to need agreement with a neighbour where it runs along a shared boundary — see [the party wall notice that sets your start date](/blog/party-wall-notice-timing) if that applies to you.",
      },
      { type: "h2", text: "Planning permission or permitted development" },
      {
        type: "p",
        text: "Many single-storey kitchen extensions here can be built under **permitted development**, without a full application, within set limits: broadly up to **3m beyond the rear wall for an attached house** and **4m for a detached house**, with a height limit of around 4m overall. These are the Class A limits in the General Permitted Development Order — the detail is on the [Planning Portal](https://www.planningportal.co.uk).",
      },
      {
        type: "p",
        text: "A **larger home extension neighbour consultation scheme** lets you go further — up to 6m attached or 8m detached — via a lighter prior approval process. The fee is **£249**, rising to **£310 from 8 December 2026**. It does **not apply on Article 2(3) land, which includes conservation areas**. Inside the **Cranleigh Conservation Area** you are capped at the standard 3m/4m limits, and a side extension needs full planning permission regardless of size.",
      },
      {
        type: "p",
        text: "Where full planning is needed, Waverley assesses householder applications against its **Residential Extensions SPD (2010)** and, since 15 July 2024, the **Cranleigh Neighbourhood Plan** — see [what it changed for householders](/blog/cranleigh-neighbourhood-plan-householders). The current fee is **£548**, rising to roughly £575 from 8 December 2026.",
      },
      { type: "h2", text: "Drainage, gas and where the steel really goes" },
      {
        type: "p",
        text: "Two things most often surprise people once a kitchen extension is under way:",
      },
      {
        type: "ul",
        items: [
          "**Moving the sink or dishwasher** usually means new drainage falling to an existing manhole, sometimes under the new floor slab — plan it before the slab is poured, not after.",
          "**Relocating a gas meter** to feed a new hob position needs the gas transporter or a Gas Safe engineer, and can take longer to schedule than the build itself.",
          "**Cooker hood extraction** has to discharge outside — usually through the roof or an external wall, decided by where the hob sits, which is decided by the layout.",
          "**A rooflight or lantern over an island** is the biggest single factor in the size of the roof steel, because it interrupts the roof structure rather than sitting within it.",
        ],
      },
      { type: "h2", text: "How long a kitchen extension actually takes" },
      {
        type: "p",
        text: "The build itself is rarely the slow part. Design and approvals are.",
      },
      {
        type: "table",
        head: ["Stage", "Typical time", "Notes"],
        rows: [
          ["Design, structural calculations, quotation", "3 – 5 weeks", "Do this before ordering a kitchen"],
          ["Prior approval (larger PD scheme)", "Up to 6 weeks", "Neighbour consultation plus the council's decision"],
          ["Full planning application", "8 weeks statutory target, often longer", "Plus 2–3 weeks validation before the clock starts"],
          ["Build: single-storey shell", "10 – 14 weeks", "Weather and ground conditions can move this"],
          ["Kitchen fit-out once watertight", "2 – 3 weeks", "Can overlap the final weeks of the build"],
        ],
        caption: "A realistic total is 5–7 months for a permitted development scheme, longer where full planning is needed.",
      },
      { type: "h2", text: "Getting the order right" },
      {
        type: "ol",
        items: [
          "**Establish the layout and structural opening first** — with a structural engineer, not a kitchen designer.",
          "**Check permitted development against the conservation area boundary** before assuming the larger scheme is available.",
          "**Plan drainage and gas runs on the drawing**, before the slab or floor is down.",
          "**Get quotes itemised by trade** — shell, services and fit-out as three visible numbers, not one.",
          "**Choose the kitchen range last**, once the opening, rooflight and services are fixed — units are the part of this job with the least structural consequence.",
        ],
      },
      {
        type: "p",
        text: "Get the layout and the structure agreed first and the kitchen you actually want almost always fits inside it — argue about the tap last, not first. If you are working out whether your plot suits a rear extension, a side-return or something wider, that is the conversation to have with [builders in Cranleigh](/areas/cranleigh) who will still be doing your gas safety checks in ten years' time.",
      },
    ],
    faqs: [
      {
        question: "How much does a kitchen extension cost in Cranleigh?",
        answer:
          "Including the fit-out, typically £3,500–£4,500 per m², against £2,700–£3,100 per m² for a plain single-storey shell. The difference is drainage, gas or induction supply, extract ventilation and cabinetry.",
      },
      {
        question: "Do I need planning permission for a kitchen extension in Cranleigh?",
        answer:
          "Often not, within permitted development limits — broadly 3m beyond the rear wall (attached) or 4m (detached). A larger extension can use the neighbour consultation scheme (up to 6m/8m) for £249, rising to £310 from 8 December 2026 — but that scheme does not apply inside the Cranleigh Conservation Area, where full planning permission is needed instead.",
      },
      {
        question: "Why does the layout cost more than the units?",
        answer:
          "Because it decides the structural opening — the steel beam's size, what it sits on, and where services can run. That calculation typically costs £1,500–£3,000 and should be agreed before the kitchen is designed, not after.",
      },
      {
        question: "How long does a kitchen extension take from design to finished?",
        answer:
          "Realistically 5–7 months for a permitted development scheme: 3–5 weeks design, up to 6 weeks prior approval where needed, 10–14 weeks to build the shell, with fit-out overlapping the final weeks. Full planning adds several more months.",
      },
      {
        question: "Can I use permitted development for a bigger kitchen extension in Cranleigh?",
        answer:
          "Only outside the conservation area. The larger neighbour consultation scheme allows up to 6m (attached) or 8m (detached), but it does not apply on Article 2(3) land, which includes conservation areas. Inside the Cranleigh Conservation Area you are capped at the standard 3m/4m limits.",
      },
    ],
    art: BLOG_ART["kitchen-extensions-cranleigh-layout-budget"],
  },
  {
    slug: "trickle-vents-approved-document-f",
    title: "Trickle vents, condensation and Approved Document F",
    category: "Building control",
    date: "2026-08-28",
    updated: "2026-09-04",
    seoTitle: "Trickle Vents Explained | Approved Document F Requirements",
    metaDescription:
      "Most replacement windows in England need trickle vents under Approved Document F, in force since 15 June 2022, even where the old frame never had one.",
    excerpt:
      "New windows have to breathe, even when they are shut. Since June 2022 most replacement windows in England need trickle vents fitted — and the homeowners who argue hardest against them are usually the ones who ring back about black mould eighteen months later.",
    imageAlt:
      "Illustration comparing two windows in a wall: the left window sealed with no vent and condensation droplets running down the cold glass, the right window fitted with an amber trickle vent along its top edge letting a fresh air arrow trickle in with no condensation on the glass",
    related: [
      "part-l-extension-insulation",
      "building-control-completion-certificate",
      "cranleigh-conservation-area-consent",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "Since **15 June 2022**, most replacement windows and doors in England must have background ventilation — usually trickle vents — even where the window being replaced never had any.",
          "The rule is in **Approved Document F, Volume 1 (2021 edition)**. It is a building regulation, not a manufacturer's upsell.",
          "Vents cost roughly **£15–£35 per window** as part of a replacement. Retrofitting them into frames already fitted costs several times that, and can void the frame guarantee.",
          "The real cost of skipping them is condensation: black mould, rotting reveals and, in the worst cases, a whole window set replaced twice.",
          "Listed buildings and some conservation-area windows are treated differently — but that is a case to be argued with building control, not an assumption to make on site.",
        ],
      },
      {
        type: "p",
        text: "Every winter we get the same phone call. Someone had their windows replaced two or three years ago, the house has been colder and damper ever since, and there is black mould creeping up the reveals in the back bedroom. They think the windows are faulty. They almost never are. The windows are doing exactly what they were sold to do — sealing the house — and nobody gave the moisture anywhere to go.",
      },
      {
        type: "p",
        text: "This post is about the small plastic strip along the top of a window frame that most people ask us to leave off, why the building regulations now say you generally cannot, and what it costs you if you win that argument.",
      },
      { type: "h2", text: "What the regulation actually says" },
      {
        type: "p",
        text: "Approved Document F Volume 1 (2021 edition) came into force on **15 June 2022**. It sets the standard for ventilation in dwellings, and the part that catches homeowners out is the section on work to existing homes. When you replace a window or an external door, the guidance is that the replacement should not make the building's ventilation worse than it was — and because a modern sealed unit is dramatically more airtight than the frame it replaces, in practice that means fitting controllable background ventilation. Usually a trickle vent.",
      },
      {
        type: "p",
        text: "The point people miss is the second half: this applies **even if the original window had no vent at all**. A 1970s timber casement leaked air around every joint. Its replacement does not. Matching the old window's official ventilation provision — zero — would leave the room far worse ventilated than it was, which is the thing the regulation is written to prevent.",
      },
      {
        type: "callout",
        title: "Who is responsible",
        text: "If a FENSA or CERTASS installer fits your windows, they self-certify the work against the building regulations, and the vents are their responsibility. If a builder or joiner fits them, the work needs a building control application. Either way the liability is with the installer, not with you — which is why an installer who offers to leave the vents off is offering to carry a risk on your behalf that they will not be carrying when you sell the house.",
      },
      { type: "h2", text: "Why condensation, not draughts, is the problem" },
      {
        type: "p",
        text: "A family of four puts somewhere in the region of ten to fifteen litres of water vapour into the air of a house every day: showers, cooking, washing, drying clothes indoors, and simply breathing. That moisture has to leave the building. In a leaky old house it left through the fabric, constantly, whether you wanted it to or not — which is also why those houses were expensive to heat.",
      },
      {
        type: "p",
        text: "Seal the house properly and the moisture stays. It moves around until it finds the coldest surface in the room and condenses on it. That surface is almost always the glass, then the frame, then the plaster at the reveal where the wall is thinnest and coldest. Give it a few months and you have mould. Give it a few years in a timber frame and you have rot in a window you paid five figures for.",
      },
      {
        type: "quote",
        text: "The customers who fight hardest about trickle vents are the ones who tell me the new windows have made the house damp. They have. That is exactly what happens when you seal a house and don't give the air anywhere to go. The vent is not the draught — the mould is what the missing vent looks like.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      {
        type: "p",
        text: "It is worth being clear about the physics, because the objection is always the same: \"I am paying for warm windows and you want to put a hole in them.\" A trickle vent is a controllable slot with a typical equivalent area of a few thousand square millimetres. Closed, it does nothing. Open, it moves a small, steady volume of air across the top of the room, above head height, where you will not feel it. The heat loss through it over a winter is measured in single-digit pounds. The heat loss through a wall you have had to strip back and re-plaster because it went mouldy is not.",
      },
      { type: "h2", text: "What it costs, and what skipping it costs" },
      {
        type: "table",
        head: ["What", "Typical cost", "Notes"],
        rows: [
          ["Trickle vent fitted during window manufacture", "£15 – £35 per window", "Routed into the frame before it is glazed. This is the cheap moment."],
          ["Vent retrofitted into an installed frame", "£70 – £150 per window", "Frame has to be drilled on site; may affect the window guarantee."],
          ["Through-wall background ventilator", "£150 – £300 per room", "The usual alternative where a heritage frame cannot be drilled."],
          ["Re-plastering one mould-damaged reveal", "£300 – £600", "Plus decoration, plus the mould treatment, plus doing it again if the cause is not fixed."],
        ],
        caption: "Guide prices for Surrey, 2026. Fitting during manufacture is between two and ten times cheaper than any of the ways of fixing it afterwards.",
      },
      {
        type: "callout",
        title: "The saving",
        text: "Specify vents at the quotation stage and they cost £15–£35 a window. Decide you want them after the frames are in and you are looking at £70–£150 a window, on-site drilling, and a conversation with the manufacturer about whether your guarantee survives. On a ten-window house that is a difference of around **£600–£1,000** for exactly the same end result.",
      },
      { type: "h2", text: "When you genuinely might not need them" },
      {
        type: "p",
        text: "There are real exceptions, and around Cranleigh — where a good proportion of the older housing stock sits inside the conservation area or on the borough's local list — they come up more often than the national average.",
      },
      {
        type: "ul",
        items: [
          "**Listed buildings.** Building regulations work has to be balanced against the special interest of the building. A vent slot routed through an original frame is often unacceptable, and building control and the conservation officer will usually agree an alternative.",
          "**Conservation-area windows** where the frame section is dictated by a planning condition. Same argument, weaker footing — the building is protected as part of a group, not individually.",
          "**Rooms already served by continuous mechanical extract** that meets the Approved Document F flow rates. If the ventilation strategy is doing the job by another route, the vent is not the only answer.",
          "**Whole-house mechanical ventilation with heat recovery (MVHR)**, where the design deliberately keeps the envelope sealed. This is the one case where fitting trickle vents actively makes the house perform worse.",
        ],
      },
      {
        type: "p",
        text: "What these have in common is that they are agreed in advance with building control or a conservation officer and written down. None of them is \"we decided it looked better without\". If you are working on a protected building near the High Street, the [Cranleigh Conservation Area consent rules](/blog/cranleigh-conservation-area-consent) are the other half of the conversation you need to have before anyone orders frames.",
      },
      { type: "h2", text: "How to get this right before you order" },
      {
        type: "ol",
        items: [
          "Ask every window quote you receive to **state the vents on the quotation**. If they are not itemised, they are not priced, and the conversation will happen later at your expense.",
          "Ask **who is certifying the work** — FENSA, CERTASS, or a building control application. Get the number of the scheme in writing.",
          "If the house is listed or in the conservation area, **raise it before you order**, not after. Frames are made to order and a re-make is weeks, not days.",
          "If you are having MVHR installed, or already have it, **say so** — this is the case where the default answer is wrong.",
          "On completion, **keep the certificate**. It is the document a buyer's solicitor asks for, and windows are one of the two or three things they always check.",
        ],
      },
      {
        type: "p",
        text: "We build trickle vents into every window replacement we specify, and we itemise them, because the alternative is a conversation on a scaffold about who is paying to drill a frame that is already fitted. If you want a second opinion on a window quote — or on any quote — that is a conversation we are happy to have; it is part of what [builders in Cranleigh](/areas/cranleigh) should be doing for people in their own town.",
      },
    ],
    faqs: [
      {
        question: "Do I legally have to have trickle vents in replacement windows?",
        answer:
          "In England, Approved Document F Volume 1 (2021 edition), in force since 15 June 2022, means replacement windows generally must not reduce the ventilation of the room. Because modern sealed units are far more airtight than the windows they replace, that normally means fitting background ventilation such as trickle vents — even where the original window had none. Listed buildings and some other cases are treated differently, but that has to be agreed with building control rather than assumed.",
      },
      {
        question: "Will trickle vents make my house cold or draughty?",
        answer:
          "They are controllable and sit above head height, so in normal use you do not feel them. The heat lost through an open trickle vent over a winter is a few pounds. The heat lost through a wall that has had to be stripped and re-plastered after mould damage, and the cost of doing it, is considerably more.",
      },
      {
        question: "Can trickle vents be added after the windows are fitted?",
        answer:
          "Yes, but it costs roughly £70–£150 per window rather than £15–£35, because the frame has to be routed on site rather than in the factory, and it can affect the window guarantee. It is much cheaper to specify them on the original quotation.",
      },
      {
        question: "What about a listed building in Cranleigh?",
        answer:
          "Listed buildings are the clearest exception. Cutting a vent into an original frame is often unacceptable and building control will normally accept an alternative background ventilation strategy. Agree it with the conservation officer and building control before any frames are ordered — not after.",
      },
      {
        question: "Does a window fitter certify this work or do I need building control?",
        answer:
          "A FENSA or CERTASS registered installer self-certifies the work and issues a certificate. A builder or joiner who is not on a competent person scheme needs a building control application instead. Either way, keep the paperwork — it is what a buyer's solicitor will ask for.",
      },
    ],
    art: BLOG_ART["trickle-vents-approved-document-f"],
  },
  {
    slug: "cranleigh-settlement-boundary",
    title: "Cranleigh's settlement boundary: why which side you are on decides everything",
    category: "Planning & surveys",
    date: "2026-08-26",
    updated: "2026-09-04",
    seoTitle: "Cranleigh Settlement Boundary | What It Means For Your Build",
    metaDescription:
      "Inside Cranleigh's settlement boundary you are in a built-up area. A field's width outside it you are in the countryside, and the planning test changes completely.",
    excerpt:
      "Two houses a hundred yards apart in Cranleigh can get completely different answers from Waverley — not because one design is better, but because one is inside the settlement boundary and one is not. Here is how to find out which you are, before you pay an architect.",
    imageAlt:
      "Illustration of a village edge: a dashed amber boundary line runs between a cluster of houses on the left, labelled inside the settlement boundary, and open green fields with a single farmhouse on the right, labelled countryside",
    related: [
      "cranleigh-neighbourhood-plan-householders",
      "trees-and-foundation-depth-cranleigh",
      "extension-value-cranleigh",
      "barn-conversions-cranleigh-planning-route",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "Waverley draws a **settlement boundary** around Cranleigh's built-up area. Inside it, development is expected in principle. Outside it, you are in the countryside and the burden of proof reverses.",
          "There are **two settlement boundaries in Cranleigh parish**, not one — the main village and a second, separate one.",
          "Cranleigh's built-up area is **not Green Belt**. Rowly, in the same parish, is washed over by it. Two different constraints, two different tests, often confused.",
          "Being outside a boundary is what makes a site \"rural\" for planning purposes, **whether or not it is Green Belt**.",
          "Check the boundary before you commission drawings. It is free, it takes ten minutes, and it is the single biggest determinant of whether a scheme is worth designing.",
        ],
      },
      {
        type: "p",
        text: "We have watched two clients in the same year commission almost identical schemes — a modest annexe in a large garden — and get opposite answers from Waverley Borough Council. One was approved without much argument. The other was refused and stayed refused. The designs were not the difference. A dashed line on a policies map was.",
      },
      {
        type: "p",
        text: "That line is the settlement boundary, and if you are planning anything more ambitious than a rear extension in Cranleigh, it is the first thing to look up — before the architect, before the tree survey, before you tell anyone in the family about the plan.",
      },
      { type: "h2", text: "What a settlement boundary is" },
      {
        type: "p",
        text: "A settlement boundary is a line on the local plan's policies map that separates the built-up part of a village or town from the countryside around it. Its job is to concentrate development inside the existing settlement and to keep the fields between settlements as fields. Waverley's approach, and its reasoning for where the lines sit, is set out in the council's **Settlement Boundaries Topic Paper (November 2020)**, published as part of the Local Plan Part 2 evidence base.",
      },
      {
        type: "p",
        text: "The practical effect is that the two sides of the line get different questions asked of them:",
      },
      {
        type: "table",
        head: ["", "Inside the boundary", "Outside the boundary"],
        rows: [
          ["The starting position", "Development is acceptable in principle; the argument is about design, scale, amenity and access.", "Development is restricted in principle; you have to demonstrate the proposal is one of the limited types the countryside policies allow."],
          ["What you are arguing about", "Whether the scheme is right.", "Whether the scheme should exist at all."],
          ["Typical outcome for a new dwelling", "Possible, subject to the usual tests.", "Very difficult without a specific justification such as rural worker need, or reuse of an existing building."],
          ["Householder extensions", "Normal householder policies apply.", "Normal householder policies still apply to the existing house, but scale is scrutinised harder and outbuildings are treated more sceptically."],
        ],
        caption: "The line does not change what you want to build. It changes which question the planning officer is asking.",
      },
      { type: "h2", text: "Cranleigh has two boundaries, and it is not Green Belt" },
      {
        type: "p",
        text: "Two things about Cranleigh specifically trip people up, and both of them come straight out of the Topic Paper.",
      },
      {
        type: "p",
        text: "First, **the parish contains two separate settlement boundaries**, not one. The main one wraps the village. There is a second, distinct boundary elsewhere in the parish. People who check \"is Cranleigh's boundary near me\" by looking only at the village edge sometimes get the wrong answer.",
      },
      {
        type: "p",
        text: "Second — and this is the one that causes the most confused phone calls — **Cranleigh's built-up area is not in the Green Belt**. The countryside immediately beyond the boundary is designated as countryside, not Green Belt. But Rowly, in the same parish, *is* washed over by the Green Belt. So within one parish you have built-up area, countryside beyond the boundary, and Green Belt, and all three are governed differently.",
      },
      {
        type: "callout",
        title: "The distinction that matters",
        text: "Being outside a settlement boundary makes your site **rural** for planning purposes regardless of whether it is Green Belt. People hear \"not Green Belt\" and assume the countryside restrictions do not apply. They do. Green Belt adds a further, harder layer on top — it does not replace the boundary test, and the absence of Green Belt does not remove it.",
      },
      {
        type: "quote",
        text: "I have sat at kitchen tables with drawings that were never going to get permission, and the owner had already paid for them. Nobody had spent ten minutes on the policies map first. It is the cheapest ten minutes in the whole project.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      { type: "h2", text: "How to check which side you are on, for free" },
      {
        type: "ol",
        items: [
          "Go to **Waverley Borough Council's interactive policies map** and search your address. The settlement boundaries are a mapped layer.",
          "Turn on the **Green Belt** layer as well, and the **conservation area** layer. These are three different constraints and a site can carry none, one or all three.",
          "Note whether your **whole plot** is inside. Long gardens in Cranleigh regularly straddle the line — the house is in, the bottom of the garden is out. That matters enormously for anything you want to build at the end of it.",
          "Check the **Cranleigh Neighbourhood Plan**, made 15 July 2024, which sits alongside the borough policies and adds its own requirements. We cover what it changed for householders in [our post on the Neighbourhood Plan](/blog/cranleigh-neighbourhood-plan-householders).",
          "If the answer is \"outside\", or \"partly\", **book a pre-application enquiry with Waverley before you commission a design**. It is a few hundred pounds and an officer's written view, and it is the difference between a designed scheme and an expensive drawing.",
        ],
      },
      {
        type: "callout",
        title: "The saving",
        text: "A full set of planning drawings and a householder application for a substantial scheme runs into the low thousands once you add the architect, the fee (**£548 for a householder application since 1 April 2026**, rising to about £575 from 8 December 2026) and any supporting surveys. Ten minutes on the policies map, and a pre-app if there is any doubt, is what stops you spending it on something the policy was never going to allow.",
      },
      { type: "h2", text: "What you can still do outside the boundary" },
      {
        type: "p",
        text: "Being outside the line is not the end of the conversation. It changes it. The routes that still work, in rough order of how often we see them succeed around Cranleigh:",
      },
      {
        type: "ul",
        items: [
          "**Householder extensions to an existing house.** The house is already there; you are not creating development in the countryside, you are altering it. Scale and design are scrutinised harder, but this is normal work.",
          "**Permitted development**, where it applies. It is not switched off outside settlement boundaries, though it is restricted in conservation areas, on listed buildings and where an Article 4 direction is in force.",
          "**Reuse of an existing building.** Converting a redundant barn or outbuilding is a recognised route where the building is substantial, permanent and capable of conversion without effectively rebuilding it.",
          "**Replacement dwellings**, subject to policy limits on how much bigger the replacement can be.",
          "**Rural worker dwellings**, where there is a genuine, evidenced functional need. This is a high bar and needs specialist advice, not optimism.",
        ],
      },
      {
        type: "p",
        text: "What almost never works is a new open-market house in a field because the field is big and the owner would like one there. That is precisely what the boundary exists to prevent, and Waverley defends it.",
      },
      { type: "h2", text: "Where this leaves you" },
      {
        type: "p",
        text: "The settlement boundary is not a technicality that a good architect can design around. It sets the question. Find out which side of it you are on before you spend money — and if your plot straddles it, find out exactly where the line runs across your garden, because that is where your options change.",
      },
      {
        type: "p",
        text: "We work on both sides of that line every week and we are happy to look at a site and tell you honestly whether a scheme is worth designing. That is the sort of thing local knowledge is actually for, and it is why people use [builders in Cranleigh](/areas/cranleigh) rather than a firm coming down from the M25 corridor who has never opened Waverley's policies map.",
      },
    ],
    faqs: [
      {
        question: "How do I find out if my house is inside Cranleigh's settlement boundary?",
        answer:
          "Search your address on Waverley Borough Council's interactive policies map and turn on the settlement boundaries layer. Check the whole plot, not just the house — long Cranleigh gardens often straddle the line, with the house inside and the bottom of the garden outside.",
      },
      {
        question: "Is Cranleigh in the Green Belt?",
        answer:
          "Cranleigh's built-up area is not in the Green Belt. The land immediately beyond the settlement boundary is designated countryside rather than Green Belt. Rowly, in the same parish, is washed over by the Green Belt. All three designations behave differently, so check which applies to your site rather than assuming.",
      },
      {
        question: "Can I build a new house outside the settlement boundary?",
        answer:
          "Rarely, and not as a straightforward open-market proposal. The routes that do work are replacement dwellings within policy limits, conversion of an existing substantial building, or a rural worker dwelling with genuinely evidenced functional need. Each needs specialist advice before any design work.",
      },
      {
        question: "Does being outside the boundary stop me extending my house?",
        answer:
          "No. Householder extensions to an existing dwelling are normal work outside the boundary — the house already exists. Expect scale and design to be looked at more critically, and expect outbuildings and annexes to be questioned more closely than they would be inside the village.",
      },
      {
        question: "What is a pre-application enquiry and is it worth it?",
        answer:
          "It is a paid enquiry to Waverley that gets you an officer's written view on a proposal before you submit. It costs a few hundred pounds. On anything where the settlement boundary, Green Belt or the conservation area is in play, it is consistently the best value money in the project.",
      },
    ],
    art: BLOG_ART["cranleigh-settlement-boundary"],
  },
  {
    slug: "cranleigh-conservation-area-consent",
    title: "Building inside the Cranleigh Conservation Area: what needs consent",
    category: "Heritage",
    date: "2026-08-24",
    updated: "2026-09-04",
    seoTitle: "Cranleigh Conservation Area | What Needs Planning Consent",
    metaDescription:
      "Inside the Cranleigh Conservation Area, permitted development shrinks and demolition over 115 cubic metres needs permission. What you can and cannot do without consent.",
    excerpt:
      "The Cranleigh Conservation Area covers a large part of the village centre, and inside it several things you would normally just get on with need permission first. Taking down an old garage is the one that catches people.",
    imageAlt:
      "Illustration of a conservation-area street frontage: a row of period shopfronts and cottages with an amber dashed boundary running around them, a demolition volume marked 115 cubic metres flagged for consent, and a rear extension behind the roofline marked as unaffected",
    related: [
      "cranleigh-buildings-of-local-merit",
      "trickle-vents-approved-document-f",
      "cranleigh-neighbourhood-plan-householders",
      "garden-rooms-cranleigh-permitted-development",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "Cranleigh's conservation area was designated **October 1973** and extended in **July 1985** and again in **July 2016**. It is one of **43** in Waverley borough.",
          "Inside it, demolishing an unlisted building of more than **115 cubic metres** needs planning permission. That is a large garage, not a mansion.",
          "Permitted development rights are **cut back**, not removed: cladding, side extensions, roof alterations and some outbuildings that would be permitted elsewhere are not permitted here.",
          "Trees in a conservation area are protected. **Six weeks' written notice** to Waverley is required before work on most of them.",
          "None of this stops good work happening. It changes the order you do things in, and it punishes people who start first and ask later.",
        ],
      },
      {
        type: "p",
        text: "There is a particular phone call we get two or three times a year. Someone has bought a house near the High Street, the tumbledown garage at the side is coming down to make room for the extension, the digger is booked, and somebody at the pub has just mentioned the conservation area. Usually there is still time. Occasionally there is not, and unauthorised demolition in a conservation area is a criminal offence, not a paperwork problem.",
      },
      {
        type: "p",
        text: "Cranleigh's conservation area is not a small designation around the church. It covers a substantial part of the village centre, and it has grown twice since it was first drawn.",
      },
      { type: "h2", text: "What and where it is" },
      {
        type: "p",
        text: "The Cranleigh Conservation Area was **designated in October 1973**, **extended in July 1985**, and **extended again in July 2016**. Waverley Borough Council has **43** conservation areas in total, and it published a character appraisal for Cranleigh's in 2016 alongside the most recent extension. That appraisal is the document that explains what the designation is actually protecting — the historic street pattern, the grain of the frontages, particular groups of buildings and the trees and spaces between them.",
      },
      {
        type: "p",
        text: "It is worth reading it if you own a property inside the boundary. A conservation area is not a blanket ban on change; it is a statutory duty on the council to pay special attention to preserving or enhancing the character and appearance of the area. Knowing what the appraisal says the character *is* tells you which arguments will work.",
      },
      {
        type: "callout",
        title: "Check the boundary, not the postcode",
        text: "The boundary follows historic plot lines, not roads. Two neighbouring houses on the same street can be one in and one out. Search your address on Waverley's interactive policies map with the conservation area layer turned on — and check where the line crosses your garden, not just where your front door is.",
      },
      { type: "h2", text: "Demolition: the 115 cubic metre rule" },
      {
        type: "p",
        text: "This is the one that catches people. Inside a conservation area, **demolishing an unlisted building with a volume of more than 115 cubic metres requires planning permission**. So does demolishing a gate, wall, fence or other means of enclosure over one metre high where it adjoins a highway, waterway or open space, or over two metres high anywhere else.",
      },
      {
        type: "p",
        text: "115 cubic metres sounds like a lot until you measure something. A double garage roughly six metres by six metres with an average height of three and a half metres is about 126 cubic metres. It is over. A generous garden outbuilding can be over. The rule is about volume, not about whether anyone would call the building important.",
      },
      {
        type: "table",
        head: ["Structure", "Rough volume", "Consent needed to demolish?"],
        rows: [
          ["Single garage, 3m × 6m × 2.6m average", "≈ 47 m³", "No — under the threshold"],
          ["Double garage, 6m × 6m × 3.5m average", "≈ 126 m³", "**Yes** — over 115 m³"],
          ["Large garden workshop, 4m × 8m × 3m", "≈ 96 m³", "No — but check the measurement carefully"],
          ["Front boundary wall, 1.4m high, adjoining the road", "n/a", "**Yes** — over 1m and adjoins a highway"],
          ["Rear garden fence, 1.8m high, between two gardens", "n/a", "No — under 2m and not adjoining a highway"],
        ],
        caption: "Volumes are external and include the roof space. Measure before you assume — the difference between 110 m³ and 120 m³ is the difference between getting on with it and committing an offence.",
      },
      {
        type: "quote",
        text: "Nobody sets out to break the law by knocking a garage down. They just measure it by eye and it looks small. Get a tape on it. Ten minutes with a tape measure has saved more than one of my clients a very bad afternoon.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      { type: "h2", text: "Permitted development is reduced, not removed" },
      {
        type: "p",
        text: "The other common misunderstanding is that a conservation area removes permitted development entirely. It does not. It removes specific rights. The ones that matter most on ordinary Cranleigh houses:",
      },
      {
        type: "ul",
        items: [
          "**Cladding.** Applying stone, artificial stone, pebble dash, render, timber, plastic or tiles to the outside of a house is **not** permitted development in a conservation area. It needs planning permission.",
          "**Side extensions.** Extensions beyond a side wall are not permitted development here — a rear extension may still be, a side one is not.",
          "**Two-storey rear extensions** are not permitted development in a conservation area.",
          "**Roof extensions and dormers.** Additions to the roof are not permitted development, which is the single biggest constraint on loft conversions inside the boundary. See [our post on which Cranleigh roofs work for a conversion](/blog/loft-conversions-cranleigh-roof-types).",
          "**Outbuildings to the side** of the house, and buildings with more than one storey, are outside permitted development here.",
          "**Satellite dishes and some flues** on front or side elevations facing a highway.",
        ],
      },
      {
        type: "p",
        text: "What generally *does* survive is a modest single-storey rear extension within the normal permitted development limits, plus a single-storey outbuilding to the rear within the usual height and area rules. That is a real amount of useful space, and plenty of good projects live entirely inside it.",
      },
      { type: "h2", text: "Trees: six weeks, in writing" },
      {
        type: "p",
        text: "Every tree in a conservation area above a modest size threshold is protected as if it had a Tree Preservation Order, whether or not one exists. Before pruning or felling, you must give the council **six weeks' written notice**, which gives Waverley the chance to make a TPO if it thinks the tree warrants one.",
      },
      {
        type: "p",
        text: "Six weeks is a long time in a build programme, and tree work is often on the critical path — you cannot get a piling rig into a back garden past a tree you are not allowed to touch yet. It is also worth remembering that the tree may be setting your foundation depth in the first place, which is a separate and more expensive problem: see [trees and foundation depth in Cranleigh](/blog/trees-and-foundation-depth-cranleigh).",
      },
      {
        type: "callout",
        title: "The saving",
        text: "Serve the tree notice and submit any demolition application **at the same time as the main planning application**, not after it is approved. Run in parallel they cost you nothing in programme. Run in sequence they add six to twelve weeks to the start on site — which, on a project where you are paying for somewhere else to live, is real money.",
      },
      { type: "h2", text: "The order to do things in" },
      {
        type: "ol",
        items: [
          "**Confirm the boundary** on Waverley's policies map, and check whether the building is also listed or on the borough's local list — that is a separate and stricter regime, covered in [the second list your house might be on](/blog/cranleigh-buildings-of-local-merit).",
          "**Read the 2016 character appraisal** for the part of the area you are in. It tells you what the officer is protecting.",
          "**Measure anything you intend to demolish**, in cubic metres, externally.",
          "**Book a pre-application enquiry** if the scheme touches a frontage, a roof, or anything visible from the street.",
          "**Serve the six-week tree notice early**, in parallel with everything else.",
          "**Design with the appraisal in hand.** Schemes that reference the existing grain, materials and roof forms get through. Schemes that ignore them get refused and redesigned at your cost.",
        ],
      },
      {
        type: "p",
        text: "None of this makes a conservation area a bad place to own a house. It is why the middle of Cranleigh looks the way it does. It does mean the sequencing matters more than it would three miles up the road, which is a good reason to use [builders in Cranleigh](/areas/cranleigh) who deal with Waverley's conservation team as a matter of routine rather than as an unwelcome surprise.",
      },
    ],
    faqs: [
      {
        question: "Do I need permission to demolish a garage in the Cranleigh Conservation Area?",
        answer:
          "If the building's volume is more than 115 cubic metres, yes — demolition of an unlisted building above that threshold inside a conservation area needs planning permission. A typical double garage is around 126 cubic metres, so it is over. Measure it externally, including the roof space, before assuming.",
      },
      {
        question: "Can I still do a rear extension in the conservation area without planning permission?",
        answer:
          "A modest single-storey rear extension within the normal permitted development limits usually still qualifies. Side extensions, two-storey rear extensions, roof alterations and cladding do not — those rights are removed inside a conservation area and need a planning application.",
      },
      {
        question: "When was the Cranleigh Conservation Area designated?",
        answer:
          "It was designated in October 1973 and extended twice, in July 1985 and July 2016. Waverley Borough Council published a character appraisal alongside the 2016 extension. It is one of 43 conservation areas in the borough.",
      },
      {
        question: "Do I need permission to cut down a tree in a conservation area?",
        answer:
          "You must give Waverley six weeks' written notice before pruning or felling most trees in a conservation area, whether or not the tree has a Tree Preservation Order. During those six weeks the council can make a TPO. Serve the notice early — six weeks on the critical path is expensive.",
      },
      {
        question: "Can I render or clad my house in a conservation area?",
        answer:
          "Not as permitted development. Applying render, cladding, stone, tiles or pebble dash to the exterior of a house in a conservation area needs planning permission, and whether it is granted depends on whether it preserves or enhances the character of the area as described in the appraisal.",
      },
    ],
    art: BLOG_ART["cranleigh-conservation-area-consent"],
  },
  {
    slug: "part-l-extension-insulation",
    title: "Part L and why your extension needs more insulation than the house",
    category: "Insulation & energy",
    date: "2026-08-21",
    updated: "2026-09-04",
    seoTitle: "Part L Extension U-Values 2026 | Insulation Rules Explained",
    metaDescription:
      "New extensions must hit far tighter U-values than the house they join: 0.18 for walls and floors, 0.15 for roofs. What that does to your wall thickness and your budget.",
    excerpt:
      "Your new extension has to be dramatically better insulated than the house it is bolted onto. That means thicker walls, and thicker walls eat the floor area you are paying for. Better to know that at design stage than at first fix.",
    imageAlt:
      "Illustration of a house in section with the original solid wall on the left shown thin and poorly insulated, and the new extension on the right shown with a thicker build-up, an amber insulation layer and U-value labels for wall, roof and floor",
    related: [
      "trickle-vents-approved-document-f",
      "building-control-completion-certificate",
      "extending-1930s-semi-cranleigh",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "New parts of an extension must meet **Table 4.2 of Approved Document L, Volume 1 (2021 edition)**: walls **0.18**, floors **0.18**, roofs **0.15**, windows and doors **1.4**, rooflights **2.2** W/m²K.",
          "You do **not** have to bring the existing house up to the same standard. Only the new work is tested.",
          "Hitting 0.18 in a cavity wall typically means a **300–330mm build-up** rather than the 260mm of a 1970s house. That is floor area you lose from inside.",
          "Glazing in the extension is normally capped at **25% of the new floor area**, plus the area of any openings you are closing up.",
          "There is a compliance route that trades one element against another. Used properly it is what lets you have the wall of glass you wanted.",
        ],
      },
      {
        type: "p",
        text: "Almost every extension client has the same moment of confusion at some point in the design. They are being asked to pay for an extension built to a far higher standard than the house it is joining, and it feels absurd. The 1930s semi has nine-inch solid brick walls with nothing in them at all. The new bit has to hit 0.18. Why?",
      },
      {
        type: "p",
        text: "The answer is not satisfying but it is simple: the regulations apply to the work being done. New building work is held to today's standard. Nobody is going to make you insulate the existing house, and nobody is going to let you build the new bit to 1930s standards either.",
      },
      { type: "h2", text: "The numbers you are actually being held to" },
      {
        type: "p",
        text: "Approved Document L Volume 1 (2021 edition) sets the standards for new thermal elements in existing dwellings. These are the figures your building control officer is checking against:",
      },
      {
        type: "table",
        head: ["Element", "Maximum U-value (W/m²K)", "What that means in practice"],
        rows: [
          ["Wall", "0.18", "Roughly 100–150mm of insulation in the cavity or a full-fill cavity plus insulated plasterboard, depending on product"],
          ["Floor", "0.18", "Typically 100–150mm of rigid insulation under the slab or screed"],
          ["Roof (pitched or flat)", "0.15", "The tightest of the lot — a cold flat roof at 0.15 is a deep build-up, which is why warm-roof construction is now the default"],
          ["Windows and doors", "1.4", "Standard modern double glazing hits this comfortably; poor units do not"],
          ["Rooflights", "2.2", "Measured in the vertical plane; a large lantern is a real heat loss and needs to be designed for"],
        ],
        caption: "Source: Approved Document L, Volume 1 (2021 edition), Table 4.2 — the standards for new thermal elements. Lower is better.",
      },
      {
        type: "p",
        text: "The roof figure is the one that surprises builders as well as homeowners. 0.15 W/m²K in a flat roof is not achievable with a token layer of insulation between joists, which is why almost every flat roof we build now is a warm-deck construction with the insulation above the structural deck. It costs more per square metre and it is worth every penny, because a cold flat roof at that standard is an interstitial condensation risk waiting to happen.",
      },
      { type: "h2", text: "The bit nobody warns you about: your walls get fatter" },
      {
        type: "p",
        text: "This is the practical consequence people are not told at design stage, and it is the one that costs them.",
      },
      {
        type: "p",
        text: "A typical 1970s cavity wall is around 260mm thick. A modern wall built to 0.18 is more commonly **300 to 330mm**, depending on the insulation product and whether you are using a full-fill or partial-fill cavity. On a 5m × 6m extension with three external walls, that extra 50–60mm of wall thickness costs you somewhere between half and three-quarters of a square metre of internal floor area.",
      },
      {
        type: "p",
        text: "At Surrey extension rates of **£2,700–£3,100 per m²** — the range we quote and the range on our [extension cost guide](/guides/house-extension-costs-surrey) — that is £1,500 to £2,300 of floor area you have paid for and cannot use. It also matters far more than the money if you are working to a fixed internal dimension: a room that has to take a 3m kitchen run, or a bedroom that has to take a double bed and a wardrobe, can fail on 60mm.",
      },
      {
        type: "quote",
        text: "The drawing says four metres internally and everyone assumes that is what you get. Then the wall build-up comes back at 330mm and it is 3.88. If you have already ordered a kitchen to fit four metres, that is a very expensive 120 millimetres.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      {
        type: "callout",
        title: "The saving",
        text: "Ask your designer for the **actual wall build-up in millimetres**, and the **internal** dimensions, before you order anything made to measure — kitchens, wardrobes, sliding doors, bookcases. It costs nothing to ask and it is the single most common source of \"but the drawing said\" arguments on site.",
      },
      { type: "h2", text: "The glazing cap, and how to get round it honestly" },
      {
        type: "p",
        text: "There is a second rule that catches the people who want the extension to be mostly glass. The standard route through Part L limits the total area of windows, doors and rooflights in the extension to **25% of the extension's floor area**, plus the area of any existing openings that are being closed up as part of the work.",
      },
      {
        type: "p",
        text: "On a 30m² extension that is 7.5m² of glazing, plus whatever the old back door and window added up to. A 4m bifold set alone is about 8m² before you have added a single rooflight, so on the standard route a big glazed rear elevation fails.",
      },
      {
        type: "p",
        text: "The way through is not to argue. It is to use the alternative compliance route, where the extension is assessed as a whole against a notional equivalent — you demonstrate that the design is no worse overall than a compliant one. Improve the walls, roof and floor beyond the minimum, specify better glass, and you buy back the glazing area.",
      },
      {
        type: "table",
        head: ["What you want", "Standard route", "Calculation route"],
        rows: [
          ["25% glazing or less", "Passes. Cheapest and simplest.", "Not needed."],
          ["A 4m bifold on a 30m² extension", "Fails.", "Passes if the fabric elsewhere is improved to compensate."],
          ["Bifolds plus two large rooflights", "Fails comfortably.", "Usually achievable, but expect to spend on triple glazing or better insulation to get there."],
          ["A near-fully glazed garden room", "Fails.", "May still fail. This is the point to involve an energy assessor early rather than late."],
        ],
        caption: "The calculation route costs a few hundred pounds in assessor's fees. It is far cheaper than redesigning a rear elevation after building control refuses it.",
      },
      { type: "h2", text: "What this costs, and where it pays back" },
      {
        type: "p",
        text: "Building to current Part L rather than to the standard of the existing house adds real money to the build — realistically a few thousand pounds on a typical single-storey extension once you have counted the insulation, the better glazing, the warm-roof build-up and the extra wall thickness.",
      },
      {
        type: "p",
        text: "It is also the part of the spend with the clearest return. A modern extension built to 0.18 and 0.15 costs a fraction of the existing house per square metre to heat. In practice the new room ends up being the warm room, and the family lives in it. That is not an argument we invented — it is what clients tell us a year later.",
      },
      {
        type: "callout",
        title: "Worth knowing",
        text: "If you are extending anyway, the marginal cost of upgrading the **adjoining** parts of the existing house at the same time — insulating the loft above, or the wall you have already opened up — is a fraction of doing it as a separate job later. The scaffold is up, the trades are there, and the disruption is already happening. This is the single best value energy work most houses ever get.",
      },
      { type: "h2", text: "Questions to ask before you sign anything" },
      {
        type: "ol",
        items: [
          "**What is the wall build-up, in millimetres?** And what are the resulting internal dimensions of each room?",
          "**Which compliance route are we using** — the elemental standards or a whole-extension calculation? If the latter, who is doing the calculation and is it in the price?",
          "**What is the total glazed area** as a percentage of the new floor area?",
          "**Is the flat roof a warm deck or a cold deck?** If cold, ask how 0.15 is being achieved and where the vapour control layer sits.",
          "**Is the insulation specified by product and thickness** in the quotation, or just as \"insulation to Building Regs\"? The second is where value engineering happens without you being told.",
        ],
      },
      {
        type: "p",
        text: "We price insulation by product and thickness, and we give internal dimensions off the build-up rather than off the drawing, because those are the two places extension budgets quietly leak. If you want a quote read over before you commit to it, that is something we do for people locally — it is part of the job of being [builders in Cranleigh](/areas/cranleigh) rather than a firm that appears for a fortnight and leaves.",
      },
    ],
    faqs: [
      {
        question: "Do I have to insulate my existing house when I build an extension?",
        answer:
          "No. Approved Document L applies to the new work. The existing walls, floors and roof are not required to be upgraded to the new standard. The exception is any existing element you are substantially altering as part of the work — and it is usually worth doing the adjoining parts anyway, because the marginal cost while the trades are already on site is small.",
      },
      {
        question: "What U-values does an extension have to achieve?",
        answer:
          "Under Table 4.2 of Approved Document L Volume 1 (2021 edition): walls 0.18, floors 0.18, roofs 0.15, windows and doors 1.4 and rooflights 2.2 W/m²K. Lower numbers mean better insulation, and these are maximums rather than targets.",
      },
      {
        question: "How much floor area do I lose to thicker walls?",
        answer:
          "A modern wall built to 0.18 is typically 300–330mm thick against about 260mm for a 1970s cavity wall. On a 5m by 6m extension with three external walls that is roughly half to three-quarters of a square metre of internal floor area — around £1,500 to £2,300 at Surrey extension rates. Always work from internal dimensions, not the drawing's external ones.",
      },
      {
        question: "Can I have bifold doors and rooflights and still pass Part L?",
        answer:
          "Usually yes, but not on the standard route, which caps glazing at 25% of the extension's floor area plus any openings closed up. Use the whole-extension calculation route instead and compensate with better insulation and glazing elsewhere. Involve an energy assessor at design stage — it costs a few hundred pounds and saves redesigning the rear elevation later.",
      },
      {
        question: "Is a warm roof or a cold roof better for a flat-roofed extension?",
        answer:
          "For a new extension, warm deck — insulation above the structural deck — is now the default. Achieving 0.15 W/m²K in a cold-deck flat roof requires a very deep build-up and carries a real interstitial condensation risk. Warm roofs cost more per square metre and are worth it.",
      },
    ],
    art: BLOG_ART["part-l-extension-insulation"],
  },
  {
    slug: "cranleigh-neighbourhood-plan-householders",
    title: "The Cranleigh Neighbourhood Plan: what it changed for householders",
    category: "Planning & surveys",
    date: "2026-08-19",
    updated: "2026-09-04",
    seoTitle: "Cranleigh Neighbourhood Plan | What It Means For Homeowners",
    metaDescription:
      "Cranleigh's Neighbourhood Plan was made on 15 July 2024 and is now part of the development plan. What that means when you apply to extend your house.",
    excerpt:
      "Since 15 July 2024 Cranleigh has had its own statutory planning policies, written locally and applied by Waverley. If you are extending here, there is now a second document your application is judged against — and most people have never read it.",
    imageAlt:
      "Illustration of a planning document with an amber seal marked made, sitting alongside a map of a village with green space and garden plots highlighted, and a smaller borough plan document behind it",
    related: [
      "cranleigh-settlement-boundary",
      "cranleigh-conservation-area-consent",
      "extension-value-cranleigh",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "The Cranleigh Neighbourhood Plan was **made on 15 July 2024** and now forms part of the statutory development plan for the parish.",
          "That means Waverley must **determine applications in accordance with it**, alongside the Local Plan, unless material considerations say otherwise.",
          "It matters most to householders through its **design and character policies**, its protection of **residential gardens**, and its **parking** expectations.",
          "It is a local document written by local people. Officers use it. Almost no applicant quotes it.",
          "Quoting the plan's own words back in your design and access statement is free, takes an hour, and demonstrably helps.",
        ],
      },
      {
        type: "p",
        text: "There is an odd asymmetry in the planning system. Councils are legally required to determine applications in accordance with the development plan. The development plan for Cranleigh now includes a document written by Cranleigh people about what Cranleigh should look like. And in our experience almost no householder application from this village mentions it at all.",
      },
      {
        type: "p",
        text: "That is a free advantage sitting on the table. This post is about what the plan is, what it changed, and how to use it.",
      },
      { type: "h2", text: "What \"made\" means, and why the date matters" },
      {
        type: "p",
        text: "A neighbourhood plan goes through consultation, independent examination and a local referendum before a council formally \"makes\" it. Cranleigh's was **made on 15 July 2024**, by Waverley Borough Council under delegated authority. From that date it stopped being an aspiration and became policy.",
      },
      {
        type: "p",
        text: "The legal effect is set out in the Planning and Compulsory Purchase Act 2004: planning applications must be determined in accordance with the development plan unless material considerations indicate otherwise. The neighbourhood plan is part of that development plan. It carries the same statutory weight as Waverley's Local Plan policies — a point worth remembering if an officer or a neighbour tells you it is only advisory.",
      },
      {
        type: "callout",
        title: "Two documents, not one",
        text: "Your application in Cranleigh is now judged against **both** Waverley's Local Plan and the Cranleigh Neighbourhood Plan. Where they cover the same ground, the more recently adopted policy generally carries more weight. A design that complies with the borough policy but ignores the local one is only half-answered.",
      },
      { type: "h2", text: "The parts that affect an ordinary householder" },
      {
        type: "p",
        text: "Much of the plan is about site allocations — the specific pieces of land the village accepted for housing, which between them account for a modest number of dwellings. Those matter enormously if you own one of those sites and not at all if you are extending a semi on a side road. The parts that reach into ordinary householder applications are narrower and worth knowing.",
      },
      { type: "h3", text: "Design and local character" },
      {
        type: "p",
        text: "The plan's design policies (CRAN2 and CRAN3 in the examined plan) ask for high quality design that preserves and enhances the village feel and local character, and that maintains identified vistas and views. That is a lever in both directions. If your scheme sits comfortably in its street, say so and say why — materials, roof form, ridge height, the rhythm of the frontage. If it does not, expect an officer to have a policy to hang a refusal on that did not exist before July 2024.",
      },
      { type: "h3", text: "Gardens" },
      {
        type: "p",
        text: "Policy CRAN13 states that residential gardens are very important to the character of Cranleigh and to its biodiversity. This is the one householders underestimate. It gives officers a policy basis to push back on schemes that consume a disproportionate share of a plot, or that pave over most of a garden for parking. If your extension leaves a decent, usable, planted garden, that is a positive to state explicitly rather than leave implied.",
      },
      { type: "h3", text: "Parking" },
      {
        type: "p",
        text: "Policy CRAN16 requires developments to be supported by appropriate car and cycle parking. On a householder application this bites when you add bedrooms. Turning a three-bed into a five-bed with no change to the driveway invites a highways comment, and highways comments are one of the commonest reasons a straightforward-looking application drifts by six weeks.",
      },
      {
        type: "quote",
        text: "Adding a bedroom is a parking application as well as a building one. If you can show two cars still park off the road without blocking each other in, put it on the drawing. It answers the objection before anyone raises it.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      { type: "h2", text: "How to actually use it" },
      {
        type: "p",
        text: "The practical technique is unglamorous and it works. Read the plan — it is on Cranleigh Parish Council's website — find the two or three policies your scheme touches, and answer them by name in your design and access statement.",
      },
      {
        type: "ol",
        items: [
          "**Download the made plan** from Cranleigh Parish Council and skim it for the policies that apply to your type of application. For most householders that is the design, character, garden and parking policies.",
          "**Quote the policy number and its own wording** in your statement, then say in one or two sentences how the design responds to it.",
          "**Deal with the garden explicitly.** State how much usable garden remains after the extension, and what happens to planting and permeable surfacing.",
          "**Deal with parking explicitly** if you are adding bedrooms. Show the spaces on the block plan.",
          "**Say what the design takes from its neighbours** — ridge height, eaves line, brick, tile, window proportion. This is the character argument, and it is the one that gets schemes through.",
          "**Check the constraints layers too.** The neighbourhood plan sits on top of the [settlement boundary](/blog/cranleigh-settlement-boundary) and, in the village centre, the [conservation area](/blog/cranleigh-conservation-area-consent). They are separate tests.",
        ],
      },
      {
        type: "callout",
        title: "The saving",
        text: "A householder application in England costs **£548 since 1 April 2026**, rising to roughly £575 from 8 December 2026, and a refusal costs you that fee plus the redesign plus, typically, three to five months. Answering the local policies by name in the first submission is an hour's work with a genuine effect on the odds. It is the cheapest risk reduction in the whole process.",
      },
      { type: "h2", text: "What it does not do" },
      {
        type: "p",
        text: "Two things worth saying plainly, because the plan gets blamed for both.",
      },
      {
        type: "ul",
        items: [
          "**It does not remove permitted development rights.** If your scheme is permitted development, the neighbourhood plan does not change that. Permitted development is national legislation; a neighbourhood plan is local policy for applications. (An Article 4 direction is the tool that removes permitted development, and that is a separate thing entirely.)",
          "**It does not stop development.** It shapes it, and it allocated sites for housing itself. A plan that refused everything would not have passed examination.",
        ],
      },
      {
        type: "p",
        text: "The plan is, on balance, good news for a householder who wants to build something that fits. It is bad news for a scheme that ignores its street. That is more or less what the village voted for.",
      },
      {
        type: "p",
        text: "We deal with Waverley's planning department constantly and we read the local policy because it changes what gets approved here. If you want a view on whether a scheme is likely to fly before you commission the drawings, ask — that is the kind of thing you should expect from [builders in Cranleigh](/areas/cranleigh) who work in this parish week in, week out.",
      },
    ],
    faqs: [
      {
        question: "When was the Cranleigh Neighbourhood Plan made?",
        answer:
          "It was made on 15 July 2024 by Waverley Borough Council under delegated authority, following examination and a local referendum. From that date it forms part of the statutory development plan for the parish and applications must be determined in accordance with it.",
      },
      {
        question: "Does the Neighbourhood Plan apply to my house extension?",
        answer:
          "Yes, if you need planning permission. Its design, character, garden and parking policies apply to householder applications alongside Waverley's Local Plan. It does not apply if your work is permitted development, because permitted development is national legislation rather than a local application.",
      },
      {
        question: "Does the Neighbourhood Plan take away permitted development rights?",
        answer:
          "No. Permitted development rights come from national legislation and are only removed by an Article 4 direction, by a planning condition, or by the property being in a conservation area or listed. A neighbourhood plan sets policy for applications that need permission.",
      },
      {
        question: "How much weight does a neighbourhood plan carry against the borough Local Plan?",
        answer:
          "Both are part of the development plan and carry statutory weight. Where they overlap, the more recently adopted policy generally carries more weight. In practice an application in Cranleigh needs to answer both, and most applications only answer the borough policies.",
      },
      {
        question: "Where can I read the Cranleigh Neighbourhood Plan?",
        answer:
          "The made version is published on Cranleigh Parish Council's website and referenced on Waverley Borough Council's neighbourhood planning pages. Read the policies that apply to your type of application and quote them by number in your design and access statement.",
      },
    ],
    art: BLOG_ART["cranleigh-neighbourhood-plan-householders"],
  },
  {
    slug: "cranleigh-buildings-of-local-merit",
    title: "Cranleigh heritage: the second list your house might be on",
    category: "Heritage",
    date: "2026-08-17",
    updated: "2026-09-04",
    seoTitle: "Buildings of Local Merit Cranleigh | The Second Heritage List",
    metaDescription:
      "Cranleigh parish has more than eighty listed buildings — and a second, local list that most owners have never heard of. What being on it does to your plans.",
    excerpt:
      "Everyone knows about listed buildings. Far fewer know about the local list, which carries no criminal sanction, requires no consent, and can still lose you a planning application if you ignore it.",
    imageAlt:
      "Illustration of two heritage certificates side by side: a formal national listing with a crown seal on the left, and a lighter local list document with an amber seal on the right, above a row of village cottages",
    related: [
      "cranleigh-conservation-area-consent",
      "cranleigh-neighbourhood-plan-householders",
      "trickle-vents-approved-document-f",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "Cranleigh parish contains **81 nationally listed buildings** — 80 Grade II and one Grade II*, the church of St Nicolas — per the Cranleigh Neighbourhood Plan.",
          "There is a **second list**: locally identified buildings of merit, which are **non-designated heritage assets** in planning terms.",
          "Being on the local list needs **no consent** to alter and creates **no offence** — but it is a material planning consideration and it changes how an application is judged.",
          "The national test is a **balanced judgement** having regard to the scale of harm and the significance of the asset. That is a real test, and applications fail it.",
          "Check both lists before you design. Historic England's National Heritage List is free and searchable; the local list sits with Waverley.",
        ],
      },
      {
        type: "p",
        text: "There are two ways a building in Cranleigh can be considered historically important, and only one of them comes with a letter through the door that people remember receiving.",
      },
      {
        type: "p",
        text: "The first is national listing, and everybody understands it. The second is a local list of buildings identified as making a positive contribution to the character of the area. Owners frequently do not know their house is on it. They find out when a planning officer mentions it in a report — which is a bad moment to find out, because by then the drawings are done.",
      },
      { type: "h2", text: "The national list" },
      {
        type: "p",
        text: "The Cranleigh Neighbourhood Plan records **81 nationally listed buildings** in the parish: 80 at Grade II, and one at Grade II* — the parish church of St Nicolas, spelt with one l, which catches out more people than you would expect, including the odd consultant. Grade II* is the top eight per cent or so of listed buildings nationally. The stock is predominantly 15th to 17th century timber-framed, refronted in brick or stone in the 18th and 19th.",
      },
      {
        type: "p",
        text: "Listing is a national designation made by the Secretary of State on advice from Historic England, and it is serious. The building is protected in its entirety, inside and out, including later additions and often including structures within its curtilage. Altering it in a way that affects its special interest without **listed building consent** is a criminal offence, and unlike most planning breaches there is no time limit after which it becomes lawful.",
      },
      {
        type: "callout",
        title: "Check it yourself, free",
        text: "Search your address on Historic England's **National Heritage List for England**. It gives you the grade, the list entry number and the official description of what is significant about the building. That description is the single most useful document you will read before designing anything, because it tells you what a conservation officer is protecting.",
      },
      { type: "h2", text: "The local list, and why it still matters" },
      {
        type: "p",
        text: "Alongside national listing, local authorities maintain lists of buildings that are locally important — often described as buildings of local merit — without meeting the national threshold. In planning terms these are **non-designated heritage assets**. In Cranleigh parish there are **174 of them**, according to the Cranleigh Neighbourhood Plan, against 81 nationally listed buildings. So a house here is more than twice as likely to be on the list nobody has heard of as on the one everybody has.",
      },
      {
        type: "p",
        text: "The distinction that matters is this:",
      },
      {
        type: "table",
        head: ["", "Listed building", "Locally listed / non-designated"],
        rows: [
          ["Who designates it", "The Secretary of State, on Historic England's advice", "The local authority, from local evidence"],
          ["Consent needed to alter", "**Yes** — listed building consent, separate from planning permission", "No separate consent"],
          ["Offence to alter without consent", "**Yes** — a criminal offence, with no time limit", "No"],
          ["Effect on a planning application", "Very strong protection; substantial harm is exceptionally hard to justify", "A material consideration; harm is weighed in a balanced judgement"],
          ["Permitted development", "Heavily restricted", "Unaffected by the listing itself"],
          ["Practical effect on your project", "Everything changes — programme, materials, cost", "Design and justification have to work harder; programme usually unaffected"],
        ],
        caption: "Two different regimes. People treat the second as if it were nothing, which is where applications come unstuck.",
      },
      {
        type: "p",
        text: "National policy is explicit about the weight given to a non-designated heritage asset: in weighing an application affecting one, a balanced judgement is required, having regard to the scale of any harm or loss and the significance of the asset. That is not a rubber stamp and it is not a veto. It is a genuine test, and a scheme that demolishes or obscures the very thing the building was listed locally for will fail it.",
      },
      {
        type: "quote",
        text: "The local list is not a problem, it is information. If someone has written down what is good about your house, that is a head start on designing something that will get approved. The people who come unstuck are the ones who never looked.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      { type: "h2", text: "What actually changes on site" },
      {
        type: "p",
        text: "If your building is nationally listed, almost everything changes. Realistically:",
      },
      {
        type: "ul",
        items: [
          "**Consent runs in parallel with planning**, and listed building consent has its own application, its own drawings and its own justification. Allow for the full determination period, and allow for a conservation officer's comments coming back mid-way.",
          "**Materials are specified, not chosen.** Lime mortar rather than cement, traditional plaster, matched bricks, hand-dressed lead. These are slower to work with and need trades who know them.",
          "**Cost per square metre rises.** Our own heritage rate sits between **£3,400 and £4,200 per m²**, against £2,700–£3,100 for a standard extension — the difference is skill, materials and time, not margin. Those figures are on our [pricing page](/pricing).",
          "**Regulations get balanced against significance.** This is the case where the usual answer on things like [trickle vents](/blog/trickle-vents-approved-document-f) is genuinely negotiable — but negotiated in advance, with building control, not decided on site.",
          "**Recording matters.** Photograph and record what is there before you touch it. It protects you as much as the building.",
        ],
      },
      {
        type: "p",
        text: "If your building is only locally listed, the programme is usually normal and the cost is usually normal. What changes is the application: the design has to acknowledge what the building contributes, and the statement has to say so. A scheme that keeps the frontage, respects the roof line and puts the new work behind will almost always be fine. A scheme that removes the feature the building is known for will not.",
      },
      {
        type: "callout",
        title: "The saving",
        text: "Find out which list you are on **before** you commission drawings. A listed building consent application designed from the list description is a different, cheaper animal from one designed in ignorance and then redrawn after the conservation officer's comments. We have seen the redraw cost more than the original design fee, and add four months.",
      },
      { type: "h2", text: "The five-minute check" },
      {
        type: "ol",
        items: [
          "**Search the National Heritage List for England** for your address. Note the grade and read the list description in full.",
          "**Check Waverley's local list** and its conservation area layer on the interactive policies map. A building can be on the local list, in the [conservation area](/blog/cranleigh-conservation-area-consent), or both.",
          "**Check the curtilage.** Outbuildings, walls and structures within the curtilage of a listed building, pre-dating July 1948, can be protected as part of the listing even though nobody ever listed them separately. This is the single most common unpleasant surprise.",
          "**Check your neighbours.** Work that affects the setting of a nearby listed building is a material consideration even if your own house is entirely unprotected.",
          "**Book a pre-application enquiry** if any of the above returns a hit. On heritage work it is the best money in the project.",
        ],
      },
      {
        type: "p",
        text: "Heritage work is a large part of what we do, and it is the part where local knowledge earns its keep — knowing which conservation officer will want what, and which specialist trades are available in this part of Surrey. If you have a period house here and you are not sure what you are dealing with, that is exactly the conversation to have with [builders in Cranleigh](/areas/cranleigh) before anything is drawn.",
      },
    ],
    faqs: [
      {
        question: "How do I find out if my house is listed?",
        answer:
          "Search your address on Historic England's National Heritage List for England. It is free and it gives you the grade, the list entry number and the official description of what is significant. Also check whether outbuildings or walls in the curtilage that pre-date July 1948 are covered by the same listing.",
      },
      {
        question: "What is a building of local merit, and do I need consent to alter one?",
        answer:
          "It is a building the council has identified as locally important without meeting the national listing threshold — a non-designated heritage asset in planning terms. You do not need any separate consent to alter it, and altering it is not an offence. But it is a material planning consideration, and an application affecting it is judged on a balanced view of the harm caused against the building's significance.",
      },
      {
        question: "How many listed buildings are there in Cranleigh?",
        answer:
          "81, according to the Cranleigh Neighbourhood Plan — 80 at Grade II and one at Grade II*, the church of St Nicolas, spelt with one l. There are also 174 Buildings of Local Merit, which are non-designated heritage assets rather than listed buildings.",
      },
      {
        question: "Does being locally listed stop me extending?",
        answer:
          "No. It means the application has to acknowledge what the building contributes and explain how the design responds. Schemes that keep the significant frontage and put new work behind or to the rear are routinely approved. Schemes that remove the feature the building was listed for are the ones that fail.",
      },
      {
        question: "How much more does work on a listed building cost?",
        answer:
          "Our heritage rate runs between £3,400 and £4,200 per square metre against £2,700 to £3,100 for standard extension work. The difference is traditional materials, specialist trades and the slower pace the fabric demands, plus the additional consent process running alongside the planning application.",
      },
    ],
    art: BLOG_ART["cranleigh-buildings-of-local-merit"],
  },
  {
    slug: "building-control-completion-certificate",
    title: "Building control: what a completion certificate is actually for",
    category: "Building control",
    date: "2026-08-17",
    updated: "2026-09-04",
    seoTitle: "Building Control Completion Certificate | Why You Need One",
    metaDescription:
      "A completion certificate is the document that proves your building work was signed off. Without it, buyers' solicitors stall, and indemnity insurance is not a fix.",
    excerpt:
      "The completion certificate is the single most valuable piece of paper your build produces, and the one most likely to be quietly forgotten. It costs nothing extra to get at the time and thousands to work around later.",
    imageAlt:
      "Illustration of a completion certificate with an amber stamp, sitting on a house sale file beside a set of keys, with a rejected indemnity policy shown behind it",
    related: [
      "part-l-extension-insulation",
      "trickle-vents-approved-document-f",
      "extension-value-cranleigh",
      "retention-snagging-practical-completion",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "A **completion certificate** is issued by building control when the work has been inspected and found to comply. It is not the same as planning permission and not the same as a final invoice.",
          "It is the document a **buyer's solicitor** asks for. Missing paperwork is one of the most common causes of a conveyancing delay on an extended house.",
          "**Indemnity insurance is not a substitute.** It protects against enforcement, not against the work being wrong.",
          "You get it by **booking the final inspection** — and the reason most people do not have one is simply that nobody booked it.",
          "There is no charge for the certificate itself. The inspection is already in the fee you paid at the start.",
        ],
      },
      {
        type: "p",
        text: "The most expensive piece of paper in a building project is the one that does not exist. We have been called into houses years after somebody else's extension was built, not to fix anything structural, but because a sale has stalled and the seller cannot produce a completion certificate for work done in 2019.",
      },
      {
        type: "p",
        text: "It is a solvable problem. It is also an entirely avoidable one, and it costs nothing to avoid at the time.",
      },
      { type: "h2", text: "What the certificate is, and what it is not" },
      {
        type: "p",
        text: "Building control regulates how a building is constructed: structure, fire safety, drainage, ventilation, insulation, stairs, safe glazing. It is a separate process from planning, which regulates whether the building should be there and what it looks like. You can have full planning permission and be in breach of building regulations, and vice versa. They are different departments, different applications and different pieces of paper.",
      },
      {
        type: "p",
        text: "At the end of the job, if the inspections have been carried out and the work complies, building control issues a **completion certificate**. That certificate is your evidence — for a buyer, a lender, an insurer or a future building control officer — that the work was done properly and checked.",
      },
      {
        type: "table",
        head: ["Document", "What it proves", "Who asks for it"],
        rows: [
          ["Planning permission / decision notice", "The council agreed the building could be there, in that form", "Buyer's solicitor, on anything that needed permission"],
          ["**Building regulations completion certificate**", "The construction was inspected and complies", "Buyer's solicitor, lender, insurer — every time"],
          ["FENSA / CERTASS certificate", "Replacement windows and doors comply and were self-certified", "Buyer's solicitor, on any window replacement since April 2002"],
          ["Electrical installation certificate (Part P)", "Notifiable electrical work was carried out and certified competently", "Buyer's solicitor, and increasingly insurers"],
          ["Structural engineer's calculations", "The steel and foundations were designed, not guessed", "Building control during the job; occasionally a buyer's surveyor after"],
        ],
        caption: "Keep all of these in one folder from day one. Reassembling them five years later is where the cost is.",
      },
      { type: "h2", text: "The two ways people end up without one" },
      {
        type: "p",
        text: "In our experience it is almost never dishonesty. It is one of two things.",
      },
      {
        type: "p",
        text: "**Nobody booked the final inspection.** The job finished, the scaffold came down, everybody moved on, and the last visit never happened. The work is fine. The file is simply still open. This is by far the most common case, and it is the easiest to fix if you notice within a reasonable time — often a phone call and a visit.",
      },
      {
        type: "p",
        text: "**The work was never notified at all.** Somebody decided the job was small enough not to bother. Removing a chimney breast, moving a load-bearing wall, replacing a flat roof, installing a new bathroom in a room that never had one, changing the windows — these are all notifiable, and all routinely done without notification.",
      },
      {
        type: "quote",
        text: "The final inspection is free. It is already in the fee you paid at the beginning. The number of houses I have been into where the whole job is sound and the only thing missing is a phone call somebody forgot to make is genuinely depressing.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      { type: "h2", text: "Why indemnity insurance is not the answer" },
      {
        type: "p",
        text: "When a sale hits this problem, the estate agent usually suggests an indemnity policy. They are cheap, they are quick, and they are widely accepted, so it is worth being clear about what they actually do.",
      },
      {
        type: "p",
        text: "A building regulations indemnity policy insures against **the local authority taking enforcement action**. That is all. It does not confirm the work complies. It does not protect the buyer against the steel being undersized, the foundations being shallow, or the flat roof having no ventilation. It insures against a risk that, for older work, was already close to nil — local authority enforcement powers under the Building Act are time-limited in ways that make action on old work unlikely anyway.",
      },
      {
        type: "callout",
        title: "The catch nobody mentions",
        text: "Applying to building control for a **regularisation certificate** after the fact usually **voids** an indemnity policy, and most policies say so explicitly. So you have to choose: fix it properly, or paper over it. You cannot buy the policy first and then decide to do it properly later. If you are buying a house, that is a reason to ask the question before you accept the policy.",
      },
      { type: "h2", text: "How to fix it if the work is already done" },
      {
        type: "p",
        text: "The route is **regularisation**: an application to the local authority to inspect and, if satisfied, certify work already carried out without approval. It is a real process with a real outcome, and it is the only route that produces a certificate rather than a workaround.",
      },
      {
        type: "ol",
        items: [
          "**Gather what you have** — drawings, engineer's calculations, invoices, photographs taken during the build. Photographs of foundations and steelwork before they were covered are worth a great deal here.",
          "**Apply to the local authority** for regularisation. Note that this route is with the council, not with a private approved inspector.",
          "**Expect opening up.** The officer may require parts of the work to be exposed — a section of foundation dug to, plasterboard removed at a steel — because they cannot certify what they cannot see. Budget for the making good.",
          "**Do the remedial work** if anything is found short, then get it re-inspected.",
          "**Receive the regularisation certificate**, which does the same job for a solicitor as a completion certificate.",
        ],
      },
      {
        type: "p",
        text: "Cost varies with what has to be opened up, which is why the honest answer to \"what will it cost\" is that it depends entirely on how much is hidden. A straightforward case where the work is sound and accessible is modest. A case where a foundation has to be excavated to, in an occupied house, is not.",
      },
      { type: "h2", text: "The habit that prevents all of this" },
      {
        type: "ol",
        items: [
          "**Book the final inspection yourself** on the day the job finishes. Do not assume the builder has. Put it in your own calendar.",
          "**Ask for the certificate in writing** and chase it until it arrives. It is often issued weeks after the visit.",
          "**Photograph the hidden work** as it goes — foundations before the concrete, steels before the plasterboard, insulation before the screed. Ten minutes on a phone, and it is what makes a future regularisation cheap instead of expensive.",
          "**Keep one folder** — physical or digital — with the planning decision, the building control certificate, the electrical certificate, the FENSA certificate, the engineer's calculations and the guarantees.",
          "**Hand it over on completion.** Any builder should be giving you this. If yours cannot, that tells you something.",
        ],
      },
      {
        type: "p",
        text: "We book the final inspection as part of closing a job and we hand over the file, because a build is not finished when the last trade leaves — it is finished when you can prove it was built properly. If you have inherited a house with a paperwork gap and want an honest view on what it would take to regularise, that is a normal enquiry for [builders in Cranleigh](/areas/cranleigh) and we are happy to look.",
      },
    ],
    faqs: [
      {
        question: "What is a building regulations completion certificate?",
        answer:
          "It is the document building control issues at the end of a job, once the work has been inspected and found to comply with the building regulations. It is separate from planning permission, which deals with whether the building should be there at all rather than how it is constructed.",
      },
      {
        question: "What happens if I do not have a completion certificate?",
        answer:
          "Usually nothing at all until you sell. Then the buyer's solicitor asks for it, the sale stalls, and you are choosing between an indemnity policy and a regularisation application under time pressure. It is one of the most common causes of delay on the sale of an extended house.",
      },
      {
        question: "Is indemnity insurance as good as a completion certificate?",
        answer:
          "No. An indemnity policy insures against local authority enforcement action. It says nothing about whether the work complies, and it does not protect a buyer from defective construction. Applying for regularisation afterwards normally voids the policy, so you have to choose one route or the other.",
      },
      {
        question: "Can I get a certificate for work that was finished years ago?",
        answer:
          "Yes, through a regularisation application to the local authority. The officer will inspect and may require parts of the work to be opened up so they can be seen. If anything falls short it has to be put right and re-inspected. The certificate that results does the same job for a solicitor as a completion certificate.",
      },
      {
        question: "Which jobs need building control at all?",
        answer:
          "More than people expect. Extensions, loft conversions, removing or altering load-bearing walls, taking out a chimney breast, new or altered drainage, replacing a roof covering, new windows and doors, most electrical work, and installing a bathroom or WC where there was not one before. If in doubt, ask before you start rather than after.",
      },
    ],
    art: BLOG_ART["building-control-completion-certificate"],
  },
  {
    slug: "extension-value-cranleigh",
    title: "Does an extension add value in Cranleigh? What the numbers say",
    category: "Extensions",
    date: "2026-08-14",
    updated: "2026-09-04",
    seoTitle: "Does An Extension Add Value In Cranleigh? 2026 Numbers",
    metaDescription:
      "Cranleigh averages about £585,000 a home, detached about £796,000. Whether an extension adds value here depends on one number: your street's ceiling price.",
    excerpt:
      "An extension in Cranleigh costs roughly £2,700–£3,100 a square metre to build. Whether it comes back when you sell depends less on the build than on how close your street already is to its ceiling.",
    imageAlt:
      "Illustration of a bar chart comparing build cost per square metre against value added per square metre, with an amber ceiling line drawn across the top of the chart showing where the street price caps out",
    related: [
      "extending-1930s-semi-cranleigh",
      "loft-conversions-cranleigh-roof-types",
      "building-control-completion-certificate",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "Cranleigh's average sold price is around **£584,800**, with detached homes averaging about **£796,300** and semis about **£505,900** (Land Registry data via Rightmove, twelve months to mid-2026).",
          "Extension build cost here runs **£2,700–£3,100 per m²** for a standard single storey; a kitchen extension with fit-out runs **£3,500–£4,500 per m²**.",
          "Whether that comes back depends on the **ceiling price of your street**, not on the national average return.",
          "The reliable value gains are **a bedroom**, **a second bathroom** and **a usable kitchen-dining space**. The unreliable ones are extra square metres of the same thing.",
          "A house without the [completion certificate](/blog/building-control-completion-certificate) for its extension gets marked down at the point of sale, whatever the extension is worth.",
        ],
      },
      {
        type: "p",
        text: "Everybody asks this question and almost nobody gets a straight answer, because the honest answer starts with \"it depends\" and most people stop listening there. So let us do it with numbers instead.",
      },
      { type: "h2", text: "What Cranleigh houses actually sell for" },
      {
        type: "p",
        text: "Over the twelve months to mid-2026, Land Registry data published through Rightmove puts the average sold price in Cranleigh at around **£584,800**. Broken down by type:",
      },
      {
        type: "table",
        head: ["Property type", "Average sold price, Cranleigh", "Rough £ per m² at 120m²"],
        rows: [
          ["Detached", "≈ £796,300", "≈ £6,600"],
          ["All types", "≈ £584,800", "≈ £4,900"],
          ["Semi-detached", "≈ £505,900", "≈ £4,200"],
        ],
        caption: "Averages from Land Registry sold-price data via Rightmove, twelve months to mid-2026. The per-m² column is illustrative only — it assumes a 120m² house, and real houses vary enormously.",
      },
      {
        type: "p",
        text: "Set those against build cost. A standard single-storey extension in this area costs **£2,700 to £3,100 per m²** to build, and a kitchen extension including the fit-out **£3,500 to £4,500 per m²** — the figures on our [extension cost guide](/guides/house-extension-costs-surrey).",
      },
      {
        type: "p",
        text: "On the face of it the arithmetic looks wonderful: build at £2,900, sell at £4,900. That is the arithmetic that gets quoted in newspapers and it is misleading, because the new square metres are not worth the same as the average square metre of the house, and because of the thing everyone forgets.",
      },
      { type: "h2", text: "The ceiling price is the whole game" },
      {
        type: "p",
        text: "Every street has a price above which buyers stop paying, more or less regardless of what you have done to the house. It is set by what the street is, where it is, what the schools are, what the neighbours' houses look like, and what else the buyer could get for the money a few miles away.",
      },
      {
        type: "p",
        text: "If your house is well below its street's ceiling, an extension has room to add value and generally does. If your house is already at or near the ceiling, you can spend £120,000 and add £40,000, because the buyer who would pay more simply buys in a different road.",
      },
      {
        type: "quote",
        text: "The question I ask first is not what do you want to build, it is what is the best house in your road worth. If you are already close to that number, build what you actually want to live in, and stop pretending it is an investment. If you are a long way below it, you have room.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      {
        type: "callout",
        title: "How to find your ceiling, free, in twenty minutes",
        text: "Look up **sold prices** — not asking prices — for your street and the two nearest comparable roads over the last two years. Filter to the largest, most extended houses. That top figure is your ceiling. Then subtract your current value. What is left is the maximum the market will ever pay you back, before you have spent a penny."
      },
      { type: "h2", text: "What adds value and what does not" },
      {
        type: "p",
        text: "Two extensions of the same size and cost can perform completely differently, because buyers pay for functions, not for floor area.",
      },
      {
        type: "table",
        head: ["What you add", "Typical effect on value", "Why"],
        rows: [
          ["A genuine extra bedroom (with a wardrobe and a window that meets the rules)", "Strong", "Moves the house into a different search filter. A four-bed appears in searches a three-bed never sees."],
          ["A second bathroom or en-suite", "Strong", "Consistently one of the most requested features, and cheap relative to its effect."],
          ["Kitchen-dining-family space", "Strong", "The single most common reason people move. Removing that reason is worth money."],
          ["A downstairs WC where there was none", "Good, relative to cost", "Small spend, disproportionate effect on saleability."],
          ["More living room", "Weak", "The house already has one. Buyers rarely pay again for the same function."],
          ["A garden room or annexe with no proper heating or bathroom", "Weak", "Does not count in the habitable floor area and is valued as an outbuilding."],
          ["Losing most of the garden", "**Negative** in Cranleigh", "Gardens are explicitly valued here — the [Neighbourhood Plan](/blog/cranleigh-neighbourhood-plan-householders) says so, and buyers agree."],
        ],
        caption: "Function beats floor area. The extension that changes which searches your house appears in is the one that pays."
      },
      { type: "h2", text: "The costs people leave out of the sum" },
      {
        type: "p",
        text: "When people say an extension did not pay for itself, this is usually why. The build cost is not the project cost.",
      },
      {
        type: "ul",
        items: [
          "**Planning fee** — £548 for a householder application since 1 April 2026, rising to about £575 from 8 December 2026.",
          "**Design and drawings** — architect or technologist fees, typically a meaningful percentage of the build.",
          "**Structural engineer** — £1,500–£3,000 for steel and foundation design.",
          "**Party wall surveyor** — from around £1,000 where a neighbour dissents. See [the party wall notice that sets your start date](/blog/party-wall-notice-timing).",
          "**Building control** application and inspections.",
          "**Surveys** where they apply — tree, drainage, and in some cases a [bat survey](/blog/bat-surveys-timing-cranleigh) that can cost you a whole season.",
          "**Kitchen, flooring, decoration and landscaping** — routinely 20–30% on top of the shell for a kitchen extension, and the part people budget last.",
          "**Living costs** if you move out, or the cost of living in a building site if you do not."
        ]
      },
      {
        type: "callout",
        title: "The saving",
        text: "Get the ceiling-price check done **before** the architect, not after. Twenty minutes on sold-price data is what tells you whether you are designing an investment or designing a home. Both are legitimate — but they lead to different decisions about specification, and finding out afterwards costs tens of thousands.",
      },
      { type: "h2", text: "When the answer is \"do it anyway\"" },
      {
        type: "p",
        text: "It is worth saying plainly: not adding value is not the same as wasting money. If the alternative is moving, the extension only has to beat the cost of moving to be the better financial decision — and in Surrey that means stamp duty, agents' fees, legal fees, removals and the difference in purchase price. On a £585,000 house, moving costs are substantial before you have gained a single extra room.",
      },
      {
        type: "p",
        text: "And there are five or ten years of living in the house to weigh. A family that gets the kitchen it wanted for a decade has had something for its money that does not appear in a sold-price table.",
      },
      {
        type: "p",
        text: "What we will not do is tell someone a scheme will pay for itself when the street says otherwise. If you want an honest read on whether your plan makes financial sense here, ask — knowing what this town's houses sell for is part of what makes [builders in Cranleigh](/areas/cranleigh) worth using instead of a firm working from a national rate card.",
      },
    ],
    faqs: [
      {
        question: "How much does an extension add to a house in Cranleigh?",
        answer:
          "It depends far more on your street's ceiling price than on the extension itself. Cranleigh averages about £584,800 a home, with detached at about £796,300 and semis at about £505,900. If your house is well below the best price on your road, an extension has room to add value. If it is already near that number, you may recover only a fraction of the spend.",
      },
      {
        question: "What is a ceiling price and how do I find mine?",
        answer:
          "It is the price above which buyers stop paying for a house on your street regardless of its condition or size. Find it by looking up sold prices — not asking prices — for the largest and most extended houses on your road and the nearest comparable roads over the last two years. The gap between your current value and that figure is the most the market will ever pay you back.",
      },
      {
        question: "Which extension adds the most value?",
        answer:
          "Anything that changes which searches your house appears in. A genuine extra bedroom, a second bathroom or en-suite, and an open kitchen-dining-family space are the reliable ones. More of a room the house already has — a bigger living room — adds the least. Losing most of the garden can reduce value in Cranleigh, where gardens are explicitly valued.",
      },
      {
        question: "Is extending cheaper than moving?",
        answer:
          "Frequently, yes. On a Surrey house at around £585,000, stamp duty, agents' fees, legal costs and removals add up before you have gained a single room. If the extension solves the reason you were going to move, it only has to beat those costs to be the better financial decision.",
      },
      {
        question: "Does missing paperwork affect the value of an extension?",
        answer:
          "Yes, at the point of sale. If you cannot produce the building regulations completion certificate, the buyer's solicitor will raise it, the sale slows, and the price often gets renegotiated. The certificate is free at the time and expensive to reconstruct later.",
      },
    ],
    art: BLOG_ART["extension-value-cranleigh"],
  },
  {
    slug: "party-wall-notice-timing",
    title: "The party wall notice that sets your start date",
    category: "Planning & surveys",
    date: "2026-08-13",
    updated: "2026-09-04",
    seoTitle: "Party Wall Notice Timing | 1 And 2 Month Rules Explained",
    metaDescription:
      "A party structure notice needs two months. Excavation and line of junction notices need one. Serve them late and your start date moves, whatever the programme says.",
    excerpt:
      "The Party Wall etc. Act 1996 is the most common reason a build that had planning permission still cannot start. The notice periods are fixed, they cannot be shortened, and almost nobody serves them early enough.",
    imageAlt:
      "Illustration of a calendar strip with two months blocked out in amber against a party wall between two houses, and a foundation trench shown within three metres of the boundary",
    related: [
      "extending-1930s-semi-cranleigh",
      "trees-and-foundation-depth-cranleigh",
      "extension-value-cranleigh",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "**Party structure notice** (work to a shared wall): **two months'** notice.",
          "**Line of junction notice** (building up to or astride the boundary) and **adjacent excavation notice** (digging within 3m or 6m): **one month's** notice.",
          "Your neighbour has **14 days** to reply. Silence counts as **dissent**, which means surveyors.",
          "A notice is valid for **twelve months** — so serving early costs nothing and buys you the whole programme.",
          "Getting this wrong is the single most common reason a project with full planning permission still cannot start on the date everybody agreed.",
        ],
      },
      {
        type: "p",
        text: "Planning permission tells you the council will allow the building. It says nothing at all about whether you may dig next to your neighbour's house. That is a different piece of legislation, with its own timetable, and it is the one that quietly moves start dates.",
      },
      {
        type: "p",
        text: "The Party Wall etc. Act 1996 applies whether or not you needed planning permission, and whether or not you get on with your neighbours. It is not optional and it is not a formality.",
      },
      { type: "h2", text: "Which notice, and how long" },
      {
        type: "table",
        head: ["What you are doing", "Notice", "Period"],
        rows: [
          ["Cutting into, raising, underpinning, rebuilding or removing part of a shared wall", "Party structure notice (s.3)", "**2 months**"],
          ["Building a new wall up to or astride the boundary line", "Line of junction notice (s.1)", "**1 month**"],
          ["Excavating within **3 metres** of a neighbour's building, to a depth below their foundations", "Adjacent excavation notice (s.6)", "**1 month**"],
          ["Excavating within **6 metres** of a neighbour's building, where a 45° line from the bottom of their foundations would meet your excavation", "Adjacent excavation notice (s.6)", "**1 month**"],
        ],
        caption: "Periods run from the date the notice is served, not the date you posted it or the date the neighbour got round to reading it.",
      },
      {
        type: "p",
        text: "The 3-metre and 6-metre rules are the ones people miss, because there is no shared wall involved and it does not feel like a party wall matter. It is. A rear extension on a typical Cranleigh plot, with foundations dug deeper than the neighbour's because of a nearby tree, will very often fall inside the 3-metre rule — and [trees are exactly what drives foundation depth around here](/blog/trees-and-foundation-depth-cranleigh).",
      },
      { type: "h2", text: "What happens after you serve it" },
      {
        type: "p",
        text: "Your neighbour has **14 days** to respond, and there are three possible outcomes.",
      },
      {
        type: "ol",
        items: [
          "**They consent in writing.** Best case. No surveyors, no award, and you can start once the notice period expires. Costs you nothing beyond the notice.",
          "**They dissent and appoint their own surveyor.** You each have a surveyor; the two of them agree a party wall award setting out how the work is done, records the condition of the neighbour's property beforehand, and settles who pays for what. You pay both sets of fees.",
          "**They do not reply within 14 days.** This is deemed **dissent**. A neighbour who ignores the letter has not made the problem go away — they have automatically triggered the dispute procedure, and you must then appoint a surveyor on their behalf.",
        ],
      },
      {
        type: "callout",
        title: "The most expensive misunderstanding on this page",
        text: "Silence is not consent. A neighbour who says nothing has legally dissented, and you are then into the surveyor process — typically **£1,000 and upwards**, and often more where two surveyors are appointed. A cup of tea and an explanation before the letter arrives is genuinely the cheapest risk management in the whole build.",
      },
      {
        type: "quote",
        text: "Nine times out of ten the neighbour dissents because a legal-looking letter turned up with no warning and they got nervous. Knock on the door first, show them the drawings, then send the notice. It has saved my clients thousands, and it means you are still speaking to each other when the digger arrives.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      { type: "h2", text: "The timeline that actually works" },
      {
        type: "p",
        text: "The mistake is treating the party wall notice as something you do once planning is granted. That sequences two waiting periods one after the other. Run them in parallel and you get the time back.",
      },
      {
        type: "table",
        head: ["Approach", "Planning", "Party wall", "Earliest realistic start"],
        rows: [
          ["Sequential — notice served after approval", "8–10 weeks", "2 months after that, plus surveyors if they dissent", "**5–6 months**"],
          ["Parallel — notice served during determination", "8–10 weeks", "Runs alongside", "**2–3 months**"],
        ],
        caption: "A party wall notice is valid for twelve months from service, so serving it while the planning application is still being determined costs you nothing if the scheme changes slightly — and if it changes substantially you re-serve.",
      },
      {
        type: "callout",
        title: "The saving",
        text: "Serving the notice early does not just save weeks — it saves money you are actually spending. If you are renting elsewhere, or storing furniture, or holding a builder's slot, three months of delay is a real bill. The notice itself costs postage.",
      },
      { type: "h2", text: "Getting the notice right" },
      {
        type: "p",
        text: "A defective notice is worse than a late one, because you find out it was defective when someone challenges it. A valid notice needs:",
      },
      {
        type: "ul",
        items: [
          "**Your full name and address** as the building owner — the legal owner, not just whoever is managing the job.",
          "**A clear description of the proposed work**, usually with drawings and, for excavation notices, sections showing the depth of your foundations relative to theirs.",
          "**The proposed start date**, no earlier than the end of the notice period.",
          "**The date of service** and, for a party structure notice, a statement of the neighbour's rights.",
          "**Service on every adjoining owner** — including freeholders and long leaseholders where a property is divided, and including the neighbour on the other side if the work affects both.",
        ],
      },
      {
        type: "p",
        text: "For a straightforward rear extension with a cooperative neighbour, serving it yourself is perfectly reasonable and there are standard forms available. For anything involving underpinning, a shared wall being cut into, or a neighbour you already have a difficult relationship with, use a party wall surveyor from the start. It is cheaper than fixing it.",
      },
      { type: "h2", text: "What the award actually gives you" },
      {
        type: "p",
        text: "If it does go to an award, it is worth knowing it is not purely a cost. The award includes a **schedule of condition** — a photographic record of the neighbour's property before you start. That record is what protects you when a crack that has been there since 1987 is attributed to your digger. Plenty of builders would tell you to get one voluntarily even where the Act does not require it.",
      },
      {
        type: "p",
        text: "We serve party wall notices as a matter of routine at the start of a job rather than at the end of the planning process, because a start date that slips by three months is the thing clients remember. If you are planning an extension here and are not sure which notices apply, that is a five-minute conversation — and the sort of thing you should be able to ask [builders in Cranleigh](/areas/cranleigh) before you are committed to anything.",
      },
    ],
    faqs: [
      {
        question: "How much notice do I have to give my neighbour for a party wall?",
        answer:
          "Two months for a party structure notice, which covers cutting into, raising, underpinning or removing part of a shared wall. One month for a line of junction notice, where you build up to or astride the boundary, and one month for an adjacent excavation notice where you dig within three metres, or within six metres in some circumstances, of a neighbour's building.",
      },
      {
        question: "What if my neighbour ignores the party wall notice?",
        answer:
          "Silence is treated as dissent. If they do not respond within 14 days, a dispute is deemed to have arisen and you must appoint a surveyor on their behalf. That is why a conversation before the letter arrives is worth so much — it is the difference between a free consent and a surveyor's bill of £1,000 or more.",
      },
      {
        question: "Do I need a party wall notice for a rear extension?",
        answer:
          "Often yes, even where no shared wall is touched, because of the excavation rules. If your foundations go within three metres of a neighbour's building and deeper than their foundations, you need an adjacent excavation notice. Deeper foundations near trees make this very common in Cranleigh.",
      },
      {
        question: "When should I serve the notice?",
        answer:
          "While the planning application is still being determined, not after approval. A notice is valid for twelve months from service, so serving early costs nothing and runs the two waiting periods in parallel instead of one after the other. That difference is typically two to three months on the start date.",
      },
      {
        question: "Do I need a party wall surveyor?",
        answer:
          "Only if the neighbour dissents or does not reply. If they consent in writing, no surveyor is needed. For straightforward work with a cooperative neighbour you can serve the notice yourself. For underpinning, cutting into a shared wall, or a neighbour you already have difficulty with, appoint a surveyor from the start.",
      },
    ],
    art: BLOG_ART["party-wall-notice-timing"],
  },
  {
    slug: "loft-conversions-cranleigh-roof-types",
    title: "Loft conversions in Cranleigh: which roofs work and which do not",
    category: "Loft conversions",
    date: "2026-08-13",
    updated: "2026-09-04",
    seoTitle: "Loft Conversion Cranleigh | Which Roof Types Work",
    metaDescription:
      "Whether your loft converts comes down to head height and how the roof is built. Cut roofs convert easily. Trussed roofs from the 1970s onward need structural work.",
    excerpt:
      "Two things decide whether your loft converts: how tall it is and how it was built. Get someone in the hatch with a tape measure before you get excited — it takes ten minutes and it answers most of the question.",
    imageAlt:
      "Illustration of two roof sections side by side: a traditional cut roof with open space under the purlins on the left, and a modern W-shaped trussed rafter roof full of webs on the right, with an amber head height dimension marked between floor and ridge",
    related: [
      "extension-value-cranleigh",
      "cranleigh-conservation-area-consent",
      "part-l-extension-insulation",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "Measure floor to ridge first. Below about **2.2m** of existing height, a straightforward conversion is unlikely without altering the roof.",
          "A **traditional cut roof** — rafters, purlins, open space — converts readily. A **trussed rafter roof**, standard from around the 1960s–70s onward, is full of structural webs and needs an engineered solution.",
          "Building regulations require **2m headroom over the stairs**, which is often the thing that actually kills a scheme, not the roof.",
          "Permitted development allows **40m³** of additional roof space on a terrace and **50m³** on a semi or detached — but **not in a conservation area**.",
          "A conversion runs **£2,000–£2,800 per m²** — cheaper than a ground-floor extension because there are no new foundations.",
        ],
      },
      {
        type: "p",
        text: "A loft conversion is the best value floor area most Cranleigh houses can add. The roof is already there, the foundations are already there, and you are not losing an inch of garden — which matters more here than it does in most places. It is also the project most likely to be abandoned three weeks in, after somebody finally gets in the hatch with a tape measure.",
      },
      {
        type: "p",
        text: "So start with the tape measure.",
      },
      { type: "h2", text: "Head height: the first and hardest test" },
      {
        type: "p",
        text: "Measure from the top of the existing ceiling joists to the underside of the ridge, at the highest point. The number you get is not the number you end up with — a conversion takes height off the top for insulation between and under the rafters, and off the bottom for a new structural floor.",
      },
      {
        type: "table",
        head: ["Existing floor-to-ridge height", "Realistic outcome"],
        rows: [
          ["Under 2.2m", "A conventional conversion will not give usable height. Options are a roof lift, a dormer that changes the roof form, or abandoning the idea."],
          ["2.2m – 2.4m", "Possible, but tight. Expect to need a dormer to create the usable zone, and expect careful design around the stair."],
          ["2.4m – 2.8m", "Comfortable. This is the sweet spot, and where most successful conversions sit."],
          ["Over 2.8m", "Generous. Often room for a full dormer or even a small en-suite without compromise."],
        ],
        caption: "Measured to the underside of the ridge, from the top of the existing ceiling joists. Finished head height will be materially less."
      },
      {
        type: "callout",
        title: "The test people forget",
        text: "Building regulations require **2m of headroom over the staircase**, reducing to 1.9m at the edge of the stair. On a typical semi the new stair has to rise into the roof space right where the roof is lowest. We have seen more conversions fail on the stair than on the room. Check where the stair will land before you get attached to a layout.",
      },
      { type: "h2", text: "Cut roof or trussed roof" },
      {
        type: "p",
        text: "Put your head through the hatch and look at what is holding the roof up. There are two families, and they behave completely differently.",
      },
      { type: "h3", text: "Traditional cut roof" },
      {
        type: "p",
        text: "Rafters running from wall plate to ridge, with horizontal purlins part way up giving them mid-span support, and struts down to a load-bearing wall below. The middle of the roof space is largely open — you can stand up in it, and people store things there.",
      },
      {
        type: "p",
        text: "This is what most Cranleigh houses built before roughly the 1960s have, including the Victorian and Edwardian stock near the centre and the interwar semis. It converts well. The purlins can usually be replaced or supplemented with steel beams and the structure reworked without touching the roof covering from outside.",
      },
      { type: "h3", text: "Trussed rafter roof" },
      {
        type: "p",
        text: "Prefabricated triangular trusses, delivered as units and craned on, with a W or fink pattern of timber webs filling the space. You cannot walk through it — you climb between the webs. Standard on housing from around the 1960s and 70s onward, and near-universal by the 1980s.",
      },
      {
        type: "p",
        text: "A trussed roof is not a lost cause, but it is a different job. Every one of those webs is doing structural work, and you cannot simply cut them out. The conversion needs an engineered solution — typically new steel beams and a new floor structure installed to carry the loads before the webs are removed, sequenced so the roof is never unsupported. It works, it is done all the time, and it costs more.",
      },
      {
        type: "quote",
        text: "People think a trussed roof means no. It does not mean no, it means an engineer and a bigger number. What it does mean is that anyone quoting you the same price per square metre for a truss roof and a cut roof has not been up there.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      { type: "h2", text: "Planning: what Cranleigh's constraints do to this" },
      {
        type: "p",
        text: "Under permitted development, a loft conversion can add up to **40 cubic metres** of roof space on a terraced house and **50 cubic metres** on a semi-detached or detached house, subject to the usual conditions — no extension beyond the plane of the existing roof slope on the principal elevation, materials similar in appearance, no verandas or balconies, and side-facing windows obscure-glazed and non-opening below 1.7m.",
      },
      {
        type: "p",
        text: "In a conservation area, **roof extensions are not permitted development at all**. That is the single biggest constraint on lofts in the middle of Cranleigh, and it is covered in more detail in [what needs consent in the Cranleigh Conservation Area](/blog/cranleigh-conservation-area-consent). It does not mean no dormer — it means a planning application and a design that the conservation officer will accept.",
      },
      { type: "h2", text: "Fire safety, and why the whole staircase changes" },
      {
        type: "p",
        text: "Adding a third storey changes the fire strategy for the entire house, and this catches people financially as well as practically. On a two-storey house you can usually escape from a first-floor window. On a three-storey house you cannot, so the staircase itself has to become the protected escape route.",
      },
      {
        type: "ul",
        items: [
          "**A protected stairway** from the loft all the way down to a final exit — which means the stair enclosure has to achieve 30 minutes' fire resistance.",
          "**Fire doors (FD30) to every habitable room** off that stairway, on every floor. Yes, including the rooms you were not touching.",
          "**Mains-powered, interlinked smoke alarms** on every storey.",
          "**An escape window** in the new loft room meeting the minimum openable area and sill height requirements.",
          "Sometimes **a sprinkler or mist system**, where an open-plan ground floor makes a protected stairway impossible without gutting the layout.",
        ],
      },
      {
        type: "callout",
        title: "The cost people do not budget for",
        text: "Replacing every door on the ground and first floor with fire doors, plus frames, plus intumescent strips and closers where required, plus the alarm system, plus making good and redecorating around them, is routinely **£3,000–£6,000** on an ordinary three-bed. It is not optional and it is not in the headline square-metre rate. Ask specifically whether the quote includes it.",
      },
      { type: "h2", text: "What it costs and what it returns" },
      {
        type: "p",
        text: "A loft conversion in this area runs around **£2,000 to £2,800 per m²**, which is meaningfully less than a ground-floor extension at £2,700–£3,100 because there are no new foundations and no new roof. Those figures are on our [extension cost guide](/guides/house-extension-costs-surrey).",
      },
      {
        type: "p",
        text: "Value-wise it is usually the strongest move available, for a reason that has nothing to do with floor area: it typically adds a bedroom and often a bathroom, and a bedroom changes which searches your house shows up in. That mechanism is explained properly in [does an extension add value in Cranleigh](/blog/extension-value-cranleigh).",
      },
      { type: "h2", text: "The ten-minute survey to do before anything else" },
      {
        type: "ol",
        items: [
          "**Measure floor to ridge** at the highest point. Write the number down.",
          "**Look at the structure.** Open space with purlins, or a forest of diagonal webs?",
          "**Find where the stair will go**, and check the head height at that point specifically.",
          "**Check the water tank and the boiler.** Relocating a tank is minor; relocating a boiler and rerouting a flue is not.",
          "**Check for a chimney breast** running through the space — it is either a design feature or a demolition job needing building control.",
          "**Check the conservation area** layer on Waverley's policies map before assuming permitted development."
        ]
      },
      {
        type: "p",
        text: "We will come and do that survey and tell you honestly if the answer is no, because a loft that cannot take a compliant staircase is not a job we want to have started. If you want someone to put their head through the hatch before you spend money on a designer, that is a normal call for [builders in Cranleigh](/areas/cranleigh) to take — and what the job involves is set out on our [loft conversions](/services/loft-conversions) page.",
      },
    ],
    faqs: [
      {
        question: "What head height do I need for a loft conversion?",
        answer:
          "Measure from the top of the existing ceiling joists to the underside of the ridge. Below about 2.2m a conventional conversion will not leave usable height once you allow for insulation above and a new floor below. Between 2.4m and 2.8m is comfortable. Remember you also need 2m of headroom over the new staircase, reducing to 1.9m at its edge.",
      },
      {
        question: "Can you convert a loft with modern roof trusses?",
        answer:
          "Yes, but it is a different and more expensive job than converting a traditional cut roof. The W-shaped webs are structural and cannot simply be cut out. The conversion needs an engineered solution — usually steel beams and a new floor structure installed to take the loads before the webs are removed, in a sequence that never leaves the roof unsupported.",
      },
      {
        question: "Do I need planning permission for a loft conversion in Cranleigh?",
        answer:
          "Outside the conservation area, often not — permitted development allows up to 40 cubic metres of added roof space on a terrace and 50 cubic metres on a semi or detached house, subject to conditions. Inside the Cranleigh Conservation Area, roof extensions are not permitted development at all and need a planning application.",
      },
      {
        question: "Why do I need fire doors throughout the house for a loft conversion?",
        answer:
          "Adding a third storey means you can no longer escape from a first-floor window, so the staircase becomes the protected escape route for the whole house. That requires 30 minutes' fire resistance to the stair enclosure, FD30 fire doors to habitable rooms off it on every floor, and mains-linked interlinked alarms. Budget £3,000–£6,000 for this on a typical three-bed — it is rarely in the headline rate.",
      },
      {
        question: "How much does a loft conversion cost?",
        answer:
          "Around £2,000 to £2,800 per square metre in this area, lower than a ground-floor extension because there are no new foundations or roof. Add the fire safety works, any structural solution for a trussed roof, and the bathroom fit-out if you are adding one.",
      },
    ],
    art: BLOG_ART["loft-conversions-cranleigh-roof-types"],
  },
  {
    slug: "extending-1930s-semi-cranleigh",
    title: "Extending a 1930s semi in Cranleigh: what to expect",
    category: "Extensions",
    date: "2026-08-13",
    updated: "2026-09-04",
    seoTitle: "Extending A 1930s Semi In Cranleigh | Costs And Surprises",
    metaDescription:
      "1930s semis extend well, but there are four things that reliably cost more than the quote assumed: foundations, the party wall, the drains and the chimney breast.",
    excerpt:
      "Interwar semis are among the best houses in Cranleigh to extend — generous plots, simple structure, forgiving layouts. They also hide the same four expensive surprises again and again.",
    imageAlt:
      "Illustration of a 1930s semi-detached house in section, showing shallow strip foundations, a suspended timber ground floor, a chimney breast running up the party wall and a drainage run passing under the proposed extension",
    related: [
      "kitchen-extensions-cranleigh-layout-budget",
      "trees-and-foundation-depth-cranleigh",
      "party-wall-notice-timing",
      "part-l-extension-insulation",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "Interwar semis extend well: deep plots, straightforward structure, and rear elevations that take a full-width extension comfortably.",
          "The four costs that reliably get missed are **foundation depth**, **the party wall process**, **drainage under the footprint**, and **the chimney breast**.",
          "Foundations are the big one. Cranleigh sits largely on **Weald Clay**, which is highly shrink–swell reactive, and the original footings are typically far shallower than anything you can build today.",
          "Budget **£2,700–£3,100 per m²** for the shell, and **£3,500–£4,500 per m²** if the extension includes the kitchen.",
          "Every one of these is knowable before you sign. None of them is knowable from a drawing alone.",
        ],
      },
      {
        type: "p",
        text: "Interwar semis are the backbone of a lot of Cranleigh's housing, and they are genuinely good houses to work on. The plots are usually deep, the rear elevation is usually simple, and the internal layout — front room, back room, kitchen at the end — is almost designed to be opened up. When people picture the extension they want, they are usually picturing something one of these houses can deliver.",
      },
      {
        type: "p",
        text: "What they do not picture is the four things that come out of the ground and the walls. These are not obscure risks. They are the same four every time, and a quote that does not mention them has not been priced properly.",
      },
      { type: "h2", text: "1. The foundations will be deeper than you expect" },
      {
        type: "p",
        text: "A 1930s semi typically sits on a shallow strip footing, often less than half a metre deep. Perfectly adequate for what it carries, and completely irrelevant to what you are allowed to build now.",
      },
      {
        type: "p",
        text: "Cranleigh sits largely on the **Weald Clay Formation** — stiff, fissured clay with a moderate to high shrink–swell potential, among the more reactive soils in England. Clay that dries out shrinks, and clay that rewets swells, and the thing that dries it out is tree roots. The current minimum for a new foundation is generally **0.9m**, and near a mature high-water-demand tree such as an oak, NHBC Chapter 4.2 guidance can push that to **2.5m or more**.",
      },
      {
        type: "p",
        text: "That difference is not a detail. Going from 0.9m to 2.5m across the footprint of a 25m² extension means several times the excavation, several times the concrete, spoil to remove, and often a change from a simple trench fill to a piled or beam-and-block solution. It is the single largest source of variation between an optimistic quote and a real one. We cover the mechanism properly in [the tree in your garden sets your foundation depth](/blog/trees-and-foundation-depth-cranleigh).",
      },
      {
        type: "callout",
        title: "The saving",
        text: "Dig a trial hole before you accept a fixed price. It costs a few hundred pounds, takes an afternoon, and tells you the existing foundation depth and the soil you are into. It converts the largest unknown in the project into a known number — which means your quote is a price rather than a guess, and you are not having the conversation about a variation with a hole already open in your garden.",
      },
      { type: "h2", text: "2. The party wall is not a formality" },
      {
        type: "p",
        text: "It is a semi. There is a shared wall, and your neighbour's house is a few metres from where you are digging. Both the party structure rules and the excavation rules are in play.",
      },
      {
        type: "p",
        text: "The periods are fixed: **two months** for a party structure notice, **one month** for a line of junction or adjacent excavation notice. Your neighbour has 14 days to respond, and **silence counts as dissent**, which puts you into the surveyor process at £1,000 and up. The whole sequence is set out in [the party wall notice that sets your start date](/blog/party-wall-notice-timing).",
      },
      {
        type: "quote",
        text: "On a semi, go and see your neighbour before the letter arrives. Show them the drawing, tell them roughly when the noisy bit is, give them a phone number. It costs an evening and it is worth more than anything else you will do that month.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      { type: "h2", text: "3. There is a drain under where you want to build" },
      {
        type: "p",
        text: "Interwar houses were built with the soil pipe on the outside rear wall and the run heading down the garden to a manhole. Your extension almost certainly goes over it.",
      },
      {
        type: "p",
        text: "There are three ways this goes, in increasing order of expense:",
      },
      {
        type: "ol",
        items: [
          "**Build over it with a concrete lintel or encasement**, where the run is shallow, in good condition and you can satisfy building control. Cheapest.",
          "**Divert the run** around the new footprint to a new or existing manhole. Middling — a day or two of groundworks and some new pipe.",
          "**Build over a public sewer**, which needs a formal build-over agreement with the water company. Adds weeks and a fee, and occasionally forces a redesign.",
        ],
      },
      {
        type: "p",
        text: "The important part is finding out which one you are in **before** the price is agreed. Lift the manhole covers, run a survey camera if there is any doubt, and check whether the run is shared with the neighbour — on a semi it very often is, which turns a private drain into a shared one and changes who has to agree what.",
      },
      { type: "h2", text: "4. The chimney breast" },
      {
        type: "p",
        text: "Almost every 1930s semi has a chimney breast on the party wall, and almost every open-plan scheme wants it gone. Removing it is entirely normal work, and it is **notifiable to building control**, because you are taking out something structural.",
      },
      {
        type: "ul",
        items: [
          "The stack above has to be **supported** — usually on gallows brackets or a beam — or removed all the way to the roof.",
          "The **neighbour's flue** may share the same stack. This is a party wall matter as well as a structural one.",
          "**Making good** the roof where a stack is removed, and dealing with the resulting hole in the ridge, is a roofing job people forget to price.",
          "Half-removals — taking the breast out downstairs and leaving it upstairs — are the classic source of unsupported stacks found by a buyer's surveyor a decade later.",
        ],
      },
      { type: "h2", text: "What it all costs" },
      {
        type: "table",
        head: ["Element", "Guide figure", "Note"],
        rows: [
          ["Single-storey extension shell", "£2,700 – £3,100 per m²", "Our standard Surrey range"],
          ["Kitchen extension including fit-out", "£3,500 – £4,500 per m²", "The fit-out is the variable, not the shell"],
          ["Deeper foundations near a mature tree", "Add materially to the groundworks", "Depends entirely on depth — this is why the trial hole matters"],
          ["Structural engineer", "£1,500 – £3,000", "Steel and foundation design"],
          ["Party wall surveyor, if the neighbour dissents", "From £1,000", "Avoidable with a conversation"],
          ["Planning fee (householder)", "£548", "Since 1 April 2026; about £575 from 8 December 2026"],
          ["Drain diversion", "Low four figures, typically", "Build-over agreement adds weeks as well as cost"],
        ],
        caption: "Guide figures for this area in 2026. Our full breakdown is on the [extension cost guide](/guides/house-extension-costs-surrey) and the [pricing page](/pricing).",
      },
      {
        type: "callout",
        title: "How to compare quotes properly",
        text: "Ask every builder quoting to state, in writing, **what foundation depth they have allowed** and **what happens to the drain run**. If two quotes differ by £15,000, this is almost always where the difference is — and the cheaper one is usually the one that has assumed the best case and will raise a variation when it turns out otherwise.",
      },
      { type: "h2", text: "The good news" },
      {
        type: "p",
        text: "None of this makes a 1930s semi a difficult house. Every one of these four issues has a known solution and a known cost. What separates a project that runs to budget from one that does not is whether they were investigated before the price was agreed or discovered after the digger arrived.",
      },
      {
        type: "p",
        text: "We price these houses regularly and we would rather spend an afternoon digging a trial hole than have the conversation about a variation. If you have an interwar semi here and want a realistic number rather than an optimistic one, that is what [builders in Cranleigh](/areas/cranleigh) who know the local ground should be giving you.",
      },
    ],
    faqs: [
      {
        question: "How deep do foundations need to be for an extension on a 1930s semi?",
        answer:
          "The general minimum is 0.9m, but Cranleigh sits largely on Weald Clay, which is highly shrink–swell reactive. Near a mature high-water-demand tree such as an oak, NHBC guidance can require 2.5m or more. The original house's footings are usually well under half a metre and are no guide at all to what you will need. Dig a trial hole before agreeing a fixed price.",
      },
      {
        question: "Do I need a party wall agreement to extend a semi-detached house?",
        answer:
          "Almost certainly some form of notice. If you cut into the shared wall you need a party structure notice with two months' notice. If you dig within three metres of the neighbour's house and deeper than their foundations you need an adjacent excavation notice with one month's notice. If the neighbour does not respond within 14 days that counts as dissent and surveyors get appointed.",
      },
      {
        question: "Can I build an extension over a drain?",
        answer:
          "Often yes, by encasing it or bridging it with a lintel, if it is shallow, sound and building control accept it. Otherwise the run gets diverted around the new footprint. If it is a public sewer you need a formal build-over agreement with the water company, which adds weeks. Lift the manhole covers before the price is agreed, not after.",
      },
      {
        question: "Is removing a chimney breast a big job?",
        answer:
          "It is routine, but it is notifiable to building control because it is structural. The stack above has to be supported on brackets or a beam, or taken down entirely, and where the stack is shared with the neighbouring house it is a party wall matter too. Half-removals that leave an unsupported stack upstairs are a common defect found by buyers' surveyors.",
      },
      {
        question: "Why do extension quotes for the same job vary so much?",
        answer:
          "Usually foundations and drains. A builder who has assumed 0.9m foundations and no drain diversion will quote considerably less than one who has allowed for 2m near a tree and a diversion — and will raise a variation when the ground says otherwise. Ask every quote to state the assumed foundation depth and the drainage strategy in writing, then compare like with like.",
      },
    ],
    art: BLOG_ART["extending-1930s-semi-cranleigh"],
  },
  {
    slug: "bathroom-fitting-cost-cranleigh",
    title: "What a bathroom fitting costs in Cranleigh, and what changes the price",
    category: "Bathrooms",
    date: "2026-08-13",
    updated: "2026-09-04",
    seoTitle: "Bathroom Fitting Cost Cranleigh | 2026 Price Guide",
    metaDescription:
      "A full bathroom refit in Cranleigh starts around £9,000. What moves the number is not the suite — it is whether the pipework, the floor and the layout move with it.",
    excerpt:
      "A complete bathroom refit here starts around £9,000. The suite you choose is rarely what decides the final figure — moving the soil pipe, lifting the floor and discovering what is behind the old tiles is.",
    imageAlt:
      "Illustration of a bathroom in section showing the soil pipe run, a stud wall being opened up, tanking membrane behind the tiles in amber, and a cost scale rising from a like-for-like swap to a full reconfiguration",
    related: [
      "tiles-are-not-waterproof",
      "building-control-completion-certificate",
      "extension-value-cranleigh",
      "wet-rooms-cranleigh-cottage",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "A complete refit — strip-out, new suite, tiling, plastering, lighting and decoration — **starts from around £9,000** with us.",
          "The **suite** is usually a small part of the number. **Moving the soil pipe** is a big part of it.",
          "**Like-for-like** replacement is the cheap version. **Reconfiguring the layout** is a different job with a different price.",
          "Waterproofing behind the tiles is not optional and is where cheap quotes are cheap — [tiles are not waterproof](/blog/tiles-are-not-waterproof).",
          "A second bathroom or en-suite is one of the most reliable value-adding things you can do to a house here.",
        ],
      },
      {
        type: "p",
        text: "\"How much for a new bathroom?\" is the hardest question we get, because the honest answer ranges over a factor of three and it depends on things the person asking cannot see. So here is what actually drives it.",
      },
      { type: "h2", text: "The starting number" },
      {
        type: "p",
        text: "A complete bathroom refit with us **starts from around £9,000**. That is a whole job, not a suite: strip-out and disposal, first and second fix plumbing, electrics, plastering, tiling, the suite and brassware, lighting, extract ventilation and decoration, done by one team from start to finish. It is the figure on our [pricing page](/pricing) and it is a starting point, not an average.",
      },
      {
        type: "p",
        text: "What takes it up from there is, in rough order of impact:",
      },
      {
        type: "table",
        head: ["What changes", "Effect on price", "Why"],
        rows: [
          ["**Moving the WC**", "Large", "The soil pipe has to move. That often means lifting the floor, cutting joists (with an engineer's say-so), and new external pipework."],
          ["**Reconfiguring the layout**", "Large", "Everything moves — supply, waste, electrics, and usually a stud wall or two."],
          ["**Wet room / level-access shower**", "Large", "Floor build-up, falls to a linear drain, and full tanking. A different construction, not a different fitting."],
          ["**Tile size and material**", "Medium", "Large-format porcelain needs a flatter substrate and more skilled setting-out. Natural stone needs sealing and heavier support."],
          ["**Underfloor heating**", "Medium", "Adds a floor build-up, a manifold or mat, and a controls circuit."],
          ["**The suite itself**", "Small to medium", "The spread between a decent mid-range suite and a very good one is smaller than people expect, and it is the bit you can control at the end."],
          ["**Brassware**", "Surprisingly large if you let it", "This is where budgets quietly vanish. A single shower valve can be £200 or £1,800."],
        ],
        caption: "The pattern is consistent: what moves the price is what has to be moved, not what gets installed.",
      },
      {
        type: "quote",
        text: "If you keep the WC where it is, we are refitting a bathroom. If you move it two metres, we are doing joinery, drainage and structural work with a bathroom on top. Same room, different job, and the price reflects that.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      { type: "h2", text: "The three tiers, honestly described" },
      {
        type: "table",
        head: ["Tier", "What it is", "Rough position"],
        rows: [
          ["Like-for-like refit", "Everything stays where it is. New suite, new tiling, new lighting, replastered and decorated.", "The £9,000 starting point"],
          ["Refit with modest changes", "Bath out, larger shower in; basin moves a metre; new extract; underfloor heating.", "Meaningfully above the starting point"],
          ["Full reconfiguration or wet room", "Layout redesigned, WC moved, walls moved, level-access shower with full tanking.", "Substantially above — a different scope of work"],
        ],
        caption: "Every quote you receive should tell you which of these it is. If it does not, that is the first question to ask.",
      },
      { type: "h2", text: "What the cheap quote is leaving out" },
      {
        type: "p",
        text: "Bathrooms are the easiest room in the house to quote cheaply, because most of what makes one last is invisible when it is finished. The things that reliably go missing from a low quote:",
      },
      {
        type: "ul",
        items: [
          "**Waterproofing.** A tanking system behind the tiles in the wet zones. Tiles and grout are not a waterproof layer, and the failure shows up as a stain on a ceiling two years later — the whole argument is in [tiles are not waterproof](/blog/tiles-are-not-waterproof).",
          "**A proper substrate.** Tile backer board rather than standard plasterboard in the shower, and a floor that is stiff enough not to crack the grout.",
          "**Extract ventilation** that meets the required rate and actually vents outside rather than into the loft. This is a building regulations matter, not a preference.",
          "**Electrical zoning.** Bathrooms have specific requirements for what fitting can go where, and the work is notifiable under Part P.",
          "**Making good.** Plastering, decoration and the strip of floor outside the door where the old tiles finished.",
          "**Disposal.** A bathroom strip-out fills a skip, and skips cost money.",
        ],
      },
      {
        type: "callout",
        title: "The saving",
        text: "Ask for the quote **itemised by trade** rather than as one figure. It takes a good builder ten minutes and it makes the comparison honest: you can see immediately whether the cheap quote is cheaper because it is efficient or because it has no tanking, no backer board and no extract fan in it. That single request is worth more than any amount of haggling.",
      },
      { type: "h2", text: "Where to spend and where not to" },
      {
        type: "p",
        text: "After a lot of these, the pattern is fairly clear.",
      },
      { type: "h3", text: "Worth spending on" },
      {
        type: "ul",
        items: [
          "**The shower valve and the pipework behind it.** It is the most-used item in the room and the most expensive to replace once tiled in.",
          "**Waterproofing.** Non-negotiable.",
          "**The extract fan.** A quiet, effective fan on a humidistat is the difference between a bathroom that stays fresh and one that grows mould in the grout.",
          "**Tiling labour.** The same tiles look completely different depending on the setting-out, and setting-out is skill, not material cost.",
          "**Lighting.** A good scheme with the right IP rating transforms a small room more cheaply than anything else on this list.",
        ],
      },
      { type: "h3", text: "Rarely worth it" },
      {
        type: "ul",
        items: [
          "**Very expensive sanitaryware.** A mid-range ceramic WC and basin from a good manufacturer performs the same as one costing three times as much.",
          "**Fashionable tile formats** that will date faster than the bathroom wears out.",
          "**Complex shower enclosures** with lots of moving parts and seals. Simple is more reliable and usually looks better.",
        ],
      },
      { type: "h2", text: "Does it add value?" },
      {
        type: "p",
        text: "A **second** bathroom or an en-suite is one of the most reliable value-adding changes to a house in this area — it consistently ranks near the top of what buyers ask for, and it is cheap relative to its effect. Replacing a perfectly serviceable existing bathroom adds much less; it makes the house easier to sell rather than worth more. The mechanism, and the ceiling-price test that governs all of it, is in [does an extension add value in Cranleigh](/blog/extension-value-cranleigh).",
      },
      {
        type: "p",
        text: "One point on paperwork: adding a bathroom or WC in a room that never had one is **notifiable to building control**, and the electrical work is notifiable under Part P. Get the certificates and keep them — a missing certificate is a problem at the point of sale, as set out in [what a completion certificate is actually for](/blog/building-control-completion-certificate).",
      },
      {
        type: "p",
        text: "We quote bathrooms itemised, we tank the wet zones as standard, and we would rather tell you the honest number for moving the WC than quote for not moving it and raise it later. If you want a bathroom priced properly, that is a conversation to have with [builders in Cranleigh](/areas/cranleigh) who will still be here if the shower valve fails.",
      },
    ],
    faqs: [
      {
        question: "How much does a new bathroom cost in Cranleigh?",
        answer:
          "A complete refit — strip-out, new suite, tiling, plastering, lighting, ventilation and decoration — starts from around £9,000. What takes it higher is moving the WC, reconfiguring the layout, or building a level-access wet room, rather than the choice of suite.",
      },
      {
        question: "Why does moving the toilet cost so much?",
        answer:
          "Because the soil pipe has to move with it. That usually means lifting the floor, notching or cutting joists — which needs structural sign-off — and running new external pipework at the right fall. It turns a bathroom refit into a drainage and joinery job with a bathroom on top.",
      },
      {
        question: "What should be in a bathroom quote that is often missing?",
        answer:
          "Tanking to the wet zones, tile backer board rather than plasterboard in the shower, an extract fan meeting the required rate and vented outside, Part P notifiable electrical work, making good and decoration, and skip hire. Ask for the quote itemised by trade and these become visible immediately.",
      },
      {
        question: "Does a new bathroom add value to a house?",
        answer:
          "A second bathroom or en-suite reliably does — it is consistently near the top of what buyers ask for and is cheap relative to its effect. Replacing an existing, serviceable bathroom mostly makes the house easier to sell rather than worth more.",
      },
      {
        question: "Do I need building control for a new bathroom?",
        answer:
          "If you are adding a bathroom or WC to a room that did not have one, yes. The electrical work is notifiable under Part P in all cases, and the ventilation has to meet the required extract rate. Keep the certificates — they are what a buyer's solicitor asks for.",
      },
    ],
    art: BLOG_ART["bathroom-fitting-cost-cranleigh"],
  },
  {
    slug: "bat-surveys-timing-cranleigh",
    title: "Bat surveys in Cranleigh: why timing can cost you a year",
    category: "Planning & surveys",
    date: "2026-08-13",
    updated: "2026-09-04",
    seoTitle: "Bat Survey Timing Cranleigh | Why It Can Cost You A Year",
    metaDescription:
      "Bat emergence surveys can only be done May to September. Miss the season on a barn or roof conversion and your project waits until the following May.",
    excerpt:
      "Of everything that delays a building project, this is the one with no workaround. Emergence surveys can only be done in a specific window, and if you miss it, no amount of money brings it forward.",
    imageAlt:
      "Illustration of a twelve-month calendar strip with May to August highlighted in amber as the optimal survey window, September shown as sub-optimal, and a barn roof with a bat silhouette above it",
    related: [
      "cranleigh-settlement-boundary",
      "cranleigh-buildings-of-local-merit",
      "trees-and-foundation-depth-cranleigh",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "A **preliminary roost assessment** can be done at any time of year. It is the daytime inspection that decides whether anything further is needed.",
          "**Emergence and re-entry surveys** can only be done **May to September**, with **May to August optimal** and September sub-optimal, per the Bat Conservation Trust's Good Practice Guidelines.",
          "Where more than one visit is required, they must be **at least three weeks apart** — so a two-visit programme is a two-month programme, minimum.",
          "All UK bat species and their roosts are **protected by law**, whether or not bats are present at the time.",
          "Miss the window on a barn, an outbuilding or a roof conversion and the honest answer is **next May**. There is no expedited option.",
        ],
      },
      {
        type: "p",
        text: "Most delays in a building project can be bought off. You can pay for a faster survey, a bigger team, an expedited service. This one you cannot. Bats emerge when bats emerge, and if the season has closed, the season has closed.",
      },
      {
        type: "p",
        text: "Around Cranleigh this matters more than it does in most places, because of what people are converting. Barns, stables, outbuildings, old roofs with gaps under the tiles and behind the fascias — the buildings that make this area attractive to live in are the same buildings bats like.",
      },
      { type: "h2", text: "When you will be asked for one" },
      {
        type: "p",
        text: "A planning authority will typically require bat survey information where the proposal affects:",
      },
      {
        type: "ul",
        items: [
          "**A barn, stable or agricultural building** being converted — the highest-risk category by some distance.",
          "**A roof**, where it is being stripped, altered, insulated between rafters, or converted into living space.",
          "**Soffits, fascias, bargeboards and hanging tile**, all of which are common roost features.",
          "**A building near woodland, water or mature trees** — which in this parish is a great many of them.",
          "**Mature trees** themselves, where they have cavities, splits or lifting bark and are to be felled or heavily pruned.",
          "**Older and traditional buildings** generally, especially where the roof void is open and undisturbed.",
        ],
      },
      {
        type: "p",
        text: "The trigger is usually the validation checklist on the planning application. You find out you need a survey when the council tells you the application is invalid without one — which is precisely the wrong moment, because by then you have already lost weeks and the season may have moved.",
      },
      { type: "h2", text: "The two stages, and the calendar that governs them" },
      { type: "h3", text: "Stage one: preliminary roost assessment" },
      {
        type: "p",
        text: "A daytime inspection by an ecologist, looking at the building for potential roost features and for evidence — droppings, staining, feeding remains. This can be done **at any time of year**, including December. It produces one of three outcomes: negligible potential (no further work), some potential (further surveys needed), or evidence of a roost (further surveys and probably a licence).",
      },
      { type: "h3", text: "Stage two: emergence and re-entry surveys" },
      {
        type: "p",
        text: "Ecologists watch the building at dusk as bats emerge, and at dawn as they return. This is the part that is season-bound.",
      },
      {
        type: "table",
        head: ["Month", "Preliminary assessment", "Emergence / re-entry survey"],
        rows: [
          ["January – April", "Yes", "**No**"],
          ["May – August", "Yes", "**Yes — optimal**"],
          ["September", "Yes", "Sub-optimal, but possible"],
          ["October – December", "Yes", "**No**"],
        ],
        caption: "Per the Bat Conservation Trust's Bat Surveys for Professional Ecologists: Good Practice Guidelines. July and August visits are what evidence maternity roosts, so a programme that only samples May may not be accepted.",
      },
      {
        type: "p",
        text: "Two further constraints turn this from a date into a programme. Where more than one visit is required — and for a building with moderate or high potential, two or three is normal — the visits must be **separated by at least three weeks**, because roost use changes across the season. And surveys are weather-dependent: a cold, wet or windy night does not count and has to be repeated.",
      },
      {
        type: "callout",
        title: "The arithmetic that ends projects",
        text: "A building with moderate roost potential needs a preliminary assessment plus two emergence surveys three weeks apart, with weather contingency. Start that in **early May** and you have a report in **July**. Start it in **September** and the second visit cannot happen — you are waiting for **next May**. One month's difference in when you commission the ecologist can be a difference of eight months in when you start on site.",
      },
      {
        type: "quote",
        text: "I have had to tell a client in October that his barn conversion was starting the following July, and there was nothing anyone could do with money to change it. That conversation is why I now ask about bats at the first meeting, before we talk about anything else.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      { type: "h2", text: "If bats are found" },
      {
        type: "p",
        text: "It is not the end of the project. All UK bat species are protected — it is an offence to deliberately kill, injure or disturb them, or to damage or destroy a breeding site or resting place, **whether or not bats are present at the time**. But protection is not prohibition.",
      },
      {
        type: "ol",
        items: [
          "The ecologist designs **mitigation** — usually retaining or replacing the roost, with bat access tiles, a bat loft, or purpose-built boxes.",
          "Where the work will affect a roost, a **European Protected Species licence** is applied for from Natural England, supported by the survey work and the mitigation plan.",
          "The work is then carried out **under the licence**, often with timing restrictions — no roof work during the maternity season, for instance — and sometimes with an ecologist present at key stages.",
        ],
      },
      {
        type: "p",
        text: "The licence process takes weeks and has its own fee, and the timing restrictions are another thing to build into the programme. But schemes get consented and built. What does not work is doing the work first and asking afterwards: this is criminal law rather than planning law, and ignorance of a roost you were told to survey for is not a defence anyone wants to test.",
      },
      { type: "h2", text: "How to stay ahead of it" },
      {
        type: "ol",
        items: [
          "**Ask about bats at the first meeting**, before the design work starts. If the project involves a barn, an outbuilding or a roof, assume a survey will be wanted until an ecologist says otherwise.",
          "**Book the preliminary roost assessment in winter.** It can be done any time, it is the cheaper of the two stages, and its outcome tells you whether you are on the clock.",
          "**If further surveys are needed, book them for May.** Not June, not July — May, so you have the rest of the season as contingency for bad weather.",
          "**Build the ecology programme into the planning programme**, alongside the [party wall notices](/blog/party-wall-notice-timing) and any [tree work notice in the conservation area](/blog/cranleigh-conservation-area-consent), which also runs to six weeks.",
          "**Budget for it properly.** A preliminary assessment is a few hundred pounds; a full survey programme with a licence application runs into the low thousands. Both are trivial next to a year of delay.",
        ],
      },
      {
        type: "p",
        text: "The single most useful thing a builder can do on a barn conversion around here is ask the bat question in October rather than in April. We ask it early, and we would rather lose a fortnight at the start than a season in the middle. That kind of local sequencing knowledge is a large part of what using [builders in Cranleigh](/areas/cranleigh) is actually for.",
      },
    ],
    faqs: [
      {
        question: "When can bat surveys be carried out?",
        answer:
          "A preliminary roost assessment — the daytime inspection — can be done at any time of year. Emergence and re-entry surveys can only be done between May and September, with May to August considered optimal and September sub-optimal under the Bat Conservation Trust's Good Practice Guidelines. Where several visits are needed they must be at least three weeks apart.",
      },
      {
        question: "Do I need a bat survey for a barn conversion in Cranleigh?",
        answer:
          "Almost certainly. Barns, stables and agricultural buildings are the highest-risk category for roosts, and Waverley's validation checklist will normally require survey information before an application is valid. Commission the preliminary assessment in winter so you know where you stand before the season opens.",
      },
      {
        question: "What happens if bats are found in my roof?",
        answer:
          "The project continues, with mitigation. The ecologist designs a scheme to retain or replace the roost — bat access tiles, a bat loft, or boxes — and where the work affects a roost you apply to Natural England for a European Protected Species licence. Expect timing restrictions, particularly around the maternity season, and expect the licence to take weeks.",
      },
      {
        question: "Can I pay to have a bat survey done faster?",
        answer:
          "No. This is the one delay money does not solve. Emergence surveys depend on bats being active, which happens between May and September, and repeat visits must be three weeks apart. Miss the window and the honest answer is the following May.",
      },
      {
        question: "How much does a bat survey cost?",
        answer:
          "A preliminary roost assessment is typically a few hundred pounds. A full programme of emergence surveys, a mitigation design and a licence application runs into the low thousands. Both are small compared with the cost of a project sitting idle for a season.",
      },
    ],
    art: BLOG_ART["bat-surveys-timing-cranleigh"],
  },
  {
    slug: "tiles-are-not-waterproof",
    title: "Tiles are not waterproof, and why that matters",
    category: "Bathrooms",
    date: "2026-08-13",
    updated: "2026-09-04",
    seoTitle: "Are Tiles Waterproof? | Why Bathrooms Need Tanking",
    metaDescription:
      "Tiles and grout are water-resistant, not waterproof. The waterproof layer is the tanking behind them — and it is the first thing a cheap bathroom quote leaves out.",
    excerpt:
      "The most common bathroom failure we are called to is not a leaking pipe. It is water going straight through the grout, into the wall behind, and appearing on a ceiling downstairs eighteen months later.",
    imageAlt:
      "Illustration of a shower wall in section: tiles and grout on the surface with water passing through the grout joints, an amber tanking membrane behind them stopping it, and the wall board and timber stud beyond staying dry",
    related: [
      "bathroom-fitting-cost-cranleigh",
      "trickle-vents-approved-document-f",
      "building-control-completion-certificate",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "Tiles are waterproof. **Grout is not.** Grout is a porous cement-based material and water passes through it steadily.",
          "The waterproof layer in a shower is the **tanking system behind the tiles**, not the tiles themselves.",
          "**Standard plasterboard is the wrong substrate** for a shower enclosure. Tile backer board is the right one.",
          "Failures show up **twelve to twenty-four months later**, as a stain on a ceiling or a soft patch at the base of a wall — long after the tiler has gone.",
          "Tanking a shower properly is a small part of a bathroom budget. Rebuilding a floor is not.",
        ],
      },
      {
        type: "p",
        text: "This is the most useful hundred words in any bathroom conversation, so here they are up front. Water gets through grout. It always has. Grout is a cement-based, porous material with a fine capillary structure, and a shower puts water against it under pressure for an hour a day, every day, for fifteen years. Sealing it helps and wears off. The tile is impervious; the joint between the tiles is not.",
      },
      {
        type: "p",
        text: "Which means: whatever is behind the tiles is what is keeping the water out of your wall. If that is a sheet of standard plasterboard, you have no waterproofing at all — you have a paper-faced gypsum board slowly absorbing water.",
      },
      { type: "h2", text: "What failure actually looks like" },
      {
        type: "p",
        text: "The reason this is so common is that it is invisible for a long time. There is no leak, no drip, no obvious event. Water passes through the grout, wets the board behind, and the board wicks it downward and outward.",
      },
      {
        type: "table",
        head: ["Roughly when", "What you see", "What is happening"],
        rows: [
          ["0 – 12 months", "Nothing. The bathroom looks perfect.", "Board behind the tiles is absorbing water and staying damp between showers."],
          ["12 – 24 months", "A hairline crack in the grout at an internal corner; grout darkening in one spot.", "The board has softened and is moving slightly. Movement cracks the grout, which lets in more water."],
          ["18 – 36 months", "A stain on the ceiling below, or peeling paint on the far side of the wall.", "Water has reached the floor void and is tracking along a joist."],
          ["2 – 5 years", "A tile sounds hollow; the shower tray edge is soft; a musty smell.", "The substrate has failed. The tiles are now held on by adhesive to something with no strength."],
          ["The repair", "Strip the tiles, replace the board, replace anything rotten, re-tile.", "You are paying for the bathroom twice, plus the ceiling below."],
        ],
        caption: "By the time it is visible, the fix is not a tube of sealant. This is why it is worth getting right the first time.",
      },
      {
        type: "quote",
        text: "Nobody has ever called me because the tanking failed. They call because there was no tanking. It is a couple of hundred pounds of material and half a day, in a job costing thousands, and it is the first thing that gets left out when someone is trying to win the work on price.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      { type: "h2", text: "What a proper shower wall is made of" },
      {
        type: "p",
        text: "Working outward from the stud:",
      },
      {
        type: "ol",
        items: [
          "**A stiff, correctly spaced substrate.** Studs at appropriate centres, with noggins where boards meet. Deflection is what cracks grout.",
          "**Tile backer board** in the wet zone — a cement or foam-cored board that does not degrade when wet — rather than standard or even moisture-resistant plasterboard. Moisture-resistant board is designed for humidity, not for direct wetting.",
          "**A tanking system**: a liquid-applied membrane or a bonded sheet membrane, taken over the whole wet zone, with reinforcing tape bedded into every internal corner and around every pipe penetration.",
          "**A suitable adhesive**, appropriate for the board and for the tile weight.",
          "**Tiles and grout**, with **silicone rather than grout** at every internal corner and change of plane, because those are the joints that move.",
        ],
      },
      {
        type: "p",
        text: "Corners and penetrations are where systems fail, not the middle of a wall. Any tanking product will keep water out of a flat expanse of board. What separates a job that lasts is the reinforcing tape in the corner where the wall meets the tray, and the collar around the shower valve pipework.",
      },
      { type: "h2", text: "Wet rooms are a different animal again" },
      {
        type: "p",
        text: "In a wet room there is no tray to contain the water, so the **floor** becomes part of the waterproofing and the whole floor build-up changes: falls formed to a linear or centre drain, tanking taken across the floor and up the walls as a continuous membrane, and the junction between floor and wall detailed properly.",
      },
      {
        type: "p",
        text: "On a suspended timber floor — which is most Cranleigh houses of any age — this needs proper design, because you are forming falls in a floor that also has to stay stiff. It is entirely doable and it is the reason a wet room costs more than a shower enclosure. Anyone quoting a wet room at shower-enclosure prices has not understood the job.",
      },
      {
        type: "callout",
        title: "The saving",
        text: "Ask one question of every bathroom quote: **\"What tanking system are you using, and how far does it extend?\"** A good answer names a product and describes the zone. A vague answer — \"it'll be fine, the tiles are waterproof\" — has just told you the quote is cheap because the waterproofing is missing. That question costs nothing and is worth thousands.",
      },
      { type: "h2", text: "The other half: ventilation" },
      {
        type: "p",
        text: "Waterproofing stops water going into the wall. It does nothing about the water in the air, and a bathroom generates an enormous amount of it. Without effective extract ventilation, that moisture condenses on the coldest surfaces in the room and you get mould in the grout and on the ceiling — which people then blame on the tiling.",
      },
      {
        type: "p",
        text: "Extract ventilation in a bathroom is a building regulations requirement with a specified rate, and the fan has to actually vent to outside rather than into a loft void. It is the same principle as the [trickle vent argument on windows](/blog/trickle-vents-approved-document-f): a sealed, well-built room needs a designed route for moisture to leave.",
      },
      { type: "h2", text: "If you already suspect a problem" },
      {
        type: "ol",
        items: [
          "**Tap the tiles** around the shower. A hollow note where others sound solid means the adhesive has lost its grip on a failing substrate.",
          "**Press the grout at the internal corners** and at the tray junction. Any softness or movement behind is a bad sign.",
          "**Look at the ceiling below**, and at the wall on the other side, for staining or peeling paint.",
          "**Check the floor at the shower threshold** for softness or springiness.",
          "**Do not just re-grout.** Re-grouting a failing wall hides the symptom for a few months and lets the substrate rot further. If the board behind has gone, the only real fix is to strip and rebuild that wall.",
        ],
      },
      {
        type: "p",
        text: "We tank the wet zones on every bathroom as standard and we itemise it on the quote so you can see it is there. If you are comparing bathroom prices and one is noticeably cheaper, ask that question about tanking before you decide — it is the sort of thing you should be able to check with [builders in Cranleigh](/areas/cranleigh) who expect to be working in this town in ten years' time.",
      },
    ],
    faqs: [
      {
        question: "Are bathroom tiles waterproof?",
        answer:
          "The tiles are. The grout between them is not — it is a porous cement-based material and water passes through it steadily. The waterproof layer in a shower is the tanking membrane behind the tiles, not the tiles themselves.",
      },
      {
        question: "What is tanking and do I need it?",
        answer:
          "Tanking is a waterproof membrane — liquid-applied or a bonded sheet — installed over the substrate before tiling, with reinforcing tape in the corners and collars around pipe penetrations. In a shower enclosure or wet room, yes, you need it. It is a small part of a bathroom budget and it is what prevents the wall behind the tiles failing.",
      },
      {
        question: "Can you tile straight onto plasterboard in a shower?",
        answer:
          "You should not. Standard plasterboard is paper-faced gypsum and degrades when wet, and even moisture-resistant board is designed for humidity rather than direct wetting. A shower enclosure needs tile backer board — cement or foam-cored — with a tanking system over it.",
      },
      {
        question: "How long before a badly waterproofed shower fails?",
        answer:
          "Typically twelve to twenty-four months before anything is visible, and two to five years before the substrate has failed properly. That delay is why the problem is so common — it appears long after the work was signed off and paid for.",
      },
      {
        question: "Can I just re-grout a shower that is leaking into the wall?",
        answer:
          "No. Re-grouting hides the symptom for a few months while the board behind continues to rot. If water has got through and the substrate has softened, the wall has to be stripped back, the board replaced, tanked properly and re-tiled.",
      },
    ],
    art: BLOG_ART["tiles-are-not-waterproof"],
  },
  {
    slug: "trees-and-foundation-depth-cranleigh",
    title: "In Cranleigh, the tree in your garden sets your foundation depth",
    category: "Foundations",
    date: "2026-08-13",
    updated: "2026-09-04",
    seoTitle: "Trees And Foundation Depth Cranleigh | Weald Clay Explained",
    metaDescription:
      "Cranleigh sits on Weald Clay, one of the most shrink-swell reactive soils in England. Near a mature oak, foundations can go from 0.9m to 2.5m — and so can the price.",
    excerpt:
      "The biggest single variable in an extension quote here is not the kitchen or the glazing. It is how deep the hole has to be, and that is decided by the clay under your garden and the tree standing in it.",
    imageAlt:
      "Illustration of a section through a garden showing a mature oak, its root zone spreading through orange clay, and two foundation trenches side by side — a shallow 0.9 metre one and a deep 2.5 metre one marked in amber",
    related: [
      "extending-1930s-semi-cranleigh",
      "cranleigh-conservation-area-consent",
      "party-wall-notice-timing",
      "building-on-weald-clay-cranleigh-footings",
    ],
    body: [
      {
        type: "takeaways",
        items: [
          "Cranleigh sits largely on the **Weald Clay Formation** — stiff, fissured clay with moderate to high shrink–swell potential, among the most reactive soils in England.",
          "Clay shrinks when trees draw moisture out of it and swells when it rewets. Foundations that are too shallow move with it.",
          "The general minimum foundation depth is **0.9m**. Near a mature high-water-demand tree such as an oak, **NHBC Chapter 4.2** can require **2.5m or more**.",
          "The governing figure is the **D/M ratio** — distance to the tree divided by that species' mature height — combined with soil shrinkability.",
          "This is the largest single source of variation between two extension quotes for the same drawing. A trial hole resolves it for a few hundred pounds.",
        ],
      },
      {
        type: "p",
        text: "Two builders quote for the same extension on the same drawing. One comes back at £68,000, the other at £84,000. The homeowner assumes one is greedy or one is cutting corners. Usually neither is true: one has allowed for a 0.9m foundation and the other has allowed for 2.2m, because there is an oak forty feet from the corner of the proposed footprint.",
      },
      {
        type: "p",
        text: "Understanding this one thing will tell you more about why building quotes differ around here than anything else you could read.",
      },
      { type: "h2", text: "What the ground under Cranleigh is doing" },
      {
        type: "p",
        text: "Cranleigh sits largely on the **Weald Clay Formation**. It is a thick, highly plastic clay, and it is one of the more shrink–swell reactive soils in the country. The behaviour is straightforward: the clay minerals absorb water and swell, and lose water and shrink. The volume change is significant and it is seasonal.",
      },
      {
        type: "p",
        text: "Left alone, that seasonal movement happens in the top metre or so and everything below stays fairly stable. Put a large tree next to it and the picture changes. A mature tree draws a great deal of water out of the soil over a summer, from a root zone that extends far wider than the canopy and deeper than people expect. The clay in that zone shrinks — not just at the surface, but to depth.",
      },
      {
        type: "p",
        text: "A foundation sitting above the depth of that seasonal movement moves with it: down in a dry summer, back up over a wet winter. That cycle is what cracks walls. It is also what happens in reverse when a tree is **removed** — the clay rehydrates and heaves, which can be more damaging than the shrinkage was.",
      },
      {
        type: "callout",
        title: "Do not fell the tree to solve the problem",
        text: "Removing a mature tree next to a house on shrinkable clay causes **heave** as the ground rehydrates over the following years, and heave is harder to design for than settlement. It may also be illegal — trees in the [Cranleigh Conservation Area](/blog/cranleigh-conservation-area-consent) need six weeks' written notice to Waverley, and a Tree Preservation Order makes it an offence. Design for the tree; do not try to remove the design problem.",
      },
      { type: "h2", text: "How the depth is actually decided" },
      {
        type: "p",
        text: "The standard reference is **NHBC Standards Chapter 4.2, Building Near Trees**, and it works on three inputs.",
      },
      {
        type: "ol",
        items: [
          "**The shrinkability of the soil** — low, medium or high, determined from the plasticity of the clay. Weald Clay sits at the reactive end.",
          "**The water demand of the tree species.** Oak, elm, willow and poplar are high demand. Others are moderate or low. It is the species, not the size today, that matters.",
          "**The D/M ratio** — the distance from the tree to the foundation (D), divided by that species' **mature** height (M). A young oak is assessed on the height an oak reaches, not the height it is now.",
        ],
      },
      {
        type: "table",
        head: ["Situation", "Indicative foundation depth"],
        rows: [
          ["No influencing trees, low shrinkability", "**0.9m** — the general minimum"],
          ["Low water demand species, low shrinkability soil", "**0.9m** may be sufficient"],
          ["Moderate demand species at moderate distance, medium shrinkability", "Typically **1.2 – 1.8m**"],
          ["High demand species such as oak, high shrinkability clay, at 0.5–1× mature height away", "**2.5 – 3.0m**"],
        ],
        caption: "Indicative only, from NHBC Chapter 4.2 guidance. Your actual depth comes from an engineer working from a site investigation, not from a table on a website.",
      },
      {
        type: "quote",
        text: "The tree that decides your foundation is often not in your garden. It is the neighbour's oak, or the one on the verge that the council owns, and you cannot touch either of them. Measure the distance to every mature tree within about thirty metres, not just your own.",
        attribution: "Paul Martyn, P Martyn Co Ltd",
      },
      { type: "h2", text: "What the depth does to the price" },
      {
        type: "p",
        text: "Depth does not scale the cost linearly. It changes the method.",
      },
      {
        type: "ul",
        items: [
          "**Up to about 1.2m**: conventional trench fill. A digger, a day or two, and concrete. Straightforward.",
          "**1.2m to about 2.5m**: deep trench fill. Considerably more concrete, more spoil to cart away, and trench support for safety. Costs rise steeply with depth because the volume of concrete rises with it.",
          "**Beyond about 2.5m**, or on a tight site: **piled foundations with ground beams**, and often a suspended floor with a void beneath so the slab is not sitting on the moving clay. A different specialist, a different programme and a different price.",
          "**Clay heave protection** — compressible material to the sides of the foundation and under ground beams — where the design has to allow for the ground swelling.",
        ],
      },
      {
        type: "p",
        text: "So the honest answer to \"how much will the foundations cost\" is that it depends on a number nobody has measured yet. Which is exactly why the next section matters.",
      },
      { type: "h2", text: "The trial hole, and why it is the best money in the project" },
      {
        type: "callout",
        title: "The saving",
        text: "A trial hole costs a few hundred pounds and takes an afternoon. It tells you the depth of the existing foundations, the soil profile, the water table, and whether there is anything unexpected down there. It turns the single largest variable in the project into a known number — which means the quote you sign is a **price**, not an estimate that will be revised once the hole is open and the digger is on hire.",
      },
      {
        type: "p",
        text: "If you take one practical thing from this post, take that. Almost every dispute we hear about between a homeowner and a builder over a variation traces back to something the ground did that nobody investigated. A fixed price is only as fixed as the assumptions underneath it, and this is the assumption that moves.",
      },
      { type: "h2", text: "The checklist before you accept a quote" },
      {
        type: "ol",
        items: [
          "**Identify every mature tree within roughly thirty metres**, including neighbours' trees and street trees, and identify the species.",
          "**Check for Tree Preservation Orders** and whether the site is in the conservation area, where a six-week notice applies to tree work.",
          "**Get a trial hole dug** and, where the site warrants it, a soil investigation with plasticity testing.",
          "**Have a structural engineer specify the foundation** from that evidence — £1,500–£3,000 covers steel and foundation design, and it is not the place to economise.",
          "**Ask every quote in writing what foundation depth it assumes.** This is the single question that makes two quotes comparable.",
          "**Ask what happens if the depth turns out to be greater** — how the variation is calculated, and at what rate.",
        ],
      },
      {
        type: "p",
        text: "We would rather dig a hole in your garden in week one than have a difficult conversation in week six, and we state the assumed depth on our quotations so you can compare them honestly against anyone else's. Knowing what the ground does here is not general building knowledge — it is local knowledge, and it is a large part of why it is worth using [builders in Cranleigh](/areas/cranleigh) on Weald Clay.",
      },
    ],
    faqs: [
      {
        question: "How deep do foundations need to be near a tree?",
        answer:
          "It depends on the soil's shrinkability, the tree species' water demand, and the distance to the tree relative to that species' mature height. The general minimum is 0.9m. On high-shrinkage clay near a high-water-demand species such as oak, NHBC Chapter 4.2 guidance can indicate 2.5 to 3.0m. Your actual depth should come from an engineer working from a site investigation.",
      },
      {
        question: "What soil is Cranleigh built on?",
        answer:
          "Largely the Weald Clay Formation — a stiff, fissured, highly plastic clay with moderate to high shrink–swell potential, among the most reactive soils in England. It swells when wet and shrinks when dry, and mature trees drawing water out of it are what drives the seasonal movement that damages shallow foundations.",
      },
      {
        question: "Should I cut down the tree so I can have shallower foundations?",
        answer:
          "No. Removing a mature tree from shrinkable clay next to a building causes heave as the ground rehydrates over subsequent years, which is harder to design for than settlement. It may also be unlawful — conservation area trees need six weeks' notice to Waverley and a Tree Preservation Order makes felling an offence. Design for the tree instead.",
      },
      {
        question: "Why do two builders quote such different prices for the same extension?",
        answer:
          "Most often because they have assumed different foundation depths. The difference between 0.9m of trench fill and 2.2m across a 25m² footprint is several times the concrete, much more spoil to remove and trench support. Ask every quote to state its assumed depth in writing, and ask how a variation would be priced if the ground says otherwise.",
      },
      {
        question: "What is a trial hole and is it worth paying for?",
        answer:
          "It is an excavation dug before work starts to reveal the existing foundation depth, the soil profile and the water table. It costs a few hundred pounds and an afternoon, and it converts the largest unknown in the project into a number. On Weald Clay near mature trees it is consistently the best-value spend in the whole job.",
      },
    ],
    art: BLOG_ART["trees-and-foundation-depth-cranleigh"],
  },
];
