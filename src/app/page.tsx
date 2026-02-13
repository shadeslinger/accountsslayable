import type { Metadata } from "next";
import Hero from "@/components/Hero";
import EmailSignup from "@/components/EmailSignup";

export const metadata: Metadata = {
  title: "Accounts Slayable — Financial Tools for Freelancers",
  description:
    "Google Sheets templates and financial tools for freelancers, consultants, and 1099 workers. Track income, set aside taxes, and stop guessing with your money.",
  openGraph: {
    title: "Accounts Slayable — Financial Tools for Freelancers",
    description:
      "Google Sheets templates built for 1099 workers. Track income, set aside taxes, manage invoices — buy once, own forever.",
    type: "website",
    url: "https://accountsslayable.com",
  },
  twitter: {
    card: "summary",
    title: "Accounts Slayable — Financial Tools for Freelancers",
    description:
      "Google Sheets templates built for 1099 workers. Track income, set aside taxes, manage invoices — buy once, own forever.",
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

const features = [
  {
    title: "Built for 1099 chaos",
    description:
      "Irregular income, multiple clients, quarterly taxes — these templates were designed for how freelancers actually work.",
    icon: "📊",
  },
  {
    title: "Buy once, own forever",
    description:
      "No subscriptions, no monthly fees. Pay once and the spreadsheet is yours to customize however you want.",
    icon: "💰",
  },
  {
    title: "Education baked in",
    description:
      "Every template includes tips, explanations, and \"when to call a pro\" guidance. Not just cells — context.",
    icon: "📚",
  },
];

const painPoints = [
  "You set aside money for quarterly taxes... sometimes... maybe",
  "Your \"bookkeeping\" is a notes app and vibes",
  'You\'ve Googled "am I supposed to pay taxes on this?" more than once',
  "You have no idea if you actually made money last month",
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      {/* Value propositions */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-center mb-12 text-charcoal">
            Why freelancers love these templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-charcoal-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points / "Is this you?" */}
      <section className="py-16 sm:py-20 bg-sage/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-center mb-4 text-charcoal">
            Sound familiar?
          </h2>
          <p className="text-center text-charcoal-light mb-8">
            If any of these hit a little too close to home, you&apos;re in the
            right place.
          </p>
          <ul className="space-y-4">
            {painPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-cream-dark"
              >
                <span className="text-coral text-xl leading-none mt-0.5">
                  ✓
                </span>
                <span className="text-charcoal">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Email signup */}
      <section id="signup" className="py-16 sm:py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailSignup />
        </div>
      </section>
    </>
  );
}
