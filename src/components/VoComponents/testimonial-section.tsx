"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Ayesha",
    role: "Web Developer",
    content:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua",
    rating: 5,
    isHighlighted: false,
  },
  {
    name: "Ayesha",
    role: "Full Stack Developer",
    content:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Enim Ad Minim Veniam",
    rating: 5,
    isHighlighted: true,
  },
  {
    name: "Ayesha",
    role: "Mobile Developer",
    content:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua",
    rating: 5,
    isHighlighted: false,
  },
];

export default function TestimonialSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="bg-brand-primary relative overflow-hidden py-20"
    >
      {/* Gradient blob effects */}
      <div className="bg-brand-sky-mint-10 absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl filter"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-brand-white mb-4 text-3xl font-bold md:text-4xl">
            What Students say about us?
          </h2>
        </div>

        <div className="relative">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                } ${index === 1 ? "md:scale-110" : ""}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`flex h-[300px] flex-col rounded-xl p-8 ${
                    testimonial.isHighlighted
                      ? "from-brand-white to-brand-white-90 text-brand-primary bg-gradient-to-br"
                      : "bg-brand-white-5 border-brand-white-10 text-brand-white border backdrop-blur-sm"
                  }`}
                >
                  <div className="mb-4 flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current text-yellow-400"
                      />
                    ))}
                  </div>

                  <p
                    className={`mb-6 flex-1 ${testimonial.isHighlighted ? "text-brand-primary-80" : "text-brand-grey"}`}
                  >
                    "{testimonial.content}"
                  </p>

                  <div>
                    <div
                      className={`font-semibold ${
                        testimonial.isHighlighted
                          ? "text-brand-primary"
                          : "text-brand-white"
                      }`}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className={`text-sm ${
                        testimonial.isHighlighted
                          ? "text-brand-primary-60"
                          : "text-brand-sky-mint"
                      }`}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="border-brand-sky-mint text-brand-sky-mint hover:bg-brand-sky-mint hover:text-brand-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="sm"
              className="border-brand-sky-mint text-brand-sky-mint hover:bg-brand-sky-mint hover:text-brand-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
