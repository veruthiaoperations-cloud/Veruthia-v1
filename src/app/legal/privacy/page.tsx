import { PRIVACY_TEXT } from "@/lib/constants";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-playfair text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">{PRIVACY_TEXT}</p>
          <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We collect information that you provide directly to us, including
            your name, email address, company information, and project details
            when you submit an Asset Audit request.
          </p>
          <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Your information is used solely for the purpose of evaluating your
            business for potential digital asset development and to communicate
            with you about our services.
          </p>
          <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">
            Data Security
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
          <h2 className="font-playfair text-2xl font-semibold mt-8 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact
            us through our website.
          </p>
        </div>
      </div>
    </div>
  );
}
