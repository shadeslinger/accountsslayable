import type { Metadata } from "next";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your purchase is complete.",
  robots: { index: false, follow: false },
};

interface Props {
  searchParams: Promise<{ session_id?: string }>;
}

/**
 * Post-purchase landing page. Stripe redirects buyers here with a
 * session_id query param. We fetch the session server-side to confirm
 * the purchase really happened (so someone can't just hit /success
 * and pretend they paid), then show a thank-you message.
 *
 * For manual-fulfillment products, we show the product's
 * manualFulfillmentNote so the buyer knows what to expect.
 *
 * For auto-link products (future), this page will show the Google Sheet
 * "Make a copy" link directly.
 */
export default async function SuccessPage({ searchParams }: Props) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="font-heading font-bold text-4xl text-charcoal mb-4">
          No purchase to confirm
        </h1>
        <p className="text-charcoal-light mb-8">
          This page is shown after a successful purchase. If you landed here
          without buying anything, start over from the shop.
        </p>
        <Link
          href="/shop"
          className="inline-block px-6 py-3 bg-coral hover:bg-coral-dark text-white font-semibold rounded-lg transition-colors"
        >
          Back to the shop
        </Link>
      </div>
    );
  }

  let session: Awaited<ReturnType<typeof stripe.checkout.sessions.retrieve>> | null = null;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id);
  } catch (err) {
    console.error("[success] could not retrieve session:", err);
  }

  if (!session || session.payment_status !== "paid") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="font-heading font-bold text-4xl text-charcoal mb-4">
          We could not confirm this purchase
        </h1>
        <p className="text-charcoal-light mb-8">
          If you just paid, give it a minute and refresh. If the problem
          persists, email{" "}
          <a
            href="mailto:hello@accountsslayable.com"
            className="text-sage-dark underline"
          >
            hello@accountsslayable.com
          </a>{" "}
          with your Stripe receipt and we will sort it out.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-white hover:bg-cream-dark text-charcoal font-semibold rounded-lg border border-cream-dark transition-colors"
        >
          Back to the homepage
        </Link>
      </div>
    );
  }

  const slug = session.metadata?.product_slug;
  const product = slug ? getProductBySlug(slug) : undefined;
  const customerEmail =
    session.customer_details?.email ?? session.customer_email ?? null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 sm:py-28">
      <div className="text-center">
        <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-4">
          Thank you
        </p>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal mb-6 leading-tight">
          Payment received.
        </h1>
        {product && (
          <p className="text-lg text-charcoal-light mb-10">
            Your purchase of{" "}
            <span className="font-semibold text-charcoal">{product.name}</span>{" "}
            is confirmed. A receipt is on its way to{" "}
            <span className="font-semibold text-charcoal">
              {customerEmail ?? "your email"}
            </span>
            .
          </p>
        )}

        {product?.fulfillment === "manual" && product.manualFulfillmentNote && (
          <div className="bg-sage/10 border border-sage/20 rounded-2xl p-6 text-left mb-10">
            <h2 className="font-heading font-semibold text-lg text-charcoal mb-3">
              What happens next
            </h2>
            <p className="text-charcoal-light leading-relaxed">
              {product.manualFulfillmentNote}
            </p>
          </div>
        )}

        {product?.fulfillment === "auto-link" && (
          <div className="bg-sage/10 border border-sage/20 rounded-2xl p-6 text-left mb-10">
            <h2 className="font-heading font-semibold text-lg text-charcoal mb-3">
              Your template
            </h2>
            <p className="text-charcoal-light leading-relaxed">
              Your Google Sheets link has been sent to{" "}
              <span className="font-semibold text-charcoal">
                {customerEmail ?? "your email"}
              </span>
              . Open the link, then use{" "}
              <span className="font-semibold text-charcoal">
                File → Make a copy
              </span>{" "}
              to save your own editable version to your Drive.
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-coral hover:bg-coral-dark text-white font-semibold rounded-lg transition-colors"
          >
            Back to the homepage
          </Link>
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-white hover:bg-cream-dark text-charcoal font-semibold rounded-lg border border-cream-dark transition-colors"
          >
            Read the blog
          </Link>
        </div>
      </div>
    </div>
  );
}
