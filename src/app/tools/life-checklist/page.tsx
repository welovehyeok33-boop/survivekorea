import type { Metadata } from 'next';
import Link from 'next/link';
import Planner from './Planner';
export const metadata:Metadata={title:"생활·정책 상담 준비표",description:"연금·돌봄·재취업 중 필요한 주제를 고르면 확인 순서와 관련 글이 함께 나옵니다. 상담 전에 체크하고, 상담 뒤에는 빠뜨린 질문이 있는지 다시 살펴보세요.",alternates:{canonical:"/tools/life-checklist"}};
export default function Page(){return <><div className="mx-auto max-w-5xl px-6 pt-8"><Link href="/" className="text-sm underline">홈으로</Link><h1 className="mt-4 text-3xl font-bold">생활·정책 상담 준비표</h1></div><Planner/></>;}
