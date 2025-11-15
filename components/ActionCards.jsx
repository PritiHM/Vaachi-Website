export default function ActionCards() {
  const cards = [
    { id: 1, title: "Volunteer", icon: "/images/volunteer.png" },
    { id: 2, title: "Donate", icon: "/images/donate.png" },
    { id: 3, title: "Partner with Us", icon: "/images/partner.png" },
  ];

  return (
    <section className="w-full py-12 bg-white my-12">

      {/* FULL WIDTH GRID — NO SIDE MARGIN */}
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
            <img
              src='/images/corner-design1.png'
              className='absolute top-0 right-0 w-16 opacity-30 pointer-events-none'
            />

            <img
              src={card.icon}
              className='w-10 h-10 sm:w-12 sm:h-12 mb-4 object-contain'
            />

            <h3 className='text-base sm:text-lg font-extrabold text-[#00656D]'>
              {card.title}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}
