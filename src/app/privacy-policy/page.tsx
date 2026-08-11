import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 – 한국에서 살아남기",
  description: "한국에서 살아남기(survivekorea.com)의 개인정보처리방침 — 정보 수집·이용·보호 방식을 안내합니다.",
};

export default function PrivacyPolicyPage() {
  const updated = "2026년 6월 6일";

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-gray-900 mb-2">개인정보처리방침</h1>
      <p className="text-sm text-gray-400 mb-10">최종 업데이트: {updated}</p>

      <div className="space-y-8 text-gray-600 text-sm leading-relaxed">

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">1. 개요</h2>
          <p>
            한국에서 살아남기(&lsquo;저희&rsquo;)는 <strong>survivekorea.com</strong> 웹사이트를 운영합니다.
            본 개인정보처리방침은 저희가 어떤 정보를 수집하고, 왜 수집하며, 어떻게 이용하는지를
            설명합니다. 본 사이트를 이용하시면 여기에 설명된 내용에 동의하시는 것으로 간주합니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">2. 수집하는 정보</h2>
          <p>
            저희는 이름·연락처 등 <strong>개인을 식별할 수 있는 정보를 직접 수집하지 않습니다.</strong>{" "}
            다만 본 사이트에 삽입된 제3자 서비스가 다음 정보를 자동으로 수집할 수 있습니다.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>IP 주소(정확한 위치가 아닌 대략적 위치)</li>
            <li>브라우저 종류 및 버전</li>
            <li>방문한 페이지와 머문 시간</li>
            <li>유입 경로(어떤 사이트에서 오셨는지)</li>
            <li>기기 종류(PC / 모바일)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">3. 구글 애드센스(광고)</h2>
          <p>
            본 사이트는 <strong>구글 애드센스(Google AdSense)</strong>를 이용해 광고를 표시합니다.
            구글과 그 파트너사는 사용자가 본 사이트 및 다른 사이트를 방문한 기록을 바탕으로 광고를
            제공하기 위해 쿠키를 사용합니다.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>구글은 관심 기반 광고를 위해 <strong>DoubleClick 쿠키</strong>를 사용할 수 있습니다.</li>
            <li>구글을 포함한 제3자 업체는 사용자의 이전 방문 기록을 바탕으로 광고를 제공합니다.</li>
            <li>
              맞춤형 광고는{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900" style={{ color: "#cd2e3a" }}>
                구글 광고 설정
              </a>{" "}
              에서 거부할 수 있습니다.
            </li>
            <li>
              또는{" "}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900" style={{ color: "#cd2e3a" }}>
                aboutads.info
              </a>{" "}
              에서도 거부할 수 있습니다.
            </li>
          </ul>
          <p className="mt-2">
            구글의 데이터 이용 방식에 대한 자세한 내용은{" "}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900" style={{ color: "#cd2e3a" }}>
              구글 파트너 사이트에서의 데이터 이용 안내
            </a>{" "}
            를 참고하세요.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">4. 구글 애널리틱스</h2>
          <p>
            저희는 방문자가 사이트를 어떻게 이용하는지(예: 어떤 글이 유용한지, 어디서 유입되는지)를
            파악하기 위해 <strong>구글 애널리틱스(Google Analytics)</strong>를 사용할 수 있습니다.
            이 데이터는 익명으로 집계되며, 저희가 개인을 식별할 수는 없습니다.
          </p>
          <p className="mt-2">
            구글 애널리틱스 추적은{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900" style={{ color: "#cd2e3a" }}>
              구글 애널리틱스 차단 브라우저 부가기능
            </a>{" "}
            을 설치해 거부할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">5. 쿠키</h2>
          <p>
            쿠키는 기기에 저장되는 작은 텍스트 파일입니다. 본 사이트는 구글 애드센스, 구글
            애널리틱스 같은 제3자 서비스를 통해 쿠키를 사용할 수 있습니다. 쿠키는 언제든지 브라우저
            설정에서 관리하거나 삭제할 수 있습니다.
          </p>
          <p className="mt-2">브라우저별 쿠키 설정 위치:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>크롬: 설정 → 개인정보 및 보안 → 쿠키</li>
            <li>사파리: 환경설정 → 개인정보 보호</li>
            <li>파이어폭스: 설정 → 개인정보 및 보안</li>
          </ul>
          <p className="mt-2">
            참고: 쿠키를 차단하면 일부 기능이 정상적으로 동작하지 않을 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">6. 만 14세 미만 아동</h2>
          <p>
            본 사이트는 만 14세 미만 아동을 대상으로 하지 않으며, 아동의 개인정보를 고의로 수집하지
            않습니다. 아동이 개인정보를 제공했다고 판단되면 연락 주시기 바라며, 확인 후 삭제하겠습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">7. 방침의 변경</h2>
          <p>
            본 개인정보처리방침은 수시로 변경될 수 있습니다. 변경 시 상단의 &lsquo;최종 업데이트&rsquo;
            날짜를 갱신합니다. 변경 이후에도 사이트를 계속 이용하시면 변경 사항에 동의하신 것으로
            간주합니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">8. 문의</h2>
          <p>
            개인정보처리방침에 대한 문의는{" "}
            <a href="/contact" className="underline hover:text-gray-900" style={{ color: "#cd2e3a" }}>문의 페이지</a>{" "}
            를 이용하시거나{" "}
            <a href="mailto:hyeokk763@gmail.com" className="underline hover:text-gray-900" style={{ color: "#cd2e3a" }}>hyeokk763@gmail.com</a>{" "}
            으로 메일 주세요.
          </p>
        </section>

      </div>
    </div>
  );
}
