import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* Hero Section with Gradient Overlay */}
      <div className="relative bg-gradient-to-br from-[#ed1b2e] to-[#c41825] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Digital Excellence Initiative
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Enhancing PruBSN&apos;s digital presence through strategic improvements and best practices
            </p>
            <div className="mt-8">
              <Link
                href="/case-studies/prubsn-seo"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-[#ed1b2e] transition-colors duration-200"
                tabIndex={0}
                aria-label="View our SEO case study"
              >
                View Case Study
                <svg
                  className="ml-2 -mr-1 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Important Notice Card */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-6 mb-12 rounded-r-lg shadow-sm">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h2 className="text-lg font-semibold text-amber-800">
                Important SEO Findings
              </h2>
              <p className="mt-2 text-amber-700 leading-relaxed">
                Our analysis has identified several critical SEO improvements that could significantly enhance PruBSN&apos;s digital presence and user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Overview Cards Grid */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-16">
          {/* Key Findings Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-[#ed1b2e]/20 transition-colors duration-200">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-[#ed1b2e]/10 rounded-lg">
                    <svg className="h-6 w-6 text-[#ed1b2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">Key Findings</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#ed1b2e] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Multiple H1 Tags</h4>
                    <p className="mt-1 text-sm text-gray-500">Affecting SEO and content hierarchy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#ed1b2e] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Missing Hreflang Tags</h4>
                    <p className="mt-1 text-sm text-gray-500">Impacting multilingual support</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#ed1b2e] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Structured Data</h4>
                    <p className="mt-1 text-sm text-gray-500">Implementation needed for rich snippets</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Expected Outcomes Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-green-200 transition-colors duration-200">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">Expected Outcomes</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Improved Rankings</h4>
                    <p className="mt-1 text-sm text-gray-500">Better visibility in search results</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Enhanced UX</h4>
                    <p className="mt-1 text-sm text-gray-500">Better user experience across devices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Global Reach</h4>
                    <p className="mt-1 text-sm text-gray-500">Improved multilingual support</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Improve Your SEO?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our comprehensive analysis and get actionable recommendations to enhance your digital presence.
          </p>
          <Link
            href="/case-studies/prubsn-seo"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-[#ed1b2e] hover:bg-[#ed1b2e]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ed1b2e] transition-colors duration-200 shadow-sm"
            tabIndex={0}
            aria-label="View detailed SEO case study"
          >
            View Full Case Study
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
