export interface Category {
  id: string;
  label: string;
  slug: string;
  color: string;       // hex for pills
  gradient: string;    // Tailwind gradient classes for cards
  icon: string;        // emoji
  description: string;
}

export interface PostTranslation {
  title: string;
  excerpt: string;
  content?: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  tags?: string[];
  content?: string; // HTML content (English)
  translations?: {
    ja?: PostTranslation;
    ko?: PostTranslation;
  };
}
