# Opportunities

Living strategy + growth radar for Accounts Slayable. This file is maintained
jointly by Adam and the site-builder bot. The bot reads it at the start of
every run and should refresh it at least once a week (spawning an analyst
subagent to do research via WebSearch/WebFetch).

**Last reviewed:** 2026-04-11 (initial scaffold, manual)
**Review cadence:** weekly — bot refreshes on the first run after 7 days since
the last `Last reviewed` date.

---

## 0. Scope of the site (April 2026)

Accounts Slayable writes about personal finance broadly, not just 1099/freelance.
The 1099 Money System stays the flagship product and the wedge that grounds
everything, but the content and audience are wider:

| Pillar | Topics |
|---|---|
| **Personal Finance** | Budgeting, debt, saving, credit basics, homebuying, subscriptions |
| **Points & Rewards** | Credit card strategy, travel hacking, cashback stacking, signup bonuses |
| **Freelance & 1099** | Quarterly taxes, income chaos, Schedule C, invoicing, business expenses |
| **AI + Fintech** | AI tools for money, LLM experiments, fintech product reviews, automation |
| **Side Hustles & Biz** | Starting, running small biz, "is this worth it?" math, side income tracking |
| **Money Mindset** | Psychology, boundaries, queer-friendly planning, anti-shame finance |

Every piece of content should map to one primary pillar. Cross-pillar pieces
are great (e.g., "AI tools for tracking credit card rewards" = AI + Points).

---

## 1. Quick wins (next 30 days)

High-leverage, low-effort things that compound once shipped. Pick from here
when the bot runs unless a Phase 1 task is still undone.

- [ ] **Add a `/points` or `/rewards` landing page** — dedicated hub for
      credit card rewards content. SEO anchor for the pillar.
- [ ] **Ship 3 cornerstone posts** — one per new pillar (Points, AI+Fintech,
      Side Hustles). These become hubs that future posts link back to.
- [ ] **Add JSON-LD `Article` structured data** to all blog posts (currently
      blog uses minimal schema)
- [ ] **Add OpenGraph images** — even auto-generated ones via `@vercel/og`.
      Huge impact on share CTR on X/Threads/Discord/etc.
- [ ] **Add an RSS feed** at `/rss.xml` or `/feed.xml` — trivial in Next.js,
      big for the kind of audience that reads finance blogs.
- [ ] **Newsletter archive page** — `/newsletter` showing past issues
      (improves SEO + gives email CTA more credibility).
- [ ] **Tag system on the blog** — surface pillar tags so readers can browse
      by interest.
- [ ] **Footer: real social links** (currently marked "coming soon").

---

## 2. Content opportunities

### High-priority cornerstone topics (write these first)

Each of these is a "pillar post" — long-form, keyword-rich, becomes the
permanent reference. Aim for 1500–2500 words, 3+ internal links, clear H2s.

| Pillar | Topic | Primary keyword | Why |
|---|---|---|---|
| Points & Rewards | "The No-BS Guide to Credit Card Rewards for People Who Aren't Points Nerds" | `credit card rewards for beginners` | Huge untapped SEO, entry point to the pillar |
| AI + Fintech | "I Tried 7 AI Tools for Personal Finance So You Don't Have To" | `best AI tools personal finance` | Evergreen, comparison posts dominate this keyword space |
| AI + Fintech | "How to Use ChatGPT as Your Budget Coach (Without Giving It Your Bank Login)" | `ChatGPT for budgeting` | Safety angle is underserved, brand voice differentiator |
| Side Hustles & Biz | "The Side Hustle Math: When Is It Actually Worth It?" | `side hustle worth it calculator` | Cross-links perfectly to 1099 Money System |
| Personal Finance | "The $0 Budgeting Stack: 5 Free Tools That Beat Paid Apps" | `free budgeting tools 2026` | Hits the anti-subscription angle, very shareable |
| Money Mindset | "Finance Advice for People Who Hate Finance Advice" | `personal finance without shame` | Brand voice lives or dies here |
| Freelance & 1099 | "Quarterly Tax Math: The Exact Formula I Use" | `freelancer quarterly tax calculation` | Drives toward the flagship product |

### Rotating blog cadence (bot picks one per run)

Do not repeat a topic from `content/blog/`. Rotate pillars — never two in a
row from the same one. Current post count per pillar should stay roughly
balanced as the archive grows.

### Trending topics to watch (refresh weekly)

- AI coding tools for financial modeling (Cursor, Claude, Copilot — who wins for spreadsheet work?)
- CFPB rule changes and how they affect consumer banking
- Credit card issuer signup bonus trends — big moves get lots of search traffic
- Tax software reviews each January/February (seasonal spike)
- YNAB / Monarch / Copilot Money pricing changes (we are the anti-subscription take)

---

## 3. Revenue opportunities

### Affiliate programs to pursue

**Credit card affiliates** are the single biggest revenue opportunity for a
broad personal finance site. Avg payout is $50–$500 per approved application.

| Target | Rough payout | How to access |
|---|---|---|
| Bankrate CardRatings network | $50–$500/approved | Apply at CardRatings.com / Bankrate affiliate |
| Credit Karma affiliate (Intuit) | Varies | Impact Radius |
| The Points Guy affiliate network | Varies | TPG partnerships (harder to get in) |
| Specific issuer direct programs (Chase, Amex) | Hardest to access | Typically only via networks unless large traffic |

**Other affiliate opportunities:**

- Gumroad affiliate marketplace — our own + other creators' products
- YNAB has an affiliate program (ironically — we can still be honest about it)
- Tiller Money affiliate
- NerdWallet partner programs (requires scale)
- Camera/desk gear affiliates (Amazon) for "side hustle starter kit" posts

### Product opportunities beyond 1099 Money System

- **Credit Card Rewards Tracker** — Google Sheet for tracking signup bonuses,
  minimum spends, annual fee renewals, and net-value per card. $19–$29.
- **AI Finance Prompt Library** — Curated prompts for budgeting, tax planning,
  and investment research with Claude/ChatGPT. $9–$19 as a lead magnet or
  upsell.
- **Side Hustle Income Tracker** — Multi-gig income + hours-worked sheet that
  calculates effective hourly rate. $15–$19.
- **Travel Rewards Planner** — Points-to-dollars calculator + redemption
  tracker. $19–$29.
- **Homebuying Readiness Sheet** — Secondary wedge from the original
  PROJECT_CONTEXT plan. Revisit when there's traffic to validate it.

### Direct sponsorship

Once there's traffic (rough gut check: 10k/mo sessions), pursue:

- Newsletter sponsorships (Sponsr.is, Passionfroot, direct)
- Tool review sponsorships from fintech startups

---

## 4. SEO target keywords (long-tail)

High-intent, low-competition targets. Update weekly as the bot finds new ones.

- `best AI tool for tracking receipts 2026`
- `ChatGPT financial planning prompts`
- `credit card rewards tracker spreadsheet`
- `freelancer budget google sheets template`
- `quarterly tax calculator freelancer`
- `travel rewards points stacking guide`
- `side hustle profitability calculator`
- `YNAB alternative free`
- `budget without a subscription`
- `AI assistant for small business accounting`

---

## 5. Competitor watch

Who's playing in the same space, what they ship, and where our gap is.

| Competitor | What they do well | Our angle |
|---|---|---|
| The Points Guy | Credit card authority, polished brand | We're funnier, less corporate, and willing to say "this card is not worth it" |
| NerdWallet | SEO dominance | We own voice and personality they can't match |
| YNAB | Community and methodology | We're the anti-subscription, anti-guilt version |
| Ramit Sethi / IWT | Brand voice and personality | He's broader + courses; we're tools-first |
| Frugalwoods / Mr Money Mustache | Long-form personality blogs | They're FIRE-coded; we're queer-friendly and modern |
| r/personalfinance | Free, massive | We're curated, less preachy, have working templates |

---

## 6. Backlog grooming rules

- Anything in **Quick wins** that's been sitting >30 days should be either
  shipped or moved to a "deferred" list with a reason.
- If a content opportunity was tried and the post underperformed, log it in
  `## 8. Tried & bailed` with date and hypothesis.
- Revenue opportunities need a one-line "why now" before they move from
  opportunities to in-progress.

---

## 7. Measurement & feedback loops

_Once GA4 is installed and there's traffic, this section fills in. Until then,
we're flying on judgment._

Tracking gaps to close:
- [ ] GA4 placeholder → real property
- [ ] Search Console verification for accountsslayable.com
- [ ] Kit (ConvertKit) signup events tracked end-to-end
- [ ] Simple dashboard: signups/day, top pages, top referrers

---

## 8. Tried & bailed

_Log experiments that didn't pan out. Helps future-us not repeat them._

Nothing yet.

---

## 9. Change log

- 2026-04-11 — Initial scaffold. Broadened scope from 1099-only to 6-pillar
  strategy. Identified credit card affiliates as the biggest latent revenue
  opportunity.
