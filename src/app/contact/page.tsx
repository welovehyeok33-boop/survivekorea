import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "문의하기 – 한국에서 살아남기",
  description: "한국에서 살아남기에 궁금한 점, 잘못된 정보 제보, 다뤄 줬으면 하는 주제를 알려 주세요.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-gray-900 mb-2">문의하기</h1>
      <p className="text-gray-500 mb-10 text-sm leading-relaxed">
        잘못된 정보를 발견하셨나요? 궁금한 점이 있으신가요? 다뤄 줬으면 하는 주제가 있으신가요?<br />
        글 주소와 확인할 내용을 알려 주세요. 버튼을 누르면 메일 앱이 열리며 직접 전송해야 접수됩니다. 주민등록번호·계좌번호·상세 의료기록은 보내지 마세요.
      </p>

      <ContactForm />

      <p className="mt-8 text-xs text-gray-400 text-center">
        또는 이메일로 직접 보내기:{" "}
        <a href="mailto:hyeokk763@gmail.com" className="underline hover:text-gray-600">
          hyeokk763@gmail.com
        </a>
      </p>
    </div>
  );
}
