import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import EmailSignup from "@/components/EmailSignup";

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

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
        <h1 className="font-[family-name:var(--font-montserrat)] font-bold text-4xl sm:text-5xl text-charcoal mb-4">
          {post.title}
        </h1>
        <time className="text-charcoal-light">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>

      <div className="prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-montserrat)] prose-headings:text-charcoal prose-p:text-charcoal-light prose-a:text-sage prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal">
        <MDXRemote source={post.content} />
      </div>

      <div className="mt-16">
        <EmailSignup
          heading="Liked this post?"
          subheading="Get more freelance finance tips delivered to your inbox every week."
        />
      </div>
    </article>
  );
}
