import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
        <p>Last updated: May 2025</p>
        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">What we collect</h2>
          <p>
            SurviveKorea uses Google Analytics to understand traffic patterns (page views, referral sources, approximate location by country). No personally identifiable information is stored. We use Google AdSense to display advertisements, which may use cookies to personalize ads.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">Cookies</h2>
          <p>
            This site uses cookies through Google Analytics and Google AdSense. You can disable cookies in your browser settings at any time.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">Affiliate links</h2>
          <p>
            Some links on this site are affiliate links (e.g. Agoda, Booking.com). If you click and make a booking, we may receive a small commission at no extra cost to you.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">Contact</h2>
          <p>
            Questions about this policy? Use the <a href="/contact" className="text-emerald-600 underline">contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
