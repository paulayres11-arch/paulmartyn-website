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
 * Project management — expanded long-form 2026-09-30.
 *
 * FACT SOURCES — nothing here is new:
 *   - How we run a site (sequence, one project manager, lead times, deliveries,
 *     sign-offs, the pull quote): SERVICES "service-project-management" in
 *     content.ts.
 *   - Fixed price, variations agreed in writing first, interim certificates
 *     every two to three weeks against an evaluation of work done: PRICING
 *     sections. "Hands-on project management throughout" is in
 *     PRICING.included — there is no separate fee published.
 *   - Four stages: PROCESS.
 *   - Retention 5% / 2.5% at practical completion, 6–12 month defects period,
 *     residential occupier under the 1996 Act, 24 March 2026 consultation
 *     response: the retention-snagging-practical-completion post.
 *   - Completion certificate: the building-control-completion-certificate post.
 *   - Full Plans / Building Notice / Registered Building Control Approver since
 *     6 April 2024, calculations £1,500–£3,000: the
 *     structural-calculations-building-control post.
 *   - Party wall notice periods: the party-wall-notice-timing post.
 *   - Reviews: Nicholas Downes and Eileen Mullane in REVIEW_ITEMS, quoted as
 *     written (the Downes quote is the part of the review already on the site).
 */

// TODO(paul): do we offer project management as a standalone paid service
// (managing a client's own trades), and at what fee? The page presents it as
// part of our building contract only, which is what the site says today.

const service = serviceById("service-project-management");
const PATH = "/services/project-management";

const TITLE = "Project Management in Surrey";
const DESCRIPTION =
  "How we project manage extensions, renovations and new builds in Cranleigh and Surrey: one manager, one programme, a fixed price. Call 01483 612156.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const TRAIL = [
  { name: "Services", path: "/services" },
  { name: "Project management", path: PATH },
];

const PAPERWORK = [
  {
    name: "Party wall notices",
    tag: "Before the start date",
    body: "Two months' notice for work to a shared wall, one month for building up to the boundary or digging near a neighbour's foundations. Neighbours have 14 days to reply, and silence counts as dissent. A notice lasts twelve months, so we get it served early.",
  },
  {
    name: "Structural calculations",
    tag: "Before the steel is ordered",
    body: "Any work to a load-bearing wall, roof or foundation needs an engineer's calculation approved by building control before the work is done, not after. Budget £1,500–£3,000 for the calculation itself.",
  },
  {
    name: "Building control",
    tag: "Throughout",
    body: "Full Plans, a Building Notice or a Registered Building Control Approver. We book each inspection at the stage it is needed, so nothing is covered up before it has been seen.",
  },
  {
    name: "Completion certificate",
    tag: "At the end",
    body: "Issued once the final inspection is booked and passed. It is the document a buyer's solicitor will ask for, and most people who lack one simply never had the final inspection booked.",
  },
];

const FAQS = [
  {
    question: "Is project management charged separately?",
    answer:
      "No. When we build your project, hands-on project management runs throughout and is part of the quotation, alongside the construction work, the programme and liaison with building control. There is no separate management fee added on top of the fixed price.",
  },
  {
    question: "Who do I speak to while the work is on site?",
    answer:
      "Your project manager. One person leads the project from start to finish, holds the programme and coordinates every trade, so you always know who to call, what is happening this week and what is coming next.",
  },
  {
    question: "What happens if I want to change something during the build?",
    answer:
      "We agree the cost of the change with you in writing before carrying it out. Alterations and additions are client-led, and nothing is added to the price without your sign-off, so the running total is always clear.",
  },
  {
    question: "How are payments structured?",
    answer:
      "Payments follow the progress of the build. Every two to three weeks we evaluate the work completed on site and issue an interim certificate and invoice against it, so each payment reflects work actually done.",
  },
  {
    question: "What is retention, and should I hold some back?",
    answer:
      "Retention is money held back from the contract sum, typically 5 per cent, often reduced to 2.5 per cent at practical completion and released at the end of a defects period of usually six to twelve months. Whether it applies, and how, should be written into the contract before work starts.",
  },
  {
    question: "Can we live in the house while the work is done?",
    answer:
      "Often, yes. It shapes the programme: which rooms are out of use and when, and how the site is kept safe and clean at the end of each day. We plan that with you before the start date rather than working it out as we go.",
  },
];

export default function ProjectManagementPage() {
  return (
    <PageShell eyebrow="How we run a build" title="Project management in Cranleigh & Surrey">
      <JsonLd
        data={[
          serviceSchema({
            name: "Construction project management",
            serviceType: "Construction project management",
            path: PATH,
            description:
              "Planning, procurement, programming and coordination of every trade on extensions, renovations, new builds and heritage projects in Cranleigh and across Surrey, from first site visit to handover.",
            areaServed: ["Cranleigh", "Guildford", "Godalming", "Surrey", "Hampshire", "West Sussex"],
          }),
          breadcrumbList(TRAIL),
        ]}
      />

      <ServiceDetail service={service} showDetail={false}>
        <Measure>
          <Breadcrumbs trail={TRAIL} />

          <Lead>
            Project management is the part of building work nobody sees in the
            photographs, and the reason the photographs look the way they do. A
            good finish comes from hundreds of decisions made in the right order.
          </Lead>

          <H2>What project management means on our jobs</H2>

          <P>
            We plan, procure, programme and coordinate every trade on site,
            keep you informed and keep the job to budget. That includes the
            parts most people don&apos;t think about until they cause a problem:
            structural and building control sign-offs, long lead-time items
            ordered early, deliveries timed so materials aren&apos;t left out in
            the weather, and a programme that stops trades working on top of one
            another.
          </P>

          <P>
            It is not a separate service bolted on to the build. Every
            extension, renovation, new build and heritage project we take on is
            run this way, by one project manager who holds the whole picture:
            planning the programme trade by trade, chasing lead times, checking
            work before it is covered up, and dealing with small issues while
            they are still small.
          </P>

          <H2>Why the order of work decides the finish</H2>

          <P>
            The electrician&apos;s first fix has to be done before the plasterer
            arrives. The joinery is measured only once the walls are true. The
            steel is ordered only once the calculation is approved. Get the
            sequence right and every trade does their best work. Get it wrong and
            good tradespeople end up rushing or working around each other, and
            it shows in the finish every time.
          </P>

          <P>
            On older buildings, sequence matters even more. Opening up a wall in
            a Cranleigh cottage often shows something the drawings didn&apos;t,
            and the right response is to stop, look and agree the next step, not
            to carry on and hope. Our{" "}
            <A href="/services/listed-buildings">
              listed building and heritage
            </A>{" "}
            work depends on that discipline.
          </P>

          <Quote cite="Paul Martyn Construction">
            &ldquo;The best compliment we get isn&apos;t about the finish itself.
            It&apos;s clients telling us the build was calmer than they
            expected. That calm is project management working.&rdquo;
          </Quote>

          <H2>Working with your architect, engineer and designers</H2>

          <P>
            On most projects we are one of several people working for you. There
            is usually an architect or designer, a structural engineer, sometimes
            a kitchen company or an interior designer, and building control. Our
            job is to turn their information into a sequence the site can follow,
            and to raise gaps early. If a detail is missing from the drawings, a
            beam doesn&apos;t match the calculation or a finish hasn&apos;t been
            chosen, we ask while there is still time to answer calmly, not on
            the morning the trade is due.
          </P>

          <P>
            During the paid Detailed Design &amp; Cost Plan stage, the kitchen
            and bathroom specifications, finishes, mechanical and electrical
            design, structural fabrication drawings, drainage design and
            building control fees are gathered into one line-by-line cost plan.
            That is the information project management runs on. Most decisions
            are made before the fixed price is signed, which is what makes the
            programme reliable once work starts.
          </P>

          <H2>Keeping a lived-in house safe and clean</H2>

          <P>
            Many projects happen around a family who are still living in the
            house. That changes how a site is run: rooms are sheeted up and
            protected, dust is contained, and the site is left safe at the end of
            each day, not only at the end of the job. One client with a small
            child at home put it like this:
          </P>

          <Quote cite="Eileen Mullane, double side extension, Lightwater">
            &ldquo;I have a small child around the house and they made sure the
            job was tidy and safe at the end of everyday.&rdquo;
          </Quote>

          <H2>The paperwork we handle, and when</H2>

          <P>
            Most delays on a domestic build are not about construction. They are
            about a notice served late, a calculation not yet approved or an
            inspection nobody booked. These are the ones we manage for you:
          </P>

          <Rows rows={PAPERWORK} />

          <P>
            Each has its own article:{" "}
            <A href="/blog/party-wall-notice-timing">
              the party wall notice that sets your start date
            </A>
            ,{" "}
            <A href="/blog/structural-calculations-building-control">
              what a building control officer looks for in structural
              calculations
            </A>{" "}
            and{" "}
            <A href="/blog/building-control-completion-certificate">
              what a completion certificate is actually for
            </A>
            .
          </P>

          <H2>Cost control: how the budget is protected</H2>

          <H3>A fixed price before work starts</H3>

          <P>
            We work on a fixed-price basis, reached through four stages. The
            first two are free, so you can have a measured estimate before you
            spend anything:
          </P>

          <PriceLadder />

          <H3>Changes agreed before they happen</H3>

          <P>
            If anything is changed or added during the build, we agree the cost
            of that variation with you <B>in writing before carrying it out</B>.
            Alterations and additions are client-led, so the running total is
            always clear and there are no surprise extras at the end.
          </P>

          <H3>Payments that follow the work</H3>

          <P>
            Every two to three weeks we evaluate the work completed on site,
            issue an interim certificate and invoice against that progress. Each
            payment reflects work actually done, and the build moves on. The
            detail is on our <A href="/pricing">pricing page</A>.
          </P>

          <Callout label="Before you sign any building contract">
            <p className="!mt-3">
              If you are extending your own home, you are a residential occupier
              under the Housing Grants, Construction and Regeneration Act 1996,
              so the statutory payment protections for commercial contracts
              don&apos;t automatically apply to you. What protects you is what
              the written contract says about payment, retention and practical
              completion. We explain it in{" "}
              <A href="/blog/retention-snagging-practical-completion">
                retention, snagging and practical completion
              </A>
              .
            </p>
          </Callout>

          <H2>Handover: snagging and practical completion</H2>

          <P>
            Practical completion is the point your contract defines as finished
            enough to use, apart from minor snags. It starts the defects period
            and, where retention is held, releases part of it. It is not the same
            as the building control completion certificate. People who mix them
            up are the ones who pay the final invoice before the snagging list is
            written. Snagging and handover are part of our quotation: we go through
            the list with you and put it right before the job is closed.
          </P>

          <P>
            Retention is typically <B>5 per cent</B>, often reduced to{" "}
            <B>2.5 per cent</B> at practical completion, with the rest released
            after a defects period of usually six to twelve months. The
            government has proposed banning retention altogether, following its
            Late Payment consultation response published on 24 March 2026. It
            isn&apos;t law yet, but it is worth knowing before you sign.
          </P>

          <H2>What clients say about how the job was run</H2>

          <Quote cite="Nicholas Downes, Google review">
            &ldquo;We lived on site for the entire project, and they were
            accommodating and easy to get along with. The work was completed to
            a high standard, they were excellent at working through problems as
            they arose, and the project came in under budget.&rdquo;
          </Quote>

          <Quote cite="Eileen Mullane, double side extension, Lightwater">
            &ldquo;They kept me informed of the progress pretty much daily and
            did the job in the time scale they gave me.&rdquo;
          </Quote>

          <P>
            The short film at the top of this page is from a kitchen fit-out,
            with the pendants bagged and the room sheeted up while the trades
            work through. It shows what a well-run site looks like more clearly
            than a photograph can.
          </P>

          <Faq items={FAQS} />

          <TalkToUs heading="Talk to us about running your build">
            <p>
              Whether you have drawings ready to price or only an idea, the first
              conversation costs nothing. We are on Bridge Road in Cranleigh, and
              you can call {CONTACT.phone}. See also{" "}
              <A href="/services/renovations-extensions">
                renovations and extensions
              </A>
              ,{" "}
              <A href="/services/house-extensions-cranleigh">
                house extensions in Cranleigh
              </A>{" "}
              and <A href="/areas/cranleigh">builders in Cranleigh</A>.
            </p>
          </TalkToUs>
        </Measure>
      </ServiceDetail>
    </PageShell>
  );
}
