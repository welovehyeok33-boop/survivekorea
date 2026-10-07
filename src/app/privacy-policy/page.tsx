import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy-policy" },
  title: "개인정보처리방침 – 한국에서 살아남기",
  description: "한국에서 살아남기(survivekorea.com)의 개인정보처리방침 — 정보 수집·이용·보호 방식을 안내합니다.",
};

export default function PrivacyPolicyPage() {
  const updated = "2026년 10월 7일";

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
            설명합니다. 문의 기능과 광고 등 사이트 이용 중의 정보 처리를 안내합니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">2. 수집하는 정보</h2>
          <p>
            회원가입 기능은 제공하지 않습니다. 글 검색어와 준비 체크는 서버에 전송하거나 저장하지
            않습니다. 문의 양식은 작성 내용을 메일 앱으로 전달하며, 사용자가 메일을 보내면
            이름·이메일과 문의 내용이 운영자에게 전달됩니다. 광고 및 호스팅 서비스는 접속 관련
            정보를 처리할 수 있습니다.
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
            <li>Google의 광고 쿠키는 Google과 파트너사의 맞춤 광고 제공에 사용될 수 있습니다.</li>
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

        <section><h2 className="text-base font-bold text-gray-800 mb-2">4. 문의와 읽기 도구</h2><p>문의 내용은 질문 응답과 오류 확인에 이용합니다. 삭제 등 문의는 아래 연락처로 요청할 수 있습니다. 상세 의료기록, 주민등록번호와 금융 인증정보는 보내지 마세요. 상담 주제·기록·체크 상태는 현재 화면에서 처리하며, 도구는 입력을 서버·URL·쿠키·로컬 저장소에 자동 저장하지 않습니다. 복사는 기기 클립보드에, 저장은 텍스트 파일에 내용을 전달합니다. 인쇄·PDF는 브라우저 기능을 사용합니다. 저장·공유한 내용은 이용자가 관리합니다. 본문 글씨 확대와 체크 상태도 현재 화면에서만 사용합니다.</p></section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">5. 쿠키</h2>
          <p>
            쿠키는 기기에 저장되는 작은 텍스트 파일입니다. 본 사이트에 연결된 구글 애드센스 등
            제3자 광고 서비스는 쿠키를 사용할 수 있습니다. 쿠키는 언제든지 브라우저
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
            날짜를 갱신합니다. 실제 기능이나 정보 처리 방식이 바뀌면 관련 내용도 수정합니다.
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
