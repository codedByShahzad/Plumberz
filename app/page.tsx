import AboutSection from "@/src/sections/AboutSection";
import HeroSection from "@/src/sections/HeroSection";
import ServicesSection from "@/src/sections/ServicesSection";
import WhyChooseUsSection from "@/src/sections/WyChoseUseSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection limit={3} showExplore />
      <AboutSection />
      <WhyChooseUsSection />
    </div>
  );
}
