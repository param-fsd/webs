import HeroSection from "@/components/HeroSection";
import PremiumIntro from "@/components/PremiumIntro";
import ProjectCards from "@/components/ProjectCards";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhoWeAre from "../components/WhoWeAre";
import QuoteSection from "../components/QuoteSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PremiumIntro />
      <QuoteSection/>
      <ProjectCards />
      <WhoWeAre />
      <ContactSection />
      <TestimonialsSection/>
    </>
  );
}