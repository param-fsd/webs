import HeroSection from "@/components/HeroSection";
import PremiumIntro from "@/components/PremiumIntro";
import ProjectCards from "@/components/ProjectCards";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PremiumIntro />
      <ProjectCards />
      <ContactSection />
    </>
  );
}