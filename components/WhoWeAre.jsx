import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white flex justify-center px-4">
      <div
        className="
          bg-[#00656D] text-white rounded-2xl shadow-lg relative
          mx-auto max-w-[1250px] w-full my-8
          /* make overflow visible on all sizes so absolute cards won't be clipped */
          overflow-visible
          /* more bottom padding on md+ so absolute cards have room */
          pt-20 md:pt-24 pb-36 md:pb-44
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

        <div className="px-6 md:px-12 pt-6 md:pt-12 pb-6 md:pb-12">
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

              <p className="text-base md:text-lg leading-[1.9] opacity-90 max-w-[600px] mt-6 md:mt-12">
                Vaachi Foundation is a non-profit dedicated to cultivating
                human values through the transformative language of performing arts.
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg leading-[1.9] opacity-90 max-w-[600px] mt-6 md:mt-24">
                We believe that dance, theatre, music, and storytelling have the power to transcend barriers,
                connecting hearts, shaping perspectives, and nurturing a culture of empathy.
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <Image
              src="/images/centers-on.png"
              alt="Centers On"
              width={560}
              height={85}
              className="object-contain w-full max-w-[560px] h-auto"
            />
          </div>
        </div>

      <div
  className="md:absolute left-6 right-6 bottom-6 flex flex-col md:flex-row gap-4 md:gap-6 px-2 md:px-0 z-10"
>
  <div className="bg-white text-[#00656D] rounded-xl shadow-md w-full md:w-[32%]
                  min-h-[220px] md:min-h-[260px] p-6 md:p-10 flex flex-col justify-end">
    <h4 className="font-extrabold text-xl md:text-2xl mb-2">Community Engagement</h4>
    <p className="text-sm md:text-lg font-normal leading-relaxed mt-2">
      Bringing arts to local spaces and schools
    </p>
  </div>

  <div className="bg-white text-[#00656D] rounded-xl shadow-md w-full md:w-[32%]
                  min-h-[220px] md:min-h-[260px] p-6 md:p-10 flex flex-col justify-end">
    <h4 className="font-extrabold text-xl md:text-2xl mb-2">Value Amplification</h4>
    <p className="text-sm md:text-lg leading-relaxed mt-2">
      Embedding compassion, respect, and harmony through creative expression
    </p>
  </div>

  <div className="bg-white text-[#00656D] rounded-xl shadow-md w-full md:w-[32%]
                  min-h-[220px] md:min-h-[260px] p-6 md:p-10 flex flex-col justify-end">
    <h4 className="font-extrabold text-xl md:text-2xl mb-2">Cultural Preservation</h4>
    <p className="text-sm md:text-lg leading-relaxed mt-2">
      Honoring traditional forms while embracing contemporary voices
    </p>
  </div>
</div>
</div>
</section>

  );
}
