import type { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Google Sheets templates for freelancers and 1099 workers. Track income, manage taxes, and get your finances organized.",
};

const products = [
  {
    name: "The 1099 Money System",
    description:
      "Everything a freelancer needs to track income, set aside taxes, manage invoices, and know if you're actually profitable.",
    price: "$29",
    href: "/products/1099-money-system",
    tag: "Flagship",
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sage/10 to-cream py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-montserrat)] font-bold text-4xl sm:text-5xl text-charcoal mb-4">
            Templates that do the hard part
          </h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Google Sheets tools built for freelancers and 1099 workers. Buy once,
            use forever — no subscriptions, no app lock-in.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-cream-dark hover:shadow-md hover:border-sage/40 transition-all"
              >
                {product.tag && (
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide text-sage bg-sage/10 px-3 py-1 rounded-full mb-4">
                    {product.tag}
                  </span>
                )}
                <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-charcoal mb-2 group-hover:text-sage-dark transition-colors">
                  {product.name}
                </h2>
                <p className="text-charcoal-light mb-4">{product.description}</p>
                <p className="font-[family-name:var(--font-montserrat)] font-bold text-2xl text-charcoal">
                  {product.price}{" "}
                  <span className="text-sm font-normal text-charcoal-light">
                    one-time
                  </span>
                </p>
              </Link>
            ))}

            {/* Coming soon placeholder */}
            <div className="bg-cream/50 rounded-2xl p-6 border border-dashed border-cream-dark flex flex-col items-center justify-center text-center min-h-[200px]">
              <p className="text-charcoal-light font-medium mb-1">
                More templates coming soon
              </p>
              <p className="text-sm text-charcoal-light/70">
                Sign up below to get notified
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="py-16 sm:py-20 bg-sage/5">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailSignup
            heading="Get notified when new templates drop"
            subheading="Join the list and be the first to know about new tools, updates, and free resources."
          />
        </div>
      </section>
    </>
  );
}
