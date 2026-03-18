"use client";

import Image from "next/image";
import { Waves, Wrench, Check } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const featureCards = [
  {
    title: "Smart Plumbing Solutions",
    description:
      "We combine modern diagnostics, high-grade materials, and precision repair methods for efficient, long-lasting results.",
    icon: Wrench,
  },
  {
    title: "Property-Focused Care",
    description:
      "Beyond repairs, we ensure your entire plumbing system stays healthy through routine maintenance.",
    icon: Waves,
  },
];

const bottomPoints = [
  "Over 10+ years of plumbing experience",
  "Transparent pricing & detailed service",
  "Rapid emergency response",
  "Customer-first service",
];

const slideLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const contentContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const cardItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const pointsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const WhyChooseUsSection = () => {
  return (
    <section className="overflow-x-hidden bg-[#efefef] py-20 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Images */}
          <motion.div
            variants={slideLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative order-2 lg:order-1 lg:col-span-5"
          >
            <div className="relative mx-auto h-130 w-full max-w-130 md:h-155">
              {/* Top/left tall image */}
              <div className="absolute left-0 top-0 h-90 w-50 overflow-hidden rounded-t-[160px] rounded-b-[160px] md:h-107.5 md:w-85 lg:h-112.5 lg:w-62.5 xl:h-125 xl:w-72.5">
                <Image
                  src="/images/whychooseimage1.jpg"
                  alt="Plumbing tools"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom/center overlapping image */}
              <div className="absolute bottom-0 left-32.5 h-85 w-50 overflow-hidden rounded-t-[140px] rounded-b-[140px] md:left-55 md:h-100 md:w-72.5 lg:left-37.5 lg:h-112.5 lg:w-62.5 xl:left-55 xl:h-125 xl:w-72.5">
                <Image
                  src="/images/whychooseimage2.jpg"
                  alt="Professional plumber"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={contentContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 lg:order-2 lg:col-span-7"
          >
            {/* Label */}
            <motion.div variants={fadeUpVariants} className="mb-5">
              <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#132207]">
                <span className="text-(--primary)">(</span>
                Why Choose Us
                <span className="text-(--primary)">)</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUpVariants} className="max-w-190">
              <h2 className="text-[40px] font-bold leading-[1.08] tracking-[-1.2px] text-[#132207] sm:text-[50px] xl:text-[60px]">
                Reliable and Long-lasting Plumbing Solutions
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUpVariants}
              className="mt-5 max-w-190 text-[18px] leading-8 text-[#5e5e5e]"
            >
              Our focus on expert craftsmanship, advanced plumbing technology,
              and responsive service makes us the trusted partner.
            </motion.p>

            {/* Main card */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-8 rounded-[28px] border-r-[6px] border-(--primary) bg-[#f7f7f7] px-7 py-8 md:px-8 md:py-9"
            >
              <motion.div
                variants={pointsContainerVariants}
                className="space-y-8"
              >
                {featureCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      variants={cardItemVariants}
                      className={`flex gap-5 ${
                        index !== featureCards.length - 1
                          ? "border-b border-black/5 pb-8"
                          : ""
                      }`}
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-(--primary)">
                        <Icon size={24} className="text-[#132207]" />
                      </div>

                      <div>
                        <h3 className="text-[28px] font-bold leading-[1.15] text-[#132207]">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-155 text-[16px] leading-8 text-[#5e5e5e]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Bottom points */}
            <motion.div
              variants={pointsContainerVariants}
              className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2"
            >
              {bottomPoints.map((point) => (
                <motion.div
                  key={point}
                  variants={cardItemVariants}
                  className="flex items-center gap-3 text-[16px] text-[#5e5e5e]"
                >
                  <Check
                    size={18}
                    strokeWidth={3}
                    className="shrink-0 text-(--primary)"
                  />
                  <span>{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;