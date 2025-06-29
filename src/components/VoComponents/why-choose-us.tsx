"use client";

import { useEffect, useRef, useState } from "react";
import {
  Users,
  BookOpen,
  Award,
  Briefcase,
  Play, // Used for Project-Based Learning now
  Star, // Still used for overall rating context in thought but not rendered
  TrendingUp, // Still used for overall stats in thought but not rendered
  CheckCircle, // New icon for bullet points in Internship
  Layers, // Icon for 'Work on real-world projects'
  UserCheck, // Icon for 'Learn from seasoned professionals'
  FileBadge, // Icon for 'Get certified upon completion'
} from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming this is available from shadcn/ui
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"; // Assuming these are available from shadcn/ui

// Data for the smaller feature cards
const features = [
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of experience, guiding you through complex concepts with real-world insights.",
    highlight: "5+ Years Experience",
    badge: "Industry Experts",
  },
  {
    icon: BookOpen,
    title: "Live Classes",
    description:
      "Interactive sessions with real-time doubt solving and personalized feedback, ensuring a deep understanding of topics.",
    highlight: "24/7 Support",
    badge: "Interactive Learning",
  },
  {
    icon: Award,
    title: "Assessment",
    description:
      "Regular evaluations and practical assignments to track your progress and solidify your understanding of core concepts.",
    highlight: "Weekly Tests",
    badge: "Progress Tracking",
  },
  {
    icon: Play, // Moved from mainFeature to a small card
    title: "Project-Based Learning",
    description:
      "Build real-world projects from scratch, gaining hands-on experience with industry-standard tools for your portfolio.",
    highlight: "Showcase Your Skills",
    badge: "Hands-on Experience",
  },
];

// Data for the main feature card (now 'Internship Opportunities')
const mainFeature = {
  icon: Briefcase, // Changed from Play to Briefcase
  title: "Internship Opportunities", // Changed from Project-Based Learning
  description:
    "We provide exclusive internship opportunities to our top 5 students, ensuring they gain invaluable real-world experience and build a strong professional network.",
  features: [
    // New bullet points with modern icons
    { icon: Layers, text: "Work on real-world projects" },
    { icon: UserCheck, text: "Learn from seasoned professionals" },
    { icon: FileBadge, text: "Get certified upon completion" },
    { icon: CheckCircle, text: "Guaranteed placement for top students" },
  ],
};

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Observer for fade-in animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry!.isIntersecting) {
          setIsVisible(true);
          // Optional: Disconnect after first intersection if animation should only play once
          // observer.disconnect();
        } else {
          // Optional: Reset visibility if element scrolls out of view
          // setIsVisible(false);
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      // Cleanup the observer when the component unmounts
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section
      id="why-choose-us"
      ref={sectionRef} // Attach ref for intersection observer
      className="bg-brand-primary font-inter relative overflow-hidden px-4 py-20" // Using font-inter as per instructions
    >
      {/* Gradient blob effects for visual depth */}
      <div className="bg-brand-sky-mint-20 absolute bottom-28 left-0 h-80 w-80 rounded-full opacity-30 blur-3xl filter"></div>
      <div className="bg-brand-sky-mint-10 absolute right-0 top-20 h-60 w-60 rounded-full opacity-30 blur-2xl filter"></div>

      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center transition-all duration-1000 sm:mb-16 lg:mb-28 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-gradient-skymint-white mb-4 text-2xl font-bold xs:text-3xl sm:text-4xl lg:text-5xl">
            Why Dr Coders Academy is best for you?
          </h2>
          <p className="text-brand-grey mx-auto max-w-3xl text-base leading-relaxed sm:text-lg lg:text-xl">
            Join thousands of successful developers who transformed their
            careers with our comprehensive, industry-focused curriculum.
          </p>
          {/* Removed the rating and student placed section as per request */}
        </div>

        {/* Grid Layout for Feature Cards */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
          {/* Left column - 2 cards */}
          <div className="space-y-4 sm:space-y-6">
            {features.slice(0, 2).map((feature, index) => (
              <Card
                key={feature.title}
                className={`bg-brand-glass border-brand-white-20 group relative h-auto cursor-pointer overflow-hidden rounded-xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 sm:h-[285px] ${
                  // Adjusted height for smaller cards, added rounded-xl
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }} // Staggered entry animation
              >
                {/* Background decorative elements for hover effect */}
                <div className="bg-brand-sky-mint-5 absolute right-0 top-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full transition-transform duration-500 group-hover:scale-150"></div>
                <div className="bg-brand-sky-mint-10 absolute bottom-0 left-0 h-16 w-16 -translate-x-8 translate-y-8 rounded-full transition-transform duration-500 group-hover:scale-125"></div>

                {/* Hover reveal overlay - creates a clean wipe effect */}
                <div className="bg-brand-sky-mint absolute inset-0 -translate-y-full transform transition-transform duration-500 group-hover:translate-y-0"></div>

                {/* Badge positioned absolutely */}
                <div className="absolute right-2 top-2 z-20">
                  {" "}
                  {/* Adjusted right and top for badge */}
                  <span className="bg-brand-sky-mint-20 text-brand-sky-mint border-brand-sky-mint-25 group-hover:bg-brand-primary group-hover:text-brand-sky-mint whitespace-nowrap rounded-full border px-2 py-1 text-xs font-medium backdrop-blur-sm transition-all duration-300">
                    {" "}
                    {/* Added whitespace-nowrap */}
                    {feature.badge}
                  </span>
                </div>

                {/* Card content - positioned relatively above the overlay */}
                <div className="relative z-10 flex h-full flex-col p-3 sm:p-4">
                  {" "}
                  {/* Reduced padding further */}
                  <CardHeader className="pb-2">
                    {" "}
                    {/* Reduced padding further */}
                    <div className="bg-brand-sky-mint-20 group-hover:bg-brand-primary-20 mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors sm:mb-3 sm:h-12 sm:w-12">
                      {" "}
                      {/* Adjusted margin bottom */}
                      <feature.icon className="text-brand-sky-mint group-hover:text-brand-primary h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-brand-white text-base font-semibold group-hover:text-black sm:text-xl">
                      {feature.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-1 pb-2">
                    {" "}
                    {/* Reduced padding further */}
                    <p className="text-brand-grey mb-3 line-clamp-3 text-sm leading-snug group-hover:text-black sm:text-base">
                      {" "}
                      {/* Adjusted margin bottom and added line-clamp-3 */}
                      {feature.description}
                    </p>
                    {/* Highlight section */}
                    <div className="mt-auto flex items-center gap-2">
                      <CheckCircle className="text-brand-sky-mint group-hover:text-brand-primary h-4 w-4" />
                      <span className="text-brand-sky-mint group-hover:text-brand-primary text-sm font-medium">
                        {feature.highlight}
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Middle column - 2 cards */}
          <div className="space-y-4 sm:space-y-6">
            {features.slice(2, 4).map((feature, index) => (
              <Card
                key={feature.title}
                className={`bg-brand-glass border-brand-white-20 group relative h-auto cursor-pointer overflow-hidden rounded-xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 sm:h-[285px] ${
                  // Adjusted height for smaller cards, added rounded-xl
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 2) * 200}ms` }} // Staggered entry animation
              >
                {/* Background decorative elements for hover effect */}
                <div className="bg-brand-sky-mint-5 absolute right-0 top-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full transition-transform duration-500 group-hover:scale-150"></div>
                <div className="bg-brand-sky-mint-10 absolute bottom-0 left-0 h-16 w-16 -translate-x-8 translate-y-8 rounded-full transition-transform duration-500 group-hover:scale-125"></div>

                {/* Hover reveal overlay - creates a clean wipe effect */}
                <div className="bg-brand-sky-mint absolute inset-0 -translate-y-full transform transition-transform duration-500 group-hover:translate-y-0"></div>

                {/* Badge positioned absolutely */}
                <div className="absolute right-2 top-2 z-20">
                  {" "}
                  {/* Adjusted right and top for badge */}
                  <span className="bg-brand-sky-mint-20 text-brand-sky-mint border-brand-sky-mint-25 group-hover:bg-brand-primary group-hover:text-brand-sky-mint whitespace-nowrap rounded-full border px-2 py-1 text-xs font-medium backdrop-blur-sm transition-all duration-300">
                    {" "}
                    {/* Added whitespace-nowrap */}
                    {feature.badge}
                  </span>
                </div>

                {/* Card content - positioned relatively above the overlay */}
                <div className="relative z-10 flex h-full flex-col p-3 sm:p-4">
                  {" "}
                  {/* Reduced padding further */}
                  <CardHeader className="pb-2">
                    {" "}
                    {/* Reduced padding further */}
                    <div className="bg-brand-sky-mint-20 group-hover:bg-brand-primary-20 mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors sm:mb-3 sm:h-12 sm:w-12">
                      {" "}
                      {/* Adjusted margin bottom */}
                      <feature.icon className="text-brand-sky-mint group-hover:text-brand-primary h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-brand-white text-base font-semibold group-hover:text-black sm:text-xl">
                      {feature.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-1 pb-2">
                    {" "}
                    {/* Reduced padding further */}
                    <p className="text-brand-grey mb-3 line-clamp-3 text-sm leading-snug group-hover:text-black sm:text-base">
                      {" "}
                      {/* Adjusted margin bottom and added line-clamp-3 */}
                      {feature.description}
                    </p>
                    {/* Highlight section */}
                    <div className="mt-auto flex items-center gap-2">
                      <CheckCircle className="text-brand-sky-mint group-hover:text-brand-primary h-4 w-4" />
                      <span className="text-brand-sky-mint group-hover:text-brand-primary text-sm font-medium">
                        {feature.highlight}
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Right column - Main feature card (Internship Opportunities) */}
          <Card
            className={`from-brand-sky-mint text-brand-primary h-auto cursor-pointer rounded-xl bg-gradient-to-br transition-all duration-500 hover:scale-105 sm:h-full ${
              // Added rounded-xl
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }} // Staggered entry
          >
            <CardHeader className="p-4 sm:p-6">
              <div className="bg-brand-primary-20 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full sm:mb-6 sm:h-16 sm:w-16">
                <mainFeature.icon className="text-brand-primary h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg font-bold sm:text-2xl">
                {mainFeature.title}
              </h3>
            </CardHeader>

            <CardContent className="flex flex-col p-4 pt-0 sm:p-6 sm:pt-0">
              <p className="text-brand-primary-80 mb-4 flex-1 text-sm leading-relaxed sm:mb-6 sm:text-base">
                {mainFeature.description}
              </p>

              <div className="mb-4 space-y-2 sm:mb-8 sm:space-y-3">
                {mainFeature.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <feat.icon className="text-brand-primary h-5 w-5" />{" "}
                    {/* Use the icon from the feature object */}
                    <span className="text-brand-primary text-sm sm:text-base">
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter className="mt-auto p-4 sm:p-6">
              {/* Call to Action Button linking to a Google Form */}
              <Button
                asChild // Renders Button as its child component (<a> in this case)
                className="bg-brand-primary hover:bg-brand-primary-90 text-brand-sky-mint w-full rounded-full py-3 text-sm font-semibold shadow-lg transition-all duration-300 hover:shadow-xl sm:text-base" // Added rounded-full and shadow
              >
                {/* Placeholder Google Form link */}
                <a
                  href="https://forms.gle/your-google-form-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Free Demo Class
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
