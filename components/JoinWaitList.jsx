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
      className="w-full max-w-7xl mx-auto px-4 md:px-8 bg-[#00656D] text-[#F7F6F1] py-16 mt-10 mb-10 rounded-xl relative overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 right-0 -translate-y-3 z-20">
        <img
          src="/images/corner-design.png"
          alt="corner"
          className="w-20 h-20 md:w-28 md:h-28 object-contain"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-10 items-start">
        
        <div>
          <h2
            className={`${fraunces.className} text-[24px] md:text-[32px] font-bold  leading-tight mb-4`}
          >
            Get in touch
          </h2>

          <p
            className={`${fraunces.className} text-[16px] md:text-[20px] leading-[28px] opacity-95 max-w-[650px]`}
          >
            Every voice matters. Every gesture adds to the harmony. Whether you’re an artist, supporter.
          </p>
        </div>

        <section className="mt-10 md:mt-12 w-full md:-translate-x-10">

          <div className="hidden md:grid grid-cols-2 gap-x-6 gap-y-1 text-center">

            <div className="flex justify-center">
              <img src="/images/envelope.png" className="w-12 h-12" />
            </div>

            <div className="flex justify-center">
              <img src="/images/phone.png" className="w-12 h-12" />
            </div>

            <div className="mt-1">
              <a
                href="mailto:contact@vaachi.org"
                className={`${fraunces.className} text-[20px] hover:underline block`}
              >
                contact@vaachi.org
              </a>
            </div>

            <div className="mt-1">
              <a
                href="tel:+919170916622"
                className={`${fraunces.className} text-[20px] hover:underline block`}
              >
                +91 91709 16622
              </a>
            </div>

          </div>

<div className="md:hidden flex flex-col items-start gap-8">

  <div className="flex flex-col items-start gap-2">
    <img src="/images/envelope.png" className="w-10 h-10" />
    <a
      href="mailto:contact@vaachi.org"
      className={`${fraunces.className} text-[24px] hover:underline`}
    >
      contact@vaachi.org
    </a>
  </div>

  <div className="flex flex-col items-start gap-2">
    <img src="/images/phone.png" className="w-10 h-10" />
    <a
      href="tel:+919170916622"
      className={`${fraunces.className} text-[24px] hover:underline`}
    >
      +91 91709 16622
    </a>
  </div>

</div>


        </section>

      </div> 

    </section> 
  );
}
