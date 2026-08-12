import type { Metadata } from "next";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { BoxLinks } from "@/components/sites/paulmartyn/BoxLinks";
import {
  BROCHURE,
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

            <a
              href={BROCHURE.href}
              download
              className="mt-9 inline-flex h-[58px] items-center gap-3 bg-pm-teal px-7 text-[15px] font-normal text-white transition-colors hover:bg-pm-gold"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16" />
              </svg>
              {BROCHURE.label}
              <span className="font-light text-white/70">({BROCHURE.size})</span>
            </a>
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
