import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import VoiceHero from "@/components/VoiceHero";
import ImpactSection from "@/components/ImpactSection";
import ContactForm from "@/components/ContactForm";
import JoinWaitList from "@/components/JoinWaitList";
import ActionCards from "@/components/ActionCards";


export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <VoiceHero />
      <ImpactSection />
      <ContactForm />
      <JoinWaitList />
      <ActionCards />
    </>
  );
}
