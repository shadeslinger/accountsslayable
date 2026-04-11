import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

interface PillarImageProps {
  slug: string;
  alt: string;
  /** Visual size slot. Controls wrapper className, not intrinsic image size. */
  variant?: "hero" | "card" | "thumb";
  priority?: boolean;
}

const variantClasses: Record<NonNullable<PillarImageProps["variant"]>, string> =
  {
    // Large, used on the pillar detail hero
    hero: "relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-cream border border-cream-dark shadow-sm",
    // Medium, used as a card thumbnail on /topics
    card: "relative w-full aspect-square rounded-xl overflow-hidden bg-cream/60 border border-cream-dark mb-5",
    // Small, used on the homepage pillar grid (icon-style)
    thumb:
      "relative w-16 h-16 rounded-xl overflow-hidden bg-cream/60 border border-cream-dark mb-4 flex-shrink-0",
  };

/**
 * Image for a content pillar.
 *
 * Looks for `/public/images/pillars/<slug>.{webp,jpg,jpeg,png}` and renders it
 * via next/image if found, or nothing if not. This lets the site degrade
 * gracefully while pillar illustrations are being generated one at a time.
 *
 * Generate via:
 *   npm run gen-image -- \
 *     --prompt "..." \
 *     --out public/images/pillars/<slug>.webp \
 *     --size square_hd
 */
export default function PillarImage({
  slug,
  alt,
  variant = "card",
  priority = false,
}: PillarImageProps) {
  const publicDir = path.join(process.cwd(), "public", "images", "pillars");
  const extensions = ["webp", "jpg", "jpeg", "png"];
  const existing = extensions
    .map((ext) => ({ ext, abs: path.join(publicDir, `${slug}.${ext}`) }))
    .find((candidate) => fs.existsSync(candidate.abs));

  if (!existing) return null;

  const src = `/images/pillars/${slug}.${existing.ext}`;

  return (
    <div className={variantClasses[variant]}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={
          variant === "hero"
            ? "(max-width: 768px) 100vw, 448px"
            : variant === "card"
              ? "(max-width: 768px) 100vw, 400px"
              : "64px"
        }
        className="object-cover"
      />
    </div>
  );
}
