"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hyeokk763@gmail.com";

const SUBJECTS: Record<string, string> = {
  question: "정보 관련 질문",
  correction: "잘못된 / 오래된 정보 제보",
  suggestion: "주제 제안",
  other: "기타",
};

export default function ContactForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string)?.trim() || "";
    const email = (data.get("email") as string)?.trim() || "";
    const subjectKey = (data.get("subject") as string) || "other";
    const message = (data.get("message") as string)?.trim() || "";

    const subject = `[한국에서 살아남기] ${SUBJECTS[subjectKey] ?? "문의"}`;
    const body = [
      `이름: ${name}`,
      email ? `이메일: ${email}` : null,
      "",
      message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  if (opened) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-gray-50 px-8 py-12 text-center">
        <div className="text-3xl mb-3">✉️</div>
        <p className="font-bold text-gray-900 mb-1">메일 앱이 열립니다…</p>
        <p className="text-sm text-gray-500">
          메일 앱에서 &lsquo;보내기&rsquo;만 누르시면 됩니다. 아무것도 열리지 않으면{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline" style={{ color: "#cd2e3a" }}>
            {CONTACT_EMAIL}
          </a>
          {" "}로 직접 메일 주세요.
        </p>
        <button
          onClick={() => setOpened(false)}
          className="mt-5 text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors"
        >
          ← 다시 작성하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
        <input
          type="text"
          name="name"
          required
          placeholder="성함을 입력하세요"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          이메일 <span className="text-gray-400 font-normal">(선택)</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">문의 유형</label>
        <select
          name="subject"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white"
        >
          <option value="question">정보 관련 질문</option>
          <option value="correction">잘못된 / 오래된 정보 제보</option>
          <option value="suggestion">주제 제안</option>
          <option value="other">기타</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">내용</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="어떤 내용인가요?"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent resize-none transition-all"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white px-6 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-all"
        style={{ background: "#cd2e3a" }}
      >
        메시지 보내기 →
      </button>

      <p className="text-xs text-gray-400 text-center">
        버튼을 누르면 작성된 내용이 담긴 메일 앱이 열립니다.
      </p>
    </form>
  );
}
