"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const pricingPlans = [
  {
    id: 1,
    title: "Basic Fix",
    description:
      "Perfect for small, quick plumbing issues. Lorem ipsum dolor sit.",
    price: "$49",
    per: "/Service",
    features: [
      { text: "Moderate pipe repair or replacement", available: true },
      { text: "Pressure check & system assessment", available: false },
      { text: "Sink, toilet, and drain troubleshooting", available: true },
      { text: "Same-day appointment (when available)", available: false },
    ],
    buttonText: "Get This Plan",
    featured: false,
  },
  {
    id: 2,
    title: "Standard Repair",
    description:
      "Our most popular plan for common plumbing problem. Lorem ipsum dolor.",
    price: "$129",
    per: "/Service",
    features: [
      { text: "Moderate pipe repair or replacement", available: true },
      { text: "Pressure check & system assessment", available: true },
      { text: "Sink, toilet, and drain troubleshooting", available: true },
      { text: "Same-day appointment (when available)", available: false },
    ],
    buttonText: "Choose Standard Plan",
    featured: true,
  },
  {
    id: 3,
    title: "Premium Care",
    description: "Full-coverage plumbing service with priority handling.",
    price: "$249",
    per: "/Service",
    features: [
      { text: "Moderate pipe repair or replacement", available: true },
      { text: "Pressure check & system assessment", available: true },
      { text: "Sink, toilet, and drain troubleshooting", available: true },
      { text: "Same-day appointment (when available)", available: true },
    ],
    buttonText: "Get Premium Care",
    featured: false,
  },
];

const sectionVariants: Variants = {
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
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const featureListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const featureItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const PricingSection = () => {
  return (
    <section className="bg-[#efefef] py-20 md:py-24">
      <div className="m-auto w-full max-w-375 px-5">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {/* Label */}
          <motion.div
            variants={fadeUpVariants}
            className="mb-6 flex justify-center"
          >
            <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#132207]">
              <span className="text-(--primary)">(</span>
              Our Pricing Plan
              <span className="text-(--primary)">)</span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mb-14 max-w-220 text-center"
          >
            <h2 className="text-[40px] font-bold leading-[1.08] tracking-[-1.2px] text-[#132207] sm:text-[52px] xl:text-[62px]">
              Simple, Transparent Pricing
              <br />
              With no Hidden Fees
            </h2>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={sectionVariants}
            className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          >
            {pricingPlans.map((plan) => {
              const isFeatured = plan.featured;

              return (
                <motion.div
                  key={plan.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    },
                  }}
                  className={`group rounded-[28px] border-r-[6px] px-6 py-8 will-change-transform md:px-7 md:py-9 ${
                    isFeatured
                      ? "border-transparent bg-(--primary) hover:border-black hover:shadow-lg"
                      : "border-transparent bg-[#f7f7f7] hover:border-(--primary) hover:shadow-lg"
                  }`}
                  style={{ transformOrigin: "center bottom" }}
                >
                  {/* Title */}
                  <div className="text-center">
                    <h3 className="text-[28px] font-bold leading-[1.2] text-[#132207]">
                      {plan.title}
                    </h3>

                    <p className="mx-auto mt-4 max-w-72.5 text-[16px] leading-8 text-[#5e5e5e]">
                      {plan.description}
                    </p>

                    <div className="mt-6">
                      <div className="text-[64px] font-bold leading-none tracking-[-2px] text-[#132207]">
                        {plan.price}
                      </div>
                      <p className="mt-3 text-[16px] text-[#5e5e5e]">
                        {plan.per}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className={`my-8 h-0.5 w-full ${
                      isFeatured ? "bg-black/10" : "bg-black/8"
                    }`}
                  />

                  {/* Features */}
                  <motion.div
                    variants={featureListVariants}
                    className="space-y-4"
                  >
                    {plan.features.map((feature) => (
                      <motion.div
                        key={feature.text}
                        variants={featureItemVariants}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={18}
                          className={`mt-1 shrink-0 ${
                            feature.available
                              ? isFeatured
                                ? "text-black"
                                : "text-(--primary)"
                              : "text-gray-400"
                          }`}
                        />

                        <span
                          className={`text-[16px] leading-8 ${
                            feature.available
                              ? "text-[#4f4f4f]"
                              : "text-gray-400 line-through"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Button */}
                  <div className="mt-10">
                    <Link
                      href="/contact"
                      className={`flex w-full items-center justify-center rounded-[14px] px-6 py-4 text-[16px] font-semibold transition-opacity duration-300 ${
                        isFeatured
                          ? "bg-[#132207] text-white hover:opacity-95"
                          : "bg-(--primary) text-[#132207] hover:opacity-95"
                      }`}
                    >
                      {plan.buttonText}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;