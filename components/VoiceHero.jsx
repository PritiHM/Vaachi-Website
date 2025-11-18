"use client";
import Image from "next/image";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function VoiceHero() {
  return (
    <section className="w-full bg-white flex justify-center  mt-5 md:mt-10 lg:mt-20 px-4 sm:px-0">
      <div className="w-full max-w-7xl mx-auto">

        <div className="relative rounded-2xl overflow-hidden mt-[20px] mb-[70px]">

          <div className="
            relative w-full
            h-[450px]          
            sm:h-[500px]
            md:h-[650px]      
            lg:h-[750px]      
          ">
            <Image
              src="/images/voice-bg.png"
              alt="Vaachi Foundation Performance"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1250px"
              className="object-cover object-center"
            />
          </div>

          <div
            className="
              mt-4 p-6
              md:mt-0 md:absolute md:bottom-16 md:left-10
              md:max-w-[70%]
              z-30
              text-black md:text-[#F7F6F1]
            "
          >
            <div className="mb-4 md:hidden">
              <Image
                src="/images/voice-world-black.png"
                alt="heading mobile"
                width={300}
                height={100}
                className="w-[250px] sm:w-[300px] object-contain"
              />
            </div>

            
            <div className="hidden md:block mb-7">
              <Image
                src="/images/voice-world.png"
                alt="heading desktop"
                width={600}
                height={140}
                className="w-[450px] lg:w-[600px] object-contain"
              />
            </div>

            <p className={`${fraunces.className} text-base sm:text-lg md:text-2xl leading-relaxed`}>
              Our initiatives and performances have found resonance in communities
              <br className="hidden md:block" />
              and conversations around art, education, and social change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
