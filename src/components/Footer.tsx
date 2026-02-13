import Link from "next/link";

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-charcoal text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-lg mb-2">
              Accounts Slayable
            </h3>
            <p className="text-cream-dark text-sm">
              Slay your accounts, not your sanity.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[family-name:var(--font-montserrat)] font-semibold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/shop"
                  className="text-cream-dark hover:text-white transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-cream-dark hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-cream-dark hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/start-here"
                  className="text-cream-dark hover:text-white transition-colors"
                >
                  Start Here
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-cream-dark hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-cream-dark hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social placeholder */}
          <div>
            <h4 className="font-[family-name:var(--font-montserrat)] font-semibold mb-3">
              Follow Along
            </h4>
            <ul className="space-y-2 text-sm text-cream-dark">
              <li>TikTok (coming soon)</li>
              <li>Instagram (coming soon)</li>
              <li>YouTube (coming soon)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-light mt-8 pt-8 text-xs text-charcoal-light">
          <p>
            &copy; {new Date().getFullYear()} Accounts Slayable, a DBA of Up
            &amp; Adam LLC. All rights reserved.
          </p>
          <p className="mt-2">
            For informational purposes only. Not financial, tax, or legal
            advice. Google Sheets is a trademark of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
