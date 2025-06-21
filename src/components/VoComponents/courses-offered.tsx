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
      className="bg-brand-primary relative overflow-hidden py-20"
    >
      {/* Gradient blob effects */}
      <div className="bg-brand-sky-mint-10 absolute bottom-20 right-10 h-80 w-80 rounded-full blur-3xl filter"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-brand-white mb-4 text-3xl font-bold md:text-4xl">
            What this summer got for you
          </h2>
          <p className="text-brand-grey mx-auto max-w-2xl text-lg">
            Choose your path and start building your future today
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {courses.map((course, index) => (
            <Card
              key={course.title}
              className={`h-[500px] border-none transition-all duration-300 hover:scale-105 ${
                course.isHighlighted
                  ? "from-brand-sky-mint to-brand-sky-mint-80 text-brand-primary bg-gradient-to-br"
                  : "bg-brand-white-5 border-brand-white-10 text-brand-white hover:bg-brand-white-10 backdrop-blur-sm"
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full ${
                    course.isHighlighted
                      ? "bg-brand-primary-20"
                      : "bg-brand-sky-mint-20"
                  }`}
                >
                  <course.icon
                    className={`h-8 w-8 ${course.isHighlighted ? "text-brand-primary" : "text-brand-sky-mint"}`}
                  />
                </div>
                <h3 className="text-2xl font-bold">{course.title}</h3>
                <p
                  className={`${course.isHighlighted ? "text-brand-primary-80" : "text-brand-grey"}`}
                >
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="flex h-full flex-col">
                <div className="mb-8 flex-1 space-y-3">
                  {course.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full font-semibold ${
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
