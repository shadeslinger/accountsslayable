import type { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Accounts Slayable",
  description:
    "The story behind Accounts Slayable — finance tools for freelancers and 1099 workers who'd rather not think about money but kind of have to.",
  url: "https://accountsslayable.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Accounts Slayable",
    url: "https://accountsslayable.com",
    description:
      "Spreadsheets that respect your intelligence, your time, and your bank account.",
    founder: {
      "@type": "Person",
      name: "Adam",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Up & Adam LLC",
    },
  },
};

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Accounts Slayable — finance tools for freelancers and 1099 workers who'd rather not think about money but kind of have to.",
};

const beliefs = [
  {
    title: "Tools over advice",
    body: "You don't need another blog post telling you to save more. You need a spreadsheet that makes it easy. We lead with the tool.",
  },
  {
    title: "Buy once, own forever",
    body: "Your budget tracker shouldn't cost more than your streaming services. $29 one-time, yours forever, no sneaky renewal emails.",
  },
  {
    title: "Clarity over complexity",
    body: "If a finance tool needs a 40-minute tutorial to use, it's solving the wrong problem. Ours come with a one-page setup.",
  },
  {
    title: "No judgment, no defaults",
    body: "Finance apps love to assume things about you — your household, your job, your goals. Ours don't. You tell the spreadsheet who you are.",
  },
];

const forYou = [
  "Freelancers, consultants, and creators who'd rather spend 10 minutes with a good spreadsheet than 10 hours with a bad one",
  "Anyone who has ever said \"I'll figure out taxes later\" and then panicked in April",
  "People who want the calm of a system without the ick of corporate finance software",
  "Overthinkers who need a number in front of them before they can relax",
];

const notForYou = [
  "People who already love QuickBooks (bless you, keep going)",
  "Anyone hoping I'll tell them how to pick stocks — hard no, legally and otherwise",
  "Folks who want a subscription to hold their hand forever — no shade, just not my vibe",
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sage/15 via-sage/5 to-cream py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-4">
            The story
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
            Spreadsheets shouldn&apos;t feel like homework.
          </h1>
          <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl mx-auto">
            Accounts Slayable makes finance tools for people who&apos;d rather not
            think about money but kind of have to. Built by one person, for a lot
            of people in the same boat.
          </p>
        </div>
      </section>

      {/* Founder intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
            <div
              aria-hidden="true"
              className="shrink-0 w-24 h-24 rounded-full bg-sage flex items-center justify-center shadow-md ring-4 ring-cream"
            >
              <span className="font-heading font-bold text-4xl text-white">
                A
              </span>
            </div>
            <div>
              <p className="font-heading uppercase tracking-[0.2em] text-xs text-coral-dark mb-1">
                Hi, I&apos;m Adam
              </p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
                Founder, solo operator, spreadsheet enthusiast
              </h2>
            </div>
          </div>

          <div className="space-y-5 text-charcoal-light text-lg leading-relaxed">
            <p>
              I run Accounts Slayable out of <span className="font-semibold text-charcoal">Up &amp; Adam LLC</span>
              {" "}— a small, queer-run studio where I write about personal
              finance for people who&apos;d rather not think about money but kind
              of have to. Freelancers, W-2 folks, credit-card-rewards nerds,
              side-hustlers, AI enthusiasts trying to automate their budgets —
              this is for all of you. I&apos;m not a CPA. I&apos;m not a
              certified financial planner. I&apos;m the friend at the party who
              got roped into explaining quarterly taxes because everyone else
              was too embarrassed to ask.
            </p>
            <p>
              I started this because I was tired of watching smart, funny,
              talented people spiral every April over a shoebox of receipts, or
              pay $120 a year for a budgeting app they used twice, or miss out
              on $900 of travel rewards because nobody explained the system in
              plain English. The tools out there either cost $99 a year and
              guilt-tripped you for buying a latte, or they were $7 Etsy
              templates clearly built by someone who had never actually used
              them. Nothing in between felt made by a person who{" "}
              <em>got it</em>.
            </p>
            <p>
              So I built what I wanted: spreadsheets that respect your time, your
              intelligence, and your bank account. Tools that tell you what to do
              instead of just staring at you. No subscriptions. No shame. No
              finance-bro vocabulary. Just the good stuff, with enough
              personality that you might actually open them on a Sunday.
            </p>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-16 sm:py-20 bg-sage/5 border-y border-sage/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-3">
              The rules of the house
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
              What we believe
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {beliefs.map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-cream-dark hover:shadow-md hover:border-sage/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-8 h-8 rounded-full bg-coral/10 text-coral-dark font-heading font-bold flex items-center justify-center text-sm"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-light">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is (and isn't) for */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-3">
              Vibes check
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
              Who this is for
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-sage/10 rounded-xl p-8 border border-sage/20">
              <h3 className="font-heading font-semibold text-xl text-charcoal mb-5 flex items-center gap-2">
                <span aria-hidden="true">✓</span> You&apos;ll feel at home if
              </h3>
              <ul className="space-y-3 text-charcoal-light">
                {forYou.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-sage-dark mt-1"
                    >
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream rounded-xl p-8 border border-cream-dark">
              <h3 className="font-heading font-semibold text-xl text-charcoal mb-5 flex items-center gap-2">
                <span aria-hidden="true">✕</span> Probably not your scene if
              </h3>
              <ul className="space-y-3 text-charcoal-light">
                {notForYou.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-coral-dark mt-1"
                    >
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-cream to-sage/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal mb-4">
            Ready to slay some accounts?
          </h2>
          <p className="text-lg text-charcoal-light mb-8 max-w-xl mx-auto">
            Start with the 1099 Money System, or grab a free resource and kick
            the tires first. Either way, welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="px-8 py-4 bg-coral hover:bg-coral-dark text-white font-semibold rounded-lg text-lg transition-colors shadow-sm hover:shadow-md"
            >
              Browse the shop
            </Link>
            <Link
              href="/start-here"
              className="px-8 py-4 bg-white hover:bg-cream-dark text-charcoal font-semibold rounded-lg border border-cream-dark text-lg transition-colors"
            >
              Start here instead
            </Link>
          </div>
        </div>
      </section>

      {/* Email */}
      <section className="py-16 sm:py-20 bg-white border-t border-cream-dark">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailSignup
            heading="Get the occasional newsletter"
            subheading="Free resources, template announcements, and the occasional unhinged take on personal finance. No spam. Unsubscribe any time."
          />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 border-t border-cream-dark bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-charcoal-light/70 text-center leading-relaxed">
            Accounts Slayable is a brand of Up &amp; Adam LLC. All content is for
            informational and educational purposes only and is not financial,
            tax, or legal advice. For advice specific to your situation, please
            consult a licensed professional.
          </p>
        </div>
      </section>
    </>
  );
}
