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
 * Staircases — expanded long-form 2026-09-30.
 *
 * FACT SOURCES — nothing here is new:
 *   - Scope (straight flights, cut-string and winder designs, made and fitted
 *     to suit the house, structure/joinery/finishes coordinated):
 *     SERVICES "service-staircases" body in content.ts.
 *   - Softwood from around £3,600, oak from around £5,600, removal and
 *     install as one job or part of a larger project: PRICING.bands.
 *   - Loft stairs (headroom is the test people forget; the stair becomes the
 *     protected escape route, FD30 doors, 30 minutes' fire resistance):
 *     SERVICES "service-loft-conversions" detail.
 *   - Approved Document K figures (42° max pitch for a private stair, rise
 *     150–220mm, going 220–300mm, 2R+G 550–700mm, 2m headroom, handrail
 *     900–1000mm, 100mm sphere) are the national guidance, not local fact.
 *   - Listed building consent for replacing a staircase: statute — listing
 *     covers the interior (see the listed buildings page).
 *   - Projects: gallery alt text in content.ts; Rake Barn's staircase is the
 *     photograph captioned "Rake Barn, Milford" on /process.
 *
 * Loft stair headroom (2m; 1.9m centre / 1.8m side in a loft conversion,
 * Approved Document K) is covered on the loft page, which was corrected
 * 2026-09-30 — it previously said "1.9m at the edge".
 */

const service = serviceById("service-staircases");
const PATH = "/services/staircases";

const TITLE = "Bespoke Staircases in Cranleigh";
const DESCRIPTION =
  "Oak and softwood staircases made and fitted in Cranleigh and Surrey: cut-string, winder and open-tread, from around £3,600. Call 01483 612156.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const TRAIL = [
  { name: "Services", path: "/services" },
  { name: "Staircases", path: PATH },
];

const FAQS = [
  {
    question: "How much does a new staircase cost?",
    answer:
      "A softwood staircase starts from around £3,600 and an oak staircase from around £5,600. The final figure depends on the design, whether the flight turns, the balustrade and how much of the stairwell has to change. We can take out the old staircase and fit the new one as a single job, or build it as part of a larger project.",
  },
  {
    question: "Can I replace a staircase in a listed building?",
    answer:
      "Only with listed building consent. Listing covers the inside of a building, and an original staircase is often one of the features the listing protects. Replacing or altering it without consent is a criminal offence. In many listed houses the right answer is to repair the existing stair rather than replace it.",
  },
  {
    question: "What are the building regulations for a staircase?",
    answer:
      "They are in Approved Document K. For a private stair in a house, the pitch must not exceed 42 degrees, each rise is between 150 and 220mm, each going between 220 and 300mm, and twice the rise plus the going must fall between 550 and 700mm. You need 2m of headroom, a handrail between 900 and 1000mm high, and no gap in the balustrade that a 100mm sphere could pass through.",
  },
  {
    question: "Why does the staircase decide whether a loft conversion works?",
    answer:
      "Because the new flight has to rise into the roof where it is lowest, and it still has to give enough headroom to meet the regulations. We have seen more loft conversions fail on the stair than on the room, so we check where the stair lands before anyone designs the layout. A third storey also makes the stair the protected escape route, with fire doors to every habitable room off it.",
  },
  {
    question: "Can a staircase be moved to a different part of the house?",
    answer:
      "Usually, yes, but it is structural work rather than joinery. The old stairwell is floored over and the new opening needs trimmer joists to carry the joists that are cut, designed by a structural engineer and inspected by building control. It makes most sense as part of a wider renovation, when the floors are already up.",
  },
  {
    question: "Can you fit an open-tread staircase?",
    answer:
      "Yes. We have built open-tread stairs in oak on a steel stringer, including in barn conversions. The rules still apply: the treads must overlap by at least 16mm and the gaps between them must not let a 100mm sphere through, which usually means a riser bar or a closer tread spacing.",
  },
];

export default function StaircasesPage() {
  return (
    <PageShell eyebrow="Staircases" title="Staircases in Cranleigh & Surrey">
      <JsonLd
        data={[
          serviceSchema({
            name: "Bespoke staircases",
            serviceType: "Staircase manufacture and installation",
            path: PATH,
            description:
              "New and replacement staircases in oak and softwood — straight, winder, cut-string and open-tread — made and fitted in Cranleigh, the Waverley villages and across Surrey.",
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
            A staircase is the one piece of joinery everyone in the house uses
            every day, and usually the first thing you see through the front
            door. It is also a structural element with some of the tightest
            rules in the Building Regulations. We make and fit new and
            replacement staircases, and coordinate the structural work, joinery
            and finishes around the rest of the build.
          </Lead>

          <P>
            Some staircase jobs are a straight swap: the old flight comes out
            and a new one goes into the same opening. Others are part of a
            bigger change, such as a loft conversion, an extension, a barn
            conversion or a hall that is being reorganised. Either way, one team
            handles the removal, any alterations to the floor structure, the new
            flight and balustrade, and the making good and decoration around
            it.
          </P>

          <H2>Types of staircase we build</H2>

          <Rows
            rows={[
              {
                name: "Straight flight",
                tag: "The simplest",
                body: "One run from bottom to top. The easiest to make and to get through the regulations, if the stairwell is long enough to fit it at a comfortable pitch.",
              },
              {
                name: "Winder",
                tag: "Turns on tapered treads",
                body: "The flight turns a corner on tapered treads instead of a landing. It saves floor space, which is why it is common in cottages and loft conversions.",
              },
              {
                name: "Cut-string",
                tag: "Traditional detail",
                body: "The outer string is cut to follow the profile of the steps, so the tread ends show. It is a traditional detail that suits period houses, often with turned spindles and a curved bottom step.",
              },
              {
                name: "Open-tread",
                tag: "Oak on steel or timber",
                body: "Treads with no risers, often oak on a steel stringer. It lets light through, which suits barn conversions and open-plan rooms, but it has to be detailed carefully to meet the rules on gaps.",
              },
            ]}
          />

          <H2>Oak or softwood?</H2>

          <P>
            <B>Softwood</B> staircases are usually painted, often with a stair
            runner, and cost less. <B>Oak</B> is chosen for a stair that will be
            left natural, or for oak treads and handrails on a painted flight,
            which is a common compromise. It costs more because of the material
            and the extra care in making and fitting it.
          </P>

          <P>
            Balustrades can be timber spindles, turned or square, or slim metal
            spindles. The gallery above includes both, along with rope-twist
            metal spindles on a painted stair with oak treads.
          </P>

          <H2>The rules a new staircase has to meet</H2>

          <P>
            Staircases are covered by <B>Approved Document K</B> of the Building
            Regulations. For a private stair in a house, the main figures are:
          </P>

          <List
            items={[
              <>
                <B>Pitch</B> no steeper than 42 degrees.
              </>,
              <>
                <B>Rise</B> of each step between 150 and 220mm, and{" "}
                <B>going</B> between 220 and 300mm, with twice the rise plus the
                going between 550 and 700mm.
              </>,
              <>
                <B>Headroom</B> of 2m over the flight and landings.
              </>,
              <>
                <B>Handrail</B> between 900 and 1000mm above the pitch line.
              </>,
              <>
                <B>Guarding</B> with no opening that a 100mm sphere could pass
                through, so a small child can&apos;t get through or stuck.
              </>,
            ]}
          />

          <P>
            Those numbers are why a staircase can&apos;t simply be fitted to
            whatever space is left over. The length of the stairwell, the
            floor-to-floor height and the headroom set how many steps there are
            and how steep they are. On an older house we measure all of them on
            site before the stair is drawn, because floors are rarely level and
            the storey heights rarely match the drawings.
          </P>

          <P>
            Winders need particular care. On a tapered tread the going is
            measured along the centre of the tread on a narrow stair, and even
            at the narrow end each tread needs at least 50mm to stand on. A
            winder drawn to squeeze a stair into a tight corner can fail on
            exactly that point, so we set winders out full size before the
            treads are made.
          </P>

          <H2>Moving a staircase</H2>

          <P>
            Sometimes the best change to a house is putting the stair somewhere
            else: out of the middle of a room that is being opened up, or turned
            so that a landing reaches a new bedroom. That is structural work
            rather than joinery. The old stairwell has to be floored over, and
            the new opening cut through the floor needs trimmer joists to carry
            the joists that have been cut. On anything beyond a small opening a
            structural engineer designs it, and building control inspects it. It
            is worth doing as part of a wider renovation, when the floors are
            already up and the rooms are being replastered anyway.
          </P>

          <H2>Staircases in loft conversions</H2>

          <P>
            The staircase is the test people forget on a loft conversion. On a
            typical semi, the new flight has to rise into the roof exactly where
            it is lowest, and we have seen more conversions fail on the stair
            than on the room. We check where the stair lands before anyone
            becomes attached to a layout.
          </P>

          <P>
            Adding a third storey also changes the fire strategy for the whole
            house. The staircase becomes the protected escape route, which means
            30 minutes&apos; fire resistance to the stair enclosure and FD30
            fire doors to every habitable room off it, on every floor. The full
            picture is on our{" "}
            <A href="/services/loft-conversions">loft conversions</A> page and
            in{" "}
            <A href="/blog/loft-conversions-cranleigh-roof-types">
              which roofs convert and which don&apos;t
            </A>
            .
          </P>

          <H2>Staircases in listed and period houses</H2>

          <P>
            In a listed building, the staircase is often part of what the
            listing protects, and listing covers the interior as well as the
            outside. Replacing or altering a listed staircase needs{" "}
            <A href="/services/listed-buildings">listed building consent</A>,
            and doing it without consent is a criminal offence. In many cases
            the better answer is to repair the existing stair: replacing worn
            treads, re-fixing loose balusters and strengthening from beneath.
          </P>

          <P>
            Plenty of period houses that are not listed still have a staircase
            worth keeping, or one that was replaced badly in the 1960s or 70s
            and deserves something better suited to the house. A cut-string
            stair with turned spindles and a proper newel usually looks as if it
            has always been there.
          </P>

          <Callout label="Before you order a staircase">
            <p className="!mt-3">
              Check whether the house is listed, and measure the floor-to-floor
              height and the stairwell before choosing a design. A staircase
              picked from a catalogue and then found not to fit the stairwell,
              or not to give 2m of headroom, is a redesign you pay for twice.
            </p>
          </Callout>

          <H2>Staircases we have built</H2>

          <H3>Rake Barn, Milford</H3>

          <P>
            An open-tread staircase with oak treads on a black steel rake and
            slim black spindles, set against the barn&apos;s original timber
            frame and stone plinth, with the new kitchen alongside. The
            photograph is on <A href="/process">our process page</A>.
          </P>

          <H3>Barns, cottages and houses</H3>

          <P>
            The gallery above also shows a painted staircase rising against an
            exposed stone wall to a galleried mezzanine, an oak cut-string
            staircase with turned spindles and a curved bottom step, and a
            carpeted winder with a square oak newel, oak handrail, slim black
            spindles and recessed lights washing each tread. The short film is a
            garage converted into a studio, with a new staircase up to the
            attic.
          </P>

          <H2>What a staircase costs</H2>

          <P>
            As published on our <A href="/pricing">pricing page</A>, a{" "}
            <B>softwood staircase starts from around £3,600</B> and an{" "}
            <B>oak staircase from around £5,600</B>. We can remove the old
            staircase and install the new one as a single job, or build it as
            part of a larger project. What moves the price:
          </P>

          <List
            items={[
              <>
                <B>Shape.</B> Winders and turns take more making than a straight
                flight.
              </>,
              <>
                <B>Material and balustrade.</B> Oak, cut strings, turned
                spindles and metalwork all add to the joinery.
              </>,
              <>
                <B>The stairwell.</B> Trimming joists to lengthen an opening, or
                reworking a landing, is structural work.
              </>,
              <>
                <B>Making good.</B> Plastering, flooring and decoration around a
                new stair.
              </>,
            ]}
          />

          <P>
            On a larger project the staircase follows the same four stages as
            the rest of the work:
          </P>

          <PriceLadder />

          <P>
            The full sequence is on <A href="/process">our process page</A>. If
            the staircase is part of a wider scheme, see{" "}
            <A href="/services/renovations-extensions">
              renovations and extensions
            </A>
            .
          </P>

          <Faq items={FAQS} />

          <TalkToUs heading="Talk to us about a staircase">
            <p>
              Send us a photograph of the stairwell and the floor-to-floor
              height if you have it, and tell us whether the house is listed. We
              are on Bridge Road and work across Cranleigh,{" "}
              <AreaLink place="Shamley Green" />, <AreaLink place="Wonersh" />{" "}
              and the surrounding villages. Call {CONTACT.phone}, or read more
              about us as{" "}
              <A href="/areas/cranleigh">builders in Cranleigh</A>.
            </p>
          </TalkToUs>
        </Measure>
      </ServiceDetail>
    </PageShell>
  );
}
