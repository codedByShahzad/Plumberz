import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

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

const TeamSection = () => {
  return (
    <section className="bg-[#efefef] py-20 md:py-24">
      <div className="max-w-325 w-full m-auto px-5">
        {/* Top label */}
        <div className="mb-5 flex justify-center">
          <p className="text-[15px] font-semibold text-[#132207]">
            <span className="text-(--primary)">(</span> Team{" "}
            <span className="text-(--primary)">)</span>
          </p>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-245 text-center">
          <h2 className="text-[40px] font-bold leading-[1.08] tracking-[-1.2px] text-[#132207] md:text-[52px] lg:text-[64px]">
            Meet Our Plumbing Professionals
          </h2>
        </div>

        {/* Team cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
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

              {/* Bottom content card */}
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
                      className="flex p-2 items-center justify-center rounded-full bg-(--primary) text-[#132207] transition-transform duration-300 hover:scale-105"
                    >
                      <Icon size={20} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;