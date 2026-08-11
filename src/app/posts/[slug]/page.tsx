import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts, getPostBySlug } from "@/data/posts";
import { getCategoryById } from "@/data/categories";
import { author } from "@/data/author";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
      type: "article",
      publishedTime: post.publishedAt,
      ...(post.updatedAt ? { modifiedTime: post.updatedAt } : {}),
    },
    alternates: {
      canonical: `/posts/${post.slug}`,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const cat = getCategoryById(post.category);
  const related = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const BASE_URL = "https://www.survivekorea.com";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [post.coverImage],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: "ko",
    author: {
      "@type": "Person",
      name: author.name,
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "한국에서 살아남기",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/posts/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: BASE_URL },
      ...(cat
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: cat.label,
              item: `${BASE_URL}/category/${cat.slug}`,
            },
          ]
        : []),
      {
        "@type": "ListItem",
        position: cat ? 3 : 2,
        name: post.title,
        item: `${BASE_URL}/posts/${post.slug}`,
      },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-gray-600 transition-colors">홈</Link>
        <span>/</span>
        {cat && (
          <>
            <Link href={`/category/${cat.slug}`} className="hover:text-gray-600 transition-colors">
              {cat.icon} {cat.label}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-gray-600 line-clamp-1">{post.title}</span>
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
        {post.title}
      </h1>

      {/* Meta row */}
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 pb-6 border-b border-gray-100">
        <span className="font-semibold text-gray-600">{author.name}</span>
        <span>·</span>
        <span>{post.publishedAt}</span>
        {post.updatedAt && (
          <>
            <span>·</span>
            <span>{post.updatedAt} 업데이트</span>
          </>
        )}
        <span>·</span>
        <span>읽는 시간 {post.readTime}분</span>
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

      {/* Cover image */}
      <div className="relative rounded-2xl overflow-hidden mb-10" style={{ aspectRatio: "16/9" }}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      {/* Article body */}
      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-600 leading-relaxed font-medium border-l-4 pl-4 mb-8" style={{ borderColor: "#cd2e3a" }}>
          {post.excerpt}
        </p>

        {post.content ? (
          <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>이 글은 준비 중입니다. 곧 자세한 내용으로 찾아뵙겠습니다. 아래 다른 글도 함께 살펴보세요.</p>
          </div>
        )}
      </div>

      {/* Author box */}
      <aside className="mt-12 flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:p-6">
        {author.avatar ? (
          <Image
            src={author.avatar}
            alt={author.name}
            width={56}
            height={56}
            className="w-14 h-14 rounded-full object-cover shrink-0"
          />
        ) : (
          <div
            className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center text-white font-black text-lg"
            style={{ background: "#cd2e3a" }}
          >
            {author.name.slice(0, 2)}
          </div>
        )}
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900">{author.name}</span>
            <span className="text-xs text-gray-400">· {author.location}</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mt-1">{author.bio}</p>
          <Link
            href="/about"
            className="inline-block text-xs font-semibold mt-2 hover:opacity-80 transition-opacity"
            style={{ color: "#cd2e3a" }}
          >
한국에서 살아남기 소개 →
          </Link>
        </div>
      </aside>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="mt-16 pt-10 border-t border-gray-100">
          <h2 className="text-xl font-black text-gray-900 mb-6">함께 보면 좋은 글</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((rp) => {
              const rCat = getCategoryById(rp.category);
              return (
                <Link
                  key={rp.id}
                  href={`/posts/${rp.slug}`}
                  className="group flex flex-col gap-3 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md p-4 transition-all duration-200"
                >
                  <div className="relative rounded-xl overflow-hidden bg-gray-100" style={{ aspectRatio: "16/9" }}>
                    <Image src={rp.coverImage} alt={rp.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="250px" />
                  </div>
                  {rCat && (
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: rCat.color }}>
                      {rCat.icon} {rCat.label}
                    </span>
                  )}
                  <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">
                    {rp.title}
                  </h3>
                  <span className="text-xs text-gray-400">읽는 시간 {rp.readTime}분</span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: "#cd2e3a" }}>
← 전체 글 목록으로
        </Link>
      </div>
    </article>
  );
}
