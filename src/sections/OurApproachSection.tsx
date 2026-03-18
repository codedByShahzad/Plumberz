"use client";

import Image from "next/image";
import { Star, Target, Eye } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const imageGroupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const imageItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: 0.22,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const innerCardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const innerCardItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -14,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const OurApproachSection = () => {
  return (
    <section className="bg-[#efefef] py-20 md:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          {/* LEFT IMAGES */}
          <motion.div
            variants={imageGroupVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative order-2 lg:order-0 lg:col-span-6"
          >
            <div className="relative h-155 w-full md:h-175">
              {/* Top image - shifted right */}
              <motion.div
                variants={imageItemVariants}
                className="absolute right-0 top-0 h-90 w-[78%] overflow-hidden rounded-[22px] md:h-107.5"
              >
                <Image
                  src="/images/approach1.jpg"
                  alt="Approach Image 1"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Bottom image - starts from left */}
              <motion.div
                variants={imageItemVariants}
                className="absolute bottom-0 left-0 h-80 w-[72%] overflow-hidden rounded-[22px] shadow-xl md:h-95"
              >
                <Image
                  src="/images/approach2.jpg"
                  alt="Approach Image 2"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Rating Badge */}
              <motion.div
                variants={badgeVariants}
                className="absolute left-0 top-14 z-10 rounded-[20px] bg-(--primary) px-8 py-7 shadow-lg md:px-10 md:py-8"
              >
                <div className="flex items-center gap-3">
                  <h3 className="text-[54px] font-bold leading-none text-[#132207] md:text-[68px]">
                    4.9
                  </h3>
                  <Star className="fill-black text-white" size={32} />
                </div>

                <p className="mt-4 text-[16px] leading-8 text-[#132207]/75 md:text-[18px]">
                  Average rating from
                  <br />
                  7,000+ clients review
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={contentContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 lg:order-0 lg:col-span-6"
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-[15px] font-semibold text-[#132207]"
            >
              <span className="text-(--primary)">(</span> Our Approach{" "}
              <span className="text-(--primary)">)</span>
            </motion.p>

            <motion.h2
              variants={fadeUpVariants}
              className="mt-4 text-[38px] font-bold leading-[1.1] text-[#132207] md:text-[48px] lg:text-[56px]"
            >
              How we Deliver Reliable
              <br />
              Plumbing Solutions
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="mt-6 max-w-130 text-[16px] leading-8 text-[#132207]/70"
            >
              Our approach is straightforward yet impactful—inspect, diagnose,
              repair, and ensure long-term performance.
            </motion.p>

            {/* CARD */}
            <motion.div
              variants={cardVariants}
              className="mt-10 rounded-[20px] border-r-[6px] border-(--primary) bg-white p-8 shadow-md"
            >
              <motion.div
                variants={innerCardContainerVariants}
                className="space-y-0"
              >
                {/* Mission */}
                <motion.div
                  variants={innerCardItemVariants}
                  className="flex items-start gap-5"
                >
                  <div className="flex items-center justify-center rounded-full border border-(--primary) bg-(--primary) p-2">
                    <Target size={30} className="text-[#132207]" />
                  </div>

                  <div>
                    <h4 className="text-[20px] font-bold text-[#132207]">
                      Our Mission
                    </h4>
                    <p className="mt-2 text-[15px] leading-7 text-[#132207]/70">
                      Backed by decades of plumbing expertise, we provide
                      dependable repair, installation, and maintenance.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={innerCardItemVariants}
                  className="my-6 h-px w-full bg-[#e5e5e5]"
                />

                {/* Vision */}
                <motion.div
                  variants={innerCardItemVariants}
                  className="flex items-start gap-5"
                >
                  <div className="flex items-center justify-center rounded-full border border-(--primary) bg-(--primary) p-2">
                    <Eye size={30} className="text-[#132207]" />
                  </div>

                  <div>
                    <h4 className="text-[20px] font-bold text-[#132207]">
                      Our Vision
                    </h4>
                    <p className="mt-2 text-[15px] leading-7 text-[#132207]/70">
                      To be the most trusted plumbing partner, delivering safe,
                      efficient, and sustainable water systems.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;