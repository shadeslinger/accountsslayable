import type { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

const shopJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Shop — Accounts Slayable",
  description:
    "Google Sheets templates and tools for personal finance, points & rewards, freelance work, and side hustles. Buy once, own forever.",
  url: "https://accountsslayable.com/shop",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://accountsslayable.com/products/1099-money-system",
        name: "The 1099 Money System",
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Google Sheets templates and tools for personal finance, points & rewards, freelance income, and side hustles. One-time purchases, no subscriptions.",
  openGraph: {
    title: "Shop — Accounts Slayable",
    description:
      "Google Sheets templates and tools for personal finance, points & rewards, freelance income, and side hustles. One-time purchases, no subscriptions.",
    type: "website",
    url: "https://accountsslayable.com/shop",
  },
};

interface Product {
  name: string;
  description: string;
  price: string;
  href: string;
  tag: string;
  pillarSlug?: string;
  status: "available" | "coming-soon";
}

const products: Product[] = [
  {
    name: "The 1099 Money System",
    description:
      "Everything a freelancer needs to track income, set aside taxes, manage invoices, and know if you're actually profitable. Six interlocking sheets, one afternoon of setup.",
    price: "$29",
    href: "/products/1099-money-system",
    tag: "Flagship",
    pillarSlug: "freelance-and-1099",
    status: "available",
  },
  {
    name: "Credit Card Rewards Tracker",
    description:
      "Track signup bonuses, minimum spends, annual fee renewals, and net value per card. Turn the points game into a spreadsheet you actually enjoy opening.",
    price: "$19",
    href: "#",
    tag: "Points & Rewards",
    pillarSlug: "points-and-rewards",
    status: "coming-soon",
  },
  {
    name: "AI Finance Prompt Library",
    description:
      "A curated pack of prompts for using Claude, ChatGPT, and Gemini as a budget coach, tax helper, and spreadsheet assistant — without giving up your bank login.",
    price: "$9",
    href: "#",
    tag: "AI + Fintech",
    pillarSlug: "ai-and-fintech",
    status: "coming-soon",
  },
  {
    name: "Side Hustle Income Tracker",
    description:
      "Multi-gig income and hours-worked sheet that calculates your real effective hourly rate — so you finally know if that thing is worth doing.",
    price: "$15",
    href: "#",
    tag: "Side Hustles",
    pillarSlug: "side-hustles",
    status: "coming-soon",
  },
];

export default function ShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sage/10 via-cream to-cream py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-4">
            The shop
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6 leading-[1.1]">
            Templates that do the hard part.
          </h1>
          <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl mx-auto">
            Google Sheets tools built across every pillar we cover — personal
            finance, points, freelancing, AI, side hustles. Buy once, use
            forever. No subscriptions. No lock-in.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const isAvailable = product.status === "available";
              const cardInner = (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={`inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${
                        isAvailable
                          ? "text-sage bg-sage/10"
                          : "text-charcoal-light bg-cream-dark/50"
                      }`}
                    >
                      {product.tag}
                    </span>
                    {!isAvailable && (
                      <span className="text-xs font-semibold text-coral-dark uppercase tracking-wide">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h2
                    className={`font-heading font-bold text-xl mb-2 transition-colors ${
                      isAvailable
                        ? "text-charcoal group-hover:text-sage-dark"
                        : "text-charcoal/70"
                    }`}
                  >
                    {product.name}
                  </h2>
                  <p
                    className={`mb-5 text-sm leading-relaxed ${
                      isAvailable ? "text-charcoal-light" : "text-charcoal-light/70"
                    }`}
                  >
                    {product.description}
                  </p>
                  <div className="flex items-end justify-between">
                    <p
                      className={`font-heading font-bold text-2xl ${
                        isAvailable ? "text-charcoal" : "text-charcoal/60"
                      }`}
                    >
                      {product.price}{" "}
                      <span className="text-sm font-normal text-charcoal-light">
                        one-time
                      </span>
                    </p>
                    {isAvailable && (
                      <span className="text-sage-dark font-medium text-sm group-hover:text-sage transition-colors">
                        View →
                      </span>
                    )}
                  </div>
                </>
              );

              if (isAvailable) {
                return (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="group relative bg-white rounded-2xl p-6 border shadow-sm border-cream-dark hover:shadow-md hover:border-sage/40 transition-all"
                  >
                    {cardInner}
                  </Link>
                );
              }
              return (
                <div
                  key={product.name}
                  className="group relative bg-cream/40 rounded-2xl p-6 border border-dashed border-cream-dark transition-all"
                >
                  {cardInner}
                </div>
              );
            })}

            {/* "And more" tile */}
            <div className="bg-cream/40 rounded-2xl p-6 border border-dashed border-cream-dark flex flex-col justify-center items-center text-center">
              <p className="text-charcoal font-semibold mb-2">More on the way</p>
              <p className="text-sm text-charcoal-light/80 mb-4">
                Homebuying readiness sheet, travel rewards planner, and whatever
                the next cornerstone idea is.
              </p>
              <p className="text-xs text-charcoal-light/70">
                Sign up below to get notified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by topic */}
      <section className="py-16 sm:py-20 bg-sage/5 border-y border-sage/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-3">
            Not sure what fits?
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal mb-4">
            Browse by topic instead
          </h2>
          <p className="text-charcoal-light text-lg mb-8 max-w-xl mx-auto">
            Each product belongs to one of the six pillars we cover. Start with
            whichever pillar sounds most like your current life.
          </p>
          <Link
            href="/topics"
            className="inline-block px-6 py-3 bg-sage hover:bg-sage-dark text-white font-semibold rounded-lg transition-colors"
          >
            See all topics →
          </Link>
        </div>
      </section>

      {/* Email CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailSignup
            heading="Get notified when new templates drop"
            subheading="Join the list and be the first to know about new tools, updates, and free resources."
          />
        </div>
      </section>
    </>
  );
}
