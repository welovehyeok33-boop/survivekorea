import Link from "next/link";
import { categories } from "@/data/categories";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center">
      <div className="text-6xl font-black mb-4" style={{ color: "#cd2e3a" }}>404</div>
      <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="text-gray-500 leading-relaxed mb-10">
        찾으시는 페이지가 없거나 주소가 바뀌었을 수 있습니다. 아래 카테고리에서 필요한 정보를
        찾아보시거나 홈으로 돌아가세요.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
        style={{ background: "#cd2e3a" }}
      >
        ← 홈으로 돌아가기
      </Link>

      <div className="mt-14">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
          카테고리별 보기
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="flex items-center gap-2 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 px-4 py-3 text-left transition-all"
            >
              <span className="text-lg">{cat.icon}</span>
              <span className="text-sm font-semibold text-gray-800">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
