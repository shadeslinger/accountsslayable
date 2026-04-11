import { NextResponse, type NextRequest } from "next/server";
import { stripe, assertStripeConfigured } from "@/lib/stripe";
import { getProductBySlug, getStripePriceId } from "@/lib/products";

/**
 * POST /api/checkout
 *
 * Creates a Stripe Checkout session for a given product slug and returns
 * the hosted checkout URL. The client redirects the buyer to this URL.
 *
 * Request body: { slug: string }
 * Response:     { url: string } | { error: string }
 *
 * Flow:
 *   1. Client POSTs the product slug.
 *   2. We look up the product in the catalog and resolve its Stripe Price ID
 *      from the env var.
 *   3. We create a Stripe Checkout session with that price and set
 *      success_url / cancel_url to land the buyer back on our site.
 *   4. We return the session URL. The client performs `window.location = url`.
 *   5. Stripe handles payment. On success, the buyer lands on /success and
 *      the webhook handler logs the purchase for manual fulfillment.
 */
export async function POST(req: NextRequest) {
  try {
    assertStripeConfigured();

    const body = (await req.json().catch(() => null)) as { slug?: string } | null;
    const slug = body?.slug;
    if (!slug) {
      return NextResponse.json(
        { error: "Missing product slug" },
        { status: 400 }
      );
    }

    const product = getProductBySlug(slug);
    if (!product) {
      return NextResponse.json({ error: "Unknown product" }, { status: 404 });
    }

    if (product.status !== "available" && product.status !== "beta") {
      return NextResponse.json(
        { error: "This product is not yet purchasable." },
        { status: 400 }
      );
    }

    let priceId: string;
    try {
      priceId = getStripePriceId(product);
    } catch (err) {
      console.error("[checkout] stripe price not configured:", err);
      return NextResponse.json(
        {
          error:
            "Checkout is not yet configured for this product. Email hello@accountsslayable.com and we will fulfill manually.",
        },
        { status: 503 }
      );
    }

    const origin =
      req.headers.get("origin") ?? "https://accountsslayable.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      // allow_promotion_codes lets us run discount campaigns later without
      // changing the code — just create a coupon in Stripe and share the code.
      allow_promotion_codes: true,
      // Collect tax automatically (Stripe Tax must be enabled in dashboard).
      // If Stripe Tax is disabled this line is a no-op.
      automatic_tax: { enabled: true },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      metadata: {
        product_slug: product.slug,
        product_name: product.name,
        fulfillment_mode: product.fulfillment,
      },
      payment_intent_data: {
        description: `${product.name} — accountsslayable.com`,
        metadata: {
          product_slug: product.slug,
        },
      },
      customer_creation: "always",
      // Let Stripe handle the receipt email. We also send our own
      // fulfillment email from the webhook handler for manual-fulfillment products.
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong creating the checkout session." },
      { status: 500 }
    );
  }
}
