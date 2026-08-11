import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/types";
import { getCategoryById } from "@/data/categories";

interface Props {
  post: Post;
  size?: "default" | "large" | "horizontal";
}

export default function ArticleCard({ post, size = "default" }: Props) {
  const cat = getCategoryById(post.category);

  /* ── Large hero card ── */
  if (size === "large") {
    return (
      <Link
        href={`/posts/${post.slug}`}
        className="group relative block rounded-3xl overflow-hidden bg-gray-900"
        style={{ aspectRatio: "21/9" }}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover opacity-60 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
          sizes="100vw"
          priority
        />
        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          {cat && (
            <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 text-white bg-gradient-to-r ${cat.gradient}`}>
              <span>{cat.icon}</span>
              {cat.label}
            </span>
          )}
          <h2 className="text-white text-2xl md:text-4xl font-black leading-tight max-w-3xl drop-shadow-sm">
            {post.title}
          </h2>
          <p className="text-gray-300 mt-3 text-sm md:text-base max-w-2xl line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-white/60 text-xs">읽는 시간 {post.readTime}분</span>
            <span className="text-white/30">·</span>
            <span className="text-white/60 text-xs">{post.publishedAt}</span>
          </div>
        </div>

        {/* hover CTA */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white text-sm font-semibold">
읽어보기 →
          </div>
        </div>
      </Link>
    );
  }

  /* ── Horizontal card ── */
  if (size === "horizontal") {
    return (
      <Link
        href={`/posts/${post.slug}`}
        className="group flex gap-4 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-200 p-3 bg-white"
      >
        <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="112px"
          />
        </div>
        <div className="flex flex-col justify-center min-w-0">
          {cat && (
            <span className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: cat.color }}>
              {cat.icon} {cat.label}
            </span>
          )}
          <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-emerald-700 transition-colors">
            {post.title}
          </h3>
          <span className="text-gray-400 text-xs mt-1.5">{post.readTime}분</span>
        </div>
      </Link>
    );
  }

  /* ── Default card ── */
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 bg-white"
    >
      <div className="relative overflow-hidden bg-gray-100" style={{ aspectRatio: "16/10" }}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* category badge */}
        {cat && (
          <div className={`absolute top-3 left-3 flex items-center gap-1 text-xs font-bold text-white px-2.5 py-1 rounded-full bg-gradient-to-r ${cat.gradient} shadow-sm`}>
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2 flex-1 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
          <span className="text-gray-400 text-xs">읽는 시간 {post.readTime}분</span>
          <span className="text-emerald-600 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
자세히 보기 →
          </span>
        </div>
      </div>
    </Link>
  );
}
