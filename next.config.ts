import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // 'unsafe-inline' for Next.js inline bootstrap scripts.
      // Stripe Checkout is hosted on checkout.stripe.com — no client-side
      // Stripe.js loads from this origin, so we only need to allow
      // redirection, not script-src.
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      // Allow fetch() from BuyButton to our own /api/checkout endpoint.
      // Stripe API calls happen server-side from our API routes, which
      // don't go through CSP.
      "connect-src 'self'",
      // Allow form submissions to Stripe (the hosted Checkout page).
      "form-action 'self' https://checkout.stripe.com",
      // Allow top-level navigation to Stripe Checkout (window.location redirect).
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
