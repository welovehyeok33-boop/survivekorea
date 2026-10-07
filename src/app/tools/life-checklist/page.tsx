import type { Metadata } from 'next';
import Link from 'next/link';
import Planner from './Planner';
export const metadata:Metadata={title:"생활·정책 상담 준비표",description:"상황을 고르면 공식 문의처, 먼저 살펴볼 자료와 상담 질문이 나옵니다. 통화 후에는 접수 여부와 다음 할 일을 기록해 저장하세요.",alternates:{canonical:"/tools/life-checklist"}};
export default function Page(){return <><div className="mx-auto max-w-5xl px-6 pt-8"><Link href="/" className="text-sm underline">홈으로</Link><h1 className="mt-4 text-3xl font-bold">생활·정책 상담 준비표</h1></div><Planner/></>;}
