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
      "Our courses run for 3 to 4 months depending on the track — with regular sessions, mentorship, and projects built into each week.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "Nope! These courses are designed for absolute beginners. We’ll guide you from the basics all the way to building real apps.",
  },
  {
    question: "Will I get a certificate after completion?",
    answer:
      "Yes, all students who complete the course and submit their final project will receive a verified certificate from Dr Coders Academy.",
  },
  {
    question: "Are the classes live or recorded?",
    answer:
      "All sessions are conducted live with mentors — and every class is recorded so you can catch up anytime if you miss one.",
  },
  {
    question: "What tools or software do I need before starting?",
    answer:
      "A laptop with stable internet is enough. We’ll guide you step-by-step on setting up your coding environment in the first week.",
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
      className="bg-brand-primary relative overflow-hidden py-12 sm:py-20"
    >
      {/* Gradient blob effects */}
      <div className="bg-brand-sky-mint-10 absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-2xl filter sm:h-96 sm:w-96 sm:blur-3xl"></div>
      <div className="mx-auto max-w-2xl px-2 sm:max-w-4xl sm:px-4 md:px-6 lg:px-8">
        <div
          className={`mb-8 text-center transition-all duration-1000 sm:mb-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-gradient-skymint-white mb-4 pb-4 text-2xl font-bold xs:text-3xl sm:text-4xl lg:text-5xl">
            Got Questions? We've Got You.
          </h2>
          <p className="text-brand-grey mx-auto max-w-xs text-base xs:max-w-md xs:text-lg sm:max-w-2xl">
            Here are some answers to the things students ask us most. And if
            you're still unsure don't worry, were just a DM away.
          </p>
        </div>
        <div
          className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <Accordion
            type="single"
            collapsible
            className="space-y-3 sm:space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-brand-white-5 border-brand-white-10 hover:bg-brand-white-10 rounded-xl px-3 backdrop-blur-sm transition-all duration-300 xs:px-4 sm:px-6"
              >
                <AccordionTrigger className="text-brand-white hover:text-brand-sky-mint text-base font-semibold xs:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-grey pt-1 text-sm xs:pt-2 xs:text-base">
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
