import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    id: 1,
    title: "Basic Fix",
    description:
      "Perfect for small, quick plumbing issues. Lorem ipsum dolor sit.",
    price: "$49",
    per: "/Service",
    features: [
      { text: "Moderate pipe repair or replacement", available: true },
      { text: "Pressure check & system assessment", available: false }, // 👈 second option unchecked
      { text: "Sink, toilet, and drain troubleshooting", available: true },
      { text: "Same-day appointment (when available)", available: false },
    ],
    buttonText: "Get This Plan",
    featured: false,
  },
  {
    id: 2,
    title: "Standard Repair",
    description:
      "Our most popular plan for common plumbing problem. Lorem ipsum dolor.",
    price: "$129",
    per: "/Service",
    features: [
      { text: "Moderate pipe repair or replacement", available: true },
      { text: "Pressure check & system assessment", available: true },
      { text: "Sink, toilet, and drain troubleshooting", available: true },
      { text: "Same-day appointment (when available)", available: false },
    ],
    buttonText: "Choose Standard Plan",
    featured: true,
  },
  {
    id: 3,
    title: "Premium Care",
    description: "Full-coverage plumbing service with priority handling.",
    price: "$249",
    per: "/Service",
    features: [
      { text: "Moderate pipe repair or replacement", available: true },
      { text: "Pressure check & system assessment", available: true },
      { text: "Sink, toilet, and drain troubleshooting", available: true },
      { text: "Same-day appointment (when available)", available: true },
    ],
    buttonText: "Get Premium Care",
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-[#efefef] py-20 md:py-24">
      <div className="max-w-375 w-full m-auto px-5">
        {/* Label */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#132207]">
            <span className="text-(--primary)">(</span>
            Our Pricing Plan
            <span className="text-(--primary)">)</span>
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-220 text-center">
          <h2 className="text-[40px] font-bold leading-[1.08] tracking-[-1.2px] text-[#132207] sm:text-[52px] xl:text-[62px]">
            Simple, Transparent Pricing
            <br />
            With no Hidden Fees
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                className={`group rounded-[28px] border-r-[6px] px-6 py-8 transition-all duration-300 md:px-7 md:py-9 ${
                  isFeatured
                    ? "border-transparent bg-(--primary) hover:-translate-y-1 hover:border-black hover:shadow-lg"
                    : "border-transparent bg-[#f7f7f7] hover:-translate-y-1 hover:border-(--primary) hover:shadow-lg"
                }`}
              >
                {/* Title */}
                <div className="text-center">
                  <h3 className="text-[28px] font-bold leading-[1.2] text-[#132207]">
                    {plan.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-72.5 text-[16px] leading-8 text-[#5e5e5e]">
                    {plan.description}
                  </p>

                  <div className="mt-6">
                    <div className="text-[64px] font-bold leading-none tracking-[-2px] text-[#132207]">
                      {plan.price}
                    </div>
                    <p className="mt-3 text-[16px] text-[#5e5e5e]">{plan.per}</p>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className={`my-8 h-0.5 w-full ${
                    isFeatured ? "bg-black/10" : "bg-black/8"
                  }`}
                />

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature.text} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className={`mt-1 shrink-0 ${
                          feature.available
                            ? isFeatured
                              ? "text-black" // 👈 middle card tick black
                              : "text-(--primary)"
                            : "text-gray-400"
                        }`}
                      />

                      <span
                        className={`text-[16px] leading-8 ${
                          feature.available
                            ? "text-[#4f4f4f]"
                            : "text-gray-400 line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className={`flex w-full items-center justify-center rounded-[14px] px-6 py-4 text-[16px] font-semibold transition-all duration-300 ${
                      isFeatured
                        ? "bg-[#132207] text-white hover:opacity-95"
                        : "bg-(--primary) text-[#132207] hover:opacity-95"
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;