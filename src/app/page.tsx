import type { Metadata } from "next";
import Link from "next/link";
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

const popularLinks = [
  { label: "기초연금", href: "/posts/gichoyeongeum-2026-guide" },
  { label: "국민연금 수령액", href: "/posts/gungmin-yeongeum-yesang-suryeongaek" },
  { label: "정부지원금·복지", href: "/posts/jeongbu-jiwongeum-bokji-total" },
  { label: "무릎·관절 건강", href: "/posts/jungjangnyeon-mureup-gwanjeol-geongang" },
  { label: "스마트폰 기초", href: "/posts/smartphone-kiosk-kakaotalk-guide" },
];

export default function Home() {
  const featured = getFeaturedPost();

  return (
    <>
      {/* ── Compact masthead — no big hero, straight to the articles ── */}
      <section className="border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-10">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
            한국에서 살아남기
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl">
            기초연금·국민연금·정부지원금·건강·스마트폰·재취업까지. 40·50·60대가 실제로 쓸 수 있는 정보만 쉽게 풀어 드립니다.
          </p>

          {/* Popular quick links — jump straight to the most-searched topics */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-sm font-bold text-gray-400 mr-1">인기 주제</span>
            {popularLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[15px] font-semibold px-3.5 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-600 hover:bg-red-50 transition-all"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured article ── */}
      {featured && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
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
