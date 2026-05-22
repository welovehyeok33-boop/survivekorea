import type { Post } from "@/types";

export const posts: Post[] = [
  {
    id: "1",
    title: "How to Open a Korean Bank Account as a Foreigner (2025 Guide)",
    slug: "open-korean-bank-account-foreigner",
    excerpt:
      "No more showing up to three different banks only to be turned away. Here's exactly which bank accepts foreigners, what documents you need, and what to say.",
    coverImage: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80",
    category: "work-money",
    publishedAt: "2025-04-10",
    readTime: 7,
    featured: true,
    tags: ["banking", "kakaobank", "toss"],
  },
  {
    id: "2",
    title: "Goshiwon vs One-Room vs Officetel: Which Should You Choose?",
    slug: "goshiwon-vs-one-room-vs-officetel",
    excerpt:
      "Each has a totally different vibe, price, and set of tradeoffs. I've lived in all three — here's the honest breakdown.",
    coverImage: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&q=80",
    category: "accommodation",
    publishedAt: "2025-04-18",
    readTime: 9,
    featured: false,
    tags: ["goshiwon", "housing", "rent"],
  },
  {
    id: "3",
    title: "D-10 Job Seeker Visa: How to Get It and What You Can Actually Do",
    slug: "d10-job-seeker-visa-korea",
    excerpt:
      "Korea's job seeker visa is underrated. If you qualify, it can be a great bridge while you land a job. Here's the full process.",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    category: "visa",
    publishedAt: "2025-05-05",
    readTime: 8,
    featured: false,
    tags: ["d10", "visa", "job"],
  },
  {
    id: "4",
    title: "How to Use Korean Public Transport Without Losing Your Mind",
    slug: "korean-public-transport-guide",
    excerpt:
      "T-money, KakaoMap, bus vs subway strategy — navigating Seoul's transit system is actually great once you know the tricks.",
    coverImage: "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=800&q=80",
    category: "transport",
    publishedAt: "2025-05-10",
    readTime: 6,
    featured: false,
    tags: ["tmoney", "subway", "bus"],
  },
  {
    id: "5",
    title: "Jeonse vs Wolse: Korea's Rent System Explained for Foreigners",
    slug: "jeonse-wolse-explained-foreigners",
    excerpt:
      "Korea's rental system is unlike anywhere else. Jeonse lets you pay a lump sum instead of monthly rent — and it can make sense financially.",
    coverImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    category: "accommodation",
    publishedAt: "2025-05-14",
    readTime: 10,
    featured: false,
    tags: ["jeonse", "wolse", "rent"],
  },
  {
    id: "6",
    title: "Eating Cheap in Korea: How to Eat Well Under ₩5,000 a Meal",
    slug: "eating-cheap-korea-under-5000-won",
    excerpt:
      "Kimbap joints, convenience store hacks, and the university district strategy. You can eat filling, tasty meals daily without breaking the bank.",
    coverImage: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
    category: "culture",
    publishedAt: "2025-05-18",
    readTime: 5,
    featured: false,
    tags: ["budget", "food", "kimbap"],
  },
  {
    id: "7",
    title: "Gyeongbokgung to Bukchon: The One-Day Seoul Itinerary That Actually Works",
    slug: "gyeongbokgung-bukchon-seoul-itinerary",
    excerpt:
      "Skip the tourist traps and do it right. This route hits the palace, the hanok village, and a local cafe — all without doubling back.",
    coverImage: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80",
    category: "attractions",
    publishedAt: "2025-05-20",
    readTime: 6,
    featured: false,
    tags: ["seoul", "itinerary", "palace"],
  },
  {
    id: "8",
    title: "Korean Etiquette: 12 Things That Will Make or Break Your First Month",
    slug: "korean-etiquette-for-foreigners",
    excerpt:
      "From two-hand gestures to not splitting the bill — small cultural cues that locals notice, and what to do instead.",
    coverImage: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80",
    category: "culture",
    publishedAt: "2025-05-22",
    readTime: 7,
    featured: false,
    tags: ["etiquette", "culture", "tips"],
  },
];

export function getFeaturedPost(): Post | undefined {
  return posts.find((p) => p.featured);
}

export function getPostsByCategory(categoryId: string): Post[] {
  return posts.filter((p) => p.category === categoryId);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
