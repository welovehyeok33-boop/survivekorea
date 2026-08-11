import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관 – 한국에서 살아남기",
  description:
    "한국에서 살아남기(survivekorea.com)의 이용약관 — 사이트와 콘텐츠 이용에 관한 규정을 안내합니다.",
};

export default function TermsPage() {
  const updated = "2026년 7월 7일";

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-gray-900 mb-2">이용약관</h1>
      <p className="text-sm text-gray-400 mb-10">최종 업데이트: {updated}</p>

      <div className="space-y-8 text-gray-600 text-sm leading-relaxed">

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">약관의 동의</h2>
          <p>
            한국에서 살아남기(&lsquo;본 사이트&rsquo;)에 접속하고 이용하시면 본 이용약관과{" "}
            <Link href="/privacy-policy" className="underline" style={{ color: "#cd2e3a" }}>
              개인정보처리방침
            </Link>
            에 동의하시는 것으로 간주합니다. 약관의 어느 부분에라도 동의하지 않으시면 사이트 이용을
            중단해 주시기 바랍니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">콘텐츠 이용</h2>
          <p>
            본 사이트의 모든 글과 자료는 일반적인 정보 제공을 목적으로 합니다. 개인적·비상업적
            용도로 읽고 링크를 공유하시는 것은 환영합니다. 다만 사전 서면 동의 없이 사이트 콘텐츠의
            상당 부분을 복제·재게시·수집(스크래핑)·재배포하실 수 없습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">전문적 조언이 아님</h2>
          <p>
            본 사이트의 콘텐츠는 법률·금융·세무·의료에 관한 전문적 조언이 아닙니다. 한국의 제도,
            요건, 금액, 정부 절차는 자주 바뀝니다. 결정을 내리기 전에 반드시 관련 공식 기관에서 최신
            내용을 확인하고, 필요 시 자격을 갖춘 전문가와 상담하시기 바랍니다. 자세한 내용은{" "}
            <Link href="/disclaimer" className="underline" style={{ color: "#cd2e3a" }}>
              면책조항
            </Link>{" "}
            을 참고하세요.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">지식재산권</h2>
          <p>
            별도로 명시하지 않는 한, 사이트의 원본 텍스트는 한국에서 살아남기에 귀속됩니다. 사이트에
            언급된 상표·서비스명·로고는 각 소유자에게 귀속되며, 식별 및 정보 제공 목적으로만
            사용됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">외부 링크 및 광고</h2>
          <p>
            본 사이트에는 제3자 웹사이트로 연결되는 링크가 포함될 수 있으며, 구글 애드센스를 포함한
            광고가 표시됩니다. 저희는 제3자 사이트나 광고주의 콘텐츠·상품·운영에 대해 책임지지
            않습니다. 광고는 편집 콘텐츠와 명확히 구분되며, 광고 게재가 추천을 의미하지는 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">책임의 제한</h2>
          <p>
            본 사이트와 콘텐츠는 어떠한 종류의 보증도 없이 &lsquo;있는 그대로&rsquo; 제공됩니다.
            한국에서 살아남기는 사이트나 콘텐츠의 이용 또는 이에 대한 신뢰로 인해 발생하는 어떠한
            손해에 대해서도 책임지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">약관의 변경</h2>
          <p>
            본 이용약관은 수시로 변경될 수 있습니다. 변경 이후에도 사이트를 계속 이용하시면 변경된
            약관에 동의하신 것으로 간주합니다. 상단의 &lsquo;최종 업데이트&rsquo; 날짜가 가장 최근
            개정일을 나타냅니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">문의</h2>
          <p>
            약관에 대한 문의는{" "}
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
