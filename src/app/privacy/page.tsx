import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Accounts Slayable, including how we handle financial data through Plaid.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal mb-4">
        Privacy Policy
      </h1>
      <p className="text-charcoal-light mb-10">
        Last updated: February 13, 2026
      </p>

      <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-charcoal prose-p:text-charcoal-light prose-a:text-sage prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal prose-li:text-charcoal-light">
        <h2>Who We Are</h2>
        <p>
          Accounts Slayable is a financial tools brand operated by Up &amp; Adam
          LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We provide
          Google Sheets templates, educational content, and financial management
          tools for freelancers, consultants, and 1099 workers.
        </p>
        <p>
          This Privacy Policy describes how we collect, use, and protect your
          information when you use our website at accountsslayable.com and any
          associated tools or services.
        </p>

        <h2>Information We Collect</h2>

        <h3>Information You Provide</h3>
        <ul>
          <li>
            <strong>Email address</strong> — when you sign up for our newsletter
            or download a lead magnet.
          </li>
          <li>
            <strong>Purchase information</strong> — when you buy a template or
            service through our payment processors (Gumroad, Etsy). We do not
            store your payment card details directly.
          </li>
          <li>
            <strong>Communications</strong> — when you contact us via email for
            support.
          </li>
        </ul>

        <h3>Financial Data via Plaid</h3>
        <p>
          Some of our tools use{" "}
          <a
            href="https://plaid.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plaid Inc.
          </a>{" "}
          to connect to your bank accounts. When you choose to link a financial
          account through Plaid, we may access the following information:
        </p>
        <ul>
          <li>
            <strong>Account information</strong> — account name, type (checking,
            savings, etc.), and current/available balances.
          </li>
          <li>
            <strong>Transaction data</strong> — transaction history including
            dates, amounts, merchant names, and categories.
          </li>
          <li>
            <strong>Institution information</strong> — the name of your
            financial institution.
          </li>
        </ul>
        <p>
          We access this data solely to help you organize and understand your
          finances. We do <strong>not</strong>:
        </p>
        <ul>
          <li>Sell your financial data to third parties.</li>
          <li>Share your financial data with advertisers.</li>
          <li>Use your financial data for any purpose other than providing our services to you.</li>
          <li>Store your bank login credentials — these are handled entirely by Plaid.</li>
        </ul>
        <p>
          You can revoke access to your financial accounts at any time through
          the{" "}
          <a
            href="https://my.plaid.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plaid Portal
          </a>
          .
        </p>
        <p>
          Plaid&apos;s own handling of your data is governed by the{" "}
          <a
            href="https://plaid.com/legal/#end-user-privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plaid End User Privacy Policy
          </a>
          .
        </p>

        <h3>Automatically Collected Information</h3>
        <p>
          When you visit our website, we may collect standard web analytics data
          such as your IP address, browser type, pages visited, and referring
          URL. This data is used to understand how our site is used and to
          improve the experience. We do not use this data to personally identify
          you.
        </p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide and improve our tools, templates, and services.</li>
          <li>To send you newsletters and updates you opted into.</li>
          <li>To process purchases and deliver digital products.</li>
          <li>
            To import and organize your financial data when you connect a bank
            account through Plaid.
          </li>
          <li>To respond to support requests.</li>
          <li>To analyze site usage and improve our content.</li>
        </ul>

        <h2>How We Protect Your Information</h2>
        <p>
          We use commercially reasonable security measures to protect your data,
          including encrypted connections (HTTPS), secure authentication, and
          limited access to personal information. Financial data accessed through
          Plaid is transmitted over encrypted channels and is not shared with
          unauthorized parties.
        </p>
        <p>
          However, no method of electronic transmission or storage is 100%
          secure. We cannot guarantee absolute security.
        </p>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services that may process your data:</p>
        <ul>
          <li>
            <strong>Plaid</strong> — financial account linking and data access.
          </li>
          <li>
            <strong>Gumroad / Etsy</strong> — payment processing and product
            delivery.
          </li>
          <li>
            <strong>ConvertKit</strong> — email newsletter management.
          </li>
        </ul>
        <p>
          Each of these services has their own privacy policies governing how
          they handle your data.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain your information only as long as necessary to provide our
          services or as required by law. You may request deletion of your data
          at any time by contacting us.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>
            <strong>Access</strong> the personal information we hold about you.
          </li>
          <li>
            <strong>Correct</strong> inaccurate personal information.
          </li>
          <li>
            <strong>Delete</strong> your personal information.
          </li>
          <li>
            <strong>Revoke</strong> Plaid access to your financial accounts via
            the{" "}
            <a
              href="https://my.plaid.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plaid Portal
            </a>
            .
          </li>
          <li>
            <strong>Unsubscribe</strong> from marketing emails at any time.
          </li>
        </ul>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our services are not directed to individuals under 18. We do not
          knowingly collect personal information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated &quot;Last updated&quot; date. Your
          continued use of our services after changes constitutes acceptance of
          the updated policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or your data, contact
          us at:
        </p>
        <p>
          <strong>Email:</strong> support@accountsslayable.com
          <br />
          <strong>Business:</strong> Up &amp; Adam LLC, d/b/a Accounts Slayable
        </p>
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="text-sage hover:text-sage-dark transition-colors"
        >
          &larr; Back to homepage
        </Link>
      </div>
    </div>
  );
}
