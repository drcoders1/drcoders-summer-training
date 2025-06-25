"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    student: "Alex Thompson",
    course: "Full Stack Development",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "A complete e-commerce solution built with React, Node.js, and PostgreSQL",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Data Visualization Dashboard",
    student: "Maria Garcia",
    course: "Data Science",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Interactive dashboard for analyzing sales data with Python and D3.js",
    technologies: ["Python", "D3.js", "Flask", "Pandas"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile Banking App",
    student: "David Kim",
    course: "UI/UX Design",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Modern banking app design with focus on user experience and accessibility",
    technologies: ["Figma", "Prototyping", "User Research"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Campaign",
    student: "Lisa Wang",
    course: "Digital Marketing",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Successful social media campaign that increased engagement by 300%",
    technologies: ["Facebook Ads", "Google Analytics", "Content Strategy"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
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
      id="projects"
      ref={sectionRef}
      className="bg-brand-sky-mint-5 py-12 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div
          className={`mb-8 text-center transition-all duration-1000 sm:mb-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-brand-white mb-2 text-2xl font-bold xs:text-3xl sm:mb-4 sm:text-4xl">
            Student Projects
          </h2>
          <p className="text-brand-grey mx-auto max-w-xs text-base xs:max-w-md xs:text-lg sm:max-w-2xl">
            See the amazing projects our students have built during their
            learning journey
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-brand-white-5 hover:bg-brand-white-10 group overflow-hidden rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-110 xs:h-40 sm:h-48"
                  />
                  <div className="bg-brand-primary-20 group-hover:bg-brand-primary-10 absolute inset-0 transition-colors" />
                </div>
                <div className="p-4 xs:p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-brand-sky-mint text-xs font-medium xs:text-sm">
                      {project.course}
                    </span>
                    <div className="flex space-x-1 xs:space-x-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-brand-grey hover:text-brand-sky-mint p-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-brand-grey hover:text-brand-sky-mint p-1"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-brand-white mb-1 text-lg font-semibold xs:mb-2 xs:text-xl">
                    {project.title}
                  </h3>
                  <p className="text-brand-grey mb-1 text-xs xs:mb-3 xs:text-sm">
                    by {project.student}
                  </p>
                  <p className="text-brand-grey mb-2 text-sm xs:mb-4 xs:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 xs:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-brand-sky-mint-20 text-brand-sky-mint rounded-full px-2 py-0.5 text-xs xs:px-3 xs:py-1"
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
  );
}
