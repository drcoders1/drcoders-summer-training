"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Partners", href: "#partners" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Stats", href: "#stats" },
  { name: "Courses", href: "#courses" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Projects", href: "#projects" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full py-5 transition-all duration-300 ${
        scrolled
          ? "bg-brand-primary-95 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          <div className="h-12 w-12 sm:h-20 sm:w-20">
            <Image
              src={ImageAssets.Newlogo}
              alt={"logo"}
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-baseline space-x-2 sm:ml-10 sm:space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-brand-white hover:text-brand-sky-mint rounded-md px-2 py-1 text-xs font-medium transition-colors duration-200 sm:px-3 sm:py-2 sm:text-sm"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-white hover:text-brand-sky-mint p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="bg-brand-primary-95 backdrop-blur-sm md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-brand-white hover:text-brand-sky-mint block w-full rounded-md px-2 py-2 text-left text-base font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
