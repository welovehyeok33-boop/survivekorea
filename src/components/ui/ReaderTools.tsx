"use client";
import { useEffect, useState } from "react";
export default function ReaderTools({items}:{items:string[]}) {
  const [large,setLarge]=useState(false);
  const [checked,setChecked]=useState<string[]>([]);
  useEffect(() => () => { document.documentElement.classList.remove("reading-large"); }, []);
  return <>
    <div className="mb-6 flex flex-wrap items-center gap-3 text-sm print:hidden">
      <button aria-pressed={large} onClick={()=>{const next=!large;setLarge(next);document.documentElement.classList.toggle("reading-large",next);}} className="border border-slate-300 rounded-full px-4 py-2 font-bold">{large?"기본 글씨로":"본문 글씨 크게"}</button>
      <button onClick={()=>window.print()} className="border border-slate-300 rounded-full px-4 py-2 font-bold">글 인쇄하기</button>
    </div>
    <section aria-labelledby="prepare-heading" className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6 mb-9">
      <div className="flex items-center justify-between gap-3 mb-2"><h2 id="prepare-heading" className="font-bold text-lg">읽고 확인할 준비 항목</h2><span role="status" className="text-sm font-semibold text-blue-900">{checked.length} / {items.length}</span></div>
      <p className="text-sm text-slate-600 mb-4">완료한 항목을 눌러보세요. 체크는 저장되지 않으며 새로 열면 초기화됩니다.</p>
      <ul className="space-y-3">{items.map(item=><li key={item}><label className="flex items-start gap-3 cursor-pointer rounded-lg bg-white/70 p-3"><input type="checkbox" checked={checked.includes(item)} onChange={e=>setChecked(prev=>e.target.checked?[...prev,item]:prev.filter(x=>x!==item))} className="mt-1 w-5 h-5 shrink-0 accent-blue-800"/><span className={checked.includes(item)?"text-slate-500 line-through":"text-slate-800"}>{item}</span></label></li>)}</ul>
      {checked.length>0&&<button onClick={()=>setChecked([])} className="mt-4 text-sm underline font-bold">체크 다시 시작</button>}
    </section>
  </>;
}
