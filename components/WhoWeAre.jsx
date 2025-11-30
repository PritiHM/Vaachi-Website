"use client";

import Image from "next/image";
import { Fraunces, Nunito } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function WhoWeAre() {
  return (
    <section className="section pt-0 md:pt-14 w-full flex justify-center bg-[#F7F6F1] px-3 sm:px-0">
      <div className="bg-[#00656D] text-[#F7F6F1] rounded-2xl shadow-lg relative max-w-7xl w-fulloverflow-visible pt-2 pb-4 px-0 md:pt-10 md:pb-56">
        <div className="absolute top-0 right-0 w-20 h-20  hidden md:block pointer-events-none select-none">
          <Image
            src="/images/corner-design.png"
            alt="corner"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="px-3 md:px-6 pt-6 md:pt-0 pb-6 md:pb-12">
          <h2
            className={`${fraunces.className} text-4xl md:text-6xl font-bold leading-tight tracking-wide`}
          >
            Who We Are
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-6 mt-6 md:mt-10">
            <div>
              <p
                className={`${nunito.className} text-base md:text-xl leading-[1.9] opacity-90 max-w-[600px]`}
              >
                Vaachi Foundation is a non-profit dedicated to cultivating human
                values through the transformative language of performing arts.
              </p>
            </div>

            <div>
              <p
                className={`${nunito.className} text-base md:text-xl leading-[1.9] opacity-90 max-w-[600px]`}
              >
                We believe that dance, theatre, music, and storytelling have the
                power to transcend barriers, connecting hearts, shaping
                perspectives, and nurturing a culture of empathy.
              </p>
            </div>
          </div>

          <h3
            className={`${fraunces.className} font-bold text-xl md:text-4xl mt-8 md:mt-16 md:mb-6`}
          >
            At Vaachi, our work centers on:
          </h3>
        </div>

        <div className="md:absolute inset-x-6 bottom-8 flex flex-col md:flex-row gap-4 md:gap-6 px-2 md:px-0 z-10 items-center md:items-stretch md:justify-between">
          <div className="bg-[#F7F6F1] text-[#00656D] rounded-2xl shadow-md w-full md:flex-1 h-[160px] md:h-[220px] p-3 md:p-7 flex flex-col justify-start">
            <h4
              className={`${fraunces.className} font-bold text-lg md:text-2xl mb-0 md:mb-2 leading-tight`}
            >
              Community Engagement
            </h4>
            <p
              className={`${nunito.className} text-base md:text-xl font-normal leading-relaxed mt-6`}
            >
              Bringing arts to local spaces and schools
            </p>
          </div>

          <div className=" bg-[#F7F6F1] text-[#00656D] rounded-2xl shadow-md w-full md:flex-1  h-[160px] md:h-[220px] p-3 md:p-7 flex flex-col justify-start ">
            <h4
              className={`${fraunces.className} font-bold text-lg md:text-2xl mb-1 md:mb-2 leading-tight`}
            >
              Value Amplification
            </h4>
            <p
              className={`${nunito.className} text-base md:text-xl font-normal leading-relaxed mt-6`}
            >
              Embedding compassion, respect, and harmony through creative
              expression
            </p>
          </div>

          <div className=" bg-[#F7F6F1] text-[#00656D] rounded-2xl shadow-md w-full md:flex-1  h-[160px] md:h-[220px] p-3 md:p-7 flex flex-col justify-start ">
            <h4
              className={`${fraunces.className} font-bold text-lg md:text-2xl mb-1 md:mb-2 leading-tight`}
            >
              Cultural Preservation
            </h4>
            <p
              className={`${nunito.className} text-base md:text-xl font-normal leading-relaxed mt-6`}
            >
              Honoring traditional forms while embracing contemporary voices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
