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
      "A complete roadmap to becoming a job-ready developer in just 12 weeks. From creating slick UIs to building secure backends and deploying your own full-stack apps — this bootcamp walks you through it all, step by step.",
    price: "PKR 3,500/month",
    features: [
      "Build frontend apps using React and Next.js",
      "Design secure backends with Node.js & Express",
      "Work with real-world databases using MongoDB",
      "Implement login systems with JWT/Auth",
      "Connect everything through clean API integrations",
      "Learn deployment & hosting like a pro",
      "Create a portfolio with real, working projects",
      "Get job prep, resume support, and hiring referrals",
    ],
    stats: [
      { icon: Clock, label: "Duration", value: "16 Weeks" },
      { icon: Users, label: "Class Size", value: "Max 20" },
      { icon: Award, label: "Certificate", value: "Included" },
    ],
  },
  {
    title: "Frontend Web Development Bootcamp",
    description:
      "Build stunning, responsive websites that don’t just work — they impress. In just 12 weeks, go from basic HTML to professional-level React UIs with animations, design systems, and API connections.",
    price: "PKR 3,500/month",
    features: [
      "HTML, CSS, and JavaScript – from scratch to strong",
      "Create responsive layouts with Tailwind CSS",
      "Master React for real-world component design",
      "Manage state with hooks & context APIs",
      "Call and use real APIs in your projects",
      "Push code like a pro using Git & GitHub",
      "Build a full portfolio website",
      "Deploy your projects live to the web",
    ],
    stats: [
      { icon: Clock, label: "Duration", value: "12 Weeks" },
      { icon: Users, label: "Class Size", value: "Max 25" },
      { icon: Award, label: "Certificate", value: "Included" },
    ],
  },
  {
    title: "Mobile App Development with Flutter",
    description:
      "Learn how to build smooth, modern mobile apps with Flutter and Dart — even if you’ve never written a single line of code before. Publish to Play Store, integrate Firebase, and bring your app ideas to life.",
    price: "PKR 3,500/month",
    features: [
      "Dart basics and Flutter setup",
      "Craft beautiful UI using widgets",
      "Add navigation and manage state",
      "Connect Firebase for auth & real-time storage",
      "Send push notifications",
      "Test & debug like a pro",
      "Launch your app on Google Play",
      "Build a capstone app by the end",
    ],
    stats: [
      { icon: Clock, label: "Duration", value: "12 Weeks" },
      { icon: Users, label: "Class Size", value: "Max 15" },
      { icon: Award, label: "Certificate", value: "Included" },
    ],
  },
];

export default function CourseDetails() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showEnroll, setShowEnroll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % courses.length);
      setIsFading(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
      setIsFading(false);
    }, 300);
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const course = courses[activeIndex];

  return (
    <section
      id="course-details"
      ref={sectionRef}
      onTouchStart={(e) => (touchStartX.current = e.changedTouches[0]!.screenX)}
      onTouchEnd={(e) => {
        touchEndX.current = e.changedTouches[0]!.screenX;
        handleSwipe();
      }}
      className="bg-brand-sky-mint-5 relative px-4 py-12 sm:py-20"
    >
      {/* Arrows */}
      <div className="absolute left-0 right-0 top-1/2 z-10 hidden -translate-y-1/2 justify-between px-4 sm:flex">
        <button onClick={handlePrev} aria-label="Previous Course">
          <ChevronLeft className="text-brand-sky-mint h-6 w-6 transition hover:scale-110" />
        </button>
        <button onClick={handleNext} aria-label="Next Course">
          <ChevronRight className="text-brand-sky-mint h-6 w-6 transition hover:scale-110" />
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div
          className={clsx(
            "transition-opacity duration-500",
            isFading ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="grid grid-cols-1 items-start gap-8 sm:gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-gradient-skymint-white mb-4 text-3xl font-bold sm:pr-8 sm:text-4xl lg:text-5xl">
                {course!.title}
              </h2>
              <p className="text-brand-grey mb-6 text-base xs:text-lg sm:mb-8">
                {course!.description}
              </p>
              <div className="mb-6 flex flex-wrap justify-center gap-6 sm:mb-8 sm:justify-start">
                {course!.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`text-center transition-all duration-1000 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <div className="bg-brand-sky-mint-20 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full">
                      <stat.icon className="text-brand-sky-mint h-6 w-6" />
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
              <div className="hidden sm:block">
                <Button
                  className="bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary px-6 py-3 text-base font-semibold sm:px-8 sm:py-4 sm:text-lg"
                  onClick={() => setShowEnroll(true)}
                >
                  Enroll Now - {course!.price}
                </Button>
              </div>
            </div>

            {/* Right Side */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-brand-white-5 rounded-xl p-4 backdrop-blur-sm xs:p-6 sm:p-8">
                <h3 className="text-brand-white mb-4 text-center text-lg font-semibold sm:mb-6 sm:text-left sm:text-2xl">
                  What You'll Learn
                </h3>
                <div className="space-y-2 sm:space-y-4">
                  {course!.features.map((feature, i) => (
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
                {/* Mobile CTA */}
                <div className="pt-8 sm:hidden">
                  <Button
                    className="bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary w-full px-6 py-3 text-base font-semibold"
                    onClick={() => setShowEnroll(true)}
                  >
                    Enroll Now - {course!.price}
                  </Button>
                </div>
              </div>
            </div>
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

          {/* Arrows - Mobile */}
          <div className="mt-6 flex justify-center space-x-6 sm:hidden">
            <button onClick={handlePrev} aria-label="Previous Course">
              <ChevronLeft className="text-brand-sky-mint h-6 w-6" />
            </button>
            <button onClick={handleNext} aria-label="Next Course">
              <ChevronRight className="text-brand-sky-mint h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
