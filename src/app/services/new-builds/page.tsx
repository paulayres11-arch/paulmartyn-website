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
  Quote,
  TalkToUs,
} from "@/components/sites/paulmartyn/Prose";
import { breadcrumbList, service as serviceSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

/**
 * New builds — expanded long-form 2026-09-30.
 *
 * FACT SOURCES — nothing here is new:
 *   - £2,700 per m²: PRICING.bands "New builds" in content.ts.
 *   - Scope (groundworks to handover, M&E design, solar, air source heat
 *     pumps, air conditioning) and the cost/programme approach: SERVICES
 *     "service-new-builds" detail.
 *   - Projects: gallery captions in content.ts — Stocton Road, Guildford;
 *     Millars Cottages; Mark Way, Godalming. Tara Coles: TESTIMONIALS, quoted
 *     as written.
 *   - Settlement boundary, two boundaries in the parish, Rowly washed over by
 *     Green Belt: the cranleigh-settlement-boundary post.
 *   - Weald Clay, Approved Document A, BRE Digest 365 soakaways: the
 *     building-on-weald-clay-cranleigh-footings post.
 *   - CIL at Waverley's £452 per m² small-sites rate (since 1 March 2019,
 *     index-linked), self-build annexe exemption claimed before work starts:
 *     the annexes-multigenerational-living-cranleigh post.
 *   - Class Q (up to 10 dwellings, 1,000m², 150m² each; not on Article 2(3)
 *     land or listed buildings): the barn-conversions post.
 *   - Part L 2021: the part-l-extension-insulation post.
 *
 * No build durations are given: none are published for new builds.
 */

const service = serviceById("service-new-builds");
const PATH = "/services/new-builds";

const TITLE = "New Build Homes in Surrey";
const DESCRIPTION =
  "New build homes in Cranleigh and across Surrey, from groundworks to handover, with a published £2,700 per m² rate and a fixed price. Call 01483 612156.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const TRAIL = [
  { name: "Services", path: "/services" },
  { name: "New builds", path: PATH },
];

const FAQS = [
  {
    question: "How much does it cost to build a new house in Surrey?",
    answer:
      "Our published rate for a new build is £2,700 per square metre. That is a guide for budgeting, not a quote: the ground, the foundations the engineer designs for it, the specification and the services all move the final figure. We turn it into a fixed price through four stages, the first two of which are free.",
  },
  {
    question: "Can I build a new house on land outside Cranleigh's settlement boundary?",
    answer:
      "It is much harder. Inside the settlement boundary, development is expected in principle. Outside it, the site counts as countryside and is judged against much tighter policy, whether or not it is also Green Belt. Check the boundary on Waverley's policies map before you commission any drawings.",
  },
  {
    question: "Do I have to pay the Community Infrastructure Levy on a new house?",
    answer:
      "New homes are normally liable for the Community Infrastructure Levy, which Waverley charges per square metre of new floorspace. Exemptions exist, including for self-build homes and annexes, but they have to be claimed on the correct forms and approved before work starts. Once work has begun without the exemption, it cannot be claimed back.",
  },
  {
    question: "What foundations will a new house need on Weald Clay?",
    answer:
      "Whatever your structural engineer designs for the site. Weald Clay shrinks and swells with the seasons and with nearby trees, and Approved Document A requires a foundation designed to resist that movement. Depth depends on the soil and the trees, so we would rather see a trial hole or site investigation before the price is fixed.",
  },
  {
    question: "Will my mortgage lender need a structural warranty?",
    answer:
      "Lenders normally require a recognised structural warranty on a newly built home, and so will a future buyer's lender. The warranty has to be arranged before work starts, because the warranty provider inspects the build as it goes up. Raise it at the first meeting, not at completion.",
  },
  {
    question: "Do you build to someone else's architect's drawings?",
    answer:
      "Yes. Our new builds are usually designed by the client's architect. We work with the architect, structural engineer and any designers from the outset, and where a design needs practical construction knowledge to be buildable, we say so before the price is fixed rather than on site.",
  },
];

export default function NewBuildsPage() {
  return (
    <PageShell eyebrow="New builds" title="New build homes in Cranleigh & Surrey">
      <JsonLd
        data={[
          serviceSchema({
            name: "New build homes",
            serviceType: "New home construction",
            path: PATH,
            description:
              "Architect-designed new homes built from groundworks to handover in Cranleigh, the Waverley villages and across Surrey, to a fixed price and an agreed programme.",
            areaServed: ["Cranleigh", "Guildford", "Godalming", "Surrey", "Hampshire", "West Sussex"],
          }),
          breadcrumbList(TRAIL),
        ]}
      />

      {/* TODO(paul): which structural warranty provider(s) do we build under for new homes? */}

      <ServiceDetail service={service} showDetail={false}>
        <Measure>
          <Breadcrumbs trail={TRAIL} />

          <Lead>
            We build new homes from the ground up: site preparation and
            groundworks, foundations, structure and roof, services, finishes and
            handover. One team runs the whole job, so you have one point of
            responsibility for the programme, the workmanship and the cost.
          </Lead>

          <H2>What we build, and who for</H2>

          <P>
            Our new builds range from a single house to a pair of homes, and
            include the buildings that go with a home, such as coach houses and
            garaging with rooms above. They are usually architect-designed, and we work alongside the client&apos;s
            architect, structural engineer and designers from the start rather
            than being handed a finished drawing set to price.
          </P>

          <P>
            Whether the house is contemporary, traditional to Surrey or built for
            very high energy performance, the job is the same: turn a set of
            drawings into a finished, practical home, and tell you early where a
            design will be hard or expensive to build. We coordinate every
            package, from foundations, brickwork, masonry and roofing through to
            mechanical and electrical design, solar energy systems, air source
            heat pumps and air conditioning.
          </P>

          <H2>New homes we have built</H2>

          <H3>Stocton Road, Guildford</H3>

          <P>
            A pair of new houses, with rendered upper floors over a brick plinth
            and Juliet balconies to the garden side. The finished pair is the
            photograph on our home page.
          </P>

          <H3>Millars Cottages</H3>

          <P>
            A new end-of-terrace house in red brick under a slate roof, with a
            gabled porch and a newly planted front garden, built to sit with the
            terrace it joins.
          </P>

          <H3>Mark Way, Godalming</H3>

          <P>
            A new coach house with a triple garage, a clay-tiled roof and a
            dormer lighting the room above.
          </P>

          <H3>A two-bedroom end of terrace, from the ground up</H3>

          <Quote cite="Tara Coles, new build end of terrace">
            &ldquo;Paul Martyn built a new 2 bedroom end of terrace property for
            me from the ground up. They handled all of the structural &amp;
            building control work for me, with lighting design, bathroom and
            kitchen design. I&apos;m definitely having them back for my next
            project, currently awaiting planning.&rdquo;
          </Quote>

          <H2>Planning a new home around Cranleigh</H2>

          <H3>The settlement boundary comes first</H3>

          <P>
            Cranleigh is in Waverley, and Waverley draws a settlement boundary
            around the built-up area. Inside it, new development is expected in
            principle. Outside it, the site counts as countryside and the burden
            of proof reverses. There are two settlement boundaries in Cranleigh
            parish, not one, and the village&apos;s built-up area is not Green
            Belt, while Rowly, in the same parish, is washed over by it. We
            explain why this decides more than anything else in{" "}
            <A href="/blog/cranleigh-settlement-boundary">
              which side of the settlement boundary you are on
            </A>
            . The same question applies in <AreaLink place="Ewhurst" />,{" "}
            <AreaLink place="Alfold" /> and the other villages we work in.
          </P>

          <H3>Converting rather than building</H3>

          <P>
            If the land has an agricultural building on it, converting may be a
            better route than building new. Class Q permitted development allows
            up to 10 homes and 1,000m² per agricultural unit, at no more than
            150m² each, but it doesn&apos;t apply in conservation areas, the
            Surrey Hills National Landscape or to listed buildings. We set out the
            rules in{" "}
            <A href="/blog/barn-conversions-cranleigh-planning-route">
              barn conversions around Cranleigh: the planning route
            </A>
            .
          </P>

          <H3>The Community Infrastructure Levy</H3>

          <P>
            New homes and annexes add new floorspace, and Waverley charges the
            Community Infrastructure Levy on it: <B>£452 per m²</B> on small
            residential schemes since 1 March 2019, index-linked each year, so
            the current figure is higher. Self-build and annexe exemptions exist,
            but they must be claimed on the right forms and approved{" "}
            <B>before work starts</B>. We cover the annexe case in{" "}
            <A href="/blog/annexes-multigenerational-living-cranleigh">
              annexes and multigenerational living in Cranleigh
            </A>
            .
          </P>

          <Callout label="Before the first digger arrives">
            <p className="!mt-3">
              Three things cannot be fixed once work has started: the CIL
              exemption claim, the structural warranty registration and the
              party wall notices. We check all three are in place before the
              start date is fixed.
            </p>
          </Callout>

          <H2>The ground, the frame and the energy standard</H2>

          <P>
            Cranleigh and most of the villages around it sit on the Weald Clay,
            which shrinks and swells with the seasons and with the trees around
            it. <B>Approved Document A</B> requires foundations designed to
            resist that movement, not just carry the house, and the depth depends
            on the soil and the trees near the footprint. Clay also means a
            standard soakaway often fails the <B>BRE Digest 365</B> percolation
            test, so surface water drainage has to be designed early. See{" "}
            <A href="/blog/building-on-weald-clay-cranleigh-footings">
              building on the Weald Clay around Cranleigh
            </A>
            .
          </P>

          <P>
            A new home has to meet the current energy standard in full. We build
            to the engineer&apos;s and energy assessor&apos;s design, and can
            install solar energy systems, air source heat pumps and air
            conditioning as part of the same contract, so the heating, the
            insulation and the electrical design are planned together rather than
            added one by one. Our note on{" "}
            <A href="/blog/part-l-extension-insulation">
              Part L and insulation standards
            </A>{" "}
            explains how the targets translate into wall thickness and glazing.
          </P>

          <H2>Turning an architect&apos;s design into a buildable house</H2>

          <P>
            Ambitious contemporary designs often need practical construction
            knowledge to turn an architectural idea into something that can be
            built well and to budget. We look at the drawings with that in mind
            during the estimate stages: where a detail will be hard to build or
            weatherproof, where an alternative gives the same look for less, and
            which items have long lead times and need ordering early. Raising
            these points before the price is fixed costs nothing. Raising them
            once the walls are up costs time and money, and usually the design
            as well.
          </P>

          <H2>What a new build costs</H2>

          <P>
            Our published rate for a new build is <B>£2,700 per m²</B> of floor
            area. It is a guide for budgeting from the first brief, and it sits
            with the rest of our rates on the <A href="/pricing">pricing page</A>
            . The things that move a new build away from it are:
          </P>

          <List
            items={[
              <>
                <B>Foundations.</B> Deep or piled foundations on clay near trees
                cost several times a shallow trench fill.
              </>,
              <>
                <B>Drainage and services.</B> Where the soakaway fails, where the
                sewer connection is, and how far the new supplies have to run.
              </>,
              <>
                <B>Specification.</B> Glazing, roofing materials, kitchens,
                bathrooms and joinery are where the range between two identical
                floor plans comes from.
              </>,
              <>
                <B>Energy systems.</B> Heat pumps, solar panels and cooling are
                each a package of their own, priced in the cost plan.
              </>,
              <>
                <B>Fees outside the build.</B> Planning, CIL, building control,
                structural design and the warranty all sit alongside the build
                cost.
              </>,
            ]}
          />

          <H2>How we run a new build</H2>

          <P>
            Building a new home is a large financial and personal commitment,
            which is why cost control, communication and programme are at the
            heart of how we work. From the start we set out a clear scope of
            works, a realistic programme and an open approach to cost, so there
            are fewer unexpected extras and delays once the build is under way.
            The route to a fixed price has four stages, and the first two are
            free:
          </P>

          <PriceLadder />

          <P>
            Once the contract is signed, payments follow progress on site, as
            set out on the <A href="/pricing">pricing page</A>, and one project
            manager runs the job from groundworks to handover. More on that on
            our <A href="/services/project-management">project management</A>{" "}
            page, and the full sequence is on <A href="/process">our process
            page</A>.
          </P>

          <Faq items={FAQS} />

          <TalkToUs heading="Talk to us about building a new home">
            <p>
              Send us the site address, where the design has got to and your
              budget. If the plot is outside a settlement boundary or near large
              trees, mention that, because it changes what we look at first. We
              are on Bridge Road, and you can call {CONTACT.phone}. More about
              working as <A href="/areas/cranleigh">builders in Cranleigh</A>.
            </p>
          </TalkToUs>
        </Measure>
      </ServiceDetail>
    </PageShell>
  );
}
