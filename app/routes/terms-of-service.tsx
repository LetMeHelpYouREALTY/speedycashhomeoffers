import Breadcrumbs from "~/components/Breadcrumbs";
import type { Route } from "./+types/terms-of-service";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Terms of Service | Speedy Cash Home Offers" },
    {
      name: "description",
      content:
        "Terms of Service for Speedy Cash Home Offers. Read our terms and conditions for using our cash home buying services.",
    },
    { name: "robots", content: "index, follow" },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.speedycashhomeoffers.com/terms-of-service",
    },
    { property: "og:title", content: "Terms of Service | Speedy Cash Home Offers" },
    {
      property: "og:description",
      content: "Terms of Service for Speedy Cash Home Offers. Read our terms and conditions.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/terms-of-service" },
    { property: "og:image", content: "https://www.speedycashhomeoffers.com/images/og-image.jpg" },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Terms of Service | Speedy Cash Home Offers" },
    {
      name: "twitter:description",
      content: "Terms of Service for Speedy Cash Home Offers. Read our terms and conditions.",
    },
    {
      name: "twitter:image",
      content: "https://www.speedycashhomeoffers.com/images/twitter-image.jpg",
    },
  ];
};

export default function TermsOfService() {
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
            name: "Terms of Service",
            description: "Terms of Service for Speedy Cash Home Offers",
            url: "https://www.speedycashhomeoffers.com/terms-of-service",
            publisher: {
              "@id": "https://www.speedycashhomeoffers.com/#organization",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Terms of Service</h1>
          <p className="text-xl text-center text-indigo-100">Please read these terms carefully</p>
          <p className="text-sm text-center text-indigo-200 mt-2">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing or using the services of Speedy Cash Home Offers ("we," "our," or "us"),
              you agree to be bound by these Terms of Service. If you disagree with any part of
              these terms, you may not access our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Services Description</h2>
            <p className="text-gray-700 mb-4">
              Speedy Cash Home Offers provides cash home buying services in Las Vegas, Nevada, and
              Southern California. We offer to purchase residential properties for cash, typically
              closing within 7-21 days. Our services include property evaluation, cash offer
              generation, and expedited closing services.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.1 Cash Home Buying Services
            </h3>
            <p className="text-gray-700 mb-4">
              Our primary service is purchasing residential properties for cash. We specialize in
              single-family homes, condos, townhomes, and investment properties in Las Vegas and
              Southern California markets. Our service areas include Las Vegas (with a focus on
              North/East neighborhoods), Orange County, San Diego, Riverside, Inland Empire, and
              Los Angeles County.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.2 Property Evaluation and Cash Offer Generation
            </h3>
            <p className="text-gray-700 mb-4">
              We evaluate properties based on current market conditions, property condition,
              location factors, and repair costs. Our evaluation process includes reviewing
              property information, conducting market analysis, and performing property
              walkthroughs. Based on this evaluation, we generate fair cash offers that reflect the
              property's true market value.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.3 Expedited Closing Services
            </h3>
            <p className="text-gray-700 mb-6">
              We offer expedited closing services, typically closing transactions within 7-21 days
              of offer acceptance. Our closing process includes handling title searches, preparing
              closing documents, coordinating with title companies, and facilitating fund transfers.
              We work to accommodate your timeline while ensuring all legal and regulatory
              requirements are met.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. No Obligation</h2>
            <p className="text-gray-700 mb-6">
              Submitting information to us or receiving a cash offer does not create any obligation
              on your part to sell your property to us. You are free to accept or reject any offer
              we make. There are no fees or penalties for declining our offer or choosing not to
              proceed with a sale.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Property Information</h2>
            <p className="text-gray-700 mb-4">
              You agree to provide accurate and complete information about your property to enable
              us to make fair cash offers. Accurate information is essential for proper property
              evaluation and ensures we can provide offers that reflect true market value.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4.1 Required Property Information
            </h3>
            <p className="text-gray-700 mb-4">
              You agree to provide accurate and complete information about your property, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Property address and legal description</li>
              <li>Property condition and any known defects</li>
              <li>Outstanding liens, mortgages, or encumbrances</li>
              <li>Any other material information that may affect the property's value</li>
              <li>Property size, number of bedrooms and bathrooms, lot size</li>
              <li>Age of the property and major systems (roof, HVAC, plumbing, electrical)</li>
              <li>Recent renovations, repairs, or improvements</li>
              <li>Environmental issues, code violations, or pending assessments</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4.2 Accuracy of Information
            </h3>
            <p className="text-gray-700 mb-4">
              You represent and warrant that all information you provide about your property is
              accurate, complete, and current to the best of your knowledge. You agree to update us
              promptly if any information changes or if you become aware of any inaccuracies. We
              rely on the accuracy of your information to make fair cash offers and complete
              transactions efficiently.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4.3 Consequences of False or Misleading Information
            </h3>
            <p className="text-gray-700 mb-6">
              Providing false or misleading information may result in the termination of any
              agreement, adjustment or withdrawal of cash offers, and may constitute fraud. If we
              discover that you provided false or misleading information after an offer is made or
              a transaction begins, we reserve the right to terminate the agreement and pursue
              appropriate legal remedies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Property Inspection</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to inspect the property before finalizing any purchase agreement.
              Property inspection allows us to verify property condition, assess repair needs, and
              ensure our cash offer accurately reflects the property's true value.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              5.1 Inspection Process
            </h3>
            <p className="text-gray-700 mb-4">
              Our property inspection typically includes a visual assessment of the property's
              condition, structural integrity, major systems (HVAC, plumbing, electrical), and
              overall property state. We may also review property records, permits, and other
              documentation. The inspection is typically completed within 1-3 days of offer
              acceptance and takes approximately 15-30 minutes for most properties.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              5.2 Offer Adjustments Based on Inspection
            </h3>
            <p className="text-gray-700 mb-4">
              Our initial cash offer may be subject to adjustment based on the actual condition of
              the property as determined during inspection. If the inspection reveals property
              conditions that differ significantly from the information provided, we may adjust our
              offer to reflect the actual condition. Common reasons for offer adjustments include
              undisclosed defects, significant repairs needed, structural issues, or property
              condition that differs substantially from initial evaluation.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              5.3 Acceptance or Rejection of Final Offer
            </h3>
            <p className="text-gray-700 mb-6">
              After inspection, we will provide you with a final cash offer that reflects the
              property's actual condition. You have the right to accept or reject this final offer.
              If you accept the final offer, we will proceed with closing. If you reject the final
              offer, there are no fees or penalties, and you are free to explore other options for
              selling your property.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Closing Process</h2>
            <p className="text-gray-700 mb-4">
              If you accept our cash offer, we will work with you to complete the closing process
              efficiently and professionally. Our streamlined closing process is designed to be
              faster and simpler than traditional real estate transactions.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6.1 Closing Process Steps
            </h3>
            <p className="text-gray-700 mb-4">
              The closing process typically includes the following steps:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Title search and verification to ensure clear ownership and identify any liens</li>
              <li>Property inspection (if not already completed) to verify condition</li>
              <li>Preparation of closing documents including purchase agreement and transfer documents</li>
              <li>Settlement and transfer of funds, typically via wire transfer or cashier's check</li>
              <li>Recording of property transfer with appropriate county authorities</li>
              <li>Transfer of keys and property possession</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6.2 Closing Timelines
            </h3>
            <p className="text-gray-700 mb-4">
              We typically close transactions within 7-21 days of offer acceptance, though timing
              can be customized to meet your needs. Fast closings (7-10 days) are available for
              urgent situations, while flexible closings (up to 60 days) can accommodate your
              moving timeline. You choose your closing date, and we work around your schedule to
              make the process as convenient as possible.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6.3 Factors Affecting Closing Timeline
            </h3>
            <p className="text-gray-700 mb-6">
              Closing timelines are estimates and may vary based on various factors including title
              issues, property condition, outstanding liens, probate requirements, and other
              circumstances beyond our control. We will communicate any delays promptly and work
              with you to resolve issues as quickly as possible.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. As-Is Purchase</h2>
            <p className="text-gray-700 mb-4">
              We purchase properties in "as-is" condition, which means we buy the property in its
              current state without requiring repairs, cleaning, or improvements. This is one of
              the key advantages of selling to a cash buyer - you don't have to invest time or
              money in repairs before selling.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              7.1 As-Is Condition Purchase
            </h3>
            <p className="text-gray-700 mb-4">
              When we purchase your property as-is, we accept it in its current condition without
              requiring you to make any repairs, renovations, cleaning, or improvements. Whether
              your property needs minor updates, major repairs, or has structural issues, we can
              make fair cash offers that account for the property's current state. This eliminates
              the need for you to invest thousands of dollars in repairs before selling.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              7.2 Material Defect Disclosure Requirements
            </h3>
            <p className="text-gray-700 mb-4">
              While we purchase properties as-is, you remain responsible for disclosing known
              material defects as required by law. Material defects are conditions that
              significantly affect the property's value or desirability, such as structural
              problems, foundation issues, water damage, mold, or code violations. Failure to
              disclose known material defects may result in legal liability and could constitute
              fraud.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              7.3 Benefits of As-Is Purchase
            </h3>
            <p className="text-gray-700 mb-6">
              The as-is purchase approach benefits sellers by eliminating the need for costly
              repairs, reducing time on market, and providing certainty in the sale process. You
              don't have to worry about buyer inspection contingencies, repair negotiations, or
              property condition issues delaying or derailing the sale. We handle all repairs and
              improvements after purchase, allowing you to move forward immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Fees and Costs</h2>
            <p className="text-gray-700 mb-4">
              We do not charge fees, commissions, or closing costs to sellers. Our commitment to
              transparency means the cash offer we provide is the amount you will receive at
              closing, subject to any adjustments agreed upon in writing.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              8.1 No Seller Fees or Commissions
            </h3>
            <p className="text-gray-700 mb-4">
              Unlike traditional real estate sales where sellers typically pay 6-10% in
              commissions and fees, we do not charge any fees, commissions, or closing costs to
              sellers. There are no hidden costs, surprise fees, or last-minute charges. The amount
              we quote is the amount you receive, providing complete transparency and eliminating
              uncertainty about your proceeds.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              8.2 Property Obligations and Liens
            </h3>
            <p className="text-gray-700 mb-4">
              However, you may be responsible for satisfying certain property obligations at
              closing, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Outstanding mortgages or liens on the property (which will be paid from proceeds)</li>
              <li>Property taxes and HOA fees (prorated to closing date)</li>
              <li>Any other obligations that must be satisfied at closing as required by law or contract</li>
              <li>Liens that need to be cleared to provide clear title</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              8.3 Closing Cost Coverage
            </h3>
            <p className="text-gray-700 mb-6">
              We cover standard closing costs including title insurance, escrow fees, recording
              fees, and document preparation fees. This means you don't pay these costs out of
              pocket - they are factored into our cash offer. You simply receive your agreed-upon
              amount at closing, minus any property obligations you choose to pay off from the
              proceeds.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Website Use</h2>
            <p className="text-gray-700 mb-4">
              By using our website, you agree to use it in accordance with these Terms of Service
              and applicable laws. Our website is provided for your use to learn about our
              services, request cash offers, and communicate with us about selling your property.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              9.1 Permitted Use of Website
            </h3>
            <p className="text-gray-700 mb-4">
              You may use our website to browse information about our services, request cash offers
              for your property, submit contact forms, read our blog and market insights, and
              communicate with us about selling your property. All use must be for lawful purposes
              and in accordance with these Terms of Service.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              9.2 Prohibited Activities
            </h3>
            <p className="text-gray-700 mb-4">When using our website, you agree not to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Use the website for any unlawful purpose or in violation of any laws</li>
              <li>Attempt to gain unauthorized access to any part of the website, server, or
              systems</li>
              <li>Transmit any viruses, malware, harmful code, or malicious software</li>
              <li>Interfere with or disrupt the website's operation or security features</li>
              <li>Copy, modify, reproduce, or distribute any content without our express written
              permission</li>
              <li>Use automated systems to access or scrape website content</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              9.3 Consequences of Prohibited Use
            </h3>
            <p className="text-gray-700 mb-6">
              Violation of these website use terms may result in immediate termination of your
              access to our website, legal action, and pursuit of appropriate remedies. We reserve
              the right to monitor website use and take action against any prohibited activities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              10. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4">
              All content on our website, including text, graphics, logos, images, and software, is
              the property of Speedy Cash Home Offers or its content suppliers and is protected by
              copyright, trademark, and other intellectual property laws. This includes all
              materials created by Dr. Janet Duffy and our team, including articles, blog posts,
              market insights, and educational content.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              10.1 Ownership of Content
            </h3>
            <p className="text-gray-700 mb-4">
              All content on our website, including text, graphics, logos, images, video,
              audio, software, and other materials, is the exclusive property of Speedy Cash Home
              Offers or its content suppliers. This content is protected by United States and
              international copyright, trademark, and other intellectual property laws. You may not
              reproduce, distribute, modify, create derivative works, publicly display, publicly
              perform, republish, download, store, or transmit any of our content without our
              express written permission.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              10.2 Permitted Use of Content
            </h3>
            <p className="text-gray-700 mb-4">
              You may view, download, and print content from our website for personal,
              non-commercial use only. This means you can access and read our content for your
              personal information and education, but you may not use our content for commercial
              purposes, distribute it to others, or incorporate it into other works without our
              express written permission. Any unauthorized use of our content may violate
              copyright, trademark, and other laws.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              10.3 Trademarks and Service Marks
            </h3>
            <p className="text-gray-700 mb-6">
              Speedy Cash Home Offers, "Homes by Dr. Jan Duffy," our logos, and other trademarks
              and service marks displayed on our website are the exclusive property of Speedy Cash
              Home Offers. You may not use our trademarks, service marks, or logos without our
              express written permission. Unauthorized use of our trademarks may result in legal
              action and pursuit of appropriate remedies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              11. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by applicable law, Speedy Cash Home Offers limits
              its liability for damages arising from your use of our services. This limitation is
              designed to protect both parties while ensuring fair compensation for actual damages
              where appropriate.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              11.1 Limitations on Damages
            </h3>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, Speedy Cash Home Offers shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages, or any loss
              of profits or revenues, whether incurred directly or indirectly, or any loss of data,
              use, goodwill, or other intangible losses resulting from your use of our services.
              This limitation applies regardless of the theory of liability (contract, tort,
              negligence, or otherwise) and whether or not we were advised of the possibility of
              such damages.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              11.2 Maximum Liability
            </h3>
            <p className="text-gray-700 mb-4">
              Our total liability for any claims arising from these Terms of Service or our
              services shall not exceed the amount of the cash offer we provided for your property,
              or if no offer was made or accepted, $1,000. This limitation applies regardless of
              the number of claims or the theory of liability.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              11.3 Exceptions to Limitation
            </h3>
            <p className="text-gray-700 mb-6">
              Some jurisdictions do not allow the exclusion or limitation of certain damages, so
              some of the above limitations may not apply to you. In such jurisdictions, our
              liability is limited to the maximum extent permitted by applicable law. Nothing in
              these Terms of Service limits our liability for gross negligence, intentional
              misconduct, or fraud.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">12. Indemnification</h2>
            <p className="text-gray-700 mb-6">
              You agree to indemnify and hold harmless Speedy Cash Home Offers, its officers,
              directors, employees, and agents from any claims, damages, losses, liabilities, and
              expenses (including legal fees) arising from your use of our services or violation of
              these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">13. Dispute Resolution</h2>
            <p className="text-gray-700 mb-4">
              Any disputes arising from these Terms of Service or our services shall be resolved
              through binding arbitration in accordance with the rules of the American Arbitration
              Association, conducted in Las Vegas, Nevada. This dispute resolution process is
              designed to be faster, more cost-effective, and less formal than traditional
              litigation while still providing fair resolution of disputes.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              13.1 Binding Arbitration Agreement
            </h3>
            <p className="text-gray-700 mb-4">
              By agreeing to these Terms of Service, you agree that any disputes, claims, or
              controversies arising out of or relating to these Terms of Service or our services
              shall be resolved through binding arbitration rather than in court. This includes
              disputes about the validity, enforceability, or scope of this arbitration agreement.
              Arbitration is conducted in accordance with the rules of the American Arbitration
              Association and takes place in Las Vegas, Nevada.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              13.2 Waiver of Jury Trial and Class Action
            </h3>
            <p className="text-gray-700 mb-4">
              By agreeing to binding arbitration, you waive your right to a jury trial and agree
              not to participate in class action lawsuits or class-wide arbitrations. Instead,
              disputes will be resolved on an individual basis through binding arbitration. This
              waiver applies to all disputes, whether they arise from contract, tort, statute, or
              other legal theories.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              13.3 Arbitration Process
            </h3>
            <p className="text-gray-700 mb-6">
              Arbitration is conducted by a neutral arbitrator selected in accordance with American
              Arbitration Association rules. The arbitrator's decision is final and binding on
              both parties, and may be entered as a judgment in any court of competent
              jurisdiction. Each party is responsible for their own legal fees and costs, unless
              the arbitrator determines otherwise in accordance with applicable law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">14. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws
              of the State of Nevada, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">15. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms of Service at any time. We will notify you
              of any material changes by posting the new Terms of Service on this page and updating
              the "Last Updated" date. Your continued use of our services after such modifications
              constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">16. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
