"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Featured heritage walkthrough — a large, click-to-play video block for the
 * listed-buildings page, so the film is prominent at the top of the page
 * rather than the last slide of the gallery rail.
 *
 * Same facade-plus-lightbox pattern as VideoStrip: no YouTube request or cookie
 * fires until the viewer presses play, then playback uses youtube-nocookie.com
 * with related videos and annotations trimmed. Section id="film" lets a QR code
 * or link (…/services/listed-buildings#film) land straight on it.
 */
const YOUTUBE_ID = "FGeJSQInX8Y";
const POSTER = "/sites/paulmartyn/images/listed/heritage-walkthrough-poster.jpg";

export function FeatureFilm() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open) el.showModal();
    else if (el.open) el.close();
  }, [open]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      if (e.target === el) setOpen(false);
    };
    const onClose = () => setOpen(false);
    el.addEventListener("click", onClick);
    el.addEventListener("close", onClose);
    return () => {
      el.removeEventListener("click", onClick);
      el.removeEventListener("close", onClose);
    };
  }, []);

  return (
    <section id="film" className="scroll-mt-[120px] bg-pm-cream py-[8vh]">
      <div className="mx-auto max-w-[2000px] px-[3%]">
        <div className="mx-auto max-w-[1120px]">
          <p className="text-[12px] font-semibold uppercase tracking-[2.5px] text-pm-gold">
            Watch &mdash; heritage walkthrough
          </p>
          <h2 className="mt-3 text-[28px] font-medium leading-[1.15] text-pm-ink sm:text-[32px]">
            Inside a heritage project
          </h2>
          <p className="mt-3 max-w-[680px] text-[17px] leading-[1.6] text-pm-slate">
            A short walk through a recent heritage build &mdash; the original
            timber frame, lime and period detail kept and worked in alongside
            the new.
          </p>

          <div className="relative mt-7 aspect-video w-full overflow-hidden bg-pm-teal-dark">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Play the heritage walkthrough film"
              className="group absolute inset-0 flex items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={POSTER}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-[rgba(1,32,34,0.30)] transition-colors group-hover:bg-[rgba(1,32,34,0.16)]" />
              <span className="relative grid h-[88px] w-[88px] place-items-center bg-pm-teal text-white shadow-[0_10px_40px_rgba(1,32,34,0.35)] transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none">
                <svg viewBox="0 0 24 24" className="h-[34px] w-[34px]" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                </svg>
              </span>
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-pm-rule pt-3">
            <span className="text-[15px] font-medium text-pm-ink">
              Rake Barn, Milford
            </span>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Heritage walkthrough film"
        className="pm-dialog bg-transparent p-0 backdrop:bg-[rgba(1,32,34,0.88)]"
      >
        {open ? (
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-[52px] right-0 grid h-[40px] w-[40px] place-items-center bg-white text-pm-ink transition-colors hover:bg-pm-gold hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>

            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&playsinline=1&iv_load_policy=3`}
              title="Heritage walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="aspect-video h-auto w-[min(1120px,92vw)] border-0 bg-black"
            />
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
