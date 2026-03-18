"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, animate, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1400, suffix: "+", label: "Completed Projects" },
  { value: 30, suffix: "+", label: "Expert Plumbers" },
  { value: 10, suffix: "+", label: "Years of Experience" },
];

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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

const leftContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const rightContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.25,
    },
  },
};

type CounterProps = {
  value: number;
  suffix?: string;
  isInView: boolean;
};

function CountUpNumber({ value, suffix = "", isInView }: CounterProps) {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section
      ref={sectionRef}
      className="bg-[#ffff] py-8 md:py-10 lg:py-32"
    >
      <div className="m-auto w-full max-w-300 px-5">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12">
          {/* LEFT COLUMN */}
          <motion.div
            variants={leftContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col lg:col-span-4"
          >
            {/* About label */}
            <motion.div variants={fadeUpVariants} className="mb-24">
              <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#132207]">
                <span className="text-(--primary)">(</span>
                About Us
                <span className="text-(--primary)">)</span>
              </span>
            </motion.div>

            {/* Stats */}
            <div className="flex flex-col gap-20 pt-0 lg:pt-55">
              {stats.map((item) => (
                <motion.div key={item.label} variants={fadeUpVariants}>
                  <h3 className="text-[64px] font-bold leading-none tracking-[-2px] text-[#132207] xl:text-[72px]">
                    <CountUpNumber
                      value={item.value}
                      suffix={item.suffix}
                      isInView={isInView}
                    />
                  </h3>

                  <p className="mt-3 text-[18px] leading-none text-[#5e5e5e]">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={rightContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-7 lg:col-start-6"
          >
            {/* Heading */}
            <div className="max-w-270">
              <motion.h2
                variants={fadeUpVariants}
                className="text-[55px] font-bold leading-[1.02] tracking-[-1.8px] text-[#132207]"
              >
                Trusted Plumbing Experts With Years of Experience
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeUpVariants}
                className="mt-6 max-w-270 text-[18px] leading-[1.8] text-[#5e5e5e]"
              >
                At Roplumb, we deliver high-quality plumbing services backed by
                professional expertise, modern tools, and commitment to customer
                satisfaction. Our team of licensed and insured technicians ensures
                every project — from minor repairs to full system installations —
                is completed with precision, transparency, and guaranteed
                workmanship.
              </motion.p>

              {/* Button */}
              <motion.div variants={fadeUpVariants} className="mt-8">
                <Link
                  href="/about"
                  className="btn-primary inline-flex items-center gap-2 rounded-2xl px-8 py-4"
                >
                  More About Us
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              variants={imageVariants}
              className="mt-10 max-w-4xl overflow-hidden rounded-[28px]"
            >
              <Image
                src="/images/aboutimage.jpg"
                alt="Professional plumber"
                width={900}
                height={760}
                className="h-90 w-full object-cover md:h-107.5 xl:h-130"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;