import type { Metadata } from "next";
import ArticleCard from "@/components/ui/ArticleCard";
import PostGrid from "@/components/sections/PostGrid";
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
      {/* SEO/accessibility heading — the visible brand lives in the header */}
      <h1 className="sr-only">
        한국에서 살아남기 — 중장년에게 꼭 필요한 정보들
      </h1>

      {/* ── Featured article — straight into the content, no hero ── */}
      {featured && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 md:pt-10">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#c8102e" }}>편집팀 추천</p>
            <h2 className="text-2xl font-black text-gray-900">이번 주 핵심 정보</h2>
          </div>
          <ArticleCard post={featured} size="large" />
        </section>
      )}

      {/* ── Post grid ── */}
      <div id="guides">
        <PostGrid />
      </div>
    </>
  );
}
