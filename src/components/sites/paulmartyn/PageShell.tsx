import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { QuoteCta } from "./QuoteCta";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { TopBar } from "./TopBar";

interface PageShellProps {
  /** Small caps label above the title. Omit to show the title alone. */
  eyebrow?: string;
  title: string;
  children: ReactNode;
  /** Set false on the contact page, which is itself the call to action. */
  showCta?: boolean;
}

/**
 * Inner-page chrome, mirroring the reference site's non-home template:
 * topbar, solid (in-flow) header, `.highcontent` title band, content,
 * CTA band, footer.
 */
export function PageShell({
  eyebrow,
  title,
  children,
  showCta = true,
}: PageShellProps) {
  return (
    <div className="pm-site relative w-full">
      <TopBar />
      <SiteHeader variant="solid" />

      {/* .highcontent — centred eyebrow + 50px title.
          Padding is deliberately tighter than the reference site's 5vh + 46px:
          the galleries below are square rather than landscape, so the title
          needs to sit closer to the header to keep both in one screenful. */}
      <div className="bg-white py-[2vh]">
        <div className="mx-auto max-w-[2000px] px-[3%] py-[24px] text-center">
          {eyebrow ? (
            <p className="text-[13.5px] font-light uppercase tracking-[1px] text-pm-ink">
              {eyebrow}
            </p>
          ) : null}
          <h1 className={cn("mx-auto max-w-[18ch] text-[34px] font-medium leading-[1.1] text-pm-ink sm:text-[42px] lg:text-[50px]", eyebrow && "mt-6")}>
            {title}
          </h1>
        </div>
      </div>

      <main>{children}</main>

      {showCta ? <QuoteCta /> : null}
      <SiteFooter />
    </div>
  );
}
