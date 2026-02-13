"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <h1 className="font-heading font-bold text-4xl text-charcoal mb-4">
        Well, that wasn&apos;t in the budget
      </h1>
      <p className="text-charcoal-light mb-8">
        Something went wrong. Don&apos;t worry — your data is fine, and this
        isn&apos;t a tax thing.
      </p>
      <button
        onClick={reset}
        className="inline-block px-6 py-3 bg-coral hover:bg-coral-dark text-white font-semibold rounded-lg transition-colors cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
