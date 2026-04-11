import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import EmailSignup from "@/components/EmailSignup";
import BlogPostCard from "@/components/BlogPostCard";
import PillarImage from "@/components/PillarImage";
import {
  getAllPillars,
  getPillarBySlug,
  getPostsForPillar,
  getRelatedPillars,
} from "@/lib/pillars";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPillars().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) return { title: "Topic Not Found" };

  const ogImage = `/api/og?title=${encodeURIComponent(
    pillar.name
  )}&subtitle=${encodeURIComponent(pillar.tagline)}&accent=${
    pillar.accent
  }&pillar=${pillar.number}`;

  return {
    title: pillar.name,
    description: pillar.description,
    openGraph: {
      title: `${pillar.name} — Accounts Slayable`,
      description: pillar.description,
      type: "website",
      url: `https://accountsslayable.com/topics/${pillar.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: pillar.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pillar.name} — Accounts Slayable`,
      description: pillar.description,
      images: [ogImage],
    },
  };
}

export default async function PillarPage({ params }: Props) {
  const { slug } = await params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) notFound();

  const posts = getPostsForPillar(slug);
  const related = getRelatedPillars(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${pillar.name} — Accounts Slayable`,
    description: pillar.description,
    url: `https://accountsslayable.com/topics/${pillar.slug}`,
    about: {
      "@type": "Thing",
      name: pillar.name,
      description: pillar.description,
    },
  };

  const accentClasses =
    pillar.accent === "sage"
      ? {
          eyebrow: "text-sage-dark",
          heroBg: "from-sage/15 via-sage/5 to-cream",
          numberBg: "bg-sage/10 text-sage-dark",
          accentBar: "bg-sage",
          buttonPrimary: "bg-sage hover:bg-sage-dark",
        }
      : {
          eyebrow: "text-coral-dark",
          heroBg: "from-coral/10 via-coral/5 to-cream",
          numberBg: "bg-coral/10 text-coral-dark",
          accentBar: "bg-coral",
          buttonPrimary: "bg-coral hover:bg-coral-dark",
        };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className={`bg-gradient-to-b ${accentClasses.heroBg} py-16 sm:py-24`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-heading font-bold text-lg ${accentClasses.numberBg}`}
                  aria-hidden="true"
                >
                  {pillar.number}
                </span>
                <span
                  className={`font-heading uppercase tracking-[0.2em] text-sm ${accentClasses.eyebrow}`}
                >
                  Topic {pillar.number} of 06
                </span>
              </div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6 leading-[1.1]">
                {pillar.name}
              </h1>
              <p className="text-lg sm:text-xl text-charcoal-light leading-relaxed max-w-2xl">
                {pillar.tagline}
              </p>
            </div>
            <PillarImage
              slug={pillar.slug}
              alt={`${pillar.name} illustration`}
              variant="hero"
              priority
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-charcoal leading-relaxed mb-10">
            {pillar.intro}
          </p>

          <div className={`h-1 w-16 rounded-full ${accentClasses.accentBar} mb-8`} aria-hidden="true" />

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal mb-6">
            What you&apos;ll find here
          </h2>
          <ul className="space-y-3">
            {pillar.themes.map((theme) => (
              <li key={theme} className="flex gap-3 text-charcoal-light">
                <span
                  aria-hidden="true"
                  className={`shrink-0 mt-2 w-1.5 h-1.5 rounded-full ${accentClasses.accentBar}`}
                />
                <span className="text-lg">{theme}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured product (if applicable) */}
      {pillar.product && (
        <section className="py-16 sm:py-20 bg-sage/5 border-y border-sage/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-3">
              Flagship product for this pillar
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal mb-4">
              {pillar.product.name}
            </h2>
            <p className="text-lg text-charcoal-light mb-8 max-w-2xl mx-auto">
              {pillar.product.blurb}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={pillar.product.href}
                className={`px-8 py-4 text-white font-semibold rounded-lg transition-colors text-lg shadow-sm ${accentClasses.buttonPrimary}`}
              >
                See {pillar.product.name} — {pillar.product.price}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Posts */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal mb-10">
            Writing in this pillar
          </h2>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-cream rounded-2xl border border-cream-dark p-10 text-center">
              <p className="text-charcoal-light text-lg leading-relaxed">
                {pillar.emptyState}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Related pillars */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20 bg-cream border-t border-cream-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-3 text-center">
              Related topics
            </p>
            <h2 className="font-heading font-bold text-3xl text-charcoal mb-10 text-center">
              If you liked this, you&apos;ll probably like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/topics/${r.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-cream-dark hover:border-sage/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={`font-heading font-bold text-xs tracking-wider ${
                        r.accent === "sage" ? "text-sage-dark" : "text-coral-dark"
                      }`}
                    >
                      {r.number} / 06
                    </span>
                    <span
                      aria-hidden="true"
                      className={`w-10 h-1 rounded-full ${
                        r.accent === "sage" ? "bg-sage" : "bg-coral"
                      }`}
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-charcoal mb-2 group-hover:text-sage-dark transition-colors">
                    {r.name}
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">
                    {r.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Email CTA */}
      <section className="py-16 sm:py-20 bg-sage/5">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailSignup
            heading={`Get ${pillar.name} in your inbox`}
            subheading="New posts, new tools, and the occasional hot take — straight to your email. No spam, unsubscribe any time."
          />
        </div>
      </section>
    </>
  );
}
