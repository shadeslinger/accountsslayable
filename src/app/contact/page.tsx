import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Accounts Slayable team. Questions about templates, partnerships, or anything else — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage/10 to-cream py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hi? We&apos;d love
            to hear from you.
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark">
              <h2 className="font-heading font-semibold text-lg text-charcoal mb-2">
                Email
              </h2>
              <p className="text-charcoal-light mb-4">
                Best way to reach us. We aim to respond within a couple of
                business days.
              </p>
              <a
                href="mailto:hello@accountsslayable.com"
                className="text-sage hover:text-sage-dark font-medium transition-colors"
              >
                hello@accountsslayable.com
              </a>
            </div>

            {/* Common questions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark">
              <h2 className="font-heading font-semibold text-lg text-charcoal mb-2">
                Template support
              </h2>
              <p className="text-charcoal-light mb-4">
                Having trouble with a template? Check the product page FAQs
                first — most common questions are covered there.
              </p>
              <Link
                href="/products/1099-money-system"
                className="text-sage hover:text-sage-dark font-medium transition-colors"
              >
                Product FAQ &rarr;
              </Link>
            </div>
          </div>

          {/* Additional note */}
          <div className="mt-12 text-center">
            <p className="text-charcoal-light">
              For partnerships, press inquiries, or anything else —
              just send an email. We read everything.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
