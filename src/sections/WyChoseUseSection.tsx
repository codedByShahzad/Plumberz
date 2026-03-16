import Image from "next/image";
import { Waves, Wrench, Check } from "lucide-react";

const featureCards = [
  {
    title: "Smart Plumbing Solutions",
    description:
      "We combine modern diagnostics, high-grade materials, and precision repair methods for efficient, long-lasting results.",
    icon: Wrench,
  },
  {
    title: "Property-Focused Care",
    description:
      "Beyond repairs, we ensure your entire plumbing system stays healthy through routine maintenance.",
    icon: Waves,
  },
];

const bottomPoints = [
  "Over 10+ years of plumbing experience",
  "Transparent pricing & detailed service",
  "Rapid emergency response",
  "Customer-first service",
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-[#efefef] py-20 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Images */}
          <div className="relative order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto h-[520px] w-full max-w-[520px] md:h-[620px]">
              {/* Top/left tall image */}
              <div className="absolute left-0 top-0 h-[360px] w-[200px] overflow-hidden rounded-t-[160px] rounded-b-[160px] md:h-[430px] lg:h-[450px] lg:w-[250px] md:w-[340px] xl:h-[500px] xl:w-[290px] ">
                <Image
                  src="/images/whychooseimage1.jpg"
                  alt="Plumbing tools"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom/center overlapping image */}
              <div className="absolute bottom-0 left-[130px] h-[340px] w-[200px]  overflow-hidden rounded-t-[140px] rounded-b-[140px] md:left-[220px] lg:left-[150px] md:h-[400px] md:w-[290px] lg:h-[450px] lg:w-[250px] xl:h-[500px] xl:w-[290px] xl:left-[220px]">
                <Image
                  src="/images/whychooseimage2.jpg"
                  alt="Professional plumber"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            {/* Label */}
            <div className="mb-5">
              <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#132207]">
                <span className="text-(--primary)">(</span>
                Why Choose Us
                <span className="text-(--primary)">)</span>
              </span>
            </div>

            {/* Heading */}
            <div className="max-w-[760px]">
              <h2 className="text-[40px] font-bold leading-[1.08] tracking-[-1.2px] text-[#132207] sm:text-[50px] xl:text-[60px]">
                Reliable and Long-lasting Plumbing Solutions
              </h2>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-[760px] text-[18px] leading-8 text-[#5e5e5e]">
              Our focus on expert craftsmanship, advanced plumbing technology,
              and responsive service makes us the trusted partner.
            </p>

            {/* Main card */}
            <div className="mt-8 rounded-[28px] border-r-[6px] border-[var(--primary)] bg-[#f7f7f7] px-7 py-8 md:px-8 md:py-9">
              <div className="space-y-8">
                {featureCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`flex gap-5 ${
                        index !== featureCards.length - 1
                          ? "border-b border-black/5 pb-8"
                          : ""
                      }`}
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]">
                        <Icon size={24} className="text-[#132207]" />
                      </div>

                      <div>
                        <h3 className="text-[28px] font-bold leading-[1.15] text-[#132207]">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-[620px] text-[16px] leading-8 text-[#5e5e5e]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom points */}
            <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
              {bottomPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 text-[16px] text-[#5e5e5e]"
                >
                  <Check
                    size={18}
                    strokeWidth={3}
                    className="shrink-0 text-[var(--primary)]"
                  />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;