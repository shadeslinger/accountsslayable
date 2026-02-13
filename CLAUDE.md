# Accounts Slayable — Claude Code Context

## About
Marketing site and content hub for Accounts Slayable, a digital financial planning brand selling Google Sheets templates to freelancers and 1099 workers. Currently pre-launch, focused on the "1099 Money System" wedge product.

**Owner:** Adam
**Domain:** accountsslayable.com
**Repo:** git@github.com:shadeslinger/accountsslayable.git
**Status:** Pre-launch scaffold — foundation is solid, monetization/email integrations are placeholder

## Tech Stack
- **Framework:** Next.js 16 (App Router) with React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss` — theme defined in `src/app/globals.css` using `@theme` block
- **Content:** MDX blog pipeline — `gray-matter` for frontmatter, `next-mdx-remote/rsc` for server-side rendering
- **Fonts:** Montserrat (headlines), Open Sans (body) via `next/font/google`
- **Output:** Standalone (`next.config.ts`) — Docker/self-host ready
- **Path alias:** `@/*` maps to `./src/*`

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint

## Project Structure
```
src/
  app/
    page.tsx                          # Landing page
    layout.tsx                        # Root layout (fonts, metadata, Header/Footer)
    globals.css                       # Tailwind v4 theme colors
    robots.ts                         # SEO robots.txt
    sitemap.ts                        # Dynamic sitemap (includes blog posts)
    blog/
      page.tsx                        # Blog index
      [slug]/page.tsx                 # Dynamic blog post (MDX rendering)
    products/
      1099-money-system/page.tsx      # Product sales page with JSON-LD
  components/
    Header.tsx                        # Sticky nav with mobile hamburger (client component)
    Footer.tsx                        # Footer with disclaimers
    Hero.tsx                          # Landing page hero section
    EmailSignup.tsx                   # Email capture form (client component)
    BlogPostCard.tsx                  # Blog post preview card
  lib/
    blog.ts                           # MDX file reader — getAllPosts(), getPostBySlug(), getAllSlugs()
content/
  blog/*.mdx                         # Blog posts with YAML frontmatter (title, date, description, tags)
```

## Brand & Design
- **Sage green:** `#87A96B` (primary — growth/money)
- **Cream:** `#F7F5F3` (background — simplicity)
- **Coral:** `#FF6B6B` (accent/CTAs — energy)
- **Charcoal:** `#2D2D2D` (text)
- Each color has light/dark variants defined in the `@theme` block
- Voice: playful, comedic, approachable — not corporate. "Slay your accounts, not your sanity."

## Known Placeholders (Not Yet Wired Up)
These are intentional TODOs, not bugs:
- `src/components/EmailSignup.tsx` — `CONVERTKIT_FORM_ACTION = "#"` (needs real ConvertKit form endpoint)
- `src/app/products/1099-money-system/page.tsx` — 3x `href="#"` for Gumroad/Etsy purchase links
- `src/components/Footer.tsx` — Social media links marked "coming soon"
- No analytics (GA4) or event tracking installed yet

## Conventions
- Components use default exports
- Server components by default; only add `"use client"` when state/interactivity is needed
- Blog posts live in `content/blog/*.mdx` with required frontmatter: `title`, `date`, `description`, `tags`
- SEO metadata exported from each page via Next.js Metadata API
- Product pages include JSON-LD structured data
- Legal disclaimers required on product pages: "For informational purposes only. Not financial, tax, or legal advice."
- Google Sheets trademark disclaimer in footer

## Content Strategy Reference
See `PROJECT_CONTEXT.md` for full business strategy, audience targeting, pricing, competitive landscape, and launch rollout plan. Key points:
- **Primary audience:** 1099 workers / freelancers
- **Wedge product:** "The 1099 Money System" template bundle at $29
- **Pricing model:** One-time purchase (anti-subscription positioning)
- **Value anchoring:** $29 vs YNAB $99/yr, Monarch $100/yr
