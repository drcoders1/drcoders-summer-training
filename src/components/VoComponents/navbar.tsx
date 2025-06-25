"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Stats", href: "#stats" },
  { name: "Why Us", href: "#why-choose-us" },
  { name: "Courses", href: "#courses" },
  { name: "Testimonials", href: "#testimonials" },
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
              width={60}
              height={60}
              className="h-12 w-12 sm:h-14 sm:w-14"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-base font-semibold text-white transition hover:text-sky-300 sm:text-lg"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#enroll")}
              className="text-brand-primary ml-6 rounded-lg bg-sky-400 px-5 py-2.5 text-base font-semibold transition hover:bg-sky-500 sm:text-lg"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-sky-300 focus:outline-none"
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
              className="hover:bg-brand-primary/90 block w-full rounded-md px-4 py-2 text-left text-lg font-medium text-white transition hover:text-sky-300"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("#enroll")}
            className="text-brand-primary mt-2 block w-full rounded-lg bg-sky-400 px-4 py-2 text-left text-lg font-semibold transition hover:bg-sky-500"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
}
