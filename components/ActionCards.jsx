"use client";
import Image from "next/image";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ActionCards() {
  const cards = [
    { id: 1, title: "Partner with Us", icon: "/images/partner.png" },
    { id: 2, title: "Volunteer", icon: "/images/volunteer.png" },
    { id: 3, title: "Donate", icon: "/images/donate.png" },
  ];

  return (
    <section className="section w-full">
      <div className="w-full max-w-7xl mx-auto mt-5 md:mt-10 lg:mt-20 pb-5 lg:pb-10 px-4 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card) => (
            <article
              key={card.id}
              className={`
  relative rounded-xl 
  shadow-[0_0_12px_rgba(0,0,0,0.12)]  
  hover:shadow-[0_0_18px_rgba(0,0,0,0.16)] 
  transition-shadow duration-200

  sm:shadow-[0_0_10px_rgba(0,0,0,0.10)]
  sm:hover:shadow-[0_0_15px_rgba(0,0,0,0.14)]

  bg-[#F7F6F1]
  min-h-[135px]
  flex flex-col justify-center items-start 
  p-6 
  hover:-translate-y-1
`}

              aria-labelledby={`card-${card.id}-title`}
            >
              {/* Pattern: bigger on mobile, smaller on sm+ */}
              <div className="absolute bottom-0 right-0 opacity-25 pointer-events-none z-0">
                {/* Next/Image width/height kept large by default (mobile), but CSS overrides size on sm+ */}
                <Image
                  src="/images/corner-design1.png"
                  alt=""
                  width={90}
                  height={90}
                  className="w-[90px] h-[90px] sm:w-[70px] sm:h-[70px] object-contain"
                />
              </div>

              {/* Icon/content on top */}
              <div className="mb-4 z-10">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </div>

              <h3
                id={`card-${card.id}-title`}
                className={`${fraunces.className} text-base md:text-2xl font-bold text-[#00656D] z-10`}
              >
                {card.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
