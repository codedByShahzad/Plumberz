"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Wrench,
  Clock3,
} from "lucide-react";
import type { ServiceItem } from "@/src/lib/servicesdata";

type ServiceDetailContentProps = {
  service: ServiceItem;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
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

const fadeLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function ServiceDetailContent({
  service,
}: ServiceDetailContentProps) {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#132207] py-20 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-(--primary) blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-white blur-3xl" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container-custom relative z-10"
        >

          <div className="grid items-center gap-12 mt-10 lg:grid-cols-2">
            <motion.div variants={fadeLeftVariants}>
              <p className="text-sm font-semibold text-white md:text-base">
                <span className="text-(--primary)">(</span> Professional Service{" "}
                <span className="text-(--primary)">)</span>
              </p>

              <h1 className="mt-4 max-w-3xl text-[38px] font-bold leading-[1.08] text-white sm:text-[50px] md:text-[62px]">
                {service.title}
              </h1>

              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-white/80 md:text-[18px]">
                {service.heroSubtitle}
              </p>

              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/70">
                {service.description}
              </p>

              <motion.div
                variants={fadeUpVariants}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Book This Service
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeRightVariants}
              className="relative mx-auto w-full max-w-140"
            >
              <div className="overflow-hidden rounded-4xl bg-white/10 p-3 backdrop-blur-sm">
                <div className="overflow-hidden rounded-[26px] bg-white">
                  <Image
                    src={service.detailImage}
                    alt={service.title}
                    width={900}
                    height={700}
                    className="h-80 w-full object-cover transition duration-700 hover:scale-105 md:h-107.5"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-20 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container-custom"
        >
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
            <motion.div variants={fadeLeftVariants} className="lg:col-span-5">
              <p className="text-sm font-semibold text-[#132207] md:text-base">
                <span className="text-(--primary)">(</span> Service Overview{" "}
                <span className="text-(--primary)">)</span>
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-[1.1] text-[#132207] md:text-[48px]">
                Reliable Solutions Backed by Professional Work
              </h2>

              <p className="mt-5 text-[16px] leading-8 text-[#5e5e5e]">
                {service.longDescription}
              </p>
            </motion.div>

            <motion.div variants={fadeRightVariants} className="lg:col-span-7">
              <div className="rounded-[30px] bg-[#f7f7f7] p-8 md:p-10">
                <p className="text-[16px] leading-8 text-[#5e5e5e]">
                  {service.longDescription2}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <motion.div
                    variants={scaleInVariants}
                    className="rounded-2xl bg-white p-5 shadow-sm"
                  >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#eef7e8] text-(--primary)">
                      <Clock3 size={22} />
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#132207]">
                      Fast Service
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-[#5e5e5e]">
                      Responsive support with practical solutions you can trust.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={scaleInVariants}
                    className="rounded-2xl bg-white p-5 shadow-sm"
                  >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#eef7e8] text-(--primary)">
                      <Wrench size={22} />
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#132207]">
                      Skilled Experts
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-[#5e5e5e]">
                      Quality workmanship for residential and commercial needs.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={scaleInVariants}
                    className="rounded-2xl bg-white p-5 shadow-sm"
                  >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#eef7e8] text-(--primary)">
                      <ShieldCheck size={22} />
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#132207]">
                      Lasting Results
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-[#5e5e5e]">
                      Durable repairs and installations designed for peace of
                      mind.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#f0f0f0] py-20 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="container-custom"
        >
          <motion.div
            variants={fadeUpVariants}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold text-[#132207] md:text-base">
              <span className="text-(--primary)">(</span> What’s Included{" "}
              <span className="text-(--primary)">)</span>
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-[1.1] text-[#132207] md:text-[52px]">
              Complete Service Features You Can Count On
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleInVariants}
                className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef7e8] text-(--primary)">
                    <CheckCircle2 size={20} />
                  </div>

                  <div>
                    <h3 className="text-[20px] font-semibold leading-[1.3] text-[#132207]">
                      {feature}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#5e5e5e]">
                      Professional support delivered with care, efficiency, and
                      attention to detail.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-20 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container-custom"
        >
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <motion.div variants={fadeLeftVariants}>
              <p className="text-sm font-semibold text-[#132207] md:text-base">
                <span className="text-(--primary)">(</span> Why Choose This
                Service <span className="text-(--primary)">)</span>
              </p>

              <h2 className="mt-4 max-w-2xl text-[36px] font-bold leading-[1.1] text-[#132207] md:text-[52px]">
                Benefits That Make a Real Difference
              </h2>

              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#5e5e5e]">
                We focus on delivering practical plumbing solutions that improve
                reliability, reduce risk, and give you confidence in your home
                or business systems.
              </p>

              <motion.div
                variants={scaleInVariants}
                className="mt-8 overflow-hidden rounded-[30px]"
              >
                <Image
                  src={service.detailImage}
                  alt={service.title}
                  width={900}
                  height={700}
                  className="h-75 w-full object-cover transition duration-700 hover:scale-105 md:h-105"
                />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeRightVariants} className="space-y-5">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleInVariants}
                  className="rounded-[28px] border border-[#ececec] bg-[#fafafa] p-7 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--primary) text-white">
                      <span className="text-sm font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-[24px] font-bold leading-[1.2] text-[#132207]">
                        {benefit.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-7 text-[#5e5e5e]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                variants={scaleInVariants}
                className="rounded-[28px] bg-[#132207] p-8 text-white"
              >
                <h3 className="text-[26px] font-bold leading-[1.2]">
                  Need expert help with this service?
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-white/75">
                  Contact our team today to schedule service, request a quote,
                  or get answers to your plumbing questions.
                </p>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Contact Us Today
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-[#f0f0f0] py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="container-custom"
        >
          <motion.div
            variants={scaleInVariants}
            className="rounded-[36px] bg-[#132207] px-6 py-12 text-center md:px-10 md:py-16"
          >
            <p className="text-sm font-semibold text-white/80 md:text-base">
              <span className="text-(--primary)">(</span> Let’s Get Started{" "}
              <span className="text-(--primary)">)</span>
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-[34px] font-bold leading-[1.1] text-white md:text-[54px]">
              Get Professional Plumbing Service You Can Trust
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-white/75">
              From urgent repairs to routine plumbing solutions, we are ready to
              help protect your property and keep everything flowing smoothly.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Request a Service
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
