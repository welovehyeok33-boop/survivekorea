import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact – SurviveKorea",
  description: "Get in touch with SurviveKorea — questions, corrections, or topic suggestions welcome.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-black text-gray-900 mb-2">Contact</h1>
      <p className="text-gray-500 mb-10 text-sm leading-relaxed">
        Found outdated information? Have a question about life in Korea? Want to suggest a topic?<br />
        Send a message — I read every one.
      </p>

      <ContactForm />

      <p className="mt-8 text-xs text-gray-400 text-center">
        Or email directly:{" "}
        <a href="mailto:welovehyeok33@gmail.com" className="underline hover:text-gray-600">
          welovehyeok33@gmail.com
        </a>
      </p>
    </div>
  );
}
