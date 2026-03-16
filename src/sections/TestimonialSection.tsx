"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const testimonials = [
  {
    id: 1,
    image: "/images/client1.jpg",
    name: "Michael Grant",
    role: "Restaurant Owner · Midtown",
    review:
      "Our kitchen drain was clogging repeatedly and disrupting operations. Their technicians handled the issue quickly and gave us tips to prevent future problems. Excellent, reliable service every time.",
  },
  {
    id: 2,
    image: "/images/client2.jpg",
    name: "Emily Carter",
    role: "Apartment Resident",
    review:
      "My water heater stopped working late at night, and their emergency team came within an hour. They fixed the heater and explained everything clearly. Amazing dedication and professionalism.",
  },
  {
    id: 3,
    image: "/images/client3.jpg",
    name: "Daniel Brooks",
    role: "Homeowner · West District",
    review:
      "They replaced our leaking bathroom pipes with great care and left everything spotless. The whole process was smooth, transparent, and much faster than we expected.",
  },
  {
    id: 4,
    image: "/images/client4.jpg",
    name: "Sophia Miller",
    role: "Shop Manager · Downtown",
    review:
      "From inspection to final repair, the team was responsive and courteous. Their work solved our recurring plumbing issue completely, and the pricing was very fair.",
  },
];

const QuoteIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      style={{  }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15.5 10C24.2 15.7 29 25.3 29 36.4C29 44 24.9 48 19.2 48C13.8 48 9.6 43.9 9.6 37.8C9.6 31.9 13.6 28.2 18.7 28.2C20.2 28.2 21.3 28.4 22.4 28.9C21.3 22.8 17.2 17.3 11.3 13.2L15.5 10ZM40.5 10C49.2 15.7 54 25.3 54 36.4C54 44 49.9 48 44.2 48C38.8 48 34.6 43.9 34.6 37.8C34.6 31.9 38.6 28.2 43.7 28.2C45.2 28.2 46.3 28.4 47.4 28.9C46.3 22.8 42.2 17.3 36.3 13.2L40.5 10Z"
        stroke="var(--primary)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const TestimonialsSection = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loopedTestimonials = useMemo(() => {
    return [...testimonials, ...testimonials.slice(0, visibleCards)];
  }, [visibleCards]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setEnableTransition(true);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= testimonials.length) {
      setEnableTransition(false);
      setCurrentIndex(0);
    }
  };

  return (
    <section className="bg-[#efefef] p-5 md:p-10 xl:p-24">
      <div className="">
        <div className="grid grid-cols-1 gap-10 lg:items-start lg:gap-10">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#132207]">
                <span className="text-(--primary)">(</span>
                Client Testimonials
                <span className="text-(--primary)">)</span>
              </span>
            </div>

            <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-1.2px] text-[#132207] sm:text-[52px] xl:text-[60px]">
              Real Experiences From Customers
            </h2>
          </div>

          {/* Right Slider */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden">
              <div
                className="flex"
                onTransitionEnd={handleTransitionEnd}
                style={{
                  transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
                  transition: enableTransition ? "transform 700ms ease" : "none",
                }}
              >
                {loopedTestimonials.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="shrink-0 px-0.5 lg:px-3"
                    style={{ width: `${100 / visibleCards}%` }}
                  >
                    <div className="relative flex h-full min-h-90 flex-col rounded-[28px] bg-[#132207] px-8 py-8 md:px-10 md:py-9">
                      {/* Stars */}
                      <div className="mb-5 flex items-center gap-2">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={16}
                            className="fill-(--primary) text-(--primary)"
                          />
                        ))}
                      </div>

                      {/* Review */}
                      <p className="max-w-130 text-[16px] leading-8 text-white/95 md:text-[17px]">
                        “{item.review}”
                      </p>

                      {/* Bottom */}
                      <div className="mt-auto pt-8">
                        <div className="flex items-end justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="relative h-15.5 w-15.5 overflow-hidden rounded-full">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>

                            <div>
                              <h3 className="text-[22px] font-bold leading-none text-white">
                                {item.name}
                              </h3>
                              <p className="mt-3 text-[15px] text-white/90">
                                {item.role}
                              </p>
                            </div>
                          </div>

                          <div className="shrink-0">
                            <QuoteIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;