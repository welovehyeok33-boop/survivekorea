import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service – SurviveKorea",
  description:
    "Terms of Service for SurviveKorea.com — the rules and conditions for using our website and content.",
};

export default function TermsPage() {
  const updated = "July 7, 2026";

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: {updated}</p>

      <div className="space-y-8 text-gray-600 text-sm leading-relaxed">

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">Acceptance of Terms</h2>
          <p>
            By accessing and using SurviveKorea (&quot;the site&quot;), you agree to be bound by
            these Terms of Service and our{" "}
            <Link href="/privacy-policy" className="underline" style={{ color: "#cd2e3a" }}>
              Privacy Policy
            </Link>
            . If you do not agree with any part of these terms, please do not use the site.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">Use of Content</h2>
          <p>
            All articles, guides, and other content on this site are provided for general
            informational purposes only. You are welcome to read and share links to our content for
            personal, non-commercial use. You may not copy, republish, scrape, or redistribute
            substantial portions of the site&apos;s content without prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">No Professional Advice</h2>
          <p>
            Content on this site is not legal, financial, immigration, tax, or medical advice.
            Rules, fees, and government procedures in Korea change frequently. Always confirm
            current requirements with the relevant official authority and consult a qualified
            professional before making decisions. See our{" "}
            <Link href="/disclaimer" className="underline" style={{ color: "#cd2e3a" }}>
              Disclaimer
            </Link>{" "}
            for full details.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">Intellectual Property</h2>
          <p>
            Unless otherwise noted, the site&apos;s original text is the property of SurviveKorea.
            Trademarks, service names, and logos referenced on the site belong to their respective
            owners and are used for identification and informational purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">Third-Party Links and Advertising</h2>
          <p>
            The site may contain links to third-party websites and displays advertising, including
            Google AdSense. We are not responsible for the content, products, or practices of any
            third-party site or advertiser. Advertisements are clearly distinguishable from
            editorial content and do not constitute an endorsement.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">Limitation of Liability</h2>
          <p>
            The site and its content are provided &quot;as is&quot; without warranties of any kind.
            In no event will SurviveKorea be liable for any loss or damage arising from your use of,
            or reliance on, the site or its content.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">Changes to These Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of the site after
            any changes constitutes acceptance of the revised terms. The &quot;last updated&quot;
            date above reflects the most recent revision.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">Contact</h2>
          <p>
            Questions about these terms? Visit our{" "}
            <Link href="/contact" className="underline" style={{ color: "#cd2e3a" }}>
              Contact page
            </Link>{" "}
            or email{" "}
            <a href="mailto:hyeokk763@gmail.com" className="underline" style={{ color: "#cd2e3a" }}>
              hyeokk763@gmail.com
            </a>.
          </p>
        </section>

      </div>
    </div>
  );
}
