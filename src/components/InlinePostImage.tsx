import Image from "next/image";

interface InlinePostImageProps {
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Inline illustration for MDX blog posts.
 *
 * Used inside blog post markdown via:
 *   <InlinePostImage src="/images/blog/foo.webp" alt="..." caption="..." />
 *
 * Passed to <MDXRemote> via the `components` prop in src/app/blog/[slug]/page.tsx.
 */
export default function InlinePostImage({
  src,
  alt,
  caption,
}: InlinePostImageProps) {
  return (
    <figure className="my-10 not-prose">
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-cream border border-cream-dark shadow-sm">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="text-sm text-charcoal-light/80 text-center mt-3 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
