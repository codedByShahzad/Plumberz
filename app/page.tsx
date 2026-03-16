import Banner from "@/src/components/Banner";
import AboutSection from "@/src/sections/AboutSection";
import FaqSection from "@/src/sections/FaqSection";
import HeroSection from "@/src/sections/HeroSection";
import HowItWorksSection from "@/src/sections/HowItWorksSection";
import PricingSection from "@/src/sections/PricingSection";
import ServicesSection from "@/src/sections/ServicesSection";
import WhyChooseUsSection from "@/src/sections/WyChoseUseSection";
import Image from "next/image";
import contactSection from '../src/sections/ContactSection';
import ContactSection from "../src/sections/ContactSection";
import TestimonialsSection from "@/src/sections/TestimonialSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection limit={3} showExplore />
      <AboutSection />
      <WhyChooseUsSection />
      <Banner />
      <HowItWorksSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <TestimonialsSection /> 
    </div>
  );
}
