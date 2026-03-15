import HeroSection from "@/src/sections/HeroSection";
import ServicesSection from "@/src/sections/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection limit={3} showExplore />
    </div>
  );
}
