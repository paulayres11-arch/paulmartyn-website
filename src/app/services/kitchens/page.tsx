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
  Rows,
  TalkToUs,
} from "@/components/sites/paulmartyn/Prose";
import { breadcrumbList, service as serviceSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

/**
 * Kitchens — expanded long-form 2026-09-30.
 *
 * FACT SOURCES — nothing here is new:
 *   - Scope ("knocking rooms together", one team for structure, units,
 *     worktops, plumbing, electrics, finishes): SERVICES "service-kitchens"
 *     body in content.ts.
 *   - Kitchen extension £3,500–£4,500 per m² incl. fit-out; single-storey
 *     shell £2,700–£3,100 per m²; steel/padstone/opening reasoning; the
 *     2–3 weeks and £500–£1,500 cost of moving a beam after the kitchen is
 *     designed; 8–12 weeks design and approvals, 10–14 weeks build; PD limits
 *     3m/4m, larger-home scheme 6m/8m not available in conservation areas:
 *     the kitchen-extensions blog post, the cost guide and /pricing.
 *   - Structural engineer £1,500–£3,000: structural-calculations blog post.
 *   - Part P (new circuits and a new consumer unit are notifiable),
 *     competent person schemes, solid Victorian walls and routing services
 *     through floor voids rather than chasing: the Victorian-cottage rewire
 *     blog post.
 *   - Listed building consent for removing internal walls: the listed
 *     buildings page and wet-rooms blog post (internal work affecting
 *     character needs consent; criminal offence without it).
 *   - Reviews: Leone Coles (Cranleigh — confirmed by Paul 2026-08-17) and
 *     Jonathan Findeis, from REVIEW_ITEMS in content.ts, quoted verbatim.
 *   - Barn kitchens, home bar: gallery alt text in content.ts.
 *
 * Deliberately NOT stated: that all kitchen electrical work is notifiable.
 * Kitchens have not been a Part P "special location" since 2013; only new
 * circuits, consumer units and work in bathrooms are. The rewire blog post
 * says otherwise and should be checked.
 */

const service = serviceById("service-kitchens");
const PATH = "/services/kitchens";

const TITLE = "Kitchen Fitting in Cranleigh";
const DESCRIPTION =
  "Kitchen refits and kitchen extensions in Cranleigh and Surrey: knock-throughs, steelwork, units, plumbing and electrics by one team. Call 01483 612156.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const TRAIL = [
  { name: "Services", path: "/services" },
  { name: "Kitchens", path: PATH },
];

const FAQS = [
  {
    question: "Can you knock two rooms together to make a bigger kitchen?",
    answer:
      "Yes, and it is one of the most common kitchen jobs we do. If the wall between the rooms is load-bearing, a structural engineer designs a steel beam to carry what the wall was holding up, building control checks the calculation, and the beam is set on padstones before the wall comes out. The engineer's calculation usually costs £1,500 to £3,000, and it should be done before the kitchen layout is finalised, because the steel decides where the units can go.",
  },
  {
    question: "Should I choose the kitchen first or plan the layout first?",
    answer:
      "Plan the layout and the structure first. Where the opening goes, where the steel sits and where the services run decide what the kitchen can be. Moving a beam after the kitchen has been designed typically means a revised calculation, a second building control submission, two to three weeks lost and £500 to £1,500 in redesign. Getting the order right costs nothing extra.",
  },
  {
    question: "How much does a kitchen extension cost in Cranleigh?",
    answer:
      "A kitchen extension including the fit-out runs £3,500 to £4,500 per square metre. A plain single-storey extension is £2,700 to £3,100 per square metre; the difference is the drainage, ventilation, electrics and cabinetry a kitchen adds on top of the shell. Those are the same published figures as our pricing page and extension cost guide.",
  },
  {
    question: "How long does a kitchen extension take?",
    answer:
      "Allow eight to twelve weeks for design and approvals before work starts, and a further ten to fourteen weeks to build a typical single-storey kitchen extension. Design and approvals are usually the slower part, which is why we start the structural and planning questions early.",
  },
  {
    question: "Do I need building control for a new kitchen?",
    answer:
      "Not for a like-for-like replacement of units and worktops. You do need it if a load-bearing wall comes out, if the kitchen goes into an extension, or if drainage changes significantly. New electrical circuits and a new consumer unit are notifiable under Part P, and gas work must be done by a Gas Safe registered engineer. We keep the certificates, because a buyer's solicitor will ask for them.",
  },
  {
    question: "Can I take out a wall in a listed cottage to make a kitchen?",
    answer:
      "Possibly, but it needs listed building consent before any work starts, because listing covers the inside of the building as well as the outside. Taking out a wall without consent is a criminal offence. The official list description is the place to start, and we check it with you before a layout is drawn.",
  },
];

export default function KitchensPage() {
  return (
    <PageShell eyebrow="Kitchens" title="Kitchens in Cranleigh & Surrey">
      <JsonLd
        data={[
          serviceSchema({
            name: "Kitchen fitting and kitchen extensions",
            serviceType: "Kitchen installation and renovation",
            path: PATH,
            description:
              "Kitchen refits, knock-throughs and kitchen extensions in Cranleigh, the Waverley villages and across Surrey — structural work, units, worktops, plumbing, electrics and finishes by one team.",
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
            Most of the kitchens we build are not a straight swap of units. They
            involve taking a wall out, moving a sink to a new wall, or building
            the room the kitchen goes into. That is building work first and
            kitchen fitting second, and we handle both with one team.
          </Lead>

          <P>
            We carry out kitchen installations and full refits, including
            knocking rooms together to open up the space. The structural work,
            units, worktops, plumbing, electrics and finishes are all done by
            the same team, so the details line up: the electrician&apos;s first
            fix is done before the plasterer arrives, and the joinery is
            measured only once the walls are true.
          </P>

          <H2>Which kind of kitchen project is yours?</H2>

          <P>
            Kitchen enquiries in and around Cranleigh usually fall into one of
            three shapes, and each is priced and programmed differently:
          </P>

          <Rows
            rows={[
              {
                name: "Refit in the same room",
                tag: "No structural work",
                body: "New units, worktops, appliances and finishes in the existing footprint. The cost is driven by the specification and by how much the plumbing, drainage and electrics have to move.",
              },
              {
                name: "Knock-through",
                tag: "Steel beam and building control",
                body: "Two rooms become one — usually the old kitchen and a dining room. A load-bearing wall comes out, a structural engineer designs the steel, and building control checks it. This is the most common kitchen job we do.",
              },
              {
                name: "Kitchen extension",
                tag: "£3,500 – £4,500 per m²",
                body: (
                  <>
                    A new rear, side or wrap-around extension built around the
                    kitchen, including the fit-out. Covered in detail on{" "}
                    <A href="/services/house-extensions-cranleigh">
                      house extensions in Cranleigh
                    </A>
                    .
                  </>
                ),
              },
            ]}
          />

          <H2>Why the layout decides the price</H2>

          <P>
            People usually start with a photograph of a kitchen they like: an
            island, a run of glazing, a particular tap. The first question we
            ask is different. Where is the wall coming out, and what is going to
            hold up the floor or roof over the gap?
          </P>

          <P>
            Opening up a load-bearing wall means a <B>steel beam</B> sitting on{" "}
            <B>padstones</B> built into the walls either side. Its size depends
            on the span, the load above it and the width of the opening. A four
            metre opening for bifold doors needs a heavier beam than a two and a
            half metre doorway, and a heavier beam can mean rebuilding part of a
            wall to take the padstone. None of that appears in a kitchen
            brochure. A structural engineer works it out from a drawing, usually
            for £1,500 to £3,000, and it needs to happen before anyone chooses a
            kitchen range.
          </P>

          <Callout label="Get the order right">
            <p className="!mt-3">
              Agree the opening, the beam position and any rooflight with the
              engineer before the kitchen designer finalises the layout. Moving
              the beam afterwards typically means a revised calculation, a
              second building control submission, two to three weeks lost and
              £500 to £1,500 in redesign. The long version is in{" "}
              <A href="/blog/kitchen-extensions-cranleigh-layout-budget">
                kitchen extensions in Cranleigh: layout before budget
              </A>
              , and what building control looks for is explained in{" "}
              <A href="/blog/structural-calculations-building-control">
                structural calculations
              </A>
              .
            </p>
          </Callout>

          <H2>Kitchens in older Cranleigh houses</H2>

          <P>
            Cranleigh&apos;s houses are mostly 1930s semis and detached houses
            on generous plots, with older cottages nearer the centre. Each hides
            something different behind the plaster.
          </P>

          <H3>1930s semis</H3>

          <P>
            The classic project is taking out the wall between a small back
            kitchen and the dining room. The wall is often carrying more than it
            looks, so it needs the engineer before it needs the kitchen
            designer. We cover what these houses hide in{" "}
            <A href="/blog/extending-1930s-semi-cranleigh">
              extending a 1930s semi in Cranleigh
            </A>
            .
          </P>

          <H3>Victorian cottages and solid walls</H3>

          <P>
            Solid Victorian brick has no cavity to hide a cable or pipe in.
            Chasing into it removes material from the only leaf of wall there
            is, and cracks the lime or lath-and-plaster on the inside face. So we
            route new circuits and pipework through the floor and ceiling voids
            wherever we can, and only chase where there is no other way. An old
            cottage kitchen is also a good moment to check the wiring and supply
            pipes behind it, as described in{" "}
            <A href="/blog/cranleigh-victorian-cottage-rewire-replumb">
              a sympathetic rewire and replumb
            </A>
            .
          </P>

          <H3>Listed houses and barn conversions</H3>

          <P>
            If the house is one of the parish&apos;s listed buildings, taking out
            a wall or cutting new openings for a kitchen needs listed building
            consent, because listing covers the inside as well as the outside.
            Several of the kitchens in the gallery above are in barn conversions,
            fitted beneath the barn&apos;s exposed timber frame. That work is covered on
            our{" "}
            <A href="/services/listed-buildings">
              listed buildings and heritage
            </A>{" "}
            page.
          </P>

          <H2>Services, regulations and certificates</H2>

          <List
            items={[
              <>
                <B>Electrics.</B> New circuits, such as a dedicated supply for an
                induction hob or oven, and a new consumer unit are notifiable
                under Part P of the Building Regulations. They are certified by a
                registered electrician under a competent person scheme.
              </>,
              <>
                <B>Gas.</B> Any work on gas pipework or a gas hob must be done
                by a Gas Safe registered engineer.
              </>,
              <>
                <B>Ventilation.</B> A kitchen needs mechanical extract to the
                outside that meets Approved Document F.
              </>,
              <>
                <B>Structure.</B> Any beam needs an engineer&apos;s calculation
                approved by building control before the wall comes out, and a
                completion certificate at the end. See{" "}
                <A href="/blog/building-control-completion-certificate">
                  what a completion certificate is for
                </A>
                .
              </>,
            ]}
          />

          <H2>Kitchens we have built</H2>

          <P>
            A Cranleigh client asked us to knock two rooms into one for a new
            kitchen, and came back a year later for a two-storey side extension.
            Her review of the kitchen:
          </P>

          <Quote cite="Leone Coles — kitchen, Cranleigh">
            &ldquo;This company did a full kitchen refurbishment where we knocked
            two rooms into one. I was supported throughout in helping me with
            design decisions and the workforce were tidy and professional.
            Thankyou Paulmartyn for my lovely kitchen.&rdquo;
          </Quote>

          <Quote cite="Jonathan Findeis — kitchen renovation">
            &ldquo;We used Paul Martyn to renovate our kitchen this year. They
            were clean, efficient and professional. There team of contractors
            were very knowledgeable and carried out the work on time and to a
            perfect finish. I can not recommend these guys enough.&rdquo;
          </Quote>

          <P>
            The gallery above includes shaker kitchens in barn conversions with
            full-height larders and belfast sinks, a handleless kitchen with a
            marble-topped island, kitchens in new extensions under large
            rooflights, and a fitted home bar in fluted timber.
          </P>

          <H2>What a kitchen costs</H2>

          {/* TODO(paul): price band for a standalone kitchen refit */}
          <P>
            For a kitchen in a new extension, our published rate is{" "}
            <B>£3,500 to £4,500 per m²</B> including the fit-out, against £2,700
            to £3,100 per m² for a plain single-storey extension. The{" "}
            <A href="/guides/house-extension-costs-surrey">
              extension cost guide
            </A>{" "}
            sets out the fees that sit on top.
          </P>

          <P>
            For a kitchen in an existing room, the price depends on things we
            can only measure on site:
          </P>

          <List
            items={[
              <>
                <B>Structure.</B> Whether a wall comes out, and how big the
                steel has to be.
              </>,
              <>
                <B>What moves.</B> A sink or hob on a new wall means new
                drainage, gas and circuits. Keeping them where they are is the
                cheapest layout.
              </>,
              <>
                <B>The specification.</B> Units, worktops and appliances vary
                more in price than any other part of the job.
              </>,
              <>
                <B>The building.</B> Solid walls, old wiring or a listed
                interior add work that a modern house doesn&apos;t need.
              </>,
            ]}
          />

          <P>
            A kitchen project follows the same four stages as all our work, and
            the first two are free:
          </P>

          <PriceLadder />

          <P>
            On a kitchen, the detailed design stage is where the kitchen
            specification, the mechanical and electrical design and the
            structural drawings come together. That means the fixed-price
            contract covers the kitchen you have actually chosen. The full
            sequence is on <A href="/process">our process page</A>, and stage
            payments are explained on <A href="/pricing">pricing</A>.
          </P>

          <Faq items={FAQS} />

          <TalkToUs heading="Talk to us about your kitchen">
            <p>
              Send us a floor plan or a few photographs and tell us which walls
              you would like to lose. If the house is listed or in a
              conservation area, mention that as well. We are on Bridge Road and
              work across Cranleigh, <AreaLink place="Ewhurst" />,{" "}
              <AreaLink place="Shamley Green" />, <AreaLink place="Wonersh" /> and
              the other villages. Call {CONTACT.phone}, or read more about us as{" "}
              <A href="/areas/cranleigh">builders in Cranleigh</A>.
            </p>
          </TalkToUs>
        </Measure>
      </ServiceDetail>
    </PageShell>
  );
}
