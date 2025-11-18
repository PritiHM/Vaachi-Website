"use client";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function JoinWaitList() {
  return (
    <section
      id="contact"
      className="w-full max-w-[1250px] mx-auto px-4 md:px-8 bg-[#00656D] text-[#F7F6F1] py-16 mt-10 mb-10 rounded-xl relative overflow-hidden"
    >
      {/* Corner Image */}
      <div className="pointer-events-none absolute top-0 right-0 -translate-y-3 z-20">
        <img
          src="/images/corner-design.png"
          alt="corner"
          className="w-20 h-20 md:w-28 md:h-28 object-contain"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-10 items-start">
        
        {/* Left Side Content */}
        <div>
          <h2
            className={`${fraunces.className} text-[32px] md:text-[40px] font-extrabold leading-tight mb-4`}
          >
            Get in touch
          </h2>

          <p
            className={`${fraunces.className} text-[16px] md:text-[18px] leading-[28px] opacity-95 max-w-[650px]`}
          >
            Every voice matters. Every gesture adds to the harmony.
            Whether you're an artist, supporter, or someone curious to learn more — we’d love to hear from you.
          </p>
        </div>

        {/* Contact - Make in 1 Row in Mobile */}
        <div className="flex flex-row flex-wrap items-center gap-4 md:gap-8">

          {/* Email */}
          <div className="flex flex-row items-center gap-2">
            <img src="/images/envelope.png" className="w-6 h-6 md:w-12 md:h-12" />
            <a
              href="mailto:contact@vaachi.org"
              className={`${fraunces.className} text-[14px] md:text-[17px] hover:underline`}
            >
              contact@vaachi.org
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-row items-center gap-2">
            <img src="/images/phone.png" className="w-6 h-6 md:w-12 md:h-12" />
            <a
              href="tel:+919170916622"
              className={`${fraunces.className} text-[14px] md:text-[17px] hover:underline`}
            >
              +91 91709 16622
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
