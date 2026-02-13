"use client";

interface EmailSignupProps {
  heading?: string;
  subheading?: string;
  className?: string;
}

export default function EmailSignup({
  heading = "Get the free Slayable Money Reset checklist",
  subheading = "Plus weekly tips to make your freelance finances less chaotic.",
  className = "",
}: EmailSignupProps) {
  // TODO: Replace with your ConvertKit form ID
  // Example: https://app.convertkit.com/forms/YOUR_FORM_ID
  const CONVERTKIT_FORM_ACTION = "#";

  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-cream-dark ${className}`}
    >
      <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2 text-charcoal">
        {heading}
      </h3>
      <p className="text-charcoal-light mb-4">{subheading}</p>

      <form
        action={CONVERTKIT_FORM_ACTION}
        method="post"
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          name="email_address"
          placeholder="you@example.com"
          required
          className="flex-1 px-4 py-3 rounded-lg border border-cream-dark bg-cream text-charcoal placeholder:text-charcoal-light focus:outline-none focus:ring-2 focus:ring-sage focus:border-sage"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-coral hover:bg-coral-dark text-white font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
        >
          Send it!
        </button>
      </form>

      <p className="text-xs text-charcoal-light mt-3">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}
