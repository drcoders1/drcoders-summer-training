"use client";

import { useEffect, useRef, useState } from "react";
import { Users, BookOpen, Award, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: BookOpen, number: 10, suffix: "+", label: "Events Organized" },
  { icon: Users, number: 5000, suffix: "+", label: "Students Reached" },
  { icon: Award, number: 100, suffix: "+", label: "Certifications Issued" },
  { icon: GraduationCap, number: 20, suffix: "+", label: "Active Ambassadors" },
];

function AnimatedCounter({
  target,
  suffix,
  duration = 2000,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setIsVisible(true),
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return (
    <div
      ref={ref}
      className="text-brand-sky-mint text-4xl font-bold md:text-5xl"
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function AmbassadorSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      ref={sectionRef}
      className="bg-brand-sky-mint-5 relative px-4 py-16 sm:py-24"
    >
      {/* Optional blob */}
      <div className="bg-brand-sky-mint-10 absolute left-4 top-4 h-40 w-40 rounded-full blur-2xl filter sm:left-20 sm:top-10 sm:h-96 sm:w-96 sm:blur-3xl" />

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-gradient-skymint-white mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Become a Campus Ambassador
            </h2>
            <p className="text-brand-grey mb-6 max-w-lg text-base sm:text-lg">
              Empower your campus by bringing tech learning to life. Lead,
              inspire, and build your resume with real-world experience.
            </p>

            <Button className="bg-brand-sky-mint text-brand-primary hover:bg-brand-sky-mint-80">
              Join as Ambassador
            </Button>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <Card
                key={stat.label}
                className={`bg-brand-sky-mint-90 border-none text-center backdrop-blur-sm transition-transform duration-500 hover:scale-105 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="bg-brand-primary-20 mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full sm:mb-4 sm:h-12 sm:w-12">
                    <stat.icon className="text-brand-primary h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  <div className="text-brand-primary mt-1 text-sm font-medium sm:text-base">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
