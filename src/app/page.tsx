import type { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

export const metadata: Metadata = {
  title: "Accounts Slayable — Personal Finance, Unfiltered",
  description:
    "Personal finance, points strategy, AI experiments, and side-hustle reality checks — for people who want their money to be boring in a good way. Tools, templates, and no-nonsense writing from one person who actually gets it.",
  openGraph: {
    title: "Accounts Slayable — Personal Finance, Unfiltered",
    description:
      "Personal finance, points strategy, AI experiments, and side-hustle reality checks — for people who want their money to be boring in a good way.",
    type: "website",
    url: "https://accountsslayable.com",
  },
  twitter: {
    card: "summary",
    title: "Accounts Slayable — Personal Finance, Unfiltered",
    description:
      "Personal finance, points strategy, AI experiments, and side-hustle reality checks — for people who want their money to be boring in a good way.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Accounts Slayable",
  url: "https://accountsslayable.com",
  description:
    "Personal finance, points strategy, AI experiments, and side-hustle reality checks for people who want their money to be boring in a good way.",
  publisher: {
    "@type": "Organization",
    name: "Accounts Slayable",
    url: "https://accountsslayable.com",
  },
};

const pillars = [
  {
    tag: "01",
    title: "Personal Finance",
    blurb:
      "Budgets, debt, saving, credit, homebuying — the unsexy stuff that actually moves the needle.",
    href: "/blog",
    accent: "sage",
  },
  {
    tag: "02",
    title: "Points & Rewards",
    blurb:
      "Travel hacks, cashback stacking, and the art of never paying retail for anything you didn't have to.",
    href: "/blog",
    accent: "coral",
  },
  {
    tag: "03",
    title: "Freelance & 1099",
    blurb:
      "Quarterly taxes, income chaos, and surviving Schedule C without losing your mind. (Our OG pillar.)",
    href: "/products/1099-money-system",
    accent: "sage",
  },
  {
    tag: "04",
    title: "AI + Fintech",
    blurb:
      "We test the tools so you don't have to. Some are magic. Some are nonsense. We say which.",
    href: "/blog",
    accent: "coral",
  },
  {
    tag: "05",
    title: "Side Hustles & Biz",
    blurb:
      'Side gigs, small business, and honest "is this actually worth my time?" math.',
    href: "/blog",
    accent: "sage",
  },
  {
    tag: "06",
    title: "Money Mindset",
    blurb:
      "Finance without shame, gendered defaults, or a $99/year guilt trip. Just real talk.",
    href: "/blog",
    accent: "coral",
  },
];

const painPoints = [
  {
    emoji: "😬",
    heading: "Your finances are vibes-based",
    body: "Some months feel fine. Some months feel doomed. There's no actual data — just guessing. One good spreadsheet replaces the guessing with numbers you can argue with.",
  },
  {
    emoji: "💳",
    heading: "You're leaving rewards on the table",
    body: "Someone out there is flying business class on points they earned buying groceries. That could be you. It's not complicated — it's just a system nobody taught you.",
  },
  {
    emoji: "🤖",
    heading: "Every new AI tool promises a revolution",
    body: "Most of them are wrappers. Some are actually useful. We try them all so you only pay for the good ones — if you pay at all.",
  },
];

const productFeatures = [
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
      <section className="bg-gradient-to-b from-sage/10 via-cream to-cream py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark text-sm font-semibold rounded-full mb-6 tracking-[0.15em] uppercase">
            Personal finance, unfiltered
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6 leading-[1.1]">
            Slay your accounts,
            <br />
            <span className="text-sage">not your sanity.</span>
          </h1>
          <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Spreadsheets, points strategy, AI experiments, and side-hustle
            reality checks. For people who want their money to be boring in a
            good way — and would like a funny friend along for the ride.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products/1099-money-system"
              className="px-8 py-4 bg-coral hover:bg-coral-dark text-white font-semibold rounded-lg transition-colors text-lg shadow-sm hover:shadow-md"
            >
              Get the 1099 Money System — $29
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 border border-sage text-sage-dark hover:bg-sage/10 font-semibold rounded-lg transition-colors text-lg"
            >
              Read the blog →
            </Link>
          </div>
          <p className="text-sm text-charcoal-light mt-4">
            One-time purchases. No subscriptions. No finance-bro vocabulary.
          </p>
        </div>
      </section>

      {/* ─── What we cover (pillars) ──────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24 border-t border-cream-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-3">
              What we&apos;re into
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal mb-4">
              Six pillars. One voice.
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
              We write about money the way actually-interesting people at a
              dinner party talk about it — practical, funny, a little weird, and
              always in plain English.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group relative bg-cream rounded-2xl p-6 border border-cream-dark hover:border-sage/40 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`font-heading font-bold text-xs tracking-wider ${
                      pillar.accent === "sage"
                        ? "text-sage-dark"
                        : "text-coral-dark"
                    }`}
                  >
                    {pillar.tag}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`w-10 h-1 rounded-full ${
                      pillar.accent === "sage" ? "bg-sage" : "bg-coral"
                    }`}
                  />
                </div>
                <h3 className="font-heading font-bold text-xl text-charcoal mb-2 group-hover:text-sage-dark transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {pillar.blurb}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pain points ──────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-20 border-y border-cream-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-3">
              Sound familiar?
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal mb-4">
              The three things that are quietly ruining your money.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((p) => (
              <div
                key={p.heading}
                className="bg-white rounded-2xl p-6 border border-cream-dark shadow-sm"
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

      {/* ─── Featured product ────────────────────────────────────────────── */}
      <section className="bg-sage/5 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-sage/15 text-sage-dark text-xs font-semibold rounded-full mb-4 uppercase tracking-wide">
                Featured product
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal mb-4">
                The 1099 Money System
              </h2>
              <p className="text-charcoal-light mb-6 leading-relaxed text-lg">
                Six interlocking Google Sheets that give you a complete picture
                of your freelance or 1099 money — income, taxes, invoices, and
                expenses. Setup takes under an hour. Built because every other
                option was either $99/year or a $7 Etsy file from someone who
                had clearly never filed a Schedule C.
              </p>
              <ul className="space-y-2 mb-8">
                {productFeatures.map((f) => (
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

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-cream-dark shadow-sm text-center">
                <p className="font-heading font-bold text-4xl text-sage mb-1">
                  $29
                </p>
                <p className="text-sm text-charcoal-light">One-time price</p>
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
          <p className="font-heading uppercase tracking-[0.2em] text-sm text-coral-dark mb-3">
            Real quick
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal mb-4 leading-tight">
            Your budgeting app costs more per year than our whole thing costs
            forever.
          </h2>
          <p className="text-charcoal-light mb-8 leading-relaxed text-lg">
            YNAB is $99/year. Monarch is $100/year. Tiller is $79/year. The
            1099 Money System is $29 once — and you can customize every cell
            because you own the spreadsheet. No lock-in, no monthly guilt, no
            &ldquo;did I actually use this?&rdquo; moment staring at your
            subscription list.
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
          <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
            <div>
              <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-2">
                From the blog
              </p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
                Latest writing
              </h2>
            </div>
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
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-3">
            Get the newsletter
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            One or two emails a week. New templates, new posts, and the
            occasional unhinged money hot take. No spam, no guilt trips, no
            &ldquo;you won&rsquo;t believe what this CPA does next&rdquo;
            nonsense.
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
