import { CONTACT } from "./content";
import { EnvelopeIcon, PhoneIcon } from "./shared/icons";

/**
 * Top contact bar.
 * Computed from the reference: height 46px, background #265457, white 15px/300.
 */
export function TopBar() {
  return (
    <div className="h-[46px] bg-pm-teal text-white">
      <div className="mx-auto flex h-full max-w-[2000px] items-center justify-between px-[3%]">
        <p className="text-[13.5px] font-light leading-[20.25px] text-white">{CONTACT.strapline}</p>

        <div className="flex items-center gap-8">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2.5 text-[13.5px] font-light leading-[20.25px] text-white transition-colors hover:text-pm-gold"
          >
            <PhoneIcon className="h-[15px] w-[15px]" />
            {CONTACT.phone}
          </a>
          <a
            href={CONTACT.emailHref}
            className="hidden items-center gap-2.5 text-[13.5px] font-light leading-[20.25px] text-white transition-colors hover:text-pm-gold sm:flex"
          >
            <EnvelopeIcon className="h-[15px] w-[15px]" />
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
}
