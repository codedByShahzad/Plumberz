import React from "react";
import { Phone, ArrowRight } from "lucide-react";

const NewsLetter = () => {
  return (
    <section className="bg-[#ffff] py-20">
      <div className="container-custom">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 rounded-[28px] bg-[#0d2604] px-8 py-12 text-center md:px-14 lg:px-16">
          
          {/* TOP HEADING */}
          <h2 className="text-[32px] lg:text-left font-bold leading-[1.2] text-white md:text-[40px] lg:text-[48px]">
            Need Any Plumbing <br className="hidden xl:flex" />
            Service & Repair?
          </h2>

          <div className="flex gap-4 md:gap-8 flex-col md:flex-row">

          {/* MIDDLE PHONE */}
          <div className="flex items-center gap-5">
            <div className="flex h-17.5 w-17.5 items-center justify-center rounded-full bg-(--primary)">
              <Phone size={26} className="text-[#132207]" />
            </div>

            <div className="text-left">
              <p className="text-[15px] text-white/70">Phone Number</p>
              <h3 className="text-[26px] font-bold text-white md:text-[30px]">
                +483 4819 4999
              </h3>
            </div>
          </div>

          {/* BOTTOM BUTTON */}
          <button className="group flex items-center justify-center gap-2 rounded-2xl bg-(--primary) px-8 py-4 text-[17px] font-semibold text-[#132207] transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Contact Support
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;