import Link from "next/link";
import { categories } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden" style={{ background: "white", border: "1.5px solid #e5e7eb" }}>
                <svg viewBox="0 0 32 32" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
                  <g transform="rotate(-45, 16, 16)">
                    <circle cx="16" cy="16" r="15" fill="#1B4FA0"/>
                    <path d="M16,1 A15,15 0 0,1 16,31 A7.5,7.5 0 0,1 16,16 A7.5,7.5 0 0,0 16,1Z" fill="#CD2E3A"/>
                    <circle cx="16" cy="8.5" r="3.5" fill="#1B4FA0"/>
                    <circle cx="16" cy="23.5" r="3.5" fill="#CD2E3A"/>
                  </g>
                </svg>
              </div>
              <span className="text-white text-lg font-black">
                한국에서 <span style={{ color: "#e07880" }}>살아남기</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              중장년에게 꼭 필요한 생활·정책 정보. 기초연금·국민연금·정부지원금·건강·스마트폰·재취업까지 쉽게 풀어 드립니다.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">카테고리</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span>{cat.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">사이트</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "소개" },
                { href: "/contact", label: "문의하기" },
                { href: "/privacy-policy", label: "개인정보처리방침" },
                { href: "/disclaimer", label: "면책조항" },
                { href: "/terms", label: "이용약관" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} 한국에서 살아남기. All rights reserved.</span>
          <span>중장년에게 꼭 필요한 정보들 🇰🇷</span>
        </div>
      </div>
    </footer>
  );
}
