export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#00656D] text-white py-12 overflow-hidden scroll-mt-20 md:scroll-mt-24"
    >
      <div className="absolute top-0 right-0 w-20 h-20 opacity-40 pointer-events-none">
        <img
          src="/images/corner-design.png"
          alt="corner design"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-start justify-between gap-8 px-5 md:px-0">
        <div className="w-full md:w-6/12 pl-[2px] md:pl-[2px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
            Get in touch
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-lg opacity-90">
            Every voice matters. Every gesture adds to the harmony.<br />
            Whether you're an artist, supporter.
          </p>
        </div>

        <div className="w-full md:w-5/12 flex flex-col md:flex-row md:justify-end justify-start items-center md:items-center gap-6 md:gap-10 px-4 md:px-0">
          <div className="flex flex-col items-center text-center gap-2">
            <img
              src="/images/envelope.png"
              alt="email"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
            />
            <a
              href="mailto:contact@vaachi.org"
              className="text-sm sm:text-base md:text-lg hover:underline break-words"
            >
              contact@vaachi.org
            </a>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <img
              src="/images/phone.png"
              alt="phone"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
            />
            <a
              href="tel:+91 9170916622"
              className="text-sm sm:text-base md:text-lg hover:underline"
            >
              +91 1234567891
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
