import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { author } from "@/data/author";

export const metadata: Metadata = {
  title: "소개 – 한국에서 살아남기",
  description:
    "한국에서 살아남기는 복잡한 정부 정책과 생활 정보를 40·50·60대가 실제로 쓸 수 있게 쉽게 풀어 드리는 중장년 생활·정책 정보 사이트입니다.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-gray-900 mb-3">한국에서 살아남기 소개</h1>
      <p className="text-gray-500 text-sm mb-10">
        중장년에게 꼭 필요한 정보를, 부모님께 설명하듯 쉽게 풀어 드립니다.
      </p>

      <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">이 사이트를 만든 이유</h2>
          <p className="mb-3">
            기초연금은 어떻게 신청하는지, 내 국민연금은 얼마나 나오는지, 무릎이 아플 때 어떤
            운동을 해야 하는지, 식당 키오스크는 어떻게 쓰는지. 40·50·60대가 되면 마주하는 이런
            질문들은 하나같이 중요한데, 정작 <strong>쉽고 정확하게 설명해 주는 곳</strong>은 찾기
            어렵습니다.
          </p>
          <p>
            정부 홈페이지는 용어가 어렵고, 검색하면 오래됐거나 서로 다른 정보가 뒤섞여 나옵니다.
            &lsquo;한국에서 살아남기&rsquo;는 바로 그 빈틈을 메우기 위해 만들었습니다. 복잡한 제도와
            생활 정보를, 실제로 쓸 수 있게 하나하나 짚어 드리는 것이 저희의 목표입니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">누가 만드나요</h2>

          {/* Author card */}
          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 mb-5">
            {author.avatar ? (
              <Image
                src={author.avatar}
                alt={author.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover shrink-0"
              />
            ) : (
              <div
                className="w-16 h-16 rounded-full shrink-0 flex items-center justify-center text-white font-black text-xl"
                style={{ background: "#cd2e3a" }}
              >
                {author.name.slice(0, 2)}
              </div>
            )}
            <div>
              <div className="font-bold text-gray-900">{author.name}</div>
              <div className="text-sm text-gray-500">{author.role}</div>
              <div className="text-xs text-gray-400 mt-0.5">{author.location}</div>
            </div>
          </div>

          <p className="mb-3">
            저희는 복잡한 정책과 생활 정보를 쉽게 풀어 전하는 <strong>편집팀</strong>입니다.
            부모님 세대가 제도를 몰라 받을 수 있는 혜택을 놓치거나, 새로운 기기 앞에서 당황하는
            모습을 보며 이 일을 시작했습니다.
          </p>
          <p>
            저희는 변호사나 세무사, 의사가 아닙니다. 그래서 공식 절차나 정확한 금액이 필요한
            부분은 항상 <strong>정부 기관의 공식 자료</strong>를 함께 안내해 드립니다. 대신 저희는
            &lsquo;그래서 어디서 어떻게 신청하는지&rsquo;, &lsquo;어디서 사람들이 자주 막히는지&rsquo;를
            실생활 눈높이에서 정리해 드립니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">어떤 정보를 다루나요</h2>
          <p className="mb-4">
            중장년의 생활에 꼭 필요한 주제를 다섯 가지로 나눠 정리합니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="flex items-center gap-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 px-4 py-3 transition-all"
              >
                <span className="text-xl">{cat.icon}</span>
                <div>
                  <span className="block text-sm font-bold text-gray-900">{cat.label}</span>
                  <span className="block text-xs text-gray-400">{cat.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">정보를 정확하게 유지하는 방법</h2>
          <p className="mb-3">
            연금 기준액, 지원금 요건, 복지 제도는 매년 바뀝니다. 저희는 정확성을 중요하게
            생각합니다.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              각 글은 공식 제도와 자료를 바탕으로 <strong>이해하기 쉽게 다시 정리</strong>합니다.
            </li>
            <li>
              연금·복지·건강처럼 공식 확인이 필요한 부분은 반드시{" "}
              <strong>정부 기관의 공식 출처</strong>를 함께 안내해 최신 내용을 직접 확인하실 수
              있게 합니다.
            </li>
            <li>
              바뀐 정보를 발견하시면 업데이트합니다. 잘못된 내용을 보셨다면{" "}
              <Link href="/contact" className="underline" style={{ color: "#cd2e3a" }}>알려 주세요</Link>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">누구를 위한 사이트인가요</h2>
          <p>
            은퇴를 앞둔 50대, 노후를 준비하는 60대, 그리고 부모님을 도와드리고 싶은 40대 자녀까지.
            복잡한 정보 때문에 답답했던 모든 분을 위한 사이트입니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">솔직하게 말씀드리면</h2>
          <p>
            한국에서 살아남기는 광고로 운영됩니다. 일부 페이지에 광고가 표시될 수 있습니다.
            하지만 광고가 저희가 전하는 정보의 내용을 바꾸지는 않습니다. 자세한 내용은{" "}
            <Link href="/privacy-policy" className="underline" style={{ color: "#cd2e3a" }}>개인정보처리방침</Link>{" "}
            과{" "}
            <Link href="/disclaimer" className="underline" style={{ color: "#cd2e3a" }}>면책조항</Link>{" "}
            에서 확인하실 수 있습니다.
          </p>
        </section>

        <section className="rounded-2xl bg-gray-50 border border-gray-100 px-6 py-6">
          <h2 className="text-base font-bold text-gray-900 mb-2">문의하기</h2>
          <p className="text-sm">
            궁금한 점, 잘못된 정보, 다뤄 줬으면 하는 주제가 있으시면{" "}
            <Link href="/contact" className="underline" style={{ color: "#cd2e3a" }}>문의 페이지</Link>{" "}
            로 알려 주시거나{" "}
            <a href="mailto:hyeokk763@gmail.com" className="underline" style={{ color: "#cd2e3a" }}>
              hyeokk763@gmail.com
            </a>{" "}
            으로 메일 주세요. 모든 메시지를 읽습니다.
          </p>
        </section>

      </div>
    </div>
  );
}
