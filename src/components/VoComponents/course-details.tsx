"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const courseDetails = {
  title: "Full Stack Web Development Bootcamp",
  description:
    "Become a professional web developer in 12 weeks with our comprehensive bootcamp covering frontend, backend, and deployment.",
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
};

export default function CourseDetails() {
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
      id="course-details"
      ref={sectionRef}
      className="bg-brand-sky-mint-5 py-12 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <h2 className="text-brand-white mb-4 text-2xl font-bold xs:text-3xl sm:mb-6 sm:text-4xl">
              {courseDetails.title}
            </h2>
            <p className="text-brand-grey mb-6 text-base xs:text-lg sm:mb-8">
              {courseDetails.description}
            </p>
            <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:grid-cols-3 sm:gap-6">
              {courseDetails.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center transition-all duration-1000 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-brand-sky-mint-20 mb-1 inline-flex h-8 w-8 items-center justify-center rounded-full sm:mb-2 sm:h-12 sm:w-12">
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
            <Button
              size="lg"
              className="bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary px-6 py-3 text-base font-semibold sm:px-8 sm:py-4 sm:text-lg"
            >
              Enroll Now - $2,999
            </Button>
          </div>
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="bg-brand-white-5 rounded-xl p-4 backdrop-blur-sm xs:p-6 sm:p-8">
              <h3 className="text-brand-white mb-4 text-lg font-semibold sm:mb-6 sm:text-2xl">
                What You'll Learn
              </h3>
              <div className="space-y-2 sm:space-y-4">
                {courseDetails.features.map((feature, index) => (
                  <div
                    key={feature}
                    className={`flex items-start space-x-2 transition-all duration-1000 sm:space-x-3 ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="text-brand-sky-mint mt-0.5 h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6" />
                    <span className="text-brand-grey text-sm xs:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
