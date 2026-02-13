import type { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Accounts Slayable",
  description:
    "The story behind Accounts Slayable — why we build Google Sheets templates for freelancers and 1099 workers.",
  url: "https://accountsslayable.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Accounts Slayable",
    url: "https://accountsslayable.com",
    description:
      "Financial tools that respect your intelligence and your time.",
  },
};

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Accounts Slayable — why we build Google Sheets templates for freelancers and 1099 workers.",
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage/10 to-cream py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal mb-4">
            About Accounts Slayable
          </h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Financial tools that respect your intelligence and your time.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-charcoal mb-6">
            The short version
          </h2>
          <div className="space-y-4 text-charcoal-light text-lg">
            <p>
              [Hi, I&apos;m YOUR_NAME. A few sentences about who you are — your
              background, what you do, where you&apos;re based. Keep it human and
              conversational.]
            </p>
            <p>
              [Why you started Accounts Slayable. What problem were you trying
              to solve? Was it your own frustration with managing freelance
              finances? A gap you noticed in the tools available? A story about
              a specific moment that made you think &ldquo;there has to be a
              better way.&rdquo;]
            </p>
            <p>
              [What makes your approach different. Maybe it&apos;s that you
              believe financial tools should be simple, affordable, and
              actually useful — not another $99/year subscription that guilts
              you into logging every coffee purchase.]
            </p>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-16 sm:py-20 bg-sage/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-charcoal mb-8">
            What we believe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Tools over advice",
                body: "Most people don't need another article telling them to save more. They need a spreadsheet that makes it easy.",
              },
              {
                title: "Buy once, own forever",
                body: "Subscriptions have their place, but your budget tracker shouldn't cost more than your streaming services.",
              },
              {
                title: "Clarity over complexity",
                body: "If a financial tool needs a tutorial series to use, it's solving the wrong problem.",
              },
              {
                title: "Real talk, no judgment",
                body: "Everyone's starting from a different place. The goal is progress, not perfection.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-cream-dark"
              >
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal-light">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-charcoal-light mb-8">
            Check out the templates or sign up for free resources and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="px-8 py-4 bg-coral hover:bg-coral-dark text-white font-semibold rounded-lg text-lg transition-colors"
            >
              Browse templates
            </Link>
            <Link
              href="/start-here"
              className="px-8 py-4 bg-white hover:bg-cream-dark text-charcoal font-semibold rounded-lg border border-cream-dark text-lg transition-colors"
            >
              Start here
            </Link>
          </div>
        </div>
      </section>

      {/* Email */}
      <section className="py-16 sm:py-20 bg-sage/5">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailSignup
            heading="Stay in the loop"
            subheading="Free resources, new template announcements, and the occasional financial tip — no spam."
          />
        </div>
      </section>
    </>
  );
}
