"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, Users, Award, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: BookOpen, number: 25, suffix: "+", label: "Courses Available" },
  { icon: Users, number: 5000, suffix: "+", label: "Students Enrolled" },
  { icon: Award, number: 1200, suffix: "+", label: "Certifications Issued" },
  { icon: GraduationCap, number: 50, suffix: "+", label: "Expert Instructors" },
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
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry!.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <div
      ref={counterRef}
      className="text-brand-sky-mint text-4xl font-bold md:text-5xl"
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
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
      id="stats"
      ref={sectionRef}
      className="bg-brand-primary relative overflow-hidden py-20"
    >
      {/* Gradient blob effects */}
      <div className="bg-brand-sky-mint/10 absolute left-20 top-10 h-96 w-96 rounded-full blur-3xl filter"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-brand-white mb-4 text-3xl font-bold md:text-4xl">
            What We Build till now
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className={`bg-brand-sky-mint/90 border-none text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="bg-brand-primary/20 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                  <stat.icon className="text-brand-primary h-8 w-8" />
                </div>
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                <div className="text-brand-primary mt-2 text-lg font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
