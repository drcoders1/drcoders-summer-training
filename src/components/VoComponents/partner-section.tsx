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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-brand-white mb-4 text-3xl font-bold md:text-4xl">
            Partners
          </h2>
          <p className="text-brand-grey mx-auto max-w-2xl text-lg">
            Trusted by industry leaders worldwide
          </p>
        </div>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="bg-brand-white-5 border-brand-white-10 mx-8 flex-shrink-0 rounded-lg border px-6 py-4 backdrop-blur-sm"
              >
                <div className="text-brand-white whitespace-nowrap text-lg font-semibold">
                  {partner}
                </div>
              </div>
            ))}
          </div>

          {/* Fade effects */}
          <div className="from-brand-primary absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r to-transparent"></div>
          <div className="from-brand-primary absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
