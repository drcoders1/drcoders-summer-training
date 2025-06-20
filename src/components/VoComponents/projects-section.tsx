"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Platform",
    student: "Alex Thompson",
    course: "Full Stack Development",
    image: "/placeholder.svg?height=300&width=400",
    description: "A complete e-commerce solution built with React, Node.js, and PostgreSQL",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Data Visualization Dashboard",
    student: "Maria Garcia",
    course: "Data Science",
    image: "/placeholder.svg?height=300&width=400",
    description: "Interactive dashboard for analyzing sales data with Python and D3.js",
    technologies: ["Python", "D3.js", "Flask", "Pandas"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile Banking App",
    student: "David Kim",
    course: "UI/UX Design",
    image: "/placeholder.svg?height=300&width=400",
    description: "Modern banking app design with focus on user experience and accessibility",
    technologies: ["Figma", "Prototyping", "User Research"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Campaign",
    student: "Lisa Wang",
    course: "Digital Marketing",
    image: "/placeholder.svg?height=300&width=400",
    description: "Successful social media campaign that increased engagement by 300%",
    technologies: ["Facebook Ads", "Google Analytics", "Content Strategy"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="py-20 bg-brand-sky-mint/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">Student Projects</h2>
          <p className="text-brand-grey text-lg max-w-2xl mx-auto">
            See the amazing projects our students have built during their learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-brand-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-brand-white/10 transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/10 transition-colors" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-brand-sky-mint text-sm font-medium">{project.course}</span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-brand-grey hover:text-brand-sky-mint p-1">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-brand-grey hover:text-brand-sky-mint p-1">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-brand-white mb-2">{project.title}</h3>
                  <p className="text-brand-grey text-sm mb-3">by {project.student}</p>
                  <p className="text-brand-grey mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-brand-sky-mint/20 text-brand-sky-mint text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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
