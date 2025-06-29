"use client";

import { useEffect, useRef, useState } from "react";
import {
  Smartphone,
  Code,
  Monitor,
  Clock,
  FolderOpen,
  Award,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const courses = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Build native and cross-platform mobile applications",
    duration: "12 Weeks",
    projects: "5+ Projects",
    certificate: "Industry Certificate",
    level: "Beginner Level",
    detailsLink: "/pdfs/mobile-app-development.pdf",
    isHighlighted: false,
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Master both frontend and backend development",
    duration: "16 Weeks",
    projects: "8+ Projects",
    certificate: "Job Placement Support",
    level: "Beginner Level",
    detailsLink: "/pdfs/full-stack-development.pdf",
    isHighlighted: true,
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Create beautiful and responsive user interfaces",
    duration: "10 Weeks",
    projects: "6+ Projects",
    certificate: "Completion Certificate",
    level: "Beginner Level",
    detailsLink: "/pdfs/frontend-development.pdf",
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

  const handleDetailsClick = (detailsLink: string) => {
    window.open(detailsLink, "_blank");
  };

  const handleEnrollClick = () => {
    // Scroll to enrollment form
    const enrollSection = document.getElementById("enroll-now");
    if (enrollSection) {
      enrollSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="bg-brand-primary relative overflow-hidden px-4 py-12 sm:py-20"
    >
      {/* Gradient blob effects */}
      <div className="bg-brand-sky-mint-10 absolute bottom-4 right-4 h-40 w-40 rounded-full blur-2xl filter sm:bottom-20 sm:right-10 sm:h-80 sm:w-80 sm:blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div
          className={`mb-8 text-center transition-all duration-1000 sm:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
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
              className={`flex flex-col border-none transition-all duration-300 hover:scale-105 ${
                course.isHighlighted
                  ? "from-brand-sky-mint to-brand-sky-mint-80 text-brand-primary bg-gradient-to-br"
                  : "bg-brand-white-5 border-brand-white-10 text-brand-white hover:bg-brand-white-10 backdrop-blur-sm"
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader className="flex-shrink-0 pb-4">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full sm:mb-6 sm:h-16 sm:w-16 ${
                    course.isHighlighted
                      ? "bg-brand-primary-20"
                      : "bg-brand-sky-mint-20"
                  }`}
                >
                  <course.icon
                    className={`h-7 w-7 sm:h-9 sm:w-9 ${
                      course.isHighlighted
                        ? "text-brand-primary"
                        : "text-brand-sky-mint"
                    }`}
                  />
                </div>

                <h3 className="mb-2 text-lg font-bold sm:text-2xl">
                  {course.title}
                </h3>

                <p
                  className={`text-sm sm:text-base ${
                    course.isHighlighted
                      ? "text-brand-primary-80"
                      : "text-brand-grey"
                  }`}
                >
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                {/* Feature Icons Grid */}
                <div className="mb-6 grid grid-cols-2 gap-4 sm:gap-6">
                  {/* Duration */}
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full sm:h-12 sm:w-12 ${
                        course.isHighlighted
                          ? "bg-brand-primary-20"
                          : "bg-brand-sky-mint-20"
                      }`}
                    >
                      <Clock
                        className={`h-5 w-5 sm:h-6 sm:w-6 ${course.isHighlighted ? "text-brand-primary" : "text-brand-sky-mint"}`}
                      />
                    </div>
                    <span className="text-xs font-medium sm:text-sm">
                      {course.duration}
                    </span>
                  </div>

                  {/* Projects */}
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full sm:h-12 sm:w-12 ${
                        course.isHighlighted
                          ? "bg-brand-primary-20"
                          : "bg-brand-sky-mint-20"
                      }`}
                    >
                      <FolderOpen
                        className={`h-5 w-5 sm:h-6 sm:w-6 ${course.isHighlighted ? "text-brand-primary" : "text-brand-sky-mint"}`}
                      />
                    </div>
                    <span className="text-xs font-medium sm:text-sm">
                      {course.projects}
                    </span>
                  </div>

                  {/* Certificate */}
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full sm:h-12 sm:w-12 ${
                        course.isHighlighted
                          ? "bg-brand-primary-20"
                          : "bg-brand-sky-mint-20"
                      }`}
                    >
                      <Award
                        className={`h-5 w-5 sm:h-6 sm:w-6 ${course.isHighlighted ? "text-brand-primary" : "text-brand-sky-mint"}`}
                      />
                    </div>
                    <span className="text-center text-xs font-medium leading-tight sm:text-sm">
                      {course.certificate}
                    </span>
                  </div>

                  {/* Level */}
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full sm:h-12 sm:w-12 ${
                        course.isHighlighted
                          ? "bg-brand-primary-20"
                          : "bg-brand-sky-mint-20"
                      }`}
                    >
                      <TrendingUp
                        className={`h-5 w-5 sm:h-6 sm:w-6 ${course.isHighlighted ? "text-brand-primary" : "text-brand-sky-mint"}`}
                      />
                    </div>
                    <span className="text-xs font-medium sm:text-sm">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Buttons - Always at bottom */}
                <div className="mt-auto space-y-3 pt-4">
                  <Button
                    onClick={() => handleDetailsClick(course.detailsLink)}
                    variant="outline"
                    className={`w-full py-2 text-sm font-semibold sm:py-3 ${
                      course.isHighlighted
                        ? "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-sky-mint bg-transparent"
                        : "border-brand-sky-mint text-brand-sky-mint hover:bg-brand-sky-mint hover:text-brand-primary bg-transparent"
                    }`}
                  >
                    View Details
                  </Button>

                  <Button
                    onClick={handleEnrollClick}
                    className={`w-full py-2 text-sm font-semibold sm:py-3 ${
                      course.isHighlighted
                        ? "bg-brand-primary hover:bg-brand-primary-90 text-brand-sky-mint"
                        : "bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary"
                    }`}
                  >
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
