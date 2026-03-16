"use client";

import { ChevronDown } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-[#ffff] py-20">
      <div className="">
        <div
          className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/contact.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#132207]/45" />

          <div className="relative z-10 grid min-h-162.5 grid-cols-1 items-center px-2 py-3 md:px-8 md:py-8 lg:grid-cols-12 lg:px-10 lg:py-10 xl:px-12">
            {/* Left side visible image area */}
            <div className="hidden lg:block lg:col-span-6" />

            {/* Right form area */}
            <div className="lg:col-span-6">
              <div className="ml-auto w-full max-w-190 rounded-[30px] bg-[#f5f5f5] p-6 md:p-8 xl:p-10">
                {/* Label */}
                <div className="mb-5">
                  <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#132207]">
                    <span className="text-(--primary)">(</span>
                    Book an Appointment
                    <span className="text-(--primary)">)</span>
                  </span>
                </div>

                {/* Heading */}
                <div className="max-w-130">
                  <h2 className="text-[32px] font-bold leading-[1.02] tracking-[-1.2px] text-[#132207] sm:text-[44px] xl:text-[52px]">
                    Make an {" "}
                    <br className="hidden md:flex" />
                    Appointment
                  </h2>
                </div>

                {/* Description */}
                <p className="mt-5 max-w-180 text-[14px] md:text-[17px] md:leading-8 text-[#5e5e5e]">
                  Schedule your plumbing service in just a few clicks. Fill out
                  the form below, hoose your preferred date, and our expert
                  technicians will get back to you with confirmation.
                </p>

                {/* Form */}
                <form className="mt-8 space-y-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="h-14.5 w-full rounded-[18px] border border-black/10 bg-[#f5f5f5] px-7 text-[16px] text-[#132207] placeholder:text-[#b7b7b7] outline-none transition focus:border-(--primary)"
                  />

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="h-14.5 w-full rounded-[18px] border border-black/10 bg-[#f5f5f5] px-7 text-[16px] text-[#132207] placeholder:text-[#b7b7b7] outline-none transition focus:border-(--primary)"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="h-14.5 w-full rounded-[18px] border border-black/10 bg-[#f5f5f5] px-7 text-[16px] text-[#132207] placeholder:text-[#b7b7b7] outline-none transition focus:border-(--primary)"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="relative">
                      <select
                        defaultValue=""
                        className="h-14.5 w-full appearance-none rounded-[18px] border border-black/10 bg-[#f5f5f5] px-7 pr-12 text-[16px] text-[#b7b7b7] outline-none transition focus:border-(--primary) focus:text-[#132207]"
                      >
                        <option value="" disabled hidden>
                          Select Service
                        </option>

                        <option className="text-[#132207]">
                          Emergency Plumbing Repairs
                        </option>
                        <option className="text-[#132207]">
                          Leak Detection & Repair
                        </option>
                        <option className="text-[#132207]">
                          Water Heater Installation & Repair
                        </option>
                        <option className="text-[#132207]">
                          Pipe Installation & Replacement
                        </option>
                        <option className="text-[#132207]">
                          Bathroom & Kitchen Plumbing
                        </option>
                        <option className="text-[#132207]">
                          Sewer Line Inspection & Repair
                        </option>
                      </select>

                      <ChevronDown
                        size={18}
                        className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-[#b7b7b7]"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Preferred Date"
                      onClick={(e) => (e.currentTarget.type = "date")}
                      onBlur={(e) => {
                        if (!e.currentTarget.value)
                          e.currentTarget.type = "text";
                      }}
                      className="h-14.5 w-full rounded-[18px] border border-black/10 bg-[#f5f5f5] px-7 text-[16px] text-[#132207] placeholder:text-[#b7b7b7] outline-none transition focus:border-(--primary)"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Preferred Time"
                      onClick={(e) => (e.currentTarget.type = "time")}
                      onBlur={(e) => {
                        if (!e.currentTarget.value)
                          e.currentTarget.type = "text";
                      }}
                      className="h-14.5 w-full rounded-[18px] border border-black/10 bg-[#f5f5f5] px-7 text-[16px] text-[#132207] placeholder:text-[#b7b7b7] outline-none transition focus:border-(--primary)"
                    />

                    <input
                      type="text"
                      placeholder="Address / Service Location"
                      className="h-14.5 w-full rounded-[18px] border border-black/10 bg-[#f5f5f5] px-7 text-[16px] text-[#132207] placeholder:text-[#b7b7b7] outline-none transition focus:border-(--primary)"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex h-14.5 w-full cursor-pointer items-center justify-center rounded-2xl bg-(--primary) text-[18px] font-semibold text-[#132207] transition hover:opacity-95"
                  >
                    Book Appointment Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
