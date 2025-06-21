"use client"

import { useEffect, useState } from "react"
import { ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
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
        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-60 animate-pulse">
          <img src="/images/star.png" alt="Star effect" className="w-full h-full object-contain animate-spin-slow" />
        </div>

        {/* Additional star effects */}
        <div className="absolute top-3/4 right-1/4 w-24 h-24 opacity-40 animate-pulse delay-1000">
          <img src="/images/star.png" alt="Star effect" className="w-full h-full object-contain animate-spin-slow" />
        </div>

        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 opacity-30 animate-pulse delay-2000">
          <img src="/images/star.png" alt="Star effect" className="w-full h-full object-contain animate-spin-slow" />
        </div>

        {/* Glowing orbs for additional ambiance */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-sky-mint/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-sky-mint/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-white mb-6 leading-tight">
            This Summer Learn Something
            <span className="block bg-gradient-to-r from-brand-white to-brand-sky-mint bg-clip-text text-transparent">
              Exciting With Our Experts
            </span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-xl md:text-2xl text-brand-grey mb-8 max-w-4xl mx-auto">
            Build Your First Web Or Mobile App In Just 3 Months With
            <br />
            Our Exclusive Summer Training Program
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-brand-sky-mint hover:bg-brand-sky-mint/90 text-brand-primary font-semibold px-8 py-4 text-lg group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-sky-mint/25"
            >
              <span className="relative z-10 flex items-center">
                Enrol Now
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-sky-mint to-brand-sky-mint/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-brand-white/30 bg-brand-white/10 backdrop-blur-sm text-brand-white hover:bg-brand-white hover:text-brand-primary px-8 py-4 text-lg group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-white/25"
            >
              <span className="relative z-10 flex items-center">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Free Demo Class
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-white to-brand-white/90 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl font-bold text-brand-sky-mint group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-brand-grey">Students Enrolled</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-brand-sky-mint group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="text-brand-grey">Success Rate</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-brand-sky-mint group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-brand-grey">Expert Instructors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
