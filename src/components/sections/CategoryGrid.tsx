import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-1">Browse by topic</p>
          <h2 className="text-2xl font-black text-gray-900">What do you need?</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.slug}`}
            className="group relative flex flex-col items-center justify-center text-center gap-3 rounded-2xl p-5 overflow-hidden border border-transparent hover:border-white/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            {/* gradient bg */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`} />

            {/* icon circle */}
            <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-2xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
              {cat.icon}
            </div>

            <div className="relative">
              <p className="font-bold text-sm text-gray-900 leading-tight">{cat.label}</p>
              <p className="text-xs text-gray-500 mt-0.5 leading-snug line-clamp-2">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
