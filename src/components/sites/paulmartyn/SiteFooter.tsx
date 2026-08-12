import {
  AREAS,
  BROCHURE,
  CONTACT,
  FOOTER,
  FOOTER_PAGES,
  FOOTER_SERVICES,
  SOCIALS,
} from "./content";
import { FacebookIcon, InstagramIcon } from "./shared/icons";
import { Logo } from "./shared/Logo";

/**
 * Footer.
 *
 * The reference site's accreditation badges (MyBuilder, Checkatrade, Rated
 * People) are deliberately NOT reproduced — they are that company's trade
 * memberships and would be a false claim here. Add Paul Martyn Construction's
 * own accreditations when they are confirmed.
 */
export function SiteFooter() {
  return (
    /* .site-footer-2 — padding: 7vh 0 2vh */
    <footer className="bg-white pb-[2vh] pt-[7vh]">
      <div className="mx-auto max-w-[2000px] px-[3%]">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between">
          <div className="lg:max-w-[620px]">
<Logo tone="ink" height={28} />

            <p className="mt-11 text-[25.5px] font-light leading-[38.25px] text-pm-slate">
              Call us on{" "}
              <a href={CONTACT.phoneHref} className="text-pm-ink transition-colors hover:text-pm-gold">
                {CONTACT.phone}
              </a>
              , mobile{" "}
              <a href={CONTACT.mobileHref} className="text-pm-ink transition-colors hover:text-pm-gold">
                {CONTACT.mobile}
              </a>
              <br />
              or email{" "}
              <a href={CONTACT.emailHref} className="break-all text-pm-ink transition-colors hover:text-pm-gold">
                {CONTACT.email}
              </a>
            </p>

            <p className="mt-7 max-w-[520px] text-[15px] font-light leading-[22.5px] text-pm-ink">
              {CONTACT.location}
            </p>

            <a
              href={BROCHURE.href}
              download
              className="mt-7 inline-flex h-[52px] items-center gap-3 border border-pm-rule px-6 text-[15px] font-medium text-pm-ink transition-colors hover:border-pm-gold hover:text-pm-gold"
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
              <span className="font-light text-pm-slate">({BROCHURE.size})</span>
            </a>

            <p className="mt-7 max-w-[520px] border-t border-pm-rule pt-7 text-[15px] font-normal leading-[22.5px] text-pm-slate">
              {FOOTER.blurb}
            </p>

            <div className="mt-7 max-w-[520px]">
              <h2 className="text-[13px] font-medium uppercase tracking-[1px] text-pm-ink">
                {AREAS.heading}
              </h2>
              <p className="mt-3 text-[15px] font-normal leading-[22.5px] text-pm-slate">
                {AREAS.items.join(", ")} {AREAS.suffix}.
              </p>
            </div>
          </div>

          <div className="flex gap-20">
            <ul className="space-y-[10px]">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="block max-w-[220px] text-[15px] font-light leading-[22px] text-pm-ink transition-colors hover:text-pm-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="space-y-[10px]">
              {FOOTER_PAGES.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="block max-w-[120px] text-[15px] font-light leading-[22px] text-pm-ink transition-colors hover:text-pm-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[54px] flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-[15px] font-light leading-[21px] text-pm-ink">
            {FOOTER.copyright}
          </p>

          <div className="flex items-center gap-6">
            {SOCIALS.map((social) => {
              const Icon = social.icon === "facebook" ? FacebookIcon : InstagramIcon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-pm-ink transition-colors hover:text-pm-gold"
                >
                  <Icon className="h-[26px] w-[26px]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
