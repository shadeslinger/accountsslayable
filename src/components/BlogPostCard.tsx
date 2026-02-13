import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="relative bg-white rounded-xl p-6 shadow-sm border border-cream-dark hover:shadow-md transition-shadow">
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="relative z-10 text-xs font-medium bg-sage/10 text-sage-dark px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="font-heading font-semibold text-xl mb-2 text-charcoal">
        <Link
          href={`/blog/${post.slug}`}
          className="hover:text-sage transition-colors after:absolute after:inset-0"
        >
          {post.title}
        </Link>
      </h2>
      <p className="text-charcoal-light mb-3">{post.description}</p>
      <time dateTime={post.date} className="text-sm text-charcoal-light">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
    </article>
  );
}
