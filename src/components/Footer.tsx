import Link from "next/link";

const quickLinks = [
  { href: "/topics", label: "Topics" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/start-here", label: "Start Here" },
];

const aboutLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/rss.xml", label: "RSS Feed", external: true },
];

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-charcoal text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading font-bold text-lg mb-2">
              Accounts Slayable
            </h3>
            <p className="text-cream-dark text-sm leading-relaxed mb-4">
              Slay your accounts, not your sanity.
            </p>
            <p className="text-cream-dark text-xs leading-relaxed">
              A DBA of Up &amp; Adam LLC. Run by one person. Read by
              (hopefully) many.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-cream-dark">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-dark hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-cream-dark">
              About
            </h4>
            <ul className="space-y-2 text-sm">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      className="text-cream-dark hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-cream-dark hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social placeholder */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-cream-dark">
              Follow Along
            </h4>
            <ul className="space-y-2 text-sm text-cream-dark/70">
              <li>TikTok (coming soon)</li>
              <li>Instagram (coming soon)</li>
              <li>YouTube (coming soon)</li>
            </ul>
            <p className="text-xs text-cream-dark/60 mt-4 leading-relaxed">
              Until social is live, the{" "}
              <Link
                href="/newsletter"
                className="underline hover:text-white transition-colors"
              >
                newsletter
              </Link>{" "}
              is the best way to stay in touch.
            </p>
          </div>
        </div>

        <div className="border-t border-charcoal-light/30 mt-10 pt-8 text-xs text-cream-dark/70">
          <p>
            &copy; {new Date().getFullYear()} Accounts Slayable, a DBA of Up
            &amp; Adam LLC. All rights reserved.
          </p>
          <p className="mt-2 leading-relaxed">
            For informational and educational purposes only. Not financial,
            tax, or legal advice. For advice specific to your situation,
            consult a licensed professional. Google Sheets is a trademark of
            Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
