import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CONTACT } from "@/components/sites/paulmartyn/content";
import { WatchPlayer } from "@/components/sites/paulmartyn/WatchPlayer";
import { WATCH_FILMS, watchFilm } from "@/components/sites/paulmartyn/watchFilms";

/**
 * /watch/<slug> — QR-code landing pages from the printed letter. The film is
 * the first thing on screen and starts playing; see watchFilms.ts.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return WATCH_FILMS.map((f) => ({ slug: f.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const film = watchFilm((await params).slug);
  if (!film) return {};
  return {
    title: film.title,
    description: film.caption,
    alternates: { canonical: `/watch/${film.slug}` },
    // Landing pages for a mailing, not search entry points.
    robots: { index: false, follow: true },
  };
}

export default async function WatchPage({ params }: Props) {
  const film = watchFilm((await params).slug);
  if (!film) notFound();

  // Prefer the self-hosted file when it has been added: no YouTube, no adverts.
  const local = `/sites/paulmartyn/videos/${film.file}`;
  const hasLocal = fs.existsSync(path.join(process.cwd(), "public", local));

  return (
    <div className="pm-site flex min-h-svh flex-col bg-pm-teal-dark text-white">
      <header className="flex items-center justify-between px-[5%] py-5">
        <Link href="/" className="text-[18px] font-semibold tracking-[6px] text-white">
          PAULMARTYN
        </Link>
        <span className="text-[11px] font-medium uppercase tracking-[4px] text-white/80">
          Surrey Hills
        </span>
      </header>

      <main className="flex flex-1 flex-col items-center px-[4%] pb-12 pt-2">
        <WatchPlayer
          title={film.title}
          src={hasLocal ? local : undefined}
          youtubeId={film.youtubeId}
          poster={film.poster}
          portrait={film.portrait}
        />

        <div className="mt-8 w-full max-w-[640px] text-center">
          <h1 className="text-[26px] font-medium leading-[1.2] sm:text-[32px]">
            {film.title}
          </h1>
          <p className="mt-3 text-[16px] leading-[1.6] text-white/85">{film.caption}</p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a
              href={CONTACT.phoneHref}
              className="bg-pm-gold px-6 py-3 text-[15px] font-medium text-pm-ink transition-colors hover:bg-white"
            >
              Call {CONTACT.phone}
            </a>
            <Link
              href={film.more.path}
              className="border border-white/60 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-white hover:text-pm-ink"
            >
              {film.more.label}
            </Link>
          </div>
          <p className="mt-6 text-[14px] text-white/70">
            Free, no-obligation site visit &middot;{" "}
            <a href={CONTACT.emailHref} className="underline underline-offset-4">
              {CONTACT.email}
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
