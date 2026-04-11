import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import BlogHero from "@/components/BlogHero";
import EmailSignup from "@/components/EmailSignup";
import InlinePostImage from "@/components/InlinePostImage";

const mdxComponents = {
  InlinePostImage,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const ogImage = `/api/og?title=${encodeURIComponent(
    post.title
  )}&subtitle=${encodeURIComponent(post.description)}`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Accounts Slayable"],
      tags: post.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Accounts Slayable",
      url: "https://accountsslayable.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Accounts Slayable",
      url: "https://accountsslayable.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://accountsslayable.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BlogHero slug={post.slug} title={post.title} priority />
        <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-sage/10 text-sage-dark px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal mb-4">
          {post.title}
        </h1>
        <time dateTime={post.date} className="text-charcoal-light">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>

      <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-charcoal prose-p:text-charcoal-light prose-a:text-sage prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>

      <div className="mt-16">
        <EmailSignup
          heading="Liked this post?"
          subheading="Get more freelance finance tips delivered to your inbox every week."
        />
      </div>
    </article>
    </>
  );
}
