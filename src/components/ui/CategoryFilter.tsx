"use client";

import { useState } from "react";
import { categories } from "@/data/categories";

interface Props {
  onFilter: (categoryId: string | null) => void;
}

export default function CategoryFilter({ onFilter }: Props) {
  const [active, setActive] = useState<string | null>(null);

  function handleClick(id: string | null) {
    setActive(id);
    onFilter(id);
  }

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
      <button
        onClick={() => handleClick(null)}
        className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
          active === null
            ? "bg-gray-900 text-white border-gray-900 shadow-md"
            : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"
        }`}
      >
        전체
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => handleClick(cat.id)}
          className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
            active === cat.id
              ? "text-white border-transparent shadow-md"
              : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"
          }`}
          style={
            active === cat.id
              ? { background: `linear-gradient(135deg, ${cat.color}dd, ${cat.color})` }
              : {}
          }
        >
          <span className="text-base leading-none">{cat.icon}</span>
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
