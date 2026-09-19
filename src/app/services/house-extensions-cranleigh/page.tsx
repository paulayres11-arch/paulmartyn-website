import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { CONTACT, PROCESS } from "@/components/sites/paulmartyn/content";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

/**
 * House extensions in Cranleigh.
 *
 * A service + location page, sitting between /services/renovations-extensions
 * (the service, county-wide) and /areas/cranleigh (the place). "House
 * extensions Cranleigh" and "home extension Cranleigh" are the terms with
 * local intent behind them, and neither of the two existing pages is shaped to
 * answer them: one is about renovation generally, the other about the village.
 *
 * Everything local here is checked and already published on this site — the
 * conservation area dates and count, the SPD and Neighbourhood Plan dates, the
 * settlement boundary position, the Weald Clay foundation depths, and every
 * cost band. There are no invented case studies: the only project quoted is
 * the Leone Coles review, which is a real named Google review of a real
 * two-storey side extension in Cranleigh, and it is quoted as she wrote it.
 *
 * If you add a figure, check it. A wrong planning date on the page claiming
 * local expertise does more damage than no page at all.
 */

const TITLE =
  "House Extensions Cranleigh | Single & Two-Storey | Paul Martyn";
const DESCRIPTION =
  "House extensions in Cranleigh — single-storey, side, wrap-around and two-storey. Waverley planning, Weald Clay foundations and published fixed prices. Call 01483 612156.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/house-extensions-cranleigh" },
  openGraph: {
    type: "website",
    url: "/services/house-extensions-cranleigh",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const EXTENSION_TYPES = [
  {
    name: "Single-storey rear",
    body: "The most common project here. Opens the back of the house into the garden, usually taking the kitchen with it. Deep plots are normal in Cranleigh, so the constraint is rarely the space — it is the foundations and the glazing.",
    rate: "£2,700 – £3,100 per m²",
  },
  {
    name: "Side extension",
    body: "Fills the gap down the flank of a semi or detached house. Often the cheapest usable square metres available, and frequently the one that turns a cramped hallway and a galley kitchen into a sensible ground floor.",
    rate: "£2,700 – £3,100 per m²",
  },
  {
    name: "Wrap-around",
    body: "Side and rear combined into one L. More roof and more junctions than either on its own, and it usually triggers a full rethink of the ground-floor layout rather than an addition to it.",
    rate: "£2,700 – £3,100 per m²",
  },
  {
    name: "Two-storey",
    body: "Adds a bedroom as well as living space, which is the change that moves a house into a different bracket of search results. Costs less per square metre than a single storey, because the foundations and roof are shared across two floors.",
    rate: "£2,600 – £3,000 per m²",
  },
  {
    name: "Kitchen extension",
    body: "A rear or wrap extension specified around the kitchen — structural opening, services, glazing and the fit-out itself. The rate is higher because it includes the kitchen, not because the shell costs more.",
    rate: "£3,500 – £4,500 per m²",
  },
];

const FAQS = [
  {
    question: "Do I need planning permission for an extension in Cranleigh?",
    answer:
      "Often not. Many single-storey rear extensions fall under permitted development, and Cranleigh's built-up area sits outside the Green Belt, so ordinary householder rules apply. Inside the Cranleigh Conservation Area the permitted development rights are cut back and more work needs an application. Land beyond the settlement boundary is judged against much tighter countryside policy. The planning authority is Waverley Borough Council, not Guildford.",
  },
  {
    question: "How much does a house extension cost in Cranleigh?",
    answer:
      "A single-storey extension runs £2,700–£3,100 per m² and a two-storey £2,600–£3,000 per m² — two storeys costs less per square metre because the foundations and roof are shared. A kitchen extension including the fit-out is £3,500–£4,500 per m². Those are the same published figures as our cost guide, not a range quoted on request.",
  },
  {
    question: "Why do two builders quote such different prices for the same drawing?",
    answer:
      "Usually foundations. Cranleigh sits largely on the Weald Clay Formation, which is highly shrink–swell reactive. The general minimum foundation depth is 0.9m, but near a mature high-water-demand tree such as an oak, NHBC Chapter 4.2 guidance can require 2.5m or more. Across the footprint of a 25m² extension that is several times the excavation and concrete. A trial hole before you accept a fixed price resolves it for a few hundred pounds.",
  },
  {
    question: "How long does an extension take to build?",
    answer:
      "It depends on the size and on whether the foundations are straightforward, so we give you a programme with the fixed price rather than a number on the phone. What we can say in advance is the sequence: feasibility estimate, outline estimate, detailed cost plan, then a signed fixed price with an agreed start date.",
  },
  {
    question: "Do you work on listed buildings and period cottages in Cranleigh?",
    answer:
      "Yes — the parish has more than eighty listed buildings and a good number are 15th to 17th century timber frames refronted in brick or stone later, so the building and the drawings rarely agree. That work is covered on our listed buildings and heritage page, and it is the part of the job we are most experienced in.",
  },
];

/**
 * FAQPage schema, matching the questions rendered below.
 *
 * Must stay in step with FAQS: schema that does not appear on the page is a
 * structured-data violation, not a shortcut.
 */
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

/**
 * The service, tied to the one business entity by `provider`.
 *
 * Deliberately NOT another LocalBusiness block: the business is already
 * described on the home page and /areas/cranleigh under
 * `${SITE_URL}/#business`, and a third copy would add nothing. Referencing the
 * id points this service at that entity instead of restating it.
 */
const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "House extensions in Cranleigh",
  serviceType: "House extension construction",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: { "@type": "Place", name: "Cranleigh, Surrey" },
  url: `${SITE_URL}/services/house-extensions-cranleigh`,
  description:
    "Single-storey, side, wrap-around, two-storey and kitchen extensions in Cranleigh and the surrounding Waverley villages, priced fixed before work starts.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 text-[24px] font-medium leading-[30px] text-pm-ink">
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
      {children}
    </p>
  );
}

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-pm-ink underline underline-offset-4">
      {children}
    </Link>
  );
}

export default function HouseExtensionsCranleighPage() {
  return (
    <PageShell eyebrow="Extensions" title="House extensions in Cranleigh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <section className="bg-white pb-[10vh]">
        <div className="mx-auto max-w-[2000px] px-[3%]">
          <div className="max-w-[760px]">
            <p className="text-[21px] font-normal leading-[32px] text-pm-ink">
              We are based at {CONTACT.address.full}, and most of the extensions
              we build are within a few miles of the High Street. That is worth
              saying plainly, because the two things that decide what a Cranleigh
              extension costs — what Waverley will permit, and how deep the
              foundations have to go — are both local questions.
            </p>

            <SectionHeading>The extensions people build here</SectionHeading>

            <Body>
              Plots in and around Cranleigh tend to be deep, and the housing stock
              runs from timber-framed cottages through interwar semis to postwar
              detached houses. That mix decides which of these is the obvious move
              on any given house — and it is usually obvious once someone has
              stood in the garden.
            </Body>

            <dl className="mt-10 border-t border-pm-ink/15">
              {EXTENSION_TYPES.map((type) => (
                <div
                  key={type.name}
                  className="border-b border-pm-ink/15 py-6 sm:flex sm:gap-10"
                >
                  <dt className="shrink-0 sm:w-[220px]">
                    <span className="block text-[17px] font-medium leading-[24px] text-pm-ink">
                      {type.name}
                    </span>
                    <span className="mt-1 block text-[13.5px] font-light uppercase tracking-[1px] text-pm-gold">
                      {type.rate}
                    </span>
                  </dt>
                  <dd className="mt-3 text-[17px] font-normal leading-[27px] text-pm-slate sm:mt-0">
                    {type.body}
                  </dd>
                </div>
              ))}
            </dl>

            <Body>
              Those rates are the base build. What sits on top of them is set out
              on the{" "}
              <InlineLink href="/guides/house-extension-costs-surrey">
                extension cost guide
              </InlineLink>
              , alongside the fees people forget — a householder planning
              application is £548, and a structural engineer is usually
              £1,500–£3,000. If the loft is the better option, the numbers for
              that are on our{" "}
              <InlineLink href="/services/loft-conversions">
                loft conversions
              </InlineLink>{" "}
              page.
            </Body>

            <SectionHeading>Planning: what applies in Cranleigh</SectionHeading>

            <Body>
              Cranleigh is <strong className="font-medium text-pm-ink">Waverley
              Borough Council</strong>, not Guildford — a distinction worth
              getting right before an application is drawn. Householder work is
              measured against Waverley&apos;s Residential Extensions SPD, adopted
              12 October 2010, which expects an extension to complement the
              existing house in style, scale and materials rather than compete
              with it.
            </Body>

            <Body>
              Since the Cranleigh Neighbourhood Plan was made on 15 July 2024,
              Waverley uses it to help determine applications in the parish. The
              settlement boundary then decides more than most people expect:
              Cranleigh&apos;s built-up area sits outside the Green Belt and
              outside the countryside beyond it, so the ordinary householder rules
              apply — while land past the boundary is judged against much tighter
              countryside policy. That distinction is explained in full in{" "}
              <InlineLink href="/blog/cranleigh-settlement-boundary">
                what the settlement boundary means for your project
              </InlineLink>
              .
            </Body>

            <Body>
              Inside the Cranleigh Conservation Area — the High Street, designated
              October 1973 and extended in July 1985 and again in July 2016, one of
              43 in Waverley — permitted development rights are cut back, and
              demolishing any building over 115 cubic metres needs consent in its
              own right. So does taking down a boundary wall over 1m high where it
              fronts a highway. Proceeding without that consent is a criminal
              offence rather than a fee, which is why we check the constraint
              before the drawings, not after. The detail is in{" "}
              <InlineLink href="/blog/cranleigh-conservation-area-consent">
                what needs consent in the conservation area
              </InlineLink>
              .
            </Body>

            <SectionHeading>
              Weald Clay: the reason two quotes differ
            </SectionHeading>

            <Body>
              Cranleigh sits largely on the{" "}
              <strong className="font-medium text-pm-ink">
                Weald Clay Formation
              </strong>{" "}
              — stiff, fissured clay with moderate to high shrink–swell potential,
              among the more reactive soils in England. Clay dries out and shrinks
              when tree roots draw moisture from it, and swells when it rewets.
              Foundations that are too shallow move with it.
            </Body>

            <Body>
              The general minimum depth is <strong className="font-medium text-pm-ink">0.9m</strong>.
              Near a mature high-water-demand tree such as an oak, NHBC Chapter 4.2
              guidance can push that to{" "}
              <strong className="font-medium text-pm-ink">2.5m or more</strong>.
              Across the footprint of a 25m² extension, that difference is several
              times the excavation, several times the concrete, spoil to remove,
              and often a change from trench fill to a piled or beam-and-block
              solution. It is the single largest source of variation between an
              optimistic quote and a real one — the mechanism is set out in{" "}
              <InlineLink href="/blog/trees-and-foundation-depth-cranleigh">
                the tree in your garden sets your foundation depth
              </InlineLink>
              .
            </Body>

            <Body>
              Dig a trial hole before you accept a fixed price. It costs a few
              hundred pounds, takes an afternoon, and turns the largest unknown in
              the project into a known number — which is the difference between a
              price and a guess.
            </Body>

            <SectionHeading>A two-storey extension in Cranleigh</SectionHeading>

            <Body>
              A two-storey side extension for a client we had already built a
              kitchen for the year before. Her review of the second job:
            </Body>

            {/* The same real, named Google review quoted on /areas/cranleigh —
                the site's only piece of published Cranleigh proof. Quoted as
                she wrote it. Do not add project examples here that are not
                genuine and attributable; add photographs of Cranleigh jobs when
                there are some. */}
            <blockquote className="mt-6 border-l-2 border-pm-gold pl-6">
              <p className="text-[17px] font-normal italic leading-[27px] text-pm-ink">
                &ldquo;One year later and Paul Martyn have completed a side two
                storey extension. Once again they have surpassed their reputation,
                and we are very happy with the work they did.&rdquo;
              </p>
              <footer className="mt-3 text-[13.5px] font-light uppercase tracking-[1px] text-pm-slate">
                Leone Coles — two-storey extension, Cranleigh
              </footer>
            </blockquote>

            <SectionHeading>How we price it</SectionHeading>

            <Body>
              We work on a fixed price. Getting to one runs through four stages,
              two of them free, so you can have a measured estimate before
              spending anything:
            </Body>

            <ol className="mt-6 border-t border-pm-ink/15">
              {PROCESS.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-6 border-b border-pm-ink/15 py-6"
                >
                  <span className="mt-1 text-[13.5px] font-light tracking-[1px] text-pm-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-medium leading-[24px] text-pm-ink">
                      {step.title}
                      {step.charging ? (
                        <span className="ml-3 text-[13.5px] font-light uppercase tracking-[1px] text-pm-slate">
                          {step.charging}
                        </span>
                      ) : null}
                    </h3>
                    <p className="mt-2 text-[17px] font-normal leading-[27px] text-pm-slate">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <Body>
              The full sequence, including what happens once work starts, is on{" "}
              <InlineLink href="/process">our process page</InlineLink>, and the
              payment structure is on{" "}
              <InlineLink href="/pricing">pricing</InlineLink>.
            </Body>

            <SectionHeading>Common questions</SectionHeading>

            <dl className="mt-6">
              {FAQS.map((faq) => (
                <div key={faq.question} className="mt-8 first:mt-0">
                  <dt className="text-[17px] font-medium leading-[24px] text-pm-ink">
                    {faq.question}
                  </dt>
                  <dd className="mt-3 text-[17px] font-normal leading-[27px] text-pm-slate">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>

            <SectionHeading>Talk to us about your extension</SectionHeading>

            <Body>
              Call{" "}
              <a
                href={CONTACT.phoneHref}
                className="text-pm-ink underline underline-offset-4"
              >
                {CONTACT.phone}
              </a>{" "}
              or{" "}
              <a
                href={CONTACT.mobileHref}
                className="text-pm-ink underline underline-offset-4"
              >
                {CONTACT.mobile}
              </a>
              , or{" "}
              <InlineLink href="/contact">
                send us the details of your project
              </InlineLink>
              . If the house is listed or sits in the conservation area, say so —
              it changes what we need to look at first. More about working as{" "}
              <InlineLink href="/areas/cranleigh">
                builders in Cranleigh
              </InlineLink>
              , and the wider service on{" "}
              <InlineLink href="/services/renovations-extensions">
                renovations and extensions
              </InlineLink>
              .
            </Body>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
