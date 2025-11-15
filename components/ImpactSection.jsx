"use client";
import { useState } from "react";
import Image from "next/image";

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
      image: "/images/impact-slide3.png",
    },
  ];

  const current = points[activePoint];

  return (
    <section className="max-w-[1250px] w-full mx-auto px-4 mt-6 mb-10">
      <h2 className="text-4xl font-serif font-semibold text-[#1f2937] mb-3">How We Create Impact</h2>
      <p className="text-base text-gray-700 max-w-[900px] mt-2 mb-6">
        Through curated performances, workshops, and collaborations, we weave art with purpose:
      </p>

      <div className="hidden lg:grid grid-cols-3 gap-10 mt-8 mb-6">
        {points.map((p, idx) => (
          <button key={p.id} onClick={() => setActivePoint(idx)} type="button" className="focus:outline-none">
            <div className="flex flex-col items-center text-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${activePoint === idx ? "bg-[#00656D] text-white" : "bg-pink-50 text-[#9b6a6a]"}`}>
                {p.id}
              </div>
              <h3 className={`mt-3 text-lg font-semibold ${activePoint === idx ? "text-[#00656D]" : "text-gray-800"}`}>{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1 max-w-[340px]">{p.desc}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="lg:hidden mb-6 mt-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-[#00656D] rounded-full flex items-center justify-center text-white font-semibold">
            {current.id}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#00656D]">{current.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{current.desc}</p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[480px] md:h-[560px] lg:h-[660px] rounded-2xl overflow-hidden shadow-lg">
        <Image src={current.image} alt={current.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-50">
          {points.map((_, idx) => (
            <button key={idx} onClick={() => setActivePoint(idx)} type="button" aria-label={`Show point ${idx + 1}`} className="p-1">
              {activePoint === idx ? (
                <span className="w-3 h-3 rounded-full bg-white block shadow" />
              ) : (
                <span className="w-3 h-3 rounded-full border-2 border-white block shadow" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
