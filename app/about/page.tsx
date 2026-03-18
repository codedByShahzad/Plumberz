'use client'

import Banner from "@/src/components/Banner";
import AboutSection from "@/src/sections/AboutSection";
import FaqSection from "@/src/sections/FaqSection";
import OurApproachSection from "@/src/sections/OurApproachSection";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
const page = () => {
  const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const breadcrumbVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

  return (
    <main>
      {/* Hero Section */}
      <section
      className="relative min-h-130 overflow-hidden bg-cover bg-center bg-no-repeat md:min-h-140"
      style={{
        backgroundImage: "url('/images/aboutpage.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-1 bg-black/50" />

      {/* Green gradient overlay */}
      <div
        className="absolute inset-0 z-2"
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
        className="absolute inset-0 z-3"
        style={{
          boxShadow: "inset 0 0 180px rgba(0,0,0,0.4)",
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 flex min-h-130 items-center pt-28 pb-14 md:min-h-140 md:pt-32 md:pb-16">
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={headingVariants}
            className="text-[64px] font-bold leading-[0.95] tracking-[-2px] text-white sm:text-[78px] md:text-[96px] lg:text-[110px]"
          >
            About Us
          </motion.h1>

          {/* Breadcrumb */}
          <motion.div
            variants={breadcrumbVariants}
            className="mt-8 flex items-center gap-2 text-[18px] font-medium md:text-[20px]"
          >
            <Link href="/" className="text-(--primary) hover:opacity-90">
              Home
            </Link>
            <span className="text-white">/</span>
            <span className="text-white">About</span>
          </motion.div>
        </motion.div>
      </div>
    </section>

      <AboutSection />
      <OurApproachSection />
      <Banner />
      <FaqSection />
    </main>
  );
};

export default page;