import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white flex justify-center px-4">
      <div
        className="
          bg-[#00656D] text-[#F7F6F1] rounded-2xl shadow-lg relative
          mx-auto max-w-[1250px] w-full my-6
          overflow-visible
          pt-12 md:pt-16 pb-5 md:pb-56
        "
      >
        <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none select-none">
          <Image
            src="/images/corner-design.png"
            alt="corner"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="px-6 md:px-12 pt-4 md:pt-8 pb-6 md:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-6">
            <div>
              <div className="max-w-[320px] w-full">
                <Image
                  src="/images/who-we-are.png"
                  alt="Who We Are"
                  width={320}
                  height={70}
                  className="object-contain w-full h-auto"
                />
              </div>

              <p className="text-base md:text-lg leading-[1.9] opacity-90 max-w-[600px] mt-6 md:mt-10">
                Vaachi Foundation is a non-profit dedicated to cultivating
                human values through the transformative language of performing arts.
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg leading-[1.9] opacity-90 max-w-[600px] mt-6 md:mt-10">
                We believe that dance, theatre, music, and storytelling have the power to
                transcend barriers, connecting hearts, shaping perspectives, and nurturing a culture of empathy.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-12">
            <Image
              src="/images/centers-on.png"
              alt="Centers On"
              width={560}
              height={85}
              className="object-contain w-full max-w-[560px] h-auto"
            />
          </div>
        </div>

        <div className="md:absolute left-6 right-6 bottom-8 flex flex-col md:flex-row gap-4 md:gap-6 px-2 md:px-0 z-10 items-start justify-start">
          <div
            className="
              bg-[#F7F6F1] text-[#00656D] rounded-xl shadow-md
              w-full md:w-[360px] h-[190px]
              p-5 md:p-7 flex flex-col justify-start
            "
          >
            <h4 className="font-fraunces font-extrabold text-lg md:text-xl mb-1 md:mb-2 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              Community Engagement
            </h4>
            <p className="text-sm md:text-base font-normal leading-relaxed mt-2">
              Bringing arts to local spaces and<br /> schools
            </p>
          </div>

          <div
            className="
              bg-[#F7F6F1] text-[#00656D] rounded-xl shadow-md
              w-full md:w-[360px] h-[190px]
              p-5 md:p-7 flex flex-col justify-start
            "
          >
            <h4 className="font-fraunces font-extrabold text-lg md:text-xl mb-1 md:mb-2 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              Value Amplification
            </h4>
            <p className="text-sm md:text-base leading-relaxed mt-2">
              Embedding compassion, respect, and harmony through creative expression
            </p>
          </div>

          <div
            className="
              bg-[#F7F6F1] text-[#00656D] rounded-xl shadow-md
              w-full md:w-[360px] h-[190px]
              p-5 md:p-7 flex flex-col justify-start
            "
          >
            <h4 className="font-fraunces font-extrabold text-lg md:text-xl mb-1 md:mb-2 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              Cultural Preservation
            </h4>
            <p className="text-sm md:text-base leading-relaxed mt-2">
              Honoring traditional forms while embracing contemporary voices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
