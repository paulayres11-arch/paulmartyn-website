import type { Metadata } from "next";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { BROCHURE, CONTACT } from "@/components/sites/paulmartyn/content";
import { Faq } from "@/components/sites/paulmartyn/Faq";
import { JsonLd } from "@/components/sites/paulmartyn/JsonLd";
import { AreaLink } from "@/components/sites/paulmartyn/AreaLink";
import { A, Breadcrumbs } from "@/components/sites/paulmartyn/Prose";
import { article, breadcrumbList } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

/**
 * "How Much Does a House Extension Cost in 2026?"
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
 * The copy is Paul Martyn Construction's own, reproduced as published.
 *
 * `PUBLISHED` is kept at the original date because it is what Google has
 * associated with the URL — changing it would throw away the age this page
 * has earned. `UPDATED` is what carries the freshness signal instead, and the
 * headings say 2026 because the figures genuinely are 2026 figures: the rates
 * were realigned to the estimator on 2026-08-13. A cost guide still titled
 * "in 2025" in August 2026 reads as abandoned to a searcher scanning results,
 * which is a click lost before anyone reaches the content.
 *
 * If the rates are realigned again, move `UPDATED` with them.
 */

const PUBLISHED = "2025-04-27";
/* Re-localised to Cranleigh 2026-09-30 (worked examples, local cost drivers,
   FAQ). The rates themselves are unchanged since 2026-08-13. */
const UPDATED = "2026-09-30";
const PATH = "/guides/house-extension-costs-surrey";

/**
 * Rates realigned 2026-08-13 to match the build cost estimator, which is the
 * figure a visitor will actually see when they use the calculator.
 *
 * The estimator produces £2,720–£3,110 per m² of floor area for a single
 * storey across its full spread of wall, roof and foundation options, and
 * £2,610–£2,960 for two storeys. Two storeys costs LESS per m² because the
 * foundations and the roof are shared across twice the floor area — which is
 * why the old "add 40–60%" line has gone; it described the total, not the
 * rate, and read as though a second storey were the more expensive way to buy
 * a square metre.
 *
 * Single storey, double storey and rear-extension figures are taken straight
 * from the estimator. Kitchen and loft are NOT modelled by it — those are
 * uplifts on the base build and need Paul's confirmation.
 */
const COST_RANGES = [
  {
    label: "Single storey extension",
    value: "£2,700 – £3,100 per m²",
    note: "Base build",
  },
  {
    label: "Double storey extension",
    value: "£2,600 – £3,000 per m²",
    note: "Per m² of floor area — foundations and roof are shared",
  },
  {
    label: "Kitchen extension",
    value: "£3,500 – £4,500 per m²",
    note: "Including fit-out",
  },
  {
    label: "Rear extension with glazing and skylights",
    value: "£3,000 – £3,800 per m²",
    note: "",
  },
  {
    label: "Loft conversion",
    value: "£2,000 – £2,800 per m²",
    note: "No new foundations, so lower than a ground floor extension",
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

/**
 * PRIMARY worked examples: three Cranleigh-area extensions.
 *
 * Until 2026-09-30 the only examples were Cobham, Weybridge and Epsom, which
 * told every reader (and Google) that this is a north Surrey business — the
 * opposite of every other page on the site. These slots are for Paul's own
 * recent Cranleigh-area jobs.
 *
 * TODO(paul): three recent Cranleigh-area extensions — village, extension
 *   type, approx floor area (m²), final cost or cost band, duration, and
 *   anything unusual (clay, trees, conservation area). Village may be named;
 *   client and street may not.
 *
 * Until they are supplied this page's changes must NOT be deployed: the
 * placeholders below render visibly on purpose, so they cannot slip out
 * unnoticed. See the summary in the 2026-09-30 commit.
 */
const LOCAL_PROJECTS = [
  {
    place: "TODO(paul): village",
    title: "TODO(paul): extension type",
    price: "TODO(paul): cost",
    body: "TODO(paul): floor area, duration, what was built.",
    included: "TODO(paul): anything unusual — clay, trees, conservation area.",
  },
  {
    place: "TODO(paul): village",
    title: "TODO(paul): extension type",
    price: "TODO(paul): cost",
    body: "TODO(paul): floor area, duration, what was built.",
    included: "TODO(paul): anything unusual — clay, trees, conservation area.",
  },
  {
    place: "TODO(paul): village",
    title: "TODO(paul): extension type",
    price: "TODO(paul): cost",
    body: "TODO(paul): floor area, duration, what was built.",
    included: "TODO(paul): anything unusual — clay, trees, conservation area.",
  },
];

/**
 * SECONDARY: the three north Surrey projects from the original 2025 article,
 * kept as a clearly labelled "further afield" section because they are real,
 * fully costed Paul Martyn jobs. Remove if Paul prefers.
 */
const FURTHER_AFIELD = [
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

type Project = (typeof FURTHER_AFIELD)[number];

function ProjectCards({ projects }: { projects: Project[] }) {
  return (
    <div className="mt-10 grid gap-[25px] sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <article key={project.place + i} className="flex flex-col bg-pm-cream p-8">
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
  );
}

const HIDDEN_COSTS = [
  {
    /* Was "typically £250–£500" — that was already out of date and the fee is
       a fixed national figure, not a council-by-council one. £548 has applied
       to a householder application in England since 1 April 2026, and rises to
       about £575 on 8 December 2026 under the 2026 fee regulations. */
    heading: "Planning application fees",
    body: "A householder application in England costs £548 (from 1 April 2026), rising to around £575 from 8 December 2026. A larger rear extension prior approval is £249.",
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

const TITLE = "Extension Costs in Cranleigh";
const HEADLINE = "House extension costs in Cranleigh & Surrey (2026)";
const DESCRIPTION =
  "What a house extension costs in Cranleigh and Surrey in 2026: rates per m², Weald Clay, consents, Waverley fees and real projects. Call 01483 612156.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: UPDATED,
});

const TRAIL = [
  { name: "Guides", path: PATH },
  { name: "Extension costs", path: PATH },
];

const FAQS = [
  {
    question: "How much does a house extension cost in Cranleigh in 2026?",
    answer:
      "Our rates are £2,700 to £3,100 per square metre for a single-storey extension, £2,600 to £3,000 for two storeys, £3,000 to £3,800 for a rear extension with a lot of glazing and £3,500 to £4,500 for a kitchen extension including the fit-out. A loft conversion is around £2,000 to £2,800. Fees, surveys and landscaping sit on top of those figures.",
  },
  {
    question: "Why do extensions cost more on clay?",
    answer:
      "Cranleigh and most of the villages around it sit on the Weald Clay, which shrinks and swells as it dries and wets. NHBC guidance sets a minimum foundation depth of 1.0m on high volume-change clay, and near a large tree it can require up to 2.5m, beyond which an engineer has to design the foundation. Deeper foundations mean more digging, more concrete and more spoil to remove.",
  },
  {
    question: "What planning fees will I pay to Waverley?",
    answer:
      "A householder planning application in England costs £548 from 1 April 2026, rising to around £575 from 8 December 2026. A Certificate of Lawful Development for a proposed extension is half the householder fee. Listed building consent has no application fee, although the drawings and heritage statement it needs do cost money.",
  },
  {
    question: "Does a conservation area or listed building make an extension more expensive?",
    answer:
      "Usually, yes. In a conservation area some work that would otherwise be permitted development needs a planning application, and the council will expect materials that suit the area. On a listed building you need listed building consent as well, and our heritage rate is £3,400 to £4,200 per square metre because of the traditional materials, specialist trades and slower pace the building needs.",
  },
  {
    question: "Is it harder to extend in Wonersh or Shamley Green?",
    answer:
      "It can be. Both villages are washed over by the Green Belt, where an extension must not be disproportionate to the original house, and earlier extensions count towards that. That limits size rather than cost per square metre, but it can mean a smaller extension than you hoped for, or a more careful design to get approval.",
  },
];

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

export default function HouseExtensionCostsPage() {
  return (
    <PageShell eyebrow="Guide" title={HEADLINE}>
      <JsonLd
        data={[
          article({
            headline: HEADLINE,
            description: DESCRIPTION,
            path: PATH,
            datePublished: PUBLISHED,
            dateModified: UPDATED,
          }),
          breadcrumbList(TRAIL),
        ]}
      />

      <section className="bg-white pb-[10vh]">
        <div className="mx-auto max-w-[2000px] px-[3%]">
          <div className="max-w-[760px]">
            <Breadcrumbs trail={[{ name: "Extension cost guide", path: PATH }]} />

            <p className="text-[21px] font-normal leading-[32px] text-pm-ink">
              Understanding real costs is crucial if you are planning a house
              extension in 2026. Prices vary depending on the size, design and
              finish you choose, and in Cranleigh and the villages around it,
              the ground and the planning position move the figure as much as
              the specification does.
            </p>

            <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
              We are builders based on Bridge Road in Cranleigh, and this guide
              uses our own published rates and our own projects, most of them
              within a few miles of the High Street.
            </p>

            <SectionHeading>
              What is the average cost of a house extension in 2026?
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
            Real cost examples from Cranleigh and the villages
          </SectionHeading>

          <p className="mt-6 max-w-[760px] text-[17px] font-normal leading-[27px] text-pm-slate">
            Three recent extensions of ours in and around Cranleigh, with what
            they cost and what drove the figure.
          </p>

          {/* TODO(paul): the three Cranleigh-area projects — see LOCAL_PROJECTS. */}
          <ProjectCards projects={LOCAL_PROJECTS} />

          <div className="max-w-[760px]">
            <SectionHeading>What moves the price around Cranleigh</SectionHeading>

            <h3 className="mt-10 text-[19px] font-medium leading-[26px] text-pm-ink">
              Weald Clay and trees
            </h3>
            <Body>
              Cranleigh and most of the villages around it sit on the Weald
              Clay, which shrinks as it dries and swells as it wets. NHBC
              guidance sets a minimum foundation depth of 1.0m on high
              volume-change clay. Near a large, thirsty tree such as an oak it
              can require up to 2.5m, and beyond that an engineer has to design
              the foundation. On a 25m² extension, that is the difference
              between a routine trench and several times the digging, concrete
              and spoil. A trial hole before you accept a fixed price settles it
              for a few hundred pounds. See{" "}
              <A href="/blog/trees-and-foundation-depth-cranleigh">
                how the tree in your garden sets your foundation depth
              </A>{" "}
              and{" "}
              <A href="/blog/building-on-weald-clay-cranleigh-footings">
                building on the Weald Clay
              </A>
              .
            </Body>

            <h3 className="mt-10 text-[19px] font-medium leading-[26px] text-pm-ink">
              Conservation areas and listed buildings
            </h3>
            <Body>
              Cranleigh High Street is a conservation area, as are the centres
              of <AreaLink place="Ewhurst" />, <AreaLink place="Shamley Green" />{" "}
              and <AreaLink place="Wonersh" />. Inside one, some work that would
              be permitted development elsewhere needs a planning application,
              and the materials have to suit the area. On a listed building you
              also need listed building consent, and the work itself costs more:
              our heritage rate is £3,400 to £4,200 per m², against £2,700 to
              £3,100 for a standard extension. The{" "}
              <A href="/services/listed-buildings">
                listed buildings and heritage page
              </A>{" "}
              explains why, and{" "}
              <A href="/blog/cranleigh-conservation-area-consent">
                what needs consent in the Cranleigh Conservation Area
              </A>{" "}
              sets out the local rules.
            </Body>

            <h3 className="mt-10 text-[19px] font-medium leading-[26px] text-pm-ink">
              Green Belt limits in Wonersh and Shamley Green
            </h3>
            <Body>
              Cranleigh&apos;s built-up area is outside the Green Belt, but{" "}
              <AreaLink place="Wonersh" /> and <AreaLink place="Shamley Green" />{" "}
              are washed over by it. There, an extension must not be
              disproportionate to the original house, and extensions added by
              earlier owners count towards the limit. That caps the size of what
              you can build rather than the rate per square metre, but it is the
              reason some extensions there end up smaller than first planned. In
              Cranleigh itself, the{" "}
              <A href="/blog/cranleigh-settlement-boundary">
                settlement boundary
              </A>{" "}
              decides which rules apply.
            </Body>

            <h3 className="mt-10 text-[19px] font-medium leading-[26px] text-pm-ink">
              Waverley fees
            </h3>
            <Body>
              Cranleigh and the villages around it are in Waverley Borough
              Council. Planning fees are set nationally: a householder
              application is £548 from 1 April 2026, rising to around £575 from
              8 December 2026. A Certificate of Lawful Development, which
              confirms in writing that an extension is permitted development, is
              half the householder fee. Listed building consent has no
              application fee, but the drawings and heritage statement do cost
              money. Building control is charged separately.
            </Body>
          </div>

          <SectionHeading>Further afield: north Surrey</SectionHeading>

          <p className="mt-6 max-w-[760px] text-[17px] font-normal leading-[27px] text-pm-slate">
            Before we concentrated on Cranleigh and its villages, we built these
            three extensions in north Surrey. They are fully costed, and useful
            for comparison.
          </p>

          <ProjectCards projects={FURTHER_AFIELD} />

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

            <SectionHeading>Is it worth extending in 2026?</SectionHeading>

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

            <Faq items={FAQS} />

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
