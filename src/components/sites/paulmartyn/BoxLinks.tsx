import { WHY_US } from "./content";
import {
  BadgeIcon,
  MapPinIcon,
  ReceiptIcon,
  UserIcon,
} from "./shared/icons";

/**
 * "Why choose us" — occupies the target's .boxlinks band.
 * Full-bleed photograph with a dark teal scrim, centred heading, then four
 * icon + copy columns (the reference design had three).
 */
const ICONS = {
  "map-pin": MapPinIcon,
  badge: BadgeIcon,
  receipt: ReceiptIcon,
  user: UserIcon,
} as const;

export function BoxLinks() {
  return (
    /* .section.sectionpad.boxlinks — padding: 10vh 0; inner band 515px tall */
    <section className="bg-white py-[10vh]">
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${WHY_US.background})` }}
      >
        <div className="absolute inset-0 bg-[#265457]/80" />

        <div className="relative mx-auto flex min-h-[515px] max-w-[2000px] flex-col justify-center px-[3%] py-[64px]">
          <h3 className="t-h3-lg mx-auto block w-full max-w-[620px] self-center text-center font-medium text-white">
            {WHY_US.heading}
          </h3>

          <div className="mt-[72px] grid gap-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {WHY_US.items.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <div key={item.title} className="flex items-start gap-5">
                  <Icon className="mt-1 h-[44px] w-[44px] shrink-0 text-white/45" />

                  <div>
                    <h4 className="t-card-title font-medium text-white">
                      {item.title}
                    </h4>
                    <p className="mt-3 max-w-[280px] text-[15px] font-light leading-[22.5px] text-white">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
