"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ImpactSection() {
  const [activePoint, setActivePoint] = useState(0);

  const points = [
    {
      id: 1,
      title: "Performance for Change",
      desc: "Theatre and dance productions that spark dialogue on social values.",
      image: "/images/impact-slide1.png",
    },
    {
      id: 2,
      title: "Arts Education",
      desc: "Programs for schools and communities that cultivate empathy and expression.",
      image: "/images/impact-slide1.png",
    },
    {
      id: 3,
      title: "Cultural Exchange",
      desc: "Collaborations across regions and generations to preserve heritage and foster inclusivity.",
      image: "/images/impact-slide1.png",
    },
  ];

  const current = points[activePoint];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePoint((prev) => (prev + 1) % points.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full max-w-[1250px] mx-auto px-4 py-12">

      <h2 className={`${fraunces.className} text-4xl font-semibold text-[#1f2937] mb-3`}>
        How We Create Impact
      </h2>

      <p className={`${fraunces.className} text-base text-gray-700 max-w-[900px] mt-2 mb-6`}>
        Through curated performances, workshops, and collaborations, we weave art with purpose:
      </p>

      <div className="hidden lg:grid grid-cols-3 gap-10 mt-8 mb-6">
        {points.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setActivePoint(idx)}
            className="focus:outline-none w-full text-left"
          >
            <div className="flex flex-col items-start text-left w-full">

              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                  activePoint === idx
                    ? "bg-[#00656D] text-[#F7F6F1]"
                    : "bg-[#333333]/10 text-[#333333]"
                }`}
              >
                {p.id}
              </div>

              <h3
                className={`${fraunces.className} mt-3 text-[24px] leading-[36px] font-bold ${
                  activePoint === idx ? "text-[#00656D]" : "text-[#333333]"
                }`}
              >
                {p.title}
              </h3>

              <p
                className={`${fraunces.className} text-[16px] leading-[24px] text-[#333333] mt-1 max-w-[340px]`}
              >
                {p.desc}
              </p>

            </div>
          </button>
        ))}
      </div>

      <div className="lg:hidden mb-6 mt-8">
        <div className="flex flex-col items-start gap-3">
          <div className="w-10 h-10 bg-[#00656D] rounded-full flex items-center justify-center text-[#F7F6F1] font-semibold">
            {current.id}
          </div>

          <h3 className={`${fraunces.className} text-[24px] leading-[32px] font-bold text-[#00656D]`}>
            {current.title}
          </h3>

          <p className={`${fraunces.className} text-[16px] leading-[24px] text-[#333333]`}>
            {current.desc}
          </p>
        </div>
      </div>

      <div className="relative w-full h-[340px] md:h-[560px] lg:h-[660px] rounded-2xl overflow-hidden shadow-lg mt-4 mb-4">

        <Image
          src={current.image}
          alt={current.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-50">
          {points.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActivePoint(idx)}
              className="p-1"
            >
              {activePoint === idx ? (
                <span className="w-3 h-3 rounded-full bg-[#00656D] block" />
              ) : (
                <span className="w-3 h-3 rounded-full border-2 border-[#00656D]/50 block" />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
