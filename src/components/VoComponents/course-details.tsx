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
      className="bg-brand-sky-mint/5 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <h2 className="text-brand-white mb-6 text-3xl font-bold md:text-4xl">
              {courseDetails.title}
            </h2>
            <p className="text-brand-grey mb-8 text-lg">
              {courseDetails.description}
            </p>

            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
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
                  <div className="bg-brand-sky-mint/20 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full">
                    <stat.icon className="text-brand-sky-mint h-6 w-6" />
                  </div>
                  <div className="text-brand-white font-semibold">
                    {stat.value}
                  </div>
                  <div className="text-brand-grey text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-brand-sky-mint hover:bg-brand-sky-mint/90 text-brand-primary px-8 font-semibold"
            >
              Enroll Now - $2,999
            </Button>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="bg-brand-white/5 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-brand-white mb-6 text-2xl font-semibold">
                What You'll Learn
              </h3>
              <div className="space-y-4">
                {courseDetails.features.map((feature, index) => (
                  <div
                    key={feature}
                    className={`flex items-start space-x-3 transition-all duration-1000 ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="text-brand-sky-mint mt-0.5 h-6 w-6 flex-shrink-0" />
                    <span className="text-brand-grey">{feature}</span>
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
