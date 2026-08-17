import type { Metadata } from "next";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { PROCESS } from "@/components/sites/paulmartyn/content";

export const metadata: Metadata = {
  title: "Our Build Process | Estimate to Fixed Price | Surrey",
  description:
    "How a Paul Martyn project runs, from first conversation through to handover.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <PageShell eyebrow="How we work" title={PROCESS.heading}>
      <section className="bg-white pb-[10vh]">
        <div className="mx-auto max-w-[2000px] px-[3%]">
          <ol className="grid gap-[25px] sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.steps.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col border-t-4 border-pm-gold bg-pm-cream p-8"
              >
                <span className="text-[15px] font-medium tabular-nums text-pm-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-4 text-[21px] font-medium leading-[26px] text-pm-ink">
                  {step.title}
                </h2>

                {step.charging ? (
                  <p className="mt-2 text-[13.5px] font-medium uppercase tracking-[1px] text-pm-gold">
                    {step.charging}
                  </p>
                ) : null}

                <p className="mt-3 text-[15px] font-normal leading-[22.5px] text-pm-slate">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <figure className="mt-14">
            <div
              className="h-[260px] bg-cover bg-center sm:h-[420px]"
              style={{ backgroundImage: `url(${PROCESS.image})` }}
              role="img"
              aria-label="Paul Martyn project"
            />

            {/* Same photo as the homepage process band, so it carries the same
                credit in the same 13.5px small-label style. */}
            <figcaption className="mt-4 text-[13.5px] font-light uppercase tracking-[1px] text-pm-slate">
              {PROCESS.imageCaption}
            </figcaption>
          </figure>
        </div>
      </section>
    </PageShell>
  );
}
