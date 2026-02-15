import type { Metadata } from "next";
import EmailSignup from "@/components/EmailSignup";

export const metadata: Metadata = {
  title: "Accounts Slayable — Coming Soon",
  description:
    "Financial tools for freelancers and 1099 workers are on the way. Sign up to be the first to know when we launch.",
  openGraph: {
    title: "Accounts Slayable — Coming Soon",
    description:
      "Financial tools for freelancers and 1099 workers are on the way. Sign up to be the first to know when we launch.",
    type: "website",
    url: "https://accountsslayable.com",
  },
  twitter: {
    card: "summary",
    title: "Accounts Slayable — Coming Soon",
    description:
      "Financial tools for freelancers and 1099 workers are on the way. Sign up to be the first to know when we launch.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Accounts Slayable",
  url: "https://accountsslayable.com",
  description:
    "Google Sheets templates and financial tools for freelancers, consultants, and 1099 workers.",
  publisher: {
    "@type": "Organization",
    name: "Accounts Slayable",
    url: "https://accountsslayable.com",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="flex-1 flex items-center justify-center py-20 sm:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage-dark text-sm font-semibold rounded-full mb-6 tracking-wide uppercase">
            Under Construction
          </span>

          {/* Headline */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-4 leading-tight">
            Something slayable
            <br />
            <span className="text-sage">is coming.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-charcoal-light mb-10 max-w-lg mx-auto">
            Financial tools for freelancers and 1099 workers — built to help you
            stop guessing and start slaying your money.
          </p>

          {/* Divider accent */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="h-px w-12 bg-cream-dark" />
            <span className="text-sage text-xl">&#9670;</span>
            <span className="h-px w-12 bg-cream-dark" />
          </div>

          {/* Email signup — the real MVP */}
          <div className="max-w-md mx-auto">
            <EmailSignup
              heading="Be the first to know"
              subheading="Sign up and we&rsquo;ll let you know the moment we launch — plus a free checklist to get your freelance finances in order."
            />
          </div>
        </div>
      </section>
    </>
  );
}
