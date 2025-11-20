import Image from "next/image";
import { Fraunces, Nunito } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function WhoWeAre() {
  return (
    <section className="w-full flex justify-center mt-5 md:mt-10 lg:mt-20">
      <div
        className="
          bg-[#00656D] text-[#F7F6F1] rounded-2xl shadow-lg relative
           max-w-7xl w-full
          overflow-visible
          pt-2 md:pt-5 pb-8 md:pb-56 mx-6 md:mx-auto
        "
      >
        <div className="absolute top-0 right-0 w-20 h-20  hidden md:block pointer-events-none select-none">
          <Image
            src="/images/corner-design.png"
            alt="corner"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="px-6 md:px-12 pt-4 md:pt-8 pb-6 md:pb-12">
          <h2
            className={`${fraunces.className} text-4xl md:text-6xl font-bold leading-tight tracking-wide`}
          >
            Who We Are
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-6 mt-6 md:mt-10">
            <div>
              <p
                className={`${nunito.className} text-base md:text-xl leading-[1.9] opacity-90 max-w-[600px]`}
              >
                Vaachi Foundation is a non-profit dedicated to cultivating
                human values through the transformative language of performing
                arts.
              </p>
            </div>

            <div>
              <p
                className={`${nunito.className} text-base md:text-xl leading-[1.9] opacity-90 max-w-[600px]`}
              >
                We believe that dance, theatre, music, and storytelling have the
                power to transcend barriers, connecting hearts, shaping
                perspectives, and nurturing a culture of empathy.
              </p>
            </div>
          </div>

          <h3
            className={`${fraunces.className} font-bold text-2xl md:text-4xl mt-8 md:mt-16`}
          >
            At Vaachi, our work centers on:
          </h3>
        </div>

        {/* 3 Boxes */}
        <div className="md:absolute inset-x-6 bottom-8 flex flex-col md:flex-row gap-4 md:gap-6 px-2 md:px-0 z-10 items-start md:items-stretch md:justify-between">
          {/* Box 1 */}
          <div
            className="
              bg-[#F7F6F1] text-[#00656D] rounded-xl shadow-md
              w-full md:flex-1 
              h-[160px] md:h-[220px]
               p-5 md:p-7 flex flex-col justify-start
            "
          >
            <h4
              className={`${fraunces.className} font-bold text-base md:text-2xl mb-1 md:mb-2 leading-tight`}
            >
              Community Engagement
            </h4>
            <p
              className={`${nunito.className} text-base md:text-2xl font-normal leading-relaxed mt-6`}
            >
              Bringing arts to local spaces and schools
            </p>
          </div>

          {/* Box 2 */}
          <div
            className="
              bg-[#F7F6F1] text-[#00656D] rounded-xl shadow-md
              w-full md:flex-1 
              h-[160px] md:h-[220px]
              p-5 md:p-7 flex flex-col justify-start
            "
          >
            <h4
              className={`${fraunces.className} font-bold text-base md:text-2xl mb-1 md:mb-2 leading-tight`}
            >
              Value Amplification
            </h4>
            <p
              className={`${nunito.className} text-base md:text-2xl font-normal leading-relaxed mt-6`}
            >
              Embedding compassion, respect, and harmony through creative
              expression
            </p>
          </div>

          {/* Box 3 */}
          <div
            className="
              bg-[#F7F6F1] text-[#00656D] rounded-xl shadow-md
              w-full md:flex-1 
              h-[160px] md:h-[220px]
              p-5 md:p-7 flex flex-col justify-start
            "
          >
            <h4
              className={`${fraunces.className} font-bold text-base md:text-2xl mb-1 md:mb-2 leading-tight`}
            >
              Cultural Preservation
            </h4>
            <p
              className={`${nunito.className} text-base md:text-2xl font-normal leading-relaxed mt-6`}
            >
              Honoring traditional forms while embracing contemporary voices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
