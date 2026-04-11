import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout cancelled",
  description: "Your checkout session was cancelled.",
  robots: { index: false, follow: false },
};

/**
 * Destination when a buyer abandons the Stripe Checkout page. No charge
 * has been made. We show a friendly "no worries" message and offer a
 * couple of ways to re-engage.
 */
export default function CancelPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 sm:py-28 text-center">
      <p className="font-heading uppercase tracking-[0.2em] text-sm text-coral-dark mb-4">
        Checkout cancelled
      </p>
      <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal mb-6 leading-tight">
        No purchase made.
      </h1>
      <p className="text-lg text-charcoal-light mb-10 max-w-md mx-auto">
        You were not charged. If you hit a problem at checkout or changed
        your mind, no hard feelings. You can try again or come back later.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/shop"
          className="inline-block px-6 py-3 bg-coral hover:bg-coral-dark text-white font-semibold rounded-lg transition-colors"
        >
          Back to the shop
        </Link>
        <Link
          href="/newsletter"
          className="inline-block px-6 py-3 bg-white hover:bg-cream-dark text-charcoal font-semibold rounded-lg border border-cream-dark transition-colors"
        >
          Get the newsletter instead
        </Link>
      </div>
      <p className="text-sm text-charcoal-light/70 mt-10">
        Ran into a technical problem?{" "}
        <a
          href="mailto:hello@accountsslayable.com?subject=Checkout%20issue"
          className="text-sage-dark underline hover:text-sage"
        >
          Email us
        </a>{" "}
        and we will sort it out.
      </p>
    </div>
  );
}
