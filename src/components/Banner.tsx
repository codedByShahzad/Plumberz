import Image from "next/image";

const partners = [
  { id: 1, image: "/images/partner1.png", alt: "Partner 1" },
  { id: 2, image: "/images/partner2.png", alt: "Partner 2" },
  { id: 3, image: "/images/partner3.png", alt: "Partner 3" },
  { id: 4, image: "/images/partner4.png", alt: "Partner 4" },
  { id: 5, image: "/images/partner5.png", alt: "Partner 5" },
  { id: 6, image: "/images/partner6.png", alt: "Partner 6" },
];

const Banner = () => {
  return (
    <section className="bg-[#102300] py-10 md:py-22">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-14 xl:gap-x-16">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="relative h-10 w-30 opacity-80 transition-opacity duration-300 hover:opacity-100 sm:h-12 sm:w-35 md:w-37.5 lg:w-40"
            >
              <Image
                src={partner.image}
                alt={partner.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;