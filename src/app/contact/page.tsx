"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [showMessage, setShowMessage] = React.useState(false);

  React.useEffect(() => {
    if (searchParams.get('sent') === '1') {
      setShowMessage(true);
      const timer = setTimeout(() => setShowMessage(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">Contact Us</h1>
      <p className="text-center max-w-xl mx-auto text-gray-600 mb-10">
        We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
      </p>

      {showMessage && (
        <div className="bg-green-50 border border-green-300 text-green-900 px-6 py-4 rounded-lg mb-6 shadow-md text-center transition-opacity duration-300 ease-in-out">
          <strong>Message Sent!</strong> We’ll get in touch with you shortly.
        </div>
      )}

      <form method="POST" action="/api/contact" className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Your Phone Number"
          className="w-full border p-3 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-3 rounded h-32"
          required
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 w-full"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}