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

const DEFAULT_OG_IMAGE = {
  url: "/api/og?title=Slay%20your%20accounts%2C%20not%20your%20sanity&subtitle=Personal%20finance%2C%20points%20strategy%2C%20AI%20experiments%2C%20and%20side-hustle%20reality%20checks",
  width: 1200,
  height: 630,
  alt: "Accounts Slayable — Personal finance, unfiltered",
};

export const metadata: Metadata = {
  title: {
    default: "Accounts Slayable — Personal Finance, Unfiltered",
    template: "%s | Accounts Slayable",
  },
  description:
    "Personal finance, points strategy, AI experiments, and side-hustle reality checks — for people who want their money to be boring in a good way. Templates, tools, and no-nonsense writing from one person who gets it.",
  metadataBase: new URL("https://accountsslayable.com"),
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/rss.xml", title: "Accounts Slayable — Blog" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Accounts Slayable",
    title: "Accounts Slayable — Personal Finance, Unfiltered",
    description:
      "Personal finance, points strategy, AI experiments, and side-hustle reality checks.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounts Slayable — Personal Finance, Unfiltered",
    description:
      "Personal finance, points strategy, AI experiments, and side-hustle reality checks.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  other: {
    "theme-color": "#87A96B",
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
