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
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-sm font-black">
                S
              </div>
              <span className="text-white text-lg font-black">
                Survive<span className="text-emerald-400">Korea</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              Real, practical tips for foreigners living long-term in Korea — housing, visas, money, transport & daily life.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Categories</h4>
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
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Site</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy-policy", label: "Privacy Policy" },
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
          <span>© {new Date().getFullYear()} SurviveKorea. All rights reserved.</span>
          <span>Made for foreigners, by someone who lives here 🇰🇷</span>
        </div>
      </div>
    </footer>
  );
}
