import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-200 text-gray-800 p-8">
      <nav className="flex justify-center gap-6 text-blue-800 font-medium mb-8">
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <header className="text-center py-20 bg-gradient-to-br from-blue-200 via-white to-blue-100 rounded-2xl shadow-md mb-16">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">NextGen Digital Agency</h1>
        <p className="text-xl max-w-xl mx-auto text-gray-700">We help small businesses grow with high-converting websites, smart SEO, and paid advertising that works.</p>
        <Link href="/contact" className="mt-6 inline-block bg-blue-700 text-white px-8 py-3 rounded-xl text-lg shadow-lg transform transition hover:scale-105 hover:bg-blue-800">
          Get a Free Audit
        </Link>
      </header>

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

      <section
        className="mb-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Subscribe for Updates</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="email" placeholder="Enter your email" className="w-full border p-3 rounded" />
          <button className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">Subscribe</button>
        </form>
      </section>

      <div
        className="text-center text-gray-500 text-sm mt-16"
      >
        &copy; {new Date().getFullYear()} NextGen Digital Agency. All rights reserved.
      </div>
    </div>
  );
}