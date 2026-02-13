import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <h1 className="font-heading font-bold text-6xl text-sage mb-4">
        404
      </h1>
      <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">
        This page went off the books
      </h2>
      <p className="text-charcoal-light mb-8">
        Whatever you were looking for isn&apos;t here. Maybe it was deducted.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-coral hover:bg-coral-dark text-white font-semibold rounded-lg transition-colors"
      >
        Back to the homepage
      </Link>
    </div>
  );
}
