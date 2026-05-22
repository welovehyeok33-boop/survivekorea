import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
