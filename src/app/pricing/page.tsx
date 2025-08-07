import React from 'react';

export default function PricingPage() {
  return (
    <main className="min-h-screen p-8 text-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">Our Pricing Plans</h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Choose the plan that fits your business needs. No hidden fees, no surprises.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="border p-6 rounded-xl shadow bg-white">
          <h2 className="text-2xl font-semibold mb-2">Starter</h2>
          <p className="text-gray-600 mb-4">Perfect for small businesses</p>
          <p className="text-3xl font-bold mb-4">$299</p>
          <ul className="text-gray-700 space-y-2">
            <li>✔ 5-Page Website</li>
            <li>✔ Mobile Responsive</li>
            <li>✔ Basic SEO Setup</li>
            <li>✔ Contact Form</li>
          </ul>
          <a
            href="https://paypal.me/vahid454/299"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Pay with PayPal
          </a>
        </div>

        <div className="border p-6 rounded-xl shadow bg-white">
          <h2 className="text-2xl font-semibold mb-2">Growth</h2>
          <p className="text-gray-600 mb-4">Best for growing teams</p>
          <p className="text-3xl font-bold mb-4">$599</p>
          <ul className="text-gray-700 space-y-2">
            <li>✔ Everything in Starter</li>
            <li>✔ Blog Integration</li>
            <li>✔ Lead Capture Forms</li>
            <li>✔ Email Newsletter Setup</li>
          </ul>
          <a
            href="https://paypal.me/vahid454/599"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Pay with PayPal
          </a>
        </div>

        <div className="border p-6 rounded-xl shadow bg-white">
          <h2 className="text-2xl font-semibold mb-2">Premium</h2>
          <p className="text-gray-600 mb-4">Complete digital marketing</p>
          <p className="text-3xl font-bold mb-4">$999</p>
          <ul className="text-gray-700 space-y-2">
            <li>✔ Everything in Growth</li>
            <li>✔ Google Ads Setup</li>
            <li>✔ SEO Audit & Optimization</li>
            <li>✔ Analytics Dashboard</li>
          </ul>
          <a
            href="https://paypal.me/vahid454/999"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Pay with PayPal
          </a>
        </div>
      </div>
    </main>
  );
}