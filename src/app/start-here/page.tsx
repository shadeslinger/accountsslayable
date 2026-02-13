import type { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "New to Accounts Slayable? Here's the best way to get started with our freelancer financial tools and resources.",
};

const steps = [
  {
    number: "01",
    title: "Sign up for free resources",
    description:
      "Join the email list and get our free checklist for organizing your freelance finances. It takes 15 minutes and gives you a clear starting point.",
    cta: null, // EmailSignup component rendered inline
  },
  {
    number: "02",
    title: "Read the essentials",
    description:
      "Start with our foundational content on the blog — practical tips for freelancers and 1099 workers who want to stop guessing with their money.",
    cta: { label: "Visit the blog", href: "/blog" },
  },
  {
    number: "03",
    title: "Browse the templates",
    description:
      "When you're ready, check out our Google Sheets templates. They're designed to be simple, useful, and worth every penny.",
    cta: { label: "Browse templates", href: "/shop" },
  },
  {
    number: "04",
    title: "Follow along",
    description:
      "We share tips, updates, and behind-the-scenes content on social media. Follow along for regular financial planning content.",
    cta: null, // Social links coming soon
  },
];

export default function StartHerePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage/10 to-cream py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal mb-4">
            New here? Welcome.
          </h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Here&apos;s the quickest path from &ldquo;my finances are a
            mess&rdquo; to &ldquo;I actually know what&apos;s going on.&rdquo;
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="space-y-12 list-none pl-0">
            {steps.map((step, i) => (
              <li key={step.number} className="flex gap-6">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage/10 text-sage font-heading font-bold text-lg" aria-hidden="true">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-xl text-charcoal mb-2">
                    {step.title}
                  </h2>
                  <p className="text-charcoal-light mb-4">
                    {step.description}
                  </p>

                  {/* Step 1: inline email signup */}
                  {i === 0 && (
                    <EmailSignup
                      heading="Get the free checklist"
                      subheading="Enter your email and we'll send it right over."
                    />
                  )}

                  {/* Steps with CTA links */}
                  {step.cta && (
                    <Link
                      href={step.cta.href}
                      className="inline-block px-6 py-3 bg-white hover:bg-cream-dark text-charcoal font-semibold rounded-lg border border-cream-dark transition-colors"
                    >
                      {step.cta.label} &rarr;
                    </Link>
                  )}

                  {/* Step 4: social coming soon */}
                  {i === 3 && (
                    <p className="text-sm text-charcoal-light/70 italic">
                      Social media links coming soon — for now, the newsletter
                      is the best way to stay connected.
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
