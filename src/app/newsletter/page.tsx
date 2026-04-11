import type { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

const OG_IMAGE =
  "/api/og?title=The%20newsletter&subtitle=One%20or%20two%20emails%20a%20week.%20No%20spam.%20No%20guilt%20trips.";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "The Accounts Slayable newsletter — one or two emails a week covering personal finance, points strategy, AI experiments, and side-hustle reality checks. No spam, no guilt trips.",
  openGraph: {
    title: "The Accounts Slayable Newsletter",
    description:
      "One or two emails a week across every pillar — personal finance, points, freelance, AI, side hustles, and mindset. Written like you're a real adult with a brain.",
    type: "website",
    url: "https://accountsslayable.com/newsletter",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Accounts Slayable Newsletter",
    description:
      "One or two emails a week. No spam, no guilt trips, unsubscribe any time.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Newsletter — Accounts Slayable",
  description:
    "The Accounts Slayable newsletter — personal finance writing across six pillars, delivered to your inbox.",
  url: "https://accountsslayable.com/newsletter",
};

const whatYouGet = [
  {
    title: "One or two emails a week",
    body: "Not twelve. No engagement-farming. The best new writing and the occasional template drop, then out of your inbox.",
  },
  {
    title: "Writing from all six pillars",
    body: "Personal finance, points and rewards, freelance work, AI and fintech, side hustles, money mindset. One list, all of them.",
  },
  {
    title: "Useful stuff, written by a person",
    body: "One human writes this, reads it out loud, and cuts the parts that don't earn their length. No SEO-farmed listicles.",
  },
  {
    title: "First look at new templates",
    body: "Subscribers see new products before they go public and usually get a launch discount.",
  },
];

const whatWontHappen = [
  "Your email being sold to a third party",
  "A daily AI-slop digest with affiliate link farms",
  "A $99/year paywall creeping in later",
  "Subject lines that start with \"You won't believe\"",
];

export default function NewsletterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sage/10 via-cream to-cream py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-4">
            The newsletter
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6 leading-[1.1]">
            One email a week. Zero guilt trips.
          </h1>
          <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl mx-auto mb-10">
            The best new writing from Accounts Slayable, straight to your
            inbox. Personal finance, credit card points, freelance taxes,
            side hustles, and the feelings part of money. No spam.
            Unsubscribe any time.
          </p>
          <div className="max-w-md mx-auto">
            <EmailSignup
              heading=""
              subheading=""
            />
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-3">
              The promise
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
              What you&apos;ll actually get
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatYouGet.map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-cream-dark shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-9 h-9 rounded-full bg-sage/10 text-sage-dark font-heading font-bold flex items-center justify-center text-sm"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-light text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What won't happen */}
      <section className="py-16 sm:py-20 bg-cream border-y border-cream-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-heading uppercase tracking-[0.2em] text-sm text-coral-dark mb-3">
              The anti-promise
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
              What won&apos;t happen
            </h2>
          </div>
          <ul className="space-y-4 max-w-xl mx-auto">
            {whatWontHappen.map((item) => (
              <li
                key={item}
                className="flex gap-4 text-charcoal-light text-lg items-start"
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 mt-2 w-2 h-2 rounded-full bg-coral"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
            Ready? Good.
          </h2>
          <p className="text-charcoal-light mb-8 text-lg">
            Drop your email below and we&apos;ll save you a seat.
          </p>
          <EmailSignup heading="" subheading="" />
          <p className="text-sm text-charcoal-light/70 mt-6">
            Prefer to browse first?{" "}
            <Link
              href="/topics"
              className="text-sage-dark hover:text-sage underline underline-offset-4"
            >
              See the topics
            </Link>{" "}
            or{" "}
            <Link
              href="/blog"
              className="text-sage-dark hover:text-sage underline underline-offset-4"
            >
              read the blog
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
