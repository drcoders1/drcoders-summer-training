"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, Clock, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const courseDetails = {
  title: "Full Stack Web Development Bootcamp",
  description:
    "Become a professional web developer in 12 weeks with our comprehensive bootcamp covering frontend, backend, and deployment.",
  features: [
    "React & Next.js Frontend Development",
    "Node.js & Express Backend",
    "Database Design with PostgreSQL",
    "Authentication & Security",
    "API Development & Integration",
    "Deployment & DevOps Basics",
    "Real-world Project Portfolio",
    "Career Support & Job Placement",
  ],
  stats: [
    { icon: Clock, label: "Duration", value: "12 Weeks" },
    { icon: Users, label: "Class Size", value: "Max 20" },
    { icon: Award, label: "Certificate", value: "Included" },
  ],
}

export default function CourseDetails() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="course-details" ref={sectionRef} className="py-20 bg-brand-sky-mint/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">{courseDetails.title}</h2>
            <p className="text-brand-grey text-lg mb-8">{courseDetails.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {courseDetails.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-sky-mint/20 rounded-full mb-2">
                    <stat.icon className="h-6 w-6 text-brand-sky-mint" />
                  </div>
                  <div className="text-brand-white font-semibold">{stat.value}</div>
                  <div className="text-brand-grey text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-brand-sky-mint hover:bg-brand-sky-mint/90 text-brand-primary font-semibold px-8"
            >
              Enroll Now - $2,999
            </Button>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="bg-brand-white/5 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-brand-white mb-6">What You'll Learn</h3>
              <div className="space-y-4">
                {courseDetails.features.map((feature, index) => (
                  <div
                    key={feature}
                    className={`flex items-start space-x-3 transition-all duration-1000 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-brand-sky-mint flex-shrink-0 mt-0.5" />
                    <span className="text-brand-grey">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
