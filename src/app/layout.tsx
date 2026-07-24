import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.survivekorea.com"),
  title: {
    default: "SurviveKorea — Long-Term Living Guide for Foreigners",
    template: "%s | SurviveKorea",
  },
  description:
    "Real, practical tips for foreigners living long-term in Korea. Housing, visas, banking, health, transport, and everything in between.",
  openGraph: {
    siteName: "SurviveKorea",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.survivekorea.com/#organization",
      name: "SurviveKorea",
      url: "https://www.survivekorea.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.survivekorea.com/icon.svg",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.survivekorea.com/#website",
      url: "https://www.survivekorea.com",
      name: "SurviveKorea",
      description:
        "Real, practical tips for foreigners living long-term in Korea. Housing, visas, banking, health, transport, and everything in between.",
      publisher: { "@id": "https://www.survivekorea.com/#organization" },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3294285861978354"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
