# Blog automation — operating brief

The scheduled agent reads this file first. It is written to be self-contained:
the agent starts each run with no memory of the last one.

**Run cadence:** Monday, Wednesday, Friday, 07:00 UK.
**Output:** one new post, appended to the live site.

---

## 1. What a run does

1. Read this file and `src/components/sites/paulmartyn/blogPosts.tsx`.
2. Work out which stream is due. Count the `[done]` topics across both streams
   in §5: the pattern is **local, local, knowledge, repeating**. Take the
   **first topic in that stream not marked `[done]`**. If that stream is empty,
   follow "If a stream is empty" in §5 — never fail a run for want of a topic.
3. Research it against reputable UK sources (§3).
4. Write the post (§2) and draw the infographic (§4).
5. Prepend the new post object to `BLOG_POSTS` — **newest first**.
6. Mark the topic `[done]` in §5 with the date, and top the stream up if §5
   says to.
7. `npm run check` must pass. If it does not, fix it; never commit a red build.
8. Append one line to `docs/BLOG_RUN_LOG.md` (§9). Every run writes a line,
   including a run that failed.
9. Commit and push.
10. If anything went wrong, follow §9 before you finish.

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
cost in Cranleigh (2026-08-13), extending a 1930s semi in Cobham
(2026-08-13), loft conversions in Weybridge (2026-08-13), party wall
notice timing (2026-08-13).

**Two local posts, then one knowledge post, repeating.** Local posts are what
win the searches that bring work in; knowledge posts are what make the site
worth linking to. A blog of only local posts reads as spam; a blog of only
knowledge posts never ranks for "bathroom fitting Cranleigh".

Mark `[done YYYY-MM-DD]` when published. Add more when a stream runs low.

### Stream A — local (service + place) — TWO OUT OF EVERY THREE POSTS

**Weighting: two local posts, then one knowledge post, repeating.** The local
posts are what bring work in. Knowledge posts stop the blog reading as spam and
give people a reason to link to it, but they are the minority.

The working areas, taken from `AREAS` in
`src/components/sites/paulmartyn/content.ts` — keep the two lists in step:

> Cranleigh · Ewhurst · Oxshott · Cobham · Weybridge · Esher · Haslemere ·
> Woking · Knaphill · Godalming · Walton-on-Thames · Farnham · Virginia Water ·
> Sunningdale · Windlesham · East Horsley · Claygate

Work through the towns, varying the service so the blog builds coverage across
both rather than ten posts about extensions. Each post must answer a genuine
question and carry real local detail — the council, the housing stock, the
ground, a conservation area. **Never the same post with the place name
swapped**: that is a doorway page, Google is good at spotting it, and it can
drag the whole site down.

Councils, so the detail is right:
Waverley (Cranleigh, Ewhurst, Godalming, Farnham, Haslemere) ·
Elmbridge (Cobham, Esher, Weybridge, Walton-on-Thames, Oxshott, Claygate) ·
Guildford (East Horsley) · Woking (Woking, Knaphill) ·
Runnymede/Surrey Heath (Virginia Water, Sunningdale, Windlesham)

- [done 2026-08-13] What a bathroom fitting costs in Cranleigh, and what changes the price
- [done 2026-08-13] Extending a 1930s semi in Cobham: what to expect
- [done 2026-08-13] Loft conversions in Weybridge: which roofs work and which do not
- [ ] Does an extension add value in Esher? What the numbers say
- [ ] Kitchen extensions in Godalming: layout before budget
- [ ] Listed building work in Farnham: consent, and what it changes
- [ ] Building on clay in Haslemere: what it means for your footings
- [ ] Wet rooms in Ewhurst: what an older cottage needs
- [ ] New builds around Woking: plot to handover, realistically
- [ ] Conservation areas in Waverley: what you can and cannot do
- [ ] Garden rooms and outbuildings in Oxshott: permitted development limits
- [ ] Renovating a period house in Virginia Water: where the money goes
- [ ] Extensions in Walton-on-Thames: access, parking and the practical stuff
- [ ] Bathrooms in Claygate: what a full refit involves
- [ ] Basements and lower ground floors in Sunningdale: is it worth it
- [ ] Barn conversions near Windlesham: the planning route
- [ ] Extending in East Horsley: the Green Belt question
- [ ] Bathroom fitting costs in Knaphill and Woking

### Stream B — knowledge (no place name) — ONE OUT OF EVERY THREE POSTS

These are the posts that earn links and make the blog worth reading. Each one
must rest on a named, checkable source — an Approved Document, an NHBC chapter,
a British Standard, an Act, a trade body's guidance.

- [done 2026-08-13] Tiles are not waterproof, and why that matters
- [done 2026-08-13] The tree in your garden sets your foundation depth
- [done 2026-08-13] Bat surveys: why timing can cost you a year
- [done 2026-08-13] The party wall notice that sets your start date
- [ ] Building control: what a completion certificate is actually for
- [ ] Part L and why your extension needs more insulation than the house
- [ ] Trickle vents, condensation and Approved Document F
- [ ] Structural calculations: what a building control officer looks for
- [ ] Retention, snagging and what "practical completion" means
- [ ] Damp: rising, penetrating and condensation are three different problems
- [ ] Why a steel beam needs a padstone
- [ ] Underfloor heating: screed depth, response time and floor build-up
- [ ] Overheating and Approved Document O in a glazed extension
- [ ] What an SAP assessment is and when you need one
- [ ] Scaffolding, pavement licences and the neighbour conversation
- [ ] Fire doors and escape routes in a loft conversion

### If a stream is empty

**Never fail a run for lack of a topic, and never publish a second post on a
topic already marked `[done]`.** If the stream you are due to write from has no
unmarked topic left:

1. Write a topic that fits the stream, following every rule in this file, and
   add it to the list above already marked `[done]` with today's date.
2. In the same commit, **top the stream back up to at least ten unmarked
   topics.** Keep them specific and genuinely different from each other.

Do the same top-up whenever a stream drops below **six** unmarked topics, so it
never runs to empty in the first place.

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

Towns to work through: the `AREAS` list in `content.ts` — currently Cranleigh,
Ewhurst, Oxshott, Cobham, Weybridge, Esher, Haslemere, Woking, Knaphill,
Godalming, Walton-on-Thames, Farnham, Virginia Water, Sunningdale, Windlesham,
East Horsley and Claygate. If that list changes on the site, follow it.

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

**A push to `master` publishes the post.** Since 2026-08-13 the Railway service
`paulmartyn-website` is connected to this GitHub repo and auto-deploys from
`master`. A deploy takes roughly 40-60 seconds from push to live.

So the agent's job ends at the push — there is no separate publish step. Before
pushing, run `npm run check`; never push a red build, because the deploy is
automatic and a broken commit reaches the live site.

`railway up --service paulmartyn-website` still works as a manual fallback from
a machine holding Railway credentials, but a cloud agent will not have those and
does not need them.

Confirm the post is live at `https://www.paulmartynconstruction.com/blog` after
pushing. If it is not up after a couple of minutes, say so in the run summary
rather than pushing again.

## 9. Leaving a trail, and saying when it broke

Nobody watches these runs. A run that quietly does nothing looks exactly like a
run that never happened, so **every run must leave a record in the repo.**

**Always** append one line to `docs/BLOG_RUN_LOG.md`, in this shape:

```
| 2026-08-13 | OK      | party-wall-notice-timing | knowledge | live |
| 2026-08-15 | FAILED  | —                        | local     | npm run check failed: type error in blogPosts.tsx |
```

Commit that line **even when the run failed**. A failed run should still push
the log line, as long as the working tree is otherwise clean — that line is the
only signal Paul gets. Never push a broken site to record a failure: if the
build is red, revert the post changes, keep the log line, and push that alone.

**On failure, also raise it.** The Gmail connector attached to this routine can
create drafts but **cannot send mail**, so:

1. Create a Gmail **draft** to `paulayres11@gmail.com`, subject
   `BLOG AUTOMATION FAILED — <date>`, body saying which topic, which step, and
   the actual error. It will sit in Drafts, not the inbox.
2. State the failure plainly at the top of your final run summary, which is
   what shows at https://claude.ai/code/routines.

Do not retry a failed run more than once. A second identical failure is
information; four commits of thrash is not.
