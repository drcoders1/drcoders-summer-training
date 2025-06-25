"use client";

import { useEffect, useRef, useState } from "react";
import { Smartphone, Code, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const courses = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Build native and cross-platform mobile applications",
    features: [
      "⏰ 12 Weeks Duration",
      "📊 Beginner to Advanced",
      "🎥 40+ Live Lectures",
      "📱 5+ Real Projects",
      "🏆 Industry Certificate",
    ],
    isHighlighted: false,
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Master both frontend and backend development",
    features: [
      "⏰ 16 Weeks Duration",
      "📊 Intermediate Level",
      "🎥 60+ Live Lectures",
      "🌐 8+ Full Stack Projects",
      "💼 Job Placement Support",
    ],
    isHighlighted: true,
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Create beautiful and responsive user interfaces",
    features: [
      "⏰ 10 Weeks Duration",
      "📊 Beginner Friendly",
      "🎥 35+ Live Lectures",
      "🎨 6+ UI/UX Projects",
      "📜 Completion Certificate",
    ],
    isHighlighted: false,
  },
];

export default function CoursesOffered() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry!.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="bg-brand-primary relative overflow-hidden py-12 sm:py-20"
    >
      {/* Gradient blob effects */}
      <div className="bg-brand-sky-mint-10 absolute bottom-4 right-4 h-40 w-40 rounded-full blur-2xl filter sm:bottom-20 sm:right-10 sm:h-80 sm:w-80 sm:blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div
          className={`mb-8 text-center transition-all duration-1000 sm:mb-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-gradient-skymint-white mb-4 text-2xl font-bold xs:text-3xl sm:text-4xl lg:text-5xl">
            What this summer got for you
          </h2>
          <p className="text-brand-grey mx-auto max-w-xs text-base xs:max-w-md xs:text-lg sm:max-w-2xl">
            Choose your path and start building your future today
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:max-w-6xl sm:gap-8 md:grid-cols-3">
          {courses.map((course, index) => (
            <Card
              key={course.title}
              className={`h-80 border-none transition-all duration-300 hover:scale-105 sm:h-[500px] ${
                course.isHighlighted
                  ? "from-brand-sky-mint to-brand-sky-mint-80 text-brand-primary bg-gradient-to-br"
                  : "bg-brand-white-5 border-brand-white-10 text-brand-white hover:bg-brand-white-10 backdrop-blur-sm"
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full sm:mb-6 sm:h-16 sm:w-16 ${
                    course.isHighlighted
                      ? "bg-brand-primary-20"
                      : "bg-brand-sky-mint-20"
                  }`}
                >
                  <course.icon
                    className={`h-6 w-6 sm:h-8 sm:w-8 ${course.isHighlighted ? "text-brand-primary" : "text-brand-sky-mint"}`}
                  />
                </div>
                <h3 className="text-lg font-bold sm:text-2xl">
                  {course.title}
                </h3>
                <p
                  className={`text-sm sm:text-base ${course.isHighlighted ? "text-brand-primary-80" : "text-brand-grey"}`}
                >
                  {course.description}
                </p>
              </CardHeader>
              <CardContent className="flex h-full flex-col">
                <div className="mb-4 flex-1 space-y-2 sm:mb-8 sm:space-y-3">
                  {course.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className={`w-full text-xs font-semibold sm:text-base ${
                    course.isHighlighted
                      ? "bg-brand-primary hover:bg-brand-primary-90 text-brand-sky-mint"
                      : "bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary"
                  }`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
