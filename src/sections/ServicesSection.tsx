"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { servicesData } from "../lib/servicesdata";

type ServicesSectionProps = {
  limit?: number;
  showExplore?: boolean;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

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

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
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

const ServicesSection = ({
  limit,
  showExplore,
}: ServicesSectionProps) => {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="bg-[#f0f0f0] py-20 md:py-24">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Top Label */}
          <motion.div
            variants={fadeUpVariants}
            className="mb-6 flex justify-center"
          >
            <span className="text-sm font-semibold text-[#132207] md:text-base">
              <span className="text-(--primary)">(</span>{" "}
              Plumbing Services We Offer{" "}
              <span className="text-(--primary)">)</span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mb-14 max-w-225 text-center"
          >
            <h2 className="text-[40px] font-bold leading-[1.1] text-[#132207] sm:text-[52px] md:text-[60px]">
              We Fix Leaks, Clogs, and Everything In Between
            </h2>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {displayedServices.map((service) => (
              <motion.div key={service.id} variants={cardVariants}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>

          {/* Explore Services */}
          {showExplore && (
            <motion.div
              variants={fadeUpVariants}
              className="mt-10 text-center text-[16px] text-[#555]"
            >
              Don’t see the service you want?{" "}
              <Link
                href="/services"
                className="font-semibold text-(--primary) hover:underline"
              >
                Explore more services.
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;