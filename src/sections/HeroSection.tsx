import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";

const features = [
  "Licensed Technicians",
  "Transparent Pricing",
  "Same-Day Service",
  "24/7 Support",
];

const clientImages = [
  "/images/client1.jpg",
  "/images/client2.jpg",
  "/images/client3.jpg",
  "/images/client4.jpg",
];

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-175 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/heroimage.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-1" />

      {/* Full blackish-green overlay */}
      <div
        className="absolute inset-0 z-2"
        style={{
          background: "rgba(30, 60, 25, 0.45)",
          mixBlendMode: "multiply",
        }}
      />

      <div
        className="absolute inset-0 z-3"
        style={{
          background: `
            radial-gradient(circle at 0% 50%, rgba(159,232,112,0.35), transparent 30%),
            radial-gradient(circle at 100% 50%, rgba(159,232,112,0.35), transparent 30%)
          `,
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 flex h-full flex-col justify-between pt-28 pb-10 md:pt-36 md:pb-12">
        <div className="grid h-full grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left content */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="max-w-200">
              <h1 className="text-[52px] font-bold leading-[0.95] tracking-[-2px] text-white sm:text-[68px] lg:text-[65px] xl:text-[95px] ">
                Professional
                <br />
                Plumbing Services
                <br />
                You Can Trust
              </h1>
            </div>
          </div>

          {/* Right content */}
          <div className="relative lg:col-span-5 xl:col-span-4">
            <div className="flex flex-col items-start gap-6 lg:items-end">
              {/* Rating card */}
              <div className="w-full max-w-60 rounded-[28px] border border-white/10 bg-black/5 p-5 backdrop-blur-md sm:max-w-65 sm:p-6">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-5xl font-bold leading-none text-white sm:text-6xl">
                    4.9
                  </h3>
                  <Star
                    className="fill-(--primary) text-(--primary)"
                    size={34}
                  />
                </div>

                <div className="mb-5 flex items-center">
                  {clientImages.map((image, index) => (
                    <div
                      key={index}
                      className={`relative h-11 w-11 overflow-hidden rounded-full border-2 border-white ${
                        index !== 0 ? "-ml-2.5" : ""
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Client ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <p className="text-[15px] leading-8 text-white/90 sm:text-[16px]">
                  Average rating from
                  <br />
                  7.000+ clients review
                </p>
              </div>

              {/* Description block */}
              <div className="w-full max-w-130 text-left lg:mt-10">
                <p className="max-w-130 text-base leading-8 text-white/90 sm:text-lg">
                  At Roplumb, our licensed and experienced technicians provide
                  high-quality plumbing services with same-day response,
                  upfront pricing, and long-lasting results.
                </p>

                <div className="mt-7">
                  <Link
                    href="/contact"
                    className="btn-primary rounded-[18px] px-8 py-4"
                  >
                    Request a Service
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom features */}
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 glass-nav p-2 rounded-full text-[15px] font-medium text-white sm:text-[16px]"
            >
              <Check
                size={18}
                strokeWidth={3}
                className="text-(--primary)"
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}