import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PruBSN SEO Case Study - Improving Digital Presence",
  description: "A comprehensive SEO case study analyzing PruBSN.com.my's website and providing actionable solutions for better search engine optimization.",
  openGraph: {
    title: "PruBSN SEO Case Study - Improving Digital Presence",
    description: "A comprehensive SEO case study analyzing PruBSN.com.my's website and providing actionable solutions for better search engine optimization.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "PruBSN SEO Case Study - Improving Digital Presence",
    description: "A comprehensive SEO case study analyzing PruBSN.com.my's website and providing actionable solutions for better search engine optimization.",
  },
};

const Header = () => (
  <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold text-[#ed1b2e] hover:text-[#ed1b2e]/90 transition-colors duration-200"
            aria-label="PruBSN Home"
          >
            PruBSN
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-[#ed1b2e] transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          <Link 
            href="/case-studies/prubsn-seo" 
            className="inline-flex items-center px-4 py-2 border border-[#ed1b2e] text-sm font-medium rounded-md text-[#ed1b2e] hover:bg-[#ed1b2e] hover:text-white transition-colors duration-200"
          >
            SEO Case Study
          </Link>
        </nav>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link 
            href="/" 
            className="text-xl font-bold text-[#ed1b2e] hover:text-[#ed1b2e]/90 transition-colors duration-200"
          >
            PruBSN
          </Link>
          <p className="mt-4 text-gray-500 max-w-md">
            Enhancing digital presence through strategic improvements and best practices in SEO optimization.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">About</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link 
                href="/" 
                className="text-gray-500 hover:text-[#ed1b2e] transition-colors duration-200"
              >
                About PruBSN
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Resources</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link 
                href="/case-studies/prubsn-seo" 
                className="text-gray-500 hover:text-[#ed1b2e] transition-colors duration-200"
              >
                SEO Case Study
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 pt-8">
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} PruBSN Digital Improvement Projects. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} antialiased min-h-screen flex flex-col bg-white`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
