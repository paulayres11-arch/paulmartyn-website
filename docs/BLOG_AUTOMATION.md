# Blog automation — operating brief

The scheduled agent reads this file first. It is written to be self-contained:
the agent starts each run with no memory of the last one.

**Run cadence:** Monday, Wednesday, Friday, 07:00 UK.
**Output:** one new post, appended to the live site.

---

## 1. What a run does

1. Read this file and `src/components/sites/paulmartyn/blogPosts.tsx`.
2. Pick the **first topic in §5 that is not marked `[done]`**.
3. Research it against reputable UK sources (§3).
4. Write the post (§2) and draw the infographic (§4).
5. Prepend the new post object to `BLOG_POSTS` — **newest first**.
6. Mark the topic `[done]` in §5 with the date.
7. `npm run check` must pass. If it does not, fix it; never commit a red build.
8. Commit and push.

## 2. Post format

- **100–150 words.** Count them. One clear takeaway per post.
- Plain English, **UK spelling**, no jargon. Written for homeowners and
  self-builders, not for other builders.
- Shape: hook → the useful point → a light tie-back to Paul Martyn. Never a
  hard sell. The last line should read like a builder being helpful, not an ad.
- Fill every field in the `BlogPost` type: `slug`, `title`, `category`, `date`
  (ISO, the run date), `seoTitle` (~55–60 chars), `metaDescription` (~150),
  `imageAlt`, `body`, `art`.
- **Name the source in the body**, e.g. "NHBC Standards chapter 4.2 says…".
  It is what makes the post credible rather than merely confident.

## 3. Facts and sources

Check against: gov.uk / Planning Portal, NHBC, British Standards, trade bodies
(FMB, RIBA, RICS), Building Regulations Approved Documents.

Rules that matter:

- **Do not call a British Standard a regulation.** BS 5385 is a code of
  practice, not statute. Getting this wrong is the kind of error a competitor
  enjoys pointing out.
- Give figures as **guides**, with a "get a site-specific assessment" caveat
  wherever the number genuinely varies by site.
- If you cannot verify a fact against a named source, **leave it out**.

## 4. Images

- **Original inline SVG only.** Never take an image from the web — reusing
  stock, product renders or press photography on a commercial site is a real
  legal exposure, and the brief forbids it.
- Square, `viewBox="0 0 400 400"`, so it fits the card grid.
- House style: background `#1f2a30`, amber accent `#e08a2b`, pale text
  `#e8e4dc`, muted `#8fa0a8`, `PAUL MARTYN` in a corner at 11px, letter-spaced.
- Draw the *idea*, not decoration: a seasonal wheel, a wall cutaway, a depth
  chart. If a topic has no natural diagram, pick a different topic.
- `imageAlt` must describe what the graphic shows, in a sentence. It is read by
  search engines and by anyone using a screen reader.

## 5. Topic backlog

Work top to bottom. Mark `[done YYYY-MM-DD]` when published.

- [done 2026-08-13] Bat surveys and seasonal timing
- [done 2026-08-13] Bathroom tanking and waterproofing
- [done 2026-08-13] Trees, clay soil and foundation depth
- [ ] Permitted development: what you can build without planning permission
- [ ] What building control actually signs off, and when
- [ ] Party wall agreements: when you need one and what it costs
- [ ] Structural warranties explained — what is and is not covered
- [ ] Snagging: what to look for at handover
- [ ] Why footings vary in depth across one site
- [ ] Extend or move? The stamp duty maths
- [ ] Insulation choices and what Part L now asks for
- [ ] Timber vs steel for structural openings
- [ ] EPC rules and what they mean for older Surrey homes
- [ ] Material price trends and what is driving them
- [ ] Planning reform: what is changing for householders
- [ ] Listed building consent: what needs it
- [ ] Damp: rising, penetrating and condensation are not the same thing
- [ ] Lead times: the items that hold up a build

When the list runs low, add topics drawn from questions homeowners actually
ask — search "how much does X cost UK" and "do I need planning permission for
X" and write for the real query.

## 6. Local SEO

Pair **service + place** where it reads naturally: Cranleigh, Cobham,
Guildford, Godalming, Surrey. Never stuff keywords — one or two mentions is
plenty, and a post that reads badly ranks badly.

Every post must link to `/contact` (the card already renders this button).

## 7. Guardrails

- Factual and professional. This publishes straight to a live business site
  with no human review, so the bar is "would Paul be comfortable if a client
  read this out to him".
- **Political and topical posts:** permitted only where they connect to
  construction — tariffs and material costs, planning reform, energy rules.
  Report what changed and what it means for a homeowner's project. **Never**
  criticise or characterise a named individual. If a topic cannot be written
  factually and neutrally, skip it and take the next one.
- No claims about Paul Martyn's own prices, warranties or accreditations
  beyond what already appears on the site.

## 8. Deploying

**`git push` does NOT deploy this site.** The Railway service has no GitHub
integration; it deploys only via `railway up` from a machine holding Railway
credentials.

That means a cloud agent can commit a post but **cannot publish it**. For the
schedule to reach the live site, one of these must be true:

1. **Connect the Railway service to this GitHub repo** so a push to `master`
   auto-deploys. This is the fix that makes the automation actually
   autonomous, and it removes a long-standing trap for everyone else too.
2. Or someone runs `railway up --service paulmartyn-website` after each
   commit, which is no longer automation.

Until option 1 is done, the agent's work lands in the repo and waits.
