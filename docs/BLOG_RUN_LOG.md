# Blog run log

One line per scheduled run of the blog agent, newest at the bottom. Written by
the agent itself — see §9 of `BLOG_AUTOMATION.md`.

This file exists because nobody watches the runs. A run that quietly does
nothing is indistinguishable from a run that never fired, unless it leaves a
line here. **A gap in the dates is the thing to look at.**

There is no email alerting by design. This log and the run summaries at
https://claude.ai/code/routines are the whole reporting story.

Runs are scheduled Monday, Wednesday and Friday at 07:00 UK.

| Date | Result | Slug | Stream | Note |
| --- | --- | --- | --- | --- |
| 2026-08-13 | OK | bathroom-fitting-cost-cranleigh | local | first scheduled run, backfilled here |
| 2026-08-13 | OK | extending-1930s-semi-cobham | local | written by hand, not by the routine |
| 2026-08-13 | OK | loft-conversions-weybridge-roof-types | local | written by hand, not by the routine |
| 2026-08-13 | OK | party-wall-notice-timing | knowledge | written by hand, not by the routine |
| 2026-08-14 | OK | extension-value-esher | local | pushed to master, build green; live status not verifiable from this sandbox (network egress blocked) |
| 2026-08-15 | WATCHDOG | - | - | 5 log lines in last 7d, 0 failed; but only 1 (Fri 08-14, extension-value-esher) is a genuine scheduled run — the automation and its brief were only set up 2026-08-13, so Mon 08-10 and Wed 08-12 predate it and the other 4 lines are hand-backfilled, not routine output; backlog A=14 B=12 (both healthy); could not cross-check any post against the live site — proxy returns 403 for paulmartynconstruction.com from this sandbox (confirmed via /__agentproxy/status, same block as the prior run's note), so live-match is unverified, not confirmed failed; all 8 slugs in blogPosts.tsx do match the log + brief's "already published" list |
| 2026-08-17 | OK | building-control-completion-certificate | knowledge | npm run check green; pushed to master; live status not verifiable from this sandbox (WebFetch egress blocked for gov.uk/council/target site domains) |
| 2026-08-17 | OK | cranleigh-buildings-of-local-merit | local | written by hand at Paul's request, not by the routine; heritage angle, quotes the Cranleigh Society |
