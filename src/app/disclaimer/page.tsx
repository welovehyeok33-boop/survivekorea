import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "면책조항 – 한국에서 살아남기",
  description:
    "한국에서 살아남기(survivekorea.com)의 면책조항 — 본 사이트의 콘텐츠는 일반적인 정보 제공용이며 법률·금융·의료 등 전문적 조언이 아닙니다.",
};

export default function DisclaimerPage() {
  const updated = "2026년 6월 6일";

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-gray-900 mb-2">면책조항</h1>
      <p className="text-sm text-gray-400 mb-10">최종 업데이트: {updated}</p>

      <div className="space-y-8 text-gray-600 text-sm leading-relaxed">

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">일반 정보 제공용</h2>
          <p>
            한국에서 살아남기(&lsquo;본 사이트&rsquo;)의 모든 콘텐츠는 일반적인 정보 제공을 목적으로
            합니다. 저희는 정보를 정확하고 최신으로 유지하기 위해 최선을 다하지만, 사이트에 있는
            정보의 완전성·정확성·신뢰성·이용 가능성에 대해 명시적이든 묵시적이든 어떠한 보증도 하지
            않습니다. 정보에 대한 신뢰는 전적으로 이용자 본인의 책임입니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">전문적 조언이 아님</h2>
          <p>
            본 사이트는 기초연금·국민연금·정부지원금·복지·건강·재취업 등 다양한 주제를 다룹니다. 이
            콘텐츠는 법률·금융·세무·의료에 관한 전문적 조언이 <strong>아니며</strong>, 자격을 갖춘
            전문가의 상담을 대신할 수 없습니다.
          </p>
          <p className="mt-2">
            연금 기준, 지원금 요건, 복지 제도, 세법, 정부 절차는 자주 바뀝니다. 결정을 내리기 전에
            반드시 관련 공식 기관에서 현재 규정을 확인하세요. 예를 들면 다음과 같습니다.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>보건복지부 · 복지로 (<span className="font-mono">bokjiro.go.kr</span>, 상담 129)</li>
            <li>국민연금공단 (<span className="font-mono">nps.or.kr</span>, 상담 1355)</li>
            <li>국민건강보험공단 (<span className="font-mono">nhis.or.kr</span>, 상담 1577-1000)</li>
            <li>고용노동부 · HRD-Net (<span className="font-mono">hrd.go.kr</span>, 상담 1350)</li>
          </ul>
          <p className="mt-2">
            개인별 상황에 대해서는 주민센터, 해당 공공기관, 또는 자격을 갖춘 전문가와 직접
            상담하시기 바랍니다. 건강과 관련된 내용은 반드시 의료기관의 진료를 우선하세요.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">외부 링크</h2>
          <p>
            본 사이트에는 저희가 운영하거나 관리하지 않는 외부 웹사이트로 연결되는 링크가 포함될 수
            있습니다. 저희는 이러한 외부 사이트 정보의 정확성·관련성·완전성을 보증하지 않으며, 그
            콘텐츠나 운영에 대해 책임지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">광고</h2>
          <p>
            본 사이트는 구글 애드센스를 포함한 광고로 일부 운영됩니다. 광고는 편집 콘텐츠와 명확히
            구분되며, 광고 게재가 추천을 의미하지는 않습니다. 광고 쿠키가 어떻게 사용되는지는{" "}
            <Link href="/privacy-policy" className="underline" style={{ color: "#cd2e3a" }}>
              개인정보처리방침
            </Link>{" "}
            을 참고하세요.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">책임의 제한</h2>
          <p>
            한국에서 살아남기는 본 사이트의 정보를 이용하거나 이에 의존함으로써 발생하는 어떠한
            손해(간접적·결과적 손해를 포함하되 이에 한정되지 않음)에 대해서도 책임지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">문의</h2>
          <p>
            면책조항에 대한 문의는{" "}
            <Link href="/contact" className="underline" style={{ color: "#cd2e3a" }}>
              문의 페이지
            </Link>{" "}
            를 이용하시거나{" "}
            <a href="mailto:hyeokk763@gmail.com" className="underline" style={{ color: "#cd2e3a" }}>
              hyeokk763@gmail.com
            </a>{" "}
            으로 메일 주세요.
          </p>
        </section>

      </div>
    </div>
  );
}
