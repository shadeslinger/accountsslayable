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
      "Budgets, debt, saving, credit, homebuying — the unsexy stuff that actually moves the needle.",
    description:
      "Foundational personal finance for people who want a real system, not another generic tip.",
    intro:
      "Personal finance is supposed to be boring in a good way — predictable, low-drama, something that runs in the background of your life. Most of the advice out there either patronizes you or sells you a subscription. We're going for a third option: practical, honest, and written like you're a real adult with a brain.",
    themes: [
      "Building a budget you'll actually stick to (without tracking every latte)",
      "Paying down debt without the shame spiral",
      "Credit scores, credit reports, and what actually matters",
      "Saving for real goals — emergencies, homes, escape plans",
      "Negotiating subscriptions and getting out of zombie charges",
      "The basics of investing, explained without a single Warren Buffett quote",
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
      "Posts in this pillar are coming soon. In the meantime, sign up below and you'll be the first to know when we start shipping them.",
  },
  {
    slug: "points-and-rewards",
    number: "02",
    name: "Points & Rewards",
    tagline:
      "Travel hacks, cashback stacking, and the art of never paying retail for anything you didn't have to.",
    description:
      "Credit card strategy, travel rewards, and cashback — the points game, explained without the gatekeeping.",
    intro:
      "There's a whole subculture of people flying business class on points they earned buying groceries. It's not a scam, it's not impossible, and it's not just for finance bros with nine credit cards. It's a system — and once you understand the basics, you can squeeze meaningful value out of it without becoming a spreadsheet hermit. We'll show you the shape of the game, name the good cards, and tell you which ones are hype.",
    themes: [
      "Which cards are actually worth their annual fee (and which are tourist traps)",
      "The math of signup bonuses — what's a bonus actually worth?",
      "Travel hacking without turning it into a second job",
      "Cashback stacking: shopping portals, card multipliers, and combo plays",
      "Keeping track of minimum spends, annual fee timing, and downgrade paths",
      "When NOT to chase points (and when it actively costs you money)",
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
      "We're brewing our first posts for this pillar now. Join the list below and we'll ping you when the Points & Rewards cornerstone guide drops.",
  },
  {
    slug: "freelance-and-1099",
    number: "03",
    name: "Freelance & 1099",
    tagline:
      "Quarterly taxes, income chaos, and surviving Schedule C without losing your mind.",
    description:
      "The original pillar. Everything 1099 workers, freelancers, and consultants need to run a clean money system.",
    intro:
      "This is where Accounts Slayable started — watching brilliant freelancers spiral every April over a shoebox of receipts and a quarterly tax bill they didn't see coming. Freelance and 1099 work is great, but it leaves you on your own for all the stuff a real employer handles: withholding, benefits, retirement, deductions, the whole parade. This pillar is the field guide we wish we'd had.",
    themes: [
      "Quarterly tax set-asides that actually work (the math, not the vibes)",
      "Tracking income across clients, platforms, and payment methods",
      "Expense categorization that matches Schedule C — not your instincts",
      "Invoice follow-up without feeling like a nag",
      "Retirement accounts for freelancers (SEP-IRA, Solo 401k, the whole menu)",
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
        "The flagship template bundle — six interlocking Google Sheets that cover income, taxes, invoices, expenses, and receipts for 1099 workers.",
      price: "$29 one-time",
    },
    emptyState:
      "New posts are on the way. If you want the template bundle that started this pillar, check out the 1099 Money System.",
  },
  {
    slug: "ai-and-fintech",
    number: "04",
    name: "AI + Fintech",
    tagline:
      "We test the tools so you don't have to. Some are magic. Some are nonsense. We say which.",
    description:
      "AI tools for money, LLM experiments, fintech product reviews, and automation that isn't just a gimmick.",
    intro:
      "Every other week there's a new AI-powered finance tool promising to solve everything. Most of them are wrappers. Some are genuinely useful. We try them, break them, abuse them, and then report back so you don't waste a month figuring out which is which. This pillar also covers fintech product reviews (YNAB, Monarch, Copilot Money, the works) and the kind of real automation workflows you can actually build with AI — not just prompt screenshots.",
    themes: [
      "Reviews of AI-powered personal finance tools — what works, what's a wrapper",
      "Using ChatGPT, Claude, and Gemini as your budget coach (safely, no bank login)",
      "Fintech app deep-dives: the honest take on YNAB, Monarch, Copilot Money, etc.",
      "Building your own finance automations (no code, no subscriptions)",
      "AI-assisted spreadsheet work — getting LLMs to do the tedious bits",
      "Industry takes: what's real, what's hype, what's quietly changing everything",
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
      "This pillar's cornerstone post — \"I Tried 7 AI Tools for Personal Finance So You Don't Have To\" — is in the queue. Sign up below to get it first.",
  },
  {
    slug: "side-hustles",
    number: "05",
    name: "Side Hustles & Biz",
    tagline:
      'Side gigs, small business, and honest "is this actually worth my time?" math.',
    description:
      "Starting and running a side hustle or small business — with real math on whether it's actually paying you.",
    intro:
      "Every side hustle guide promises you'll make $3,000 a month flipping something on Etsy. Very few of them do the actual math on whether you're earning minimum wage after costs. We take the opposite stance: start with the math, then decide if it's worth it. This pillar is about side income, small business economics, and the \"is this a business or a slow bleed\" question nobody wants to answer.",
    themes: [
      "The real profitability math on popular side hustles",
      "Effective hourly rate — the only side hustle metric that matters",
      "Starting a small business without burning out",
      "Tracking income, expenses, and time across multiple gigs",
      "When to quit a hustle that isn't working",
      "LLC vs sole prop vs S-corp — the 2-minute version",
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
      "The first post in this pillar is a profitability calculator you can actually trust. It's in the works — join the list to get it first.",
  },
  {
    slug: "money-mindset",
    number: "06",
    name: "Money Mindset",
    tagline:
      "Finance without shame, gendered defaults, or a $99/year guilt trip. Just real talk.",
    description:
      "The psychological side of money — boundaries, anxiety, habits, and the cultural baggage that makes finance feel harder than it is.",
    intro:
      "Most of the hard part of personal finance isn't math — it's psychology, shame, defaults, and inherited stories about money that were never really yours. This pillar is where we get real about the feelings part. Queer-friendly, judgment-free, and absolutely not going to tell you to visualize wealth. Just honest writing about why money is weird and what actually helps.",
    themes: [
      "Financial anxiety and what to actually do about it",
      "Money boundaries with clients, friends, family, and yourself",
      "The cultural scripts that make personal finance feel gatekept",
      "Queer-friendly planning — no 'head of household' defaults, no assumptions",
      "Building money habits that don't depend on willpower",
      "The honest truth about lifestyle inflation, FIRE, and 'enough'",
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
      "Posts for this pillar are being drafted now. Subscribe below and you'll get them first.",
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
