"use client";

import { useState, useId } from "react";

interface EmailSignupProps {
  heading?: string;
  subheading?: string;
  className?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function EmailSignup({
  heading = "Get the free Slayable Money Reset checklist",
  subheading = "Plus weekly tips to make your freelance finances less chaotic.",
  className = "",
}: EmailSignupProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const inputId = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const email = new FormData(form).get("email_address") as string;

    setStatus("submitting");
    setErrorMessage("");

    const formId = process.env.NEXT_PUBLIC_KIT_FORM_ID;
    const apiKey = process.env.NEXT_PUBLIC_KIT_API_KEY;

    if (!formId || !apiKey) {
      setStatus("error");
      setErrorMessage("Email signup is not configured yet. Check back soon!");
      return;
    }

    try {
      const res = await fetch(
        `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ api_key: apiKey, email }),
        }
      );

      if (!res.ok) {
        throw new Error("Subscription failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-cream-dark ${className}`}
        role="status"
        aria-live="polite"
      >
        <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2 text-charcoal">
          You&apos;re in!
        </h3>
        <p className="text-charcoal-light">
          Check your inbox for the Slayable Money Reset checklist. Welcome to the slay side.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-cream-dark ${className}`}
    >
      <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2 text-charcoal">
        {heading}
      </h3>
      <p className="text-charcoal-light mb-4">{subheading}</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3"
      >
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          name="email_address"
          placeholder="you@example.com"
          required
          disabled={status === "submitting"}
          className="flex-1 px-4 py-3 rounded-lg border border-cream-dark bg-cream text-charcoal placeholder:text-charcoal-light focus:outline-none focus:ring-2 focus:ring-sage focus:border-sage disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-6 py-3 bg-coral hover:bg-coral-dark text-white font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Send it!"}
        </button>
      </form>

      {status === "error" && (
        <p className="text-sm text-coral-dark mt-3" role="alert">
          {errorMessage}
        </p>
      )}

      <p className="text-xs text-charcoal-light mt-3">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}
