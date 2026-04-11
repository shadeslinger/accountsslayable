import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

interface BlogHeroProps {
  slug: string;
  title: string;
  alt?: string;
  priority?: boolean;
}

/**
 * Hero image for blog posts.
 *
 * Convention: every blog post has an optional hero image at
 *   /public/images/blog/<slug>.{webp,jpg,jpeg,png}
 * If none exists, this component renders nothing (the post starts with its <h1>).
 *
 * Generate heroes via:
 *   npm run gen-image -- --prompt "..." --out public/images/blog/<slug>.webp
 */
export default function BlogHero({
  slug,
  title,
  alt,
  priority = false,
}: BlogHeroProps) {
  const publicDir = path.join(process.cwd(), "public", "images", "blog");
  const extensions = ["webp", "jpg", "jpeg", "png"];
  const existing = extensions
    .map((ext) => ({ ext, abs: path.join(publicDir, `${slug}.${ext}`) }))
    .find((candidate) => fs.existsSync(candidate.abs));

  if (!existing) return null;

  const src = `/images/blog/${slug}.${existing.ext}`;

  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-cream border border-cream-dark shadow-sm">
      <Image
        src={src}
        alt={alt ?? title}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover"
      />
    </div>
  );
}
