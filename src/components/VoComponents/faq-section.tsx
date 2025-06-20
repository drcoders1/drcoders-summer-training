"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

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
]

export default function FaqSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-brand-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">Frequently Asked Questions</h2>
          <p className="text-brand-grey text-lg max-w-2xl mx-auto">
            Get answers to the most common questions about our courses and programs
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-brand-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-brand-white/10 transition-all duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className="text-brand-white font-semibold text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-brand-sky-mint transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-brand-grey">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
