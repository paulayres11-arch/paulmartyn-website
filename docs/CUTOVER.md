# Domain cutover: Squarespace → Cloudflare → Railway

Moving `paulmartynconstruction.com` off Squarespace onto the Railway build,
with Cloudflare as the DNS provider, without losing search rankings or email.

Everything in "Before you start" is fact captured from the live domain on
2026-08-12, not assumption. Re-check anything that looks stale before acting.

---

## Before you start

| | |
|---|---|
| Live site today | Squarespace, `198.49.23.x` / `198.185.159.x` |
| Canonical host | **`www.paulmartynconstruction.com`** — apex already 301s to www, and every Squarespace canonical points at www. Google has www indexed. |
| Registrar | Tucows (reseller — the domain is managed in the **Squarespace** domains panel) |
| Nameservers now | `dns1–4.p02.nsone.net` (NS1) + `ns01–04.squarespacedns.com` |
| Registry expiry | 2027-01-21 |
| New site | Railway, service `paulmartyn-website`, project `49b1762d-bfc0-48b2-9f5f-0ea73cdf535a` |
| Deploys | **`railway up` from the CLI.** There is no GitHub integration — `git push` does **not** deploy. |

### ⚠️ Email is on this domain

`Paul@paulmartynconstruction.com` is **Google Workspace**:

```
1  aspmx.l.google.com
5  alt1.aspmx.l.google.com
5  alt2.aspmx.l.google.com
10 alt3.aspmx.l.google.com
10 alt4.aspmx.l.google.com
```

Changing nameservers moves *all* DNS, not just the website. **If these MX
records are not recreated in Cloudflare before the nameservers change, email
stops arriving the moment the switch propagates.** This is the single most
damaging thing that can go wrong here — more visible and more immediate than
any ranking effect.

There is currently **no SPF and no DMARC** record. Not caused by this move, but
rebuilding the zone is the natural moment to add SPF at least:

```
TXT  @  v=spf1 include:_spf.google.com ~all
```

---

## What is already handled in code

Do not redo these by hand in Cloudflare — they are in the app and tested.

- **Apex → www.** `next.config.ts` 308s `paulmartynconstruction.com/*` to
  `www.paulmartynconstruction.com/*`, preserving the path. Stops the site
  answering on two hostnames and splitting its own ranking signals.
- **Old Squarespace URLs.** All 18 URLs from the old sitemap are accounted for:
  9 redirect (308), 7 template pages deliberately 404. See `next.config.ts`.
- **Indexing.** Decided per request from the `Host` header in
  `src/middleware.ts`. The live domain is indexable; every other host gets
  `X-Robots-Tag: noindex, nofollow`. **There is no variable to flip at
  cutover** — this is deliberate, see the note at the bottom.
- **sitemap.xml / robots.txt / canonicals** — all present, all pointing at the
  www host.

---

## Cutover steps

### 1. Add the zone to Cloudflare — but do not change nameservers yet

Cloudflare → Add a site → `paulmartynconstruction.com`. Cloudflare scans the
existing zone and imports what it can find.

**Then check the imported records by hand.** The scan is best-effort and misses
records it cannot enumerate. Confirm all five Google MX records are present and
correct before going any further.

### 2. Build the target records in Cloudflare

Read off the Railway dashboard on 2026-08-12. Both custom domains need a CNAME
**and** a verification TXT — the CNAME alone will not activate the domain, and
the two TXT records sit at different labels, so copy the Name column exactly.

| Type | Name | Value | Proxy |
|---|---|---|---|
| CNAME | `@` | `z5qgknmh.up.railway.app` | **DNS only** at first |
| TXT | `_railway-verify` | `railway-verify=842e7bf59c082837e316897d69af8db9d493c5b6bdd45f63d9f58748970039f5` | n/a |
| CNAME | `www` | `1hl2mdge.up.railway.app` | **DNS only** at first |
| TXT | `_railway-verify.www` | `railway-verify=4b723d819aabb5527fb3f338a39f5301d723ea7aca19ef3c62deef05cd18133b` | n/a |
| MX | `@` | `aspmx.l.google.com` — priority **1** | n/a |
| MX | `@` | `alt1.aspmx.l.google.com` — priority **5** | n/a |
| MX | `@` | `alt2.aspmx.l.google.com` — priority **5** | n/a |
| MX | `@` | `alt3.aspmx.l.google.com` — priority **10** | n/a |
| MX | `@` | `alt4.aspmx.l.google.com` — priority **10** | n/a |
| TXT | `@` | `v=spf1 include:_spf.google.com ~all` | n/a |

Notes:

- The `www` CNAME **replaces** the existing `ext-sq.squarespace.com` value.
  That is the record that moves traffic off Squarespace.
- `_railway-verify` and `_railway-verify.www` are different labels. Type them
  exactly; Cloudflare appends the zone automatically, so do not add
  `.paulmartynconstruction.com` yourself.
- The verify TXT values are truncated in Railway's dialog. The full 64-character
  values are above.
- A CNAME on the bare apex is illegal in standard DNS. Cloudflare's CNAME
  flattening handles it, which is one of the better reasons to be on Cloudflare
  here — most DNS hosts cannot do this.

Start **DNS only** (grey cloud). It is the simplest thing that works, and it
keeps Railway's own certificate in play so there is no TLS ambiguity on day
one. Turn the proxy on afterwards as a separate, revertible change — and if you
do, set SSL/TLS mode to **Full (strict)**. Flexible mode will cause redirect
loops against Railway.

### 3. Note the plan limit

The Railway plan is at its custom-domain limit with these two. It does not
affect the cutover, but a third hostname (a staging domain, say) needs an
upgrade first.

### 4. Lower TTLs first (optional but cheap)

If the NS1/Squarespace panel allows it, drop record TTLs to 300s a day ahead.
It shortens the window where a mistake is stuck in caches.

### 5. Change nameservers at the registrar

Squarespace domains panel → nameservers → Cloudflare's assigned pair.

Propagation is usually well under an hour but can take up to 24. During the
overlap some visitors hit Squarespace and some hit Railway — both serve a
working site, so this is untidy rather than broken.

### 6. Verify

```sh
# Nameservers moved
dig +short NS paulmartynconstruction.com

# Email intact — must still list the five Google MX records
dig +short MX paulmartynconstruction.com

# Site answers on www, and the apex redirects to it
curl -sSI https://www.paulmartynconstruction.com/ | head -1
curl -sSI https://paulmartynconstruction.com/services | grep -i location

# Indexing is ON for the live host (expect: no x-robots-tag line at all)
curl -sSI https://www.paulmartynconstruction.com/ | grep -i x-robots-tag

# robots.txt allows, and advertises the sitemap
curl -sS https://www.paulmartynconstruction.com/robots.txt

# Spot-check the redirects that carry ranking
curl -sSI https://www.paulmartynconstruction.com/about | grep -i location
curl -sSI "https://www.paulmartynconstruction.com/new-blog/2025/4/27/how-much-does-a-house-extension-cost-in-2025-real-examples-from-surrey" | grep -i location
```

**Send a test email to `Paul@paulmartynconstruction.com` from an outside
address and confirm it arrives.** Do this before you consider the move done.

### 7. Search Console

No Change of Address request is needed — the domain is not changing, only its
hosting. Do:

- Add/confirm the `www.paulmartynconstruction.com` property.
- Submit `https://www.paulmartynconstruction.com/sitemap.xml`.
- Use URL Inspection → Request Indexing on `/` and
  `/guides/house-extension-costs-surrey`.
- Watch Coverage for a week. A short wobble as Google re-crawls is normal; a
  sustained fall in impressions is not, and would be worth investigating.

---

## Rollback

Point the nameservers back at NS1/Squarespace. The Squarespace site is not
deleted by any of the above, so it starts serving again once DNS propagates.
Keep the Squarespace subscription active until you have watched Search Console
for a couple of weeks — cancelling it is the one step that is genuinely hard to
undo.

---

## Why indexing is not an environment variable

It used to be `SITE_INDEXABLE`, read in the page metadata. That could not work:
every page here is statically prerendered, so the variable was read at **build**
time and its value baked into the HTML. Setting it on Railway at cutover would
have changed nothing, and the site would have gone live still serving
`noindex, nofollow` — quietly deindexing the domain it was meant to protect.

Keying off the request host in middleware is evaluated per request, so it
cannot go stale, and it is self-correcting: preview hosts are noindex
automatically, the live domain is indexable automatically, and there is no
step to forget on the day.

If the canonical host ever changes, change `CANONICAL_HOST` in `src/lib/site.ts`
— it is the single source of truth for the redirect, the canonicals, the
sitemap and the indexing rule.

---

## Appendix: the record set as a checklist

Tick these off in Cloudflare before touching nameservers. The MX rows are the
ones that stop email dying — do not leave them until last.

- [ ] CNAME `@` → `z5qgknmh.up.railway.app` (DNS only)
- [ ] TXT `_railway-verify` → `railway-verify=842e7bf59c082837e316897d69af8db9d493c5b6bdd45f63d9f58748970039f5`
- [ ] CNAME `www` → `1hl2mdge.up.railway.app` (DNS only)
- [ ] TXT `_railway-verify.www` → `railway-verify=4b723d819aabb5527fb3f338a39f5301d723ea7aca19ef3c62deef05cd18133b`
- [ ] MX `@` → `aspmx.l.google.com` (1)
- [ ] MX `@` → `alt1.aspmx.l.google.com` (5)
- [ ] MX `@` → `alt2.aspmx.l.google.com` (5)
- [ ] MX `@` → `alt3.aspmx.l.google.com` (10)
- [ ] MX `@` → `alt4.aspmx.l.google.com` (10)
- [ ] TXT `@` → `v=spf1 include:_spf.google.com ~all`
- [ ] All five MX rows re-read and confirmed against the list above
- [ ] Nameservers changed at the registrar (Squarespace domains panel)
- [ ] Test email sent to `Paul@paulmartynconstruction.com` from outside — arrived
