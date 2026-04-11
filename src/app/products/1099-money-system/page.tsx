import type { Metadata } from "next";
import Image from "next/image";
import EmailSignup from "@/components/EmailSignup";

const OG_IMAGE =
  "/api/og?title=The%201099%20Money%20System&subtitle=Six%20interlocking%20Google%20Sheets.%20%2429%20one-time.%20No%20subscription.&pillar=03";

export const metadata: Metadata = {
  title: "The 1099 Money System",
  description:
    "A complete Google Sheets template pack for freelancers and 1099 workers. Track income, set aside taxes, manage invoices, and finally know if you're profitable.",
  openGraph: {
    title: "The 1099 Money System — $29 One-Time",
    description:
      "Everything a freelancer needs to track income, set aside taxes, manage invoices, and stop wondering if you're profitable. Google Sheets template pack — buy once, own forever.",
    type: "website",
    url: "https://accountsslayable.com/products/1099-money-system",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 1099 Money System — $29 One-Time",
    description:
      "Everything a freelancer needs to track income, set aside taxes, manage invoices. Google Sheets template pack — buy once, own forever.",
    images: [OG_IMAGE],
  },
};

const features = [
  {
    name: "Multi-Client Income Tracker",
    description:
      "Log income from every client in one place. See who's paid, who's late, and where your money is coming from.",
  },
  {
    name: "Quarterly Tax Set-Aside Calculator",
    description:
      "Calculates how much to set aside for estimated taxes based on your year-to-date income, so April stops being a surprise.",
  },
  {
    name: "Invoice Tracker with Overdue Alerts",
    description:
      "Every invoice sent, paid, and overdue in one place. Color-coded status so nothing falls off the radar.",
  },
  {
    name: "Receipt and Mileage Log",
    description:
      "Dead-simple expense tracking with categories that map directly to Schedule C. Mileage log included.",
  },
  {
    name: "Q1 Cleanup Mini-Playbook",
    description:
      "A step-by-step guide for getting your finances organized at the start of each quarter. Takes about 30 minutes.",
  },
  {
    name: "AI-Assisted Setup Instructions",
    description:
      "Instructions with prompts you can paste into ChatGPT or Claude to customize the templates for your specific situation.",
  },
];

const faqs = [
  {
    q: "Do I need to know spreadsheets?",
    a: "No. If you can type a number into a cell, you can use these. Everything is pre-built with instructions.",
  },
  {
    q: "Will this work for my country or state?",
    a: "The templates are designed for U.S.-based freelancers and 1099 workers. Tax rates and categories follow IRS guidelines. International users can adapt the structure, but the tax specifics will differ.",
  },
  {
    q: "Can I customize the templates?",
    a: "Yes. They're Google Sheets, so you can add columns, change categories, rename things, and generally make the bundle your own.",
  },
  {
    q: "Is this financial advice?",
    a: "No. These are organizational tools with educational context. For tax or legal advice specific to your situation, consult a qualified professional.",
  },
  {
    q: "What if I don't like it?",
    a: "30-day refund for any technical issue. If the templates don't work as described, you get your money back.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "The 1099 Money System",
  description:
    "A complete Google Sheets template pack for freelancers and 1099 workers.",
  brand: { "@type": "Brand", name: "Accounts Slayable" },
  offers: {
    "@type": "Offer",
    price: "29.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

export default function ProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Product hero */}
      <section className="bg-gradient-to-b from-sage/10 via-cream to-cream py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sage-dark font-semibold mb-3 uppercase tracking-[0.15em] text-sm">
              Google Sheets Template Pack
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-4 leading-[1.1]">
              The 1099 Money System
            </h1>
            <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl mx-auto mb-8">
              A six-sheet bundle that covers income tracking, quarterly tax
              set-asides, invoices, business expenses, and receipts for
              freelancers and 1099 workers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#"
                className="px-8 py-4 bg-coral hover:bg-coral-dark text-white font-bold rounded-lg text-lg transition-colors shadow-sm hover:shadow-md"
              >
                {/* TODO: Replace # with Gumroad product URL */}
                Buy on Gumroad — $29
              </a>
              <a
                href="#"
                className="text-charcoal-light hover:text-sage transition-colors underline"
              >
                {/* TODO: Replace # with Etsy listing URL */}
                Also available on Etsy
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/9] max-w-3xl mx-auto rounded-2xl overflow-hidden border border-cream-dark shadow-md bg-cream">
            <Image
              src="/images/products/1099-money-system.webp"
              alt="Abstract illustration of the 1099 Money System spreadsheet bundle"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-center mb-12 text-charcoal">
            What&apos;s inside
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-cream-dark"
              >
                <h3 className="font-heading font-semibold text-lg mb-2 text-charcoal">
                  {feature.name}
                </h3>
                <p className="text-charcoal-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison / value anchor */}
      <section className="py-16 sm:py-20 bg-sage/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6 text-charcoal">
            Less than one month of a budgeting app
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-5 border border-cream-dark">
              <p className="text-charcoal-light text-sm mb-1">YNAB</p>
              <p className="font-bold text-2xl text-charcoal line-through opacity-50">
                $99/yr
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-cream-dark">
              <p className="text-charcoal-light text-sm mb-1">Monarch Money</p>
              <p className="font-bold text-2xl text-charcoal line-through opacity-50">
                $100/yr
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-sage shadow-md">
              <p className="text-sage text-sm font-semibold mb-1">
                1099 Money System
              </p>
              <p className="font-bold text-2xl text-charcoal">
                $29 <span className="text-sm font-normal">once</span>
              </p>
            </div>
          </div>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-coral hover:bg-coral-dark text-white font-bold rounded-lg text-lg transition-colors"
          >
            {/* TODO: Replace # with Gumroad product URL */}
            Get the 1099 Money System
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-center mb-12 text-charcoal">
            Questions? We got you.
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-xl border border-cream-dark group"
              >
                <summary className="p-5 cursor-pointer font-semibold text-charcoal list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-sage ml-4 group-open:rotate-45 transition-transform text-xl">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-charcoal-light">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Legal disclaimer */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-charcoal-light/70 text-center">
            For informational purposes only. Not financial, tax, or legal advice.
            These templates are organizational tools with educational context. For advice
            specific to your situation, consult a qualified professional. Google Sheets
            is a trademark of Google LLC.
          </p>
        </div>
      </section>

      {/* Explore the pillar */}
      <section className="py-16 sm:py-20 bg-cream border-t border-cream-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-3">
            More in this pillar
          </p>
          <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
            Freelance &amp; 1099 writing
          </h2>
          <p className="text-charcoal-light text-lg mb-8 max-w-xl mx-auto">
            This product belongs to our Freelance &amp; 1099 pillar — quarterly
            taxes, income tracking, Schedule C, invoicing, and the whole
            self-employed toolkit.
          </p>
          <a
            href="/topics/freelance-and-1099"
            className="inline-block px-6 py-3 bg-white hover:bg-cream-dark text-charcoal font-semibold rounded-lg border border-cream-dark transition-colors"
          >
            Explore Freelance &amp; 1099 →
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-sage/5">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailSignup
            heading="Not ready to buy yet?"
            subheading="Grab the free Slayable Money Reset checklist and start getting organized today."
          />
        </div>
      </section>
    </>
  );
}
