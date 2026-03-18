"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Ryan Matthews",
    role: "Senior Master Plumber",
    image: "/images/team1.jpg",
  },
  {
    id: 2,
    name: "Olivia Chen",
    role: "Lead Leak Detection Specialist",
    image: "/images/team2.jpg",
  },
  {
    id: 3,
    name: "Marcus Alvarez",
    role: "Water Heater & Boiler Technician",
    image: "/images/team3.jpg",
  },
  {
    id: 4,
    name: "Daniel Brooks",
    role: "Pipe Installation Expert",
    image: "/images/team4.jpg",
  },
  {
    id: 5,
    name: "Sophia Miller",
    role: "Drain Cleaning Specialist",
    image: "/images/team5.jpg",
  },
  {
    id: 6,
    name: "Ethan Carter",
    role: "Emergency Service Technician",
    image: "/images/team6.jpg",
  },
];

const socialLinks = [
  { icon: FaFacebookF, href: "/" },
  { icon: FaTwitter, href: "/" },
  { icon: FaYoutube, href: "/" },
  { icon: FaInstagram, href: "/" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
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
    y: 20,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const TeamSection = () => {
  const headingWords = "Meet Our Plumbing Professionals".split(" ");

  return (
    <section className="bg-[#efefef] py-20 md:py-24">
      <div className="max-w-325 w-full m-auto px-5">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="mb-5 flex justify-center">
            <p className="text-[15px] font-semibold text-[#132207]">
              <span className="text-(--primary)">(</span> Team{" "}
              <span className="text-(--primary)">)</span>
            </p>
          </motion.div>

          {/* Heading (STAGGER) */}
          <motion.div
            variants={textContainer}
            className="mx-auto max-w-245 text-center"
          >
            <h2 className="text-[40px] font-bold leading-[1.08] tracking-[-1.2px] text-[#132207] md:text-[52px] lg:text-[64px]">
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={textItem}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative overflow-hidden rounded-3xl bg-[#d9d9d9]"
              >
                {/* Image */}
                <div className="relative h-130 w-full md:h-155">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 rounded-[22px] bg-[#f5f5f5] px-6 py-5 text-center shadow-md md:px-7 md:py-6">
                  <h3 className="text-[28px] font-bold leading-[1.1] text-[#132207]">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-[16px] leading-7 text-[#132207]/70">
                    {member.role}
                  </p>

                  <div className="mt-6 flex items-center justify-center gap-4">
                    {socialLinks.map(({ icon: Icon, href }, index) => (
                      <Link
                        key={index}
                        href={href}
                        className="flex items-center justify-center rounded-full bg-(--primary) p-2 text-[#132207] transition-transform duration-300 hover:scale-110"
                      >
                        <Icon size={20} />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;