import Breadcrumbs from "~/components/Breadcrumbs";
import type { Route } from "./+types/privacy-policy";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Privacy Policy | Speedy Cash Home Offers" },
    {
      name: "description",
      content:
        "Privacy Policy for Speedy Cash Home Offers. Learn how we collect, use, and protect your personal information when you use our cash home buying services.",
    },
    { name: "robots", content: "index, follow" },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.speedycashhomeoffers.com/privacy-policy",
    },
    { property: "og:title", content: "Privacy Policy | Speedy Cash Home Offers" },
    {
      property: "og:description",
      content:
        "Privacy Policy for Speedy Cash Home Offers. Learn how we collect, use, and protect your personal information.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/privacy-policy" },
    { property: "og:image", content: "https://www.speedycashhomeoffers.com/images/og-image.jpg" },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Privacy Policy | Speedy Cash Home Offers" },
    {
      name: "twitter:description",
      content:
        "Privacy Policy for Speedy Cash Home Offers. Learn how we protect your personal information.",
    },
    {
      name: "twitter:image",
      content: "https://www.speedycashhomeoffers.com/images/twitter-image.jpg",
    },
  ];
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description: "Privacy Policy for Speedy Cash Home Offers",
            url: "https://www.speedycashhomeoffers.com/privacy-policy",
            publisher: {
              "@id": "https://www.speedycashhomeoffers.com/#organization",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Privacy Policy</h1>
          <p className="text-xl text-center text-blue-100">Your privacy is important to us</p>
          <p className="text-sm text-center text-blue-200 mt-2">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              Speedy Cash Home Offers ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website, use our services, or contact us about
              selling your property.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              2. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.1 Information You Provide
            </h3>
            <p className="text-gray-700 mb-4">
              We collect information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Property address and details about your property</li>
              <li>Information about your situation (e.g., foreclosure, inheritance, relocation)</li>
              <li>Any other information you choose to provide in forms or communications</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.2 Automatically Collected Information
            </h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we may automatically collect certain information,
              including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information and operating system</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for various business purposes to provide you with
              exceptional service and operate our cash home buying business effectively. This
              section outlines the specific ways we use your information.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3.1 Providing Cash Home Buying Services
            </h3>
            <p className="text-gray-700 mb-4">
              We use your property information, contact details, and situation details to evaluate
              your property, conduct market analysis, and provide you with fair cash offers. This
              includes using your property address to assess location factors, property condition
              details to determine repair costs, and your situation information to understand your
              timeline and needs.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3.2 Customer Service and Communication
            </h3>
            <p className="text-gray-700 mb-4">
              We use your contact information to respond to your inquiries, provide customer
              support, schedule property walkthroughs, and communicate about your transaction. We
              may also use your information to send you updates about your offer, closing
              timelines, and important transaction details.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3.3 Service Improvement and Analytics
            </h3>
            <p className="text-gray-700 mb-4">
              We analyze website usage patterns, property information, and transaction data to
              improve our services, refine our valuation processes, and enhance the overall customer
              experience. This helps us provide better cash offers and more efficient service.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3.4 Legal Compliance and Fraud Prevention
            </h3>
            <p className="text-gray-700 mb-4">
              We use your information to comply with legal obligations, respond to legal requests,
              protect our rights and property, and prevent fraudulent or illegal activity. This may
              include verifying property ownership, conducting due diligence, and maintaining
              transaction records as required by law.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3.5 Marketing and Promotions (With Consent)
            </h3>
            <p className="text-gray-700 mb-6">
              With your explicit consent, we may use your contact information to send you
              promotional materials, newsletters, market updates, and information about new services.
              You can opt out of these communications at any time by contacting us or using the
              unsubscribe link in our emails.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information to third parties. We are committed to
              protecting your privacy and only share your information in limited circumstances as
              described below.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4.1 Service Providers and Business Partners
            </h3>
            <p className="text-gray-700 mb-4">
              We may share your information with trusted third-party service providers who perform
              services on our behalf, such as customer relationship management (CRM) systems,
              email marketing services, analytics providers, title companies, and property
              inspection services. These service providers are contractually obligated to protect
              your information and use it only for the purposes we specify.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4.2 Legal Requirements and Law Enforcement
            </h3>
            <p className="text-gray-700 mb-4">
              We may disclose your information if required by law, regulation, court order, or legal
              process. This may include responding to subpoenas, search warrants, or other valid
              legal requests. We may also disclose information to protect our rights, property, or
              safety, or that of our customers or others.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4.3 Business Transfers and Mergers
            </h3>
            <p className="text-gray-700 mb-4">
              In the event of a merger, acquisition, reorganization, sale of assets, or bankruptcy,
              your information may be transferred to the acquiring entity or successor organization.
              We will provide notice of any such transfer and ensure the receiving entity agrees to
              protect your information in accordance with this Privacy Policy.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4.4 With Your Explicit Consent
            </h3>
            <p className="text-gray-700 mb-6">
              We may share your information with third parties when you explicitly consent to such
              sharing. For example, if you request that we share your property information with a
              specific real estate professional or service provider, we will do so only with your
              written or verbal consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We take the security of your personal information seriously and implement appropriate
              technical and organizational security measures to protect your data from unauthorized
              access, disclosure, alteration, or destruction.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              5.1 Technical Security Measures
            </h3>
            <p className="text-gray-700 mb-4">
              We use industry-standard encryption technologies to protect data transmitted between
              your browser and our servers. Our website uses SSL/TLS encryption to ensure secure
              communication. We also implement firewalls, intrusion detection systems, and regular
              security assessments to protect our systems from unauthorized access.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              5.2 Organizational Security Measures
            </h3>
            <p className="text-gray-700 mb-4">
              We limit access to your personal information to authorized employees, contractors, and
              service providers who need access to perform their job functions. All individuals with
              access to your information are required to maintain confidentiality and are trained on
              data protection best practices.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              5.3 Limitations of Security Measures
            </h3>
            <p className="text-gray-700 mb-6">
              While we implement robust security measures, no method of transmission over the
              Internet or electronic storage is 100% secure. We cannot guarantee absolute security
              of your information. If you have concerns about the security of your information,
              please contact us immediately. We will investigate any suspected security breaches and
              notify you as required by applicable law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              6. Your Rights and Choices
            </h2>
            <p className="text-gray-700 mb-4">
              You have certain rights regarding your personal information. This section outlines
              your rights and how you can exercise them. These rights may vary depending on your
              location and applicable privacy laws.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6.1 Right to Access Your Information
            </h3>
            <p className="text-gray-700 mb-4">
              You have the right to request access to the personal information we hold about you.
              This includes the right to receive a copy of your information in a portable format.
              To exercise this right, please contact us using the information provided in the
              "Contact Us" section below. We will respond to your request within a reasonable time
              frame as required by applicable law.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6.2 Right to Correct or Update Information
            </h3>
            <p className="text-gray-700 mb-4">
              You have the right to request correction of inaccurate or incomplete personal
              information we hold about you. If you believe any information we have about you is
              incorrect, please contact us and we will update it promptly. We may require
              verification of your identity before processing correction requests.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6.3 Right to Delete Your Information
            </h3>
            <p className="text-gray-700 mb-4">
              You have the right to request deletion of your personal information, subject to
              certain exceptions such as legal obligations, ongoing transactions, or legitimate
              business interests. We will honor deletion requests to the extent required by
              applicable law. Please note that some information may be retained for legal or
              regulatory purposes even after you request deletion.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6.4 Right to Opt-Out of Marketing Communications
            </h3>
            <p className="text-gray-700 mb-4">
              You have the right to opt-out of receiving marketing communications from us at any
              time. You can do this by clicking the unsubscribe link in our emails, contacting us
              directly, or updating your communication preferences. Note that even if you opt-out
              of marketing communications, we may still send you transactional messages related to
              your transactions or account.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6.5 Right to Object to Processing
            </h3>
            <p className="text-gray-700 mb-6">
              You have the right to object to certain processing of your personal information,
              particularly processing for direct marketing purposes. If you wish to object to
              processing, please contact us and we will evaluate your request in accordance with
              applicable privacy laws.
            </p>
            <p className="text-gray-700 mb-6">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:DrDuffy@SpeedyCashHomeOffers.com"
                className="text-blue-600 hover:text-blue-800"
              >
                DrDuffy@SpeedyCashHomeOffers.com
              </a>{" "}
              or call us at{" "}
              <a href="tel:(702) 500-1981" className="text-blue-600 hover:text-blue-800">
                (702) 500-1981
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 mb-6">
              We use cookies and similar tracking technologies to track activity on our website and
              store certain information. You can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent. However, if you do not accept cookies, you may
              not be able to use some portions of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices of these external sites. We encourage you to review the privacy
              policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have collected
              information from a child, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Speedy Cash Home Offers</strong>
              </p>
              <p className="text-gray-700 mb-2">
                2775 Ariel Ocean St
                <br />
                Las Vegas, NV 89156
              </p>
              <p className="text-gray-700 mb-2">
                Phone:{" "}
                <a href="tel:(702) 500-1981" className="text-blue-600 hover:text-blue-800">
                  (702) 500-1981
                </a>
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:DrDuffy@SpeedyCashHomeOffers.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  DrDuffy@SpeedyCashHomeOffers.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
