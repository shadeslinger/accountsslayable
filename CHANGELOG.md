# Accounts Slayable — Changelog

All notable changes to this project are documented here. This log tracks progress from initial scaffold through launch.

---

## 2026-02-13 — Session 4: Kit Stabilization & Repo Cleanup

### Added
- `npm run test:kit` script for faster local Kit integration diagnostics
- `KIT_DEBUG_TOKEN` support for safely gating `/api/kit-status` in production

### Updated
- `EmailSignup` UX now distinguishes active subscriptions from pending confirmation and prompts users to confirm inbox email when needed
- `subscribe.ts` now normalizes/validates email input, validates numeric `KIT_FORM_ID`, and returns clearer Kit-specific errors for misconfiguration
- `/api/kit-status` now performs a live Kit forms check and reports whether the configured form exists for the configured API key
- `CLAUDE.md` linting note corrected to ESLint 9

### Removed
- `CODEBASE_ANALYSIS.md` and `Accounts Slayable Website Plan.md` from repository root to keep docs focused on active project context files

### Fixed
- Production Kit failures caused by mismatched environment variables (`KIT_FORM_ID` set incorrectly) were diagnosed and resolved
- Misleading "success" messaging for unconfirmed Kit signups (inactive subscriptions) was replaced with actionable confirmation guidance

---

## 2026-02-13 — Session 3: Core Pages & Deployment Fixes

### Added
- `/shop` — Product catalog grid with "coming soon" placeholder for future templates
- `/about` — Founder story page with placeholder copy (brackets for Adam to fill in), values section
- `/start-here` — New visitor onboarding guide with numbered steps and inline email signup
- `/contact` — Contact info page with email and template support links

### Updated
- Header nav: Home | Shop | Blog | About | Start Here (replaced direct product link)
- Footer: Added Shop, About, Start Here, Contact to Quick Links
- `sitemap.ts` — All new pages added with appropriate priorities
- `CLAUDE.md` — Updated project structure and placeholders sections

### Fixed
- ESLint downgraded from 10 to 9.x — `typescript-eslint` peer dependency conflict was failing Vercel builds
- Added `KIT_FORM_ID` and `KIT_API_KEY` to Vercel environment variables — email signup was returning "not configured" on production because env vars only existed in local `.env.local`
- Kit API v4 auth header — was using `Authorization: Bearer` (OAuth-only) instead of `X-Kit-Api-Key` header, causing 401 errors
- Switched from Kit v4 API to Kit form submission endpoint (`app.kit.com/forms/{id}/subscriptions`) — v4 API subscriber endpoints don't work with API key auth despite docs. Form endpoint is the same one Kit's own embed JS uses, no API key needed

### Deployment
- DNS configured and pointing to Vercel
- Site live at accountsslayable.com
- Vercel auto-deploys from `main` branch

---

## 2026-02-13 — Session 2: Tidying & Tooling

### Added
- `@tailwindcss/typography` plugin — MDX blog posts and privacy page now render prose styles correctly
- ESLint flat config (`eslint.config.mjs`) — `typescript-eslint` + `@next/eslint-plugin-next`, lint passes clean
- This CHANGELOG.md for tracking progress across sessions

### Updated
- `CLAUDE.md` — reflects current state: EmailSignup wired to Kit API, new pages (privacy, error, 404), updated project structure, added "What's Working" section
- `package.json` — lint script now calls `eslint src/` directly (Next.js 16 removed `next lint` subcommand)
- `globals.css` — added `@plugin "@tailwindcss/typography"` for Tailwind v4

### Removed
- `Current State Analysis Log.md` — superseded by CLAUDE.md and PROJECT_CONTEXT.md

---

## 2026-02-13 — Session 1: Foundation Build

### Added
- Initial Next.js 16 scaffold with App Router, React 19, TypeScript strict mode
- Landing page with value props, pain points, and email signup
- Product page for "1099 Money System" with JSON-LD, FAQ, comparison pricing
- MDX blog pipeline (gray-matter + next-mdx-remote/rsc) with sample post
- Kit (ConvertKit) v3 API integration via server action (`lib/subscribe.ts`)
- Security headers in `next.config.ts` (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- Branded error and 404 pages
- Privacy policy page
- SEO: robots.ts, sitemap.ts with dynamic blog URLs, metadata on all pages
- Mobile-responsive header with hamburger nav
- `CLAUDE.md` and `PROJECT_CONTEXT.md` for project context

### Known Placeholders
- 3x `href="#"` on product page (Gumroad/Etsy purchase links)
- Social media links in footer (coming soon)
- No GA4 analytics yet
