import type { Metadata } from "next";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { BoxLinks } from "@/components/sites/paulmartyn/BoxLinks";
import {
  INTRO,
  SERVICES,
} from "@/components/sites/paulmartyn/content";

export const metadata: Metadata = {
  title: "About Us | Paul Martyn",
  description: INTRO.body[0],
};

export default function AboutPage() {
  return (
    <PageShell eyebrow="About us" title={INTRO.heading}>
      <section className="bg-white pb-[10vh]">
        <div className="mx-auto flex max-w-[2000px] flex-col gap-12 px-[3%] md:flex-row md:items-start md:gap-20">
          <div className="md:flex-1">
            {INTRO.body.map((paragraph, i) => (
              <p
                key={i}
                className={`max-w-[620px] text-[17px] font-normal leading-[26px] text-pm-slate ${
                  i === 0 ? "" : "mt-6"
                }`}
              >
                {paragraph}
              </p>
            ))}

            <p className="mt-6 max-w-[620px] text-[17px] font-normal leading-[26px] text-pm-slate">
              {SERVICES.lead}
            </p>
          </div>

          <div
            className="h-[300px] shrink-0 bg-cover bg-center sm:h-[380px] md:h-[450px] md:w-[38%]"
            style={{ backgroundImage: `url(${INTRO.image})` }}
            role="img"
            aria-label="Paul Martyn project"
          />
        </div>
      </section>

      <BoxLinks />
    </PageShell>
  );
}
