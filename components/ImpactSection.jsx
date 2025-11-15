"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ImpactSection() {
  const [activePoint, setActivePoint] = useState(0);
  const mobileListRef = useRef(null);

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
    "/images/impact1.png", // image for point 1
    "/images/impact2.png", // image for point 2
    "/images/impact3.png", // image for point 3
  ];

  // when activePoint changes, scroll mobile list so that the active card is centered
  useEffect(() => {
    const el = mobileListRef.current;
    if (!el) return;
    const child = el.children[activePoint];
    if (child) {
      child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activePoint]);

  return (
    <section className="w-full flex justify-center bg-white py-8 sm:py-12">
      <div className="w-full max-w-[1250px] px-4">

        {/* TOP: header + intro */}
        <div className="grid lg:grid-cols-[48%_52%] gap-8 items-start">
          <div>
            <h2 className="text-4xl font-serif font-semibold text-[#1f2937]">
              How We Create Impact
            </h2>
            <p className="text-base text-gray-700 mt-4 max-w-[640px]">
              Through curated performances, workshops, and collaborations, we weave art with purpose:
            </p>
          </div>

          {/* Desktop: show points in grid; Mobile: this area is hidden (we show mobile version below) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-6">
              {points.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePoint(idx)}
                  className="text-left focus:outline-none"
                  aria-pressed={activePoint === idx}
                >
                  <div className="flex flex-col items-start">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm
                      ${activePoint === idx ? "bg-[#00656D] text-white" : "bg-pink-50 text-[#9b6a6a]"}`}>
                      {p.id}
                    </div>
                    <div className="mt-3">
                      <h3 className={`text-lg font-semibold ${activePoint === idx ? "text-[#00656D]" : "text-gray-800"}`}>
                        {p.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE: single-card visible at a time (horizontal snap) */}
        <div className="lg:hidden mt-8 mb-4 relative">
          {/* arrows */}
          <button
            onClick={() => setActivePoint((p) => Math.max(0, p - 1))}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => setActivePoint((p) => Math.min(points.length - 1, p + 1))}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center"
            aria-label="Next"
          >
            ›
          </button>

          <div
            ref={mobileListRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth px-3 py-2"
          >
            {points.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActivePoint(idx)}
                className={`snap-center min-w-[86%] bg-white rounded-lg p-4 shadow-md transition-transform ${
                  activePoint === idx ? "scale-100" : "scale-95 opacity-75"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm
                    ${activePoint === idx ? "bg-[#00656D] text-white" : "bg-pink-50 text-[#9b6a6a]"}`}>
                    {p.id}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">{p.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* IMAGE BOX */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg mt-6">
          <div className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] lg:h-[660px]">
            <Image
              src={images[activePoint]}
              alt={`impact ${activePoint + 1}`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* DOTS centered below the image */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {images.map((_, idx) => (
              <button
                key={idx}
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
        </div>

      </div>
    </section>
  );
}
