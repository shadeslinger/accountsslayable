import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogPostCard from "@/components/BlogPostCard";
import EmailSignup from "@/components/EmailSignup";

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog — Accounts Slayable",
  description:
    "Financial tips, spreadsheet tricks, and real talk for freelancers and 1099 workers.",
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
    "Financial tips, spreadsheet tricks, and real talk for freelancers and 1099 workers.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <h1 className="font-heading font-bold text-4xl mb-4 text-charcoal">
        Blog
      </h1>
      <p className="text-charcoal-light text-lg mb-12">
        Financial tips, spreadsheet tricks, and real talk for freelancers.
      </p>

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
        subheading="Weekly tips on freelance finances, templates, and the occasional spreadsheet glow-up."
      />
    </div>
  );
}
