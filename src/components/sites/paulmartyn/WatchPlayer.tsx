"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Player for the /watch landing pages. Starts playing on arrival: browsers
 * only allow autoplay when muted, so the film starts silent and a clear
 * "Tap for sound" button sits over it until the viewer unmutes.
 */
export function WatchPlayer({
  title,
  src,
  youtubeId,
  poster,
  portrait,
}: {
  title: string;
  src?: string;
  youtubeId: string;
  poster: string;
  portrait?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const frame = cn(
    "relative mx-auto overflow-hidden bg-black shadow-[0_20px_60px_rgba(0,0,0,0.45)]",
    portrait
      ? "aspect-[9/16] h-[min(72svh,820px)] max-w-[92vw]"
      : "aspect-video w-[min(1120px,94vw)]",
  );

  if (!src) {
    return (
      <div className={frame}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0&iv_load_policy=3&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <div className={frame}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted={muted}
        playsInline
        controls
        preload="auto"
        className="absolute inset-0 h-full w-full object-contain"
      />
      {muted ? (
        <button
          type="button"
          onClick={() => {
            const v = videoRef.current;
            setMuted(false);
            if (v) {
              v.muted = false;
              void v.play();
            }
          }}
          className="absolute left-1/2 top-4 -translate-x-1/2 bg-white/95 px-4 py-2 text-[14px] font-medium text-pm-ink shadow-md"
        >
          Tap for sound
        </button>
      ) : null}
    </div>
  );
}
