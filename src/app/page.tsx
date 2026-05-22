import ArticleCard from "@/components/ui/ArticleCard";
import PostGrid from "@/components/sections/PostGrid";
import CategoryGrid from "@/components/sections/CategoryGrid";
import { getFeaturedPost } from "@/data/posts";

export default function Home() {
  const featured = getFeaturedPost();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950">
        {/* decorative blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            For Foreigners Living in Korea
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Everything You Need to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Survive Korea
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            No fluff. Real guides on housing, visas, banking, transport & daily life — written by someone who actually lives here.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a href="#guides" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3 rounded-full transition-colors text-sm shadow-lg shadow-emerald-500/25">
              Browse Guides
            </a>
            <a href="/about" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm border border-white/10">
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
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-1">Editor&apos;s pick</p>
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
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="relative">
            <p className="text-3xl mb-2">🇰🇷</p>
            <h3 className="text-2xl md:text-3xl font-black mb-3">New to Korea?</h3>
            <p className="text-emerald-100 max-w-md mx-auto mb-6">
              Start here — our most popular guides for people just arriving.
            </p>
            <a href="/category/visa" className="inline-block bg-white text-emerald-700 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors text-sm shadow-lg">
              Start with Visa & Legal →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
