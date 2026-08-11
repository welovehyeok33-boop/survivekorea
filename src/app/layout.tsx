import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.survivekorea.com"),
  title: {
    default: "한국에서 살아남기 — 중장년에게 꼭 필요한 정보들",
    template: "%s | 한국에서 살아남기",
  },
  description:
    "복잡한 정부 정책과 생활 정보를 40·50·60대가 실제로 쓸 수 있게 쉽게 풀어 드립니다. 기초연금·국민연금·건강·스마트폰·재취업까지, 중장년에게 꼭 필요한 정보만 모았습니다.",
  openGraph: {
    siteName: "한국에서 살아남기",
    locale: "ko_KR",
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
      name: "한국에서 살아남기",
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
      name: "한국에서 살아남기",
      description:
        "복잡한 정부 정책과 생활 정보를 40·50·60대가 실제로 쓸 수 있게 쉽게 풀어 드립니다. 기초연금·국민연금·건강·스마트폰·재취업까지, 중장년에게 꼭 필요한 정보만 모았습니다.",
      publisher: { "@id": "https://www.survivekorea.com/#organization" },
      inLanguage: "ko",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full">
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
