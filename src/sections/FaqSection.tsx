"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const faqItems = [
  {
    id: 1,
    question: "Do you offer emergency plumbing services?",
    answer:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
  },
  {
    id: 2,
    question: "How quickly can a technician arrive?",
    answer:
      "Our team aims to respond as quickly as possible depending on your location and service demand. Emergency cases are prioritized for faster arrival.",
  },
  {
    id: 3,
    question: "How do I know which service I need?",
    answer:
      "You can describe your issue through our contact form or phone call, and our team will guide you toward the most suitable plumbing solution.",
  },
  {
    id: 4,
    question: "Are your services covered with a warranty?",
    answer:
      "Yes, many of our plumbing services include workmanship coverage to ensure peace of mind and long-term confidence in the repair.",
  },
  {
    id: 5,
    question: "Do you provide cost estimates before starting the job?",
    answer:
      "Absolutely. We provide clear estimates before work begins so you understand the expected scope, pricing, and service details.",
  },
];

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
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

const faqListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const faqItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const FaqSection = () => {
  const [openId, setOpenId] = useState<number>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? 0 : id));
  };

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 mt-10 lg:order-1 lg:col-span-5 lg:mt-0"
          >
            <div className="relative mx-auto max-w-130 overflow-hidden rounded-3xl">
              <Image
                src="/images/faqimage.jpg"
                alt="Professional plumber working"
                width={900}
                height={1000}
                className="h-155 w-full object-cover lg:h-187.5"
              />

              {/* Overlay Card */}
              <motion.div
                initial={{ opacity: 0, y: -18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 max-w-77.5 rounded-br-3xl bg-[#132207] px-8 py-7 md:max-w-70"
              >
                <h3 className="text-[26px] font-bold leading-[1.05] text-white">
                  Clear Solutions
                  <br />
                  You Need for a
                  <br />
                  <span className="text-(--primary)">Leak-Free Future</span>
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={contentContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="order-1 lg:order-2 lg:col-span-7"
          >
            {/* Label */}
            <motion.div variants={fadeUpVariants} className="mb-5">
              <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#132207]">
                <span className="text-(--primary)">(</span>
                Helpful Answers
                <span className="text-(--primary)">)</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUpVariants} className="max-w-155">
              <h2 className="text-[40px] font-bold leading-[1.08] tracking-[-1.2px] text-[#132207] sm:text-[52px] xl:text-[60px]">
                Frequently Asked
                <br />
                Questions
              </h2>
            </motion.div>

            {/* FAQ */}
            <motion.div
              variants={faqListVariants}
              className="mt-8 space-y-5"
            >
              {faqItems.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <motion.div key={item.id} variants={faqItemVariants}>
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      className={`flex w-full cursor-pointer items-center justify-between rounded-[20px] px-8 py-6 text-left transition-colors duration-300 ${
                        isOpen
                          ? "bg-(--primary)"
                          : "bg-[#f1f1f1] hover:bg-[#ebebeb]"
                      }`}
                    >
                      <span className="pr-4 text-[22px] font-bold leading-[1.3] text-[#132207]">
                        {item.question}
                      </span>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="shrink-0"
                      >
                        <ChevronDown
                          size={28}
                          strokeWidth={2}
                          className="text-[#132207]"
                        />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.22 },
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ y: -8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -8, opacity: 0 }}
                            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                            className="px-8 pt-5 pb-1"
                          >
                            <p className="max-w-190 text-[18px] leading-8 text-[#5e5e5e]">
                              {item.answer}
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;