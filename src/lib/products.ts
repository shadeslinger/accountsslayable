/**
 * Product catalog — the single source of truth for products sold on the site.
 *
 * Why centralize this here:
 *   - Product copy (name, description, price display) lives in code so it
 *     version-controls with the site and the bot can iterate on it.
 *   - Stripe is the payment processor, not the source of truth for product
 *     data. A product only needs its Stripe Price ID to accept payment.
 *   - Shop page, individual product pages, and checkout all import from
 *     this file so they stay in sync.
 *
 * Adding a new product:
 *   1. Create a Product + Price in the Stripe Dashboard.
 *   2. Copy the Price ID (starts with `price_`).
 *   3. Add an entry below with the matching slug, image path, and copy.
 *   4. Set the env var for the price ID (see `stripePriceEnvVar`).
 *   5. Wire the product to any pages that should sell it (shop, product
 *      page, pillar page) via `getProductBySlug(...)`.
 */

export type ProductStatus =
  | "available" // live and purchasable
  | "coming-soon" // exists in catalog but no checkout, typically waiting on the asset
  | "beta"; // purchasable but clearly marked as v0.1

export type FulfillmentMode =
  /** v1 mode: buyer gets a success page and an email promising delivery within 24 hours; Adam sends manually. */
  | "manual"
  /** Future mode: buyer gets the Google Sheet "Make a copy" link immediately. */
  | "auto-link";

export interface Product {
  slug: string;
  name: string;
  tag: string;
  pillarSlug: string;
  /** Absolute path under /public */
  image: string;
  /** Short description, used on cards */
  shortDescription: string;
  /** Longer description, used on the product detail page */
  longDescription: string;
  /** Displayed price, e.g. "$29" */
  priceDisplay: string;
  /** Price in the smallest currency unit (cents for USD). Must match Stripe. */
  priceAmountCents: number;
  priceCurrency: "usd";
  /**
   * The env var name holding the Stripe Price ID for this product.
   * Keeping the name here (rather than the value) means the repo never
   * contains price IDs — they live only in .env.local and Vercel.
   */
  stripePriceEnvVar: string;
  status: ProductStatus;
  fulfillment: FulfillmentMode;
  /** URL for non-checkout navigation (product detail page) */
  href: string;
  /**
   * Short message shown on the post-purchase success page and in the
   * fulfillment email. Only used when fulfillment is "manual".
   */
  manualFulfillmentNote?: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "1099-money-system",
    name: "The 1099 Money System",
    tag: "Flagship",
    pillarSlug: "freelance-and-1099",
    image: "/images/products/1099-money-system.webp",
    shortDescription:
      "A six-sheet bundle covering income tracking, quarterly tax set-asides, invoices, expenses, and receipts for freelancers. One afternoon of setup.",
    longDescription:
      "A complete Google Sheets template pack for freelancers and 1099 workers. Track income across clients, calculate quarterly tax set-asides, manage invoices, log expenses against Schedule C categories, and produce a year-end summary you can hand to your CPA.",
    priceDisplay: "$29",
    priceAmountCents: 2900,
    priceCurrency: "usd",
    stripePriceEnvVar: "STRIPE_PRICE_1099_MONEY_SYSTEM",
    status: "beta",
    fulfillment: "manual",
    href: "/products/1099-money-system",
    manualFulfillmentNote:
      "Thank you for buying the 1099 Money System. Adam is putting the finishing touches on the final version of the bundle. You will receive an email with your Google Sheets links within 24 hours. If you have any questions in the meantime, reply to the Stripe receipt or email hello@accountsslayable.com.",
  },
  {
    slug: "credit-card-rewards-tracker",
    name: "Credit Card Rewards Tracker",
    tag: "Points & Rewards",
    pillarSlug: "points-and-rewards",
    image: "/images/products/credit-card-rewards-tracker.webp",
    shortDescription:
      "A sheet for tracking signup bonuses, minimum spends, annual fee renewals, and the net value of every card in your wallet.",
    longDescription:
      "Track signup bonus progress toward every minimum spend, log annual fee renewal dates, and calculate the net value of each card in your wallet (rewards earned minus annual fees). Designed to make the points game feel like a spreadsheet you actually want to open.",
    priceDisplay: "$19",
    priceAmountCents: 1900,
    priceCurrency: "usd",
    stripePriceEnvVar: "STRIPE_PRICE_CREDIT_CARD_REWARDS_TRACKER",
    status: "coming-soon",
    fulfillment: "manual",
    href: "#",
  },
  {
    slug: "ai-finance-prompt-library",
    name: "AI Finance Prompt Library",
    tag: "AI + Fintech",
    pillarSlug: "ai-and-fintech",
    image: "/images/products/ai-finance-prompt-library.webp",
    shortDescription:
      "A curated pack of prompts for using Claude, ChatGPT, and Gemini as a budget coach, tax helper, and spreadsheet assistant.",
    longDescription:
      "A curated collection of prompts tested across Claude, ChatGPT, and Gemini for budget analysis, tax-season prep, spreadsheet formula help, and financial decision frameworks. Each prompt comes with notes on when to use it, what to expect, and common failure modes.",
    priceDisplay: "$9",
    priceAmountCents: 900,
    priceCurrency: "usd",
    stripePriceEnvVar: "STRIPE_PRICE_AI_FINANCE_PROMPT_LIBRARY",
    status: "coming-soon",
    fulfillment: "manual",
    href: "#",
  },
  {
    slug: "side-hustle-income-tracker",
    name: "Side Hustle Income Tracker",
    tag: "Side Hustles",
    pillarSlug: "side-hustles",
    image: "/images/products/side-hustle-income-tracker.webp",
    shortDescription:
      "Multi-gig income and hours-worked sheet that calculates your real effective hourly rate.",
    longDescription:
      "Log income from every gig or platform, log hours worked on each, and see your real effective hourly rate across all of them. Designed to answer the question \"is this side hustle actually worth my time?\" with a number you can argue with.",
    priceDisplay: "$15",
    priceAmountCents: 1500,
    priceCurrency: "usd",
    stripePriceEnvVar: "STRIPE_PRICE_SIDE_HUSTLE_INCOME_TRACKER",
    status: "coming-soon",
    fulfillment: "manual",
    href: "#",
  },
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getPurchasableProducts(): Product[] {
  return PRODUCTS.filter(
    (p) => p.status === "available" || p.status === "beta"
  );
}

/**
 * Server-only. Returns the Stripe Price ID for a product, or throws if
 * the env var is unset. Call this from the checkout API route, not from
 * client components.
 */
export function getStripePriceId(product: Product): string {
  const priceId = process.env[product.stripePriceEnvVar];
  if (!priceId) {
    throw new Error(
      `Stripe price ID is not configured for ${product.slug}. Set ${product.stripePriceEnvVar} in .env.local or the Vercel environment.`
    );
  }
  return priceId;
}
