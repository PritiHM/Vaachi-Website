"use client";
import { Fraunces } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ContactSection() {
  return (
    <section
      id="contact-us"
      className="w-full max-w-7xl mx-auto px-4 md:px-8 bg-[#00656D] text-[#F7F6F1] py-20 md:py-28 mt-10 mb-10 md:rounded-2xl relative overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 right-0 z-20">
        <Image
          src="/images/corner-design.png"
          alt="corner"
          width={100}
          height={100}
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
            Every voice matters. Every gesture adds to the harmony. Whether
            you’re an artist, supporter.
          </p>
        </div>

        <section className="mt-10 md:mt-12 w-full md:-translate-x-10">
          <div className="hidden md:grid grid-cols-2 gap-x-6 gap-y-1 text-center">
            <div className="flex justify-center">
              <Image
                src="/images/envelope.png"
                width={100}
                alt="envelope"
                height={100}
                className="w-12 h-12"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/phone.png"
                alt="phone"
                width={100}
                height={100}
                className="w-12 h-12"
              />
            </div>

            <div className="mt-1">
              <Link
                href="mailto:contact@vaachi.org"
                className={`${fraunces.className} text-[20px] hover:underline block`}
              >
                contact@vaachi.org
              </Link>
            </div>

            <div className="mt-1">
              <Link
                href="tel:+919170916622"
                className={`${fraunces.className} text-[20px] hover:underline block`}
              >
                +91 91709 16622
              </Link>
            </div>
          </div>

          <div className="md:hidden flex flex-col items-start gap-8">
            <div className="flex gap-5 items-center">
              <Image
                src="/images/envelope.png"
                alt="envelope"
                width={100}
                height={100}
                className="w-10 h-10"
              />
              <Link
                href="mailto:contact@vaachi.org"
                className={`${fraunces.className} text-[24px] hover:underline`}
              >
                contact@vaachi.org
              </Link>
            </div>

            <div className="flex items-center gap-5">
              <Image
                src="/images/phone.png"
                alt="phone"
                width={100}
                height={100}
                className="w-10 h-10"
              />
              <Link
                href="tel:+919170916622"
                className={`${fraunces.className} text-[24px] hover:underline`}
              >
                +91 91709 16622
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
