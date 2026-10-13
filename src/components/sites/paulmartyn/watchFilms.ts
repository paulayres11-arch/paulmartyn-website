/**
 * QR-code landing films — /watch/<slug>.
 *
 * The printed Stannp letter carries QR codes that land on these pages, which
 * open straight on the film rather than on a gallery the reader has to swipe
 * through. Keep the slugs short: a shorter URL makes a simpler, more reliably
 * scanned QR code, and the letters already in the post depend on them — never
 * rename a slug once it has been printed.
 *
 * Playback, in order of preference:
 *   1. A self-hosted MP4 at public/sites/paulmartyn/videos/<file>. No YouTube,
 *      so no adverts, no YouTube branding and no third-party cookies. Drop the
 *      file in with the exact name below and the page uses it automatically.
 *   2. Otherwise the YouTube embed (youtube-nocookie.com). YouTube can show an
 *      advert first if the video is monetised, which is why (1) is preferred.
 */
export interface WatchFilm {
  slug: string;
  title: string;
  caption: string;
  youtubeId: string;
  /** Self-hosted file name inside public/sites/paulmartyn/videos/. */
  file: string;
  poster: string;
  /** 9:16 Short rather than 16:9. */
  portrait?: boolean;
  more: { label: string; path: string };
}

export const WATCH_FILMS: WatchFilm[] = [
  {
    slug: "rake-barn",
    title: "Step inside Rake Barn",
    caption:
      "A short walk through Rake Barn in Milford — the original timber frame, lime and period detail kept and worked in alongside the new.",
    youtubeId: "FGeJSQInX8Y",
    file: "rake-barn.mp4",
    poster: "/sites/paulmartyn/images/listed/heritage-walkthrough-poster.jpg",
    more: { label: "Listed building & heritage work", path: "/services/listed-buildings" },
  },
  {
    slug: "on-site",
    title: "On site with Paul Martyn",
    caption:
      "A short film from one of our recent projects — how the work is run, and how it finishes.",
    youtubeId: "u9HACyvOWZ4",
    file: "on-site.mp4",
    poster: "/sites/paulmartyn/videos/video-1.jpg",
    portrait: true,
    more: { label: "See more of our work", path: "/services" },
  },
];

export const watchFilm = (slug: string) =>
  WATCH_FILMS.find((f) => f.slug === slug);
