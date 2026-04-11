import { NextResponse, type NextRequest } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";

/**
 * POST /api/webhooks/stripe
 *
 * Stripe webhook endpoint. Stripe sends events here when checkout sessions
 * complete, invoices are paid, refunds are issued, etc. We currently only
 * handle `checkout.session.completed` — the event fired right after a buyer
 * successfully pays at the hosted checkout page.
 *
 * Setup (one-time, in Stripe Dashboard → Developers → Webhooks):
 *   1. Add an endpoint at https://accountsslayable.com/api/webhooks/stripe
 *   2. Select the `checkout.session.completed` event.
 *   3. Copy the signing secret (starts with `whsec_`).
 *   4. Set STRIPE_WEBHOOK_SECRET in Vercel env vars (and .env.local for dev).
 *
 * Security: every Stripe webhook is signed with a secret. We verify the
 * signature before processing, so an attacker cannot forge fake purchases.
 *
 * What happens when a purchase completes:
 *   - We log the purchase to the server logs so Adam can see it in the
 *     Vercel dashboard.
 *   - For manual-fulfillment products, Adam gets notified (via email to
 *     himself, or Slack, or Telegram — currently logged only) so he can
 *     send the Google Sheet link manually.
 *   - For auto-link products (future), we would send the Google Sheet
 *     "Make a copy" link directly to the buyer via email here.
 *
 * Next.js 16 note: the raw request body is required for signature
 * verification. We read it as text and hand Stripe the raw bytes.
 */
export async function POST(req: NextRequest) {
  // Trim defensively — env vars pasted through dashboards often pick up
  // trailing newlines or whitespace that break signature comparison.
  const secret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  if (!secret) {
    console.error(
      "[stripe webhook] STRIPE_WEBHOOK_SECRET is not set — rejecting webhook"
    );
    return NextResponse.json(
      { error: "Webhook is not configured" },
      { status: 500 }
    );
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, secret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "unknown error";
    console.error("[stripe webhook] signature verification failed:", msg);
    return NextResponse.json(
      { error: `Webhook Error: ${msg}` },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        await handleCheckoutCompleted(session);
        break;
      }
      case "checkout.session.async_payment_succeeded":
      case "checkout.session.async_payment_failed":
        // These fire for delayed payment methods (ACH, bank transfers).
        // We can handle them similarly if we add those payment methods later.
        console.log(`[stripe webhook] received ${event.type}, no-op`);
        break;
      default:
        console.log(`[stripe webhook] unhandled event type: ${event.type}`);
    }
  } catch (err) {
    console.error("[stripe webhook] handler error:", err);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutCompleted(
  session: Stripe.Checkout.Session
): Promise<void> {
  const slug = session.metadata?.product_slug;
  const customerEmail =
    session.customer_details?.email ?? session.customer_email ?? "unknown";
  const amount = session.amount_total ?? 0;
  const currency = session.currency ?? "usd";

  const product = slug ? getProductBySlug(slug) : undefined;

  // Structured log that Vercel surfaces in the dashboard and the bot can
  // grep for if we ever wire up automated notifications.
  console.log(
    JSON.stringify({
      event: "purchase_completed",
      session_id: session.id,
      product_slug: slug,
      product_name: product?.name,
      customer_email: customerEmail,
      amount_cents: amount,
      currency,
      fulfillment_mode: product?.fulfillment ?? "unknown",
      timestamp: new Date().toISOString(),
    })
  );

  if (!product) {
    console.warn(
      `[stripe webhook] checkout.session.completed had no matching product for slug=${slug}`
    );
    return;
  }

  if (product.fulfillment === "manual") {
    // For manual fulfillment, Stripe's automatic receipt email tells the
    // buyer what to expect. The buyer also lands on /success which shows
    // the manualFulfillmentNote copy. Adam sees this in Vercel logs and
    // sends the Google Sheet link by hand.
    //
    // TODO (when Resend or similar is wired up): send Adam a notification
    // email/Telegram message here so he doesn't miss a purchase.
    console.log(
      `[stripe webhook] manual fulfillment needed for ${product.slug} to ${customerEmail}`
    );
    return;
  }

  if (product.fulfillment === "auto-link") {
    // TODO: when auto-link fulfillment ships, send the Google Sheet
    // "Make a copy" URL to customerEmail via Resend/Postmark/etc.
    console.log(
      `[stripe webhook] auto-link fulfillment for ${product.slug} to ${customerEmail} — email sending not yet implemented`
    );
    return;
  }
}
