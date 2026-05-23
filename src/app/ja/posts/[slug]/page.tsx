import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts, getPostBySlug } from "@/data/posts";
import { getCategoryById } from "@/data/categories";
import LangSwitcher from "@/components/ui/LangSwitcher";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts
    .filter((p) => !!p.translations?.ja)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.translations?.ja) return {};

  const t = post.translations.ja;
  const languages: Record<string, string> = {
    "x-default": `/posts/${post.slug}`,
    en: `/posts/${post.slug}`,
    ja: `/ja/posts/${post.slug}`,
  };
  if (post.translations?.ko) languages.ko = `/ko/posts/${post.slug}`;

  return {
    title: t.title,
    description: t.excerpt,
    openGraph: {
      title: t.title,
      description: t.excerpt,
      images: [{ url: post.coverImage }],
      type: "article",
      publishedTime: post.publishedAt,
    },
    alternates: {
      canonical: `/ja/posts/${post.slug}`,
      languages,
    },
  };
}

export default async function JaPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.translations?.ja) notFound();

  const t = post.translations.ja;
  const cat = getCategoryById(post.category);
  const related = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug && !!p.translations?.ja)
    .slice(0, 3);

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-gray-600 transition-colors">ホーム</Link>
        <span>/</span>
        {cat && (
          <>
            <Link href={`/category/${cat.slug}`} className="hover:text-gray-600 transition-colors">
              {cat.icon} {cat.label}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-gray-600 line-clamp-1">{t.title}</span>
      </nav>

      {/* Category badge */}
      {cat && (
        <Link
          href={`/category/${cat.slug}`}
          className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white bg-gradient-to-r ${cat.gradient} mb-4`}
        >
          {cat.icon} {cat.label}
        </Link>
      )}

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mt-3 mb-4">
        {t.title}
      </h1>

      {/* Meta row */}
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 pb-6 border-b border-gray-100">
        <span>{post.publishedAt}</span>
        <span>·</span>
        <span>{post.readTime} 分で読めます</span>
        {post.tags && post.tags.length > 0 && (
          <>
            <span>·</span>
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Language switcher */}
      <LangSwitcher
        slug={post.slug}
        currentLang="ja"
        hasJa={!!post.translations?.ja}
        hasKo={!!post.translations?.ko}
      />

      {/* Cover image */}
      <div className="relative rounded-2xl overflow-hidden mb-10" style={{ aspectRatio: "16/9" }}>
        <Image
          src={post.coverImage}
          alt={t.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      {/* Article body */}
      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-600 leading-relaxed font-medium border-l-4 pl-4 mb-8" style={{ borderColor: "#cd2e3a" }}>
          {t.excerpt}
        </p>

        {t.content ? (
          <div className="article-body" dangerouslySetInnerHTML={{ __html: t.content }} />
        ) : (
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>このガイドは近日公開予定です。しばらくお待ちください。</p>
          </div>
        )}
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="mt-16 pt-10 border-t border-gray-100">
          <h2 className="text-xl font-black text-gray-900 mb-6">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((rp) => {
              const rCat = getCategoryById(rp.category);
              const rt = rp.translations?.ja;
              return (
                <Link
                  key={rp.id}
                  href={`/ja/posts/${rp.slug}`}
                  className="group flex flex-col gap-3 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md p-4 transition-all duration-200"
                >
                  <div className="relative rounded-xl overflow-hidden bg-gray-100" style={{ aspectRatio: "16/9" }}>
                    <Image src={rp.coverImage} alt={rt?.title ?? rp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="250px" />
                  </div>
                  {rCat && (
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: rCat.color }}>
                      {rCat.icon} {rCat.label}
                    </span>
                  )}
                  <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">
                    {rt?.title ?? rp.title}
                  </h3>
                  <span className="text-xs text-gray-400">{rp.readTime} 分</span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: "#cd2e3a" }}>
          ← すべてのガイドに戻る
        </Link>
      </div>
    </article>
  );
}
