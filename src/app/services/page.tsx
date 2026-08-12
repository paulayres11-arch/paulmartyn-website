import type { Metadata } from "next";
import { PageShell } from "@/components/sites/paulmartyn/PageShell";
import { SERVICES } from "@/components/sites/paulmartyn/content";

export const metadata: Metadata = {
  title: "Services | Paul Martyn",
  description: SERVICES.lead,
};

export default function ServicesPage() {
  return (
    <PageShell eyebrow="What we do" title="Services">
      <section className="bg-white pb-[10vh]">
        <div className="mx-auto max-w-[2000px] px-[3%]">
          <div className="max-w-[760px]">
            <p className="text-[21px] font-normal leading-[32px] text-pm-ink">
              {SERVICES.lead}
            </p>

            {SERVICES.body.map((paragraph, i) => (
              <p
                key={i}
                className="mt-6 text-[17px] font-normal leading-[27px] text-pm-slate"
              >
                {paragraph}
              </p>
            ))}

            <p className="mt-9 border-l-4 border-pm-gold pl-6 text-[19px] font-normal leading-[29px] text-pm-ink">
              {SERVICES.pullQuote}
            </p>
          </div>

          <div className="mt-16 grid gap-[25px] sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.tabs.map((service) => (
              <a
                key={service.id}
                href={service.path}
                className="group flex flex-col bg-pm-cream transition-colors hover:bg-pm-teal"
              >
                <div
                  className="h-[240px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                  role="img"
                  aria-label={service.imageAlt}
                />

                <div className="flex flex-1 flex-col p-8">
                  <h2 className="text-[21px] font-medium leading-[26px] text-pm-ink transition-colors group-hover:text-white">
                    {service.heading}
                  </h2>

                  <p className="mt-4 flex-1 text-[15px] font-normal leading-[22.5px] text-pm-slate transition-colors group-hover:text-white/80">
                    {service.body}
                  </p>

                  <span className="mt-6 text-[15px] font-medium text-pm-gold">
                    Read more &gt;&gt;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
