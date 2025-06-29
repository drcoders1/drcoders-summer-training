"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Stats", href: "#stats" },
  { name: "Courses", href: "#courses" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "bg-brand-primary/90 shadow-xl" : "bg-brand-primary/60"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={ImageAssets.Newlogo}
              alt="Logo"
              width={80}
              height={80}
              className="h-8 w-auto sm:h-12 md:h-16"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-brand-white hover:text-brand-sky-mint text-base font-semibold transition sm:text-lg"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#enroll")}
              className="bg-brand-sky-mint text-brand-primary hover:bg-brand-sky-mint-90 ml-6 rounded-lg px-5 py-2.5 text-base font-semibold transition sm:text-lg"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-white hover:text-brand-sky-mint inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`transition-max-height bg-brand-primary/80 overflow-hidden duration-300 md:hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="space-y-2 px-5 py-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-brand-white hover:text-brand-sky-mint hover:bg-brand-primary/90 block w-full rounded-md px-4 py-2 text-left text-lg font-medium transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
