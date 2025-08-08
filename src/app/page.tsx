"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import khursheed from "@/assets/team/khursheed.png";
import shahir from "@/assets/team/shahir.png";
import vahid from "@/assets/team/vahid.png";
import hansen from "@/assets/clients/hansen.png";
import smart_plaza from "@/assets/clients/smart_plaza.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-200 text-gray-800 p-8">
      <nav className="flex flex-col md:flex-row md:justify-start gap-6 text-blue-800 font-medium mb-8">
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
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="NextGen Logo" 
            width={120} 
            height={20} 
            className="object-contain hidden md:block"
            priority
          />
        </Link>
        <div
          className={`flex flex-col gap-4 md:flex-row md:space-x-12 md:items-center md:ml-1 md:mt-[50px] ${
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
          <Image src={hansen} alt="Hansen" className="h-20 w-auto" />
          <Image src={smart_plaza} alt="Smart Plaza" className="h-20 w-auto" />
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

      {/* Meet Our Team section */}
      <section className="mb-16 text-center bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <Image src={khursheed} alt="Khursheed" className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg" />
            <h3 className="text-xl font-semibold text-gray-800">Khursheed</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={shahir} alt="Shahir" className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg" />
            <h3 className="text-xl font-semibold text-gray-800">Shahir</h3>
            <p className="text-gray-600">Head of Marketing</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={vahid} alt="Vahid" className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg" />
            <h3 className="text-xl font-semibold text-gray-800">Vahid</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </section>

        {/* Client Testimonials slider */}
    <section className="mb-16 text-center py-12 overflow-hidden">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <div className="relative max-w-3xl mx-auto">
          {(() => {
            const testimonials = [
              {
                text: `"NextGen built our dream website and helped us reach new customers. Their team is smart, responsive, and results-driven."`,
                author: "– Sarah L., Founder at BloomWell",
              },
              {
                text: `"The marketing strategy doubled our leads in just three months!"`,
                author: "– James R., CEO of GreenTech",
              },
              {
                text: `"Their AI-driven insights are a game changer for our campaigns."`,
                author: "– Priya K., Marketing Manager",
              },
              {
                text: `"A fantastic partner for all our digital needs."`,
                author: "– Alex M., Founder at UrbanFit",
              },
            ];

            const [current, setCurrent] = React.useState(0);

            React.useEffect(() => {
              const interval = setInterval(() => {
                setCurrent((prev) => (prev + 1) % testimonials.length);
              }, 5000); // change every 5s
              return () => clearInterval(interval);
            }, []);

            return (
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {testimonials.map((t, idx) => (
                    <div key={idx} className="min-w-full px-6">
                      <div className="bg-white p-6 rounded-2xl shadow">
                        <p className="italic text-gray-700">{t.text}</p>
                        <p className="mt-4 font-semibold text-blue-800">{t.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
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