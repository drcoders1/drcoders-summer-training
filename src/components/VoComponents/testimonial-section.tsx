"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Ayesha",
    role: "Mern Stack",
    content:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Netus Sit Blandit Dui Tincidunt Dignissim Dictum",
    rating: 5,
  },
  {
    name: "John",
    role: "Frontend Developer",
    content:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Netus Sit Blandit Dui Tincidunt Dignissim Dictum",
    rating: 5,
  },
  {
    name: "Sarah",
    role: "Full Stack Developer",
    content:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Netus Sit Blandit Dui Tincidunt Dignissim Dictum",
    rating: 5,
  },
  {
    name: "Mike",
    role: "Mobile Developer",
    content:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Netus Sit Blandit Dui Tincidunt Dignissim Dictum",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const getCurrentTestimonials = () => {
    return [
      testimonials[currentIndex % testimonials.length],
      testimonials[(currentIndex + 1) % testimonials.length],
    ];
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="bg-brand-primary relative overflow-hidden py-12 sm:py-20"
    >
      {/* Gradient blob effects */}
      <div className="bg-brand-sky-mint-10 absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-2xl filter sm:h-96 sm:w-96 sm:blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-8 text-center transition-all duration-1000 sm:mb-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-gradient-skymint-white mb-4 text-2xl font-bold xs:text-3xl sm:text-4xl lg:text-5xl">
            What Students say about us?
          </h2>
        </div>

        <div className="relative">
          {/* Web View (2 cards horizontal) */}
          <div className="hidden md:block">
            <div
              className={`relative flex gap-6 transition-opacity duration-500 ${isTransitioning ? "opacity-70" : "opacity-100"}`}
            >
              <Button
                onClick={prevTestimonial}
                variant="ghost"
                size="icon"
                className="text-brand-sky-mint hover:bg-brand-sky-mint hover:text-brand-primary absolute -left-12 top-1/2 -translate-y-1/2 transform"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              {getCurrentTestimonials().map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-1 transition-all duration-500 ${isTransitioning ? (index === 0 ? "-translate-x-2" : "translate-x-2") : "translate-x-0"}`}
                >
                  <div
                    className={`h-full rounded-xl p-6 ${
                      index === 0
                        ? "bg-brand-white text-brand-primary"
                        : "bg-brand-white-10 border-brand-white-20 text-brand-white border backdrop-blur-lg"
                    }`}
                  >
                    <div className="mb-4">
                      <div className="text-lg font-semibold">
                        {testimonial!.name}
                      </div>
                      <div
                        className={
                          index === 0
                            ? "text-brand-primary-80"
                            : "text-brand-sky-mint"
                        }
                      >
                        {testimonial!.role}
                      </div>
                    </div>
                    <p
                      className={`mb-4 flex-1 text-sm ${
                        index === 0
                          ? "text-brand-primary-90"
                          : "text-brand-white"
                      }`}
                    >
                      "{testimonial!.content}"
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial!.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 fill-current ${
                            index === 0 ? "text-yellow-600" : "text-yellow-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <Button
                onClick={nextTestimonial}
                variant="ghost"
                size="icon"
                className="text-brand-sky-mint hover:bg-brand-sky-mint hover:text-brand-primary absolute -right-12 top-1/2 -translate-y-1/2 transform"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Mobile View (2 cards vertical) */}
          <div className="md:hidden">
            <div
              className={`relative space-y-4 transition-opacity duration-500 ${isTransitioning ? "opacity-70" : "opacity-100"}`}
            >
              {getCurrentTestimonials().map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${isTransitioning ? (index === 0 ? "-translate-y-2" : "translate-y-2") : "translate-y-0"}`}
                >
                  <div
                    className={`rounded-xl p-6 ${
                      index === 0
                        ? "bg-brand-white text-brand-primary"
                        : "bg-brand-white-10 border-brand-white-20 text-brand-white border backdrop-blur-lg"
                    }`}
                  >
                    <div className="mb-3">
                      <div className="text-base font-semibold">
                        {testimonial!.name}
                      </div>
                      <div
                        className={
                          index === 0
                            ? "text-brand-primary-80"
                            : "text-brand-sky-mint"
                        }
                      >
                        {testimonial!.role}
                      </div>
                    </div>
                    <p
                      className={`mb-3 flex-1 text-xs ${
                        index === 0
                          ? "text-brand-primary-90"
                          : "text-brand-white"
                      }`}
                    >
                      "{testimonial!.content}"
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial!.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 fill-current ${
                            index === 0 ? "text-yellow-600" : "text-yellow-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="sm"
                className="border-brand-sky-mint text-brand-sky-mint hover:bg-brand-sky-mint hover:text-brand-primary px-3 py-2"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="sm"
                className="border-brand-sky-mint text-brand-sky-mint hover:bg-brand-sky-mint hover:text-brand-primary px-3 py-2"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
