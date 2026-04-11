import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { getAllPillars } from "@/lib/pillars";
import BlogPostCard from "@/components/BlogPostCard";
import EmailSignup from "@/components/EmailSignup";

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog — Accounts Slayable",
  description:
    "Personal finance writing across six pillars — budgets, points & rewards, freelance & 1099, AI + fintech, side hustles, and money mindset.",
  url: "https://accountsslayable.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Accounts Slayable",
    url: "https://accountsslayable.com",
  },
};

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Personal finance writing across six pillars — budgets, points & rewards, freelance & 1099, AI + fintech, side hustles, and money mindset.",
  openGraph: {
    title: "Blog — Accounts Slayable",
    description:
      "Personal finance writing across six pillars — budgets, points & rewards, freelance & 1099, AI + fintech, side hustles, and money mindset.",
    type: "website",
    url: "https://accountsslayable.com/blog",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const pillars = getAllPillars();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-3">
        Writing
      </p>
      <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-4 text-charcoal">
        The blog
      </h1>
      <p className="text-charcoal-light text-lg mb-12 max-w-2xl">
        Personal finance, points strategy, AI experiments, and side-hustle
        reality checks. Written in plain English, with as little finance-bro
        vocabulary as we can manage.
      </p>

      {/* Pillar quick-filter */}
      <div className="mb-12">
        <p className="text-sm font-semibold text-charcoal mb-3 uppercase tracking-wide">
          Browse by topic
        </p>
        <div className="flex flex-wrap gap-2">
          {pillars.map((p) => (
            <Link
              key={p.slug}
              href={`/topics/${p.slug}`}
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                p.accent === "sage"
                  ? "border-sage/30 text-sage-dark hover:bg-sage/10"
                  : "border-coral/30 text-coral-dark hover:bg-coral/10"
              }`}
            >
              {p.name}
            </Link>
          ))}
        </div>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 mb-16">
          <p className="text-charcoal-light text-lg">
            Posts are coming soon! Sign up below to get notified.
          </p>
        </div>
      )}

      <EmailSignup
        heading="Get new posts in your inbox"
        subheading="One or two emails a week across every pillar. No spam, no guilt trips, unsubscribe any time."
      />
    </div>
  );
}
