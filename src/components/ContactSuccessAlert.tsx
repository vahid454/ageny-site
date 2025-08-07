'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactSuccessAlert() {
  const searchParams = useSearchParams();
  const [showMessage, setShowMessage] = React.useState(false);

  React.useEffect(() => {
    if (searchParams.get('sent') === '1') {
      setShowMessage(true);
      const timer = setTimeout(() => setShowMessage(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  if (!showMessage) return null;

  return (
    <div className="bg-green-50 border border-green-300 text-green-900 px-6 py-4 rounded-lg mb-6 shadow-md text-center transition-opacity duration-300 ease-in-out">
      <strong>Message Sent!</strong> We’ll get in touch with you shortly.
    </div>
  );
}