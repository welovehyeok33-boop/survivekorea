"use client";
import { useState } from "react";
import type { Post } from "@/types";
import { categories } from "@/data/categories";
import ArticleCard from "@/components/ui/ArticleCard";
export default function PostGrid({ posts }: { posts: Omit<Post, "content" | "checklist">[] }) {
 const [category,setCategory]=useState<string|null>(null),[query,setQuery]=useState(""),[count,setCount]=useState(9);
 const filtered=posts.filter(p=>(!category||p.category===category)&&`${p.title} ${p.excerpt} ${(p.tags??[]).join(" ")}`.toLowerCase().includes(query.trim().toLowerCase()));
 return <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12" aria-labelledby="guide-heading">
 <p className="text-sm font-bold text-red-700 mb-2">생활에 필요한 정보</p><h2 id="guide-heading" className="text-3xl font-black mb-6">궁금한 일부터 찾아보세요</h2>
 <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 mb-7"><label htmlFor="post-search" className="block font-bold mb-3">글 검색</label><input id="post-search" type="search" value={query} onChange={e=>{setQuery(e.target.value);setCount(9);}} placeholder="예: 기초연금, 돌봄, 서류, 스마트폰" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-base mb-4"/><div className="flex flex-wrap gap-2" aria-label="글 분야">{[{id:null,label:"전체"},...categories].map(c=><button key={c.id??"all"} aria-pressed={category===c.id} onClick={()=>{setCategory(c.id);setCount(9);}} className={`px-4 py-2 rounded-full border text-sm font-semibold ${category===c.id?"bg-slate-900 text-white border-slate-900":"bg-white text-slate-700 border-slate-300 hover:border-slate-700"}`}>{c.label}</button>)}</div></div>
 <p role="status" className="text-sm text-slate-600 mb-5">{filtered.length}개의 글{query.trim()?` · ‘${query.trim()}’ 검색 결과`:""}</p>
 {filtered.length?<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{filtered.slice(0,count).map(p=><ArticleCard key={p.id} post={p}/>)}</div>:<div className="rounded-xl border border-slate-200 p-8 text-center"><p className="mb-4">검색된 글이 없습니다. 단어를 짧게 바꾸거나 다른 분야를 선택해 보세요.</p><button className="underline font-bold" onClick={()=>{setQuery("");setCategory(null);setCount(9);}}>전체 글 보기</button></div>}
 {count<filtered.length&&<div className="mt-8 text-center"><button onClick={()=>setCount(n=>n+9)} className="rounded-full border border-slate-300 px-8 py-3 font-bold hover:bg-slate-50">글 더 보기 ({filtered.length-Math.min(count,filtered.length)}개 남음)</button></div>}
 </section>;
}
