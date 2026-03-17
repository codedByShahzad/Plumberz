import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const quickLinks = ["Home", "About", "Services", "FAQs", "Blog", "Contact"];

const resources = [
  "Plumbing Maintenance Tips",
  "Leak Repair Guide",
  "DIY Plumbing Safety",
  "Pricing",
  "Service Details",
];

const FooterSection = () => {
  return (
    <footer className="bg-[#efefef]">
      <div className="overflow-hidden bg-[#132207]">
        {/* Newsletter Top Bar */}
        <div className="bg-(--primary)">
          <div className="container-custom">
            <div className="grid grid-cols-1 items-center gap-8 py-10 md:py-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <h3 className="text-[34px] font-bold leading-[1.05] text-[#132207] md:text-[42px]">
                  Subscribe Our
                  <br />
                  Newsletter
                </h3>
              </div>

              <div className="lg:col-span-8">
                <form className="flex flex-col gap-4 md:flex-row md:items-center md:justify-end">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="h-14 w-full rounded-2xl border-0 bg-[#f5f5f5] px-7 text-[16px] text-[#132207] placeholder:text-[#b7b7b7] outline-none md:max-w-117.5"
                  />

                  <button
                    type="submit"
                    className="flex h-14 cursor-pointer items-center justify-center rounded-[14px] bg-[#132207] px-8 text-[18px] font-semibold text-(--primary) transition hover:opacity-95 md:min-w-59"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Main */}
        <div className="container-custom py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-12 xl:gap-10">
            {/* Logo + About */}
            <div className="xl:col-span-4">
              <Link href="/" className="flex items-center gap-4">
                <Image
                  src="/images/logo.png"
                  alt="Roplumb Logo"
                  width={62}
                  height={62}
                />
                <span className="text-[40px] font-bold leading-none text-white md:text-[54px]">
                  Plumberz
                </span>
              </Link>

              <h4 className="mt-10 max-w-105 text-[28px] font-bold leading-[1.2] text-white">
                Professional Tools for Precision Leak Solutions
              </h4>

              <p className="mt-6 max-w-107.5 text-[17px] leading-9 text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>

            {/* Quick Links */}
            <div className="xl:col-span-2 xl:col-start-5">
              <h4 className="text-[22px] font-bold text-white">Quick Links</h4>

              <div className="mt-8 space-y-4">
                {quickLinks.map((item) => (
                  <Link
                    key={item}
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    className="flex items-center gap-3 text-[17px] text-white/90 transition hover:text-(--primary)"
                  >
                    <ArrowRight size={15} className="text-(--primary)" />
                    <span>{item}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="xl:col-span-2">
              <h4 className="text-[22px] font-bold text-white">Resources</h4>

              <div className="mt-8 space-y-4">
                {resources.map((item) => (
                  <Link
                    key={item}
                    href="/"
                    className="flex items-center gap-3 text-[17px] text-white/90 transition hover:text-(--primary)"
                  >
                    <ArrowRight size={15} className="text-(--primary)" />
                    <span>{item}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact + Social */}
            <div className="xl:col-span-4">
              <h4 className="text-[22px] font-bold text-white">
                Contact Information
              </h4>

              <div className="mt-8 space-y-4 text-[17px] text-white/90">
                <p>support@roplumb.com</p>
                <p>+749 883 6639</p>
                <p>28 Jumps St, PKU, INA</p>
              </div>

              <div className="mt-14">
                <h4 className="text-[22px] font-bold text-white">
                  Social Media
                </h4>

                <div className="mt-6 flex items-center gap-5">
  {[
    { icon: FaFacebookF, href: "/" },
    { icon: FaTwitter, href: "/" },
    { icon: FaYoutube, href: "/" },
    { icon: FaInstagram, href: "/" },
  ].map(({ icon: Icon, href }, index) => (
    <Link
      key={index}
      href={href}
      className="
        flex h-14 w-14 items-center justify-center
        rounded-full
        bg-(--primary)
        text-[#132207]
        transition-all duration-300
        hover:scale-105
      "
    >
      <Icon size={22} />
    </Link>
  ))}
</div>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="mt-16 border-t border-white/30 pt-8">
            <div className="flex flex-col gap-4 text-[17px] text-white/95 md:flex-row md:items-center md:justify-between">
              <p>
                Plumbing Service Template Kit by{" "}
                <span className="font-semibold">Soldevix Solutions</span>
              </p>
              <p>Copyright © 2025. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;