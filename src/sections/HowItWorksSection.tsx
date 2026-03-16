import Image from "next/image";
import { PhoneCall } from "lucide-react";

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

const HowItWorksSection = () => {
  return (
    <section className="bg-[#ffff] py-20 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Content */}
          <div className="lg:col-span-6">
            {/* Label */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#132207]">
                <span className="text-(--primary)">(</span>
                How it Works
                <span className="text-(--primary)">)</span>
              </span>
            </div>

            {/* Heading */}
            <div className="max-w-190">
              <h2 className="text-[40px] font-bold leading-[1.08] tracking-[-1.2px] text-[#132207] sm:text-[52px] xl:text-[60px]">
                Fast, Simple, and Stress-Free Plumbing Service
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative mt-10">
              <div className="absolute left-3.75 top-0 h-full w-px bg-(--primary)/70" />

              <div className="space-y-5">
                {steps.map((step, index) => (
                  <div key={step.title} className="relative flex gap-5">
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image + Support Card */}
          <div className="lg:col-span-6">
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
              <div className="absolute bottom-0 right-0 w-58.75 rounded-tl-[26px] rounded-br-[26px] rounded-tr-none rounded-bl-none bg-(--primary) px-7 py-6 sm:w-63.75 sm:px-8 sm:py-7">
                <div className="flex justify-center ">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80">
                    <PhoneCall size={28} className="text-[#132207]" />
                  </div>
                </div>

                <h3 className="mt-5 text-center text-[20px] font-bold leading-[1.2] text-[#132207] ">
                  Customer Support
                </h3>

                <div className="mt-3 space-y-1 text-center font-medium">
                  <p className="text-[16px] text-[#35511b]">+1238 439 3332</p>
                  <p className="text-[16px] text-[#35511b]">+82 82923 929</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;