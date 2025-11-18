"use client";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#0f172a]">
      {/* divider */}
      <div className="w-full border-t border-gray-200">
        <div
          className="
            w-full max-w-[1250px] mx-auto 
            px-4 md:px-6 
            py-8 md:py-10 
            grid grid-cols-1 md:grid-cols-3 
            gap-8 items-center
          "
        >

          {/* LEFT — Logo + Brand Name */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <img
                src="/images/Logo.png"
                alt="Vaachi Foundation logo"
                className="h-10 w-auto md:h-10"
              />

              <span
                className={`${fraunces.className} text-2xl md:text-xl font-bold text-[#00656D]`}
              >
                Vaachi Foundation
              </span>
            </div>

            <p className="text-sm text-gray-600">
              All Rights Reserved © 2025
            </p>
          </div>

          {/* CENTER — Privacy / Terms */}
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="text-sm md:text-base hover:underline font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm md:text-base hover:underline font-medium"
            >
              Terms of Use
            </a>
          </div>

          {/* RIGHT — Social Icons */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-4 md:gap-5">

              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img
                  src="/images/Facebook.png"
                  className="h-8 w-8 md:h-9 md:w-9"
                  alt="Facebook icon"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img
                  src="/images/Instagram.png"
                  className="h-8 w-8 md:h-9 md:w-9"
                  alt="Instagram icon"
                />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <img
                  src="/images/youtube.png"
                  className="h-8 w-8 md:h-9 md:w-9"
                  alt="YouTube icon"
                />
              </a>

            </div>

            <span className="text-sm md:text-base font-medium">
              Follow us on
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
