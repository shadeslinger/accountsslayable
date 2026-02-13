# Accounts Slayable

Marketing site for Accounts Slayable — Google Sheets templates and financial tools for freelancers and 1099 workers.

## Tech Stack

- **Framework**: Next.js 16 (App Router, React 19)
- **Styling**: Tailwind CSS v4
- **Content**: MDX blog posts in `content/blog/`
- **Deployment**: Docker-ready (standalone output)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/            # Pages and layouts (App Router)
  components/     # Reusable React components
  lib/            # Utilities (blog post loading)
content/
  blog/           # MDX blog posts with YAML frontmatter
public/           # Static assets (favicon, images)
```

## Blog Posts

Create `.mdx` files in `content/blog/` with this frontmatter:

```yaml
---
title: "Post Title"
date: "2026-01-15"
description: "Short description for SEO and cards."
tags: ["freelancing", "taxes"]
---
```

## Building for Production

```bash
npm run build
```

Output is in `.next/standalone/` — ready for Docker or self-hosting.

## Environment Variables

See `.env.example` for available configuration. Copy to `.env.local` and fill in values. No env vars are required to run the dev server.
