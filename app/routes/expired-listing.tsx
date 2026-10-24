import Breadcrumbs from "~/components/Breadcrumbs";
import RelatedPages from "~/components/RelatedPages";
import type { Route } from "./+types/expired-listing";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Expired Listing? Cash Offer+ Program | Speedy Cash Home Offers" },
    {
      name: "description",
      content:
        "Has your listing expired? Get a Cash Offer+ with instant cash offer or guaranteed backup offer. No upfront costs. Call Dr. Janet Duffy at (702) 500-1981 today!",
    },
    {
      name: "keywords",
      content:
        "expired listing, Cash Offer Plus, backup offer, guaranteed offer, instant cash offer, expired MLS listing, listing expired, sell house fast Las Vegas",
    },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.speedycashhomeoffers.com/expired-listing",
    },
    {
      property: "og:title",
      content: "Expired Listing? Cash Offer+ Program | Speedy Cash Home Offers",
    },
    {
      property: "og:description",
      content:
        "Has your listing expired? Get a Cash Offer+ with instant cash offer or guaranteed backup offer. No upfront costs.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/expired-listing" },
    {
      property: "og:image",
      content: "https://www.speedycashhomeoffers.com/images/og-image.jpg",
    },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Expired Listing? Cash Offer+ Program",
    },
    {
      name: "twitter:description",
      content: "Get a Cash Offer+ with instant cash offer or guaranteed backup offer. No upfront costs.",
    },
    {
      name: "twitter:image",
      content: "https://www.speedycashhomeoffers.com/images/twitter-image.jpg",
    },
  ];
};

export default function ExpiredListing() {
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
            name: "Expired Listing? Cash Offer+ Program",
            description:
              "Has your listing expired? Get a Cash Offer+ with instant cash offer or guaranteed backup offer. No upfront costs.",
            url: "https://www.speedycashhomeoffers.com/expired-listing",
            datePublished: "2025-01-17",
            dateModified: "2025-01-17",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.speedycashhomeoffers.com/#website",
            },
            about: {
              "@type": "Service",
              name: "Cash Offer+ Program for Expired Listings",
              description:
                "Instant cash offer or guaranteed backup offer for expired listings. No upfront costs.",
              provider: {
                "@type": "LocalBusiness",
                name: "Speedy Cash Home Offers | Homes by Dr. Jan Duffy",
                telephone: "(702) 500-1981",
                email: "DrDuffy@SpeedyCashHomeOffers.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "2775 Ariel Ocean St",
                  addressLocality: "Las Vegas",
                  addressRegion: "NV",
                  postalCode: "89156",
                  addressCountry: "US",
                },
              },
              serviceType: "Cash Home Buying",
              areaServed: [
                {
                  "@type": "City",
                  name: "Las Vegas",
                  containedInPlace: {
                    "@type": "State",
                    name: "Nevada",
                  },
                },
                {
                  "@type": "State",
                  name: "California",
                },
              ],
            },
          }),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              EXPIRED LISTING? LET'S WORK TOGETHER!
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Using the Cash Offer+ program, I offer my clients a unique approach to getting their
              homes sold despite market conditions. Unlock your equity in days, avoid carrying costs,
              and benefit from full market value while avoiding showings and renovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Get Your Cash Offer+
              </a>
              <a
                href="tel:(702) 500-1981"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors text-center"
                aria-label="Call Speedy Cash Home Offers at (702) 500-1981"
              >
                Call (702) 500-1981
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cash Offer+ Program Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Introducing Cash Offer+
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              With no upfront costs, call today to see how this may be a right fit for you!
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Close Option</h3>
                <p className="text-gray-700">10-15 day closing</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Close Option</h3>
                <p className="text-gray-700">
                  6-month closing with 15-day acceleration notice after appraisal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is the Cash Offer+ Program?
            </h2>
            <p className="text-gray-700 mb-6">
              The Cash Offer+ program is a unique two-transaction approach to getting your home sold,
              designed specifically for homeowners whose listings have expired or who are struggling
              to sell their properties in today's market conditions. Unlike traditional real estate
              transactions, Cash Offer+ allows you to unlock your equity immediately while your
              property is still listed on-market, giving you the best of both worlds—immediate access
              to cash and the potential for full market value.
            </p>
            <p className="text-gray-700 mb-6">
              This innovative program is part of Dr. Janet Duffy's commitment to finding creative
              solutions for homeowners in Las Vegas and beyond. Whether you've experienced a listing
              that didn't sell, faced challenges with buyer financing falling through, or simply
              need a more reliable path to closing, Cash Offer+ provides the flexibility, security,
              and financial benefits you need.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              How the Cash Offer+ Program Works
            </h2>
            <p className="text-gray-700 mb-6">
              The Cash Offer+ program takes place in two transactions, providing you with immediate
              equity access while maximizing your property's sale value:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Initial Transaction: Immediate Equity Unlocking
            </h3>
            <p className="text-gray-700 mb-4">
              Dr. Jan Duffy Homebuyer purchases your property at the full appraised value and
              advances up to 70% of that amount upfront. This immediate cash injection enables you
              to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>Pay off any existing mortgages immediately</li>
              <li>Use remaining funds towards the down payment on your future home</li>
              <li>Cover moving expenses and transition costs</li>
              <li>Eliminate carrying costs like mortgage payments, property taxes, and insurance</li>
              <li>Become a non-contingent buyer with immediate purchasing power</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Your property remains listed on-market during this process, allowing you to benefit
              from full market value while having immediate access to your equity. You avoid the
              stress of double moves, double mortgages, and the uncertainty of market timing.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Resale Transaction: Maximizing Your Home's Value
            </h3>
            <p className="text-gray-700 mb-4">
              Once you've moved out, Dr. Jan Duffy Homebuyer prepares your home for sale with expert
              designers and our proprietary vendor platform (optional). The property is then resold
              for top dollar, and you keep all of the upside—every dollar above the initial purchase
              price goes directly to you.
            </p>
            <p className="text-gray-700 mb-4">
              This two-transaction structure means you get immediate financial relief while
              potentially realizing even greater value when the property ultimately sells. It's a
              win-win approach that addresses both your immediate needs and your long-term financial
              goals.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Program Benefits: Why Cash Offer+ Works for Expired Listings
            </h2>
            <p className="text-gray-700 mb-6">
              The Cash Offer+ program is specifically designed to address the challenges homeowners
              face when their listings expire. Here are the key benefits that make this program
              unique and powerful:
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Immediate Financial Benefits
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Unlock your equity in days:</strong> Access up to 70% of your property's
                  appraised value immediately, not months down the road
                </li>
                <li>
                  <strong>No more carrying costs:</strong> You're no longer responsible for paying
                  mortgage, property taxes, and insurance once the initial transaction closes
                </li>
                <li>
                  <strong>Become a non-contingent buyer:</strong> With immediate equity access, you
                  can make offers on your next home without the contingency of selling your current
                  property first
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Lifestyle and Convenience Benefits
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Avoid double moves or mortgages:</strong> Move into your new home first,
                  then let us handle the resale of your previous property
                </li>
                <li>
                  <strong>No showings or renovations:</strong> If you elect to move out before
                  preparation begins, you avoid living through showings and any renovation work
                </li>
                <li>
                  <strong>Sell now with convenience:</strong> Avoid further market uncertainty by
                  locking in your equity while your property continues to be marketed for full value
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Financial Maximization Benefits
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Property listed on-market:</strong> Your property remains on the MLS,
                  allowing you to benefit from full market value exposure
                </li>
                <li>
                  <strong>Keep all the upside:</strong> When the property resells, you keep 100% of
                  any amount above the initial purchase price
                </li>
                <li>
                  <strong>No upfront costs:</strong> The program requires nothing from you upfront—no
                  staging, repairs, or marketing expenses
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Two Closing Options to Fit Your Timeline
            </h2>
            <p className="text-gray-700 mb-6">
              Cash Offer+ recognizes that every homeowner's situation is unique. That's why we offer
              two flexible closing options:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-orange-500 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quick Close Option</h3>
                <p className="text-gray-700 mb-4">
                  <strong>10-15 day closing</strong>
                </p>
                <p className="text-gray-700">
                  Perfect if you need to move quickly due to relocation, job transfer, or other
                  time-sensitive situations. Get immediate access to your equity and close on your
                  timeline.
                </p>
              </div>
              <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Flexible Close Option</h3>
                <p className="text-gray-700 mb-4">
                  <strong>6-month closing with acceleration option</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Close within 6 months, giving you flexibility to move at your own pace. After
                  appraisal and reports are completed, you can accelerate closing with just 15 days'
                  notice when you're ready.
                </p>
                <p className="text-gray-700 text-sm italic">
                  This option is ideal if you need more time to find your next home or coordinate
                  your move.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              For Real Estate Agents: Full Commission Earned
            </h2>
            <p className="text-gray-700 mb-6">
              If you're a real estate agent working with a client who has an expired listing, the
              Cash Offer+ program offers significant advantages:
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  <strong>Agent earns a full commission:</strong> You receive your complete
                  commission on both transactions
                </li>
                <li>
                  <strong>Up to 1% advanced with no fees:</strong> Get early access to a portion of
                  your commission to help cover upfront costs or expenses
                </li>
                <li>
                  <strong>Win-win for clients and agents:</strong> Your client gets immediate equity
                  access while maximizing their property value, and you earn full commission while
                  providing exceptional service
                </li>
              </ul>
            </div>
            <p className="text-gray-700 mb-6">
              This program allows you to provide your clients with an innovative solution that
              addresses expired listing challenges while ensuring you're fairly compensated for your
              expertise and service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Is Cash Offer+ Right for You?
            </h2>
            <p className="text-gray-700 mb-6">
              Cash Offer+ is an excellent option if you:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>Have had a listing expire recently or multiple times</li>
              <li>Need immediate access to your equity for a down payment on your next home</li>
              <li>Want to avoid carrying costs like mortgage, taxes, and insurance</li>
              <li>Desire flexibility in your move timeline (quick close or flexible 6-month option)</li>
              <li>Want to become a non-contingent buyer in today's competitive market</li>
              <li>Prefer to avoid living through showings and renovations</li>
              <li>Want to benefit from full market value while having immediate cash access</li>
              <li>Need to avoid double moves or managing two mortgages simultaneously</li>
            </ul>
            <p className="text-gray-700 mb-6">
              The best way to determine if Cash Offer+ is the right fit for you is to have a
              conversation with Dr. Janet Duffy. In real estate since 1983, Dr. Duffy understands the challenges homeowners face and can help you
              understand how this innovative program can work for your specific situation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              How to Get Started with Cash Offer+
            </h2>
            <p className="text-gray-700 mb-6">
              Getting started with Cash Offer+ is straightforward. Here's what you can expect:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Step 1: Contact Us for a Consultation
            </h3>
            <p className="text-gray-700 mb-4">
              Call Dr. Janet Duffy at{" "}
              <a
                href="tel:(702) 500-1981"
                className="text-orange-600 hover:text-orange-800 font-semibold underline"
              >
                (702) 500-1981
              </a>{" "}
              or fill out our online contact form. We'll discuss your situation, your expired
              listing experience, and your goals. We can schedule a call or Zoom meeting to dive
              deeper into the program details—either for yourself or if you're an agent working with
              a client.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Step 2: Property Appraisal and Evaluation
            </h3>
            <p className="text-gray-700 mb-4">
              We'll conduct a thorough appraisal and evaluation of your property, considering its
              condition, location, and current market value. This comprehensive assessment ensures
              we provide you with a fair initial purchase price at full appraised value, which
              determines the 70% advance amount you'll receive.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Step 3: Choose Your Closing Timeline
            </h3>
            <p className="text-gray-700 mb-4">
              Based on your needs and timeline, you'll choose between the Quick Close option (10-15
              days) or the Flexible Close option (6 months with acceleration capability). We'll help
              you understand which option works best for your situation.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Step 4: Initial Transaction and Equity Access
            </h3>
            <p className="text-gray-700 mb-4">
              Dr. Jan Duffy Homebuyer purchases your property at full appraised value, and you
              receive up to 70% of that amount upfront. This immediate cash enables you to pay off
              existing mortgages, fund your next home purchase, and cover moving expenses. Your
              property remains listed on-market, and you're no longer responsible for carrying
              costs.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Step 5: Move Out and Property Preparation (Optional)
            </h3>
            <p className="text-gray-700 mb-4">
              Once you've moved out, Dr. Jan Duffy Homebuyer can prepare your home for sale using
              expert designers and our proprietary vendor platform. This step is optional—if you
              prefer, we can handle it after you've already moved into your new home, eliminating
              the disruption of living through renovations.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Step 6: Resale and Upside Capture
            </h3>
            <p className="text-gray-700 mb-6">
              The property is resold for top dollar on the open market, and you keep 100% of any
              amount above the initial purchase price. This two-transaction structure ensures you
              maximize your property's value while having had immediate access to your equity when
              you needed it most.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Don't Let an Expired Listing Hold You Back
            </h2>
            <p className="text-gray-700 mb-6">
              An expired listing doesn't mean your home isn't valuable or that selling is
              impossible—it often means you need a different approach. The Cash Offer+ program
              provides that innovative solution, combining immediate equity access with the
              potential for full market value.
            </p>
            <p className="text-gray-700 mb-6">
              With no upfront costs, flexible closing options, and the ability to unlock your equity
              in days rather than months, Cash Offer+ gives you control over your financial future
              and your moving timeline. Whether you need to close in 10-15 days or prefer a
              6-month flexible timeline, this program adapts to your needs.
            </p>
            <p className="text-gray-700 mb-8">
              If you have any questions or would like to schedule a call or Zoom meeting to dive
              deeper into the Cash Offer+ program—either for yourself or if you're a real estate
              agent working with a client—please don't hesitate to reach out. Call Dr. Janet Duffy
              today at{" "}
              <a
                href="tel:(702) 500-1981"
                className="text-orange-600 hover:text-orange-800 font-semibold underline"
              >
                (702) 500-1981
              </a>{" "}
              to see how Cash Offer+ may be the right fit for you. Let's work together to unlock
              your equity, eliminate carrying costs, and help you move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Your Cash Offer+?</h2>
          <p className="text-xl mb-8">
            With no upfront costs, call today to see how Cash Offer+ may be the right fit for you.
            Whether you want an instant cash offer or need the security of a guaranteed backup
            offer, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Get Your Cash Offer+
            </a>
            <a
              href="tel:(702) 500-1981"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors text-center"
              aria-label="Call Speedy Cash Home Offers at (702) 500-1981"
            >
              Call (702) 500-1981
            </a>
          </div>
        </div>
      </section>

      <RelatedPages currentPage="expired-listing" />
    </div>
  );
}
