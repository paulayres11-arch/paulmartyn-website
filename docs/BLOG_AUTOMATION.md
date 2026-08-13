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
- **Illustrated, not flat.** Draw the scene, not just a chart: sky and soil
  layers with roots for a ground post, a night sky behind a seasonal wheel, a
  wall cutaway with the waterproof layer picked out and water running down it.
  Use real colour — sky blue, grass green, soil brown, tile grey — and gradients
  where they help. A flat bar chart is not shareable; an illustration is.
- Keep the accent `#e08a2b` and `PAUL MARTYN` in a corner at ~10px,
  letter-spaced, on every image. That is the through-line.
- Dark slate `#1f2a30` remains the default background for night or underground
  scenes and for caption bands; a light ground is fine when the subject calls
  for it, as long as the amber accent and brand mark are present.
- Draw the *idea*, not decoration. If a topic has no natural picture, pick a
  different topic.
- `imageAlt` must describe what the graphic shows, in a sentence. It is read by
  search engines and by anyone using a screen reader.

## 5. Topic backlog

Already published: bat surveys (2026-08-13), bathroom tanking
(2026-08-13), trees and foundation depth (2026-08-13), bathroom fitting
cost in Cranleigh (2026-08-13).

**Alternate the two streams below**, starting with LOCAL. Local posts are what
win the searches that bring work in; knowledge posts are what make the site
worth linking to and coming back to. A blog of only local posts reads as spam;
a blog of only knowledge posts never ranks for "bathroom fitting Cranleigh".

Mark `[done YYYY-MM-DD]` when published. Add more when a stream runs low.

### Stream A — local (service + place)

The target is simple: if someone searches **"bathroom fitting Cranleigh"** or
**"extension Cobham"**, a Paul Martyn post should be there. Build up several
posts per town over time, each answering a genuine question rather than
repeating the same copy with the place name swapped — Google spots that, and
so do readers.

- [done 2026-08-13] What a bathroom fitting costs in Cranleigh, and what changes the price
- [ ] Extending a 1930s semi in Cobham: what to expect
- [ ] Does an extension add value in Cobham? What the numbers say
- [ ] Loft conversions in Guildford: which roofs work and which do not
- [ ] Listed building work in Godalming: consent, and what it changes
- [ ] Kitchen extensions in Cranleigh: layout before budget
- [ ] Building on clay in the Surrey Hills: what it means for your footings
- [ ] Conservation areas in Waverley: what you can and cannot do
- [ ] Wet rooms in Ewhurst and Cranleigh: what an old cottage needs
- [ ] New builds near Guildford: plot to handover, realistically

### Stream B — knowledge and new technology

Genuinely interesting or genuinely useful. New knowledge, not filler.

- [ ] Air source heat pumps: what they actually need from the building fabric
- [ ] Insulation choices and what Part L now asks for
- [ ] What building control actually signs off, and when
- [ ] Permitted development: what you can build without planning permission
- [ ] Party wall agreements: when you need one and what it costs
- [ ] AI and machine control in construction: what is real on site today
- [ ] New materials worth knowing about: low-carbon concrete, hemp, ICF
- [ ] Structural warranties explained: what is and is not covered
- [ ] Timber vs steel for structural openings
- [ ] Damp: rising, penetrating and condensation are not the same thing
- [ ] Snagging: what to look for at handover
- [ ] Lead times: the items that actually hold up a build
- [ ] MVHR and airtightness: why new homes feel different
- [ ] Solar and battery storage on a retrofit: what is worth it
- [ ] Extend or move? The stamp duty maths
- [ ] Material price trends and what is driving them
- [ ] Planning reform: what is changing for householders
- [ ] EPC rules and what they mean for older Surrey homes

## 6. Local SEO — the point of the exercise

This is the part that earns the money, so do it properly.

**Target the search, not the topic.** Write the post someone would want to read
having typed the query. "bathroom fitting cranleigh cost" wants a number and
what moves it, not a company history.

For every LOCAL post:

- Put the **service and the place in the title** and in the `seoTitle`.
- Use the place **two or three times in the body, where it reads naturally** —
  in an example, in a reference to local ground conditions or the local
  authority. Never stuff it. A post that reads badly ranks badly.
- Mention something **genuinely local**: Waverley or Guildford Borough
  planning, the clay in the Surrey Hills, conservation areas, a typical local
  house type. This is what a national competitor cannot fake, and it is why
  these posts can win.
- Reference a real price band or timescale where you can, with the
  "site-specific assessment" caveat.

Towns to work through: **Cranleigh, Cobham, Guildford, Godalming, Ewhurst,
Woking, Esher, Farnham, Haslemere.**

Every post links to `/contact` (the card renders this automatically).

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
