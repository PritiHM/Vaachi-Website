"use client";
import Image from "next/image";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <div className="w-full">
      <div className="relative w-full min-h-[60vh] sm:h-screen">
        <Image
          src="/images/Heroimg.jpg"
          alt="Vaachi Foundation Performance"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-16 left-6 sm:left-10 right-6 sm:right-10 hidden sm:block z-10">
          <h2
            className={`
              ${fraunces.className}
              text-4xl font-bold leading-tight text-white
            `}
          >
            Where Art Speaks. Values Resonate.
          </h2>

          <div className="mt-6 flex items-center justify-between w-full gap-4 text-white">
            <p className="text-lg opacity-90 max-w-[600px]">
              Vaachi Foundation nurtures the power of performing arts,
              build empathy, and inspire collective harmony.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#00656D] hover:bg-[#31757a]
              text-white w-[200px] h-[50px] rounded-md font-medium justify-center"
            >
              Write to Us
              <Image src="/images/arrow.png" width={20} height={20} alt="arrow" />
            </a>
          </div>
        </div>
      </div>

      <div className="block sm:hidden px-5 py-8 text-center">
        <p className="text-base text-gray-800 mb-4">
          Vaachi Foundation nurtures the power of performing arts to amplify
          human values, build empathy, and inspire collective harmony.
        </p>

        <h2
          className={`
            ${fraunces.className}
            text-base font-bold text-[#291F1E] mb-6
          `}
        >
          Where Art Speaks. Values Resonate.
        </h2>

        <a
          href="#contact"
          className="bg-[#00656D] hover:bg-[#31757a] text-white w-full py-3 rounded-md 
          font-medium inline-flex items-center justify-center gap-2"
        >
          Write to Us
          <Image src="/images/arrow.png" width={20} height={20} alt="arrow" />
        </a>
      </div>
    </div>
  );
}
