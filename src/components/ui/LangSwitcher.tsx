import Link from "next/link";

interface Props {
  slug: string;
  currentLang: "en" | "ja" | "ko";
  hasJa: boolean;
  hasKo: boolean;
}

const langs = [
  { code: "en", flag: "🇺🇸", label: "EN", href: (slug: string) => `/posts/${slug}` },
  { code: "ja", flag: "🇯🇵", label: "JA", href: (slug: string) => `/ja/posts/${slug}` },
  { code: "ko", flag: "🇰🇷", label: "KO", href: (slug: string) => `/ko/posts/${slug}` },
] as const;

export default function LangSwitcher({ slug, currentLang, hasJa, hasKo }: Props) {
  const available: Record<string, boolean> = { en: true, ja: hasJa, ko: hasKo };

  return (
    <div className="flex items-center gap-1.5 mb-8">
      {langs.map((lang) => {
        const isActive = lang.code === currentLang;
        const isAvailable = available[lang.code];
        if (!isAvailable) return null;
        return isActive ? (
          <span
            key={lang.code}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-white"
            style={{ background: "#cd2e3a" }}
          >
            {lang.flag} {lang.label}
          </span>
        ) : (
          <Link
            key={lang.code}
            href={lang.href(slug)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-gray-800 transition-all"
          >
            {lang.flag} {lang.label}
          </Link>
        );
      })}
    </div>
  );
}
