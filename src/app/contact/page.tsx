import type { Metadata } from "next";
import Link from "next/link";

const OG_IMAGE =
  "/api/og?title=Get%20in%20touch&subtitle=Questions%2C%20feedback%2C%20partnerships%2C%20or%20just%20saying%20hi%20%E2%80%94%20we%20read%20everything.";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Accounts Slayable. Questions about templates, partnership inquiries, press, or anything else — we read everything.",
  openGraph: {
    title: "Contact — Accounts Slayable",
    description:
      "Get in touch with Accounts Slayable. We read everything.",
    type: "website",
    url: "https://accountsslayable.com/contact",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Accounts Slayable",
    description:
      "Get in touch with Accounts Slayable. We read everything.",
    images: [OG_IMAGE],
  },
};

const channels = [
  {
    heading: "Email",
    blurb:
      "Best way to reach us. One human reads everything. Response time is usually a couple of business days, longer if I'm deep in a spreadsheet.",
    link: {
      href: "mailto:hello@accountsslayable.com",
      label: "hello@accountsslayable.com",
    },
  },
  {
    heading: "Template support",
    blurb:
      "Having trouble with a template? Check the product page FAQ first — most common questions are covered there. If you're still stuck, email us and we'll sort it out.",
    link: {
      href: "/products/1099-money-system",
      label: "1099 Money System FAQ →",
    },
  },
  {
    heading: "Partnerships & press",
    blurb:
      "Working on something we might want to write about, or interested in collaborating on a template, course, or tool? Tell us the shape of the idea and we'll see if it fits.",
    link: {
      href: "mailto:hello@accountsslayable.com?subject=Partnership%20inquiry",
      label: "Pitch us →",
    },
  },
  {
    heading: "Feedback & requests",
    blurb:
      "Wish we'd write about a specific topic? Think a template is missing a feature? Tell us. This kind of feedback is how the roadmap gets built.",
    link: {
      href: "mailto:hello@accountsslayable.com?subject=Feedback",
      label: "Send feedback →",
    },
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage/10 via-cream to-cream py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading uppercase tracking-[0.2em] text-sm text-sage-dark mb-4">
            Say hi
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6 leading-[1.1]">
            Get in touch.
          </h1>
          <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl mx-auto">
            Questions about templates, feedback on the writing, partnerships,
            press inquiries, or just a note to say the site didn&apos;t suck —
            we read everything.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {channels.map((channel) => {
              const isExternal = channel.link.href.startsWith("mailto:");
              const LinkEl = isExternal ? "a" : Link;
              return (
                <div
                  key={channel.heading}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark"
                >
                  <h2 className="font-heading font-semibold text-lg text-charcoal mb-2">
                    {channel.heading}
                  </h2>
                  <p className="text-charcoal-light mb-4 leading-relaxed">
                    {channel.blurb}
                  </p>
                  <LinkEl
                    href={channel.link.href}
                    className="text-sage-dark hover:text-sage font-medium transition-colors"
                  >
                    {channel.link.label}
                  </LinkEl>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-cream border-t border-cream-dark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-charcoal-light leading-relaxed">
            Accounts Slayable is run by one person (hi, Adam) under Up &amp;
            Adam LLC. No support desk, no ticketing system, just email and a
            commitment to actually reading it. If something&apos;s urgent, put{" "}
            <span className="font-semibold text-charcoal">URGENT</span> in the
            subject line and we&apos;ll jump it to the top of the queue.
          </p>
        </div>
      </section>
    </>
  );
}
