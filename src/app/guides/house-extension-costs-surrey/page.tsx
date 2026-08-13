import type { Metadata } from "next";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { BROCHURE, CONTACT } from "@/components/sites/paulmartyn/content";
import { SITE_URL } from "@/lib/site";

/**
 * "How Much Does a House Extension Cost in 2025?"
 *
 * Ported from the old Squarespace blog, where it lived at
 * /new-blog/2025/4/27/how-much-does-a-house-extension-cost-in-2025-real-examples-from-surrey
 * (308 redirected here in next.config.ts).
 *
 * This was the only real article on the old site and its strongest search
 * entry point — ~1,900 words of genuine Surrey costings against high-intent
 * queries like "house extension cost Surrey". Letting it 404 at the domain
 * cutover would have thrown away the best-ranking page on the site, so the
 * copy is carried over intact.
 *
 * The copy is Paul Martyn Construction's own, reproduced as published. The
 * published date is kept because it is the date Google has associated with
 * the URL; the figures are 2025 figures and are labelled as such throughout.
 */

const PUBLISHED = "2025-04-27";

const COST_RANGES = [
  {
    label: "Single storey extension",
    value: "£1,800 – £2,400 per m²",
    note: "Base build",
  },
  {
    label: "Double storey extension",
    value: "Add 40–60%",
    note: "On top of the single storey cost",
  },
  {
    label: "Kitchen extension",
    value: "£3,000 – £4,000 per m²",
    note: "Including fit-out",
  },
  {
    label: "Rear extension with glazing and skylights",
    value: "£2,500 – £3,500 per m²",
    note: "",
  },
  {
    label: "Loft conversion",
    value: "£1,500 – £2,500 per m²",
    note: "",
  },
];

const COST_FACTORS = [
  {
    heading: "Size and complexity of the design",
    body: "Larger spaces, bespoke layouts and tricky rooflines all add to the overall build cost.",
  },
  {
    heading: "Type of rooms added",
    body: "Because of plumbing, electrics and fixtures, kitchens and bathrooms are more expensive to fit out than simple living rooms or utility spaces.",
  },
  {
    heading: "Groundwork and drainage needs",
    body: "Older Surrey homes often require upgraded foundations or drainage adjustments, especially where access is tight or soil conditions are poor.",
  },
  {
    heading: "Quality of finishes",
    body: "Costs can rise sharply depending on the level of finish, from standard fittings through to high-end bespoke kitchens, flooring and glazing.",
  },
  {
    heading: "Planning permission and structural engineering",
    body: "Some extensions fall under permitted development, but others need full planning permission and structural engineering reports, which add time and fees.",
  },
];

const PROJECTS = [
  {
    place: "Cobham",
    title: "Rear kitchen extension",
    price: "£145,000",
    body: "A modern rear extension with bifold doors, vaulted ceiling, skylights and a complete kitchen rework.",
    included: "Structural steelwork, high-end kitchen fit-out and garden landscaping.",
  },
  {
    place: "Weybridge",
    title: "Loft and rear extension",
    price: "£175,000",
    body: "A combined rear and loft conversion, adding a new master suite upstairs and an open-plan family living space downstairs.",
    included: "Planning permissions, bespoke glazing and extensive drainage rework.",
  },
  {
    place: "Epsom",
    title: "Full-width open-plan extension",
    price: "£130,000",
    body: "A full-width ground floor extension with bifolds onto the garden, skylights and a large new utility room.",
    included: "Reconfiguring internal walls, a new kitchen and external works.",
  },
];

const HIDDEN_COSTS = [
  {
    heading: "Planning application fees",
    body: "Typically £250–£500, depending on your council.",
  },
  {
    heading: "Structural engineer reports",
    body: "Essential for steelwork design, usually £1,500–£3,000.",
  },
  {
    heading: "Party wall agreements",
    body: "If building near neighbours, budget around £1,000+ for surveyor costs.",
  },
  {
    heading: "Upgraded glazing and bespoke kitchens",
    body: "High-end choices can add significantly to the overall spend.",
  },
  {
    heading: "Landscaping and garden restoration",
    body: "Often needed after construction work disrupts outdoor spaces.",
  },
];

const TITLE = "House Extension Costs in 2025 | Real Surrey Project Examples";
const DESCRIPTION =
  "What a house extension really costs in Surrey — per-square-metre ranges, the five factors that move the price, three fully costed Cobham, Weybridge and Epsom projects, and the fees most quotes leave out.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/guides/house-extension-costs-surrey" },
  openGraph: {
    type: "article",
    url: "/guides/house-extension-costs-surrey",
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: PUBLISHED,
  },
};

/**
 * Article schema. The old Squarespace page emitted og:type=article and was
 * indexed as one; declaring it properly here keeps it eligible for the same
 * treatment rather than reading as a plain marketing page.
 */
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does a House Extension Cost in 2025?",
  description: DESCRIPTION,
  datePublished: PUBLISHED,
  inLanguage: "en-GB",
  mainEntityOfPage: `${SITE_URL}/guides/house-extension-costs-surrey`,
  author: { "@type": "Organization", name: "Paul Martyn" },
  publisher: { "@type": "Organization", name: "Paul Martyn" },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 text-[24px] font-medium leading-[30px] text-pm-ink">
      {children}
    </h2>
  );
}

export default function HouseExtensionCostsPage() {
  return (
    <PageShell
      eyebrow="Guide"
      title="How Much Does a House Extension Cost in 2025?"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />

      <section className="bg-white pb-[10vh]">
        <div className="mx-auto max-w-[2000px] px-[3%]">
          <div className="max-w-[760px]">
            <p className="text-[21px] font-normal leading-[32px] text-pm-ink">
              Understanding real costs is crucial if you are planning a house
              extension in 2025. Prices vary depending on the size, design and
              finish you choose, and recent shifts in material and labour costs
              make early planning more important than ever.
            </p>

            <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
              This guide shares real project examples from homes across Surrey —
              including Cobham, Weybridge and Epsom — to give you a clearer idea
              of what to expect.
            </p>

            <SectionHeading>
              What is the average cost of a house extension in 2025?
            </SectionHeading>

            <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
              The cost of building a house extension depends primarily on the
              size, design and specification of the project. These are typical
              ranges based on real work completed across Surrey:
            </p>

            <dl className="mt-8 border-t border-pm-cream">
              {COST_RANGES.map((range) => (
                <div
                  key={range.label}
                  className="flex flex-col gap-1 border-b border-pm-cream py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <dt className="text-[17px] font-medium leading-[26px] text-pm-ink">
                    {range.label}
                    {range.note ? (
                      <span className="block text-[15px] font-normal text-pm-slate">
                        {range.note}
                      </span>
                    ) : null}
                  </dt>
                  <dd className="shrink-0 text-[17px] font-medium leading-[26px] text-pm-gold">
                    {range.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 border-l-4 border-pm-gold bg-pm-cream p-6">
              <p className="text-[15px] font-medium uppercase tracking-[1px] text-pm-ink">
                Important
              </p>
              <ul className="mt-4 space-y-3 text-[17px] font-normal leading-[27px] text-pm-slate">
                <li>
                  Higher-end finishes, bespoke glazing or complex structural
                  work will increase costs.
                </li>
                <li>
                  Site access, ground conditions and planning requirements can
                  also affect the final figure.
                </li>
              </ul>
              <p className="mt-4 text-[17px] font-normal leading-[27px] text-pm-ink">
                Every home is different, so we recommend starting with a proper
                conversation rather than relying on online calculators.
              </p>
            </div>

            <SectionHeading>
              Five key factors that affect extension costs
            </SectionHeading>

            <ol className="mt-6 space-y-6">
              {COST_FACTORS.map((factor, i) => (
                <li key={factor.heading} className="flex gap-5">
                  <span className="shrink-0 text-[17px] font-medium text-pm-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-medium leading-[26px] text-pm-ink">
                      {factor.heading}
                    </h3>
                    <p className="mt-2 text-[17px] font-normal leading-[27px] text-pm-slate">
                      {factor.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <SectionHeading>
            Real cost examples from recent Surrey projects
          </SectionHeading>

          <p className="mt-6 max-w-[760px] text-[17px] font-normal leading-[27px] text-pm-slate">
            Each of these was tailored carefully to the family&rsquo;s needs and
            designed to blend naturally with the existing home.
          </p>

          <div className="mt-10 grid gap-[25px] sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <article
                key={project.place}
                className="flex flex-col bg-pm-cream p-8"
              >
                <p className="text-[13.5px] font-light uppercase tracking-[1px] text-pm-slate">
                  {project.place}
                </p>
                <h3 className="mt-3 text-[21px] font-medium leading-[26px] text-pm-ink">
                  {project.title}
                </h3>
                <p className="mt-4 text-[28px] font-medium leading-[34px] text-pm-gold">
                  {project.price}
                </p>
                <p className="mt-4 flex-1 text-[15px] font-normal leading-[22.5px] text-pm-slate">
                  {project.body}
                </p>
                <p className="mt-5 border-t border-white pt-5 text-[15px] font-normal leading-[22.5px] text-pm-slate">
                  <span className="font-medium text-pm-ink">Included: </span>
                  {project.included}
                </p>
              </article>
            ))}
          </div>

          <div className="max-w-[760px]">
            <SectionHeading>Hidden costs homeowners often miss</SectionHeading>

            <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
              When planning a house extension it is essential to budget for
              costs that are not always included in basic quotes. Planning for
              these early avoids nasty surprises once building is underway.
            </p>

            <dl className="mt-8 space-y-5">
              {HIDDEN_COSTS.map((cost) => (
                <div key={cost.heading}>
                  <dt className="text-[17px] font-medium leading-[26px] text-pm-ink">
                    {cost.heading}
                  </dt>
                  <dd className="mt-1 text-[17px] font-normal leading-[27px] text-pm-slate">
                    {cost.body}
                  </dd>
                </div>
              ))}
            </dl>

            <SectionHeading>Is it worth extending in 2025?</SectionHeading>

            <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
              For most Surrey homeowners, extending remains one of the smartest
              ways to add value and improve daily living.
            </p>

            <ul className="mt-6 space-y-3 text-[17px] font-normal leading-[27px] text-pm-slate">
              <li className="border-l-4 border-pm-cream pl-5">
                Well-designed extensions typically add 10–20% to a
                property&rsquo;s value.
              </li>
              <li className="border-l-4 border-pm-cream pl-5">
                Extending avoids stamp duty, moving costs and the hassle of
                relocating.
              </li>
              <li className="border-l-4 border-pm-cream pl-5">
                You stay in the home and area you love, with space properly
                tailored to your life.
              </li>
            </ul>

            <p className="mt-9 border-l-4 border-pm-gold pl-6 text-[19px] font-normal leading-[29px] text-pm-ink">
              The key is planning carefully, setting realistic budgets and
              choosing a team that can deliver properly.
            </p>

            <SectionHeading>See what Surrey families built</SectionHeading>

            <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
              If you would like to see more examples of real project costs,
              timelines and finished spaces from homes across Surrey, our
              brochure covers fully costed extensions, actual build timelines,
              honest before-and-after results, and what added the most value.
            </p>

            <a
              href={BROCHURE.href}
              className="mt-6 inline-flex items-center gap-2 bg-pm-teal px-8 py-4 text-[15px] font-medium text-white transition-colors hover:bg-pm-gold"
            >
              {BROCHURE.label}{" "}
              <span className="font-light text-white/70">
                ({BROCHURE.size})
              </span>
            </a>

            <SectionHeading>Ready to plan your project properly?</SectionHeading>

            <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
              If you are serious about extending your home, the best first step
              is real advice based on your space, your goals and your budget. In
              a short planning call we can help you understand realistic costs,
              spot potential planning or design challenges early, map out a
              clear timeline, and answer any questions before you commit to
              anything. No pressure and no obligation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center bg-pm-gold px-8 py-4 text-[15px] font-medium text-pm-ink transition-colors hover:bg-pm-gold-alt"
              >
                Book a planning call
              </a>
              <a
                href={CONTACT.phoneHref}
                className="text-[17px] font-medium text-pm-ink underline-offset-4 hover:underline"
              >
                or call {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
