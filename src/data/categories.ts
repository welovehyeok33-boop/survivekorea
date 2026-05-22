import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "attractions",
    label: "Attractions",
    slug: "attractions",
    color: "#3b82f6",
    gradient: "from-blue-500 to-cyan-400",
    icon: "🏯",
    description: "Must-see spots, hidden gems & day trips",
  },
  {
    id: "accommodation",
    label: "Accommodation",
    slug: "accommodation",
    color: "#8b5cf6",
    gradient: "from-violet-500 to-purple-400",
    icon: "🏠",
    description: "Goshiwon, one-rooms, guesthouses & more",
  },
  {
    id: "visa",
    label: "Visa & Legal",
    slug: "visa",
    color: "#ef4444",
    gradient: "from-red-500 to-orange-400",
    icon: "📋",
    description: "Visas, ARC, immigration & legal tips",
  },
  {
    id: "work-money",
    label: "Work & Money",
    slug: "work-money",
    color: "#10b981",
    gradient: "from-emerald-500 to-green-400",
    icon: "💰",
    description: "Banking, jobs, taxes & earning in Korea",
  },
  {
    id: "transport",
    label: "Transport",
    slug: "transport",
    color: "#0ea5e9",
    gradient: "from-sky-500 to-blue-400",
    icon: "🚇",
    description: "Subway, bus, KTX & getting around",
  },
  {
    id: "culture",
    label: "Culture & Daily Life",
    slug: "culture",
    color: "#f59e0b",
    gradient: "from-amber-500 to-yellow-400",
    icon: "🎎",
    description: "Language, etiquette, food & fitting in",
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
