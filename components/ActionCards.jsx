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

  const scrollToContact = () => {
    const section = document.getElementById("contact-us");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section w-full">
      <div className="w-full max-w-7xl mx-auto mt-5 md:mt-10 lg:mt-20 pb-5 lg:pb-10 px-4 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card) => (
            <article
              key={card.id}
              onClick={scrollToContact}
              className="cursor-pointer relative rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.12)]  hover:shadow-[0_0_18px_rgba(0,0,0,0.16)]  transition-all duration-300  bg-[#F7F6F1] min-h-[135px] flex flex-col justify-center items-start p-6 hover:-translate-y-1"
              aria-labelledby={`card-${card.id}-title`}
            >
              {/* Decorative Corner Image */}
              <div className="absolute bottom-0 right-0 opacity-75 pointer-events-none z-0">
                <Image
                  src="/images/corner-design1.png"
                  alt=""
                  width={90}
                  height={90}
                  className="w-[90px] h-[90px] sm:w-[70px] sm:h-[70px] object-contain"
                />
              </div>

              {/* Icon */}
              <div className="mb-4 z-10">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={45}
                  height={45}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Card Title */}
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
