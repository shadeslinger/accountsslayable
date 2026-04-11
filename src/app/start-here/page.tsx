import type { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";
import { getAllPillars } from "@/lib/pillars";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "New to Accounts Slayable? Here's the shortest path from 'my finances are chaos' to 'I actually know what's going on' — across personal finance, points, freelancing, AI, side hustles, and mindset.",
  openGraph: {
    title: "Start Here — Accounts Slayable",
    description:
      "New to Accounts Slayable? Here's the shortest path from 'my finances are chaos' to 'I actually know what's going on.'",
    type: "website",
    url: "https://accountsslayable.com/start-here",
  },
};

const steps = [
  {
    number: "01",
    title: "Grab the free checklist",
    description:
      "Join the email list and get our free Slayable Money Reset checklist — 15 minutes of setup that gives you a clear baseline, no matter which pillar you care about.",
    kind: "email" as const,
  },
  {
    number: "02",
    title: "Pick your flavor of chaos",
    description:
      "Browse the six pillars we cover and pick whichever one sounds like your current life. You don't have to commit — you can hop between them.",
    kind: "link" as const,
    cta: { label: "Browse topics", href: "/topics" },
  },
  {
    number: "03",
    title: "Read the essentials",
    description:
      "Each pillar has a growing library of posts. Start with the cornerstone writing for whichever topic you picked — that's usually the deepest, most useful piece.",
    kind: "link" as const,
    cta: { label: "Visit the blog", href: "/blog" },
  },
  {
    number: "04",
    title: "Check the shop",
    description:
      "When you're ready, browse the templates. The 1099 Money System is our flagship for freelancers; more are in the oven for the other pillars.",
    kind: "link" as const,
    cta: { label: "Browse the shop", href: "/shop" },
  },
];

export default function StartHerePage() {
  const pillars = getAllPillars();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage/10 via-cream to-cream py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-4">
            Welcome
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6 leading-[1.1]">
            New here? Pull up a chair.
          </h1>
          <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl mx-auto">
            Accounts Slayable writes about money the way real people actually
            live it. Here&apos;s the shortest path from &ldquo;this is chaos&rdquo;
            to &ldquo;I have a system,&rdquo; regardless of which pillar you&rsquo;re
            drowning in.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="space-y-12 list-none pl-0">
            {steps.map((step, i) => (
              <li key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage/10 text-sage-dark font-heading font-bold text-xl"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-2xl text-charcoal mb-3">
                    {step.title}
                  </h2>
                  <p className="text-charcoal-light text-lg mb-5 leading-relaxed">
                    {step.description}
                  </p>

                  {step.kind === "email" && (
                    <EmailSignup
                      heading="Get the free checklist"
                      subheading="Enter your email and we'll send it right over."
                    />
                  )}

                  {step.kind === "link" && step.cta && (
                    <Link
                      href={step.cta.href}
                      className="inline-block px-6 py-3 bg-white hover:bg-cream-dark text-charcoal font-semibold rounded-lg border border-cream-dark transition-colors"
                    >
                      {step.cta.label} &rarr;
                    </Link>
                  )}

                  {i === steps.length - 1 && (
                    <p className="text-sm text-charcoal-light/70 italic mt-4">
                      Social media links coming soon — for now, the newsletter
                      is the best way to stay in the loop.
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pick your pillar */}
      <section className="py-16 sm:py-24 bg-sage/5 border-y border-sage/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-3">
              Pick a pillar
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal mb-4">
              Or skip straight to the thing you care about
            </h2>
            <p className="text-charcoal-light max-w-xl mx-auto">
              If you already know what&apos;s keeping you up at night, jump
              directly to that pillar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <Link
                key={p.slug}
                href={`/topics/${p.slug}`}
                className="group bg-white rounded-2xl p-6 border border-cream-dark hover:border-sage/40 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`font-heading font-bold text-xs tracking-wider ${
                      p.accent === "sage" ? "text-sage-dark" : "text-coral-dark"
                    }`}
                  >
                    {p.number} / 06
                  </span>
                  <span
                    aria-hidden="true"
                    className={`w-10 h-1 rounded-full ${
                      p.accent === "sage" ? "bg-sage" : "bg-coral"
                    }`}
                  />
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2 group-hover:text-sage-dark transition-colors">
                  {p.name}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {p.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
