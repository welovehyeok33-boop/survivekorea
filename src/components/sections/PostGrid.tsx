"use client";

import { useState } from "react";
import { posts } from "@/data/posts";
import ArticleCard from "@/components/ui/ArticleCard";
import CategoryFilter from "@/components/ui/CategoryFilter";

const PAGE_SIZE = 6;

export default function PostGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const nonFeatured = posts.filter((p) => !p.featured);
  const filtered = activeCategory
    ? nonFeatured.filter((p) => p.category === activeCategory)
    : nonFeatured;

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function handleFilter(id: string | null) {
    setActiveCategory(id);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Header row */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-1">최신 정보</p>
          <h2 className="text-2xl font-black text-gray-900">지금 많이 보는 글</h2>
        </div>
      </div>

      {/* Filter pills */}
      <div className="mb-8">
        <CategoryFilter onFilter={handleFilter} />
      </div>

      {/* Grid */}
      {visible.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="text-5xl mb-4">🔍</span>
          <p className="text-gray-400 font-medium">아직 이 카테고리에 글이 없습니다.</p>
          <p className="text-gray-300 text-sm mt-1">곧 새 글로 찾아뵙겠습니다!</p>
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
            className="group flex items-center gap-2 px-8 py-3 rounded-full border-2 border-gray-200 text-sm font-bold text-gray-600 hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
          >
            글 더 보기
            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
