"use client";

import ContactSection from "@/src/sections/ContactSection";
import HowItWorksSection from "@/src/sections/HowItWorksSection";
import ServicesSection from "@/src/sections/ServicesSection";
import WhyChooseUsSection from "@/src/sections/WyChoseUseSection";
import Link from "next/link";
import React from "react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const textItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Page = () => {
  const headingWords = "Our Services".split(" ");

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-130 overflow-hidden bg-cover bg-center bg-no-repeat md:min-h-100"
        style={{
          backgroundImage: "url('/images/aboutpage.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 z-1 bg-black/50" />

        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 0% 50%, rgba(159,232,112,0.28) 0%, rgba(159,232,112,0.16) 18%, transparent 42%),
              radial-gradient(circle at 100% 50%, rgba(159,232,112,0.22) 0%, rgba(159,232,112,0.12) 18%, transparent 40%),
              linear-gradient(90deg, rgba(159,232,112,0.12) 0%, rgba(159,232,112,0.05) 20%, rgba(159,232,112,0.04) 50%, rgba(159,232,112,0.05) 80%, rgba(159,232,112,0.12) 100%)
            `,
          }}
        />

        {/* Inner shadow */}
        <div
          className="absolute inset-0"
          style={{
            boxShadow: "inset 0 0 180px rgba(0,0,0,0.4)",
          }}
        />

        {/* Content */}
        <div className="container-custom relative z-10 flex min-h-130 items-center pt-28 pb-14 md:min-h-140 md:pt-32 md:pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Heading with STAGGER */}
            <motion.h1
              variants={textContainer}
              className="text-[64px] font-bold leading-[0.95] tracking-[-2px] text-white sm:text-[78px] md:text-[96px] lg:text-[110px]"
            >
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={textItem}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Breadcrumb */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-2 text-[18px] font-medium md:text-[20px]"
            >
              <Link href="/" className="text-(--primary) hover:opacity-90">
                Home
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">Services</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <ServicesSection />
      <HowItWorksSection />
      <ContactSection />
      <WhyChooseUsSection />
    </div>
  );
};

export default Page;