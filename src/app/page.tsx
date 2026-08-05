import type { Metadata } from "next";
import ArticleCard from "@/components/ui/ArticleCard";
import PostGrid from "@/components/sections/PostGrid";
import CategoryGrid from "@/components/sections/CategoryGrid";
import { getFeaturedPost } from "@/data/posts";

export const metadata: Metadata = {
  title: "SurviveKorea — Long-Term Living Guide for Foreigners",
  description:
    "Practical, first-hand guides for foreigners living long-term in Korea — housing, visas, banking, healthcare, transport, and daily life. Written by a Seoul local.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SurviveKorea — Long-Term Living Guide for Foreigners",
    description:
      "Practical, first-hand guides for foreigners living long-term in Korea — housing, visas, banking, healthcare, transport, and daily life.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  const featured = getFeaturedPost();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #1c2340 50%, #1a2030 100%)" }}>
        {/* decorative blobs — 태극기 red & blue, soft */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(205,46,58,0.13)" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(27,79,160,0.18)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none opacity-20" style={{ background: "radial-gradient(ellipse, rgba(205,46,58,0.3) 0%, rgba(27,79,160,0.3) 100%)" }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border" style={{ background: "rgba(205,46,58,0.08)", borderColor: "rgba(205,46,58,0.2)", color: "#e87a82" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#e87a82" }} />
            For Foreigners Living in Korea
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Everything You Need to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #e05060 0%, #c8a0a8 50%, #6090d0 100%)" }}>
              Survive Korea
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "#9ba8c0" }}>
            No fluff. Real guides on housing, visas, banking, transport & daily life — written by someone who actually lives here.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a href="#guides" className="text-white font-bold px-6 py-3 rounded-full transition-all text-sm hover:opacity-90" style={{ background: "#cd2e3a", boxShadow: "0 4px 18px rgba(205,46,58,0.25)" }}>
              Browse Guides
            </a>
            <a href="/about" className="font-semibold px-6 py-3 rounded-full transition-all text-sm border hover:bg-white/10" style={{ color: "#c8d4e8", borderColor: "rgba(255,255,255,0.15)" }}>
              About This Site
            </a>
          </div>
        </div>
      </section>

      {/* ── Category grid ── */}
      <CategoryGrid />

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* ── Featured article ── */}
      {featured && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#c8102e" }}>Editor&apos;s pick</p>
              <h2 className="text-2xl font-black text-gray-900">Featured Guide</h2>
            </div>
          </div>
          <ArticleCard post={featured} size="large" />
        </section>
      )}

      {/* ── Post grid ── */}
      <div id="guides">
        <PostGrid />
      </div>

      {/* ── CTA banner ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #cd2e3a 0%, #a82535 45%, #1b4fa0 100%)" }}>
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="relative">
            <p className="text-3xl mb-2">🇰🇷</p>
            <h3 className="text-2xl md:text-3xl font-black mb-3">New to Korea?</h3>
            <p className="max-w-md mx-auto mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
              Start here — our most popular guides for people just arriving.
            </p>
            <a href="/category/visa" className="inline-block bg-white font-bold px-6 py-3 rounded-full hover:bg-red-50 transition-colors text-sm shadow-lg" style={{ color: "#cd2e3a" }}>
              Start with Visa & Legal →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
