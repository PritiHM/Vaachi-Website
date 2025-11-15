import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import VoiceHero from "@/components/VoiceHero";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";
import ContactUs from "@/components/ContactUs";
import ActionCards from "@/components/ActionCards";


export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <VoiceHero />
      <ImpactSection />
      <ContactSection />
      <ContactUs />
      <ActionCards />
    </>
  );
}
