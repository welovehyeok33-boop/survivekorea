import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "About – SurviveKorea",
  description:
    "SurviveKorea is a practical, first-hand guide to living long-term in Korea — housing, visas, banking, healthcare, transport, and daily life for foreign residents.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-gray-900 mb-3">About SurviveKorea</h1>
      <p className="text-gray-500 text-sm mb-10">
        Practical, no-fluff guides for foreigners building a life in Korea.
      </p>

      <div className="space-y-10 text-gray-600 leading-relaxed text-[15px]">

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Why this site exists</h2>
          <p className="mb-3">
            Moving to Korea long-term is exciting — and then you hit the paperwork. Opening a
            bank account, getting your Alien Registration Card, signing a{" "}
            <em>jeonse</em> lease, enrolling in National Health Insurance, setting up a phone plan,
            figuring out the tax office. Every one of these has its own quirks, and almost none of
            it is explained clearly in English.
          </p>
          <p>
            Most resources online are either tourist content (&quot;visit Gyeongbokgung!&quot;) or
            outdated forum threads that contradict each other. SurviveKorea was built to fill that
            gap: clear, current, step-by-step answers to the questions foreign residents actually
            ask — written by someone who lives here and has navigated the system firsthand.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">What we cover</h2>
          <p className="mb-4">
            Everything you need to settle in and stay, organized into the categories that matter
            most for daily life:
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
          <h2 className="text-lg font-bold text-gray-900 mb-3">How we keep guides accurate</h2>
          <p className="mb-3">
            Rules in Korea change — visa categories get updated, fees rise, government portals get
            redesigned. We take accuracy seriously:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Every guide is based on <strong>direct, first-hand experience</strong> living and
              dealing with Korean institutions — not copied from other blogs.
            </li>
            <li>
              Where official procedures are involved (immigration, taxes, insurance), we point you
              to the <strong>official government source</strong> so you can always verify the latest
              rules.
            </li>
            <li>
              When a reader tells us something has changed, we update the guide. Found something
              outdated? <Link href="/contact" className="underline" style={{ color: "#cd2e3a" }}>Let us know</Link>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Who it&apos;s for</h2>
          <p>
            English teachers, exchange students, remote workers, spouses on family visas,
            engineers on E-7s, digital nomads — anyone living in Korea beyond a short trip. We
            also publish in <strong>Korean</strong> and <strong>Japanese</strong> so more
            residents can use the guides in the language they&apos;re comfortable with.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">A note on honesty</h2>
          <p>
            SurviveKorea is reader-supported. Some pages display ads, and a few links are
            affiliate links — if you book or buy through them, we may earn a small commission at no
            extra cost to you. This never changes what we recommend. We only point to things we&apos;d
            actually use ourselves. See our{" "}
            <Link href="/privacy-policy" className="underline" style={{ color: "#cd2e3a" }}>Privacy Policy</Link>{" "}
            and{" "}
            <Link href="/disclaimer" className="underline" style={{ color: "#cd2e3a" }}>Disclaimer</Link>{" "}
            for the full details.
          </p>
        </section>

        <section className="rounded-2xl bg-gray-50 border border-gray-100 px-6 py-6">
          <h2 className="text-base font-bold text-gray-900 mb-2">Get in touch</h2>
          <p className="text-sm">
            Questions, corrections, or a topic you wish we&apos;d cover? Reach out on the{" "}
            <Link href="/contact" className="underline" style={{ color: "#cd2e3a" }}>Contact page</Link>{" "}
            or email{" "}
            <a href="mailto:welovehyeok33@gmail.com" className="underline" style={{ color: "#cd2e3a" }}>
              welovehyeok33@gmail.com
            </a>. We read every message.
          </p>
        </section>

      </div>
    </div>
  );
}
