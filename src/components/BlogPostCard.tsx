import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-xl p-6 shadow-sm border border-cream-dark hover:shadow-md transition-shadow">
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium bg-sage/10 text-sage-dark px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/blog/${post.slug}`}>
        <h2 className="font-[family-name:var(--font-montserrat)] font-semibold text-xl mb-2 text-charcoal hover:text-sage transition-colors">
          {post.title}
        </h2>
      </Link>
      <p className="text-charcoal-light mb-3">{post.description}</p>
      <time className="text-sm text-charcoal-light">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
    </article>
  );
}
