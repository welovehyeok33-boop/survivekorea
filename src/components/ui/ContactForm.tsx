"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hyeokk763@gmail.com";

const SUBJECTS: Record<string, string> = {
  question: "Question about living in Korea",
  correction: "Found incorrect / outdated info",
  suggestion: "Topic suggestion",
  other: "Other",
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

    const subject = `[SurviveKorea] ${SUBJECTS[subjectKey] ?? "Message"}`;
    const body = [
      `Name: ${name}`,
      email ? `Email: ${email}` : null,
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
        <p className="font-bold text-gray-900 mb-1">Your email app should be opening…</p>
        <p className="text-sm text-gray-500">
          Just hit send in your mail app. If nothing opened, email me directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline" style={{ color: "#cd2e3a" }}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <button
          onClick={() => setOpened(false)}
          className="mt-5 text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors"
        >
          ← Back to the form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
        <select
          name="subject"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white"
        >
          <option value="question">Question about living in Korea</option>
          <option value="correction">Found incorrect / outdated info</option>
          <option value="suggestion">Topic suggestion</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What's on your mind?"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent resize-none transition-all"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white px-6 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-all"
        style={{ background: "#cd2e3a" }}
      >
        Send Message →
      </button>

      <p className="text-xs text-gray-400 text-center">
        This opens your email app with the message ready to send.
      </p>
    </form>
  );
}
