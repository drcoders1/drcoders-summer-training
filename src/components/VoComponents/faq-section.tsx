"use client";

import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to complete a course?",
    answer:
      "Course duration varies depending on the program. Our bootcamps typically range from 8-16 weeks, with flexible scheduling options including part-time and full-time tracks.",
  },
  {
    question: "Do I need prior experience to enroll?",
    answer:
      "No prior experience is required for most of our beginner courses. We provide comprehensive foundational training and support to help you succeed regardless of your background.",
  },
  {
    question: "What kind of job support do you provide?",
    answer:
      "We offer comprehensive career support including resume review, interview preparation, portfolio development, and direct connections with our hiring partners.",
  },
  {
    question: "Are the courses taught live or pre-recorded?",
    answer:
      "We offer a hybrid approach with live interactive sessions, pre-recorded content for review, and hands-on projects. This ensures flexibility while maintaining engagement.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied with the course within the first 30 days, you can request a full refund.",
  },
  {
    question: "Do I get a certificate upon completion?",
    answer:
      "Yes, you'll receive a verified certificate upon successful completion of your course, which you can add to your LinkedIn profile and resume.",
  },
];

export default function FaqSection() {
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
      id="faq"
      ref={sectionRef}
      className="bg-brand-primary relative overflow-hidden py-20"
    >
      {/* Gradient blob effects */}
      <div className="bg-brand-sky-mint/10 absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl filter"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-brand-white mb-4 text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-grey mx-auto max-w-2xl text-lg">
            Get answers to the most common questions about our courses and
            programs
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-brand-white/5 border-brand-white/10 hover:bg-brand-white/10 rounded-xl px-6 backdrop-blur-sm transition-all duration-300"
              >
                <AccordionTrigger className="text-brand-white hover:text-brand-sky-mint text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-grey pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
