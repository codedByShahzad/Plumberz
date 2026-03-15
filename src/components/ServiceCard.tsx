import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "../lib/servicesdata";

type ServiceCardProps = {
  service: ServiceItem;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="group relative flex min-h-87.5 flex-col justify-between rounded-3xl border-r-4 border-transparent bg-[#ffff] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-(--primary)">

      <div>
        <h3 className="max-w-65 text-[24px] font-bold leading-[1.2] text-[#132207]">
          {service.title}
        </h3>

        <p className="mt-4 max-w-75 text-[15px] leading-7 text-[#5e5e5e]">
          {service.description}
        </p>
      </div>

      <div className="mt-8 flex items-end justify-between">

        <Link
          href={service.href}
          className="flex items-center gap-2 text-[15px] font-semibold text-(--primary)"
        >
          View Details
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <div className="flex items-center justify-center rounded-full  transition-transform duration-300 group-hover:scale-105">
          <Image
            src={service.image}
            alt={service.title}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;