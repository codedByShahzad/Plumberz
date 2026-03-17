import Image from "next/image";
import { Star, Target, Eye } from "lucide-react";

const OurApproachSection = () => {
  return (
    <section className="bg-[#efefef] py-20 md:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          {/* LEFT IMAGES */}
          <div className="relative order-2 lg:order-0 lg:col-span-6">
            <div className="relative h-155 w-full md:h-175">
              {/* Top image - shifted right */}
              <div className="absolute right-0 top-0 h-90 w-[78%] overflow-hidden rounded-[22px] md:h-107.5">
                <Image
                  src="/images/approach1.jpg"
                  alt="Approach Image 1"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom image - starts from left */}
              <div className="absolute bottom-0 left-0 h-80 w-[72%] overflow-hidden rounded-[22px] shadow-xl md:h-95">
                <Image
                  src="/images/approach2.jpg"
                  alt="Approach Image 2"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Rating Badge */}
              <div className="absolute left-0 top-14 z-10 rounded-[20px] bg-(--primary) px-8 py-7 shadow-lg md:px-10 md:py-8">
                <div className="flex items-center gap-3">
                  <h3 className="text-[54px] font-bold leading-none text-[#132207] md:text-[68px]">
                    4.9
                  </h3>
                  <Star className="fill-black text-white" size={32} />
                </div>

                <p className="mt-4 text-[16px] leading-8 text-[#132207]/75 md:text-[18px]">
                  Average rating from
                  <br />
                  7,000+ clients review
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-0 lg:col-span-6">
            <p className="text-[15px] font-semibold text-[#132207]">
              <span className="text-(--primary)">(</span> Our Approach{" "}
              <span className="text-(--primary)">)</span>
            </p>

            <h2 className="mt-4 text-[38px] font-bold leading-[1.1] text-[#132207] md:text-[48px] lg:text-[56px]">
              How we Deliver Reliable
              <br />
              Plumbing Solutions
            </h2>

            <p className="mt-6 max-w-130 text-[16px] leading-8 text-[#132207]/70">
              Our approach is straightforward yet impactful—inspect, diagnose,
              repair, and ensure long-term performance.
            </p>

            {/* CARD */}
            <div className="mt-10 rounded-[20px] border-r-[6px] border-(--primary) bg-white p-8 shadow-md">
              {/* Mission */}
              <div className="flex items-start gap-5">
                {/* ICON */}
                <div className="flex p-2 items-center justify-center rounded-full border border-(--primary) bg-(--primary)">
                  <Target size={30} className="text-[#132207]" />
                </div>

                <div>
                  <h4 className="text-[20px] font-bold text-[#132207]">
                    Our Mission
                  </h4>
                  <p className="mt-2 text-[15px] leading-7 text-[#132207]/70">
                    Backed by decades of plumbing expertise, we provide
                    dependable repair, installation, and maintenance.
                  </p>
                </div>
              </div>

              <div className="my-6 h-px w-full bg-[#e5e5e5]" />

              {/* Vision */}
              <div className="flex items-start gap-5">
                {/* ICON */}
                <div className="flex items-center p-2 justify-center rounded-full border border-(--primary) bg-(--primary)">
                  <Eye size={30} className="text-[#132207]" />
                </div>

                <div>
                  <h4 className="text-[20px] font-bold text-[#132207]">
                    Our Vision
                  </h4>
                  <p className="mt-2 text-[15px] leading-7 text-[#132207]/70">
                    To be the most trusted plumbing partner, delivering safe,
                    efficient, and sustainable water systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;
