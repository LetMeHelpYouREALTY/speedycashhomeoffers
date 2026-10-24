import Breadcrumbs from "~/components/Breadcrumbs";
import RelatedPages from "~/components/RelatedPages";
import type { Route } from "./+types/about";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "About Dr. Janet Duffy | Speedy Cash Home Offers" },
    {
      name: "description",
      content:
        "Meet Dr. Janet Duffy, Las Vegas's most trusted real estate professional. In real estate since 1983, helping homeowners sell fast and get fair cash offers.",
    },
    {
      name: "keywords",
      content:
        "Dr Janet Duffy, Las Vegas real estate professional, cash home buyers Las Vegas, Ph.D. in Research, licensed real estate broker, Speedy Cash Home Offers",
    },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: "https://www.speedycashhomeoffers.com/about" },
    { property: "og:title", content: "About Dr. Janet Duffy | Speedy Cash Home Offers" },
    {
      property: "og:description",
      content:
        "Meet Dr. Janet Duffy, Las Vegas's most trusted real estate professional. In real estate since 1983, helping homeowners sell fast and get fair cash offers.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/about" },
    {
      property: "og:image",
      content: "https://www.speedycashhomeoffers.com/images/dr-janet-duffy-og.jpg",
    },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "About Dr. Janet Duffy | Speedy Cash Home Offers" },
    {
      name: "twitter:description",
      content:
        "Meet Dr. Janet Duffy, Las Vegas's most trusted real estate professional. In real estate since 1983, helping homeowners sell fast.",
    },
    {
      name: "twitter:image",
      content: "https://www.speedycashhomeoffers.com/images/dr-janet-duffy-twitter.jpg",
    },
  ];
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />
      {/* WebPage Schema with Content Freshness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About Dr. Janet Duffy | Speedy Cash Home Offers",
            description:
              "Learn about Dr. Janet Duffy, Las Vegas's most trusted real estate professional in real estate since 1983. Ph.D. in Research, licensed broker.",
            url: "https://www.speedycashhomeoffers.com/about",
            datePublished: "2024-01-15",
            dateModified: "2025-01-17",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.speedycashhomeoffers.com/#website",
            },
            about: {
              "@type": "Person",
              "@id": "https://www.speedycashhomeoffers.com/#founder",
              name: "Dr. Janet Duffy",
            },
          }),
        }}
      />
      {/* Person Schema for Dr. Janet Duffy */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://www.speedycashhomeoffers.com/#founder",
            name: "Dr. Janet Duffy",
            alternateName: "Dr. Jan Duffy",
            jobTitle: "Founder & CEO",
            worksFor: {
              "@type": "Organization",
              "@id": "https://www.speedycashhomeoffers.com/#organization",
              name: "Speedy Cash Home Offers | Homes by Dr. Jan Duffy",
            },
            url: "https://www.speedycashhomeoffers.com/about",
            description:
              "Las Vegas's most trusted real estate professional in real estate since 1983. Ph.D. in Research, licensed real estate broker, helping homeowners sell properties quickly and hassle-free.",
            email: "DrDuffy@SpeedyCashHomeOffers.com",
            telephone: "(702) 500-1981",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2775 Ariel Ocean St",
              addressLocality: "Las Vegas",
              addressRegion: "NV",
              postalCode: "89156",
              addressCountry: "US",
            },
            knowsAbout: [
              "Real Estate Economics",
              "Cash Home Buying",
              "Las Vegas Real Estate Market",
              "Southern California Real Estate Market",
              "Distressed Property Sales",
              "Foreclosure Prevention",
              "Property Valuation",
              "Real Estate Investment",
            ],
            award: "A+ Better Business Bureau Rating",
            memberOf: ["Las Vegas Chamber of Commerce", "Better Business Bureau"],
            sameAs: [
              "https://www.facebook.com/speedycashhomeoffers",
              "https://www.linkedin.com/company/speedycashhomeoffers",
            ],
          }),
        }}
      />
      {/* Organization Schema with AggregateRating for Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.speedycashhomeoffers.com/#organization",
            name: "Speedy Cash Home Offers | Homes by Dr. Jan Duffy",
            url: "https://www.speedycashhomeoffers.com",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "500",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />
      {/* AboutPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Dr. Janet Duffy",
            description:
              "Learn about Dr. Janet Duffy, Las Vegas's most trusted real estate professional with In real estate since 1983, helping homeowners sell properties fast for cash.",
            url: "https://www.speedycashhomeoffers.com/about",
            mainEntity: {
              "@type": "Person",
              "@id": "https://www.speedycashhomeoffers.com/#founder",
              name: "Dr. Janet Duffy",
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://www.speedycashhomeoffers.com/#organization",
              name: "Speedy Cash Home Offers | Homes by Dr. Jan Duffy",
            },
          }),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Dr. Janet Duffy</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Las Vegas's Most Trusted Real Estate Professional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Get Free Quote
              </a>
              <a
                href="tel:(702) 500-1981"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors text-center"
                aria-label="Call Dr. Janet Duffy at (702) 500-1981"
              >
                Call (702) 500-1981
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">4.9</div>
              <p className="text-gray-600">Star Rating</p>
              <p className="text-sm text-gray-500">
                From 500+ happy reviews on BBB, Google, and Yelp
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">Since 1983</div>
              <p className="text-gray-600">In Real Estate</p>
              <p className="text-sm text-gray-500">We have helped 500+ home sellers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">$20K</div>
              <p className="text-gray-600">Cash Advance</p>
              <p className="text-sm text-gray-500">
                Receive your cash upfront and close confidently
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Duffy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Your Trusted Real Estate Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Dr. Janet Duffy, a Top 1% Las Vegas REALTOR® in real estate since 1983, helps Las Vegas homeowners sell their properties quickly and hassle-free. With a Ph.D. in Research and
                extensive experience in the Las Vegas market, Dr. Duffy understands the unique
                challenges homeowners face when selling their properties.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're dealing with inherited property, facing foreclosure, going through a
                divorce, or simply need to{" "}
                <a href="/sellers" className="text-indigo-600 hover:text-indigo-800 underline">
                  sell quickly
                </a>
                , Dr. Duffy provides honest, transparent service with fair cash offers and fast
                closings. Learn more about{" "}
                <a href="/process" className="text-indigo-600 hover:text-indigo-800 underline">
                  our simple process
                </a>
                .
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Licensed Real Estate Broker</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Ph.D. in Research</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">A+ Better Business Bureau Rating</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Member of Las Vegas Chamber of Commerce</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-indigo-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-indigo-600">JD</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Dr. Janet Duffy</h3>
                <p className="text-gray-600 mb-4">Founder & CEO</p>
                <p className="text-sm text-gray-500 mb-6">
                  "My mission is to help Las Vegas homeowners sell their properties quickly, fairly,
                  and without the stress of traditional real estate transactions."
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Properties Sold:</span>
                    <span className="font-semibold">1,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Close Time:</span>
                    <span className="font-semibold">7 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Client Satisfaction:</span>
                    <span className="font-semibold">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-semibold">MN</span>
                </div>
                <div>
                  <h4 className="font-semibold">Melanie Nolan</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "One of the best companies to get the job done. Dr. Duffy made selling our inherited
                home so easy and stress-free."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-semibold">SS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sherman Simon</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "I found the company is true to their words regarding helping you with your
                property. The process was smooth and transparent."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-semibold">DF</span>
                </div>
                <div>
                  <h4 className="font-semibold">Debra Franco</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Dr. Duffy's team was absolutely amazing throughout, always professional, friendly,
                and helpful. I highly recommend them."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education and Credentials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Education, Credentials, and Professional Excellence
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Dr. Janet Duffy's extensive education and professional credentials set her apart in
              the Las Vegas real estate market. Her combination of academic achievement and
              practical experience provides clients with a unique advantage when buying or selling
              properties.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Ph.D. in Research
                </h3>
                <p className="text-gray-600 mb-4">
                  Dr. Duffy's doctoral degree in Real Estate Economics provides her with deep
                  understanding of market dynamics, property valuation methodologies, and economic
                  factors that influence real estate markets. This academic foundation, combined
                  with decades of hands-on experience, allows her to analyze properties and markets
                  with a level of sophistication that benefits every client.
                </p>
                <p className="text-gray-600">
                  Her research and academic background help her understand not just current market
                  conditions, but also long-term trends and factors that will influence property
                  values in the future. This forward-thinking approach helps clients make informed
                  decisions that serve them well both immediately and long-term.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Licensed Real Estate Broker
                </h3>
                <p className="text-gray-600 mb-4">
                  As a licensed real estate broker in Nevada and California, Dr. Duffy has met
                  rigorous state requirements for education, experience, and ethical conduct. Broker
                  licenses represent the highest level of real estate professional certification,
                  requiring extensive knowledge of real estate law, finance, contracts, and
                  professional ethics.
                </p>
                <p className="text-gray-600">
                  This licensing ensures that Dr. Duffy can handle complex transactions, provide
                  expert guidance on legal and financial matters, and represent clients' interests
                  with the highest level of professionalism. Her broker license also allows her to
                  supervise other real estate professionals, ensuring that her entire team maintains
                  the same high standards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  A+ Better Business Bureau Rating
                </h3>
                <p className="text-gray-600 mb-4">
                  Speedy Cash Home Offers maintains an A+ rating with the Better Business Bureau,
                  reflecting our commitment to ethical business practices, customer satisfaction,
                  and transparent operations. This rating isn't easily achieved - it requires
                  consistent excellent service, resolution of any customer concerns, and adherence
                  to BBB standards for business conduct.
                </p>
                <p className="text-gray-600">
                  The A+ rating demonstrates that Dr. Duffy and her team have built a reputation for
                  trustworthiness and reliability in the Las Vegas community. When you work with
                  Speedy Cash Home Offers, you're working with a company that has proven its
                  commitment to doing business the right way, with integrity and customer focus at
                  the forefront of every transaction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Professional Memberships and Community Involvement
                </h3>
                <p className="text-gray-600 mb-4">
                  Dr. Duffy is an active member of the Las Vegas Chamber of Commerce and other
                  professional organizations, demonstrating her commitment to the local business
                  community and professional development. These memberships provide access to
                  networking opportunities, continuing education, and industry best practices that
                  benefit her clients.
                </p>
                <p className="text-gray-600">
                  Her involvement in professional organizations also reflects her dedication to
                  maintaining the highest standards in real estate practice. Through these
                  memberships, Dr. Duffy stays current with industry trends, regulatory changes, and
                  best practices, ensuring that her clients receive the most up-to-date and
                  effective service possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Simple Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Initial Call</h3>
              <p className="text-gray-600">
                Tell us about your property and situation. Takes just 2 minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Property Assessment</h3>
              <p className="text-gray-600">
                We visit your property and provide a fair cash offer on the spot.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Closing</h3>
              <p className="text-gray-600">
                Close in as little as 7 days or choose your timeline up to 60 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work with Dr. Janet Duffy?</h2>
          <p className="text-xl mb-8">
            Join hundreds of Las Vegas homeowners who chose the fast, fair, and simple way to sell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:(702) 500-1981"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors text-center"
              aria-label="Call Dr. Janet Duffy at (702) 500-1981"
            >
              Call (702) 500-1981
            </a>
          </div>
        </div>
      </section>

      {/* Professional Background Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Dr. Janet Duffy's Professional Background and Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Education and Credentials
              </h3>
              <p className="text-gray-600 mb-4">
                Dr. Janet Duffy holds a Ph.D. in Research, providing her with deep
                theoretical knowledge and analytical skills that complement her extensive practical
                experience. This advanced education enables her to understand complex market dynamics,
                property valuation methodologies, and economic factors that influence real estate
                transactions.
              </p>
              <p className="text-gray-600 mb-4">
                In addition to her doctoral degree, Dr. Duffy is a licensed real estate broker in
                Nevada, maintaining all required continuing education and professional development
                requirements. Her commitment to ongoing education ensures she stays current with
                industry best practices, legal requirements, and market trends that affect Las Vegas
                and Southern California real estate markets.
              </p>
              <p className="text-gray-600">
                Her combination of advanced academic credentials and hands-on experience gives her a
                unique perspective on real estate transactions, allowing her to provide insights and
                solutions that other cash home buyers might miss. This expertise directly benefits
                homeowners through more accurate valuations and fairer offers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                In Las Vegas Real Estate Since 1983
              </h3>
              <p className="text-gray-600 mb-4">
                In real estate since 1983, with deep experience in the Las Vegas market,
                Dr. Janet Duffy has witnessed and navigated multiple market cycles, economic
                fluctuations, and neighborhood transformations. This long-term perspective allows her to
                understand not just current market conditions, but also how neighborhoods and
                property values have evolved over time.
              </p>
              <p className="text-gray-600 mb-4">
                Her experience spans various property types, from single-family homes and condos to
                investment properties and distressed real estate. She's helped 500+
                homeowners sell properties in situations ranging from routine sales to complex
                scenarios involving foreclosures, probate, divorce, and inherited properties.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 mt-6">
                Specialization in Distressed Properties
              </h3>
              <p className="text-gray-600 mb-4">
                Dr. Duffy has developed particular expertise in distressed properties, which are
                properties that need significant repairs, have structural issues, or are in
                foreclosure situations. Her experience with these challenging properties means she can
                accurately assess repair costs, renovation needs, and market potential, allowing her
                to make fair offers that account for all factors.
              </p>
              <p className="text-gray-600">
                This specialization is especially valuable for homeowners dealing with properties
                that traditional buyers might avoid. Whether your property has fire damage, water
                damage, structural issues, or simply needs extensive updating, Dr. Duffy's
                experience allows her to provide solutions that help you move forward quickly and
                fairly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Community Involvement and Professional Recognition
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Dr. Janet Duffy's commitment to excellence extends beyond individual transactions to
              active involvement in the Las Vegas business community and professional organizations.
              Her participation in these groups reflects her dedication to maintaining high
              standards and staying connected with industry developments.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Better Business Bureau A+ Rating
                </h3>
                <p className="text-gray-600 mb-4">
                  Speedy Cash Home Offers maintains an A+ rating with the Better Business Bureau,
                  reflecting our commitment to ethical business practices, customer satisfaction, and
                  transparent transactions. This rating is earned through consistent positive customer
                  experiences and resolution of any concerns that arise.
                </p>
                <p className="text-gray-600">
                  The A+ BBB rating provides homeowners with confidence that they're working with a
                  reputable, trustworthy company that prioritizes their interests. This recognition
                  reflects Dr. Duffy's commitment to building a business based on integrity,
                  transparency, and customer satisfaction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Las Vegas Chamber of Commerce Membership
                </h3>
                <p className="text-gray-600 mb-4">
                  As a member of the Las Vegas Chamber of Commerce, Dr. Duffy is actively involved in
                  supporting the local business community and contributing to economic development in
                  the Las Vegas area. This involvement demonstrates her commitment to the long-term
                  health and growth of the Las Vegas economy.
                </p>
                <p className="text-gray-600">
                  Chamber membership also provides opportunities for networking, professional
                  development, and staying informed about local business trends and opportunities.
                  This engagement helps Dr. Duffy maintain connections that benefit her clients and
                  stay current with local market developments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="about" />
    </div>
  );
}
