import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-sage/10 to-cream py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-[family-name:var(--font-montserrat)] font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
          Your freelance finances,{" "}
          <span className="text-sage">finally under control</span>
        </h1>
        <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl mx-auto mb-8">
          Google Sheets templates and tools built for 1099 workers who are tired
          of guessing their taxes, losing receipts, and wondering if they&apos;re
          actually profitable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products/1099-money-system"
            className="px-8 py-4 bg-coral hover:bg-coral-dark text-white font-semibold rounded-lg text-lg transition-colors"
          >
            Get the 1099 Money System
          </Link>
          <a
            href="#signup"
            className="px-8 py-4 bg-white hover:bg-cream-dark text-charcoal font-semibold rounded-lg text-lg transition-colors border border-cream-dark"
          >
            Free checklist first
          </a>
        </div>
      </div>
    </section>
  );
}
