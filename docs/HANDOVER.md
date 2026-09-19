# Handover — working on this site

For an SEO specialist or developer picking this site up. It tells you where
every SEO lever actually lives, how to publish, and the handful of things that
have caught people out before.

**This file is in a public repository. No passwords, keys or account details
go in here.** You will not be given a shared login for anything — see
[Access](#access).

---

## 1. The 60-second version

Paul Martyn Construction / P Martyn Co Ltd — a family building firm at
1 Bridge Rd, Cranleigh, Surrey GU6 7HH.

- **Live at** <https://www.paulmartynconstruction.com>
- **Stack:** Next.js 16 (App Router) + Tailwind 4, TypeScript, statically
  prerendered, built from a Dockerfile.
- **Hosting:** Railway. **DNS + TLS:** Cloudflare.
- **Deploy:** push to `master` on GitHub → Railway builds and deploys, ~60s.
  There is no staging environment and no CMS.

**There is no CMS.** Every word on the site, every page title and every meta
description is in the code. Changing copy means editing a TypeScript file and
pushing it. If you are used to working through WordPress or Yoast, this is the
main adjustment — but everything is in two or three files and it is mostly
plain text in quotes.

---

## 2. Access

Access is granted by **invitation to your own account**. There are no shared
passwords to hand round, and the site itself has **no environment variables
and no secrets** — the contact form composes a `mailto:`, there is no database
and no API key anywhere in the build.

| What | Why you'd need it | How you get it |
| --- | --- | --- |
| **GitHub** — `paulayres11-arch/paulmartyn-website`, Write access | Everything. This is the only access needed to change and publish the site. | Emailed invite from Paul to your GitHub username. Accept it, then clone. |
| **Railway** — project `paulmartyn-website` | Only to read build logs or run a manual deploy. Not needed for content work. | Invite to your email address. Ask only if you need it. |
| **Google Search Console** | Submitting the sitemap, checking indexing and queries. | Paul adds you as a user on the property — he keeps ownership. |
| **Cloudflare** | DNS, redirects at the edge, `robots.txt` (see §7). | **Ask first, and say why.** The company's Google Workspace email runs on these DNS records — a mistake here takes down email as well as the site. |

If you need something that isn't on this list, ask rather than working round it.

---

## 3. Getting set up

```bash
git clone https://github.com/paulayres11-arch/paulmartyn-website.git
cd paulmartyn-website
nvm use            # Node 24 — it's in .nvmrc
npm ci
npm run dev        # http://localhost:3000
```

No `.env` file is needed. There isn't one.

**Before every push, run:**

```bash
npm run check      # lint + typecheck + production build
```

This is not optional politeness. If the build fails, Railway keeps serving the
previous version — **the site does not go down, your change just silently never
appears.** A green `npm run check` locally is what tells you a push will
actually land.

---

## 4. Where the SEO levers live

Everything below is a real path in this repo.

### Page titles and meta descriptions

Each route is a folder under `src/app/`, and each has a `page.tsx` beginning
with an `export const metadata` block:

```ts
export const metadata: Metadata = {
  title: "Kitchen Fitters in Cranleigh | Paul Martyn",
  description: "…",
  alternates: { canonical: "/services/kitchens" },
};
```

The routes:

```
src/app/page.tsx                                  /              (home)
src/app/about-us/page.tsx                         /about-us
src/app/services/page.tsx                         /services
src/app/services/renovations-extensions/page.tsx  (+ 7 more service pages)
src/app/process/page.tsx                          /process
src/app/pricing/page.tsx                          /pricing
src/app/guides/house-extension-costs-surrey/      /guides/…      ← strongest entry point
src/app/areas/cranleigh/page.tsx                  /areas/cranleigh  ← the money page
src/app/blog/page.tsx                             /blog          (index)
src/app/blog/[slug]/page.tsx                      /blog/…        (every post)
src/app/contact/page.tsx                          /contact
```

Some service-page titles read from `SERVICES` in `content.ts` via
`service.seoTitle` rather than being written inline — follow the code from the
`metadata` block and you'll land in the right place.

**The home page `<title>` was deliberately retargeted** from "Surrey Builders"
(unwinnable) to "Cranleigh Builders | Extensions, Renovations & New Builds |
Paul Martyn". Don't broaden it back out without reading §8 first.

### Body copy, services, pricing, reviews, areas

`src/components/sites/paulmartyn/content.ts` — one file, exported constants:

| Constant | Controls |
| --- | --- |
| `COMPANY`, `CONTACT` | NAP — name, address, phone. **Must match the Google Business Profile exactly.** |
| `NAV`, `FOOTER_SERVICES`, `FOOTER_PAGES`, `FOOTER` | Navigation and footer links |
| `HERO`, `INTRO`, `WHY_US`, `PROCESS` | Home page copy |
| `SERVICES` | Every service page's heading, body and `seoTitle` |
| `PRICING` | The price bands on `/pricing` |
| `REVIEWS`, `TESTIMONIALS`, `VIDEOS` | Social proof |
| `AREAS` | The "Areas covered" list |
| `AREA_PAGES` | Which of those areas has its own page — see below |

### Area pages and internal linking

`AREA_PAGES` maps an area name to its URL. An area listed there is **linked
from the footer of every page on the site**; one that isn't stays plain text.
So adding a village page is two steps — build the page under
`src/app/areas/<village>/`, then add its entry to `AREA_PAGES` — and it is
internally linked from the moment it ships, rather than being orphaned.

Only Cranleigh has a page so far. **Planned build order**, emptiest search
results first, Godalming last because it is the only contested one:

> Ewhurst, Shamley Green, Wonersh, Bramley, Alfold, Dunsfold, Loxwood,
> Rudgwick, Chiddingfold, Godalming.

### Canonical host, sitemap, robots, indexing

- `src/lib/site.ts` — **`CANONICAL_HOST` is the single source of truth.** It
  drives the apex→www redirect, every canonical tag, the sitemap and the
  indexing rule. `ROUTES` in the same file is the list of static URLs the
  sitemap emits — **a new static page must be added to `ROUTES` or it will not
  appear in the sitemap.** `OG_IMAGE` is the default share card.
- `src/app/sitemap.ts` — builds `/sitemap.xml` from `ROUTES` plus every blog
  post. Priorities and `lastmod` are derived, not hardcoded.
- `src/app/robots.ts` — `/robots.txt`. Serves `Disallow: /` on any host that
  isn't the live domain. See §7 for what Cloudflare then adds to it.
- `src/middleware.ts` — sets `X-Robots-Tag: noindex, nofollow` on every host
  except the live domain, so the Railway preview URL can't compete with the
  live site.

> **`www` is canonical.** Google indexed the www host on the old Squarespace
> site; the apex 308s to it. Don't flip this.

> **Indexing is decided per request from the `Host` header, on purpose.** It
> used to be an env var read inside statically prerendered metadata, which
> baked the value in at build time — flipping it on the host did nothing and
> the site nearly went live serving `noindex, nofollow`. **Do not reintroduce a
> build-time environment variable for indexing.**

### Redirects

`next.config.ts` holds the permanent redirects catching old Squarespace URLs
Google still has indexed (`/about` → `/about-us`, `/design-build` →
`/services/renovations-extensions`, and so on), plus the apex→www rule. Add new
ones here when you change a URL — **and always add one when you change a URL.**

### Structured data

Hand-written JSON-LD, in the page that emits it:

| File | Schema |
| --- | --- |
| `src/app/page.tsx` | `GeneralContractor` (LocalBusiness) |
| `src/app/areas/cranleigh/page.tsx` | `GeneralContractor`, area-scoped |
| `src/app/blog/[slug]/page.tsx` | `Article` + `BreadcrumbList` + `FAQPage` |
| `src/app/blog/page.tsx` | Blog index |
| `src/app/guides/house-extension-costs-surrey/page.tsx` | Guide |

> Both LocalBusiness blocks share **`@id: SITE_URL/#business`** deliberately.
> That makes the area page strengthen one business entity rather than forking
> it into two. Keep the shared `@id` on any new area page you build.

### Blog posts

`src/components/sites/paulmartyn/blogPosts.tsx` — one array, `BLOG_POSTS`. The
shape is typed in `src/types/paulmartyn.ts` (`BlogPost`, `BlogBlock`):

```ts
{
  slug, title, category, date, updated?,
  seoTitle,          // ~55–60 chars — the post page's <title>
  metaDescription,   // ~150 chars
  excerpt,           // shown on the index card
  imageAlt,
  body: BlogBlock[], // takeaways | h2 | h3 | p | ul | ol | table | quote | callout
  faqs?,             // rendered on the page AND emitted as FAQPage schema
  related?,          // 2–3 slugs, linked at the foot
  art,               // from blogArt.tsx, keyed by slug
}
```

`h2` blocks become the post's contents list automatically. Illustrations are
original inline SVG in `blogArt.tsx`, keyed by slug.

---

## 5. Publishing

```bash
npm run check
git add -A && git commit -m "…" && git push origin master
```

Railway picks up the push and deploys in about a minute.

**Then verify it actually went live** — don't trust the push:

```bash
curl -s https://www.paulmartynconstruction.com/some-page | grep "a string you just added"
```

**If it hasn't appeared after a few minutes**, the deploy webhook has missed
the push. This is a known, recurring fault, not a mystery. Fix:

```bash
railway up --service paulmartyn-website --detach
```

---

## 6. Six things that have caught people out

1. **The auto-deploy webhook is unreliable.** It has silently skipped pushes.
   Always verify against the live URL; use `railway up` as the fallback.
2. **Blog inline markup is `**bold**` and `[label](/path)` only.** A single
   `*` renders literally on the page. There is no Markdown parser — just those
   two patterns.
3. **A new static page must be added to `ROUTES`** in `src/lib/site.ts`, or it
   will never reach the sitemap.
4. **Commits authored "Claude" appear three times a week.** That is the blog
   automation (§9), not someone else in the repo. Pull before you start work.
5. **Cost figures live in three places that must agree:** `/pricing`,
   `/guides/house-extension-costs-surrey`, and §2 of `BLOG_AUTOMATION.md`.
   Change one, change all three.
6. **`master` deploys straight to a live business site.** No staging, no
   preview, no undo beyond a revert. Check your work locally first.

---

## 7. Cloudflare injects its own `robots.txt`

The live `robots.txt` is **not** only what `src/app/robots.ts` returns.
Cloudflare appends a "Managed content" block that blocks AI crawlers — GPTBot,
ClaudeBot, Google-Extended and others.

**This was not authored by us, and it does not block Googlebot**, so ordinary
search is unaffected. Don't spend time hunting for it in the codebase, and
don't treat it as a bug in the site.

Related: both Cloudflare CNAMEs are **proxied** (orange cloud). Cloudflare
terminates TLS — Railway never issued its own certificate for these domains.
**Turning the proxy off takes HTTPS down** until Railway issues one.

---

## 8. The current strategy — "owning Cranleigh"

Adopted August 2026, and the reasoning matters before you change direction.

**The problem:** the site ranked for no Cranleigh search at all, because it
advertised 16 towns — 13 of them north-Surrey commuter towns 20–35 miles away —
while the business is in Cranleigh. It had no page for its own town, which
every competitor had.

**What was done:** built `/areas/cranleigh`; re-cut `AREAS` to Cranleigh plus
its ring of villages; gave both LocalBusiness blocks a shared `@id`; retargeted
the home page title from "Surrey Builders" to "Cranleigh Builders"; rewrote the
blog long-form (~210 → ~2,100 words per post), each post with its own URL and
schema.

**The ranking mechanism:** every blog post links to `/areas/cranleigh` with the
anchor text **"builders in Cranleigh"** inside a natural sentence. Posts target
long questions; the authority flows to the money page. Keep this up in anything
new you write.

**Primary targets:** `builders cranleigh`, `cranleigh builders`, plus the
village variants as those pages get built.

### Verified local facts

The original research note Paul was given had **three of these wrong**. These
are the checked versions — use them, and check anything new before publishing:

- Waverley has **43** conservation areas (not 44).
- Cranleigh High Street conservation area: designated **Oct 1973**, extended
  **Jul 1985** and **Jul 2016**.
- The parish has **82** listed buildings (not ~90).
- The church is **St Nicolas** (not Nicholas), Grade II*.
- Demolition consent threshold: **115 m³**. Heritage niche: uncontested.
- Cranleigh's built-up area is **not** Green Belt — the constraint is the
  **settlement boundary**. Don't write Green Belt framing into Cranleigh posts.
- Waverley Residential Extensions SPD adopted **12 Oct 2010**; Cranleigh
  Neighbourhood Plan *made* **15 Jul 2024**; Conservation Area appraisal 2016.
- Householder planning fee is **£548** since 1 Apr 2026 (~£575 from 8 Dec
  2026). Larger Home Extension prior approval **£310** (was £249).

The planning authority is **Waverley Borough Council** — not Elmbridge, which
covers the towns the site used to target.

---

## 9. The blog writes itself

Two scheduled cloud agents run against this repo:

- **Writer** — Mon/Wed/Fri 07:00 UK. Writes a post, runs `npm run check`,
  commits and pushes to `master`.
- **Watchdog** — Saturdays 09:00 UK. Checks the writer actually ran and logs
  the result.

`docs/BLOG_AUTOMATION.md` is the brief the writer follows: topic backlog,
rotation between local and knowledge posts, the two-in-three Cranleigh rule,
and the checkable local facts. **If you change editorial direction, change that
file too** — otherwise the automation keeps producing the old strategy three
times a week.

`docs/BLOG_RUN_LOG.md` is the run log, one line per run. **A gap in the dates
is the thing to look at** — it has caught two real stalls. There is no email
alerting, by Paul's explicit decision. Don't add any.

---

## 10. Known outstanding work

- **Google Search Console** — submit the sitemap, request indexing on `/` and
  `/guides/house-extension-costs-surrey`.
- **No DMARC record.** SPF is in place; DMARC was never added.
- **Village area pages** — none built yet beyond Cranleigh. See §4 for the order.
- **Off-site, Paul's own to-do:** revive the Checkatrade profile (he doesn't
  appear on their Cranleigh page — reviews are the fastest win), join the FMB,
  and photograph 2–3 Cranleigh jobs. The portfolio currently proves Cobham, not
  Cranleigh, which undercuts the whole Cranleigh strategy.
- **The map pack** is where most of the local money is, and it's geo-located —
  it has to be checked from a phone in Cranleigh, not from a desk.

---

## 11. Other docs

| File | What it is |
| --- | --- |
| `docs/CUTOVER.md` | Infrastructure runbook — the Squarespace → Cloudflare → Railway migration |
| `docs/BLOG_AUTOMATION.md` | The blog agent's brief. Editorial rules + local facts |
| `docs/BLOG_RUN_LOG.md` | One line per automated run |
| `docs/dns-baseline-2026-08-12.txt` | DNS as it was before the move — the rollback reference |
| `CHANGELOG.md` | Site change history |

Anything you're unsure about — especially DNS, the canonical host, or the
indexing rule — ask Paul before changing it. Those three are the ones that can
take the site or the company email off the air.
