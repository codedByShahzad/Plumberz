"use client";

import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const steps = [
  {
    title: "Submit Your Service Request",
    description:
      "Send us the details of your plumbing issue through our online form, WhatsApp, or phone call.",
  },
  {
    title: "On-Site Inspection",
    description:
      "Our technician arrives on schedule to perform a thorough inspection, identify the root cause, and recommend the most efficient solution.",
  },
  {
    title: "Professional Repair & Service",
    description:
      "Once approved, we begin the repair or installation using modern tools and premium-grade materials.",
  },
  {
    title: "Final Testing & Completion",
    description:
      "We run a complete performance test to ensure everything works perfectly, provide a clear explanation of the work done.",
  },
];

const containerVariants: Variants = {
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

const stepVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 70,
    scale: 0.97,
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

const supportCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: 0.25,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6"
          >
            {/* Label */}
            <motion.div variants={fadeUpVariants} className="mb-6">
              <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#132207]">
                <span className="text-(--primary)">(</span>
                How it Works
                <span className="text-(--primary)">)</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUpVariants} className="max-w-190">
              <h2 className="text-[40px] font-bold leading-[1.08] tracking-[-1.2px] text-[#132207] sm:text-[52px] xl:text-[60px]">
                Fast, Simple, and Stress-Free Plumbing Service
              </h2>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={fadeUpVariants} className="relative mt-10">
              <div className="absolute left-3.75 top-0 h-full w-px bg-(--primary)/70" />

              <motion.div
                variants={containerVariants}
                className="space-y-5"
              >
                {steps.map((step) => (
                  <motion.div
                    key={step.title}
                    variants={stepVariants}
                    className="relative flex gap-5"
                  >
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--primary)">
                      <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent" />
                    </div>

                    <div className="-mt-1">
                      <h3 className="text-[28px] font-bold leading-[1.2] text-[#132207]">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-155 text-[16px] leading-8 text-[#5e5e5e]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image + Support Card */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto w-full max-w-132.5">
              <div className="overflow-hidden rounded-[26px]">
                <Image
                  src="/images/howitworks.jpg"
                  alt="Plumber discussing service with customer"
                  width={900}
                  height={900}
                  className="h-115 w-full object-cover sm:h-130 lg:h-180"
                />
              </div>

              {/* Support card */}
              <motion.div
                variants={supportCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="absolute bottom-0 right-0 w-58.75 rounded-tl-[26px] rounded-br-[26px] rounded-tr-none rounded-bl-none bg-(--primary) px-7 py-6 sm:w-63.75 sm:px-8 sm:py-7"
              >
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80">
                    <PhoneCall size={28} className="text-[#132207]" />
                  </div>
                </div>

                <h3 className="mt-5 text-center text-[20px] font-bold leading-[1.2] text-[#132207]">
                  Customer Support
                </h3>

                <div className="mt-3 space-y-1 text-center font-medium">
                  <p className="text-[16px] text-[#35511b]">+1238 439 3332</p>
                  <p className="text-[16px] text-[#35511b]">+82 82923 929</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;