/**
 * Paul Martyn Construction — website copy v1.
 *
 * All copy below is Paul Martyn Construction's own.
 *
 * Photography: the bathrooms gallery is genuine Paul Martyn work. Everything
 * else is still stand-in reference imagery carried over from the design
 * reference and MUST be replaced with real project photos before launch.
 */
import type {
  BoxLink,
  PriceBand,
  Review,
  SiteVideo,
  HeroSlide,
  NavChild,
  NavItem,
  ProcessStep,
  ServiceTab,
  Testimonial,
} from "@/types/paulmartyn";

const IMG = "/sites/paulmartyn/images";
const BATH = `${IMG}/bathrooms`;
const STAIRS = `${IMG}/staircases`;
const RENO = `${IMG}/renovations`;
const KITCHEN = `${IMG}/kitchens`;
const COMMERCIAL = `${IMG}/commercial`;
const NEWBUILD = `${IMG}/new-builds`;
const LISTED = `${IMG}/listed`;
const PROJMAN = `${IMG}/project-management`;
const VIDEO = "/sites/paulmartyn/videos";
export const SHARED = "/sites/paulmartyn/shared";

export const COMPANY = {
  name: "Paul Martyn",
  legalName: "P Martyn Co Ltd",
} as const;

export const CONTACT = {
  strapline: "Ready to talk about your project?",
  phone: "01483 612156",
  phoneHref: "tel:+441483612156",
  mobile: "07894 336553",
  mobileHref: "tel:+447894336553",
  email: "Paul@paulmartynconstruction.com",
  emailHref: "mailto:Paul@paulmartynconstruction.com",
  location: "Based in the Surrey Hills — working across Surrey, Hampshire and West Sussex.",
} as const;

export const NAV: NavItem[] = [
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Residential renovations & extensions", path: "/services/renovations-extensions" },
      { label: "New builds", path: "/services/new-builds" },
      { label: "Listed buildings & heritage work", path: "/services/listed-buildings" },
      { label: "Commercial, bars & hotels", path: "/services/commercial" },
      { label: "Kitchens", path: "/services/kitchens" },
      { label: "Bathrooms", path: "/services/bathrooms" },
      { label: "Staircases", path: "/services/staircases" },
      { label: "Project management", path: "/services/project-management" },
    ],
  },
  { label: "Pricing", path: "/pricing" },
  { label: "About Us", path: "/about-us" },
  { label: "Our Process", path: "/process" },
  { label: "Contact", path: "/contact" },
];

export const HERO = {
  heading: "Building in the Surrey Hills for over 16 years.",
  subheading:
    "A family-run construction company delivering residential renovations, new builds and listed building work — managed properly, priced transparently, finished to last.",
  primaryCta: { label: "View our services", path: "/services" },
  secondaryCta: { label: "Get in touch", path: "/contact" },
  slides: [
    { image: `${IMG}/hero-balcony-extension.jpg`, alt: "" },
    { image: `${IMG}/hero-panorama.jpg`, alt: "" },
    { image: `${IMG}/hero-panorama-2.jpg`, alt: "" },
  ] satisfies HeroSlide[],
};

/**
 * "About us". Client-supplied copy.
 *
 * Used twice: the homepage intro band and the /about-us page, both of which
 * render every paragraph in `body`. `body[0]` also becomes the About page's
 * meta description, so keep the first paragraph self-contained and roughly
 * 150–160 characters.
 */
export const INTRO = {
  eyebrow: "ABOUT US",
  heading: "We build exceptional spaces for living and working.",
  body: [
    "Family-run and based in the Surrey Hills, we have spent the past 16 years delivering high-quality residential and commercial projects across Surrey and the surrounding areas.",
    "Our approach is straightforward: understand what our clients want to achieve, provide the experience and expertise to make it happen, and deliver every project with careful attention to quality, detail, programme and cost.",
    "From individual homes and complex renovations to commercial and hospitality projects, we take pride in the standard of our work and the relationships we build along the way. We believe good construction is about more than the finished building — it is about providing a professional, well-managed service from the first conversation through to completion.",
  ],
  /** About Us page. */
  image: `${IMG}/about-intro.jpg`,
  /** Homepage intro band — a completed Paul Martyn new build at Stocton Road. */
  homeImage: `${NEWBUILD}/stocton-road.jpg`,
  /** Project credit shown under the photo. Keep captions this short. */
  homeImageCaption: "Stocton Road, Guildford",
};

export const WHY_US = {
  heading: "Outstanding service, outstanding results",
  background: `${IMG}/house-renovation.jpg`,
  items: [
    {
      title: "Family-run, locally rooted",
      body: "We live and work in the Surrey Hills. Our reputation is built one project — and one recommendation — at a time.",
      icon: "map-pin",
    },
    {
      title: "16+ years of experience",
      body: "From heritage restorations to commercial fit-outs, there's very little we haven't planned, priced and built.",
      icon: "badge",
    },
    {
      title: "Transparent costs",
      body: "You'll get a clear quote up front, and if the project changes, we agree the cost with you before anything happens. No surprise extras at the end — achieved through a process of signing off any alterations and additions before we action them.",
      icon: "receipt",
    },
    {
      title: "One point of contact",
      body: "Your project manager leads the project from start to finish. You'll always know who to call and what's happening on site.",
      icon: "user",
    },
  ] satisfies BoxLink[],
};

export const SERVICES = {
  heading: "Services",
  /** Standfirst — also reused on the homepage and About page. */
  lead: "From barn conversions and listed building restorations to contemporary new builds and commercial fit-outs, we bring the same standard to every site: do it once, do it right.",
  body: [
    "No two projects are the same, and that's exactly how we like it. One month we might be carefully restoring a 300-year-old timber frame, working with the conservation and heritage team; the next, we're fitting out a bar to a deadline that can't move. Whatever the job, the approach doesn't change — proper planning, honest pricing, skilled trades we've worked with for years, and a site that's run tidily and safely from day one.",
    "We take on the projects that need thought as well as graft: awkward sites, older buildings with surprises in the walls, ambitious designs that need someone to work out how they'll actually be built. That's where 16 years of experience earns its keep. We'd rather spend an extra hour planning than an extra week fixing, and our clients tell us it shows in the finish — and in the final bill.",
  ],
  pullQuote:
    "Most of our work comes through recommendation, and we think that says more than anything we could write here.",
  /** Contact and Pricing pages. */
  image: `${IMG}/services-overview.jpg`,
  /** Homepage services band — the barn-conversion restaurant fit-out. */
  homeImage: `${COMMERCIAL}/barn-restaurant.jpg`,
  viewAll: { label: "All services", path: "/services" },
  tabs: [
    {
      id: "service-renovations",
      label: "Renovations",
      heading: "Residential renovations & extensions",
      body: "Whole-house renovations, extensions and remodelling — opening up period properties or bringing tired homes back to life, with the structural work, finishes and detail handled under one roof.",
      detail: [
        "We take on complete renovation and remodelling projects, managing everything from the initial strip-out and structural alterations through to the final finishes. Whether you're extending a family home, reconfiguring an existing layout or carrying out a full property transformation, we coordinate the entire build so that every stage works together.",
        "Our work can include major structural alterations, steel installations, new openings and extensions, alongside complete mechanical and electrical design. We can also integrate modern energy and smart-home systems, including intelligent lighting, heating and climate control, security and connected home technology — bringing the performance and convenience of a modern home into both new and period properties.",
        "For period and character properties, we understand that successful renovation is often about deciding what should be retained as much as what should be replaced. Existing brickwork, timber, fireplaces and architectural details can be carefully incorporated into the new design, while outdated layouts, services and poorly executed previous alterations are removed or improved.",
        "From structural works and the building fabric through to plastering, bespoke joinery, kitchens, bathrooms, flooring and decoration, the project is managed as one coordinated build. This gives you a single point of responsibility for programme, workmanship and cost — rather than having to manage multiple trades and contractors yourself.",
        "The result is a home that feels considered as a whole: better use of space, improved natural light, modern services, smarter energy performance and high-quality finishes that feel appropriate to the property rather than simply added onto it.",
      ],
      linkLabel: "Read more >>",
      path: "/services/renovations-extensions",
      image: `${RENO}/gable-extension-glazing.jpg`,
      imageAlt: "Vaulted gable extension with full-height glazing",
      gallery: [
        { src: `${RENO}/gable-extension-glazing.jpg`, alt: "Vaulted gable extension with full-height apex glazing and a clay tiled roof, joined to the original brick house" },
        { src: `${RENO}/balcony-extension-brick.jpg`, alt: "Brick extension with a glass-balustraded balcony over a covered terrace, downlit soffit and full-height sliding doors" },
        { src: `${RENO}/pool-garden-room.jpg`, alt: "Landscaped rear garden with a cedar-clad garden room, patterned terrace and outdoor pool" },
        { src: `${RENO}/rooflight-extension.jpg`, alt: "Extension interior with a full-length slot rooflight and a tall picture window onto the garden" },
        { src: `${RENO}/rear-elevation-pool.jpg`, alt: "Rear elevation of a large tile-hung house renovation, with the pool and terrace nearing completion" },
        { src: `${RENO}/aerial-roof-solar.jpg`, alt: "Aerial view of a re-roofed house with new clay tiles, dormer and solar panels" },
        { src: `${RENO}/kitchen-extension-herringbone.jpg`, alt: "Kitchen extension with a rooflight, herringbone oak flooring, marble-clad seating nook and a quartz-topped island" },
        { src: `${RENO}/tilehung-render-corner.jpg`, alt: "Tile-hung and rendered elevation with a new brick chimney and bay, nearing completion" },
        { src: `${RENO}/weatherboard-house.jpg`, alt: "Black weatherboarded elevation with a new dormer rooflight and oak front door" },
        { src: `${RENO}/brick-semi-sign.jpg`, alt: "Newly completed brick house with slate roof, new fencing and planting" },
        { src: `${RENO}/entrance-gates.jpg`, alt: "New brick piers, boundary wall and painted timber entrance gates with keypad entry" },
        { src: `${RENO}/strip-out-first-fix.jpg`, alt: "Interior stripped back to the frame at first fix, with insulation board, steelwork and new services run" },
        { src: `${RENO}/vaulted-barn-kitchen.jpg`, alt: "Barn conversion opened up to the roof, with a new mezzanine, exposed trusses, rooflights and a kitchen fitted below" },
        { src: `${RENO}/panelled-bedroom.jpg`, alt: "Bedroom with a full-height panelled feature wall, brass swing-arm wall lights and an upholstered bed" },
        { src: `${RENO}/barn-frame-pendants.jpg`, alt: "Stairwell of a barn conversion, looking down past the original oak frame to a cluster of wire pendant lights and a slatted timber wall" },
        { src: `${RENO}/kitchen-island-rooflight.jpg`, alt: "Open-plan kitchen with a slot rooflight over a quartz-topped island, dark green walls and shaker cabinetry" },
        { src: `${RENO}/fitted-wardrobes-green.jpg`, alt: "Wall of bespoke fitted wardrobes in sage green with slim brass handles, built into a bedroom recess" },
      ],
    },
    {
      id: "service-new-builds",
      label: "New Builds",
      heading: "New builds",
      body: "Architect-designed new homes delivered from groundworks to handover, with tight cost control and a build programme you can actually rely on.",
      detail: [
        "At Paul Martyn Construction, we deliver high-quality new build homes from the ground up, managing every stage of the construction process from initial site preparation and groundworks through to the final finishes and handover. Working closely with homeowners, architects, structural engineers and designers, we turn detailed plans into beautifully finished, practical homes built for modern living. Our experienced team coordinates the entire build, from foundations, structural works, brickwork, masonry and roofing through to mechanical and electrical design, solar energy systems, air source heat pumps and air conditioning.",
        "We understand that building a new home is a significant investment, which is why cost control, communication and programme management are at the heart of the way we work. From the outset, we establish a clear scope of works, realistic construction programme and transparent approach to costs, helping to minimise unexpected extras and delays as the project progresses. Whether you are creating a contemporary architect-designed property, a traditional Surrey home or a highly energy-efficient new build, our focus is the same: excellent workmanship, careful attention to detail and a professionally managed build from start to finish.",
      ],
      linkLabel: "Read more >>",
      path: "/services/new-builds",
      image: `${NEWBUILD}/millars-cottages.jpg`,
      imageAlt: "Millars Cottages — completed new build in red brick with a slate roof",
      gallery: [
        { src: `${NEWBUILD}/millars-cottages.jpg`, alt: "Millars Cottages — completed new build end-of-terrace in red brick with a slate roof, gabled porch and newly planted front garden" },
        { src: `${NEWBUILD}/stocton-road.jpg`, alt: "Stocton Road, Guildford — pair of new build houses seen from the garden, rendered upper floors over a brick plinth with Juliet balconies" },
        { src: `${NEWBUILD}/mark-way-godalming.jpg`, alt: "Mark Way, Godalming — new coach house with triple garage, clay tiled roof and a dormer to the room above" },
      ],
    },
    {
      id: "service-listed",
      label: "Listed Buildings",
      heading: "Listed buildings & heritage work",
      body: "Sensitive restoration and alteration of listed and period properties, working with conservation officers and specialist trades to protect what matters while making these buildings work for modern life.",
      detail: [
        "Heritage buildings require a different approach to conventional construction. We work carefully with the existing structure and character of the property, understanding what should be preserved, what can be repaired and where sympathetic alterations can improve the way the building is used without compromising its history.",
        "Our work can include listed buildings, period homes, barns, farm buildings and other character properties, through to substantial renovations and complete restorations.",
        "Where required, we work alongside architects, structural engineers, conservation officers and specialist consultants, helping to ensure that proposed works are appropriate for the building and carried out in accordance with planning and Listed Building Consent requirements.",
        "Traditional materials and craftsmanship are an important part of this work. Depending on the property, this can include lime mortar and plaster, traditional brickwork, masonry and stonework, timber repairs, heritage roofing, leadwork, bespoke joinery and the careful restoration or replacement of original architectural details. Wherever possible, existing materials and features are repaired and retained rather than unnecessarily replaced.",
        "From structural repairs and historic fabric through to specialist finishes and bespoke joinery, we coordinate the different trades as one managed project.",
        "The aim is to retain and preserve the historical qualities that make a property special, while creating a home that works comfortably, practically and efficiently for modern life.",
        "Whether you are looking to create a period-appropriate interior that respects the original architecture, introduce a more contemporary design within a historic setting, or carefully combine the two, we can bring both approaches to the table. The key is finding the right balance — respecting the history and character of the building while creating spaces that genuinely work for the way you want to live.",
        "The result is a property where old and new sit comfortably together — retaining the craftsmanship, materials and character that give the building its identity, while delivering the comfort, functionality and energy efficiency expected from a modern home.",
      ],
      linkLabel: "Read more >>",
      path: "/services/listed-buildings",
      image: `${LISTED}/barn-kitchen-stair.jpg`,
      imageAlt: "Timber-framed barn conversion with a new open-tread staircase",
      gallery: [
        { src: `${LISTED}/barn-kitchen-stair.jpg`, alt: "Timber-framed barn conversion with the original frame and stone plinth retained alongside a new open-tread staircase and kitchen" },
        { src: `${LISTED}/barn-fireplace-trusses.jpg`, alt: "New fireplace and media wall on a reclaimed brick plinth, built freestanding within the barn's original king-post trusses" },
        { src: `${LISTED}/barn-frame-pendants.jpg`, alt: "Original oak frame and braces left exposed through a full-height stairwell, with cluster pendants and oak slat panelling" },
        { src: `${LISTED}/barn-restaurant.jpg`, alt: "Barn restaurant with the original timber frame retained beneath a whitewashed vaulted roof and chandeliers" },
        { src: `${LISTED}/period-house-terrace.jpg`, alt: "Rear elevation of a period brick house with restored sash windows, french doors and a new sandstone terrace" },
        { src: `${LISTED}/walled-garden-terrace.jpg`, alt: "The same terrace looking down the walled garden — riven sandstone paving laid to the house, a circular water feature set flush into it, and the original brick wall and arch retained" },
        { src: `${LISTED}/heritage-window-lead.jpg`, alt: "New casement window let into black weatherboarding, with hand-dressed lead flashing to the head and cill" },
      ],
    },
    {
      id: "service-commercial",
      label: "Commercial",
      heading: "Commercial, bars & hotels",
      body: "Fit-outs and refurbishments for bars, hotels and commercial premises — delivered around trading hours where needed, and built to take the wear.",
      // `**bold**` is rendered by <RichText> in ServiceDetail.
      detail: [
        "**Probably one of the most exciting parts of construction.**",
        "Hotels, bars and commercial spaces give us the opportunity to create something with real character. These are projects where design, craftsmanship, lighting, materials and atmosphere all come together — transforming an existing space into somewhere people genuinely want to spend time.",
        "We deliver **fit-outs and refurbishments for hotels, bars, restaurants and commercial premises**, from individual upgrades through to complete transformations. Where businesses need to remain operational, works can be carefully phased and programmed around trading hours to minimise disruption.",
        "For **hotels**, this can mean everything from upgrading individual bedrooms and bathrooms to the complete refurbishment of reception areas, bars, restaurants, lounges and communal spaces. Hospitality interiors need to look exceptional, but they also have to work incredibly hard. Materials, finishes and detailing are therefore selected not just for appearance, but for durability, maintenance and the realities of constant guest use.",
        "Our work can cover the complete construction package — **strip-out, structural alterations, new layouts, mechanical and electrical installations, heating and cooling, ventilation, lighting, bathrooms, flooring, decoration, specialist finishes and bespoke joinery**, including bars, reception desks, fitted furniture and feature pieces.",
        "This is also where the smaller details can make a huge difference. Feature lighting, carefully considered materials, bespoke joinery and the way different finishes meet can completely change how a space feels. We enjoy working alongside **hotel owners, operators, architects and interior designers** to turn those ideas into a finished environment that works commercially as well as visually.",
        "Where programmes are tight, planning becomes just as important as construction. Procurement, sequencing and decision-making are considered early so that trades can work efficiently and completed bedrooms or trading areas can be handed back as quickly as possible.",
        "Whether we're **reimagining an independent boutique hotel, creating a new bar or restaurant, transforming a tired commercial property or delivering a larger programme of hotel upgrades**, these are the projects we particularly enjoy — taking an existing space, stripping it back and watching an entirely new environment emerge.",
        "**Creative construction, demanding programmes and spaces with real personality — probably one of the most exciting sides of what we do.**",
      ],
      linkLabel: "Read more >>",
      path: "/services/commercial",
      image: `${COMMERCIAL}/barn-restaurant.jpg`,
      imageAlt: "Restaurant dining room in a barn with exposed trusses and chandeliers",
      gallery: [
        { src: `${COMMERCIAL}/barn-restaurant.jpg`, alt: "Restaurant dining room in a barn with exposed trusses and chandeliers" },
        { src: `${COMMERCIAL}/pub-bar.jpg`, alt: "Traditional pub bar with oak flooring, panelled counter and exposed beams" },
        { src: `${COMMERCIAL}/taproom.jpg`, alt: "Industrial taproom with exposed ductwork and polished concrete floor" },
        { src: `${COMMERCIAL}/crittall-dining.jpg`, alt: "Dining area with Crittall-style glazing and oak tables" },
        { src: `${COMMERCIAL}/taproom-bar.jpg`, alt: "Timber bar counter with stools beneath exposed services" },
        { src: `${COMMERCIAL}/late-bar.jpg`, alt: "Late bar with backlit counter and coloured lighting" },
      ],
    },
    {
      id: "service-bathrooms",
      label: "Bathrooms",
      heading: "Bathrooms",
      body: "Full bathroom installations and refurbishments — from family bathrooms and en-suites to wet rooms. First and second fix plumbing, tiling, waterproofing and finishes handled by the same team, so the detail lines up.",
      linkLabel: "Read more >>",
      path: "/services/bathrooms",
      image: `${BATH}/walk-in-shower-niche.jpg`,
      imageAlt: "Walk-in shower with wood-effect and stone tile and a backlit niche",
      detail: [
        "From family bathrooms and en-suites to wet rooms and cloakrooms — we handle the whole job with one team, so the tiling, joinery, lighting and plumbing all line up rather than being stitched together by separate trades.",
        "A complete refit covers strip-out, first fix, waterproofing, tiling, the suite, lighting and decoration. Where the layout changes, we take care of the structural work and building control too.",
      ],
      gallery: [
        { src: `${BATH}/walk-in-shower-niche.jpg`, alt: "Walk-in shower under the eaves with wood-effect and stone tile and a backlit niche" },
        { src: `${BATH}/mural-shower-brass.jpg`, alt: "Wet room with a palm-mural tiled shower wall, brass fittings and a stone floor" },
        { src: `${BATH}/loft-ensuite.jpg`, alt: "Loft en-suite with a freestanding bath under the eaves and fitted vanity units" },
        { src: `${BATH}/walnut-vanity-ensuite.jpg`, alt: "Contemporary en-suite with a walnut vanity run, integrated stone basin, black brassware and a walk-in shower behind a black-framed screen" },
        { src: `${BATH}/eaves-oak-vanity.jpg`, alt: "Loft bathroom with an oak vanity and countertop basin, patterned tile splashback and fitted oak storage built into the eaves" },
        { src: `${BATH}/heritage-bath-shower.jpg`, alt: "Bathroom in a listed cottage with a freestanding bath beneath a casement window, oak sill and a walk-in shower in stack-bond tile with antique brass fittings" },
        { src: `${BATH}/heritage-bath-dresser.jpg`, alt: "Bath dresser off the same bathroom — full-height fitted wardrobes to both sides, open shelving and a backlit arched mirror over an oak dressing table" },
        { src: `${BATH}/marble-shower-black.jpg`, alt: "Marble-effect tiled shower with twin recessed niches, black rain shower and sliding black-framed screen over a geometric tiled floor" },
        { src: `${BATH}/wallpapered-cloakroom.jpg`, alt: "Cloakroom with dark floral wallpaper, brass tap and a marble basin over flagstone" },
        { src: `${BATH}/fern-mural-cloakroom.jpg`, alt: "Cloakroom with a gold fern mural on a black recess, matt black WC and heated towel rail, oak vanity and brushed brass tap" },
        { src: `${BATH}/patterned-tile-shower.jpg`, alt: "Shower enclosure in patterned encaustic tile beside a solid oak plank door" },
        { src: `${BATH}/loft-bath-rooflight.jpg`, alt: "Freestanding bath beneath a rooflight with cove lighting and stone tiling" },
        { src: `${BATH}/oak-vanity-wc.jpg`, alt: "Oak vanity unit with a round mirror, marble tiling and patterned floor" },
        { src: `${BATH}/freestanding-bath-sage.jpg`, alt: "Black freestanding bath in a sage green room with a patterned tiled floor" },
        { src: `${BATH}/loft-cloakroom-subway.jpg`, alt: "Loft cloakroom in white metro tile with a chrome heated towel rail" },
        { src: `${BATH}/wetroom-teak-floor.jpg`, alt: "Cream wet room with a teak shower floor and walk-in glass screen" },
        // Video sits last so the rail opens on a still photograph rather than a play button.
        {
          src: `${BATH}/walkthrough-poster.jpg`,
          alt: "Walkthrough of a loft bathroom — twin fluted vanity units with integrated basins, black brassware, tall glazed cabinet and a rooflight over the shower",
          youtubeId: "lhJHjqwHFdI",
        },
      ],
    },
    {
      id: "service-staircases",
      label: "Staircases",
      heading: "Staircases",
      body: "New and replacement staircases, from straight flights to cut-string and winder designs. Made and fitted to suit the house, with the structural work, joinery and finishes coordinated around the rest of the build.",
      linkLabel: "Read more >>",
      path: "/services/staircases",
      image: `${STAIRS}/detail.jpg`,
      imageAlt: "Oak staircase with black metal spindles, viewed from the landing",
      gallery: [
        { src: `${STAIRS}/detail.jpg`, alt: "Oak staircase with black metal spindles, viewed from the landing" },
        { src: `${STAIRS}/barn-kitchen-stair.jpg`, alt: "Open-tread staircase in a barn conversion — oak treads on a black steel rake with slim black spindles, against the original timber frame" },
        { src: `${STAIRS}/barn-stair-mezzanine.jpg`, alt: "Painted staircase rising against an exposed stone wall, with a galleried mezzanine balustrade and rooflights above" },
        { src: `${STAIRS}/oak-cut-string.jpg`, alt: "Oak cut-string staircase with turned spindles and a curved bottom step" },
        { src: `${STAIRS}/rope-twist.jpg`, alt: "Painted staircase with oak treads, rope-twist metal spindles and a curved bottom step" },
        { src: `${STAIRS}/oak-flight.jpg`, alt: "Painted staircase with oak handrail, stair runner and encaustic tiled hall" },
        { src: `${STAIRS}/oak-landing.jpg`, alt: "Oak balustrade and landing above a turning flight" },
        {
          src: `${STAIRS}/video-poster.jpg`,
          alt: "Garage studio conversion with a staircase to the attic",
          youtubeId: "QzpVwnXRqfw",
        },
      ],
    },
    {
      id: "service-kitchens",
      label: "Kitchens",
      heading: "Kitchens",
      body: "Kitchen installations and full refits — including knocking rooms together to open up the space. Structural work, units, worktops, plumbing, electrics and finishes handled by one team, so the detail lines up.",
      linkLabel: "Read more >>",
      path: "/services/kitchens",
      image: `${KITCHEN}/graphite-marble-island.jpg`,
      imageAlt: "Handleless graphite kitchen with a marble-topped island and pendant lighting",
      gallery: [
        { src: `${KITCHEN}/graphite-marble-island.jpg`, alt: "Handleless graphite kitchen with a marble-topped island, oak wall units, pendant lights and integrated ovens" },
        { src: `${KITCHEN}/sage-shaker-larder.jpg`, alt: "Sage shaker kitchen in a barn conversion with full-height larder units, fluted panelling and a limestone floor" },
        { src: `${KITCHEN}/ply-marble-island.jpg`, alt: "Birch-fronted kitchen with marble worktops and splashback, belfast sink and green pendant lights" },
        { src: `${KITCHEN}/barn-shaker-belfast.jpg`, alt: "Grey-green shaker kitchen in a barn conversion with belfast sink, brass tap and an exposed timber frame" },
        { src: `${KITCHEN}/grey-shaker-quartz.jpg`, alt: "Grey shaker kitchen with marble-effect quartz worktop and upstand, walnut shelf, downdraught extractor and plinth lighting" },
        { src: `${KITCHEN}/navy-shaker-dining.jpg`, alt: "Navy shaker kitchen with stainless chimney extractor, oak flooring and a round dining table" },
        { src: `${KITCHEN}/dark-oak-rooflight.jpg`, alt: "Dark stained oak kitchen units beneath a rooflight, with herringbone flooring and full-height glazing beyond" },
        { src: `${KITCHEN}/teal-vaulted-utility.jpg`, alt: "Teal handleless kitchen with oak worktops and metro tile beneath a vaulted ceiling" },
        { src: `${KITCHEN}/vaulted-barn-progress.jpg`, alt: "Open-plan kitchen beneath a vaulted roof with mezzanine, green units and oak worktops" },
        { src: `${KITCHEN}/barn-kitchen-stair.jpg`, alt: "Barn conversion kitchen nearing completion, with a black spindle staircase and quartz-topped island" },
        { src: `${KITCHEN}/home-bar-fluted.jpg`, alt: "Fitted home bar in dark fluted timber with a marble top, mirrored back shelving and oak stools under exposed beams" },
        { src: `${KITCHEN}/walnut-bifold-terrace.jpg`, alt: "Walnut kitchen with a dark worktop and bifold doors opening onto a terrace" },
        { src: `${KITCHEN}/rooflight-kitchen-joinery.jpg`, alt: "Kitchen extension with a large rooflight, cove lighting and a run of fitted oak joinery beneath a black-framed picture window" },
        { src: `${KITCHEN}/gloss-galley-kitchen.jpg`, alt: "Compact gloss handleless kitchen with a glass splashback, integrated oven and hob" },
        { src: `${KITCHEN}/copper-sink-detail.jpg`, alt: "Copper sink and matching tap set into a marble worktop" },
      ],
    },
    {
      id: "service-project-management",
      label: "Project Management",
      heading: "Project management",
      body: "High-level project management is what sets us apart. We plan, procure, programme and coordinate every trade on site, keeping you informed and keeping the job to budget. That covers the parts most people don't think about until they bite — structural and building control sign-offs, long lead-time items ordered early, deliveries timed so materials aren't standing out in the weather, and a programme that stops trades working on top of one another. You deal with one team from the first site visit through to handover, so you always know what's happening this week and what's coming next.",
      linkLabel: "Read more >>",
      path: "/services/project-management",
      image: `${PROJMAN}/rooflight-extension-joinery.jpg`,
      imageAlt: "Extension with a structural rooflight, cove lighting and fitted joinery run to the window line",
      /**
       * A short film rather than a photograph — project management is about
       * how a site is run, which a still cannot really show.
       *
       * `src` is a locally hosted frame from the video, so no request reaches
       * YouTube until someone presses play. The still photo that was here is
       * still in the repo at ${PROJMAN}/rooflight-extension-joinery.jpg and is
       * kept as `image` above, which is what the "other services" cards use.
       */
      gallery: [
        {
          src: `${VIDEO}/project-management-short.jpg`,
          alt: "Short film from a kitchen fit-out — pendants bagged and the room sheeted up while the trades work through",
          youtubeId: "Er6C6Lq28sI",
        },
      ],
      detail: [
        "It's the part of building work nobody sees in the photos — but it's the reason the photos look the way they do. A beautiful finish is never an accident. It comes from hundreds of decisions made in the right order: the electrician's first fix done before the plasterer arrives, the joinery measured only once the walls are true. Get the sequence right and every trade does their best work. Get it wrong and even excellent tradespeople end up rushing or working around each other — and you can see it in the finish every time.",
        "That's why we treat project management as a craft in its own right. One project manager holds the whole picture: planning the programme trade by trade, chasing lead times, checking work before it's covered up, catching small issues while they're still small. Tight coordination also protects your budget: fewer wasted days, fewer surprises, and a final account that looks like the estimate you started with.",
      ],
      pullQuote:
        "The best compliment we get isn't about the finish itself. It's clients telling us the build was calmer than they expected. That calm is project management working.",
    },
  ] satisfies ServiceTab[],
};

/**
 * PLACEHOLDERS. The client copy marks these "confirm with clients before
 * publishing" — they are rendered verbatim as placeholders and carry no star
 * rating, so nothing here reads as a real endorsement.
 */
export const TESTIMONIALS = {
  heading: "Testimonials",
  items: [
    {
      title: "Broom House, Ripley",
      body: "Paul and the team completed a ground floor extension and a double storey extension at my property in Ripley. I'm more than happy for anyone to get in touch — and have no hesitation in giving my personal recommendation.",
      author: "Gary Evans",
    },
    {
      title: "Fairmile Estate, Cobham",
      body: "Impressed by their approach to the work, we really enjoyed working with the Paul Martyn team. All of their builders were professional and friendly — we missed them when they left.",
      author: "Julian",
    },
    {
      title: "Millars Studio",
      body: "Paul Martyn have built out 4 projects for us now. We are currently rebuilding a large light industrial unit in Cliddesden. The construction and build detail was beyond what we had expected. Thank you guys once again for looking after us, delivering a stress free and fun build.",
      author: "Don & Leone",
    },
    {
      title: "New build, end of terrace",
      body: "Paul Martyn built a new 2 bedroom end of terrace property for me from the ground up. They handled all of the structural & building control work for me, with lighting design, bathroom and kitchen design. I'm definitely having them back for my next project, currently awaiting planning.",
      author: "Tara Coles",
    },
    {
      title: "Pub & farmhouse refurbishment",
      body: "We used Paul Martyn to refurbish our pub a few years ago — we were so delighted with them we invited them back to refurbish our farmhouse. We couldn't recommend them more.",
      author: "Hannah Frederick",
      stars: 4,
    },
  ] as Testimonial[],
};

export const PROCESS = {
  heading: "Our process",
  image: `${IMG}/process-barn-stair.jpg`,
  steps: [
    {
      title: "Talk it through",
      body: "We visit, walk the site or plans with you, and listen to what you're trying to achieve.",
    },
    {
      title: "Plan and price",
      body: "A detailed, itemised cost plan so you know exactly what the project involves before anyone lifts a tool.",
    },
    {
      title: "Build",
      body: "A managed programme, trusted trades, weekly updates, and a tidy site.",
    },
    {
      title: "Handover",
      body: "Snagged, finished and standing behind our work.",
    },
  ] satisfies ProcessStep[],
};

export const BEFORE_WE_MEET = {
  heading: "Before we meet",
  intro: "To make our first conversation as useful as possible, it helps to know:",
  items: [
    "The property and its context — location, and any listed status or conservation constraints",
    "The scope you have in mind, and your ideal timescale",
    "Where the design stands — from early ideas through to a full set of drawings",
    "The budget parameters you're working within",
  ],
};

export const CONTACT_CTA = {
  heading: "Ready to talk about your project?",
  body: "Whether it's a first conversation about an idea or a full set of drawings ready to price, we'd like to hear from you.",
  button: { label: "Get a quote", path: "/contact" },
  background: `${IMG}/process.jpg`,
};

export const FOOTER_SERVICES: NavChild[] = [
  { label: "Residential renovations & extensions", path: "/services/renovations-extensions" },
  { label: "New builds", path: "/services/new-builds" },
  { label: "Listed buildings & heritage work", path: "/services/listed-buildings" },
  { label: "Commercial, bars & hotels", path: "/services/commercial" },
  { label: "Kitchens", path: "/services/kitchens" },
  { label: "Bathrooms", path: "/services/bathrooms" },
  { label: "Staircases", path: "/services/staircases" },
  { label: "Project management", path: "/services/project-management" },
];

export const FOOTER_PAGES: NavChild[] = [
  { label: "Pricing", path: "/pricing" },
  { label: "About Us", path: "/about-us" },
  { label: "Our Process", path: "/process" },
  { label: "Testimonials", path: "/#reviews" },
  { label: "Contact", path: "/contact" },
];

/**
 * Social profiles. Only list accounts that exist — an icon linking nowhere
 * (or back to /contact) reads as a broken profile. Add Instagram here when
 * there's a URL and the icon reappears automatically.
 */
export const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Paulmartynconstruction/",
    icon: "facebook" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/paulmartyn.build/",
    icon: "instagram" as const,
  },
];

/**
 * Areas covered — local SEO. Plain text rather than links: there are no
 * per-area pages, and linking to nothing would be worse than useless.
 *
 * Cranleigh appeared twice in the supplied list and is deduplicated here.
 * "Ewehurst" corrected to "Ewhurst", the Surrey village next to Cranleigh.
 */
export const AREAS = {
  heading: "Areas covered",
  items: [
    "Cranleigh",
    "Ewhurst",
    "Oxshott",
    "Cobham",
    "Weybridge",
    "Esher",
    "Haslemere",
    "Woking",
    "Knaphill",
    "Godalming",
    "Walton-on-Thames",
    "Farnham",
    "Virginia Water",
    "Sunningdale",
    "Windlesham",
    "East Horsley",
    "Claygate",
  ],
  suffix: "and surrounding areas",
};

export const FOOTER = {
  blurb:
    "Paul Martyn — Family-run builders in the Surrey Hills. Residential renovations, new builds, listed buildings and commercial projects across Surrey and the South East.",
  copyright: "© 2026 P Martyn Co Ltd. All rights reserved",
};

/**
 * Company brochure.
 *
 * `size` is shown in the link text on purpose. It's a print-resolution export,
 * so it is a heavy download on mobile data and a visitor deserves to know
 * before tapping. Replace the file with a web-optimised export and update
 * `size` when one is available.
 */
export const BROCHURE = {
  label: "Download our brochure",
  href: "/downloads/paulmartyn-brochure.pdf",
  size: "PDF, 38 MB",
};

/**
 * Google / Checkatrade review slider.
 *
 * `items` are SAMPLES showing the card design only — every card renders a
 * "Sample" chip while `isPlaceholder` is true, so none can be mistaken for a
 * real review. Do NOT hand-copy reviews from another company's profile.
 *
 * To go live, pick one:
 *   1. Trustindex (what the reference site uses) — free tier aggregates Google
 *      + Checkatrade; drop its embed in place of this component.
 *   2. Google Places API `place_details` -> `reviews` (max 5), fetched
 *      server-side in a route handler and cached.
 *   3. Paste real reviews in below and set `isPlaceholder: false`.
 */
/**
 * Google reviews, entered verbatim from the business's own Google profile.
 *
 * Typed as `Review[]` (not `satisfies`) so the optional `isSample` flag stays
 * available — the slider shows a "Sample" chip and a section notice for any
 * card carrying it, and both disappear on their own when none do.
 *
 * To automate later: Trustindex (free tier, aggregates Google + Checkatrade),
 * or the Google Places API `place_details` -> `reviews`, fetched server-side
 * and cached. Only show a Checkatrade badge once membership is active.
 */
const REVIEW_ITEMS: Review[] = [
  {
    source: "google",
    author: "Nicholas Downes",
    when: "12 Aug 2026",
    rating: 5,
    // Second half of the review only — the first paragraph is a long list of
    // the works (beams, garage conversion, drainage, new openings).
    body: "Paul and his team were great to work with throughout. We lived on site for the entire project, and they were accommodating and easy to get along with. The work was completed to a high standard, they were excellent at working through problems as they arose, and the project came in under budget. I would highly recommend them.",
  },
  {
    source: "google",
    author: "Leone Coles",
    when: "2 days ago",
    rating: 5,
    body: "This company did a full kitchen refurbishment where we knocked two rooms into one. I was supported throughout in helping me with design decisions and the workforce were tidy and professional. Thankyou Paulmartyn for my lovely kitchen.\n\nOne year later and Paul Martyn have completed a side two storey extension. Once again they have surpassed their reputation, and we are very happy with the work they did.",
  },
  {
    source: "google",
    author: "Daniel Harrup",
    when: "3 days ago",
    rating: 5,
    body: "Thank-you to everyone at paul martyn for your amazing service you have provided. Great to finally deal with a highly professional construction team with a trustworthy work force. Highly recommend will be using again.",
  },
  {
    source: "google",
    author: "Jonathan Findeis",
    when: "17 Nov 2023",
    rating: 5,
    body: "We used Paul Martyn to renovate our kitchen this year. They were clean, efficient and professional. There team of contractors were very knowledgeable and carried out the work on time and to a perfect finish. I can not recommend these guys enough.",
  },
  {
    source: "google",
    author: "AJ",
    when: "14 Apr 2023",
    rating: 5,
    body: "PaulMartyn completed a large renovation project for us in 2022. We found them to be extremely professional, honest and efficient. They were able to help with all areas of design and build. Their team and contractors always worked with care and respect and the finish is very high. We would certainly recommend them and enjoyed working together!",
  },
  {
    source: "google",
    author: "Mark Hamilton-Taylor",
    when: "20 Feb 2023",
    rating: 5,
    body: "Sustainable builders that offer a great service and quality build.. Bentley level service though, as its Bentley level delivery, you pay for what you get..",
  },
  {
    source: "google",
    author: "Oliver Lodge",
    when: "3 years ago",
    rating: 5,
    body: "PaulMartyn Construction did a major project on our house in Pirbright. A two storey rebuild including a very interesting roof redesign and a \u201Cgreenification\u201D. 100% happy with their work from start to finish. Their team were all courteous and professional. Wouldn\u2019t hesitate in recommending the company and the people working there",
  },
  {
    source: "google",
    author: "Eileen Mullane",
    when: "4 Dec 2020",
    rating: 5,
    body: "Paul Martyn Construction built a double side extension for me in Lightwater, Surrey. The guys were very efficient, worked extremely well and were probably one of the cleanest building teams I have seen. I have a small child around the house and they made sure the job was tidy and safe at the end of everyday. They kept me informed of the progress pretty much daily and did the job in the time scale they gave me. I am very pleased with their work and would highly recommend them.",
  },
  {
    source: "google",
    author: "Catherine Stoneman",
    when: "2 Oct 2020",
    rating: 5,
    body: "Used PaulMartyn for a complete house renovation and cannot speak highly enough of them. Their approach is professional, friendly and considered. Their advice and craftsmanship is fantastic, work is to an extremely high standard. They are clearly passionate about what they do and the pride they take in their work shines through both in the care they take during the job and the finished product. Would happily highly recommend!",
  },
  {
    source: "google",
    author: "Harriet Kopij",
    when: "8 Feb 2020",
    rating: 5,
    body: "What an amazing company and the workmanship was top notch. Honestly I couldn't fault anything and would highly recommend.",
  },
  {
    source: "checkatrade",
    when: "Posted 25 July",
    score: 10,
    title: "New extension is perfect",
    jobType: "Extensions / Conversions",
    jobLocation: "GU9",
    body: "Paul and his team recently finished our extension, we couldn't be happier. Thanks for listening and delivering as promised. Super happy customers!",
  },
  {
    source: "checkatrade",
    when: "Posted 24 July",
    score: 10,
    title: "Ground floor refurbishment",
    jobType: "Brick / Concrete Structural Repairs",
    jobLocation: "GU1",
    verified: true,
    body: "Ground floor refurbishment inlcuding bathroom and kitchen. Beautiful detailing. Great job, thank you.",
  },
  {
    source: "checkatrade",
    author: "Corinne A",
    when: "Posted 24 July",
    score: 10,
    jobType: "Builder",
    jobLocation: "GU4",
    verified: true,
    body: "Punctual and delivered excellent job on time",
  },
  {
    source: "checkatrade",
    when: "Posted 22 July",
    score: 9.33,
    title: "Outstanding reliability",
    jobType: "Builder",
    jobLocation: "GU4",
    verified: true,
    body: "Excellent work on complete house extensions . Kept informed during all aspects of work.",
  },
];

export const REVIEWS = {
  heading: "What our clients say",
  standfirst:
    "Most of our work comes through recommendation. Here's what clients have said on Google and Checkatrade.",
  profiles: {
    google: "https://www.google.com/search?q=Paul+Martyn+Construction",
    checkatrade: "https://www.checkatrade.com/trades/paulmartynconstruction",
  },
  items: REVIEW_ITEMS,
};


/**
 * Homepage video strip.
 *
 * Click-to-play facade: the page ships a locally hosted thumbnail and only
 * loads YouTube's player when someone presses play. That keeps the homepage
 * light and means no third-party request (or cookie) fires on page load.
 * Playback uses youtube-nocookie.com.
 *
 * Titles here are display titles. YouTube's own title for video 1 is
 * "VIDEO 2025 10 01 09 43 06 1" — a camera filename — worth renaming on the
 * channel so it reads properly if anyone finds it on YouTube directly.
 */
export const VIDEOS = {
  heading: "On site",
  standfirst:
    "Short films from recent projects — how the work is run, and how it finishes.",
  items: [
    {
      title: "Farmhouse extension, Thursley",
      description: "A farmhouse extension in Thursley, Surrey.",
      youtubeId: "5LGpCS_JxDA",
      poster: `${VIDEO}/video-2.jpg`,
    },
    {
      title: "Home extension, Cobham",
      description: "A home extension in Cobham, Surrey.",
      youtubeId: "YUd5X11i3GU",
      poster: `${VIDEO}/video-3.jpg`,
    },
    {
      title: "On site",
      description: "A short film from some of our recent work.",
      youtubeId: "u9HACyvOWZ4",
      poster: `${VIDEO}/video-1.jpg`,
      portrait: true,
    },
  ] satisfies SiteVideo[],
  uploadPath: "public/sites/paulmartyn/videos/",
};

/**
 * Pricing page.
 *
 * `range` is deliberately undefined on every band. Typical costs are specific
 * to a business's own jobs, area and specification — inventing them (or reusing
 * another firm's) would misprice real enquiries. Each band renders a
 * "to be confirmed" chip until a figure is supplied.
 *
 * `exampleQuote.href` is likewise undefined until a redacted sample quote PDF
 * exists; the button falls back to the enquiry route rather than 404ing.
 *
 * Everything here is drawn from the client's own copy (open-book approach,
 * itemised cost plan, service descriptions). Do not add claims about how
 * work is charged, guaranteed or scheduled without confirmation.
 */
export const PRICING = {
  title: "Clear, itemised pricing",
  intro: [
    "We run an open-book approach: you see where every pound goes, and you pay trades directly at cost. No hidden margins buried in the numbers.",
    "Every project is different, and final costs depend on design, specification, access and what we find in the existing structure. So rather than a headline figure, we produce a detailed, itemised cost plan before anyone lifts a tool — you know exactly what is included, and what isn't.",
  ],
  included: {
    heading: "What a cost plan covers",
    items: [
      "Full construction works, itemised trade by trade",
      "Plumbing, electrics and first/second fix",
      "Hands-on project management throughout",
      "Programme with realistic lead times",
      "Liaison with Building Control and, where needed, conservation officers",
      "Snagging and handover",
    ],
  },
  exampleQuote: {
    heading: "See an example quote",
    body: [
      "We pride ourselves on clear, detailed and transparent quotations, so you know exactly what's included from the outset.",
      "It's worth seeing the level of detail before you compare us with anyone else — vague estimates are where budgets come unstuck.",
    ],
    label: "View example quote",
    /** Set to a redacted sample PDF under /public when one exists. */
    href: undefined as string | undefined,
    fallbackNote: "Sample quote PDF to be added — get in touch and we'll send one over.",
  },
  bands: [
    {
      label: "Residential renovations & extensions",
      body: [
        "Single and double storey extensions, whole-house renovations and remodelling — opening up period properties or bringing tired homes back to life.",
        "Whole-house renovations, extensions and remodelling, with the structural work, finishes and detail handled under one roof.",
      ],
    },
    {
      label: "New builds",
      body: [
        "Architect-designed new homes from groundworks to handover, with tight cost control and a programme you can rely on.",
      ],
      rate: "£2,000 per m²",
    },
    {
      label: "Listed buildings & heritage work",
      body: [
        "Sensitive restoration and alteration of listed and period property, working with conservation officers and specialist trades.",
        "It's careful, skilled work — and it's priced accordingly. In our experience, heritage projects typically fall between £2,300 and £2,900 per m², depending on the building's condition, the extent of the works and the level of specification.",
      ],
      emphasise: ["£2,300 and £2,900 per m²"],
    },
    {
      label: "Commercial, bars & hotels",
      body: [
        "Fit-outs and refurbishments built to take the wear — delivered around trading hours where needed.",
        "Shopfitting is the most exciting part of our game. No two venues price the same, so we don't start with a standard rate — we start with your budget, and shape the design and specification to fit it.",
      ],
    },
    {
      label: "Bathrooms",
      body: [
        "Bathroom installations and refurbishments — often part of a wider renovation, but we're happy to quote them standalone too.",
        "A complete refit — new suite, tiling, plastering, lighting and decoration — starts from around £9,000. One team handles the whole job from strip-out to final coat.",
      ],
      emphasise: ["£9,000"],
    },
    {
      label: "Staircases",
      body: [
        "New and replacement staircases, made and fitted to suit the house.",
        "A softwood staircase starts around £3,600, and an oak staircase around £5,600. We can provide a staircase install and removal as a single job, or as part of a larger project.",
      ],
      emphasise: ["£3,600", "£5,600"],
    },
  ] as PriceBand[],
};
