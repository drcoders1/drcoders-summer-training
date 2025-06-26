"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import PartnerSection from "./partner-section";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showEnroll, setShowEnroll] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="bg-brand-primary relative flex min-h-[50vh] items-center justify-center overflow-hidden px-2 sm:min-h-screen sm:px-4"
    >
      {/* Animated Star Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* gradient glob */}
        <div className="bg-brand-sky-mint-20 absolute -right-10 top-10 h-28 w-28 rounded-full blur-3xl filter sm:h-96 sm:w-96 lg:-right-20 lg:h-60 lg:w-60"></div>
        <div className="bg-brand-sky-mint-20 absolute bottom-14 rounded-full blur-3xl filter sm:h-96 sm:w-96 lg:-left-20 lg:bottom-24 lg:h-60 lg:w-60"></div>
        {/* Main star image */}
        <div className="left-1/8 absolute top-1/3 hidden h-16 w-16 animate-pulse opacity-60 xs:block sm:h-32 sm:w-32">
          <img
            src="/images/star.png"
            alt="Star effect"
            className="animate-spin-slow h-full w-full object-contain"
          />
        </div>
        <div className="absolute right-8 top-20 hidden h-16 w-16 animate-pulse opacity-60 xs:block sm:right-32 sm:top-36 sm:h-32 sm:w-32">
          <img
            src="/images/star.png"
            alt="Star effect"
            className="animate-spin-slow h-full w-full object-contain"
          />
        </div>
        {/* Additional star effects */}
        <div className="absolute right-1/4 top-3/4 hidden h-10 w-10 animate-pulse opacity-40 delay-1000 xs:block sm:h-24 sm:w-24">
          <img
            src="/images/star.png"
            alt="Star effect"
            className="animate-spin-slow h-full w-full object-contain"
          />
        </div>
        <div className="delay-2000 absolute bottom-1/4 left-1/3 hidden h-8 w-8 animate-pulse opacity-60 xs:block sm:h-16 sm:w-16">
          <img
            src="/images/star.png"
            alt="Star effect"
            className="animate-spin-slow h-full w-full object-contain"
          />
        </div>
        {/* Glowing orbs for additional ambiance */}
        <div className="bg-brand-sky-mint-80 absolute right-8 top-8 h-36 w-36 animate-pulse rounded-full mix-blend-multiply blur-xl filter sm:right-20 sm:top-20 sm:h-72 sm:w-72"></div>
        <div className="bg-brand-sky-mint-10 absolute bottom-8 left-8 h-44 w-44 animate-pulse rounded-full mix-blend-multiply blur-2xl filter delay-1000 sm:bottom-20 sm:left-20 sm:h-96 sm:w-96"></div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-2xl px-2 text-center sm:max-w-7xl sm:px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-gradient-skymint-white mb-8 pb-4 text-2xl font-bold leading-tight xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            This Summer Learn Exciting With Our Experts
            {/* <span className="text-gradient-skymint-white block"> */}
            {/* </span> */}
          </h1>
        </div>
        <div
          className={`transition-all delay-300 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <p className="text-brand-white mx-auto mb-6 max-w-xs text-[14px] xs:max-w-md xs:text-lg sm:mb-[70px] sm:max-w-4xl sm:text-lg md:text-2xl">
            Build Your First Web Or Mobile App In Just 3 Months With
            <br className="hidden xs:block" />
            Our Exclusive Summer Training Program
          </p>
        </div>
        <div
          className={`transition-all delay-500 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-6  lg:mb-[100px]">
            <Button
              size="sm"
              className="bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary hover:shadow-brand-sky-mint-2525 group relative overflow-hidden px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:px-8 sm:py-4 sm:text-lg"
              onClick={() => setShowEnroll(true)}
            >
              <span className="relative z-10 flex items-center">
                Enrol Now
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:ml-2 sm:h-5 sm:w-5" />
              </span>
              <div className="from-brand-sky-mint to-brand-sky-mint-80 absolute inset-0 origin-left scale-x-0 transform bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100"></div>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-brand-white-30 bg-brand-white-10 text-brand-white hover:bg-brand-white hover:text-brand-primary hover:shadow-brand-white-20 group relative overflow-hidden border-2 px-4 py-2 text-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:px-8 sm:py-4 sm:text-lg"
            >
              <span className="relative z-10 flex items-center">
                <Play className="mr-1 h-4 w-4 transition-transform duration-300 group-hover:scale-110 sm:mr-2 sm:h-5 sm:w-5" />
                Free Demo Class
              </span>
              <div className="from-brand-white to-brand-white-90 absolute inset-0 origin-left scale-x-0 transform bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100"></div>
            </Button>
          </div>
        </div>
        <div
          className={`transition-all delay-700 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="relative mt-[100px] h-12 w-full sm:mt-8 sm:h-16">
            {/* React */}
            <div className="animate-float-slow absolute left-[5%] top-1/2 h-8 w-8 -translate-y-1/2 sm:left-[10%] sm:h-12 sm:w-12 md:h-14 md:w-14">
              <img
                src="/images/tech-icons/react.svg"
                className="tech-icon-hover h-full w-full object-contain"
              />
            </div>
            {/* Flutter */}
            <div className="animate-float-slow absolute left-[25%] top-1/2 h-8 w-8 -translate-y-1/2 sm:left-[30%] sm:h-12 sm:w-12 md:h-14 md:w-14">
              <img
                src="/images/tech-icons/flutter.svg"
                className="tech-icon-hover h-full w-full object-contain"
              />
            </div>
            {/* MongoDB */}
            <div className="animate-float-medium absolute left-[45%] top-1/2 h-8 w-8 -translate-y-1/2 sm:left-[50%] sm:h-12 sm:w-12 md:h-14 md:w-14">
              <img
                src="/images/tech-icons/mongo.svg"
                className="tech-icon-hover h-full w-full object-contain"
              />
            </div>
            {/* Node.js */}
            <div className="animate-float-slow absolute left-[65%] top-1/2 h-8 w-8 -translate-y-1/2 sm:left-[70%] sm:h-12 sm:w-12 md:h-14 md:w-14">
              <img
                src="/images/tech-icons/node.svg"
                className="tech-icon-hover h-full w-full object-contain"
              />
            </div>
            {/* Firebase */}
            <div className="animate-float-medium absolute right-[5%] top-1/2 h-8 w-8 -translate-y-1/2 sm:right-[10%] sm:h-12 sm:w-12 md:h-14 md:w-14">
              <img
                src="/images/tech-icons/firebase.svg"
                className="tech-icon-hover h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
