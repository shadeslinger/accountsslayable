import type { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

export const metadata: Metadata = {
  title: "Accounts Slayable — Financial Tools for Freelancers & 1099 Workers",
  description:
    "Google Sheets templates for freelancers and 1099 workers. Track income, set aside quarterly taxes, and stop guessing where your money went — for $29, one time.",
  openGraph: {
    title: "Accounts Slayable — Financial Tools for Freelancers & 1099 Workers",
    description:
      "Google Sheets templates for freelancers and 1099 workers. Track income, set aside quarterly taxes, and stop guessing where your money went — for $29, one time.",
    type: "website",
    url: "https://accountsslayable.com",
  },
  twitter: {
    card: "summary",
    title: "Accounts Slayable — Financial Tools for Freelancers & 1099 Workers",
    description:
      "Google Sheets templates for freelancers and 1099 workers. Track income, set aside quarterly taxes, and stop guessing where your money went — for $29, one time.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Accounts Slayable",
  url: "https://accountsslayable.com",
  description:
    "Google Sheets templates and financial tools for freelancers, consultants, and 1099 workers.",
  publisher: {
    "@type": "Organization",
    name: "Accounts Slayable",
    url: "https://accountsslayable.com",
  },
};

const painPoints = [
  {
    emoji: "😬",
    heading: "Quarterly taxes are a surprise every time",
    body: "You're not bad at money. You just never built a system to automatically stash a percentage as you earn. One tab fixes this.",
  },
  {
    emoji: "📥",
    heading: "Your income lives in 4 different inboxes",
    body: "Client A pays via Venmo, Client B sends wire transfers, Client C is somehow still mailing checks. You need one place to see all of it.",
  },
  {
    emoji: "🧾",
    heading: "You're leaving deductions on the table",
    body: "Every receipt you don't track is free money you're handing back to the IRS. Not because you're lazy — because there was no system.",
  },
];

const features = [
  "Multi-client income tracker",
  "Quarterly tax set-aside calculator",
  "Invoice tracker with overdue alerts",
  "Business expense & receipt log",
  "Mileage tracker",
  "AI-assisted setup instructions",
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark text-sm font-semibold rounded-full mb-6 tracking-wide uppercase">
            For freelancers &amp; 1099 workers
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
            Slay your freelance finances.
            <br />
            <span className="text-sage">Stop winging tax season.</span>
          </h1>
          <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl mx-auto mb-10">
            The 1099 Money System is a Google Sheets template bundle that tracks
            your income, calculates your quarterly taxes, and keeps your
            expenses in one place — so you&rsquo;re never caught off guard
            again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products/1099-money-system"
              className="px-8 py-4 bg-coral hover:bg-coral-dark text-white font-semibold rounded-lg transition-colors text-lg shadow-sm"
            >
              Get the 1099 Money System — $29
            </Link>
            <Link
              href="/start-here"
              className="px-8 py-4 border border-sage text-sage-dark hover:bg-sage/10 font-semibold rounded-lg transition-colors text-lg"
            >
              Not sure where to start?
            </Link>
          </div>
          <p className="text-sm text-charcoal-light mt-4">
            One-time purchase. No subscription. Works in Google Sheets (free).
          </p>
        </div>
      </section>

      {/* ─── Pain Points ──────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal text-center mb-4">
            If you get a 1099, this one&rsquo;s for you.
          </h2>
          <p className="text-charcoal-light text-center max-w-xl mx-auto mb-12">
            Freelancers and consultants don&rsquo;t have HR departments, payroll
            withholding, or anyone reminding them to save for taxes. You&rsquo;re
            on your own — so your system has to be better.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((p) => (
              <div
                key={p.heading}
                className="bg-cream rounded-2xl p-6 border border-cream-dark"
              >
                <span className="text-3xl mb-4 block" role="img" aria-label="">
                  {p.emoji}
                </span>
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                  {p.heading}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Product Feature Block ────────────────────────────────────────── */}
      <section className="bg-sage/5 py-16 sm:py-20 border-y border-sage/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-sage/15 text-sage-dark text-xs font-semibold rounded-full mb-4 uppercase tracking-wide">
                Featured product
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal mb-4">
                The 1099 Money System
              </h2>
              <p className="text-charcoal-light mb-6 leading-relaxed">
                Six interlocking Google Sheets that work together to give you a
                complete picture of your freelance money — income, taxes,
                invoices, and expenses. Setup takes under an hour.
              </p>
              <ul className="space-y-2 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-charcoal">
                    <span className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-sage-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <Link
                  href="/products/1099-money-system"
                  className="px-6 py-3 bg-coral hover:bg-coral-dark text-white font-semibold rounded-lg transition-colors shadow-sm"
                >
                  Get it for $29
                </Link>
                <Link
                  href="/products/1099-money-system"
                  className="px-6 py-3 text-sage-dark hover:text-sage font-medium transition-colors underline underline-offset-4"
                >
                  See what&rsquo;s included →
                </Link>
              </div>
              <p className="text-xs text-charcoal-light mt-3">
                For informational purposes only. Not financial, tax, or legal
                advice.
              </p>
            </div>

            {/* Visual — simple stat callouts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-cream-dark shadow-sm text-center">
                <p className="font-heading font-bold text-4xl text-sage mb-1">
                  $29
                </p>
                <p className="text-sm text-charcoal-light">
                  One-time price
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-cream-dark shadow-sm text-center">
                <p className="font-heading font-bold text-4xl text-sage mb-1">
                  6
                </p>
                <p className="text-sm text-charcoal-light">
                  Sheets in the bundle
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-cream-dark shadow-sm text-center">
                <p className="font-heading font-bold text-4xl text-sage mb-1">
                  $0
                </p>
                <p className="text-sm text-charcoal-light">
                  Annual fee (forever)
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-cream-dark shadow-sm text-center">
                <p className="font-heading font-bold text-4xl text-sage mb-1">
                  &lt;1hr
                </p>
                <p className="text-sm text-charcoal-light">
                  To set up &amp; start
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Anti-subscription pitch ──────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal mb-4">
            Your budgeting app costs more per year than this costs forever.
          </h2>
          <p className="text-charcoal-light mb-8 leading-relaxed">
            YNAB is $99/year. Monarch is $100/year. Tiller is $79/year. The 1099
            Money System is $29 once — and you can customize every cell because
            you own the spreadsheet. No lock-in, no monthly guilt, no
            &ldquo;did I actually use this?&rdquo; moment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/shop"
              className="px-6 py-3 bg-sage hover:bg-sage-dark text-white font-semibold rounded-lg transition-colors"
            >
              Browse all products
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 border border-cream-dark text-charcoal hover:border-sage hover:text-sage font-medium rounded-lg transition-colors"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Blog teaser ──────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-20 border-t border-cream-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
              From the blog
            </h2>
            <Link
              href="/blog"
              className="text-sage-dark hover:text-sage font-medium transition-colors text-sm underline underline-offset-4"
            >
              All posts →
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cream-dark shadow-sm">
            <span className="inline-block px-3 py-1 bg-sage/10 text-sage-dark text-xs font-semibold rounded-full mb-3">
              Getting started
            </span>
            <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">
              <Link
                href="/blog/hello-world"
                className="hover:text-sage transition-colors"
              >
                Why Your Freelance Finances Feel Like a Dumpster Fire (And How
                to Fix It)
              </Link>
            </h3>
            <p className="text-charcoal-light text-sm mb-4">
              Most freelancers don&rsquo;t have a money problem — they have an
              organization problem. Here&rsquo;s how to start fixing it in 30
              minutes.
            </p>
            <Link
              href="/blog/hello-world"
              className="text-sage-dark hover:text-sage font-medium text-sm transition-colors"
            >
              Read the post →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Bottom email CTA ─────────────────────────────────────────────── */}
      <section className="bg-charcoal py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
            Get the free Slayable Money Reset checklist
          </h2>
          <p className="text-white/70 mb-8">
            A quick-win checklist to get your freelance finances out of chaos —
            plus weekly tips, new templates, and the occasional money hot take.
          </p>
          <EmailSignup
            heading=""
            subheading=""
            className="bg-white/10 border-white/20 text-white [&_h3]:text-white [&_p]:text-white/70"
          />
        </div>
      </section>
    </>
  );
}
