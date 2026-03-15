import React from "react";
import ServiceCard from "../components/ServiceCard";
import { servicesData } from "../lib/servicesdata";
import Link from "next/link";

type ServicesSectionProps = {
  limit?: number;
  showExplore?: boolean;
};

const ServicesSection = ({ limit, showExplore }: ServicesSectionProps) => {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="bg-[#f0f0f0] py-20 md:py-24">
      <div className="container-custom">

        {/* Top Label */}
        <div className="mb-6 flex justify-center">
          <span className="text-sm font-semibold text-[#132207] md:text-base">
            <span className="text-(--primary)">(</span>{" "}
            Plumbing Services We Offer{" "}
            <span className="text-(--primary)">)</span>
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-225 text-center">
          <h2 className="text-[40px] font-bold leading-[1.1] text-[#132207] sm:text-[52px] md:text-[60px]">
            We Fix Leaks, Clogs, and Everything In Between
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Explore Services (Only Home Page) */}
        {showExplore && (
          <div className="mt-10 text-center text-[16px] text-[#555]">
            Don’t see the service you want?{" "}
            <Link
              href="/services"
              className="font-semibold text-(--primary) hover:underline"
            >
              Explore more services.
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;