
import React from 'react';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen p-8 text-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">Our Portfolio</h1>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">Check out some of the amazing work we’ve done for clients across industries.</p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="border rounded-xl overflow-hidden shadow bg-white">
          <img src="/portfolio/site1.jpg" alt="Project 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Local Bakery</h2>
            <p className="text-gray-700">Ecommerce-ready website with mobile optimization and custom branding.</p>
          </div>
        </div>
        <div className="border rounded-xl overflow-hidden shadow bg-white">
          <img src="/portfolio/site2.jpg" alt="Project 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Fitness Studio</h2>
            <p className="text-gray-700">Landing page design, online booking integration, and lead tracking.</p>
          </div>
        </div>
        <div className="border rounded-xl overflow-hidden shadow bg-white">
          <img src="/portfolio/site3.jpg" alt="Project 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Tech Consultant</h2>
            <p className="text-gray-700">Personal brand site with SEO-friendly blog and case studies.</p>
          </div>
        </div>
      </div>
    </main>
  );
}