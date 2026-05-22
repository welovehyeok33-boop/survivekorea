import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About SurviveKorea — who runs this site and why.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About SurviveKorea</h1>
      <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
        <p>
          SurviveKorea was built for one reason: when I moved to Korea long-term, I couldn&apos;t find a single resource that gave me straight, practical answers.
        </p>
        <p>
          Every article was either a tourist tip (&quot;visit Gyeongbokgung!&quot;) or hopelessly outdated. I needed to know how to open a bank account, find affordable housing, get health insurance, and navigate bureaucracy — in English, without wading through five Reddit threads.
        </p>
        <p>
          This site covers everything you actually need to survive and thrive as a long-term foreign resident in Korea. All guides are written from direct, first-hand experience living and working here.
        </p>
        <p>
          If something&apos;s wrong or out of date, <a href="/contact" className="text-emerald-600 underline">let me know</a>.
        </p>
      </div>
    </div>
  );
}
