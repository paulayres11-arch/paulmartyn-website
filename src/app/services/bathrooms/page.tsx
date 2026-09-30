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
  Rows,
  TalkToUs,
} from "@/components/sites/paulmartyn/Prose";
import { breadcrumbList, service as serviceSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

/**
 * Bathrooms — expanded long-form 2026-09-30.
 *
 * FACT SOURCES — nothing here is new:
 *   - Scope and "one team" copy: SERVICES "service-bathrooms" body/detail.
 *   - "From around £9,000" for a complete refit: PRICING.bands and the
 *     bathroom-fitting-cost blog post (soil pipe, like-for-like vs
 *     reconfigured, what a quote often leaves out, second bathroom value,
 *     building control when adding a bathroom).
 *   - Tanking, grout, tile backer board, failure 12–24 months later: the
 *     tiles-are-not-waterproof blog post.
 *   - Wet rooms: BS 5385, falls of about 1:60–1:80, suspended timber floors,
 *     Approved Document F 15 l/s intermittent / 8 l/s continuous, 4 air
 *     changes per hour with no external wall, LBC for cutting joists, no
 *     LBC fee, 8-week period, engineer £1,500–£3,000: the wet-rooms blog post.
 *   - Part P (bathroom work notifiable), unvented cylinders under G3: the
 *     Victorian-cottage rewire blog post.
 *   - Projects: gallery alt text in content.ts (listed-cottage bathroom, loft
 *     en-suites, Lazell Gardens loft ensuite, walnut en-suite, wet room).
 */

const service = serviceById("service-bathrooms");
const PATH = "/services/bathrooms";

const TITLE = "Bathroom Fitting in Cranleigh";
const DESCRIPTION =
  "Bathroom refits, en-suites and wet rooms in Cranleigh and Surrey from around £9,000: tanking, plumbing, tiling and finishes, one team. Call 01483 612156.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const TRAIL = [
  { name: "Services", path: "/services" },
  { name: "Bathrooms", path: PATH },
];

const FAQS = [
  {
    question: "How much does a new bathroom cost in Cranleigh?",
    answer:
      "A complete refit, covering strip-out, new suite, tiling, plastering, lighting, ventilation and decoration, starts from around £9,000. What takes it higher is moving the WC, reconfiguring the layout, or building a level-access wet room, rather than the choice of suite.",
  },
  {
    question: "Why does moving the toilet cost so much?",
    answer:
      "Because the soil pipe has to move with it. That usually means lifting the floor, notching or cutting joists, which needs structural sign-off, and running new pipework at the right fall. It turns a bathroom refit into a drainage and joinery job with a bathroom on top.",
  },
  {
    question: "Are tiles waterproof?",
    answer:
      "The tiles are, but the grout between them is not. Water passes through grout steadily, so the waterproof layer in a shower is the tanking membrane behind the tiles, laid over tile backer board rather than plasterboard. When it is missed, the failure usually shows twelve to twenty-four months later as a stain on the ceiling below.",
  },
  {
    question: "Can an old cottage have a wet room?",
    answer:
      "Usually, yes, but the floor decides how. Most cottage bathrooms sit on a suspended timber floor, and a wet room floor has to fall to a drain and stay completely rigid. We check the joists first, and a structural engineer designs any strengthening. If the cottage is listed, cutting or notching joists needs listed building consent before work starts.",
  },
  {
    question: "What ventilation does a bathroom need?",
    answer:
      "Approved Document F requires at least 15 litres per second of intermittent extract in a room with a bath or shower, or 8 litres per second if it runs continuously. A bathroom with no external wall or window needs more, at 4 air changes per hour. It is a building regulation, not a style choice.",
  },
  {
    question: "Do I need building control for a new bathroom?",
    answer:
      "If you are adding a bathroom or WC to a room that did not have one, yes. The electrical work in a bathroom is notifiable under Part P in all cases, and the ventilation has to meet the required extract rate. Keep the certificates, because they are what a buyer's solicitor asks for.",
  },
];

export default function BathroomsPage() {
  return (
    <PageShell eyebrow="Bathrooms" title="Bathrooms in Cranleigh & Surrey">
      <JsonLd
        data={[
          serviceSchema({
            name: "Bathroom fitting, en-suites and wet rooms",
            serviceType: "Bathroom installation and renovation",
            path: PATH,
            description:
              "Complete bathroom refits, en-suites, loft bathrooms, cloakrooms and wet rooms in Cranleigh, the Waverley villages and across Surrey, including tanking, plumbing, electrics, tiling and finishes.",
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
            A bathroom looks like a finishing job, but most of what decides
            whether it lasts is hidden: the floor under it, the membrane behind
            the tiles and the fall on the waste. We build family bathrooms,
            en-suites, loft bathrooms, cloakrooms and wet rooms with one team,
            so the tiling, joinery, lighting and plumbing all line up rather
            than being stitched together by separate trades.
          </Lead>

          <P>
            A complete refit covers strip-out, first fix, waterproofing, tiling,
            the suite, lighting and decoration. Where the layout changes, we
            take care of the structural work and building control as well. We
            quote bathrooms on their own, and they are often part of a wider
            renovation, a{" "}
            <A href="/services/loft-conversions">loft conversion</A> or an{" "}
            <A href="/services/house-extensions-cranleigh">extension</A>.
          </P>

          <H2>What kind of bathroom project is it?</H2>

          <Rows
            rows={[
              {
                name: "Like-for-like refit",
                tag: "From around £9,000",
                body: "New suite, tiling, lighting and decoration with the WC, bath and basin staying roughly where they are. The cheapest version, because the drainage doesn't move.",
              },
              {
                name: "Reconfigured layout",
                tag: "Priced on the drawing",
                body: "The bath becomes a walk-in shower, or the WC moves to another wall. The soil pipe moves with it, which usually means lifting the floor and working around the joists.",
              },
              {
                name: "New en-suite or second bathroom",
                tag: "Building control",
                body: "A bathroom in a room that didn't have one. It needs building control, new drainage and extract, and it is one of the most reliable ways to add value to a house.",
              },
              {
                name: "Wet room",
                tag: "Floor first",
                body: "Level access, no tray. The whole floor has to be tanked and laid to a fall, so the structure underneath decides what is possible.",
              },
            ]}
          />

          <H2>Why tanking matters more than tiles</H2>

          <P>
            Tiles are waterproof. <B>Grout is not.</B> It is a porous,
            cement-based material and water passes through it steadily. The
            layer that actually keeps water out of the wall in a shower is the{" "}
            <B>tanking</B> behind the tiles: a liquid or sheet membrane over the
            substrate, with reinforcing tape in the corners and collars around
            every pipe.
          </P>

          <P>
            The substrate matters too. Standard plasterboard is the wrong board
            for a shower enclosure, because it degrades when it gets wet. A
            shower needs <B>tile backer board</B> with the tanking over it. When
            this is skipped, nothing shows for twelve to twenty-four months.
            Then a stain appears on the ceiling below, or a soft patch at the
            base of a wall, long after the tiler has gone. That is where cheap
            quotes save money. We explain it in full in{" "}
            <A href="/blog/tiles-are-not-waterproof">tiles are not waterproof</A>
            .
          </P>

          <H2>Bathrooms in older Cranleigh houses</H2>

          <H3>Suspended timber floors</H3>

          <P>
            Most bathrooms in and around the Cranleigh conservation area sit on
            a suspended timber floor: joists spanning between walls, with boards
            across them. A full bath, a tiled floor and a new layout all add
            load, and a timber floor that deflects under a footstep will crack
            the tanking exactly where it has to hold. So we lift a board and
            check the joists (their size, span and condition) before we agree a
            price. Where strengthening is needed, a structural engineer designs
            it. That usually costs £1,500 to £3,000.
          </P>

          <H3>Wet rooms in cottages</H3>

          <P>
            A wet room floor has to fall consistently to the drain, typically at
            around 1:60 to 1:80, and stay rigid while it does. On a timber floor
            that is a piece of design, not a fitting job. The floor and walls
            are tanked as one continuous membrane to the tiling code of
            practice, <B>BS 5385</B>, because there is no tray to catch a leak.
            The whole floor does the tray&apos;s job. The detail is in{" "}
            <A href="/blog/wet-rooms-cranleigh-cottage">
              wet rooms in a Cranleigh cottage
            </A>
            .
          </P>

          <H3>Listed buildings</H3>

          <P>
            If the cottage is listed, the bathroom fittings themselves may not
            need consent, but cutting or notching joists, changing a floor level
            to form a fall, or moving a wall for a drainage run can each need{" "}
            <A href="/services/listed-buildings">listed building consent</A>.
            There is no fee for the application, and the statutory period for a
            decision is eight weeks. Submitting the engineer&apos;s floor
            assessment with the application, not after the council asks for it,
            is what usually stops a second eight weeks being added to the first.
          </P>

          <Callout label="Ventilation is a regulation">
            <p className="!mt-3">
              Approved Document F requires at least <B>15 litres per second</B>{" "}
              of intermittent extract in a room with a bath or shower, or 8
              litres per second running continuously. A bathroom carved out of a
              middle room with no external wall needs <B>4 air changes per
              hour</B>. Windowless cottage bathrooms without proper extract are
              the ones that get mould in the grout eighteen months later.
            </p>
          </Callout>

          <H2>Electrics, hot water and certificates</H2>

          <List
            items={[
              <>
                <B>Part P.</B> Electrical work in a bathroom is notifiable under
                Part P of the Building Regulations, however minor it looks. It
                is certified by a registered electrician under a competent
                person scheme, and you should end up with an Electrical
                Installation Certificate, not just an invoice.
              </>,
              <>
                <B>Hot water.</B> Fitting an unvented hot water cylinder is
                separately notifiable under Approved Document G3.
              </>,
              <>
                <B>Water Regulations.</B> Significant changes to pipework have
                to comply with the Water Supply (Water Fittings) Regulations
                1999.
              </>,
              <>
                <B>Building control.</B> A new bathroom in a room that
                didn&apos;t have one needs building control sign-off. Keep the
                certificate, because a buyer&apos;s solicitor will ask for it.
              </>,
            ]}
          />

          <H2>Bathrooms we have built</H2>

          <P>
            The gallery above shows our own work. It includes a bathroom in a
            listed cottage with a freestanding bath under a casement window, an
            oak sill and a walk-in shower in stack-bond tile, with a bath dresser
            of fitted wardrobes off it. There are several loft bathrooms under
            the eaves: a loft en-suite at Lazell Gardens with twin basins,
            fluted vanity units and a rooflight over the shower, and an oak
            vanity with fitted storage built into the eaves. There is also a
            cream wet room with a teak shower floor, a contemporary en-suite
            with a walnut vanity run, and cloakrooms finished in wallpaper and
            murals.
          </P>

          <P>
            Adding a bathroom in the roof is covered on our{" "}
            <A href="/services/loft-conversions">loft conversions</A> page,
            because the staircase and fire strategy come first there.
          </P>

          <H2>What a bathroom costs</H2>

          <P>
            A complete bathroom refit with us starts from{" "}
            <B>around £9,000</B>. That covers strip-out, new suite, tiling,
            plastering, lighting, ventilation and decoration. The suite is
            usually a small part of the number. What moves it is:
          </P>

          <List
            items={[
              <>
                <B>Moving the soil pipe.</B> A WC on a new wall means new
                drainage at the right fall, and often work to the joists.
              </>,
              <>
                <B>Reconfiguring the layout.</B> Moving walls or swapping a bath
                for a walk-in shower is a different job from like-for-like.
              </>,
              <>
                <B>A wet room.</B> Level access means tanking the whole floor
                and, in an older house, a structural check first.
              </>,
              <>
                <B>The building.</B> A listed cottage or a weak timber floor adds
                an engineer&apos;s assessment and possibly a consent period.
              </>,
            ]}
          />

          <P>
            When comparing quotes, check that each one includes tanking to the
            wet zones, backer board in the shower, an extract fan at the
            required rate vented outside, the Part P certificate, making good,
            decoration and skip hire. Ask for the quote itemised by trade and
            the gaps show up straight away. There is more on this in{" "}
            <A href="/blog/bathroom-fitting-cost-cranleigh">
              what a bathroom costs in Cranleigh
            </A>
            .
          </P>

          <P>
            Bathroom work follows the same four stages as all our projects:
          </P>

          <PriceLadder />

          <P>
            The bathroom specification is set at the detailed design stage, so
            the fixed-price contract covers the suite, tiles and finishes you
            have chosen. The full sequence is on{" "}
            <A href="/process">our process page</A>, and every published rate is
            on <A href="/pricing">pricing</A>.
          </P>

          <Faq items={FAQS} />

          <TalkToUs heading="Talk to us about your bathroom">
            <p>
              Tell us what is there now and what you would like instead. If you
              are hoping to move the WC or build a wet room, or the house is
              listed, mention that, because it changes what we look at first. We
              are on Bridge Road and work across Cranleigh,{" "}
              <AreaLink place="Ewhurst" />, <AreaLink place="Wonersh" /> and{" "}
              <AreaLink place="Alfold" />. Call {CONTACT.phone}, or read more
              about us as{" "}
              <A href="/areas/cranleigh">builders in Cranleigh</A>.
            </p>
          </TalkToUs>
        </Measure>
      </ServiceDetail>
    </PageShell>
  );
}
