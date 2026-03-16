import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "1,400+", label: "Completed Projects" },
  { value: "30+", label: "Expert Plumbers" },
  { value: "10+", label: "Years of Experience" },
];

const AboutSection = () => {
  return (
    <section className="bg-[#ffff] py-8 md:py-10">
      <div className="max-w-300 w-full m-auto px-5">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12">

          {/* LEFT COLUMN */}
          <div className="flex flex-col lg:col-span-4">

            {/* About label */}
            <div className="mb-24">
              <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#132207]">
                <span className="text-(--primary)">(</span>
                About Us
                <span className="text-(--primary)">)</span>
              </span>
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-20 pt-0 lg:pt-55">
              {stats.map((item) => (
                <div key={item.label} className="">
                  <h3 className="text-[64px] font-bold leading-none tracking-[-2px] text-[#132207] xl:text-[72px]">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-[18px] leading-none text-[#5e5e5e]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 lg:col-start-6">

            {/* Heading */}
            <div className="max-w-270">
              <h2 className="text-[50px] font-bold leading-[1.02] tracking-[-1.8px] text-[#132207] md:text-[60px] xl:text-[72px]">
                Trusted Plumbing Experts With Years of Experience
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-270 text-[18px] leading-[1.8] text-[#5e5e5e]">
                At Roplumb, we deliver high-quality plumbing services backed by
                professional expertise, modern tools, and commitment to customer
                satisfaction. Our team of licensed and insured technicians ensures
                every project — from minor repairs to full system installations —
                is completed with precision, transparency, and guaranteed
                workmanship.
              </p>

              {/* Button */}
              <div className="mt-8">
                <Link
                  href="/about"
                  className="btn-primary inline-flex items-center gap-2 rounded-2xl px-8 py-4"
                >
                  More About Us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="mt-10 overflow-hidden max-w-4xl rounded-[28px]">
              <Image
                src="/images/aboutimage.jpg"
                alt="Professional plumber"
                width={900}
                height={760}
                className="h-90 w-full object-cover md:h-107.5 xl:h-130"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;