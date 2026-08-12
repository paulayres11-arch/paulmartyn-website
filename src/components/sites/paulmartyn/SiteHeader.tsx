"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV } from "./content";
import { QuoteDialog } from "./QuoteDialog";
import { Logo } from "./shared/Logo";

/**
 * Section 2 — primary header. SCROLL-DRIVEN.
 *
 * State A (rest):   position absolute, top 46, height 107, transparent, white nav,
 *                   full wordmark 124x83.
 * State B (sticky): position fixed, top 0, height 69, white bg,
 *                   shadow 0 3px 12px rgba(0,0,0,.06), ink nav, 45x45 icon mark.
 * Trigger: topbar + header scrolled out of view (153px).
 * Transition: top 0.35s, opacity 0.35s.
 */
const STICKY_THRESHOLD = 153;

interface SiteHeaderProps {
  /**
   * "overlay" — homepage: absolute over the hero, white nav (the target's
   * `.homemenuover`). "solid" — inner pages: in flow, white, ink nav.
   */
  variant?: "overlay" | "solid";
}

export function SiteHeader({ variant = "overlay" }: SiteHeaderProps) {
  const [sticky, setSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const overlay = variant === "overlay";
  /** Ink nav + ink wordmark whenever the bar has a white background. */
  const onWhite = sticky || !overlay;

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > STICKY_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "left-0 right-0 z-50 transition-[height,box-shadow] duration-[350ms]",
        overlay
          ? sticky
            ? "fixed top-0 h-[69px] bg-white shadow-[0_3px_12px_0_rgba(0,0,0,0.06)]"
            : "absolute top-[46px] h-[107px] bg-transparent"
          : cn(
              // Inner pages stay in flow via position:sticky, so shrinking the
              // bar never shifts the content underneath it.
              "sticky top-0 bg-white",
              sticky
                ? "h-[69px] shadow-[0_3px_12px_0_rgba(0,0,0,0.06)]"
                : "h-[107px]",
            ),
      )}
    >
      <div className="mx-auto flex h-full max-w-[2000px] items-center px-[3%]">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Paul Martyn"
        >
          {/* Gold mark only on the homepage hero, where it sits over the dark
              photograph. On any white bar the mark is ink. */}
          <Logo
            tone={onWhite ? "ink" : "white"}
            markTone={onWhite ? "ink" : "gold"}
            markOnly={sticky}
            height={sticky ? 28 : 34}
          />
        </Link>

        <nav className="ml-[7.5rem] hidden items-center gap-[2.1rem] lg:flex">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a
                href={item.path}
                className={cn(
                  "text-[16.5px] font-light leading-[24.75px] transition-colors hover:text-pm-gold",
                  onWhite ? "text-pm-ink" : "text-white",
                )}
              >
                {item.label}
              </a>

              {item.children && openMenu === item.label ? (
                <div className="absolute left-0 top-full z-50 min-w-[260px] bg-white py-2 shadow-[0_3px_12px_0_rgba(0,0,0,0.12)]">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.path}
                      className="block px-5 py-2 text-[15px] font-light text-pm-ink transition-colors hover:text-pm-gold"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <QuoteDialog
          className={cn(
            "ml-auto hidden items-center justify-center bg-pm-gold text-center text-[21.5px] font-bold text-white transition-[box-shadow] duration-[400ms] ease-out lg:flex",
            "hover:shadow-[inset_0_0_0_100px_#265457]",
            sticky ? "h-[62px] w-[242px]" : "h-[81px] w-[242px]",
          )}
        />

        {/* Burger — the target renders .menu-toggle.c-hamburger below 990px */}
        <button
          type="button"
          aria-label="Open menu"
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={cn("block h-[2px] w-6", onWhite ? "bg-pm-ink" : "bg-white")}
            />
          ))}
        </button>
      </div>
    </header>
  );
}
