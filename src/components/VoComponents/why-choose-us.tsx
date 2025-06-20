"use client";

import { useEffect, useRef, useState } from "react";
import { Users, BookOpen, Award, Briefcase, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience",
  },
  {
    icon: BookOpen,
    title: "Live Classes",
    description: "Interactive sessions with real-time doubt solving",
  },
  {
    icon: Award,
    title: "Assessment",
    description: "Regular evaluations to track your progress",
  },
  {
    icon: Briefcase,
    title: "Internship Opportunities",
    description: "Get hands-on experience with real projects",
  },
];

const mainFeature = {
  icon: Play,
  title: "Project-Based Learning",
  description:
    "Build real-world projects while learning. Get hands-on experience with industry-standard tools and technologies. Work on live projects that you can showcase in your portfolio.",
  features: [
    "🚀 Live Classes",
    "📊 Regular Assessment",
    "💼 Internship Chances",
    "🎯 Project-Based Learning",
  ],
};

export default function WhyChooseUs() {
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
      id="why-choose-us"
      ref={sectionRef}
      className="bg-brand-primary relative overflow-hidden py-20"
    >
      {/* Gradient blob effects */}
      <div className="bg-brand-sky-mint/10 absolute bottom-20 left-10 h-80 w-80 rounded-full blur-3xl filter"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-brand-white mb-4 text-3xl font-bold md:text-4xl">
            Why Dr Coders Academy is best for you?
          </h2>
        </div>

        <div className="grid h-[600px] grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left column - 2 cards */}
          <div className="space-y-6">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={feature.title}
                className={`bg-brand-white/5 border-brand-white/10 hover:bg-brand-sky-mint hover:text-brand-primary group h-[285px] cursor-pointer rounded-xl border p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex h-full flex-col">
                  <div className="bg-brand-sky-mint/20 group-hover:bg-brand-primary/20 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                    <feature.icon className="text-brand-sky-mint group-hover:text-brand-primary h-6 w-6" />
                  </div>
                  <h3 className="text-brand-white group-hover:text-brand-primary mb-3 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-brand-grey group-hover:text-brand-primary/80 flex-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle column - 2 cards */}
          <div className="space-y-6">
            {features.slice(2, 4).map((feature, index) => (
              <div
                key={feature.title}
                className={`bg-brand-white/5 border-brand-white/10 hover:bg-brand-sky-mint hover:text-brand-primary group h-[285px] cursor-pointer rounded-xl border p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 2) * 200}ms` }}
              >
                <div className="flex h-full flex-col">
                  <div className="bg-brand-sky-mint/20 group-hover:bg-brand-primary/20 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                    <feature.icon className="text-brand-sky-mint group-hover:text-brand-primary h-6 w-6" />
                  </div>
                  <h3 className="text-brand-white group-hover:text-brand-primary mb-3 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-brand-grey group-hover:text-brand-primary/80 flex-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - Main feature card */}
          <div
            className={`from-brand-sky-mint to-brand-sky-mint/80 text-brand-primary cursor-pointer rounded-xl bg-gradient-to-br p-8 transition-all duration-500 hover:scale-105 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="flex h-full flex-col">
              <div className="bg-brand-primary/20 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full">
                <mainFeature.icon className="text-brand-primary h-8 w-8" />
              </div>

              <h3 className="mb-4 text-2xl font-bold">{mainFeature.title}</h3>
              <p className="text-brand-primary/80 mb-6 flex-1">
                {mainFeature.description}
              </p>

              <div className="mb-8 space-y-3">
                {mainFeature.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-brand-sky-mint w-full font-semibold">
                Free Demo Class
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
