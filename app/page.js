import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import VoiceHero from "@/components/VoiceHero";
import ImpactSection from "@/components/ImpactSection";
import ContactForm from "@/components/ContactForm";
import JoinWaitList from "@/components/JoinWaitList";
import ActionCards from "@/components/ActionCards";
import BrandStrip from "@/components/BrandStrip";

export default function Home() {
  return (
    <div className="bg-[#F7F6F1]">
      <Hero />
      <WhoWeAre />
      <VoiceHero />
      <BrandStrip />
      <ImpactSection />
      <ContactForm />
      <JoinWaitList />
      <ActionCards />
    </div>
  );
}
