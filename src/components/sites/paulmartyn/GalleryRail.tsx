"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Picture window — one large image at a time, scrolled horizontally.
 *
 * A scroll-snap rail rather than a transform carousel: it stays swipeable on
 * touch and trackpad, needs no index maths, and degrades to a plain scroller
 * if JS fails. Arrows and dots drive the same native scrolling.
 */
interface GalleryRailProps {
  images: { src: string; alt: string; youtubeId?: string; overlay?: string }[];
  /** Aspect of the window. Ignored when `fill` is set. */
  ratio?: "landscape" | "portrait";
  /** Fill the parent's height instead of using an aspect ratio. */
  fill?: boolean;
  /** Advance on its own. Pauses on hover/focus and after any manual input. */
  autoplay?: boolean;
  /** Milliseconds between slides. */
  interval?: number;
  className?: string;
}

export function GalleryRail({
  images,
  ratio = "landscape",
  fill = false,
  autoplay = true,
  interval = 5000,
  className,
}: GalleryRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const sync = useCallback(() => {
    const el = railRef.current;
    if (!el || !el.clientWidth) return;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (playing) el.showModal();
    else if (el.open) el.close();
  }, [playing]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      if (e.target === el) setPlaying(null);
    };
    const onClose = () => setPlaying(null);
    el.addEventListener("click", onClick);
    el.addEventListener("close", onClose);
    return () => {
      el.removeEventListener("click", onClick);
      el.removeEventListener("close", onClose);
    };
  }, []);

  const goTo = (i: number) => {
    const el = railRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(images.length - 1, i));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  };

  /**
   * Auto-advance. Stops while a video lightbox is open, while the pointer or
   * keyboard focus is inside the rail, and entirely under reduced-motion.
   * Wraps back to the first slide at the end.
   */
  useEffect(() => {
    if (!autoplay || paused || playing || images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      const el = railRef.current;
      if (!el) return;
      const last = Math.round(el.scrollLeft / el.clientWidth) >= images.length - 1;
      el.scrollTo({
        left: last ? 0 : (Math.round(el.scrollLeft / el.clientWidth) + 1) * el.clientWidth,
        behavior: "smooth",
      });
    }, interval);

    return () => window.clearInterval(id);
  }, [autoplay, paused, playing, interval, images.length]);

  if (!images.length) return null;

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div
        ref={railRef}
        className={cn(
          "no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth",
          fill && "h-full",
        )}
        aria-roledescription="carousel"
      >
        {images.map((shot, i) => (
          <div
            key={shot.src}
            className={cn(
              "relative w-full shrink-0 snap-start bg-pm-teal-dark bg-cover bg-center",
              fill
                ? "h-full"
                : ratio === "portrait"
                  ? "aspect-[3/4] sm:aspect-[4/3]"
                  : "aspect-[4/3] sm:aspect-[16/10]",
            )}
            style={{ backgroundImage: `url(${shot.src})` }}
            role="img"
            aria-label={shot.alt}
            aria-hidden={i !== index}
          >
            {shot.youtubeId ? (
              <button
                type="button"
                onClick={() => setPlaying(shot.youtubeId ?? null)}
                aria-label={`Play video: ${shot.alt}`}
                className="group absolute inset-0 grid place-items-center bg-[rgba(1,32,34,0.25)] transition-colors hover:bg-[rgba(1,32,34,0.1)]"
              >
                <span className="grid h-[64px] w-[64px] place-items-center bg-pm-teal text-white transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none">
                  <svg viewBox="0 0 24 24" className="h-[24px] w-[24px]" fill="currentColor" aria-hidden="true">
                    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                  </svg>
                </span>
              </button>
            ) : null}

            {shot.overlay ? (
              <p
                className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(1,32,34,0.7)] via-[rgba(1,32,34,0.35)] to-transparent px-5 pb-11 pt-16 text-center text-[clamp(17px,2.1vw,26px)] font-bold uppercase leading-[1.2] tracking-[0.06em] text-white [text-shadow:0_2px_12px_rgba(1,32,34,0.6)]"
              >
                {shot.overlay}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            className={cn(
              "absolute left-5 top-1/2 grid h-[48px] w-[48px] -translate-y-1/2 place-items-center bg-white/90 text-pm-ink transition-opacity hover:bg-white",
              index === 0 && "pointer-events-none opacity-0",
            )}
          >
            <Chevron className="h-[20px] w-[20px] rotate-180" />
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={() => goTo(index + 1)}
            disabled={index === images.length - 1}
            className={cn(
              "absolute right-5 top-1/2 grid h-[48px] w-[48px] -translate-y-1/2 place-items-center bg-white/90 text-pm-ink transition-opacity hover:bg-white",
              index === images.length - 1 && "pointer-events-none opacity-0",
            )}
          >
            <Chevron className="h-[20px] w-[20px]" />
          </button>

          <div
            className={cn(
              "flex items-center gap-3",
              fill ? "absolute bottom-4 left-4 right-4" : "mt-5",
            )}
          >
            {images.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
                className={cn(
                  "h-[3px] flex-1 transition-colors",
                  i === index
                    ? fill
                      ? "bg-white"
                      : "bg-pm-teal"
                    : fill
                      ? "bg-white/40 hover:bg-white/70"
                      : "bg-pm-rule hover:bg-pm-gold",
                )}
              />
            ))}
          </div>
        </>
      ) : null}

      <dialog
        ref={dialogRef}
        aria-label="Video"
        className="pm-dialog bg-transparent p-0 backdrop:bg-[rgba(1,32,34,0.88)]"
      >
        {playing ? (
          <div className="relative">
            <button
              type="button"
              onClick={() => setPlaying(null)}
              aria-label="Close video"
              className="absolute -top-[52px] right-0 grid h-[40px] w-[40px] place-items-center bg-white text-pm-ink transition-colors hover:bg-pm-gold hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>

            <iframe
              src={`https://www.youtube-nocookie.com/embed/${playing}?autoplay=1&rel=0&playsinline=1&iv_load_policy=3`}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-[9/16] h-[min(84vh,860px)] w-auto border-0 bg-black"
            />
          </div>
        ) : null}
      </dialog>
    </div>
  );
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}
