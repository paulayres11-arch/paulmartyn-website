import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { ServiceDetail } from "@/components/sites/paulmartyn/ServiceDetail";
import { serviceById, CONTACT } from "@/components/sites/paulmartyn/content";
import { Faq } from "@/components/sites/paulmartyn/Faq";
import { JsonLd } from "@/components/sites/paulmartyn/JsonLd";
import { AreaLink } from "@/components/sites/paulmartyn/AreaLink";
import { Breadcrumbs, PriceLadder, TalkToUs } from "@/components/sites/paulmartyn/Prose";
import { breadcrumbList, service as serviceSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

/**
 * Loft conversions.
 *
 * This URL was a 404 until 2026-09-19 while the site talked about loft
 * conversions on the Cranleigh page and carried a 2,000-word blog post about
 * them — so the service with the most obvious local search term
 * ("loft conversion Cranleigh") had nothing to rank.
 *
 * The head-height table below is the same table as the blog post's, because it
 * is the question every enquiry starts with and it belongs on the page someone
 * lands on from a search, not one click away. Everything in it is measured
 * floor-to-ridge guidance already published on this site; if it changes here it
 * changes in blogPosts.tsx too.
 */

const service = serviceById("service-loft-conversions");

const PATH = "/services/loft-conversions";
const TITLE = "Loft Conversions in Cranleigh";
const DESCRIPTION =
  "Loft conversions in Cranleigh and the Surrey villages: head height, roof type, dormers, stairs and fire safety, with published rates. Call 01483 612156.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const TRAIL = [
  { name: "Services", path: "/services" },
  { name: "Loft conversions", path: PATH },
];

/**
 * Every answer restates a figure already in `service.detail` or the loft
 * blog post — no new numbers.
 */
const FAQS = [
  {
    question: "Do I need planning permission for a loft conversion in Cranleigh?",
    answer:
      "Often not. Outside a conservation area, permitted development allows 40 cubic metres of added roof space on a terraced house and 50 cubic metres on a semi or detached house, subject to conditions. Inside the Cranleigh Conservation Area, roof extensions are not permitted development at all, so a dormer needs a planning application and a design the conservation officer will accept. Building Regulations approval is needed either way.",
  },
  {
    question: "How much head height do I need for a loft conversion?",
    answer:
      "Measure from the top of the existing ceiling joists to the underside of the ridge. Under 2.2m will not give usable height once insulation and a new floor are added. Between 2.4m and 2.8m is the comfortable range where most successful conversions sit.",
  },
  {
    question: "Can a loft with trussed rafters be converted?",
    answer:
      "Usually, yes, but it needs an engineered solution. Steel beams and a new floor are put in to carry the loads before the truss webs are cut out, in a sequence that keeps the roof supported throughout. It costs more than converting a traditional cut roof, which is why the two should never be priced at the same rate.",
  },
  {
    question: "What fire safety work does a loft conversion need?",
    answer:
      "Adding a third storey makes the staircase the protected escape route. That means 30 minutes' fire resistance to the stair enclosure, FD30 fire doors to every habitable room off it on every floor, mains-linked interlinked smoke alarms and an escape window in the new room. On an ordinary three-bedroom house that is routinely £3,000 to £6,000 of work, and we price it separately so you can see it.",
  },
  {
    question: "How much does a loft conversion cost?",
    answer:
      "Around £2,000 to £2,800 per square metre, which is less than a ground-floor extension because there are no new foundations and no new roof. On top of that come the fire safety works, any structural solution a trussed roof needs, and the bathroom fit-out if you are adding one.",
  },
  {
    question: "Where will the new staircase go?",
    answer:
      "That is the first thing we check. Building Regulations require 2m of headroom over the stairs. In a loft conversion that can reduce to 1.9m at the centre of the stair and 1.8m at the side, but no lower, and on a typical semi the new flight has to rise into the roof where it is lowest. More conversions fail on the staircase than on the room, so we find where it lands before anyone settles on a layout.",
  },
];

/** Measured from the top of the existing ceiling joists to the ridge. */
const HEAD_HEIGHT = [
  {
    height: "Under 2.2m",
    outcome:
      "A conventional conversion will not give usable height. The options are a roof lift, a dormer that changes the roof form, or a different project.",
  },
  {
    height: "2.2m – 2.4m",
    outcome:
      "Possible, but tight. Expect to need a dormer to create the usable zone, and careful design around the stair.",
  },
  {
    height: "2.4m – 2.8m",
    outcome:
      "Comfortable. This is the sweet spot, and where most successful conversions sit.",
  },
  {
    height: "Over 2.8m",
    outcome:
      "Generous. Often room for a full dormer, or a small en-suite, without compromise.",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 text-[24px] font-medium leading-[30px] text-pm-ink">
      {children}
    </h2>
  );
}

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-pm-ink underline underline-offset-4">
      {children}
    </Link>
  );
}

export default function LoftConversionsPage() {
  return (
    <PageShell eyebrow="Loft conversions" title="Loft conversions in Cranleigh">
      <JsonLd
        data={[
          serviceSchema({
            name: "Loft conversions in Cranleigh",
            serviceType: "Loft conversion",
            path: PATH,
            description:
              "Loft conversions, dormers and roof rooms in Cranleigh and the surrounding Waverley villages, including the structural work, staircase and fire strategy.",
            areaServed: ["Cranleigh", "Ewhurst", "Shamley Green", "Wonersh", "Bramley", "Alfold", "Surrey"],
          }),
          breadcrumbList(TRAIL),
        ]}
      />
      <ServiceDetail service={service}>
        <section className="bg-white pb-[10vh]">
          <div className="mx-auto max-w-[2000px] px-[3%]">
            <div className="max-w-[760px]">
              <Breadcrumbs trail={TRAIL} />

              <SectionHeading>Will your loft actually convert?</SectionHeading>

              <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
                Measure from the top of the existing ceiling joists to the
                underside of the ridge, at the highest point. That number is not
                the head height you end up with — a conversion takes height off
                the top for insulation between and under the rafters, and off the
                bottom for a new structural floor — but it tells you almost
                immediately whether the project is worth drawing.
              </p>

              <div className="mt-8 overflow-x-auto">
                <table className="w-full border-collapse text-left text-[15px] leading-[24px]">
                  <caption className="caption-bottom pt-4 text-[13.5px] font-light leading-[20px] text-pm-slate">
                    Measured to the underside of the ridge, from the top of the
                    existing ceiling joists. Finished head height will be
                    materially less.
                  </caption>
                  <thead>
                    <tr className="border-b border-pm-ink/20">
                      <th
                        scope="col"
                        className="py-3 pr-6 font-medium text-pm-ink"
                      >
                        Existing floor-to-ridge height
                      </th>
                      <th scope="col" className="py-3 font-medium text-pm-ink">
                        Realistic outcome
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {HEAD_HEIGHT.map((row) => (
                      <tr
                        key={row.height}
                        className="border-b border-pm-ink/10 align-top"
                      >
                        <th
                          scope="row"
                          className="whitespace-nowrap py-4 pr-6 font-medium text-pm-ink"
                        >
                          {row.height}
                        </th>
                        <td className="py-4 text-pm-slate">{row.outcome}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <SectionHeading>Lofts in period houses and the villages</SectionHeading>

              <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
                Listed and period houses are a different job. On a listed
                building, a loft conversion needs listed building consent, and
                the roof structure is usually part of what the listing
                protects. Old rafters, purlins and collars often can&apos;t
                simply be cut out, and rooflights and dormers on the main slopes
                get particular scrutiny. We cover that side of the work on our{" "}
                <InlineLink href="/services/listed-buildings">
                  listed buildings and heritage page
                </InlineLink>
                .
              </p>

              <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
                The same caution applies in the village conservation areas
                around Cranleigh, including <AreaLink place="Ewhurst" />,{" "}
                <AreaLink place="Shamley Green" /> and{" "}
                <AreaLink place="Wonersh" />, where roof extensions lose their
                permitted development rights just as they do on Cranleigh High
                Street, so a dormer there means a planning application.
              </p>

              <SectionHeading>How we price a loft conversion</SectionHeading>

              <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
                A loft goes through the same four stages as any of our
                projects. The first two are free, so you know whether the
                conversion is worth drawing before you pay for drawings:
              </p>

              <PriceLadder />

              <SectionHeading>Where to read more</SectionHeading>

              <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
                We have written the long version of this — roof types, the
                staircase test, the fire strategy and the ten-minute survey to do
                before you spend anything — in{" "}
                <InlineLink href="/blog/loft-conversions-cranleigh-roof-types">
                  which roofs convert and which do not
                </InlineLink>
                . The per-square-metre figures sit alongside every other build
                rate on our{" "}
                <InlineLink href="/guides/house-extension-costs-surrey">
                  extension cost guide
                </InlineLink>
                , and{" "}
                <InlineLink href="/pricing">how we price a job</InlineLink> is
                published rather than quoted on request.
              </p>

              <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
                If the loft is in the middle of the village, the conservation
                area changes what is permitted — that is set out in{" "}
                <InlineLink href="/blog/cranleigh-conservation-area-consent">
                  what needs consent in the Cranleigh Conservation Area
                </InlineLink>
                . And if you are weighing a loft against going outwards instead,{" "}
                <InlineLink href="/services/house-extensions-cranleigh">
                  house extensions in Cranleigh
                </InlineLink>{" "}
                covers the ground-floor route.
              </p>

              <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
                Either way, someone should put their head through the hatch
                before you pay a designer. That is a normal first call for{" "}
                <InlineLink href="/areas/cranleigh">
                  builders in Cranleigh
                </InlineLink>{" "}
                to take, and we would rather tell you the answer is no early than
                let you find out late.
              </p>

              <Faq items={FAQS} />

              <TalkToUs heading="Talk to us about your loft">
                <p>
                  Tell us the house type and roughly when it was built, and
                  whether it is listed or in a conservation area. If you have
                  measured the height from the joists to the ridge, send that
                  too. We are on Bridge Road in Cranleigh, and you can call{" "}
                  {CONTACT.phone}.
                </p>
              </TalkToUs>
            </div>
          </div>
        </section>
      </ServiceDetail>
    </PageShell>
  );
}
