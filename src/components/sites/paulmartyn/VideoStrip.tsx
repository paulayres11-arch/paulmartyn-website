"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { VIDEOS } from "./content";
import type { SiteVideo } from "@/types/paulmartyn";

/**
 * Three-up video strip, YouTube-backed.
 *
 * Cards are a click-to-play facade: the page ships a locally hosted thumbnail
 * and no iframe exists until someone presses play, so no third-party request
 * or cookie fires on load. Playback uses youtube-nocookie.com.
 *
 * Play opens a LIGHTBOX rather than swapping the iframe into the card. A
 * vertical Short squeezed into a 16:9 card is unreadably small; the lightbox
 * gives a portrait video the full height of the viewport while keeping the
 * grid tidy. Built on native <dialog> for focus trapping and Escape-to-close.
 *
 * Player params trim what can be trimmed (`rel=0` keeps related videos to the
 * same channel, `iv_load_policy=3` hides annotations, `playsinline=1` stops iOS
 * going fullscreen). YouTube's own title/channel/Shorts branding cannot be
 * removed from an embed — that needs a self-hosted file.
 */
export function VideoStrip() {
  const [active, setActive] = useState<SiteVideo | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (active) el.showModal();
    else if (el.open) el.close();
  }, [active]);

  // Backdrop click and Escape both clear the active video.
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      if (e.target === el) setActive(null);
    };
    const onClose = () => setActive(null);
    el.addEventListener("click", onClick);
    el.addEventListener("close", onClose);
    return () => {
      el.removeEventListener("click", onClick);
      el.removeEventListener("close", onClose);
    };
  }, []);

  return (
    <section className="bg-pm-cream py-[10vh]">
      <div className="mx-auto max-w-[2000px] px-[3%]">
        <div className="grid gap-[25px] md:grid-cols-3">
          {VIDEOS.items.map((video) => (
            <figure key={video.title} className="flex flex-col">
              <figcaption className="mb-5">
                <h3 className="text-[19px] font-medium leading-[24px] text-pm-ink">
                  {video.title}
                </h3>
                <p className="mt-2 text-[15px] font-normal leading-[22.5px] text-pm-slate">
                  {video.description}
                </p>
              </figcaption>

              <div className="relative aspect-video w-full overflow-hidden bg-pm-teal-dark">
                {!video.youtubeId ? (
                  <div className="flex h-full w-full items-center justify-center border-2 border-dashed border-pm-rule bg-white text-[13px] font-medium uppercase tracking-[1px] text-pm-slate">
                    Video to be added
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActive(video)}
                    aria-label={`Play: ${video.title}`}
                    className="group absolute inset-0 flex items-center justify-center"
                  >
                    {video.poster ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={video.poster}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : null}

                    <span className="absolute inset-0 bg-[rgba(1,32,34,0.28)] transition-colors group-hover:bg-[rgba(1,32,34,0.12)]" />

                    <span className="relative grid h-[64px] w-[64px] place-items-center bg-pm-teal text-white transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none">
                      <svg viewBox="0 0 24 24" className="h-[24px] w-[24px]" fill="currentColor" aria-hidden="true">
                        <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        aria-label={active ? `Playing: ${active.title}` : "Video"}
        className="pm-dialog bg-transparent p-0 backdrop:bg-[rgba(1,32,34,0.88)]"
      >
        {active ? (
          <div className="relative">
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="absolute -top-[52px] right-0 grid h-[40px] w-[40px] place-items-center bg-white text-pm-ink transition-colors hover:bg-pm-gold hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>

            <iframe
              src={`https://www.youtube-nocookie.com/embed/${active.youtubeId}?autoplay=1&rel=0&playsinline=1&iv_load_policy=3`}
              title={active.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={cn(
                "border-0 bg-black",
                active.portrait
                  ? "aspect-[9/16] h-[min(84vh,860px)] w-auto"
                  : "aspect-video w-[min(1120px,92vw)] h-auto",
              )}
            />
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
