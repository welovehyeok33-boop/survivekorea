"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/data/categories";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm transition-shadow overflow-hidden" style={{ background: "white", border: "1.5px solid #e5e7eb" }}>
            <svg viewBox="0 0 32 32" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
              <g transform="rotate(-45, 16, 16)">
                <circle cx="16" cy="16" r="15" fill="#1B4FA0"/>
                <path d="M16,1 A15,15 0 0,1 16,31 A7.5,7.5 0 0,1 16,16 A7.5,7.5 0 0,0 16,1Z" fill="#CD2E3A"/>
                <circle cx="16" cy="8.5" r="3.5" fill="#1B4FA0"/>
                <circle cx="16" cy="23.5" r="3.5" fill="#CD2E3A"/>
              </g>
            </svg>
          </div>
          <span className="text-lg font-black tracking-tight text-gray-900">
            한국에서 <span style={{ color: "#cd2e3a" }}>살아남기</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
            >
              <span className="text-base leading-none">{cat.icon}</span>
              <span>{cat.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right: hamburger */}
        <div className="flex items-center gap-2">
          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="메뉴"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-gray-700 rounded transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-gray-700 rounded transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-gray-700 rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 grid grid-cols-2 gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-gray-100 text-sm font-medium text-gray-700 hover:border-gray-200 hover:bg-gray-50 transition-all"
            >
              <span className="text-xl">{cat.icon}</span>
              <span className="leading-tight">{cat.label}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
