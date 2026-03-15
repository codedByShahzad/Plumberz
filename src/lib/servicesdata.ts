export type ServiceItem = {
  id: number;
  title: string;
  description: string;
  href: string;
  image: string;
};

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Emergency Plumbing Repairs",
    description:
      "Immediate assistance for urgent plumbing problems such as burst pipes, major leaks, and emergency breakdowns.",
    href: "/services/emergency-plumbing",
    image: "/images/service1.png",
  },
  {
    id: 2,
    title: "Leak Detection & Repair",
    description:
      "Fast and accurate leak detection using modern tools to prevent further water damage and reduce your utility bills.",
    href: "/services/leak-detection",
    image: "/images/service2.png",
  },
  {
    id: 3,
    title: "Water Heater Installation & Repair",
    description:
      "Immediate assistance for urgent plumbing problems such as burst pipes, major leaks, and emergency breakdowns.",
    href: "/services/water-heater",
    image: "/images/service-3.png",
  },
  {
    id: 4,
    title: "Pipe Installation & Replacement",
    description:
      "Professional installation and replacement of pipes to keep your plumbing system reliable and leak-free.",
    href: "/services/pipe-installation",
    image: "/images/service4.png",
  },
  {
    id: 5,
    title: "Bathroom & Kitchen Plumbing",
    description:
      "Full plumbing services for kitchens and bathrooms including sinks, drains, faucets, and fixtures.",
    href: "/services/bathroom-plumbing",
    image: "/images/service5.png",
  },
  {
    id: 6,
    title: "Sewer Line Inspection & Repair",
    description:
      "Advanced sewer line inspection and repair services to detect blockages and keep your system flowing smoothly.",
    href: "/services/sewer-line",
    image: "/images/service6.png",
  },
];