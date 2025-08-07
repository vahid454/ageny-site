import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">Our Blog</h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Get the latest insights on digital marketing, web design, SEO strategies, and business growth.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <article className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Top SEO Tips for Local Businesses</h2>
          <p className="text-gray-700 mb-4">Simple strategies to help your business get discovered in search results and rank higher locally.</p>
          <Link href="/blog/seo-tips" className="text-blue-600 font-medium hover:underline">Read More →</Link>
        </article>

        <article className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">How to Build a Landing Page That Converts</h2>
          <p className="text-gray-700 mb-4">Learn what elements make a landing page successful and how to design one that drives results.</p>
          <Link href="/blog/landing-page-hacks" className="text-blue-600 font-medium hover:underline">Read More →</Link>
        </article>

        <article className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">The Power of Paid Ads in 2025</h2>
          <p className="text-gray-700 mb-4">How to scale your business with cost-effective ad campaigns on Google, Meta, and beyond.</p>
          <Link href="/blog/paid-ads-2025" className="text-blue-600 font-medium hover:underline">Read More →</Link>
        </article>
      </div>
    </main>
  );
}