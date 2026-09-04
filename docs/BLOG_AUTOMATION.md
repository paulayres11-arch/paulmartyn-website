# Blog automation — operating brief

The scheduled agent reads this file first. It is written to be self-contained:
the agent starts each run with no memory of the last one.

**Run cadence:** Monday, Wednesday, Friday, 07:00 UK.
**Output:** one new post, appended to the live site.

> ## THE STANDARD CHANGED ON 2026-09-04. READ THIS FIRST.
>
> Every post on the blog used to be 100–150 words, and all fifteen of them
> shared the `/blog` URL and expanded in place. Between them they ranked for
> nothing, because a 150-word page gives Google nothing to match a real
> question against and fifteen subjects on one URL can only carry one title
> tag.
>
> Both of those are now fixed and **must not be undone**:
>
> - **Posts are 1,400–1,800 words**, structured with `h2` sections, lists,
>   tables, quoted site advice and an FAQ block. Not three paragraphs.
> - **Every post has its own page** at `/blog/{slug}`, generated from
>   `src/app/blog/[slug]/page.tsx`, with its own title, canonical, Article
>   schema, BreadcrumbList and FAQPage schema. `/blog` is the index.
> - **`body` is now `BlogBlock[]`**, not `string[]`. See §2.
> - **Art lives in `blogArt.tsx`**, keyed by slug — not inline in the post.
>
> Paul's instruction, 2026-09-04: *"the blog is to improve SEO builders
> cranleigh or cranleigh builders — make sure you design the blogs to improve
> the seo this is your main goal"*, and *"the blog entries are too small they
> need to be 10 x longer"*, and *"research and discuss customers real pain
> points... show them how to save money or improve and save time... professional
> quotes and tips"*. Everything in §2 comes from that instruction.

---

## 1. What a run does

1. Read this file, `src/components/sites/paulmartyn/blogPosts.tsx` and
   `src/types/paulmartyn.ts` (for the `BlogBlock` union you must build).
2. Work out which stream is due. Count the `[done]` topics across both streams
   in §5: the pattern is **local, local, knowledge, repeating**. Take the
   **first topic in that stream not marked `[done]`**. If that stream is empty,
   follow "If a stream is empty" in §5 — never fail a run for want of a topic.
3. Research it against reputable UK sources (§3).
4. Write the post (§2) and draw the infographic (§4).
5. Add the SVG to `BLOG_ART` in `src/components/sites/paulmartyn/blogArt.tsx`,
   keyed by the new slug, then prepend the new post object to `BLOG_POSTS` —
   **newest first** — referencing it as `art: BLOG_ART["your-slug"]`.
   Set `related` to two or three existing slugs, and add the new slug to the
   `related` array of at least one older post so the link graph is not one-way.
6. Mark the topic `[done]` in §5 with the date, and top the stream up if §5
   says to.
7. `npm run check` must pass. If it does not, fix it; never commit a red build.
8. Append one line to `docs/BLOG_RUN_LOG.md` (§9). Every run writes a line,
   including a run that failed.
9. Commit and push.
10. If anything went wrong, follow §9 before you finish.

## 2. Post format

### Length and structure

- **1,400–1,800 words of body copy.** Count them. This is the single most
  important rule on the page — a short post is a wasted run.
- `body` is a `BlogBlock[]`. The available blocks are defined in
  `src/types/paulmartyn.ts`: `takeaways`, `p`, `h2`, `h3`, `ul`, `ol`, `quote`,
  `callout`, `table`. Use them. A post that is twenty `p` blocks in a row has
  missed the point.
- The shape that works, and that every existing post follows:

  1. A `takeaways` block of 4–5 bullets — the answer, up front, for the reader
     who will not scroll and for the search snippet.
  2. Two or three `p` blocks opening on the **pain point**, in the voice of
     someone who has stood in the room. Not "here is a regulation".
  3. **Five to seven `h2` sections.** Each is a question a homeowner would
     type. These become the on-page contents list and the sitelinks.
  4. At least one `table` — costs, timings, a comparison. Tables are what
     people screenshot and what Google lifts.
  5. At least one `quote` block in Paul's voice, attributed
     `"Paul Martyn, P Martyn Co Ltd"`. First-hand trade experience is the part
     a content farm cannot copy.
  6. At least one `callout` titled "The saving" (or similar) that names a real
     sum of money or a real number of weeks the reader can avoid losing.
  7. A closing `p` that links to `/areas/cranleigh` with the anchor text
     **"builders in Cranleigh"**, in a sentence, not as a footer.
- **4–6 `faqs`**, phrased exactly as a homeowner would type them. These emit
  FAQPage schema and are a large share of what wins featured snippets.
- Fill every field of `BlogPost`: `slug`, `title`, `category`, `date` (ISO, the
  run date), `seoTitle` (~55–60 chars), `metaDescription` (~150), `excerpt`
  (1–2 sentences, shown on the index card), `imageAlt`, `body`, `faqs`,
  `related`, `art`.

### SEO — the main goal

The commercial phrase this site has to win is **"builders Cranleigh" /
"Cranleigh builders"**. The home page and `/areas/cranleigh` target it
directly. A blog post will not, and should not try.

What a post does instead:

- **Ranks for the long question** — "how deep do foundations need to be near a
  tree", "do I need a bat survey for a barn conversion", "what does a bathroom
  cost in Cranleigh". The `seoTitle` should read as the answer to one of those.
- **Passes authority inward** by linking to `/areas/cranleigh` with the anchor
  text "builders in Cranleigh", and to the relevant service, `/pricing` or
  `/guides/house-extension-costs-surrey` where it genuinely helps the reader.
- **Links to two or three sibling posts** in the body, in context — not a link
  dump. Internal links inside prose are worth far more than a related-posts
  list, and the list is generated from `related` anyway.

Inline markup available in any block's text: `**bold**` and
`[label](/internal-path)`. Keep links internal. Do not use a single `*` — the
parser only understands doubled asterisks and a stray one renders literally.

### Voice

- Plain English, **UK spelling**, no jargon, written for homeowners.
- Open on the problem, not the rule. "Every winter we get the same phone call"
  beats "Approved Document F states that".
- Show the money. Every post should tell the reader what to budget and when to
  book it. Cost overruns and delay are the two things homeowners fear most —
  unforeseen costs are the single biggest cause of payment disputes in UK
  construction — so answer those two fears explicitly.
- Never a hard sell. The closing paragraph should read like a builder being
  useful, with the local link inside a sentence that would stand without it.

### Cost figures must agree with the rest of the site

`/pricing` and `/guides/house-extension-costs-surrey` are the source of truth:

| Item | Figure |
| --- | --- |
| Single-storey extension | £2,700 – £3,100 per m² |
| Double-storey extension | £2,600 – £3,000 per m² |
| Kitchen extension incl. fit-out | £3,500 – £4,500 per m² |
| Loft conversion | £2,000 – £2,800 per m² |
| New build | £2,700 per m² |
| Heritage / listed | £3,400 – £4,200 per m² |
| Full bathroom refit | from £9,000 |
| Softwood staircase / oak staircase | from £3,600 / £5,600 |
| Structural engineer | £1,500 – £3,000 |
| Party wall surveyor (on dissent) | from £1,000 |
| Householder planning fee | **£548** from 1 Apr 2026; ~£575 from 8 Dec 2026 |
| Larger rear extension prior approval | **£249**; £310 from 8 Dec 2026 |

If you change one of these, change it in all three places in the same commit.
A site that quotes two different prices for the same thing loses the reader.

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

- **Goes in `src/components/sites/paulmartyn/blogArt.tsx`**, as an entry in
  `BLOG_ART` keyed by the post's slug — not inline in `blogPosts.tsx`. The post
  then references it as `art: BLOG_ART["your-slug"]`. Art and words were split
  on 2026-09-04 because a 1,600-word post and a 100-line SVG in one object made
  the file unsafe to edit.
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

Already published (all fifteen rewritten long-form on 2026-09-04 — do not
re-publish any of these subjects, extend or update them instead):

| Slug | Stream | Published |
| --- | --- | --- |
| `bat-surveys-timing-cranleigh` | local | 2026-08-13 |
| `tiles-are-not-waterproof` | knowledge | 2026-08-13 |
| `trees-and-foundation-depth-cranleigh` | local | 2026-08-13 |
| `bathroom-fitting-cost-cranleigh` | local | 2026-08-13 |
| `extending-1930s-semi-cranleigh` | local | 2026-08-13 |
| `loft-conversions-cranleigh-roof-types` | local | 2026-08-13 |
| `party-wall-notice-timing` | knowledge | 2026-08-13 |
| `extension-value-cranleigh` | local | 2026-08-14 |
| `building-control-completion-certificate` | knowledge | 2026-08-17 |
| `cranleigh-buildings-of-local-merit` | local | 2026-08-17 |
| `cranleigh-neighbourhood-plan-householders` | local | 2026-08-19 |
| `part-l-extension-insulation` | knowledge | 2026-08-21 |
| `cranleigh-conservation-area-consent` | local | 2026-08-24 |
| `cranleigh-settlement-boundary` | local | 2026-08-26 |
| `trickle-vents-approved-document-f` | knowledge | 2026-08-28 |

**The automation stopped after 2026-08-28** — both cloud routines were deleted
and nothing published for a week. They were recreated on 2026-09-04. If the
gap between the newest post's date and today is more than about four days, say
so in the run log: it means the schedule is not firing.

> **Retargeted 2026-08-17.** Three of those local posts were originally written
> for Cobham, Weybridge and Esher. Paul's instruction was to concentrate the
> blog on Cranleigh, so they were rewritten — not merely renamed: the council
> changed from Elmbridge to Waverley, and the Green Belt framing changed to
> Cranleigh's settlement boundary, because Cranleigh's built-up area is not
> Green Belt. **If you ever move a post between towns, change the local facts
> with it.** A post citing the wrong council is worse than a post with no town
> in it at all.

**Two local posts, then one knowledge post, repeating.** Local posts are what
win the searches that bring work in; knowledge posts are what make the site
worth linking to. A blog of only local posts reads as spam; a blog of only
knowledge posts never ranks for "bathroom fitting Cranleigh".

Mark `[done YYYY-MM-DD]` when published. Add more when a stream runs low.

### Stream A — local (service + place) — TWO OUT OF EVERY THREE POSTS

**Weighting: two local posts, then one knowledge post, repeating.** The local
posts are what bring work in. Knowledge posts stop the blog reading as spam and
give people a reason to link to it, but they are the minority.

**CRANLEIGH ONLY. Every local post is a Cranleigh post.**

Paul's instruction, 2026-08-17, tightened the same evening: *"lets just
concentrate on cranleigh — just make the blogs about cranleigh"*. There is no
longer a slot for a wider town. Cranleigh is where the business is based and
what the Google Business Profile address says, and seventeen towns covered once
each ranks for none of them.

**Do not write a local post about Godalming, Haslemere, Farnham, Cobham,
Weybridge, Esher, or any other town — including the villages.** The village
pages are a separate piece of work on the website, not blog posts. If a topic
only works for another town, pick a different topic.

The one exception is a passing mention where it is genuinely true and useful —
"the wider Waverley area", or naming a neighbouring village because that is
where the example is. That is context, not a second target.

**The `AREAS` list in `content.ts` is NOT your topic list.** It records what the
business covers and it feeds the website's area pages. The blog targets one
place. Do not treat the other names in it as a queue to work through — the
village pages are website work, done by hand, not by this routine.

**The heritage angle is the moat.** Cranleigh parish has more than eighty
listed buildings and no competitor found offers heritage work at all. A firm
running a template out of Leatherhead cannot fake Waverley's consent process, a
designation date, or what a timber-framed cottage actually needs. It is the
richest seam here and it is uncontested — lean on it hard.

Vary the service so the blog builds coverage across topics rather than ten posts
about extensions. Each post must answer a genuine question and carry real local
detail — the council, the housing stock, the ground, a conservation area.
**Never the same post with the place name swapped**: that is a doorway page,
Google is good at spotting it, and it can drag the whole site down.

That warning matters *more* now, not less. Concentrating on Cranleigh is exactly
the situation where doorway pages happen by accident. Six Cranleigh posts are
fine if they are six genuinely different questions; two Cranleigh posts that
differ only in the service word are not.

Cranleigh facts worth reusing, all checkable:

- Council is **Waverley Borough Council**. Householder applications are measured
  against its **Residential Extensions SPD, adopted 12 October 2010**.
- The **Cranleigh Neighbourhood Plan was made on 15 July 2024** and is now used
  to determine applications in the parish. This is recent, genuinely local, and
  no national competitor will mention it.
- Cranleigh's built-up area sits **outside** the Green Belt and outside the
  countryside beyond it; the **settlement boundary** is the line that matters.
  Rowly, in the same parish, *is* washed over by Green Belt. Do not write
  "Cranleigh Green Belt" as though the village itself were in it.
- **Cranleigh Conservation Area**: the High Street was designated **October
  1973** and extended **July 1985** and **July 2016**; the appraisal was adopted
  19 July 2016. One of **43** conservation areas in the borough — not 44.
- Inside a conservation area, demolishing a building over **115 cubic metres**
  needs consent in its own right, as does a boundary wall over 1m fronting a
  highway or over 2m elsewhere. Doing it without consent is a criminal offence.
- The parish has **81 nationally listed buildings** per the Cranleigh
  Neighbourhood Plan — 80 Grade II and one Grade II*, the **Church of St
  Nicolas**. (A third-party index says 82; the NP is the local authority, so
  prefer 81, or write "more than eighty".) There are also **174 Buildings of
  Local Merit** — non-designated heritage assets Waverley still weighs. That
  second list is barely known locally and no competitor mentions it. Note the
  spelling: St Nicolas, not Nicholas. Predominantly 15th–17th century
  timber-framed, refronted in brick or stone in the 18th and 19th.
- 92% of Waverley is rural — 61% Metropolitan Green Belt, 31% rural area beyond
  it — so countryside policy is the norm outside the settlements, not a quirk.
- Cranleigh sits on the **Weald clay of the Low Weald**: stiff, fissured and
  prone to shrink-swell, especially near mature trees. This is why foundation
  depth, subsidence and tree proximity are genuinely local topics here rather
  than general ones.

The council is Waverley for every post on this list. If you find yourself
needing a different council's rules, you have picked the wrong topic.

Cranleigh topics — work through these:

- [done 2026-08-13] What a bathroom fitting costs in Cranleigh, and what changes the price
- [done 2026-08-13] Extending a 1930s semi in Cranleigh: what to expect
- [done 2026-08-13] Loft conversions in Cranleigh: which roofs work and which do not
- [done 2026-08-14] Does an extension add value in Cranleigh? What the numbers say
- [done 2026-08-19] The Cranleigh Neighbourhood Plan: what it changed for householders
- [done 2026-08-17] Cranleigh heritage: the second list your house might be on (Buildings of Local Merit)
- [done 2026-08-24] Building inside the Cranleigh Conservation Area: what needs consent
- [done 2026-08-26] Cranleigh's settlement boundary: why which side you are on decides everything
- [ ] Kitchen extensions in Cranleigh: layout before budget
- [ ] Wet rooms in a Cranleigh cottage: what an older building needs
- [ ] Cranleigh's Victorian cottages: what a sympathetic rewire and replumb involves
- [ ] Garden rooms in Cranleigh: permitted development limits, and where they stop
- [ ] Building on the Weald clay around Cranleigh: what it means for your footings
- [ ] Barn conversions around Cranleigh: the planning route
- [ ] Annexes and multigenerational living in Cranleigh: the planning position


### Stream B — knowledge (no place name) — ONE OUT OF EVERY THREE POSTS

These are the posts that earn links and make the blog worth reading. Each one
must rest on a named, checkable source — an Approved Document, an NHBC chapter,
a British Standard, an Act, a trade body's guidance.

- [done 2026-08-13] Tiles are not waterproof, and why that matters
- [done 2026-08-13] The tree in your garden sets your foundation depth
- [done 2026-08-13] Bat surveys: why timing can cost you a year
- [done 2026-08-13] The party wall notice that sets your start date
- [done 2026-08-17] Building control: what a completion certificate is actually for
- [done 2026-08-21] Part L and why your extension needs more insulation than the house
- [done 2026-08-28] Trickle vents, condensation and Approved Document F
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

**The head term is not a blog job.** "builders Cranleigh" / "Cranleigh builders"
is won by the home page and `/areas/cranleigh`. A post's job is to rank for the
long question and pass authority to those pages. Do not try to write a post
targeting the head term — it will read as spam and it will not work.

For every LOCAL post:

- Put the **service and the place in the title** and in the `seoTitle`.
- Link to `/areas/cranleigh` with the anchor text **"builders in Cranleigh"**,
  once, inside a sentence in the closing paragraph. This is the single most
  valuable line in the post from an SEO point of view. It is also the easiest
  thing to get wrong: a footer link with that anchor on every post looks
  automated, a sentence does not.
- Use the place **two or three times in the body, where it reads naturally** —
  in an example, in a reference to local ground conditions or the local
  authority. Never stuff it. A post that reads badly ranks badly.
- Mention something **genuinely local**: Waverley or Guildford Borough
  planning, the clay in the Surrey Hills, conservation areas, a typical local
  house type. This is what a national competitor cannot fake, and it is why
  these posts can win.
- Reference a real price band or timescale where you can, with the
  "site-specific assessment" caveat.

Towns to work through: **there is only one — Cranleigh.** See §5. Vary the
service and the angle, never the town.

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

Confirm the post is live at its own URL —
`https://www.paulmartynconstruction.com/blog/your-slug` — after pushing, not
just on the index. If it is not up after a couple of minutes, say so in the run
summary rather than pushing again.

**The webhook is unreliable.** On 2026-08-17 three pushes produced one deploy.
The cloud sandbox is usually blocked from reaching the live domain, so a missed
webhook looks exactly like a successful post. If you cannot reach the site, say
"live status not verified" in the log — never "published".

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

**On failure, say so in the two places that are read.** There is deliberately
no email alerting — the run log is the record:

1. The `FAILED` line in `docs/BLOG_RUN_LOG.md`, with the actual error in the
   Note column. Not "failed" — the error, and the step it failed at.
2. The top of your final run summary, which is what shows at
   https://claude.ai/code/routines.

Do not retry a failed run more than once. A second identical failure is
information; four commits of thrash is not.
