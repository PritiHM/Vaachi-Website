"use client";
import { useState } from "react";
import Image from "next/image";

export default function ImpactSection() {
  const [activePoint, setActivePoint] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const points = [
    {
      id: 1,
      title: "Performance for Change",
      desc: "Theatre and dance productions that spark dialogue on social values.",
      slides: [
        "/images/impact-slide1.png",
        "/images/impact-slide1.png",
        "/images/impact-slide1.png",
      ]
    },
    {
      id: 2,
      title: "Arts Education",
      desc: "Programs for schools and communities that cultivate empathy and expression.",
      slides: [
        "/images/impact-slide1.png",
        "/images/impact-slide1.png",
        "/images/impact-slide1.png",
      ]
    },
    {
      id: 3,
      title: "Cultural Exchange",
      desc: "Collaborations across regions and generations to preserve heritage and foster inclusivity.",
      slides: [
        "/images/impact-slide1.png",
        "/images/impact-slide1.png",
        "/images/impact-slide1.png",
      ]
    },
  ];

  const current = points[activePoint];

  return (
    <section className="max-w-[1250px] w-full mx-auto px-4 mt-6 mb-10">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-4xl font-serif font-semibold text-[#1f2937] mb-3">
          How We Create Impact
        </h2>
        <p className="text-base text-gray-700 max-w-[900px] mt-6">
          Through curated performances, workshops, and collaborations, we weave art with purpose:
        </p>
      </div>

      {/* Points */}
      <div className="grid grid-cols-3 gap-10 mt-16 mb-6">
        {points.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => { 
              setActivePoint(idx);
              setActiveSlide(0);
            }}
            className="focus:outline-none"
          >
            <div className="flex flex-col items-center text-center">

              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm
                  ${activePoint === idx ? "bg-[#00656D] text-white" : "bg-pink-50 text-[#9b6a6a]"}`}
              >
                {p.id}
              </div>

              <div className="mt-3">
                <h3 className={`text-lg font-semibold ${activePoint === idx ? "text-[#00656D]" : "text-gray-800"}`}>
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 max-w-[340px]">
                  {p.desc}
                </p>
              </div>

            </div>
          </button>
        ))}
      </div>

      {/* IMAGE BOX - SAME SIZE EXACTLY */}
      <div className="relative w-full h-[660px] rounded-2xl overflow-hidden shadow-lg mt-10">

        {current.slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out 
              ${i === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        {/* ⭐ Dots INSIDE IMAGE (FIXED) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {current.slides.map((_, idx) => (
            <button key={idx} onClick={() => setActiveSlide(idx)}>
              {activeSlide === idx ? (
                <span className="w-3 h-3 rounded-full bg-[#00656D] block"></span>
              ) : (
                <span className="w-3 h-3 rounded-full border-2 border-[#00656D] block"></span>
              )}
            </button>
          ))}
        </div>

      </div>

    </section>
  );
}
