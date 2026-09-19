import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { ServiceDetail } from "@/components/sites/paulmartyn/ServiceDetail";
import { serviceById } from "@/components/sites/paulmartyn/content";
import { OG_IMAGE } from "@/lib/site";

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

const TITLE = "Loft Conversion Cranleigh | Dormers & Roof Rooms | Surrey";
const DESCRIPTION =
  "Loft conversions in Cranleigh and the Surrey villages. Head height, cut and trussed roofs, dormers, the staircase and the fire doors — priced properly. Call 01483 612156.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services/loft-conversions" },
  openGraph: {
    type: "website",
    url: "/services/loft-conversions",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

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
    <PageShell title="Loft conversions in Cranleigh">
      <ServiceDetail service={service}>
        <section className="bg-white pb-[10vh]">
          <div className="mx-auto max-w-[2000px] px-[3%]">
            <div className="max-w-[760px]">
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
            </div>
          </div>
        </section>
      </ServiceDetail>
    </PageShell>
  );
}
