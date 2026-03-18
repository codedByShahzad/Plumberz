export type ServiceBenefit = {
  title: string;
  description: string;
};

export type ServiceItem = {
  id: number;
  title: string;
  description: string;
  href: string;
  image: string; // icon/card image
  detailImage: string; // large service detail image
  heroSubtitle: string;
  longDescription: string;
  longDescription2: string;
  features: string[];
  benefits: ServiceBenefit[];
};

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Emergency Plumbing Repairs",
    description:
      "Immediate assistance for urgent plumbing problems such as burst pipes, major leaks, and emergency breakdowns.",
    href: "/services/emergency-plumbing",
    image: "/images/service1.png",
    detailImage:
      "https://images.unsplash.com/photo-1681249537103-9e0c7316d91e?auto=format&fit=crop&w=1400&q=80",
    heroSubtitle: "Fast response when urgent plumbing issues cannot wait.",
    longDescription:
      "Our emergency plumbing repair service is designed to handle urgent situations quickly and efficiently. From burst pipes and severe leaks to blocked drains and overflowing fixtures, our team responds with the right tools and expertise to minimize damage and restore safety to your property.",
    longDescription2:
      "We understand that plumbing emergencies can happen at any time and often require immediate action. That is why we focus on rapid response, accurate diagnosis, and durable repairs that protect your home or business from further disruption.",
    features: [
      "24/7 emergency response support",
      "Fast diagnosis and on-site repair",
      "Burst pipe and leak repair solutions",
      "Drain and blockage emergency assistance",
      "Safe and efficient repair methods",
      "Professional service for homes and businesses",
    ],
    benefits: [
      {
        title: "Rapid Response",
        description:
          "Quick action to reduce water damage and restore plumbing functionality.",
      },
      {
        title: "Experienced Technicians",
        description:
          "Skilled plumbers equipped to handle urgent and complex repairs.",
      },
      {
        title: "Reliable Solutions",
        description:
          "Long-lasting fixes using quality tools and trusted repair methods.",
      },
    ],
  },
  {
    id: 2,
    title: "Leak Detection & Repair",
    description:
      "Fast and accurate leak detection using modern tools to prevent further water damage and reduce your utility bills.",
    href: "/services/leak-detection",
    image: "/images/service2.png",
    detailImage:
      "https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d?auto=format&fit=crop&w=1400&q=80",
    heroSubtitle: "Find hidden leaks early and protect your property.",
    longDescription:
      "Our leak detection and repair service helps identify hidden plumbing leaks before they cause serious structural damage or high water bills. Using modern tools and proven methods, we locate the exact source of the issue and provide efficient repair solutions.",
    longDescription2:
      "Whether it is a wall leak, slab leak, pipe joint issue, or fixture-related water loss, our team works carefully to resolve the problem while minimizing disruption to your space. We focus on both immediate repair and preventing future issues.",
    features: [
      "Advanced leak detection methods",
      "Wall and underground leak tracing",
      "Accurate repair with minimal disruption",
      "Water-saving solutions",
      "Protection against mold and water damage",
      "Residential and commercial leak support",
    ],
    benefits: [
      {
        title: "Accurate Detection",
        description:
          "We identify the exact source of leaks without unnecessary damage.",
      },
      {
        title: "Lower Utility Bills",
        description:
          "Fixing leaks helps reduce wasted water and monthly expenses.",
      },
      {
        title: "Property Protection",
        description:
          "Early leak repair prevents mold, stains, and structural damage.",
      },
    ],
  },
  {
    id: 3,
    title: "Water Heater Installation & Repair",
    description:
      "Professional installation and repair for dependable hot water systems in homes and businesses.",
    href: "/services/water-heater",
    image: "/images/service-3.png",
    detailImage:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1400&q=80",
    heroSubtitle: "Reliable hot water solutions for comfort and efficiency.",
    longDescription:
      "We provide professional water heater installation and repair services for homes and businesses. Whether you need a new unit installed, an old system replaced, or a faulty water heater repaired, our team ensures dependable hot water performance with safe and efficient workmanship.",
    longDescription2:
      "From inconsistent temperatures and unusual noises to complete breakdowns, we diagnose water heater issues quickly and recommend the best solution. Our goal is to keep your system operating efficiently and extend its lifespan whenever possible.",
    features: [
      "Water heater installation and replacement",
      "Repair for heating and pressure issues",
      "Tank and tankless system support",
      "Energy-efficient recommendations",
      "Routine maintenance and inspections",
      "Safe installation standards",
    ],
    benefits: [
      {
        title: "Consistent Hot Water",
        description:
          "Enjoy reliable hot water for daily comfort and convenience.",
      },
      {
        title: "Energy Efficiency",
        description:
          "Efficient systems help reduce energy use and running costs.",
      },
      {
        title: "Expert Installation",
        description:
          "Proper setup ensures safe operation and long-term performance.",
      },
    ],
  },
  {
    id: 4,
    title: "Pipe Installation & Replacement",
    description:
      "Professional installation and replacement of pipes to keep your plumbing system reliable and leak-free.",
    href: "/services/pipe-installation",
    image: "/images/service4.png",
    detailImage:
      "https://images.unsplash.com/photo-1518201660989-894b770d6e3c?auto=format&fit=crop&w=1400&q=80",
    heroSubtitle: "Strong, reliable piping systems built to last.",
    longDescription:
      "Our pipe installation and replacement service is ideal for new construction, remodeling projects, and aging plumbing systems that need an upgrade. We install high-quality piping solutions that improve water flow, reliability, and long-term plumbing performance.",
    longDescription2:
      "If your property has corroded, leaking, or damaged pipes, our team can replace them with durable materials suited to your needs. We work with care and precision to ensure your plumbing system stays strong, efficient, and leak-free.",
    features: [
      "New pipe installation for renovation projects",
      "Replacement of old or damaged pipes",
      "Durable and modern piping materials",
      "Improved water pressure and flow",
      "Safe and code-compliant workmanship",
      "Residential and commercial solutions",
    ],
    benefits: [
      {
        title: "Long-Term Durability",
        description:
          "Modern materials provide stronger and longer-lasting performance.",
      },
      {
        title: "Improved Efficiency",
        description:
          "New pipes help improve water flow and reduce leak risks.",
      },
      {
        title: "Professional Workmanship",
        description:
          "Every installation is handled with precision and attention to detail.",
      },
    ],
  },
  {
    id: 5,
    title: "Bathroom & Kitchen Plumbing",
    description:
      "Full plumbing services for kitchens and bathrooms including sinks, drains, faucets, and fixtures.",
    href: "/services/bathroom-plumbing",
    image: "/images/service5.png",
    detailImage:
      "https://images.unsplash.com/photo-1749532125405-70950966b0e5?auto=format&fit=crop&w=1400&q=80",
    heroSubtitle:
      "Complete plumbing support for the most used spaces in your home.",
    longDescription:
      "Our bathroom and kitchen plumbing service covers everything from fixture installation to drain repairs and leak fixes. We help keep these essential spaces running smoothly with practical, reliable plumbing solutions tailored to your property.",
    longDescription2:
      "Whether you are remodeling a kitchen, upgrading a bathroom, or fixing everyday plumbing issues, our team provides careful installation and repair work that combines functionality, durability, and a clean finish.",
    features: [
      "Sink and faucet installation",
      "Drain repair and unclogging",
      "Toilet and fixture plumbing services",
      "Kitchen appliance plumbing connections",
      "Bathroom renovation plumbing support",
      "Fast repair and maintenance service",
    ],
    benefits: [
      {
        title: "Functional Spaces",
        description:
          "Keep your kitchen and bathroom operating smoothly every day.",
      },
      {
        title: "Clean Installation",
        description:
          "Fixtures and fittings are installed neatly and professionally.",
      },
      {
        title: "Reliable Repairs",
        description:
          "We solve common plumbing issues quickly and efficiently.",
      },
    ],
  },
  {
    id: 6,
    title: "Sewer Line Inspection & Repair",
    description:
      "Advanced sewer line inspection and repair services to detect blockages and keep your system flowing smoothly.",
    href: "/services/sewer-line",
    image: "/images/service6.png",
    detailImage:
      "https://images.unsplash.com/photo-1691940732509-231a570734e6?auto=format&fit=crop&w=1400&q=80",
    heroSubtitle:
      "Thorough sewer solutions to prevent serious drainage issues.",
    longDescription:
      "Our sewer line inspection and repair service helps identify blockages, cracks, and other underground issues before they turn into major plumbing problems. Using advanced inspection methods, we locate the source of the issue and provide targeted repair solutions.",
    longDescription2:
      "Sewer line problems can affect the entire plumbing system and cause unpleasant backups or property damage. Our team works to restore proper flow, improve drainage performance, and protect your property with efficient and dependable sewer services.",
    features: [
      "Detailed sewer line inspections",
      "Blockage and backup detection",
      "Repair for damaged sewer lines",
      "Improved drainage performance",
      "Preventive maintenance solutions",
      "Modern tools for accurate diagnosis",
    ],
    benefits: [
      {
        title: "Early Problem Detection",
        description:
          "Identify hidden sewer issues before they become major repairs.",
      },
      {
        title: "Better Drainage Flow",
        description:
          "Professional repair restores smooth and reliable system performance.",
      },
      {
        title: "Property Protection",
        description:
          "Prevent backups and damage with timely sewer line solutions.",
      },
    ],
  },
];