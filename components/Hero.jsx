"use client";

import Image from "next/image";
import Link from "next/link";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  const headingStyle = `${fraunces.className} text-4xl font-bold leading-tight text-white`;
  const textStyle = `${fraunces.className} text-xl opacity-90 max-w-[600px] text-[#F7F6F1]`;
  const mobileHeading = `${fraunces.className} text-xl font-bold text-[#291F1E] mb-4`;
  const mobileText = `${fraunces.className} text-base text-gray-800 mb-6`;

  return (
    <div className="section pt-0 w-full">
      {/* Desktop Hero */}
      <div className="relative w-full hidden sm:block sm:h-screen">
        <div className="relative w-full h-[60vh] sm:h-screen">
          <Image
            src="/images/HeroimgDs.png"
            alt="Vaachi Foundation Performance"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute bottom-16 left-6 sm:left-10 right-6 sm:right-10 z-30 px-10 py-10">
          <h2 className={headingStyle}>
            There are years of <span className="text-[#00656D]">Wisdom</span>{" "}
            lost in <br />
            <span className="text-[#00656D]">Conversations</span> we don't have
            anymore.
          </h2>

          <div className="mt-6 flex items-center justify-between w-full gap-4 text-[#F7F6F1]">
            <p className={textStyle}>
              Vaachi Foundation nurtures the power of performing arts, build
              empathy, and inspire collective harmony.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#00656D] hover:bg-[#31757a] text-[#F7F6F1] w-[200px] h-[50px] rounded-xl font-medium justify-center"
            >
              Write to Us
              <Image
                src="/images/arrow.png"
                width={20}
                height={20}
                alt="arrow"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="relative w-full min-h-[40vh] sm:hidden">
        <Image
          src="/images/HeroimgM.png"
          alt="Vaachi Foundation Performance (mobile)"
          fill
          priority
          sizes="100vw"
          className=" object-cover object-center"
        />
      </div>

      {/* Mobile Content */}
      <div className="block sm:hidden px-3 py-8 text-left">
        <h2 className={mobileHeading}>
          {" "}
          There are years of <span className="text-[#00656D]">Wisdom</span> lost
          in <br />
          <span className="text-[#00656D]">Conversations</span> we don't have
          anymore.
        </h2>

        <p className={mobileText}>
          Vaachi Foundation nurtures the power of performing arts to amplify
          human values, build empathy, and inspire collective harmony.
        </p>

        <Link
          href="#contact"
          className="bg-[#00656D] hover:bg-[#31757a] text-[#F7F6F1] py-3 px-5 rounded-xl font-medium inline-flex items-center gap-2"
        >
          Write to Us
          <Image src="/images/arrow.png" width={20} height={20} alt="arrow" />
        </Link>
      </div>
    </div>
  );
}
