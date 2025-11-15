"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ImpactSection() {
  const [activePoint, setActivePoint] = useState(0);
  const points = [
    {
      id: 1,
      title: "Performance for Change",
      desc: "Theatre and dance productions that spark dialogue on social values.",
    },
    {
      id: 2,
      title: "Arts Education",
      desc: "Programs for schools and communities that cultivate empathy and expression.",
    },
    {
      id: 3,
      title: "Cultural Exchange",
      desc: "Collaborations across regions and generations to preserve heritage and foster inclusivity.",
    },
  ];

  const images = [
    "/images/impact-slide1.png",
    "/images/impact-slide2.png",
    "/images/impact-slide3.png"
  ];

  const listRef = useRef(null);
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${activePoint}"]`);
    el?.scrollIntoView?.({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activePoint]);

  return (
    <section className="w-full flex justify-center bg-white py-8 sm:py-12">
      <div className="w-full max-w-[1250px] px-4">
        <div className="grid lg:grid-cols-[48%_52%] gap-8 items-start">
          <div>
            <h2 className="text-4xl font-serif font-semibold text-[#1f2937]">
              How We Create Impact
            </h2>
            <p className="text-base text-gray-700 mt-4 max-w-[640px]">
              Through curated performances, workshops, and collaborations, we weave art with purpose:
            </p>
          </div>

          <div className="w-full">
            <div ref={listRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              {points.map((p, idx) => (
                <button
                  key={p.id}
                  data-idx={idx}
                  type="button"
                  onClick={() => setActivePoint(idx)}
                  aria-pressed={activePoint === idx}
                  className={`w-full text-center p-4 rounded-lg transition-shadow duration-200 ${
                    activePoint === idx ? "shadow-lg" : "shadow-sm"
                  }`}
                >
                  <div
                    className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                      activePoint === idx ? "bg-[#00656D] text-white" : "bg-pink-50 text-[#9b6a6a]"
                    }`}
                  >
                    {p.id}
                  </div>
                  <h3 className={`mt-3 text-lg font-semibold ${activePoint === idx ? "text-[#00656D]" : "text-gray-800"}`}>
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg mt-6">
          <div className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] lg:h-[660px]">
            <Image
              src={images[activePoint]}
              alt={`impact ${activePoint + 1}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-50 pointer-events-auto">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePoint(idx)}
                aria-label={`Show ${idx + 1}`}
                className="p-1"
              >
                {activePoint === idx ? (
                  <span className="w-3 h-3 rounded-full bg-[#00656D] block"></span>
                ) : (
                  <span className="w-3 h-3 rounded-full border-2 border-[#00656D] block"></span>
                )}
              </button>
            ))}
          </div>

          <div className="lg:hidden mt-4 px-3">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-[#00656D] text-white">
                  {points[activePoint].id}
                </div>
                <div>
                  <h4 className="text-base font-semibold">{points[activePoint].title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{points[activePoint].desc}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
