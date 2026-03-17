import Image from "next/image";
import React from "react";
import { Clock3, MapPin, Mail, Phone } from "lucide-react";

const ExpertPlumbingCare = () => {
  return (
    <section className="bg-[#ffff] py-20 md:py-24">
      <div className="max-w-325 w-full m-auto px-5">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-12">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6">
            <p className="text-[15px] font-semibold text-[#132207]">
              <span className="text-(--primary)">(</span> Expert Plumbing Care{" "}
              <span className="text-(--primary)">)</span>
            </p>

            <h2 className="mt-4 max-w-155 text-[42px] font-bold leading-[1.08] tracking-[-1.2px] text-[#132207] md:text-[54px] lg:text-[62px]">
              Get Reliable Plumbing Support
            </h2>

            {/* INFO GRID */}
            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-13.5 w-13.5 shrink-0 items-center justify-center rounded-full bg-(--primary)">
                  <Clock3 size={24} className="text-[#132207]" />
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[#132207]">
                    Service Hours
                  </h4>
                  <p className="mt-2 text-[15px] leading-8 text-[#132207]/70">
                    Mon-Sat: 10:00am–5:00pm
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-13.5 w-13.5 shrink-0 items-center justify-center rounded-full bg-(--primary)">
                  <MapPin size={24} className="text-[#132207]" />
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[#132207]">
                    Our Location
                  </h4>
                  <p className="mt-2 text-[15px] leading-8 text-[#132207]/70">
                    28 Jumps St, PKU, INA
                    <br />
                    123 Greenway Avenue, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-13.5 w-13.5 shrink-0 items-center justify-center rounded-full bg-(--primary)">
                  <Mail size={24} className="text-[#132207]" />
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[#132207]">
                    Mail Us
                  </h4>
                  <p className="mt-2 text-[15px] leading-8 text-[#132207]/70">
                    support@roplumb.com
                    <br />
                    hi.roplumb.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-13.5 w-13.5 shrink-0 items-center justify-center rounded-full bg-(--primary)">
                  <Phone size={24} className="text-[#132207]" />
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[#132207]">
                    Our Location
                  </h4>
                  <p className="mt-2 text-[15px] leading-8 text-[#132207]/70">
                    +749 883 6639
                    <br />
                    +273 283 739
                  </p>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="mt-10 overflow-hidden rounded-[18px]">
              <iframe
                src="https://www.google.com/maps?q=London%20Eye&output=embed"
                width="100%"
                height="270"
                loading="lazy"
                className="h-67.5 w-full border-0"
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative h-67.5 w-full md:h-190">
                <Image
                  src="/images/expert.jpg"
                  alt="Expert plumbing support"
                  fill
                  className="object-cover"
                />
              </div>

              {/* PARTNERS BADGE */}
              <div className="absolute bottom-0 left-0 flex w-[72%] items-center justify-between rounded-tr-[22px] bg-(--primary) px-7 py-8 shadow-lg md:w-[64%]">
                <p className="text-[18px] font-bold leading-[1.3] text-[#132207]">
                  Our Trusted
                  <br />
                  Partners
                </p>

                <div className="flex -space-x-2">
                  {["/images/client1.jpg", "/images/client2.jpg", "/images/client3.jpg", "/images/client4.jpg"].map(
                    (src, index) => (
                      <div
                        key={index}
                        className="h-10.5 w-10.5 overflow-hidden rounded-full border-2 border-white"
                      >
                        <Image
                          src={src}
                          alt={`Partner ${index + 1}`}
                          width={42}
                          height={42}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertPlumbingCare;