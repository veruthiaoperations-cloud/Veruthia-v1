import { TERMS_TEXT } from "@/lib/constants";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-playfair text-4xl font-bold mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">{TERMS_TEXT}</p>
          <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">
            Services
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Veruthia Consulting, LLC provides software architecture, web
            development, automation, and consulting services. All deliverables
            are custom-built to client specifications.
          </p>
          <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">
            Payment Terms
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Projects require a deposit before work begins. Final payment is due
            upon project completion. IP rights transfer only after final payment
            is received in full.
          </p>
          <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Veruthia Consulting, LLC is not liable for any indirect, incidental,
            special, or consequential damages arising from the use of our
            services or digital assets.
          </p>
          <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">
            Tax Disclaimer
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Veruthia Consulting, LLC is a software architecture firm, not a tax
            advisory. We do not provide tax advice. Consult a certified CPA for
            all tax-related matters including Section 179 eligibility.
          </p>
        </div>
      </div>
    </div>
  );
}
