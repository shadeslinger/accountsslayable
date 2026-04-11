import Stripe from "stripe";

/**
 * Server-side Stripe client. Never import this in client components — it
 * needs STRIPE_SECRET_KEY which must never be exposed to the browser.
 *
 * The publishable key (for any client-side Stripe.js usage) should be
 * read via `process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in client
 * components instead.
 *
 * We use a lazy singleton because Stripe's constructor throws when the
 * secret key is missing, and Next.js collects page data at build time
 * before environment variables are necessarily set. The build would
 * otherwise fail on any route that imports from this module.
 */
let _stripe: Stripe | null = null;

function createStripeClient(): Stripe {
  // Trim whitespace/newlines — paste-through-Vercel-dashboard often adds
  // a trailing newline, which fails HTTP header validation with:
  //   "Invalid character in header content [Authorization]"
  // Don't assume the user's paste was clean; sanitize at the edge.
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it to .env.local or the Vercel environment."
    );
  }
  return new Stripe(key, {
    // Pin the API version so behavior is stable when Stripe releases new versions.
    // Update this deliberately after reading the changelog.
    apiVersion: "2026-03-25.dahlia",
    typescript: true,
    appInfo: {
      name: "Accounts Slayable",
      url: "https://accountsslayable.com",
    },
  });
}

/**
 * Proxy that defers Stripe client creation until a method is actually
 * called. This lets modules import `stripe` safely at build time even
 * when STRIPE_SECRET_KEY is unset.
 */
export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    if (!_stripe) {
      _stripe = createStripeClient();
    }
    return Reflect.get(_stripe, prop);
  },
});

export function assertStripeConfigured(): void {
  if (!process.env.STRIPE_SECRET_KEY?.trim()) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it to .env.local or the Vercel environment."
    );
  }
}
