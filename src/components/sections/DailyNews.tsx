"use client";

import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import { getCategoryById } from "@/data/categories";

// Newest posts first — the ticker shows the freshest content.
const recent = [...posts]
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  .slice(0, 8);

export default function DailyNews() {
  if (recent.length === 0) return null;

  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...recent, ...recent];

  return (
    <section className="border-b border-gray-100 bg-gray-50/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5">
        {/* Label */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest" style={{ color: "#cd2e3a" }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#cd2e3a" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#cd2e3a" }} />
            </span>
            데일리 뉴스
          </span>
        </div>

        {/* Marquee */}
        <div className="daily-news group relative overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 z-10 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-50 to-transparent" />

          <div className="daily-news-track flex w-max gap-3">
            {loop.map((post, i) => {
              const cat = getCategoryById(post.category);
              return (
                <Link
                  key={`${post.id}-${i}`}
                  href={`/posts/${post.slug}`}
                  aria-hidden={i >= recent.length}
                  tabIndex={i >= recent.length ? -1 : undefined}
                  className="flex items-center gap-3 shrink-0 w-[280px] rounded-xl border border-gray-200 bg-white px-3 py-2 hover:border-red-300 hover:shadow-sm transition-all"
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                    <Image src={post.coverImage} alt="" fill className="object-cover" sizes="48px" />
                  </div>
                  <div className="min-w-0">
                    {cat && (
                      <span className="text-[11px] font-bold" style={{ color: cat.color }}>
                        {cat.icon} {cat.label}
                      </span>
                    )}
                    <p className="text-[13px] font-semibold text-gray-800 leading-snug line-clamp-2">
                      {post.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
