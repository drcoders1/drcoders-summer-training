"use client";

import { useEffect, useRef, useState } from "react";
import { Users, BookOpen, Award, Briefcase, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

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
      className="bg-brand-primary relative overflow-hidden px-4 py-20"
    >
      {/* Gradient blob effects */}
      <div className="bg-brand-sky-mint-20 absolute bottom-28 left-0 h-80 w-80 rounded-full blur-3xl filter"></div>

      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-1000 sm:mb-16 lg:mb-28 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-gradient-skymint-white mb-4 text-2xl font-bold xs:text-3xl sm:text-4xl lg:text-5xl">
            Why Dr Coders Academy is best for you?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
          {/* Left column - 2 cards */}
          <div className="space-y-4 sm:space-y-6">
            {features.slice(0, 2).map((feature, index) => (
              <Card
                key={feature.title}
                className={`bg-brand-glass border-brand-white-20 group relative h-auto cursor-pointer overflow-hidden border backdrop-blur-sm transition-all duration-500 hover:scale-105 sm:h-[285px] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Hover reveal overlay */}
                <div className="bg-brand-sky-mint absolute inset-0 -translate-y-full transform transition-transform duration-500 group-hover:translate-y-0"></div>
                <div className="relative z-10 flex h-full flex-col p-2">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-opacity-50 transition-colors group-hover:bg-opacity-100 sm:mb-4 sm:h-12 sm:w-12">
                      <feature.icon className="text-brand-sky-mint group-hover:text-brand-primary h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-brand-white text-base font-semibold group-hover:text-black sm:text-xl">
                      {feature.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-brand-grey text-sm group-hover:text-black sm:text-base">
                      {feature.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Middle column - 2 cards */}
          <div className="space-y-4 sm:space-y-6">
            {features.slice(2, 4).map((feature, index) => (
              <Card
                key={feature.title}
                className={`bg-brand-glass border-brand-white-20 group relative h-auto cursor-pointer overflow-hidden border backdrop-blur-sm transition-all duration-500 hover:scale-105 sm:h-[285px] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 2) * 200}ms` }}
              >
                {/* Hover reveal overlay */}
                <div className="bg-brand-sky-mint absolute inset-0 -translate-y-full transform transition-transform duration-500 group-hover:translate-y-0"></div>
                <div className="relative z-10 flex h-full flex-col p-2">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-opacity-50 transition-colors group-hover:bg-opacity-100 sm:mb-4 sm:h-12 sm:w-12">
                      <feature.icon className="text-brand-sky-mint group-hover:text-brand-primary h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-brand-white text-base font-semibold group-hover:text-black sm:text-xl">
                      {feature.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-brand-grey text-sm group-hover:text-black sm:text-base">
                      {feature.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Right column - Main feature card */}
          <Card
            className={`from-brand-sky-mint text-brand-primary h-auto cursor-pointer bg-gradient-to-br transition-all duration-500 hover:scale-105 sm:h-full ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <CardHeader>
              <div className="bg-brand-primary-20 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full sm:mb-6 sm:h-16 sm:w-16">
                <mainFeature.icon className="text-brand-primary h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg font-bold sm:text-2xl">
                {mainFeature.title}
              </h3>
            </CardHeader>
            <CardContent className="flex flex-col">
              <p className="text-brand-primary-80 flex-1 text-sm sm:text-base">
                {mainFeature.description}
              </p>
              <div className="mb-4 space-y-2 sm:mb-8 sm:space-y-3">
                {mainFeature.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-xs sm:text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="bg-brand-primary hover:bg-brand-primary-90 text-brand-sky-mint w-full text-sm font-semibold sm:text-base">
                Free Demo Class
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
