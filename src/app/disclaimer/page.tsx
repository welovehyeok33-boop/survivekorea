import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer – SurviveKorea",
  description:
    "Disclaimer for SurviveKorea.com — our content is for general informational purposes only and is not legal, financial, immigration, or medical advice.",
};

export default function DisclaimerPage() {
  const updated = "June 6, 2026";

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-gray-900 mb-2">Disclaimer</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: {updated}</p>

      <div className="space-y-8 text-gray-600 text-sm leading-relaxed">

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">General Information Only</h2>
          <p>
            All content on SurviveKorea (&quot;the site&quot;) is provided for general informational
            purposes only. While we make every effort to keep information accurate and up to date,
            we make no representations or warranties of any kind, express or implied, about the
            completeness, accuracy, reliability, or availability of any information on the site.
            Any reliance you place on such information is strictly at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">Not Professional Advice</h2>
          <p>
            Articles on this site cover topics including visas, immigration, banking, taxes,
            housing contracts, and healthcare. This content is <strong>not</strong> legal,
            financial, immigration, tax, or medical advice, and should not be treated as a
            substitute for advice from a qualified professional.
          </p>
          <p className="mt-2">
            Immigration rules, tax laws, fees, and government procedures in Korea change
            frequently. Before making any decision, always confirm the current rules with the
            relevant official authority — for example:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Korea Immigration Service (<span className="font-mono">hikorea.go.kr</span>)</li>
            <li>National Tax Service (<span className="font-mono">nts.go.kr</span>)</li>
            <li>National Health Insurance Service (<span className="font-mono">nhis.or.kr</span>)</li>
          </ul>
          <p className="mt-2">
            For your specific situation, consult a licensed lawyer, accountant, licensed
            administrative agent (행정사), or your employer&apos;s HR department.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">External Links</h2>
          <p>
            This site may contain links to external websites that are not provided or maintained by
            us. We do not guarantee the accuracy, relevance, or completeness of any information on
            these external sites, and we are not responsible for their content or practices.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">Affiliate Disclosure</h2>
          <p>
            Some links on this site are affiliate links. If you click one and make a purchase or
            booking, we may receive a small commission at no additional cost to you. This does not
            influence our recommendations — we only suggest products and services we believe are
            genuinely useful to readers.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">Advertising</h2>
          <p>
            This site is supported in part by advertising, including Google AdSense. Advertisements
            are clearly distinguishable from editorial content. The presence of an ad does not
            constitute an endorsement. See our{" "}
            <Link href="/privacy-policy" className="underline" style={{ color: "#cd2e3a" }}>
              Privacy Policy
            </Link>{" "}
            for how advertising cookies are used.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">Limitation of Liability</h2>
          <p>
            In no event will SurviveKorea be liable for any loss or damage — including, without
            limitation, indirect or consequential loss or damage — arising from the use of, or
            reliance on, information found on this site.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">Contact</h2>
          <p>
            Questions about this disclaimer? Visit our{" "}
            <Link href="/contact" className="underline" style={{ color: "#cd2e3a" }}>
              Contact page
            </Link>{" "}
            or email{" "}
            <a href="mailto:welovehyeok33@gmail.com" className="underline" style={{ color: "#cd2e3a" }}>
              welovehyeok33@gmail.com
            </a>.
          </p>
        </section>

      </div>
    </div>
  );
}
