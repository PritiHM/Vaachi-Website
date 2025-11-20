"use client";
import Image from "next/image";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function VoiceHero() {
  return (
    <section className="w-full flex justify-center mt-5 md:mt-10 lg:mt-20 px-4 sm:px-0">
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden mt-[20px]">
          <div
            className="
              relative w-full
              h-[300px]
              sm:h-[400px]
              md:h-[650px]
              lg:h-[750px]
            "
          >
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
              text-left                
              md:text-left           
              text-[#291F1E] md:text-[#F7F6F1]
            "
          >
            <h2
              className={`
                ${fraunces.className}
                md:hidden
                text-2xl
                font-bold leading-tight tracking-wide
                mb-4
                text-left               
              `}
            >
              Our Voice in the World
            </h2>

            <h2
              className={`
                ${fraunces.className}
                hidden md:block
                text-4xl lg:text-5xl
                font-bold leading-tight tracking-wide
                mb-7
                text-[#F7F6F1]
                text-left                
              `}
            >
              Our Voice in the World
            </h2>

            <p
              className={`
                ${fraunces.className}
                text-base sm:text-lg md:text-2xl
                leading-relaxed
                text-left               
              `}
            >
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
