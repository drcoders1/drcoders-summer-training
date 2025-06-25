"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  Clock,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const courses = [
  {
    title: "Full Stack Web Development Bootcamp",
    description:
      "Become a professional web developer in 12 weeks with our comprehensive bootcamp covering frontend, backend, and deployment.",
    price: "$2,999",
    features: [
      "React & Next.js Frontend Development",
      "Node.js & Express Backend",
      "Database Design with PostgreSQL",
      "Authentication & Security",
      "API Development & Integration",
      "Deployment & DevOps Basics",
      "Real-world Project Portfolio",
      "Career Support & Job Placement",
    ],
    stats: [
      { icon: Clock, label: "Duration", value: "12 Weeks" },
      { icon: Users, label: "Class Size", value: "Max 20" },
      { icon: Award, label: "Certificate", value: "Included" },
    ],
  },
  {
    title: "Frontend Development Bootcamp",
    description:
      "Master the modern frontend stack including HTML, CSS, JavaScript, React, and responsive UI design in 8 weeks.",
    price: "$1,999",
    features: [
      "HTML, CSS, JavaScript Fundamentals",
      "Advanced Responsive UI/UX",
      "React and Component Design",
      "State Management",
      "API Integration",
      "Version Control with Git",
      "Portfolio Projects",
      "Deployment & Hosting",
    ],
    stats: [
      { icon: Clock, label: "Duration", value: "8 Weeks" },
      { icon: Users, label: "Class Size", value: "Max 25" },
      { icon: Award, label: "Certificate", value: "Included" },
    ],
  },
  {
    title: "Mobile App Development using Flutter",
    description:
      "Build beautiful cross-platform apps using Flutter and Dart with real-world features and Firebase backend.",
    price: "$2,499",
    features: [
      "Dart Programming Fundamentals",
      "Flutter UI Widgets",
      "Navigation & State Management",
      "Firebase Integration",
      "Authentication & Storage",
      "Push Notifications",
      "Publishing to App Stores",
      "Capstone App Project",
    ],
    stats: [
      { icon: Clock, label: "Duration", value: "10 Weeks" },
      { icon: Users, label: "Class Size", value: "Max 15" },
      { icon: Award, label: "Certificate", value: "Included" },
    ],
  },
];

export default function CourseDetails() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % courses.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="course-details"
      ref={sectionRef}
      className="bg-brand-sky-mint-5 relative px-4 py-12 sm:py-20"
    >
      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 p-2 sm:left-4"
      >
        <ChevronLeft className="text-brand-sky-mint h-6 w-6 transition hover:scale-110" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 p-2 sm:right-4"
      >
        <ChevronRight className="text-brand-sky-mint h-6 w-6 transition hover:scale-110" />
      </button>

      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="relative transition-transform duration-700 ease-in-out">
            {courses.map((course, index) => (
              <div
                key={index}
                className={clsx(
                  "absolute left-0 top-0 w-full transition-opacity duration-700",
                  {
                    "relative opacity-100": index === activeIndex,
                    "pointer-events-none opacity-0": index !== activeIndex,
                  },
                )}
              >
                <div className="grid grid-cols-1 items-start gap-8 sm:gap-12 lg:grid-cols-2">
                  {/* Left Side */}
                  <div
                    className={`transition-all duration-1000 ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-10 opacity-0"
                    }`}
                  >
                    <h2 className="text-brand-white mb-4 text-2xl font-bold xs:text-3xl sm:mb-6 sm:text-4xl">
                      {course.title}
                    </h2>
                    <p className="text-brand-grey mb-6 text-base xs:text-lg sm:mb-8">
                      {course.description}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-4 sm:mb-8">
                      {course.stats.map((stat, statIndex) => (
                        <div
                          key={stat.label}
                          className={`text-center transition-all duration-1000 ${
                            isVisible
                              ? "translate-y-0 opacity-100"
                              : "translate-y-10 opacity-0"
                          }`}
                          style={{ transitionDelay: `${statIndex * 200}ms` }}
                        >
                          <div className="bg-brand-sky-mint-20 mb-1 inline-flex h-10 w-10 items-center justify-center rounded-full sm:mb-2 sm:h-12 sm:w-12">
                            <stat.icon className="text-brand-sky-mint h-5 w-5 sm:h-6 sm:w-6" />
                          </div>
                          <div className="text-brand-white text-sm font-semibold xs:text-base">
                            {stat.value}
                          </div>
                          <div className="text-brand-grey text-xs xs:text-sm">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Desktop Button */}
                    <div className="hidden sm:block">
                      <Button
                        size="lg"
                        className="bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary px-6 py-3 text-base font-semibold sm:px-8 sm:py-4 sm:text-lg"
                      >
                        Enroll Now - {course.price}
                      </Button>
                    </div>
                  </div>

                  {/* Right Side - What You'll Learn */}
                  <div
                    className={`transition-all duration-1000 ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-10 opacity-0"
                    }`}
                  >
                    <div className="bg-brand-white-5 rounded-xl p-4 backdrop-blur-sm xs:p-6 sm:p-8">
                      <h3 className="text-brand-white mb-4 text-lg font-semibold sm:mb-6 sm:text-2xl">
                        What You'll Learn
                      </h3>
                      <div className="space-y-2 sm:space-y-4">
                        {course.features.map((feature, i) => (
                          <div
                            key={i}
                            className={`flex items-start space-x-2 transition-all duration-1000 sm:space-x-3 ${
                              isVisible
                                ? "translate-x-0 opacity-100"
                                : "translate-x-10 opacity-0"
                            }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          >
                            <CheckCircle className="text-brand-sky-mint mt-0.5 h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6" />
                            <span className="text-brand-grey text-sm xs:text-base">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      {/* Mobile Button */}
                      <div className="pt-8 sm:hidden">
                        <Button
                          size="lg"
                          className="bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary w-full px-6 py-3 text-base font-semibold"
                        >
                          Enroll Now - {course.price}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="mt-12 flex justify-center space-x-2">
            {courses.map((_, idx) => (
              <span
                key={idx}
                className={clsx(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  idx === activeIndex
                    ? "bg-brand-sky-mint"
                    : "bg-brand-white-10",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
