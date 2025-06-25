"use client";

import { useEffect, useRef, useState } from "react";

const partners = [
  "MICROSOFT",
  "GOOGLE",
  "AMAZON",
  "META",
  "APPLE",
  "NETFLIX",
  "SPOTIFY",
  "ADOBE",
  "TESLA",
  "NVIDIA",
  "SALESFORCE",
  "ORACLE",
];

export default function PartnerSection() {
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
      id="partners"
      ref={sectionRef}
      className="bg-brand-primary relative overflow-hidden py-20"
    >
      {/* Gradient blob effects */}
      {/* <div className="bg-brand-sky-mint-10 absolute right-20 top-10 h-96 w-96 rounded-full blur-3xl filter"></div> */}

      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div
          className={`mb-8 text-center transition-all duration-1000 sm:mb-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-gradient-skymint-white mb-2 text-2xl font-bold xs:text-3xl sm:mb-4 sm:text-4xl">
            Our Partners
          </h2>
          <p className="text-brand-grey mx-auto max-w-xs text-base xs:max-w-md xs:text-lg sm:max-w-2xl">
            Trusted by industry leaders worldwide
          </p>
        </div>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="bg-brand-white-5 border-brand-white-10 mx-2 flex-shrink-0 rounded-lg border px-4 py-2 backdrop-blur-sm xs:mx-4 xs:px-6 xs:py-4 sm:mx-8"
              >
                <div className="text-brand-white whitespace-nowrap text-base font-semibold xs:text-lg">
                  {partner}
                </div>
              </div>
            ))}
          </div>

          {/* Fade effects */}
          <div className="from-brand-primary absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r to-transparent xs:w-20 sm:w-32"></div>
          <div className="from-brand-primary absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l to-transparent xs:w-20 sm:w-32"></div>
        </div>
      </div>
    </section>
  );
}
