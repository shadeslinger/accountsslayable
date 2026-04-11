import type { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";
import PillarImage from "@/components/PillarImage";
import { getAllPillars } from "@/lib/pillars";

const HOME_OG_IMAGE =
  "/api/og?title=Slay%20your%20accounts%2C%20not%20your%20sanity&subtitle=Personal%20finance%2C%20points%20strategy%2C%20AI%20experiments%2C%20and%20side-hustle%20reality%20checks";

export const metadata: Metadata = {
  title: "Accounts Slayable — Tools and writing for your money",
  description:
    "Spreadsheet templates and plain-English writing about personal finance, credit card points, freelance taxes, side hustles, and the feelings part of money. Buy once, own forever.",
  openGraph: {
    title: "Accounts Slayable — Tools and writing for your money",
    description:
      "Spreadsheet templates and plain-English writing about personal finance, credit card points, freelance taxes, and side hustles.",
    type: "website",
    url: "https://accountsslayable.com",
    images: [
      { url: HOME_OG_IMAGE, width: 1200, height: 630, alt: "Accounts Slayable" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounts Slayable — Tools and writing for your money",
    description:
      "Spreadsheet templates and plain-English writing for people who want their finances to be boring in a good way.",
    images: [HOME_OG_IMAGE],
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

const pillars = getAllPillars().map((p) => ({
  slug: p.slug,
  tag: p.number,
  title: p.name,
  blurb: p.tagline,
  href: `/topics/${p.slug}`,
  accent: p.accent,
}));

const painPoints = [
  {
    emoji: "😬",
    heading: "Your finances are vibes-based",
    body: "Some months feel fine, some feel doomed, and you can't explain why either way. A spreadsheet replaces the guessing with numbers you can argue with.",
  },
  {
    emoji: "💳",
    heading: "Rewards you're leaving on the table",
    body: "Someone out there is flying business class on points they earned buying groceries. That someone could be you. It's a system nobody bothered to teach you.",
  },
  {
    emoji: "🤖",
    heading: "Another AI finance tool, probably a wrapper",
    body: "Most new AI finance apps are wrappers around ChatGPT with a fresh coat of paint. A few aren't. We try them so you only pay for the ones that earn it.",
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
      <section className="relative bg-gradient-to-b from-sage/10 via-cream to-cream py-20 sm:py-28 overflow-hidden">
        {/* Decorative blobs — positioned absolutely, hidden on tiny screens */}
        <svg
          aria-hidden="true"
          className="hidden sm:block absolute -top-16 -left-16 w-80 h-80 text-sage/15 pointer-events-none"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M45.6,-60.5C58.3,-52.3,67.2,-37.6,71.8,-21.5C76.4,-5.4,76.6,12,70.6,27.2C64.6,42.4,52.4,55.5,37.7,63.5C23,71.6,5.7,74.5,-10.9,71.7C-27.5,68.9,-43.4,60.4,-55.4,47.5C-67.5,34.5,-75.7,17.3,-76.9,-0.7C-78.1,-18.7,-72.4,-37.3,-60.5,-46.5C-48.6,-55.7,-30.6,-55.3,-14.9,-52.9C0.7,-50.5,14,-46.1,45.6,-60.5Z" transform="translate(100 100)" />
        </svg>
        <svg
          aria-hidden="true"
          className="hidden sm:block absolute top-12 -right-20 w-72 h-72 text-coral/10 pointer-events-none"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M52.9,-63.7C65.6,-52,70.5,-32.7,71.6,-14.3C72.7,4.1,70,21.6,61.5,36.1C53,50.6,38.7,62.1,22.4,68.6C6.2,75.1,-12,76.6,-28.1,71.1C-44.1,65.6,-58,53.1,-65.8,37.8C-73.7,22.5,-75.5,4.4,-71.6,-11.8C-67.6,-28,-57.8,-42.3,-44.7,-54.4C-31.6,-66.5,-15.8,-76.4,1.4,-78.1C18.6,-79.8,40.2,-75.4,52.9,-63.7Z" transform="translate(100 100)" />
        </svg>
        <svg
          aria-hidden="true"
          className="hidden md:block absolute bottom-8 left-1/4 w-24 h-24 text-coral/20 pointer-events-none"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
        <svg
          aria-hidden="true"
          className="hidden md:block absolute top-1/3 right-1/4 w-16 h-16 text-sage/30 pointer-events-none"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark text-sm font-semibold rounded-full mb-6 tracking-[0.15em] uppercase">
            Personal finance, unfiltered
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6 leading-[1.1]">
            Slay your accounts,
            <br />
            <span className="text-sage">not your sanity.</span>
          </h1>
          <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Spreadsheet templates and plain-English writing about budgets,
            credit card points, freelance taxes, and the rest of the things
            that make money feel bigger than it is. For people who want their
            finances to be boring in a good way.
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
              What we cover
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal mb-4">
              Six pillars. One voice.
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
              Writing for people who want their money to run quietly in the
              background, told in plain English.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group relative bg-cream rounded-2xl p-6 border border-cream-dark hover:border-sage/40 hover:shadow-md transition-all"
              >
                <PillarImage
                  slug={pillar.slug}
                  alt={`${pillar.title} illustration`}
                  variant="tile"
                />
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
              Three quiet ways your money gets away from you.
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
                Six interlocking Google Sheets covering income, quarterly
                taxes, invoices, and expenses for 1099 workers. Setup takes
                under an hour. Built because every other option was either
                $99 a year or a $7 Etsy file from someone who had clearly
                never filed a Schedule C.
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
            One more thing
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal mb-4 leading-tight">
            Your budgeting app costs more per year than this costs forever.
          </h2>
          <p className="text-charcoal-light mb-8 leading-relaxed text-lg">
            YNAB is $99 a year. Monarch is $100 a year. Tiller is $79 a year.
            The 1099 Money System is $29 once, and the spreadsheet is yours to
            modify. No lock-in, no renewal notices, no guilt about whether you
            got your money&rsquo;s worth this month.
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
            occasional unreasonable opinion about money. Unsubscribe any time.
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
