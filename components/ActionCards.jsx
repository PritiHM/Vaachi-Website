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
    <section className="w-full">
  <div className="w-full max-w-7xl mx-auto mt-5 md:mt-10 lg:mt-20 pb-5 lg:pb-10 px-4 sm:px-0">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

          {cards.map((card) => (
           <article
  key={card.id}
  className="relative rounded-xl shadow-md overflow-hidden bg-[#F7F6F1] 
             min-h-[150px] sm:min-h-[160px] md:min-h-[180px] 
             flex flex-col justify-center items-start text-left 
             p-6 transition-transform duration-200 ease-in-out 
             hover:shadow-lg hover:-translate-y-1"
  aria-labelledby={`card-${card.id}-title`}
>
  <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none -translate-y-1">
    <Image
      src="/images/corner-design1.png"
      alt=""
      width={56}
      height={56}
      className="object-contain"
    />
  </div>

  <div className="mb-4">
    <Image
      src={card.icon}
      alt={card.title}
      width={56}
      height={56}
      className="object-contain"
    />
  </div>

  <h3
    id={`card-${card.id}-title`}
    className={`${fraunces.className} text-base md:text-2xl font-bold text-[#00656D]`}
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
