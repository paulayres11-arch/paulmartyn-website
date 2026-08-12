"use client";

import { useEffect } from "react";

/**
 * Re-applies the URL hash after mount.
 *
 * Arriving at /#reviews from another page, the browser tries to scroll before
 * the client sections (review rail, video strip, carousels) have laid out, so
 * it lands at the top and stays there. Running the scroll once after mount —
 * and again on the next frame, after images reserve their space — puts it in
 * the right place.
 *
 * Also handles in-page hash changes, which Next's client router doesn't scroll
 * for on its own.
 */
export function HashScroll() {
  useEffect(() => {
    const go = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    };

    // Layout keeps shifting as images decode, so re-run until it settles:
    // immediately, next frame, on window load, and a couple of short retries.
    go();
    const raf = requestAnimationFrame(() => requestAnimationFrame(go));
    const timers = [120, 400, 900].map((ms) => window.setTimeout(go, ms));

    window.addEventListener("load", go);
    window.addEventListener("hashchange", go);
    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(window.clearTimeout);
      window.removeEventListener("load", go);
      window.removeEventListener("hashchange", go);
    };
  }, []);

  return null;
}
