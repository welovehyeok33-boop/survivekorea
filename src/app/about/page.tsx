import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { author } from "@/data/author";

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
            ask — written from the inside.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Who&apos;s behind it</h2>

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
                {author.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </div>
            )}
            <div>
              <div className="font-bold text-gray-900">{author.name}</div>
              <div className="text-sm text-gray-500">{author.role}</div>
              <div className="text-xs text-gray-400 mt-0.5">{author.location}</div>
            </div>
          </div>

          <p className="mb-3">
            I&apos;m <strong>Joon Shin</strong> — a Seoul native, 20-plus years in this city. In my
            late twenties I moved to <strong>New York</strong> for work, and living abroad flipped my
            perspective: I finally saw my own country through a foreigner&apos;s eyes — which forms to
            bring, which lines to stand in, what nobody bothers to explain because locals just
            <em>know</em> it.
          </p>
          <p className="mb-3">
            Now I&apos;m back in Seoul. Between that outside lens and a lifetime of knowing how things
            actually work here, I kept ending up as the person friends and coworkers from abroad
            messaged first — which bank will really open an account, what to say at the immigration
            office, how to read a 전세 lease before signing it. After explaining 알뜰폰 phone plans and
            HiKorea visa extensions for the hundredth time, I started writing it all down.
          </p>
          <p>
            That&apos;s the perspective behind every guide here: a local who knows the system, who&apos;s
            also lived as a foreigner abroad, writing for the person standing in line trying to figure
            it out. I&apos;m not a lawyer or an immigration agent, so for anything official I&apos;ll always
            point you to the government source — but I can tell you what the process actually feels
            like and where people get tripped up.
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
            engineers on E-7s, digital nomads — anyone living in Korea beyond a short trip. If
            you&apos;re past the tourist stage and trying to actually build a life here, these guides
            are for you.
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
