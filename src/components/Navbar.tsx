"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Pages",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { label: "Team", href: "/team" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobilePagesDropdownOpen, setMobilePagesDropdownOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="container-custom pt-4 md:pt-5">
        <div className="glass-nav flex items-center justify-between rounded-2xl px-4 py-3 md:px-6 md:py-4">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 text-white"
            onClick={() => {
              setMobileMenuOpen(false);
              setPagesDropdownOpen(false);
              setMobilePagesDropdownOpen(false);
            }}
          >
            <Image src="/images/logo.png" alt="logo" width={40} height={40} />
            <span className="text-2xl font-bold leading-none sm:text-3xl">
              Plumberz
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item, index) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setPagesDropdownOpen(true)}
                    onMouseLeave={() => setPagesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      className="nav-link flex items-center gap-1 text-lg font-semibold text-white"
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          pagesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {pagesDropdownOpen && (
                      <>
                        {/* Invisible bridge to prevent hover break */}
                        <div className="absolute top-full left-0 h-4 w-full" />

                        <div className="absolute top-full left-0 min-w-[220px] pt-4">
                          <div className="rounded-2xl border border-white/10 bg-black/85 p-2 backdrop-blur-xl shadow-lg">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                className="block rounded-xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:text-[var(--primary)]"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`nav-link flex items-center gap-1 text-lg font-semibold ${
                    index === 0 ? "nav-link-active" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle Menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu mt-3 rounded-2xl p-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((item, index) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.label} className="rounded-xl bg-white/5">
                      <button
                        type="button"
                        onClick={() =>
                          setMobilePagesDropdownOpen((prev) => !prev)
                        }
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-white transition"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            mobilePagesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobilePagesDropdownOpen && (
                        <div className="pb-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobilePagesDropdownOpen(false);
                              }}
                              className="block rounded-xl px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5 hover:text-[var(--primary)]"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition ${
                      index === 0
                        ? "bg-white/5 text-[var(--primary)]"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={18} />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4">
              <Link
                href="/contact"
                className="btn-primary w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}