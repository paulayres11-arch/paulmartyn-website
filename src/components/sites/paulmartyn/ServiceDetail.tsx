import type { ServiceTab } from "@/types/paulmartyn";
import { SERVICES } from "./content";
import { GalleryRail } from "./GalleryRail";

interface ServiceDetailProps {
  service: ServiceTab;
}

/**
 * Body of a single service page: copy + photograph, then the other services
 * as onward links (the reference site's `.sectionpad.related` block).
 */
export function ServiceDetail({ service }: ServiceDetailProps) {
  const others = SERVICES.tabs.filter((s) => s.id !== service.id);

  return (
    <>
      <section className="bg-white pb-[10vh]">
        <div className="mx-auto flex max-w-[2000px] flex-col gap-12 px-[3%] md:flex-row md:items-center md:gap-24">
          {service.gallery?.length ? (
            <GalleryRail
              images={service.gallery}
              fill
              className="aspect-square w-full shrink-0 md:w-[44.1%]"
            />
          ) : (
            <div
              className="aspect-square w-full shrink-0 bg-cover bg-center md:w-[44.1%]"
              style={{ backgroundImage: `url(${service.image})` }}
              role="img"
              aria-label={service.imageAlt}
            />
          )}

          <div className="md:w-1/2">
            <p className="max-w-[460px] text-[15px] font-normal leading-[22.5px] text-pm-slate">
              {service.body}
            </p>

            <a
              href="/contact"
              className="mt-[42px] inline-flex h-[58px] w-[196px] items-center justify-center bg-pm-teal text-[15px] font-light text-white transition-colors hover:bg-pm-gold"
            >
              Discuss your project
            </a>
          </div>
        </div>
      </section>

      {/* Long-form copy, in a measure narrow enough to read comfortably.
          Only renders for services that have it. */}
      {service.detail?.length || service.pullQuote ? (
        <section className="bg-white pb-[10vh]">
          <div className="mx-auto max-w-[2000px] px-[3%]">
            <div className="max-w-[760px]">
              {service.detail?.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-[17px] font-normal leading-[27px] text-pm-slate ${
                    i === 0 ? "" : "mt-6"
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              {service.pullQuote ? (
                <p className="mt-9 border-l-4 border-pm-gold pl-6 text-[19px] font-normal leading-[29px] text-pm-ink">
                  {service.pullQuote}
                </p>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* Related services */}
      <section className="bg-pm-cream py-[10vh]">
        <div className="mx-auto max-w-[2000px] px-[3%]">
          <h3 className="t-h3 font-medium text-pm-ink">Other services</h3>

          <div className="mt-12 grid gap-[25px] sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => (
              <a
                key={other.id}
                href={other.path}
                className="group block bg-white transition-colors hover:bg-pm-teal"
              >
                <div
                  className="h-[180px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${other.image})` }}
                />
                <div className="p-6">
                  <h4 className="text-[17px] font-medium leading-[22px] text-pm-ink transition-colors group-hover:text-white">
                    {other.heading}
                  </h4>
                  <span className="mt-4 inline-block text-[15px] font-medium text-pm-gold">
                    Read more &gt;&gt;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
