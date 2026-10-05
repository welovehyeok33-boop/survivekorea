import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { categories } from "@/data/categories";

const BASE_URL = "https://www.survivekorea.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/tools/life-checklist`, lastModified: "2026-10-05", changeFrequency: "monthly", priority: 0.8 },
    { url: BASE_URL, lastModified: "2026-10-03", changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: "2026-10-03", changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: "2026-10-03", changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: "2026-10-03", changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/disclaimer`, lastModified: "2026-10-03", changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms`, lastModified: "2026-07-07", changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE_URL}/category/${cat.slug}`,
    lastModified: posts.filter(p => p.category === cat.id).map(p => p.updatedAt ?? p.publishedAt).sort().at(-1),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages, ...postPages];
}
