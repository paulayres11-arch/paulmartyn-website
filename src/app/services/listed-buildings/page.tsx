import type { Metadata } from "next";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { ServiceDetail } from "@/components/sites/paulmartyn/ServiceDetail";
import { serviceById, CONTACT } from "@/components/sites/paulmartyn/content";
import { Faq } from "@/components/sites/paulmartyn/Faq";
import { JsonLd } from "@/components/sites/paulmartyn/JsonLd";
import { AreaLink } from "@/components/sites/paulmartyn/AreaLink";
import {
  A,
  B,
  Breadcrumbs,
  Callout,
  H2,
  H3,
  Lead,
  List,
  Measure,
  P,
  PriceLadder,
  TalkToUs,
} from "@/components/sites/paulmartyn/Prose";
import { breadcrumbList, service as serviceSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

/**
 * Listed buildings & heritage work — flagship page, rewritten 2026-09-30.
 *
 * "Listed building builder" and "conservation area builder" are the least
 * contested searches this business can win: most local builders do not
 * advertise heritage work at all. So this page carries the most substance on
 * the site.
 *
 * FACT SOURCES — nothing here is new:
 *   - Heritage rate £3,400–£4,200 per m²: PRICING.bands in content.ts, and the
 *     buildings-of-local-merit blog post.
 *   - Materials and techniques: SERVICES "service-listed" detail (lime mortar
 *     and plaster, traditional brickwork, masonry and stonework, timber
 *     repairs, heritage roofing, leadwork, bespoke joinery).
 *   - Cranleigh 81 listed buildings / 174 buildings of local merit: Cranleigh
 *     Neighbourhood Plan, as already quoted in the blog.
 *   - Waverley's 43 conservation areas, 115 m³ demolition threshold, Cranleigh
 *     CA dates: checked 2026-08-17 (see src/app/areas/cranleigh/page.tsx).
 *   - The law (s.1(5), s.7, s.9 of the Planning (Listed Buildings and
 *     Conservation Areas) Act 1990; no fee for listed building consent; the
 *     s.211 six-week notice for trees in a conservation area) is statute, not
 *     local fact.
 *   - Grantley Arms: Grade II, NHLE 1241357, listed 9 Mar 1960 — "House, now
 *     public house and restaurant. C15 extended in C20. Timber framed".
 *     Checked 2026-09-30 via britishlistedbuildings.co.uk (NHLE mirror).
 *   - Conservation area dates: Ewhurst 24 Feb 1970, Ewhurst Green 26 Mar 1974
 *     (Waverley appraisals); Shamley Green and Wonersh 1973 (planning.data.gov.uk).
 *   - Projects: only work already captioned on the site. The gallery photos
 *     are not attributed to a place unless the site already does so.
 *
 * TODO(paul): confirm whether we should name galletting, Horsham stone
 *   roofing and handmade clay tile matching as things we do. They are not on
 *   any existing page, so they have been left out rather than claimed.
 * TODO(paul): for Rake Barn, Milford — was it listed, and which consents did
 *   it need (planning, listed building consent, Class Q)? The page describes
 *   it only as a barn conversion until that is confirmed.
 */

const service = serviceById("service-listed");
const PATH = "/services/listed-buildings";

const TITLE = "Listed Building Work in Surrey";
const DESCRIPTION =
  "Listed building and conservation area work in Cranleigh and Surrey: consent, lime, timber frame repair and published heritage rates. Call 01483 612156.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const TRAIL = [
  { name: "Services", path: "/services" },
  { name: "Listed buildings & heritage", path: PATH },
];

const FAQS = [
  {
    question: "Do I need listed building consent to replace windows?",
    answer:
      "Almost always, yes. Windows are one of the features a listing most often protects, and replacing them, even with double glazing that looks similar, usually affects the building's character. A genuine like-for-like repair of the existing window may not need consent, but whether a repair counts as like-for-like is the council's judgement, not ours or yours. We ask Waverley's conservation team before anything is ordered.",
  },
  {
    question: "Can I extend a listed house?",
    answer:
      "Often, yes, but it needs listed building consent as well as planning permission, and the design has to respect what makes the building significant. Extensions that sit behind or beside the historic building, read as clearly newer and keep the original roof line are the ones that tend to be approved. The official list description is the place to start, because it says what the listing is protecting.",
  },
  {
    question: "What is a curtilage listed building?",
    answer:
      "A structure within the grounds of a listed building that has been there since before 1 July 1948, such as a barn, outbuilding or garden wall. It can be protected as part of the listing even though it was never listed separately, so the same consent rules can apply to it. It is the most common unpleasant surprise on a heritage project, which is why we check before the drawings.",
  },
  {
    question: "How long does listed building consent take in Waverley?",
    answer:
      "The statutory period for a decision is eight weeks from when the application is validated, and there is no application fee for listed building consent. In practice, allow extra time for the conservation officer's comments and any revised drawings. A pre-application enquiry beforehand is usually the best money spent on a heritage project.",
  },
  {
    question: "Do you use lime mortar?",
    answer:
      "Yes, where the building calls for it. Lime mortar and lime plaster let an old solid wall breathe, and replacing them with cement traps moisture and damages the brick, stone or timber around it. We use traditional materials wherever the existing fabric is traditional, and repair and keep original material in preference to replacing it.",
  },
  {
    question: "What happens if previous work was done without consent?",
    answer:
      "Unauthorised works to a listed building are a criminal offence, there is no time limit after which they become lawful, and the council can require the current owner to put them right, even if a previous owner did the work. The usual route is to talk to the council and apply for consent for the works already done, or agree how they will be reversed. We can help work out what was changed and what it would take to put right.",
  },
  {
    question: "How much more does listed building work cost?",
    answer:
      "Our heritage rate is £3,400 to £4,200 per square metre, against £2,700 to £3,100 for a standard extension. The difference is traditional materials, specialist trades, surveys and the slower pace the old fabric needs, plus the consent process running alongside planning. Where a project sits in that range depends on the building's condition and the extent of the work.",
  },
];

export default function ListedBuildingsPage() {
  return (
    <PageShell eyebrow="Heritage" title="Listed building & heritage work in Surrey">
      <JsonLd
        data={[
          serviceSchema({
            name: "Listed building and heritage work",
            serviceType: "Listed building and heritage construction",
            path: PATH,
            description:
              "Restoration, repair, alteration and extension of listed and period buildings in Cranleigh, the Waverley villages and across Surrey, working with conservation officers under listed building consent.",
            areaServed: [
              "Cranleigh",
              "Ewhurst",
              "Shamley Green",
              "Wonersh",
              "Bramley",
              "Alfold",
              "Godalming",
              "Surrey",
            ],
          }),
          breadcrumbList(TRAIL),
        ]}
      />

      <ServiceDetail service={service} showDetail={false}>
        <Measure>
          <Breadcrumbs trail={TRAIL} />

          <Lead>
            Old buildings rarely match their drawings. Many of Cranleigh&apos;s
            listed houses are 15th to 17th century timber frames that were given
            brick or stone fronts in the 18th and 19th centuries. On a heritage
            job, what you decide to keep matters as much as what you replace. This is the work we have the most experience in.
          </Lead>

          <P>
            We restore, repair, alter and extend listed buildings, period homes,
            barns, farm buildings and other character properties. The work runs
            from structural repairs and historic fabric to specialist finishes
            and bespoke joinery. We work alongside architects, structural
            engineers, conservation officers and specialist consultants, and we
            coordinate every trade as one managed project.
          </P>

          <H2>What listed building consent covers</H2>

          <P>
            Listing protects the whole building, inside and out, including later
            additions. People are most often caught out by the inside. You need{" "}
            <B>listed building consent</B> to demolish, alter or extend a listed
            building in any way that affects its character as a building of
            special architectural or historic interest. Taking out a partition,
            replacing a staircase, lifting old floorboards or changing the
            windows can all need consent, even when nothing changes on the
            outside.
          </P>

          <P>
            Listing also reaches beyond the main house. A barn, outbuilding or
            garden wall within the grounds that has stood there since before{" "}
            <B>1 July 1948</B> can be protected as part of the listing even
            though nobody ever listed it separately. That is a{" "}
            <B>curtilage listed</B> structure. Converting the old barn, knocking
            through the garden wall or taking down the outbuilding can need
            consent in the same way as work to the house itself.
          </P>

          <P>
            This isn&apos;t a paperwork technicality. Carrying out work that
            needs listed building consent without it is a{" "}
            <B>criminal offence</B> under the Planning (Listed Buildings and
            Conservation Areas) Act 1990. It is punishable by a fine or, in
            serious cases, imprisonment. Unlike most planning breaches, it never
            becomes lawful with time. The council can also require the current
            owner to put unauthorised work right, whoever did it. Buyers&apos;
            surveyors know that, which is why unconsented work comes up again
            when a house is sold.
          </P>

          <Callout label="Before anything is drawn">
            <p className="!mt-3">
              Search the address on Historic England&apos;s National Heritage
              List for England. It is free and gives the grade, the list entry
              number and the official description of what is significant about
              the building. That description tells you what a conservation
              officer is protecting, and a scheme designed from it is cheaper
              than one redrawn after the officer&apos;s comments.
            </p>
          </Callout>

          <H2>Conservation areas around Cranleigh, and what they change</H2>

          <P>
            A house doesn&apos;t have to be listed for heritage rules to apply.
            Waverley has 43 conservation areas, and most of the villages around
            Cranleigh have one. The{" "}
            <A href="/blog/cranleigh-conservation-area-consent">
              Cranleigh Conservation Area
            </A>{" "}
            runs through the High Street and was designated in October 1973,
            then extended in July 1985 and again in July 2016. Nearby,{" "}
            <AreaLink place="Ewhurst" /> has had a conservation area since 1970
            and Ewhurst Green a separate one since 1974, and the centres of{" "}
            <AreaLink place="Shamley Green" /> and{" "}
            <AreaLink place="Wonersh" /> were both designated in 1973.
          </P>

          <P>Inside a conservation area:</P>

          <List
            items={[
              <>
                Some work that would be <B>permitted development</B> elsewhere
                needs a planning application, including roof extensions and
                some cladding.
              </>,
              <>
                Demolishing any building of more than <B>115 cubic metres</B>{" "}
                needs planning permission. That is the size of a large double
                garage.
              </>,
              <>
                Taking down a boundary wall more than 1m high next to a road, or
                more than 2m high elsewhere, needs consent.
              </>,
              <>
                Cutting back or felling a tree with a trunk more than 75mm
                across (measured 1.5m above the ground) needs{" "}
                <B>six weeks&apos; notice</B> to the council first.
              </>,
            ]}
          />

          <P>
            There is also a local list. Cranleigh parish has 81 nationally
            listed buildings, but 174 buildings of local merit, according to the
            Cranleigh Neighbourhood Plan. A locally listed building needs no
            separate consent, but it counts in any planning decision. We explain
            the difference in{" "}
            <A href="/blog/cranleigh-buildings-of-local-merit">
              the second list your house might be on
            </A>
            .
          </P>

          <H2>How we work on listed and period buildings</H2>

          <H3>We start with a survey and a record</H3>

          <P>
            Before anything comes out, we photograph and record what is there.
            It protects you as much as the building. It also answers the
            questions a conservation officer will ask, and it means original
            features that have to come out for repair go back in the right
            place. Where the fabric is uncertain, we open it up carefully and
            look before a design is fixed. A drawing of an old building is a
            hypothesis until someone has looked behind the plaster.
          </P>

          <H3>We work with the conservation officer, not around them</H3>

          <P>
            On a listed building, consent runs alongside planning, with its own
            application, drawings and justification. We make sure the work on
            site is what was consented, and when something unexpected turns up,
            we take it back to the conservation officer before carrying on, not
            after. Balancing the Building Regulations against a building&apos;s
            significance is agreed with building control in advance, never
            decided on site.
          </P>

          <H3>We use traditional materials</H3>

          <P>
            Depending on the building, the work can include{" "}
            <B>lime mortar and lime plaster</B>, traditional brickwork, masonry
            and stonework, <B>timber frame repairs</B>, heritage roofing,
            leadwork, bespoke joinery, and restoring or replacing original
            architectural details. Materials are specified to suit the building,
            not chosen for convenience. An old solid wall needs to breathe, and
            cement renders, cement pointing and plastic paints trap moisture in
            the brick, stone or timber. We explain why in{" "}
            <A href="/blog/damp-rising-penetrating-condensation">
              the three kinds of damp
            </A>
            .
          </P>

          <H3>We repair before we replace</H3>

          <P>
            Wherever possible, we repair and keep existing materials and
            features rather than replace them. Original brickwork, timber,
            fireplaces and architectural details can be worked into the new
            design. Poorly done later alterations, tired services and awkward
            layouts can be improved around them. Some clients want a
            period-appropriate interior and some want contemporary work inside a
            historic shell. We do both, and the aim is always a building where
            the old and the new sit comfortably together.
          </P>

          <H2>Heritage projects we have delivered</H2>

          <H3>Rake Barn, Milford</H3>

          <P>
            A black-weatherboarded barn conversion under a clay-tiled roof, with
            a walled garden and an oak-framed garden room. The overhead
            photograph of it opens our home page. Inside, the original timber
            frame and stone plinth were left exposed, with a new open-tread
            staircase in oak and black steel and a kitchen fitted alongside
            them. That photograph is on{" "}
            <A href="/process">our process page</A>.
          </P>

          <H3>Timber-framed barn interiors</H3>

          <P>
            The photographs at the top of this page are from our barn and
            timber-frame work. The original oak frame and braces are left
            exposed through a full-height stairwell, and the stone plinth is
            kept at floor level, with new fluted joinery set between them. A new
            fireplace and media wall on a reclaimed brick plinth stand
            freestanding within the original king-post trusses. Where a new casement
            window goes into black weatherboarding, the head and cill are
            flashed in hand-dressed lead.
          </P>

          <H3>A period house and walled garden</H3>

          <P>
            At the rear of a period brick house, the sash windows were restored
            and a new riven sandstone terrace was laid up to the house. The original brick garden wall and its arch were kept, with a
            circular water feature set flush into the new paving.
          </P>

          <H3>The Grantley Arms, Wonersh</H3>

          <P>
            A Grade II listed building in Wonersh. The official list entry
            describes a 15th-century timber-framed house, extended in the 20th
            century, that is now a public house and restaurant. It has to keep
            the character of a very old building and still take the wear of a
            busy pub. It is covered on our{" "}
            <A href="/services/commercial">
              commercial and hospitality page
            </A>
            .
          </P>

          <H2>What heritage work costs, and why</H2>

          <P>
            Our heritage rate is published: typically{" "}
            <B>£3,400 to £4,200 per m²</B>, depending on the building&apos;s
            condition, the extent of the work and the level of specification.
            For comparison, a standard extension is £2,700 to £3,100 per m². The
            difference comes from four things:
          </P>

          <List
            items={[
              <>
                <B>Materials.</B> Lime, matched brick and stone, hand-dressed
                lead and joinery made to match cost more than their modern
                equivalents.
              </>,
              <>
                <B>Trades.</B> Traditional materials need trades who know how
                to use them, and there are fewer of them.
              </>,
              <>
                <B>Pace.</B> Lime cures slowly, repairs take longer than
                replacement, and nothing is rushed that can&apos;t be undone.
              </>,
              <>
                <B>Consents and surveys.</B> A heritage statement, listed
                building consent drawings, opening-up works and specialist
                reports come before the build.
              </>,
            ]}
          />

          <P>
            The heritage figures sit alongside the rest of our rates on the{" "}
            <A href="/pricing">pricing page</A>. For an extension to a period
            house, the{" "}
            <A href="/guides/house-extension-costs-surrey">
              extension cost guide
            </A>{" "}
            sets out what sits on top of the build rate.
          </P>

          <H2>How a heritage project runs with us</H2>

          <P>
            A heritage project follows the same four stages as all our work. The
            first two are free, so you can have a measured estimate before you
            spend anything:
          </P>

          <PriceLadder />

          <P>
            On a listed building, the paid design and cost-plan stage is where
            the consent drawings, the specification of traditional materials and
            any specialist reports come together. That means the fixed-price
            contract is signed against what has actually been consented. The
            full sequence is on <A href="/process">our process page</A>.
          </P>

          <Faq items={FAQS} />

          <TalkToUs heading="Talk to us about a listed or period building">
            <p>
              Tell us the address and, if you know it, the list entry. If the
              building is in a conservation area or has old outbuildings in its
              grounds, mention those too, because they change what we look at
              first. We are on Bridge Road in Cranleigh, and you can call{" "}
              {CONTACT.phone}. More about working as{" "}
              <A href="/areas/cranleigh">builders in Cranleigh</A>.
            </p>
          </TalkToUs>
        </Measure>
      </ServiceDetail>
    </PageShell>
  );
}
