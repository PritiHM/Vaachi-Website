import Image from "next/image";

export default function ActionCards() {
  const cards = [
    { id: 1, title: "Volunteer", icon: "/images/volunteer.png" },
    { id: 2, title: "Donate", icon: "/images/donate.png" },
    { id: 3, title: "Partner with Us", icon: "/images/partner.png" },
  ];

  return (
    <section className="w-full py-12 bg-white my-12">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="
              relative bg-white shadow-xl rounded-xl
              min-h-[140px] sm:min-h-[160px] md:min-h-[180px]
              flex flex-col justify-center items-center text-center
              px-5 py-6 border border-gray-100
              transition-transform duration-200 ease-in-out
              hover:shadow-lg hover:-translate-y-1
            "
          >
            <Image
              src="/images/corner-design1.png"
              alt="corner"
              width={64}
              height={64}
              className="absolute bottom-2 right-2 w-12 h-12 opacity-30 pointer-events-none"
            />

            <Image
              src={card.icon}
              alt={card.title}
              width={48}
              height={48}
              className="mb-4 object-contain"
            />

            <h3 className="text-base sm:text-lg font-extrabold text-[#00656D]">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
