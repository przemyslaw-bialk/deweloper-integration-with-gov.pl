import ContactSection from "@/components/(FRONTEND)/contact-section/ContactSection";
import Features from "@/components/(FRONTEND)/features/Features";
import Hero from "@/components/(FRONTEND)/hero/Hero";
import OurOffer from "@/components/(FRONTEND)/our-offer/OurOffer";
import WhyUs from "@/components/(FRONTEND)/why-us/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <OurOffer />
      <WhyUs />
      <ContactSection />
    </>
  );
}
