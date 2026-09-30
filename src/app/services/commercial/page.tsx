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
 * Commercial, bars & hotels — flagship page, rewritten 2026-09-30.
 *
 * FACT SOURCES — nothing here is new:
 *   - The Grantley Arms, Wonersh: homepage services-band caption and the
 *     company brochure (public/downloads), which lists it under Commercial
 *     Projects. The dining-room photograph is the one captioned with it.
 *   - Grantley Arms listing: Grade II, NHLE 1241357 ("House, now public house
 *     and restaurant. C15 extended in C20. Timber framed"), checked
 *     2026-09-30. Whether it sits inside the Wonersh Conservation Area was
 *     only confirmed by a third-party map, so the page doesn't say so.
 *     Road distance from Bridge Road ~5.2 miles (OSRM), NNW.
 *   - "At Work" remote work lounge, Guildford: the brochure's other named
 *     commercial project. Nothing beyond the name and town is claimed.
 *   - Millars Studio / Cliddesden and the pub-then-farmhouse client: the
 *     TESTIMONIALS in content.ts, quoted as written.
 *   - Scope, phasing around trading hours, hotel work, joinery: SERVICES
 *     "service-commercial" detail.
 *   - Pricing position ("we start with your budget"): PRICING.bands.
 *   - 3D visualisation: the brochure's Design and Build page.
 *
 * TODO(paul): Grantley Arms — what was the scope (bar, dining barn, kitchens,
 *   rooms?), roughly when, and was the pub trading during the work? The case
 *   study says only what the site and brochure already show until then.
 * TODO(paul): a commercial price band, if you want to publish one. Until then
 *   the page states the published position: priced per project, from budget.
 */

const service = serviceById("service-commercial");
const PATH = "/services/commercial";

const TITLE = "Pub and Hotel Fit-Outs in Surrey";
const DESCRIPTION =
  "Pub, bar, hotel and restaurant refurbishment and fit-outs across Surrey, phased around trading hours, from our Cranleigh base. Call 01483 612156.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const TRAIL = [
  { name: "Services", path: "/services" },
  { name: "Commercial, bars & hotels", path: PATH },
];

const FAQS = [
  {
    question: "Can you refurbish a pub or hotel while it keeps trading?",
    answer:
      "Often, yes. We phase the work and programme it around trading hours, so part of the building stays open while another part is under refurbishment, and completed rooms or trading areas are handed back as soon as they are finished. Whether it works for your building depends on access, fire escape routes and how noisy each stage is, which we work out before the programme is fixed.",
  },
  {
    question: "Do you work to a fixed opening date?",
    answer:
      "Yes. Where the opening date is fixed, we plan backwards from it. Long lead-time items such as bar joinery, specialist lighting and kitchen equipment are ordered early, decisions are made before the trades need them, and the programme is agreed with the fixed-price contract rather than guessed at the start.",
  },
  {
    question: "Do you build bars, reception desks and fitted furniture?",
    answer:
      "Yes. Bespoke joinery is a large part of hospitality work, including bars, back bars, reception desks, banquettes, fitted furniture and feature pieces. Materials and finishes are chosen for how they wear under constant use, not only for how they look on the first day.",
  },
  {
    question: "Can you work on a listed pub or a building in a conservation area?",
    answer:
      "Yes. Many pubs and inns in Surrey villages are old buildings, and listed building consent applies to the inside of a listed building as well as the outside. We handle that side of the job in the same way as our heritage work, agreeing the approach with the conservation officer before work starts.",
  },
  {
    question: "How much does a commercial fit-out cost?",
    answer:
      "No two venues price the same, so we do not start from a standard rate. We start from your budget and shape the design and specification to fit it, then work through the same stages as any project: free feasibility and outline estimates, a paid detailed design and cost plan, and a signed fixed-price contract with an agreed programme.",
  },
  {
    question: "Do you work with our architect or interior designer?",
    answer:
      "Yes. We regularly work alongside owners, operators, architects and interior designers, and we are happy to build to someone else's design. Where it helps a client see the result before committing, we can also prepare photorealistic 3D visualisations of an interior.",
  },
];

export default function CommercialPage() {
  return (
    <PageShell eyebrow="Commercial" title="Pub, bar & hotel refurbishment in Surrey">
      <JsonLd
        data={[
          serviceSchema({
            name: "Commercial, pub, bar and hotel refurbishment",
            serviceType: "Commercial fit-out and hospitality refurbishment",
            path: PATH,
            description:
              "Fit-outs and refurbishments for pubs, bars, hotels, restaurants and light commercial premises across Surrey, phased around trading hours where needed.",
            areaServed: ["Cranleigh", "Wonersh", "Guildford", "Godalming", "Surrey", "Hampshire", "West Sussex"],
          }),
          breadcrumbList(TRAIL),
        ]}
      />

      <ServiceDetail service={service} showDetail={false}>
        <Measure>
          <Breadcrumbs trail={TRAIL} />

          <Lead>
            Pubs, bars, hotels and restaurants are among the projects we enjoy
            most. Design, craftsmanship, lighting, materials and atmosphere all
            come together, and the result is a place people choose to spend
            time. They also have to work hard every day and open on time.
          </Lead>

          <H2>Who we work for</H2>

          <P>
            We carry out fit-outs and refurbishments for{" "}
            <B>pubs, bars, hotels, restaurants and light commercial premises</B>
            , from upgrading a single room to transforming a whole building. Our
            clients are owners and operators, often working with an architect
            or interior designer. Much of our commercial work comes back to us:
            one client has had us build four projects, and another asked us back
            to refurbish their farmhouse after we had done their pub.
          </P>

          <P>
            For <B>hotels</B>, that can mean upgrading bedrooms and bathrooms,
            or refurbishing reception areas, bars, restaurants, lounges and
            communal spaces. For <B>bars and restaurants</B>, it is usually the
            whole package: strip-out, structural alterations, new layouts,
            mechanical and electrical installations, heating, cooling and
            ventilation, lighting, washrooms, flooring, decoration, specialist
            finishes and bespoke joinery.
          </P>

          <H2>The Grantley Arms, Wonersh</H2>

          {/* GRANTLEY_FACTS — see the note at the top of this file. */}
          <P>
            The Grantley Arms is a village pub and restaurant in{" "}
            <AreaLink place="Wonersh" />, about five miles north of our base on
            Bridge Road in Cranleigh. It is also a <B>Grade II listed
            building</B>: the official list entry describes a 15th-century
            timber-framed house, extended in the 20th century and now a pub,
            so the commercial work and the{" "}
            <A href="/services/listed-buildings">heritage work</A> we do meet
            in the same building.
          </P>

          <P>
            Its dining room, in the photographs at the top of
            this page and on our home page, is a barn space. The original timber
            frame is open under a whitewashed vaulted roof, with wide oak
            floorboards, panelled walls, buttoned banquettes, an exposed brick
            end wall and chandeliers hung beneath the trusses. A room like this
            has to feel like an old building and still take the wear of a busy
            pub every day.
          </P>

          <H2>Other commercial work</H2>

          <H3>Millars Studio: four projects and a light industrial unit</H3>

          <P>
            Millars Studio have had us build four projects for them, most
            recently rebuilding a large light industrial unit in Cliddesden, in
            Hampshire. In their words:
          </P>

          <Quote cite="Don & Leone, Millars Studio">
            &ldquo;Paul Martyn have built out 4 projects for us now. We are
            currently rebuilding a large light industrial unit in Cliddesden.
            The construction and build detail was beyond what we had expected.
            Thank you guys once again for looking after us, delivering a stress
            free and fun build.&rdquo;
          </Quote>

          <H3>A pub, then a farmhouse</H3>

          <Quote cite="Hannah Frederick, pub & farmhouse refurbishment">
            &ldquo;We used Paul Martyn to refurbish our pub a few years ago — we
            were so delighted with them we invited them back to refurbish our
            farmhouse. We couldn&apos;t recommend them more.&rdquo;
          </Quote>

          <H3>&ldquo;At Work&rdquo;, Guildford</H3>

          <P>
            A remote-working lounge in Guildford, and one of the commercial
            interiors in our brochure.
          </P>

          <P>
            Some images in the gallery above are marked &ldquo;Proposed&rdquo;.
            Those are design visualisations, not finished work. For larger or
            more design-led interiors, we can produce photorealistic 3D renders
            so an owner can see the space before committing to it.
          </P>

          <H2>Finishes that take the wear</H2>

          <P>
            A hospitality interior has to look exceptional on opening night and
            still look right after years of constant use. So we choose
            materials, finishes and details for durability and maintenance as
            well as for appearance: floors that can be cleaned every night,
            joinery that survives being leant on, and surfaces that can be
            repaired rather than replaced.
          </P>

          <P>
            This is also where small details make a big difference. Feature
            lighting, carefully chosen materials, bespoke joinery and the way
            different finishes meet can change how a room feels. We enjoy
            working with owners, operators, architects and interior designers
            to turn those ideas into a space that works commercially as well as
            visually, and to handle the practical questions (fixings, access
            panels, cable routes) before they become problems on site.
          </P>

          <H2>Working to a fixed opening date</H2>

          <P>
            When the programme is tight, the planning matters as much as the
            building. The decisions that delay a hospitality job are rarely
            about construction. They are about joinery not yet drawn, lighting
            not yet chosen, or equipment ordered too late. We deal with all of
            that before the trades need it:
          </P>

          <List
            items={[
              <>
                <B>Phasing.</B> Where a business needs to stay open, we phase
                and programme the work around trading hours, and hand back
                finished bedrooms or trading areas as soon as each is complete.
              </>,
              <>
                <B>Procurement.</B> Long lead-time items such as bar joinery,
                specialist lighting and equipment are identified and ordered
                early, so they never hold up the programme.
              </>,
              <>
                <B>Sequencing.</B> Trades follow one another in the right order
                instead of working on top of each other, which is what keeps
                the finish right on a short programme.
              </>,
              <>
                <B>Building control.</B> Liaison with building control is part
                of our quotation, not something left to the client.
              </>,
            ]}
          />

          <P>
            Our <A href="/services/project-management">project management</A>{" "}
            page explains how one project manager holds all of this together.
          </P>

          <H2>Listed and period commercial buildings</H2>

          <P>
            A lot of Surrey&apos;s pubs and inns are old buildings, and many are
            listed or sit in a village conservation area. Listed building
            consent applies to the inside of a listed building as well as the
            outside, so a new bar, a moved partition or a new opening can need
            consent as much as a new window. Starting work without it is a
            criminal offence. We bring the same approach as our{" "}
            <A href="/services/listed-buildings">
              listed building and heritage work
            </A>
            : record what is there, agree the approach with the conservation
            officer, and use traditional materials where the building needs
            them.
          </P>

          <H2>What a commercial project costs</H2>

          <P>
            We don&apos;t publish a standard rate for commercial work, because no
            two venues price the same. We start with your budget and shape the
            design and specification to fit it. The main cost drivers are:
          </P>

          <List
            items={[
              <>
                <B>How much of the building is stripped back.</B> A decorative
                refresh and a full strip-out with new services are very
                different jobs.
              </>,
              <>
                <B>Mechanical and electrical work.</B> Kitchens, ventilation,
                cooling and lighting are often the largest single package in
                hospitality.
              </>,
              <>
                <B>Joinery and finishes.</B> Bespoke bars and fitted furniture
                built for heavy use cost more than off-the-shelf pieces, and
                last longer.
              </>,
              <>
                <B>Phasing.</B> Working around a trading business takes longer
                than working in an empty building, and the programme reflects
                that.
              </>,
              <>
                <B>Consents.</B> Listed buildings and conservation areas add
                drawings, applications and time before work starts.
              </>,
            ]}
          />

          <P>
            Commercial work goes through the same four stages as all our
            projects, ending in a fixed price:
          </P>

          <PriceLadder />

          <Faq items={FAQS} />

          <TalkToUs heading="Talk to us about your pub, bar or hotel">
            <p>
              Tell us about the building, what you want it to become and when you
              need to be open. If it is listed or in a conservation area, mention
              that as well. We are on Bridge Road in Cranleigh, and you can call{" "}
              {CONTACT.phone}.
            </p>
          </TalkToUs>
        </Measure>
      </ServiceDetail>
    </PageShell>
  );
}
