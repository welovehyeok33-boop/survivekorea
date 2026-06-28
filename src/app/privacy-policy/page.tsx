import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – SurviveKorea",
  description: "Privacy Policy for SurviveKorea.com — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  const updated = "June 6, 2026";

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: {updated}</p>

      <div className="space-y-8 text-gray-600 text-sm leading-relaxed">

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">1. Overview</h2>
          <p>
            SurviveKorea ("we", "us", "our") operates the website at <strong>survivekorea.com</strong>.
            This Privacy Policy explains what information we collect, why we collect it, and how we use it.
            By using this site, you agree to the practices described here.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">2. Information We Collect</h2>
          <p>We do <strong>not</strong> collect or store any personally identifiable information (PII) directly. However, third-party services embedded on this site may collect the following automatically:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>IP address (approximate location, not precise)</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Referring website (where you came from)</li>
            <li>Device type (desktop / mobile)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">3. Google AdSense (Advertising)</h2>
          <p>
            This site uses <strong>Google AdSense</strong> to display advertisements. Google and its partners use cookies to serve ads based on your prior visits to this and other websites.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Google may use the <strong>DoubleClick cookie</strong> to serve interest-based ads.</li>
            <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits.</li>
            <li>You can opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-900"
                style={{ color: "#cd2e3a" }}
              >
                Google Ads Settings
              </a>.
            </li>
            <li>You can also opt out via{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-900"
                style={{ color: "#cd2e3a" }}
              >
                aboutads.info
              </a>.
            </li>
          </ul>
          <p className="mt-2">
            For more information on how Google uses data, see:{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-900"
              style={{ color: "#cd2e3a" }}
            >
              How Google uses data when you use our partners' sites or apps
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">4. Google Analytics</h2>
          <p>
            We use <strong>Google Analytics</strong> to understand how visitors interact with the site (e.g. which articles are most useful, where visitors come from). This data is aggregated and anonymous — we cannot identify you personally.
          </p>
          <p className="mt-2">
            You can opt out of Google Analytics tracking by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-900"
              style={{ color: "#cd2e3a" }}
            >
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">5. Cookies</h2>
          <p>
            Cookies are small text files stored on your device. This site uses cookies through Google AdSense and Google Analytics. You can control or delete cookies at any time via your browser settings.
          </p>
          <p className="mt-2">Common cookie controls by browser:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Chrome: Settings → Privacy and Security → Cookies</li>
            <li>Safari: Preferences → Privacy</li>
            <li>Firefox: Settings → Privacy & Security</li>
          </ul>
          <p className="mt-2">
            Note: Disabling cookies may affect the functionality of some features on this site.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">6. Affiliate Links</h2>
          <p>
            Some links on this site may be affiliate links (e.g. accommodation, services in Korea). If you click an affiliate link and make a purchase, we may earn a small commission at <strong>no additional cost to you</strong>. We only recommend products and services we genuinely believe are useful.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">7. Your Rights (GDPR / EU Users)</h2>
          <p>If you are located in the European Union, you have the following rights under GDPR:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>The right to access data we hold about you</li>
            <li>The right to request deletion of your data</li>
            <li>The right to object to data processing</li>
            <li>The right to data portability</li>
          </ul>
          <p className="mt-2">
            Since we do not store personal data directly, most of these requests should be directed to Google. To exercise your rights, <a href="/contact" className="underline hover:text-gray-900" style={{ color: "#cd2e3a" }}>contact us</a>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">8. Children's Privacy</h2>
          <p>
            This site is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be reflected by updating the "Last updated" date at the top. Continued use of the site after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2">10. Contact</h2>
          <p>
            Questions about this Privacy Policy? Visit our{" "}
            <a href="/contact" className="underline hover:text-gray-900" style={{ color: "#cd2e3a" }}>Contact page</a> or email us directly at{" "}
            <a href="mailto:hyeokk763@gmail.com" className="underline hover:text-gray-900" style={{ color: "#cd2e3a" }}>hyeokk763@gmail.com</a>.
          </p>
        </section>

      </div>
    </div>
  );
}
