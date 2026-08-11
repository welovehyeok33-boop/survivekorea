import type { Metadata } from "next";
import ArticleCard from "@/components/ui/ArticleCard";
import PostGrid from "@/components/sections/PostGrid";
import CategoryGrid from "@/components/sections/CategoryGrid";
import { getFeaturedPost } from "@/data/posts";

export const metadata: Metadata = {
  title: "한국에서 살아남기 — 중장년에게 꼭 필요한 정보들",
  description:
    "기초연금·국민연금·정부지원금·건강·스마트폰·재취업까지, 40·50·60대가 실제로 쓸 수 있는 생활·정책 정보를 쉽게 풀어 드립니다.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "한국에서 살아남기 — 중장년에게 꼭 필요한 정보들",
    description:
      "기초연금·국민연금·정부지원금·건강·스마트폰·재취업까지, 40·50·60대가 실제로 쓸 수 있는 생활·정책 정보를 쉽게 풀어 드립니다.",
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
            중장년에게 꼭 필요한 정보들
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
            복잡한 정보, 쉽게 풀어 드립니다 <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #e05060 0%, #c8a0a8 50%, #6090d0 100%)" }}>
              한국에서 살아남기
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "#9ba8c0" }}>
            기초연금·국민연금·정부지원금·건강·스마트폰·재취업까지. 40·50·60대가 실제로 쓸 수 있는 정보만, 부모님께 설명하듯 하나하나 짚어 드립니다.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a href="#guides" className="text-white font-bold px-6 py-3 rounded-full transition-all text-sm hover:opacity-90" style={{ background: "#cd2e3a", boxShadow: "0 4px 18px rgba(205,46,58,0.25)" }}>
              정보 둘러보기
            </a>
            <a href="/about" className="font-semibold px-6 py-3 rounded-full transition-all text-sm border hover:bg-white/10" style={{ color: "#c8d4e8", borderColor: "rgba(255,255,255,0.15)" }}>
              사이트 소개
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
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#c8102e" }}>편집팀 추천</p>
              <h2 className="text-2xl font-black text-gray-900">이번 주 핵심 정보</h2>
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
            <h3 className="text-2xl md:text-3xl font-black mb-3">어디서부터 봐야 할지 모르겠다면</h3>
            <p className="max-w-md mx-auto mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
              가장 많은 분들이 찾는 돈·연금 정보부터 시작해 보세요.
            </p>
            <a href="/category/money" className="inline-block bg-white font-bold px-6 py-3 rounded-full hover:bg-red-50 transition-colors text-sm shadow-lg" style={{ color: "#cd2e3a" }}>
              돈·연금 정보 보러 가기 →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
