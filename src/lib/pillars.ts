import { getAllPosts, type BlogPost } from "@/lib/blog";

export type PillarAccent = "sage" | "coral";

export interface Pillar {
  slug: string;
  number: string;
  name: string;
  /** Short one-liner for pillar cards and hero blurbs. */
  tagline: string;
  /** One-sentence description for list/meta contexts. */
  description: string;
  /** Longer intro paragraph for the pillar landing page. */
  intro: string;
  /** Bullet list of what readers will find in this pillar. */
  themes: string[];
  /** Blog post tags that count as belonging to this pillar (case-insensitive). */
  tags: string[];
  accent: PillarAccent;
  /** Slugs of 2–3 related pillars to cross-link at the bottom. */
  relatedSlugs: string[];
  /** Optional product link — used for pillars that have a flagship product. */
  product?: {
    href: string;
    name: string;
    blurb: string;
    price: string;
  };
  /** Optional placeholder copy if no posts exist yet. */
  emptyState: string;
}

export const PILLARS: Pillar[] = [
  {
    slug: "personal-finance",
    number: "01",
    name: "Personal Finance",
    tagline:
      "Budgets, debt, saving, credit, homebuying. The part of money that does most of the work.",
    description:
      "Foundational personal finance for people who want a real system instead of another generic tip.",
    intro:
      "Personal finance is supposed to be boring in a good way. Predictable, low-drama, running quietly in the background while you get on with your life. Most of the advice out there either patronizes readers or sells them a subscription. This pillar goes a different way: practical, honest, and written like you have a brain and a calculator.",
    themes: [
      "Budgets you'll actually stick to (without logging every latte)",
      "Paying down debt without the shame spiral",
      "Credit scores, credit reports, and what matters",
      "Saving for real goals: emergencies, homes, escape plans",
      "Negotiating subscriptions and killing zombie charges",
      "Investing basics, explained without a Warren Buffett quote",
    ],
    tags: [
      "personal finance",
      "budgeting",
      "budget",
      "debt",
      "saving",
      "savings",
      "credit",
      "credit score",
      "homebuying",
      "subscriptions",
      "investing",
    ],
    accent: "sage",
    relatedSlugs: ["points-and-rewards", "money-mindset"],
    emptyState:
      "Writing for this pillar is in the oven. Drop your email below and you'll get the first posts as they ship.",
  },
  {
    slug: "points-and-rewards",
    number: "02",
    name: "Points & Rewards",
    tagline:
      "Travel hacks, cashback stacking, and the art of not paying retail for anything you didn't have to.",
    description:
      "Credit card strategy, travel rewards, and cashback, explained without the gatekeeping.",
    intro:
      "There's a whole subculture of people flying business class on points they earned buying groceries. The game isn't gatekept so much as drowning in acronyms. Learn the shape of it once and you can squeeze meaningful value out of your normal spending without becoming a spreadsheet hermit. We cover which cards pull their weight, which are tourist traps, and when to stop playing altogether.",
    themes: [
      "Which cards earn their annual fee and which ones don't",
      "Signup bonus math: what a bonus is worth in actual dollars",
      "Travel hacking without turning it into a second job",
      "Cashback stacking with shopping portals and card multipliers",
      "Minimum spends, annual fee timing, and downgrade paths",
      "When to skip points entirely",
    ],
    tags: [
      "points",
      "rewards",
      "credit cards",
      "credit card",
      "travel",
      "travel hacking",
      "cashback",
      "signup bonus",
    ],
    accent: "coral",
    relatedSlugs: ["personal-finance", "ai-and-fintech"],
    emptyState:
      "The first cornerstone post for this pillar is being drafted. Join the list below and we'll send it when it drops.",
  },
  {
    slug: "freelance-and-1099",
    number: "03",
    name: "Freelance & 1099",
    tagline:
      "Quarterly taxes, income tracking, and surviving Schedule C with your wits intact.",
    description:
      "Everything 1099 workers, freelancers, and consultants need to run a clean money system.",
    intro:
      "This is where Accounts Slayable started: a field guide for anyone who gets a 1099 instead of a W-2 and has to figure out the whole parade of things employers normally handle. Withholding, benefits, retirement, deductions, quarterly estimates. None of it is impossibly complex, but nobody teaches it, and the spreadsheets most freelancers use for it are held together with tape.",
    themes: [
      "Quarterly tax set-asides that work (the math, not the vibes)",
      "Tracking income across clients, platforms, and payment methods",
      "Expense categories that match Schedule C instead of your instincts",
      "Invoice follow-up without feeling like a nag",
      "Retirement accounts for freelancers: SEP-IRA, Solo 401k, the whole menu",
      "The mental game of irregular income",
    ],
    tags: [
      "freelancing",
      "freelance",
      "1099",
      "taxes",
      "tax",
      "quarterly taxes",
      "schedule c",
      "invoicing",
      "consulting",
      "self-employed",
    ],
    accent: "sage",
    relatedSlugs: ["side-hustles", "personal-finance"],
    product: {
      href: "/products/1099-money-system",
      name: "The 1099 Money System",
      blurb:
        "The flagship template bundle. Six interlocking Google Sheets covering income, taxes, invoices, expenses, and receipts for 1099 workers.",
      price: "$29 one-time",
    },
    emptyState:
      "More posts are in progress. The template bundle that started this pillar, the 1099 Money System, is live below.",
  },
  {
    slug: "ai-and-fintech",
    number: "04",
    name: "AI + Fintech",
    tagline:
      "We try the tools so you don't have to. Some are magic. Some are wrappers. We say which.",
    description:
      "AI tools for money, LLM experiments, fintech product reviews, and automation worth building.",
    intro:
      "Every other week a new AI-powered finance tool launches promising to solve everything. Most are wrappers around ChatGPT with a fresh coat of paint. A few are worth paying for. This pillar is where we work out which is which, plus honest takes on the big fintech players (YNAB, Monarch, Copilot Money, the others) and the automation workflows you can build yourself with an hour and a prompt.",
    themes: [
      "Reviews of AI-powered finance tools, from useful to useless",
      "Using ChatGPT, Claude, and Gemini as a budget coach (no bank login required)",
      "Honest deep-dives on YNAB, Monarch, Copilot Money, and the rest",
      "Finance automations you can build yourself",
      "AI-assisted spreadsheet work for the tedious parts",
      "Industry takes: real vs. hype",
    ],
    tags: [
      "ai",
      "artificial intelligence",
      "llm",
      "chatgpt",
      "claude",
      "gemini",
      "automation",
      "fintech",
      "tools",
      "app review",
    ],
    accent: "coral",
    relatedSlugs: ["personal-finance", "side-hustles"],
    emptyState:
      "The cornerstone post for this pillar is a comparison of seven AI tools for personal finance. It's in the queue. Sign up below to get it first.",
  },
  {
    slug: "side-hustles",
    number: "05",
    name: "Side Hustles & Biz",
    tagline:
      'Side gigs, small business, and honest "is this worth my time?" math.',
    description:
      "Side hustles and small business, with real numbers on whether they're paying you a fair rate.",
    intro:
      "Every side hustle guide promises $3,000 a month flipping something on Etsy. Almost none of them do the math on whether you're earning minimum wage after costs. This pillar runs the math first and decides second. Expect honest write-ups on side income, the economics of small businesses, and the question everyone avoids: is this a business, or a slow bleed?",
    themes: [
      "Profitability math on popular side hustles",
      "Effective hourly rate, the only side hustle metric that matters",
      "Starting a small business without burning out",
      "Tracking income, expenses, and time across multiple gigs",
      "Knowing when to quit a hustle that isn't working",
      "LLC vs. sole prop vs. S-corp, in two minutes",
    ],
    tags: [
      "side hustle",
      "side hustles",
      "entrepreneurship",
      "small business",
      "side income",
      "business",
    ],
    accent: "sage",
    relatedSlugs: ["freelance-and-1099", "ai-and-fintech"],
    emptyState:
      "The first post in this pillar is a side hustle profitability calculator with honest math. It's in progress. Join the list to get it first.",
  },
  {
    slug: "money-mindset",
    number: "06",
    name: "Money Mindset",
    tagline:
      "Finance without shame, gendered defaults, or a guilt trip about your coffee.",
    description:
      "The psychological side of money: boundaries, anxiety, habits, and the cultural scripts we inherit.",
    intro:
      "The hard part of personal finance isn't usually math. It's psychology, shame, and the inherited stories about money that were never yours to begin with. This pillar is where we get honest about the feelings side without slipping into self-help platitudes. Queer-friendly, judgment-free, and uninterested in telling anyone to visualize wealth.",
    themes: [
      "Financial anxiety and what helps with it",
      "Money boundaries with clients, friends, family, and yourself",
      "The cultural scripts that make personal finance feel gatekept",
      "Queer-friendly planning with no 'head of household' defaults",
      "Building money habits that don't depend on willpower",
      "Lifestyle inflation, FIRE, and what 'enough' looks like",
    ],
    tags: [
      "mindset",
      "money mindset",
      "boundaries",
      "psychology",
      "adulting",
      "anxiety",
      "habits",
    ],
    accent: "coral",
    relatedSlugs: ["personal-finance", "freelance-and-1099"],
    emptyState:
      "Posts for this pillar are being drafted. Subscribe below to get them as they ship.",
  },
];

export function getAllPillars(): Pillar[] {
  return PILLARS;
}

export function getPillarBySlug(slug: string): Pillar | undefined {
  return PILLARS.find((p) => p.slug === slug);
}

export function getRelatedPillars(slug: string): Pillar[] {
  const pillar = getPillarBySlug(slug);
  if (!pillar) return [];
  return pillar.relatedSlugs
    .map((s) => getPillarBySlug(s))
    .filter((p): p is Pillar => p !== undefined);
}

/**
 * Return blog posts whose tags overlap with a pillar's tag list.
 * Tag matching is case-insensitive and exact (not substring).
 */
export function getPostsForPillar(slug: string): BlogPost[] {
  const pillar = getPillarBySlug(slug);
  if (!pillar) return [];
  const pillarTagSet = new Set(pillar.tags.map((t) => t.toLowerCase()));
  return getAllPosts().filter((post) =>
    post.tags.some((tag) => pillarTagSet.has(tag.toLowerCase()))
  );
}
