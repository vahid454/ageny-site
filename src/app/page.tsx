import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-200 text-gray-800 p-8">
      <nav className="flex flex-col md:flex-row md:justify-center gap-6 text-blue-800 font-medium mb-8">
        <div className="flex justify-between items-center md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`flex flex-col md:flex-row md:gap-6 md:items-center ${
            menuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        </div>
      </nav>
      <header className="text-center py-20 bg-gradient-to-br from-blue-200 via-white to-blue-100 rounded-2xl shadow-md mb-16">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">NextGen Digital Agency</h1>
        <p className="text-xl max-w-xl mx-auto text-gray-700">We help small businesses grow with high-converting websites, smart SEO, and paid advertising that works.</p>
        <Link href="/contact" className="mt-6 inline-block bg-blue-700 text-white px-8 py-3 rounded-xl text-lg shadow-lg transform transition hover:scale-105 hover:bg-blue-800">
          Get a Free Audit
        </Link>
      </header>

      <section className="mb-16 text-center bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">AI-Powered Digital Growth</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We leverage cutting-edge Artificial Intelligence to analyze your market, predict trends, and optimize your campaigns in real-time. Our AI tools ensure your business stays ahead of the competition with smarter strategies and faster results.
        </p>
      </section>

      <section
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Web Design</h3>
            <p>Modern, fast, and mobile-friendly websites that turn visitors into leads.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">SEO</h3>
            <p>Rank higher on Google and get found by your ideal local customers.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Paid Ads</h3>
            <p>Drive quality traffic fast with our Google and Facebook Ads campaigns.</p>
          </div>
        </div>
      </section>

      <section
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
        <p className="max-w-2xl mx-auto text-gray-700">We're not just another agency. We tailor strategies based on your business goals and deliver results. Whether it's lead generation or brand awareness — we bring clarity, creativity, and conversions.</p>
      </section>

      <section
        className="mb-16 bg-white p-8 rounded-2xl shadow-md text-center"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Clients</h2>
        <p className="text-gray-700 mb-6">We've proudly worked with companies across industries.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <img src="/clients/client1.png" alt="Client 1" className="h-12" />
          <img src="/clients/client2.png" alt="Client 2" className="h-12" />
          <img src="/clients/client3.png" alt="Client 3" className="h-12" />
          <img src="/clients/client4.png" alt="Client 4" className="h-12" />
        </div>
      </section>


      <section
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Achievements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">100+ Projects</h3>
            <p>Successfully launched websites and campaigns for over 100 clients.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Top Rated</h3>
            <p>Consistently rated 5 stars on platforms like Clutch and Google Reviews.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Certified Team</h3>
            <p>Google Ads & SEO certified specialists to handle your digital growth.</p>
          </div>
        </div>
      </section>

      <section
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">From Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Top SEO Tips for Local Businesses</h3>
            <p className="text-gray-700">Learn how to rank higher in your area with simple, actionable SEO strategies.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Landing Page Hacks That Convert</h3>
            <p className="text-gray-700">Boost conversions by optimizing your CTAs, layout, and visuals.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">How Paid Ads Can 10x Your Growth</h3>
            <p className="text-gray-700">Use Google and Facebook Ads the smart way to increase revenue fast.</p>
          </div>
        </div>
      </section>

      <section
        className="mb-16 text-center bg-gradient-to-br from-blue-100 to-white py-12"
      >
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow transition duration-300 ease-in-out">
            <p className="italic text-gray-700">"NextGen built our dream website and helped us reach new customers. Their team is smart, responsive, and results-driven."</p>
            <p className="mt-4 font-semibold text-blue-800">– Sarah L., Founder at BloomWell</p>
          </div>
        </div>
      </section>

      <div
        className="text-center text-gray-500 text-sm mt-16"
      >
        &copy; {new Date().getFullYear()} NextGen Digital Agency. All rights reserved.
      </div>
    </div>
  );
}