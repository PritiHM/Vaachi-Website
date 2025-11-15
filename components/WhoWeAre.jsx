import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="w-full  bg-white  flex justify-center">
      <div
        className="
          bg-[#00656D] text-white rounded-2xl shadow-lg relative overflow-hidden
          mx-24
        "
        style={{ width: "1250px", height: "750px", marginTop: "70px", marginBottom: "70px" }}
      >
        <Image
          src="/images/corner-design.png"
          alt="corner"
          width={120}
          height={120}
          className="absolute top-0 right-0 object-contain pointer-events-none select-none"
        />

        <div className="mx-12 mt-16">
          <div className="grid grid-cols-2 gap-10 mb-6 ml-6">
            <div>
              <Image
                src="/images/who-we-are.png"
                alt="Who We Are"
                width={320}
                height={70}
                className="object-contain mb-3"
              />

              <p className="text-lg leading-[2.0] opacity-90 max-w-[500px] mt-16">
                Vaachi Foundation is a non-profit dedicated to cultivating<br />
                human values through the transformative language of <br />
                performing arts.
              </p>
            </div>

            <div>
              <p className="text-lg leading-[2.0] opacity-90 max-w-[500px] mt-24">
                We believe that dance, theatre, music, and <br />
                storytelling have the power to transcend barriers<br />
                connecting hearts, shaping perspectives, and<br />
                nurturing a culture of empathy.
              </p>
            </div>
          </div>

          <Image
            src="/images/centers-on.png"
            alt="Centers On"
            width={560}
            height={85}
            className="object-contain mb-4 mt-28 ml-6"
          />
        </div>

        {/* 👉 FIXED BOXES AREA */}
        <div className="absolute left-12 right-12 bottom-12 flex gap-6 mt-16 justify-between">

          <div className="bg-white text-[#00656D] rounded-xl shadow-md w-[392px] h-[200px] p-6 flex flex-col justify-end">
            <h4 className="font-extrabold text-2xl mb-3">Community Engagement</h4>
            <p className="text-lg font-normal leading-relaxed mt-8">
              Bringing arts to local spaces and schools
            </p>
          </div>

          <div className="bg-white text-[#00656D] rounded-xl shadow-md w-[392px] h-[200px] p-6 flex flex-col justify-end">
            <h4 className="font-extrabold text-2xl mb-3">Value Amplification</h4>
            <p className="text-lg leading-relaxed mt-4">
              Embedding compassion, respect,<br />
              and harmony through creative expression
            </p>
          </div>

          <div className="bg-white text-[#00656D] rounded-xl shadow-md w-[392px] h-[200px] p-6 flex flex-col justify-end">
            <h4 className="font-extrabold text-2xl mb-3">Cultural Preservation</h4>
            <p className="text-lg leading-relaxed mt-12">
              Honoring traditional forms while embracing contemporary voices
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
