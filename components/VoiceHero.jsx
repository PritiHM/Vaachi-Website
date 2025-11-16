"use client";
import Image from "next/image";

export default function VoiceHero() {
  return (
    <div className="w-full max-w-[1250px] h-auto mt-[20px] mb-[70px] mx-auto">

      {/* OUTER WRAPPER */}
      <div className="relative rounded-3xl shadow-lg overflow-visible">

        {/* BACKGROUND IMAGE (kept rounded + overflow-hidden so image corners are clean) */}
        <div className="w-full h-[450px] sm:h-[500px] md:h-[650px] lg:h-[750px] relative rounded-3xl overflow-hidden">
          <Image
            src="/images/voice-bg.png"
            alt="Vaachi Foundation Performance"
            fill
            priority
            className="object-cover object-center"
          />

          {/* DARK OVERLAY (only visual) */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

       
        <div
          className="
            mt-4 p-6
            md:mt-0 md:absolute md:bottom-16 md:left-10
            md:max-w-[70%]
            z-30
            text-black md:text-white
          "
        >
        
<Image
  src="/images/voice-world-black.png"
  alt="heading mobile"
  width={300}
  height={100}
  className="mb-4 w-[250px] sm:w-[300px] md:hidden"
/>

{/* DESKTOP: white-text heading image (visible on md+ only) */}
<Image
  src="/images/voice-world.png"
  alt="heading desktop"
  width={300}
  height={100}
  className="mb-4 md:mb-7 w-[250px] sm:w-[300px] md:w-[450px] lg:w-[600px] hidden md:block"
/>

          <p className="text-base sm:text-lg md:text-2xl opacity-95">
            Our initiatives and performances have found resonance in communities
            <br className="hidden md:block" />
            and conversations around art, education, and social change.
          </p>
        </div>
      </div>
    </div>
  );
}
