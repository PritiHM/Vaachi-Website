"use client";
import Image from "next/image";

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

        <div className="hidden sm:block absolute bottom-16 left-10 right-10 text-white z-10">
          <Image
            src="/images/heading.png"
            alt="heading"
            width={600}
            height={200}
            className="mb-6"
          />

          <div className="flex items-center justify-between w-full gap-4">
            <p className="text-lg opacity-90 max-w-[600px]">
              Vaachi Foundation nurtures the power of performing arts…
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
        <Image
          src="/images/heading.png"
          alt="heading"
          width={320}
          height={120}
          className="mx-auto mb-4"
        />

        <p className="text-base text-gray-800 mb-6">
          Vaachi Foundation nurtures the power of performing arts…
        </p>

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
