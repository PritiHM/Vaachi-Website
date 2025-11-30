"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookie_consent");
    if (!hasConsent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[600px]">
      <div className="bg-[#1B1B1B] text-white p-5 rounded-xl shadow-xl flex flex-col md:flex-row items-start md:items-center gap-4 animate-fade-in">
        <p className="text-sm leading-relaxed flex-1">
          We use cookies to enhance your browsing experience, serve personalized
          content, and analyze our traffic.
        </p>

        <div className="flex items-center gap-2">
          {/* Reject Button */}
          <button
            onClick={rejectCookies}
            className="bg-gray-600 hover:bg-gray-700 transition text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap"
          >
            Reject
          </button>

          {/* Accept Button */}
          <button
            onClick={acceptCookies}
            className="bg-[#00656D] hover:bg-[#31757A] transition text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
