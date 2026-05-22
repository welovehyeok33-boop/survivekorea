import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getCategoryById } from "@/data/categories";
import { posts } from "@/data/posts";
import ArticleCard from "@/components/ui/ArticleCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};

  return {
    title: `${cat.label} — Korea Living Guide`,
    description: `${cat.description}. Practical guides for foreigners living long-term in Korea.`,
    alternates: { canonical: `/category/${cat.slug}` },
    openGraph: {
      title: `${cat.label} — SurviveKorea`,
      description: cat.description,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryById(slug);
  if (!cat) notFound();

  const catPosts = posts.filter((p) => p.category === cat.id);
  const otherCategories = categories.filter((c) => c.id !== cat.id);

  return (
    <div className="min-h-screen">
      {/* Category hero */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-5`} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-3xl shadow-lg`}>
              {cat.icon}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Category</p>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900">{cat.label}</h1>
            </div>
          </div>
          <p className="text-gray-500 text-base max-w-xl mt-2">{cat.description}</p>
          <p className="text-sm font-semibold mt-4" style={{ color: cat.color }}>
            {catPosts.length} guide{catPosts.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {catPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {catPosts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-6xl mb-4">{cat.icon}</span>
            <p className="text-gray-400 font-semibold text-lg">No guides yet in this category.</p>
            <p className="text-gray-300 text-sm mt-1">Check back soon — we&apos;re writing!</p>
          </div>
        )}
      </section>

      {/* Other categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 border-t border-gray-100">
        <h2 className="text-lg font-black text-gray-900 mb-5">Browse Other Topics</h2>
        <div className="flex flex-wrap gap-3">
          {otherCategories.map((c) => (
            <a
              key={c.id}
              href={`/category/${c.slug}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-all"
            >
              <span>{c.icon}</span>
              <span>{c.label}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
