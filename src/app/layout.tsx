import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Accounts Slayable — Financial Tools for Freelancers",
    template: "%s | Accounts Slayable",
  },
  description:
    "Google Sheets templates and financial tools for freelancers, consultants, and 1099 workers. Slay your accounts, not your sanity.",
  metadataBase: new URL("https://accountsslayable.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Accounts Slayable",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-[family-name:var(--font-open-sans)] antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
