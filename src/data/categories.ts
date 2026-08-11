import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "money",
    label: "돈·연금",
    slug: "money",
    color: "#1b4fa0",
    gradient: "from-blue-700 to-blue-500",
    icon: "💰",
    description: "기초연금·국민연금·노후자금·절세 정보",
  },
  {
    id: "welfare",
    label: "정부지원·복지",
    slug: "welfare",
    color: "#ef4444",
    gradient: "from-red-500 to-orange-400",
    icon: "📋",
    description: "정부지원금·복지 혜택·각종 신청 방법",
  },
  {
    id: "health",
    label: "건강",
    slug: "health",
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-400",
    icon: "🏥",
    description: "중장년 건강관리·질환·운동·건강검진",
  },
  {
    id: "digital",
    label: "디지털·스마트폰",
    slug: "digital",
    color: "#8b5cf6",
    gradient: "from-violet-500 to-purple-400",
    icon: "📱",
    description: "스마트폰·카카오톡·키오스크·앱 사용법",
  },
  {
    id: "work",
    label: "재취업·부업",
    slug: "work",
    color: "#f59e0b",
    gradient: "from-amber-500 to-yellow-400",
    icon: "💼",
    description: "중장년 재취업·부업·자격증·직업훈련",
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
