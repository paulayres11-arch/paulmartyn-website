import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { ServiceDetail } from "@/components/sites/paulmartyn/ServiceDetail";
import { serviceById } from "@/components/sites/paulmartyn/content";

const service = serviceById("service-renovations");

/**
 * Description written for this page rather than taken from `service.body`.
 *
 * The shared summary is the card text used in three grids and says nothing
 * about where the work happens, which is the one thing a local searcher is
 * checking. The H1 below is likewise longer than `service.heading` — the
 * heading stays short because it labels cards sitewide, while the H1 only has
 * to describe this page.
 */
const DESCRIPTION =
  "Whole-house renovations, extensions and remodelling in Cranleigh and across Surrey — structural work, finishes and detail handled under one roof, at a fixed price.";

export const metadata: Metadata = {
  title: service.seoTitle ?? `${service.heading} | Paul Martyn`,
  description: DESCRIPTION,
  alternates: { canonical: "/services/renovations-extensions" },
};

export default function Page() {
  return (
    <PageShell title="Renovations & extensions in Cranleigh and Surrey">
      <ServiceDetail service={service}>
        {/* The county-wide service page pointing at the local one.
            /services/house-extensions-cranleigh answers "house extensions
            Cranleigh", which this page is too broad to rank for; this block is
            how the two are connected rather than left to compete. */}
        <section className="bg-white pb-[10vh]">
          <div className="mx-auto max-w-[2000px] px-[3%]">
            <div className="max-w-[760px]">
              <h2 className="text-[24px] font-medium leading-[30px] text-pm-ink">
                Extending a house in Cranleigh
              </h2>

              <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
                Most of what we build is within a few miles of Cranleigh High
                Street, where two local questions decide the cost before anything
                else does: what Waverley will permit, and how deep the foundations
                have to go through the Weald Clay.{" "}
                <Link
                  href="/services/house-extensions-cranleigh"
                  className="text-pm-ink underline underline-offset-4"
                >
                  House extensions in Cranleigh
                </Link>{" "}
                covers both, with the rates for each type of extension and the
                planning constraints that apply in the parish.
              </p>

              <p className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate">
                If the space you want is upstairs rather than out the back, see{" "}
                <Link
                  href="/services/loft-conversions"
                  className="text-pm-ink underline underline-offset-4"
                >
                  loft conversions
                </Link>
                . More about how we work as{" "}
                <Link
                  href="/areas/cranleigh"
                  className="text-pm-ink underline underline-offset-4"
                >
                  builders in Cranleigh
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </ServiceDetail>
    </PageShell>
  );
}
