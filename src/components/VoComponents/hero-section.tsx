"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, 
            hsl(var(--brand-primary)) 0%, 
            hsl(var(--brand-primary)) 40%, 
            hsl(var(--brand-sky-mint)) 100%
          )
        `,
      }}
    >
      {/* Animated Star Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main star image */}
        <div className="absolute left-1/4 top-1/4 h-32 w-32 animate-pulse opacity-60">
          <img
            src="/images/star.png"
            alt="Star effect"
            className="animate-spin-slow h-full w-full object-contain"
          />
        </div>

        {/* Additional star effects */}
        <div className="absolute right-1/4 top-3/4 h-24 w-24 animate-pulse opacity-40 delay-1000">
          <img
            src="/images/star.png"
            alt="Star effect"
            className="animate-spin-slow h-full w-full object-contain"
          />
        </div>

        <div className="delay-2000 absolute bottom-1/4 left-1/3 h-16 w-16 animate-pulse opacity-30">
          <img
            src="/images/star.png"
            alt="Star effect"
            className="animate-spin-slow h-full w-full object-contain"
          />
        </div>

        {/* Glowing orbs for additional ambiance */}
        <div className="bg-brand-sky-mint/20 absolute right-20 top-20 h-72 w-72 animate-pulse rounded-full mix-blend-multiply blur-xl filter"></div>
        <div className="bg-brand-sky-mint/10 absolute bottom-20 left-20 h-96 w-96 animate-pulse rounded-full mix-blend-multiply blur-2xl filter delay-1000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-brand-white mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            This Summer Learn Something
            <span className="from-brand-white to-brand-sky-mint block bg-gradient-to-r bg-clip-text text-transparent">
              Exciting With Our Experts
            </span>
          </h1>
        </div>

        <div
          className={`transition-all delay-300 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className="text-brand-grey mx-auto mb-8 max-w-4xl text-xl md:text-2xl">
            Build Your First Web Or Mobile App In Just 3 Months With
            <br />
            Our Exclusive Summer Training Program
          </p>
        </div>

        <div
          className={`transition-all delay-500 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              size="lg"
              className="bg-brand-sky-mint hover:bg-brand-sky-mint/90 text-brand-primary hover:shadow-brand-sky-mint/25 group relative overflow-hidden px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center">
                Enrol Now
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="from-brand-sky-mint to-brand-sky-mint/80 absolute inset-0 origin-left scale-x-0 transform bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100"></div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-brand-white/30 bg-brand-white/10 text-brand-white hover:bg-brand-white hover:text-brand-primary hover:shadow-brand-white/25 group relative overflow-hidden border-2 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center">
                <Play className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Free Demo Class
              </span>
              <div className="from-brand-white to-brand-white/90 absolute inset-0 origin-left scale-x-0 transform bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100"></div>
            </Button>
          </div>
        </div>

        <div
          className={`transition-all delay-700 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group text-center">
              <div className="text-brand-sky-mint text-3xl font-bold transition-transform duration-300 group-hover:scale-110">
                10K+
              </div>
              <div className="text-brand-grey">Students Enrolled</div>
            </div>
            <div className="group text-center">
              <div className="text-brand-sky-mint text-3xl font-bold transition-transform duration-300 group-hover:scale-110">
                95%
              </div>
              <div className="text-brand-grey">Success Rate</div>
            </div>
            <div className="group text-center">
              <div className="text-brand-sky-mint text-3xl font-bold transition-transform duration-300 group-hover:scale-110">
                50+
              </div>
              <div className="text-brand-grey">Expert Instructors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
