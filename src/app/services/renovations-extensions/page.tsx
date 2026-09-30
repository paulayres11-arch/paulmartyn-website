import type { Metadata } from "next";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { ServiceDetail } from "@/components/sites/paulmartyn/ServiceDetail";
import { serviceById, CONTACT } from "@/components/sites/paulmartyn/content";
import { Faq } from "@/components/sites/paulmartyn/Faq";
import { JsonLd } from "@/components/sites/paulmartyn/JsonLd";
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
 * Renovations & extensions — the broad, Surrey-wide service page.
 *
 * Rewritten long-form 2026-09-30. It shares a subject with
 * /services/house-extensions-cranleigh, so the two are split by intent and
 * must stay split: THIS page is the county-wide one (renovation as a whole,
 * the permitted development rules that apply anywhere, projects from across
 * Surrey); the Cranleigh page owns the local planning, the Weald Clay and the
 * Cranleigh projects. Don't move Cranleigh detail here — link to it.
 *
 * FACT SOURCES — nothing here is new:
 *   - Rates: /guides/house-extension-costs-surrey and /pricing.
 *   - Projects: reviews and testimonials in content.ts (Ripley, Cobham,
 *     Pirbright, Lightwater, Thursley and Cobham videos), quoted as written.
 *   - Structural calcs £1,500–£3,000, Part L U-values, party wall periods:
 *     the blog posts linked below.
 *   - Permitted development limits (GPDO 2015 Sch.2 Pt.1 Class A) and the
 *     "disproportionate additions" Green Belt test (NPPF) are national rules.
 *
 * TODO(paul): price band for a whole-house renovation with no extension
 *   (per m² or typical range). Not published anywhere, so the page gives cost
 *   drivers only.
 */

const service = serviceById("service-renovations");
const PATH = "/services/renovations-extensions";

const TITLE = "Extensions & Renovations, Surrey";
const DESCRIPTION =
  "Whole-house renovations and single or two-storey extensions across Surrey, from our base in Cranleigh. Published rates, fixed price. Call 01483 612156.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const TRAIL = [
  { name: "Services", path: "/services" },
  { name: "Renovations & extensions", path: PATH },
];

const RATES = [
  {
    name: "Single-storey extension",
    tag: "£2,700 – £3,100 per m²",
    body: "The base build: foundations, shell, roof, windows and doors, services and finishes to a standard specification.",
  },
  {
    name: "Two-storey extension",
    tag: "£2,600 – £3,000 per m²",
    body: "Less per square metre than a single storey, because the foundations and the roof are shared across two floors.",
  },
  {
    name: "Rear extension with glazing",
    tag: "£3,000 – £3,800 per m²",
    body: "Large sliding or bifold doors, rooflights and glazed gables cost more than walls, and the steel to carry the opening goes up with them.",
  },
  {
    name: "Kitchen extension",
    tag: "£3,500 – £4,500 per m²",
    body: "Includes the kitchen fit-out, so the drainage, ventilation, cabinetry and worktops are in the rate.",
  },
];

const FAQS = [
  {
    question: "Do I need planning permission to extend my house in Surrey?",
    answer:
      "Not always. A single-storey rear extension of up to 3m on an attached house, or 4m on a detached one, is usually permitted development, and larger ones can go through the neighbour consultation scheme. Side extensions, two-storey extensions and anything in a conservation area or on a listed building have tighter rules or need a full application. Which council you are in matters too, and so does whether the house is in the Green Belt.",
  },
  {
    question: "How much does a house extension cost in Surrey?",
    answer:
      "Our published rates are £2,700 to £3,100 per square metre for a single storey, £2,600 to £3,000 for two storeys, £3,000 to £3,800 for a rear extension with a lot of glazing and £3,500 to £4,500 for a kitchen extension including the fit-out. Planning fees, a structural engineer, party wall surveyors and landscaping sit on top of those, and the extension cost guide lists them.",
  },
  {
    question: "Can we live in the house while it is renovated?",
    answer:
      "Often, yes. We plan the programme so that the kitchen, a bathroom and somewhere to sleep stay usable for as long as possible, sheet up and protect the rooms we are not working in, and leave the site tidy and safe at the end of each day. On a whole-house strip-out, moving out for part of the job can be quicker and cheaper, and we will tell you if that is the case.",
  },
  {
    question: "Do I need structural calculations to knock through a wall?",
    answer:
      "Yes, if the wall is load-bearing. Building control will want a structural engineer's calculation for the beam and what it bears on before the work is signed off, and it should be approved before the wall comes out. Budget £1,500 to £3,000 for the engineer.",
  },
  {
    question: "Is it better to extend or to renovate what we have?",
    answer:
      "Often the answer is some of both. Many houses have space that is badly used rather than too little of it, and reconfiguring the ground floor or converting a garage or loft can cost less than building outwards. We look at the whole house before recommending an extension, because the cheapest square metre is the one you already own.",
  },
  {
    question: "How do you keep the cost from changing during the build?",
    answer:
      "By fixing it before we start. The detailed design and cost plan turns every specification into a line-by-line price, and that becomes a signed fixed-price contract. If you change or add something during the build, we agree the cost of that change with you in writing before we carry it out, so the running total is always clear.",
  },
];

export default function RenovationsExtensionsPage() {
  return (
    <PageShell
      eyebrow="Renovations & extensions"
      title="Renovations & extensions in Surrey"
    >
      <JsonLd
        data={[
          serviceSchema({
            name: "House renovations and extensions",
            serviceType: "Residential renovation and house extension construction",
            path: PATH,
            description:
              "Whole-house renovations, remodelling and single and two-storey extensions across Surrey, Hampshire and West Sussex, from a base in Cranleigh.",
            areaServed: ["Surrey", "Cranleigh", "Guildford", "Godalming", "Haslemere", "Farnham", "Hampshire", "West Sussex"],
          }),
          breadcrumbList(TRAIL),
        ]}
      />

      <ServiceDetail service={service} showDetail={false}>
        <Measure>
          <Breadcrumbs trail={TRAIL} />

          <Lead>
            We take on complete renovations, remodelling and extensions: an
            extension on a family home, a reworked layout, or a full
            transformation of a tired house. We manage everything from the
            strip-out and structural work to the last coat of paint, as one
            coordinated build with one team responsible for it.
          </Lead>

          <P>
            We are based in Cranleigh and most of our work is in the villages
            around it. For extensions there, see{" "}
            <A href="/services/house-extensions-cranleigh">
              house extensions in Cranleigh
            </A>
            , which covers the local planning rules and the Weald Clay. This
            page covers the work itself, wherever in Surrey the house is.
          </P>

          <H2>What a renovation or extension with us includes</H2>

          <P>
            The work can include major structural alterations, steel
            installations, new openings and extensions, alongside complete
            mechanical and electrical design. We can also build in modern
            energy and smart-home systems, such as intelligent lighting,
            heating and climate control, security and connected-home technology,
            in both new and period properties.
          </P>

          <P>
            From structural work and the building fabric to plastering, bespoke
            joinery, kitchens, bathrooms, flooring and decoration, the project
            is managed as one build. You have a single point of responsibility
            for the programme, the workmanship and the cost, and you don&apos;t
            have to manage separate trades and contractors yourself.
          </P>

          <H3>Knowing what to keep</H3>

          <P>
            With period and character houses, a good renovation is often about
            deciding what should be kept as much as what should be replaced.
            Existing brickwork, timber, fireplaces and architectural details
            can be worked into the new design. Outdated layouts, tired services
            and poorly done earlier alterations can be removed or improved.
            Where the house is listed, that decision is shared with the
            conservation officer, and our{" "}
            <A href="/services/listed-buildings">
              listed building and heritage page
            </A>{" "}
            explains how that works.
          </P>

          <H2>Which extension suits your house?</H2>

          <List
            items={[
              <>
                <B>Single-storey rear.</B> The most common extension. It opens
                the back of the house to the garden and usually takes the
                kitchen with it.
              </>,
              <>
                <B>Side or wrap-around.</B> Fills the gap down the side of a
                semi or detached house. A wrap-around combines side and rear
                into an L and usually means rethinking the whole ground floor.
              </>,
              <>
                <B>Two-storey.</B> Adds a bedroom as well as living space, and
                costs less per square metre than a single storey.
              </>,
              <>
                <B>Up rather than out.</B> A{" "}
                <A href="/services/loft-conversions">loft conversion</A> is often
                the best-value floor area a house can add, because the roof and
                foundations are already there.
              </>,
              <>
                <B>Reconfigure first.</B> Knocking two rooms into one, moving a
                kitchen or converting a garage can solve the problem without an
                extension at all.
              </>,
            ]}
          />

          <H2>Planning: the rules that apply across Surrey</H2>

          <P>
            Each council in Surrey has its own local plan and design guidance.
            Cranleigh and the villages around it are in Waverley. But the
            national{" "}
            <B>permitted development</B> rules apply everywhere, and they decide
            whether you need a planning application at all:
          </P>

          <List
            items={[
              <>
                A single-storey rear extension of up to <B>3m</B> on an attached
                house or <B>4m</B> on a detached one is usually permitted
                development. Up to 6m and 8m is possible through the neighbour
                consultation scheme, except in a conservation area.
              </>,
              <>
                A single-storey side extension can be up to half the width of
                the original house and 4m high. In a conservation area, side
                extensions aren&apos;t permitted development at all.
              </>,
              <>
                A two-storey rear extension can extend up to 3m, and must be at
                least 7m from the rear boundary.
              </>,
              <>
                Materials must be similar in appearance to the existing house,
                and together all extensions and outbuildings can cover no more
                than half the garden.
              </>,
            ]}
          />

          <P>
            Two things change the picture. Much of Surrey is{" "}
            <B>Green Belt</B>, where national policy allows extensions only if
            they are not disproportionate to the original building, so earlier
            extensions count against you. And on a <B>listed building</B>, an
            extension needs listed building consent whatever the planning
            position. Even where no planning application is needed, Building Regulations
            approval always is, and the{" "}
            <A href="/blog/building-control-completion-certificate">
              building control completion certificate
            </A>{" "}
            is what a buyer&apos;s solicitor will ask for when you sell.
          </P>

          <Callout label="Worth knowing">
            <p className="!mt-3">
              Permitted development is measured from the house as it was first
              built (or as it stood on 1 July 1948), not as it is now. An
              extension a previous owner added uses up part of your allowance,
              which is why we check a property&apos;s history before assuming
              an extension can go ahead without an application.
            </p>
          </Callout>

          <H2>The technical side of extending</H2>

          <P>
            Three things decide whether an extension goes smoothly or turns
            into a variation.
          </P>

          <P>
            <B>Structure.</B> Any work that touches a load-bearing wall, the
            roof or the foundations needs a structural engineer&apos;s
            calculation, approved by building control before the work starts.
            Budget £1,500 to £3,000. We explain what the officer checks in{" "}
            <A href="/blog/structural-calculations-building-control">
              structural calculations and building control
            </A>
            .
          </P>

          <P>
            <B>Insulation.</B> The new parts of an extension have to meet the
            current Part L standards, which are much higher than those most
            existing houses were built to. The walls end up thicker than the
            house&apos;s, and the amount of glazing is limited unless the
            design makes up for it elsewhere. See{" "}
            <A href="/blog/part-l-extension-insulation">
              why your extension needs more insulation than the house
            </A>
            .
          </P>

          <P>
            <B>Neighbours.</B> Building on or near a shared wall or boundary
            means serving party wall notices, one or two months before work
            starts depending on the type of work. Getting the timing wrong is
            the most common reason a project with planning permission
            can&apos;t start when everyone agreed. See{" "}
            <A href="/blog/party-wall-notice-timing">
              the party wall notice that sets your start date
            </A>
            .
          </P>

          <H2>Renovations and extensions we have built across Surrey</H2>

          <P>
            Most of our work comes through recommendation. These are some of the
            projects our clients have written about.
          </P>

          <H3>Broom House, Ripley: two extensions</H3>

          <Quote cite="Gary Evans, Broom House, Ripley">
            &ldquo;Paul and the team completed a ground floor extension and a
            double storey extension at my property in Ripley. I&apos;m more than
            happy for anyone to get in touch — and have no hesitation in giving
            my personal recommendation.&rdquo;
          </Quote>

          <H3>Pirbright: a two-storey rebuild</H3>

          <Quote cite="Oliver Lodge, Pirbright">
            &ldquo;PaulMartyn Construction did a major project on our house in
            Pirbright. A two storey rebuild including a very interesting roof
            redesign and a &ldquo;greenification&rdquo;. 100% happy with their
            work from start to finish.&rdquo;
          </Quote>

          <H3>Lightwater: a double side extension</H3>

          <Quote cite="Eileen Mullane, Lightwater">
            &ldquo;I have a small child around the house and they made sure the
            job was tidy and safe at the end of everyday. They kept me informed
            of the progress pretty much daily and did the job in the time scale
            they gave me.&rdquo;
          </Quote>

          <H3>Living on site through a renovation</H3>

          <P>
            One recent client lived in the house for the whole project, which
            included new beams, a garage conversion, drainage and new openings:
          </P>

          <Quote cite="Nicholas Downes, Google review">
            &ldquo;We lived on site for the entire project, and they were
            accommodating and easy to get along with. The work was completed to
            a high standard, they were excellent at working through problems as
            they arose, and the project came in under budget.&rdquo;
          </Quote>

          <P>
            We have also worked on the Fairmile Estate in Cobham, and there are
            short films of a farmhouse extension in Thursley and a home
            extension in Cobham on our home page.
          </P>

          <H2>What it costs</H2>

          <P>
            Our extension rates are published, not quoted on request. They
            match the{" "}
            <A href="/guides/house-extension-costs-surrey">
              extension cost guide
            </A>{" "}
            and <A href="/pricing">our pricing page</A>:
          </P>

          <Rows rows={RATES} />

          <P>
            These rates are for the build itself. On top of them you should
            allow for the fees most quotes leave out: a householder planning
            application (£548 in England from 1 April 2026), a structural
            engineer, party wall surveyors if the neighbours dissent, and
            putting the garden back afterwards.
          </P>

          <P>
            There isn&apos;t a single rate for renovating a house without
            extending it, because it depends on what is found once the walls
            are opened. The main drivers are how far the house is stripped
            back, whether the wiring, plumbing and heating are replaced,
            structural changes to the layout, and the level of finish. The
            outline estimate stage is where we measure those for your house.
          </P>

          <H2>How we get to a fixed price</H2>

          <P>
            Every project goes through the same four stages. The first two are
            free, so you can have a measured estimate before you spend anything:
          </P>

          <PriceLadder />

          <P>
            Once work starts, you pay in stages as the build progresses, with
            interim certificates every two to three weeks based on the work
            actually completed. The full sequence is on{" "}
            <A href="/process">our process page</A>.
          </P>

          <Faq items={FAQS} />

          <TalkToUs heading="Talk to us about your renovation or extension">
            <p>
              Send us drawings if you have them, or photos and a rough idea if
              you don&apos;t. Tell us the town, and whether the house is listed
              or in a conservation area. We are on Bridge Road in Cranleigh, and
              you can call {CONTACT.phone}.
            </p>
          </TalkToUs>
        </Measure>
      </ServiceDetail>
    </PageShell>
  );
}
