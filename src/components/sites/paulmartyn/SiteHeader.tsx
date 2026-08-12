"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CONTACT, NAV } from "./content";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const overlay = variant === "overlay";
  /**
   * Ink nav + ink wordmark whenever the bar has a white background. Opening the
   * mobile panel forces the bar white too — otherwise the burger and wordmark
   * sit ink-on-photograph over the homepage hero and vanish.
   */
  const onWhite = sticky || !overlay || mobileOpen;

  /**
   * Where the mobile panel starts: flush under the bar in whichever state it is
   * currently in. Getting this wrong overlaps the header or leaves a gap.
   *   overlay at rest → bar spans 46–153   ·  sticky → 0–69
   *   solid at rest   → bar spans 0–107    ·  sticky → 0–69
   */
  const panelTop = sticky
    ? "top-[69px]"
    : overlay
      ? "top-[153px]"
      : "top-[107px]";

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > STICKY_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * While the mobile panel is open: lock body scroll so the page behind cannot
   * move, and close on Escape.
   */
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  /** Close the panel if the viewport grows past the desktop breakpoint. */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setMobileOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={cn(
        "left-0 right-0 z-50 transition-[height,box-shadow] duration-[350ms]",
        overlay
          ? sticky
            ? "fixed top-0 h-[69px] bg-white shadow-[0_3px_12px_0_rgba(0,0,0,0.06)]"
            : cn(
                "absolute top-[46px] h-[107px]",
                mobileOpen ? "bg-white" : "bg-transparent",
              )
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

        {/* Burger — below lg the nav is hidden, so this is the only way in. */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
          className="ml-auto flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={cn(
                "block h-[2px] w-6 transition-transform duration-300 motion-reduce:transition-none",
                mobileOpen || onWhite ? "bg-pm-ink" : "bg-white",
                mobileOpen && i === 0 && "translate-y-[7px] rotate-45",
                mobileOpen && i === 1 && "opacity-0",
                mobileOpen && i === 2 && "-translate-y-[7px] -rotate-45",
              )}
            />
          ))}
        </button>
      </div>

      {/* Mobile panel. Sits below the bar and fills the rest of the screen. */}
      <div
        id="mobile-nav"
        hidden={!mobileOpen}
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 overflow-y-auto overscroll-contain bg-white lg:hidden",
          panelTop,
        )}
      >
        <nav className="flex flex-col px-[6%] py-6">
          {NAV.map((item) => {
            const expanded = mobileSubmenu === item.label;
            return (
              <div key={item.label} className="border-b border-pm-rule">
                <div className="flex items-center">
                  <a
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 py-4 text-[19px] font-light text-pm-ink"
                  >
                    {item.label}
                  </a>
                  {item.children ? (
                    <button
                      type="button"
                      aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
                      aria-expanded={expanded}
                      onClick={() =>
                        setMobileSubmenu(expanded ? null : item.label)
                      }
                      className="grid h-11 w-11 shrink-0 place-items-center text-pm-ink"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className={cn(
                          "h-[18px] w-[18px] transition-transform duration-300 motion-reduce:transition-none",
                          expanded && "rotate-180",
                        )}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  ) : null}
                </div>

                {item.children ? (
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-400 ease-out motion-reduce:transition-none",
                      expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-3">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.path}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2.5 pl-4 text-[16px] font-light text-pm-slate"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}

          <QuoteDialog
            className="mt-8 flex h-[58px] w-full items-center justify-center bg-pm-gold text-center text-[17px] font-bold text-white"
            onOpen={() => setMobileOpen(false)}
          />

          <a
            href={CONTACT.phoneHref}
            className="mt-4 flex h-[58px] w-full items-center justify-center border border-pm-rule text-[17px] font-normal text-pm-ink"
          >
            {CONTACT.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
