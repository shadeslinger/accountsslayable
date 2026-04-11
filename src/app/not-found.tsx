import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24 text-center">
      <div className="relative w-full aspect-[16/9] max-w-xl mx-auto mb-8 rounded-2xl overflow-hidden bg-cream border border-cream-dark shadow-sm">
        <Image
          src="/images/accents/404.webp"
          alt="A small lost gold coin and a magnifying glass on a cream surface"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 576px"
          className="object-cover"
        />
      </div>
      <p className="font-heading uppercase tracking-[0.2em] text-sm text-coral-dark mb-3">
        404 — off the books
      </p>
      <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal mb-4 leading-tight">
        This page went missing.
      </h1>
      <p className="text-charcoal-light text-lg mb-10 max-w-md mx-auto">
        Whatever you were looking for isn&apos;t here. Maybe it was deducted.
        Maybe it never existed. Either way — you&apos;re not in trouble.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-coral hover:bg-coral-dark text-white font-semibold rounded-lg transition-colors shadow-sm"
        >
          Back to the homepage
        </Link>
        <Link
          href="/topics"
          className="inline-block px-6 py-3 bg-white hover:bg-cream-dark text-charcoal font-semibold rounded-lg border border-cream-dark transition-colors"
        >
          Browse topics instead
        </Link>
      </div>
    </div>
  );
}
