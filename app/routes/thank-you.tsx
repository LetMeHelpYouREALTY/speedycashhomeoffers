import Breadcrumbs from "~/components/Breadcrumbs";
import RelatedPages from "~/components/RelatedPages";
import type { Route } from "./+types/thank-you";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Thank You - Speedy Cash Home Offers" },
    {
      name: "description",
      content:
        "Thank you for contacting Speedy Cash Home Offers. We'll get back to you within 24 hours with your free cash offer!",
    },
    { name: "robots", content: "noindex, nofollow" },
  ];
};

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Thank You!</h1>
          <p className="text-xl md:text-2xl mb-8">Your message has been received successfully.</p>
        </div>
      </section>

      {/* Thank You Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What Happens Next?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for reaching out to Speedy Cash Home Offers! Dr. Janet Duffy and our team
              are excited to help you with your home selling needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">We'll Review Your Information</h3>
              <p className="text-gray-600">
                Our team will carefully review your property details and requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Free Cash Offer</h3>
              <p className="text-gray-600">
                We'll contact you within 24 hours with your personalized cash offer.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Close in Days, Not Months</h3>
              <p className="text-gray-600">
                If you accept our offer, we can close in as little as 7 days!
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Need Immediate Assistance?</h3>
            <p className="text-lg text-gray-600 mb-6">
              If you have urgent questions or need to speak with someone right away, don't hesitate
              to call us directly.
            </p>
            <a
              href="tel:(702) 500-1981"
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call (702) 500-1981
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Next Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Detailed Next Steps in Our Process
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Step 1: Initial Review and Property Evaluation (Within 24 Hours)
              </h3>
              <p className="text-gray-600 mb-4">
                Our team will carefully review the property information you provided, including
                address, property condition, situation details, and any special circumstances. We'll
                conduct an initial market analysis using our deep knowledge of Las Vegas and
                Southern California real estate markets to understand your property's value in
                today's market.
              </p>
              <p className="text-gray-600">
                During this review, Dr. Janet Duffy or one of our team members will assess your
                property based on location, condition, market trends, and comparable sales in your
                neighborhood. This initial evaluation helps us prepare for the property walkthrough
                and ensures we can provide you with accurate information during our conversation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Step 2: Initial Contact and Consultation (Within 24 Hours)
              </h3>
              <p className="text-gray-600 mb-4">
                We'll contact you within 24 hours via phone or email (whichever you prefer) to
                discuss your property, situation, and selling timeline. During this conversation,
                we'll answer any questions you have about our process, explain how we determine cash
                offers, and discuss your specific needs and timeline.
              </p>
              <p className="text-gray-600 mb-4">
                This is also an opportunity for you to ask questions about our services, process,
                timeline, or any concerns you may have. We believe in transparent communication and
                want to ensure you feel comfortable and informed throughout the process. Don't
                hesitate to ask about anything - we're here to help and provide the information you
                need to make an informed decision.
              </p>
              <p className="text-gray-600">
                If your situation is urgent (such as foreclosure prevention, relocation deadlines, or
                other time-sensitive circumstances), please let us know during this initial
                conversation so we can prioritize your request and expedite our evaluation and offer
                process.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Step 3: Property Walkthrough and Comprehensive Evaluation (Within 2-3 Days)
              </h3>
              <p className="text-gray-600 mb-4">
                We'll schedule a convenient time for a property walkthrough, which typically takes
                15-30 minutes. During this walkthrough, we'll evaluate the property's condition,
                assess repair needs, verify property details, and discuss your situation further.
                This walkthrough helps us make fair cash offers that accurately reflect your
                property's true market value.
              </p>
              <p className="text-gray-600 mb-4">
                Our property walkthrough is designed to be non-invasive and respectful of your time
                and privacy. We'll assess the property's condition, major systems (HVAC, plumbing,
                electrical), structural integrity, and overall state. You don't need to prepare
                anything - we evaluate properties as-is in their current condition.
              </p>
              <p className="text-gray-600">
                After the walkthrough, we'll conduct a comprehensive market analysis using recent
                comparable sales, current market trends, location factors, and property condition
                assessment. This analysis ensures our cash offer reflects true market value while
                accounting for the convenience, speed, and certainty we're providing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Step 4: Cash Offer Presentation (Within 24 Hours of Walkthrough)
              </h3>
              <p className="text-gray-600 mb-4">
                Within 24 hours of the property walkthrough, you'll receive a written cash offer
                valid for 7 days. This gives you time to review the offer, compare it to other
                options, ask questions, and make an informed decision without feeling pressured.
              </p>
              <p className="text-gray-600 mb-4">
                Our offers are straightforward and transparent - the amount we quote is the amount
                you'll receive at closing, minus any existing liens or mortgages you choose to pay
                off from the proceeds. There are no hidden fees, commissions, or surprise costs. We'll
                explain how we arrived at our offer, including market analysis, property condition
                factors, and any adjustments we made.
              </p>
              <p className="text-gray-600">
                You're under no obligation to accept our offer. If you decide not to proceed, there
                are no fees or penalties. We want you to make the decision that's best for your
                situation, and we're happy to answer any questions to help you make an informed
                choice.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Step 5: Closing and Payment (7-21 Days After Offer Acceptance)
              </h3>
              <p className="text-gray-600 mb-4">
                If you accept our cash offer, we'll work with you to complete the closing process
                efficiently and professionally. You choose your closing date, and we'll work around
                your schedule to make the process as convenient as possible. Fast closings (7-10
                days) are available for urgent situations, while flexible closings (up to 60 days)
                can accommodate your moving timeline.
              </p>
              <p className="text-gray-600">
                At closing, you'll receive your cash payment via wire transfer or cashier's check.
                The entire closing typically takes 30-60 minutes, and you'll leave with your payment
                in hand. We handle all closing costs, including title insurance, escrow fees, and
                document preparation, so you don't pay anything out of pocket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Why Choose Speedy Cash Home Offers?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Here's what sets us apart from other cash home buyers and makes us Las Vegas's most
              trusted cash home buyers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                No Fees, No Commissions, No Hidden Costs
              </h3>
              <p className="text-gray-600 mb-4">
                Unlike traditional real estate sales where sellers typically pay 6-10% in
                commissions and fees, we don't charge any fees, commissions, or closing costs. The
                cash offer we provide is the amount you'll receive at closing, minus any existing
                liens or mortgages you choose to pay off. This transparency eliminates uncertainty
                and ensures you know exactly what you'll receive.
              </p>
              <p className="text-gray-600">
                We cover all standard closing costs including title insurance, escrow fees,
                recording fees, and document preparation fees. You simply receive your agreed-upon
                amount at closing - no surprises, no last-minute fees, and no stress about
                unexpected expenses eating into your proceeds.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                Fast Closing in 7-21 Days
              </h3>
              <p className="text-gray-600 mb-4">
                Traditional home sales can take 60-90 days or longer, especially if buyers need
                financing approval. When you sell to Speedy Cash Home Offers, you can close in as
                little as 7 days if needed, or choose a flexible closing date up to 60 days. We
                have our own funding ready, so there's no waiting for bank approvals or mortgage
                processing delays.
              </p>
              <p className="text-gray-600">
                This speed is crucial if you're facing foreclosure, need to relocate quickly for a
                job, going through a divorce, or dealing with any time-sensitive situation. You
                choose your closing date, and we'll work around your schedule to make the process as
                convenient as possible.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                Buy Houses in Any Condition - As-Is Purchase
              </h3>
              <p className="text-gray-600 mb-4">
                Whether your home needs major repairs, has structural issues, or simply needs
                updating, we buy houses in any condition. You don't need to spend thousands of
                dollars on renovations, repairs, or staging to make your home market-ready. We
                purchase properties as-is, which means you can sell immediately without investing
                time or money into improvements.
              </p>
              <p className="text-gray-600">
                This is especially valuable if you're dealing with inherited properties, foreclosure
                situations, distressed homes, or properties that have been damaged. We've seen it all
                and can make fair offers on properties that traditional buyers might walk away from.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">
                Local Market Expertise Since 2008
              </h3>
              <p className="text-gray-600 mb-4">
                Dr. Janet Duffy has been licensed since 2008 · 35 years in Las Vegas, specifically in the
                Las Vegas and Southern California markets. This deep local knowledge means we
                understand neighborhood trends, property values, market cycles, and what makes a
                property valuable in different areas.
              </p>
              <p className="text-gray-600">
                Our specialized focus on North Las Vegas and East Las Vegas neighborhoods (zip codes
                89031, 89032, 89110, 89142) gives us specialized market knowledge that helps us make
                more accurate valuations and fairer offers than general real estate investors. This
                expertise directly benefits you through offers that reflect true market value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions About Our Process
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                How long will it take to receive my cash offer?
              </h3>
              <p className="text-gray-600">
                We typically contact you within 24 hours of receiving your inquiry. After a
                property walkthrough (scheduled within 2-3 days), you'll receive a written cash
                offer within 24 hours. The entire process from initial contact to cash offer
                presentation typically takes 2-4 days, depending on scheduling availability and
                property location.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Is there any obligation to accept your cash offer?
              </h3>
              <p className="text-gray-600">
                No, there is absolutely no obligation to accept our cash offer. Submitting
                information to us, receiving a property walkthrough, or receiving a cash offer does
                not create any obligation on your part. You're free to accept or reject our offer
                without any fees, penalties, or pressure. We want you to make the decision that's
                best for your situation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                What if I need to close very quickly?
              </h3>
              <p className="text-gray-600">
                We can accommodate fast closings in as little as 7 days for urgent situations like
                foreclosure prevention, relocation deadlines, or other time-sensitive circumstances.
                If you need to close quickly, please let us know during our initial conversation so
                we can expedite our evaluation and closing process. We have our own funding ready,
                so there's no waiting for bank approvals or financing delays.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Can I still explore other selling options while waiting for your offer?
              </h3>
              <p className="text-gray-600">
                Absolutely! We encourage you to explore all your selling options and compare our
                cash offer to other alternatives. This helps you make an informed decision that's
                best for your situation. Our offer is valid for 7 days, giving you time to
                compare, ask questions, and make the right choice for you. We believe in
                transparency and want you to feel confident in your decision.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                What information should I prepare for the property walkthrough?
              </h3>
              <p className="text-gray-600">
                You don't need to prepare anything special for the property walkthrough. We
                evaluate properties as-is in their current condition. However, having information
                about any known defects, repairs needed, or special circumstances can be helpful.
                If you have property records, repair estimates, or other documentation, feel free
                to share it, but it's not required. We'll assess the property during our
                walkthrough and can work with whatever information you have available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Return Home CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Explore More About Our Services</h2>
          <p className="text-xl mb-8">
            While you wait for our response, learn more about how we can help you sell your house
            fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Back to Homepage
            </a>
            <a
              href="/process"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Learn Our Process
            </a>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="contact" />
    </div>
  );
}
