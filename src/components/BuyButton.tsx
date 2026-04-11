"use client";

import { useState } from "react";

interface BuyButtonProps {
  slug: string;
  label?: string;
  className?: string;
  fallbackHref?: string;
}

/**
 * Client-side Buy button. Posts the product slug to /api/checkout and
 * redirects the browser to the returned Stripe Checkout URL.
 *
 * If the API returns an error (e.g., Stripe not yet configured for this
 * product), the button shows the error message and offers a fallback link
 * so the user can still contact us or navigate away.
 */
export default function BuyButton({
  slug,
  label = "Buy now",
  className = "px-8 py-4 bg-coral hover:bg-coral-dark text-white font-bold rounded-lg text-lg transition-colors shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed",
  fallbackHref = "mailto:hello@accountsslayable.com?subject=I'd%20like%20to%20buy",
}: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        url?: string;
        error?: string;
      };
      if (!res.ok || !data.url) {
        throw new Error(
          data.error ?? "Something went wrong. Please try again."
        );
      }
      window.location.href = data.url;
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setError(msg);
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={className}
      >
        {loading ? "Redirecting to checkout…" : label}
      </button>
      {error && (
        <p className="text-sm text-coral-dark max-w-sm">
          {error}{" "}
          <a
            href={fallbackHref}
            className="underline hover:text-coral"
          >
            Email us
          </a>{" "}
          and we will handle it directly.
        </p>
      )}
    </div>
  );
}
