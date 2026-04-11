import type { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";
import PillarImage from "@/components/PillarImage";
import { getAllPillars, getPostsForPillar } from "@/lib/pillars";

const OG_IMAGE =
  "/api/og?title=Six%20pillars.%20One%20voice.&subtitle=Personal%20finance%2C%20points%2C%20freelance%2C%20AI%2C%20side%20hustles%2C%20and%20mindset";

export const metadata: Metadata = {
  title: "Topics",
  description:
    "The six pillars of Accounts Slayable — personal finance, points & rewards, freelance & 1099, AI + fintech, side hustles, and money mindset. Pick the one that sounds like your life right now.",
  openGraph: {
    title: "Topics — Accounts Slayable",
    description:
      "Browse the six content pillars: personal finance, points & rewards, freelance & 1099, AI + fintech, side hustles, and money mindset.",
    type: "website",
    url: "https://accountsslayable.com/topics",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Topics — Accounts Slayable",
    description:
      "The six content pillars we cover, all in one place.",
    images: [OG_IMAGE],
  },
};

const topicsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Topics — Accounts Slayable",
  description:
    "The six content pillars covered by Accounts Slayable.",
  url: "https://accountsslayable.com/topics",
};

export default function TopicsPage() {
  const pillars = getAllPillars();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(topicsJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sage/10 via-cream to-cream py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-4">
            What we cover
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal mb-6 leading-tight">
            Six pillars. One voice.
          </h1>
          <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl mx-auto">
            Accounts Slayable writes about personal finance the way real people
            actually live it — across taxes, points, tools, side hustles, and
            the feelings part. Pick whichever pillar matches the thing keeping
            you up at night.
          </p>
        </div>
      </section>

      {/* Pillar grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const postCount = getPostsForPillar(pillar.slug).length;
              return (
                <Link
                  key={pillar.slug}
                  href={`/topics/${pillar.slug}`}
                  className="group relative bg-white rounded-2xl p-8 border border-cream-dark hover:border-sage/40 hover:shadow-md transition-all"
                >
                  <PillarImage
                    slug={pillar.slug}
                    alt={`${pillar.name} illustration`}
                    variant="card"
                  />
                  <div className="flex items-start justify-between mb-5">
                    <span
                      className={`font-heading font-bold text-xs tracking-wider ${
                        pillar.accent === "sage"
                          ? "text-sage-dark"
                          : "text-coral-dark"
                      }`}
                    >
                      {pillar.number} / 06
                    </span>
                    <span
                      aria-hidden="true"
                      className={`w-12 h-1 rounded-full ${
                        pillar.accent === "sage" ? "bg-sage" : "bg-coral"
                      }`}
                    />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-charcoal mb-3 group-hover:text-sage-dark transition-colors">
                    {pillar.name}
                  </h2>
                  <p className="text-charcoal-light mb-5 leading-relaxed">
                    {pillar.tagline}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-charcoal-light/70">
                      {postCount === 0
                        ? "Coming soon"
                        : `${postCount} post${postCount === 1 ? "" : "s"}`}
                    </span>
                    <span className="text-sage-dark font-medium group-hover:text-sage transition-colors">
                      Explore →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="py-16 sm:py-20 bg-sage/5 border-t border-cream-dark">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailSignup
            heading="One email a week, all pillars"
            subheading="We'll send the best new writing from across every pillar — points, AI, personal finance, and the occasional money hot take."
          />
        </div>
      </section>
    </>
  );
}
