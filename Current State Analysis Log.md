# Current State Analysis Log

**Date:** 2026-02-13  
**Repo:** `accountsslayable`

## Findings Summary (Repo Analysis)

### What the project currently is
- A Next.js site (App Router) scaffold intended to be the marketing/SEO hub for Accounts Slayable.
- Primary purpose right now: a landing page + product page + MDX blog foundation, aligned with the wedge launch (“1099 Money System”) and list-building.

### Tech stack & structure
- Framework: Next.js (`dev/build/start/lint` scripts present).
- Language: TypeScript.
- Styling: Tailwind CSS v4 via `@tailwindcss/postcss` and `@import "tailwindcss";`.
- Content: MDX-based blog pipeline using:
  - `gray-matter` for frontmatter parsing
  - `next-mdx-remote/rsc` for rendering MDX in RSC
  - Blog files expected in `content/blog/*.mdx`
- SEO basics included:
  - `src/app/robots.ts`
  - `src/app/sitemap.ts` (includes dynamic blog post URLs)
  - Product page includes JSON-LD schema markup

#### Notable directories/files
- `src/app/page.tsx`
  Landing page with value props + pain points + email signup section.
- `src/app/products/1099-money-system/page.tsx`
  Product page with features, FAQs, and purchase CTAs (currently placeholders).
- `src/app/blog/*`
  Blog index + dynamic `[slug]` page.
- `src/components/*`
  `Header`, `Footer`, `Hero`, `EmailSignup`, `BlogPostCard`.
- `src/lib/blog.ts`
  Reads MDX from `content/blog`.
- `PROJECT_CONTEXT.md`
  Strategic overview reference doc.
- `.claude/settings.local.json`
  Local Claude permissions config exists (not a cross-tool reference doc).

### What’s working well (alignment with the strategy)
- Wedge-first messaging is already baked into the UI (“Built for 1099 chaos”, “Buy once, own forever”).
- Email list capture is first-class (dedicated signup component used in multiple places).
- SEO scaffolding is present early (sitemap/robots + blog route structure), aligned with long-tail content strategy.

### Gaps / risks (practical)

#### 1) Monetization links are placeholders
- The product page has `href="#"` links and TODOs for:
  - Gumroad product URL
  - Etsy listing URL
- Until these are real, it’s not a functioning funnel.

#### 2) Email capture is not wired up
- `EmailSignup.tsx` uses `CONVERTKIT_FORM_ACTION = "#"` with a TODO.
- This means you’re not actually collecting emails yet unless you change it.

#### 3) Blog content folder exists but is empty
- `content/blog/` is present, and the site handles the “no posts yet” state.
- You’ll want at least 1–3 starter MDX posts to validate:
  - rendering
  - sitemap entries
  - metadata generation
  - internal linking

#### 4) Repo hygiene / deploy readiness
- `node_modules/` and `.next/` are present locally (both are gitignored — good), but there’s no `README.md` or documented workflow yet.
- `next-env.d.ts` is gitignored. That’s atypical for Next.js projects (it’s usually committed). Not fatal, but can confuse tooling/TS on fresh clones.

#### 5) Analytics & “what brought you here?” tracking not implemented
- The strategy stresses capturing intent at opt-in/checkout.
- The codebase currently has no GA4 integration, no event tracking, and no opt-in question collection.

### Git / project state
- It’s a git repo with an `origin` remote configured: `git@github.com:shadeslinger/accountsslayable.git`.
- GitHub CLI auth is working (you logged in successfully), so you can create repos/PRs/releases, etc.

## Suggested next concrete steps (in-repo)
- Wire up ConvertKit (or your provider) so `EmailSignup` actually submits.
- Replace Gumroad/Etsy `#` URLs with real links.
- Add a minimal `README.md` with:
  - how to run (`npm install`, `npm run dev`)
  - where to edit copy/content
  - how blog posts work (`content/blog/*.mdx`)
- Add 1 starter MDX post to validate the pipeline end-to-end.
- Add analytics instrumentation (GA4 + a simple “what brought you here?” field on the signup form, if that’s your chosen mechanism).
