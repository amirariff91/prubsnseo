import React from 'react';

const SEOCaseStudy = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#ed1b2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              SEO Improvement Case Study
            </h1>
            <p className="text-xl text-red-100">
              A comprehensive analysis of PruBSN.com.my&apos;s SEO status and actionable recommendations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Executive Summary Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <p className="text-gray-600">
            During our SEO audit of PruBSN.com.my, we identified several critical issues affecting the website&apos;s search engine optimization and user experience. 
            This case study outlines these issues and provides actionable solutions to improve the website&apos;s SEO performance.
          </p>
        </div>

        {/* Technical Audit Overview */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 mb-16">
          {/* Health Score Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Health Score</h3>
              <span className={`text-3xl font-bold ${
                91 >= 90 ? 'text-green-600' : 91 >= 70 ? 'text-yellow-600' : 'text-red-600'
              }`}>91</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full mb-4">
              <div 
                className="h-2 bg-green-500 rounded-full" 
                style={{ width: '91%' }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">
              The website has a good overall health score, but there&apos;s room for improvement in specific areas.
            </p>
          </div>

          {/* Crawl Status */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Crawl Status</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Internal URLs</span>
                <span className="font-semibold">235</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Crawled</span>
                <span className="font-semibold text-green-600">5,717</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Uncrawled</span>
                <span className="font-semibold text-yellow-600">1,436</span>
              </div>
            </div>
          </div>

          {/* Issues Distribution */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Issues Found</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Errors</span>
                <div className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                  <span className="font-semibold">20</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Warnings</span>
                <div className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
                  <span className="font-semibold">500</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Notices</span>
                <div className="flex items-center">
                  <span className="h-3 w-3 rounded-full bg-[#ed1b2e] mr-2"></span>
                  <span className="font-semibold">363</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Issues Table */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Issues Overview</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { issue: "Page has links to broken page", count: 16, severity: "Error" },
                  { issue: "404 page", count: 4, severity: "Error" },
                  { issue: "HTTPS page has internal links to HTTP", count: 3, severity: "Error" },
                  { issue: "500 page", count: 1, severity: "Error" },
                  { issue: "404 page in sitemap", count: 1, severity: "Error" },
                  { issue: "500 page in sitemap", count: 1, severity: "Error" },
                  { issue: "404 redirect", count: 113, severity: "Warning" },
                  { issue: "Missing alt text", count: 113, severity: "Warning" }
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.issue}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.count}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.severity === "Error" 
                          ? "bg-red-100 text-red-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {item.severity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Competitive Analysis Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Competitive Analysis & Keyword Opportunities</h2>
          
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-8">
            {/* Keyword Opportunity Card */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Total Keyword Opportunities</h3>
                <span className="text-3xl font-bold text-[#ed1b2e]">2,700+</span>
              </div>
              <p className="text-gray-600 mb-4">
                Based on analysis of 4 competitors, we&apos;ve identified over 2,700 relevant keywords that PruBSN could target to improve search visibility.
              </p>
              <div className="flex items-center text-sm text-[#ed1b2e]">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>Potential for more with expanded competitor analysis</span>
              </div>
            </div>

            {/* Competitive Gap Analysis */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Opportunity Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Insurance product comparison keywords</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Educational content and guides</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Takaful-specific terminology and concepts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Local insurance market insights</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Content Strategy Recommendations */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Strategy Recommendations</h3>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-[#ed1b2e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <h4 className="font-medium text-gray-900">Create Topic Clusters</h4>
                </div>
                <p className="text-sm text-gray-600">Develop comprehensive content hubs around main insurance products and services</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-[#ed1b2e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <h4 className="font-medium text-gray-900">Multilingual Content</h4>
                </div>
                <p className="text-sm text-gray-600">Ensure all key content is available in both English and Malay</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-[#ed1b2e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <h4 className="font-medium text-gray-900">FAQ Expansion</h4>
                </div>
                <p className="text-sm text-gray-600">Create comprehensive FAQ sections targeting long-tail keywords</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Issues Grid */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-16">
          {/* Issue 1: Multiple H1 Tags */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#ed1b2e]/20 border border-transparent">
            <div className="p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-red-100 text-[#ed1b2e] group-hover:bg-[#ed1b2e] group-hover:text-white transition-colors duration-300">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold text-gray-900">Multiple H1 Tags Issue</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Critical</span>
                  </div>
                  <p className="mt-3 text-gray-600 leading-relaxed">The homepage contains multiple H1 tags, which goes against SEO best practices and can confuse search engines about the main topic of the page.</p>
                  <div className="mt-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                    <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="h-5 w-5 text-[#ed1b2e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Recommended Solution
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Keep only one H1 tag per page that clearly describes the main topic</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Convert other H1 tags to appropriate heading levels (H2-H6)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Maintain proper heading hierarchy throughout the page</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Issue 2: Missing Hreflang Tags */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#ed1b2e]/20 border border-transparent">
            <div className="p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-red-100 text-[#ed1b2e] group-hover:bg-[#ed1b2e] group-hover:text-white transition-colors duration-300">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold text-gray-900">Missing Hreflang Tags</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Critical</span>
                  </div>
                  <p className="mt-3 text-gray-600 leading-relaxed">Despite having both Malay and English versions, the site lacks proper hreflang implementation, which affects international SEO.</p>
                  <div className="mt-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                    <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="h-5 w-5 text-[#ed1b2e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Implementation Example
                    </h4>
                    <div className="max-w-full overflow-x-auto">
                      <pre className="bg-gray-800 text-white p-4 rounded-lg text-sm whitespace-pre-wrap break-all">
{`<link rel="alternate" hreflang="en-my" 
      href="https://www.prubsn.com.my/en/" />
<link rel="alternate" hreflang="ms-my" 
      href="https://www.prubsn.com.my/ms/" />
<link rel="alternate" hreflang="x-default" 
      href="https://www.prubsn.com.my/" />`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Issue 3: Missing Structured Data */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#ed1b2e]/20 border border-transparent">
            <div className="p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-yellow-100 text-yellow-700 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold text-gray-900">Missing Structured Data</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Important</span>
                  </div>
                  <p className="mt-3 text-gray-600 leading-relaxed">The website lacks structured data implementation, missing opportunities for rich snippets in search results.</p>
                  <div className="mt-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                    <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="h-5 w-5 text-[#ed1b2e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Required Schema Types
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-gray-100">
                        <svg className="h-5 w-5 text-[#ed1b2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-sm text-gray-700">Organization</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-gray-100">
                        <svg className="h-5 w-5 text-[#ed1b2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-sm text-gray-700">BreadcrumbList</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-gray-100">
                        <svg className="h-5 w-5 text-[#ed1b2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-gray-700">FAQPage</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-gray-100">
                        <svg className="h-5 w-5 text-[#ed1b2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span className="text-sm text-gray-700">Product</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Issue 4: Social Media Meta Tags */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#ed1b2e]/20 border border-transparent">
            <div className="p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-yellow-100 text-yellow-700 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold text-gray-900">Social Media Meta Tags</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Important</span>
                  </div>
                  <p className="mt-3 text-gray-600 leading-relaxed">Mismatched og:url with canonical URL and missing Twitter Card meta tags reduce social sharing effectiveness.</p>
                  <div className="mt-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                    <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="h-5 w-5 text-[#ed1b2e] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Required Meta Tags
                    </h4>
                    <div className="max-w-full overflow-x-auto">
                      <pre className="bg-gray-800 text-white p-4 rounded-lg text-sm whitespace-pre-wrap break-all">
{`<!-- Open Graph Tags -->
<meta property="og:url" 
      content="https://www.prubsn.com.my/ms/" />
<link rel="canonical" 
      href="https://www.prubsn.com.my/ms/" />

<!-- Twitter Card Tags -->
<meta name="twitter:card" 
      content="summary_large_image" />
<meta name="twitter:site" content="@PruBSN" />
<meta name="twitter:title" 
      content="PruBSN - Your Insurance Partner" />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="..." />`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Issue 5: Non-Accessible Text in Images */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#ed1b2e]/20 border border-transparent col-span-1 lg:col-span-2">
            <div className="p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-red-100 text-[#ed1b2e] group-hover:bg-[#ed1b2e] group-hover:text-white transition-colors duration-300">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold text-gray-900">Non-Accessible Text in Images</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Critical</span>
                  </div>
                  <p className="mt-3 text-gray-600 leading-relaxed">Important announcements are embedded in images rather than using actual text, affecting both SEO and mobile usability.</p>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                      <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Current Issues
                      </h4>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span>Poor accessibility for screen readers</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span>Text not scalable on mobile devices</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span>Content not indexable by search engines</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                      <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Recommended Solutions
                      </h4>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Convert image-based announcements to actual text</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Use responsive typography for better readability</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Implement proper HTML markup for announcements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Plan */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Priority</h2>
          <div className="space-y-4">
            {[
              { priority: "High", task: "Fix multiple H1 tags issue", note: "Quick win" },
              { priority: "High", task: "Implement proper hreflang tags", note: "Important for international audience" },
              { priority: "High", task: "Convert text-in-images to actual text", note: "Critical for mobile users" },
              { priority: "Medium", task: "Add structured data", note: "Requires planning" },
              { priority: "Medium", task: "Fix social media meta tags", note: "Enhances social sharing" }
            ].map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  item.priority === "High" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                }`}>
                  {item.priority}
                </span>
                <span className="ml-4 text-gray-900 font-medium">{item.task}</span>
                <span className="ml-auto text-gray-500 text-sm">{item.note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Outcomes */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Expected Outcomes</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Search Rankings", description: "Improved visibility in search results through better technical SEO implementation" },
              { title: "User Experience", description: "Enhanced accessibility and readability across all devices" },
              { title: "International Reach", description: "Better targeting for multilingual users with proper language support" },
              { title: "Rich Snippets", description: "Increased visibility in search results with structured data" },
              { title: "Social Sharing", description: "Improved presentation when content is shared on social media" },
              { title: "Mobile Performance", description: "Better mobile experience with proper text implementation" }
            ].map((outcome, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{outcome.title}</h3>
                <p className="text-gray-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SEOCaseStudy; 