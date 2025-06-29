"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function ContactSection() {
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

  // LinkedIn SVG Icon Component
  const LinkedInIcon = () => (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 sm:h-6 sm:w-6"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-brand-primary relative overflow-hidden py-12 sm:py-20"
    >
      {/* Gradient blob effects */}
      <div className="bg-brand-sky-mint-10 absolute bottom-4 left-4 h-40 w-40 rounded-full blur-2xl filter sm:bottom-10 sm:left-10 sm:h-80 sm:w-80 sm:blur-3xl"></div>
      <div className="bg-brand-sky-mint-5 absolute right-4 top-4 h-44 w-44 rounded-full blur-xl filter sm:right-10 sm:top-10 sm:h-96 sm:w-96 sm:blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div
          className={`mb-8 text-center transition-all duration-1000 sm:mb-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-gradient-skymint-white mb-4 text-2xl font-bold xs:text-3xl sm:text-4xl lg:text-5xl">
            Connect With Us
          </h2>
          <p className="text-brand-grey mx-auto max-w-xs text-base xs:max-w-md xs:text-lg sm:max-w-2xl">
            Get in touch with us and explore partnership opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <Card className="bg-brand-white-5 border-brand-white-10 h-full backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-brand-white mb-4 text-lg font-bold sm:mb-6 sm:text-2xl">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 sm:space-y-8">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-brand-sky-mint-20 inline-flex h-8 w-8 items-center justify-center rounded-full sm:h-12 sm:w-12">
                    <Mail className="text-brand-sky-mint h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="text-brand-white text-sm font-semibold sm:text-base">
                      Email
                    </p>
                    <p className="text-brand-grey text-xs sm:text-sm">
                      hello@drcoders.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-brand-sky-mint-20 inline-flex h-8 w-8 items-center justify-center rounded-full sm:h-12 sm:w-12">
                    <Phone className="text-brand-sky-mint h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="text-brand-white text-sm font-semibold sm:text-base">
                      Phone
                    </p>
                    <p className="text-brand-grey text-xs sm:text-sm">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-brand-sky-mint-20 inline-flex h-8 w-8 items-center justify-center rounded-full sm:h-12 sm:w-12">
                    <MapPin className="text-brand-sky-mint h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="text-brand-white text-sm font-semibold sm:text-base">
                      Location
                    </p>
                    <p className="text-brand-grey text-xs sm:text-sm">
                      San Francisco, CA
                    </p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-4 sm:pt-6">
                  <h3 className="text-brand-white mb-4 text-sm font-semibold sm:text-base">
                    Follow Us
                  </h3>
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      href="https://instagram.com/drcoders"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-white-10 hover:bg-brand-sky-mint-20 border-brand-white-20 hover:border-brand-sky-mint group inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 sm:h-12 sm:w-12"
                    >
                      <Instagram className="text-brand-white group-hover:text-brand-sky-mint h-5 w-5 transition-colors duration-300 sm:h-6 sm:w-6" />
                    </a>
                    <a
                      href="https://wa.me/15551234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-white-10 hover:bg-brand-sky-mint-20 border-brand-white-20 hover:border-brand-sky-mint group inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 sm:h-12 sm:w-12"
                    >
                      <MessageCircle className="text-brand-white group-hover:text-brand-sky-mint h-5 w-5 transition-colors duration-300 sm:h-6 sm:w-6" />
                    </a>
                    <a
                      href="https://linkedin.com/company/drcoders"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-white-10 hover:bg-brand-sky-mint-20 border-brand-white-20 hover:border-brand-sky-mint group inline-flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 sm:h-12 sm:w-12"
                    >
                      <div className="text-brand-white group-hover:text-brand-sky-mint transition-colors duration-300">
                        <LinkedInIcon />
                      </div>
                    </a>
                  </div>
                </div>

                <div className="pt-2 sm:pt-4">
                  <h3 className="text-brand-white mb-2 text-sm font-semibold sm:mb-4 sm:text-base">
                    Why Choose Us?
                  </h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <span className="bg-brand-sky-mint-20 text-brand-sky-mint rounded-full px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm">
                      🚀 Fast Track Learning
                    </span>
                    <span className="bg-brand-sky-mint-20 text-brand-sky-mint rounded-full px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm">
                      💼 Job Placement
                    </span>
                    <span className="bg-brand-sky-mint-20 text-brand-sky-mint rounded-full px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm">
                      🏆 Industry Certified
                    </span>
                    <span className="bg-brand-sky-mint-20 text-brand-sky-mint rounded-full px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm">
                      👥 Expert Mentors
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Partnership Options */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="space-y-4 sm:space-y-6">
              {/* Ambassador Card */}
              <Card className="bg-brand-white-5 border-brand-white-10 hover:bg-brand-white-10 backdrop-blur-sm transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-brand-white text-lg font-bold sm:text-xl">
                    🌟 Join as Ambassador
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-grey mb-4 text-sm sm:text-base">
                    Become a DrCoders ambassador and help spread coding
                    education in your community while earning rewards.
                  </p>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="bg-brand-sky-mint h-2 w-2 rounded-full"></div>
                      <span className="text-brand-white text-xs sm:text-sm">
                        Earn commission on referrals
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-brand-sky-mint h-2 w-2 rounded-full"></div>
                      <span className="text-brand-white text-xs sm:text-sm">
                        Access to exclusive content
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-brand-sky-mint h-2 w-2 rounded-full"></div>
                      <span className="text-brand-white text-xs sm:text-sm">
                        Marketing support & materials
                      </span>
                    </div>
                  </div>
                  <Button className="bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary group w-full py-2 text-xs font-semibold sm:py-3 sm:text-sm">
                    <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    Apply as Ambassador
                  </Button>
                </CardContent>
              </Card>

              {/* Community Partner Card */}
              <Card className="bg-brand-white-5 border-brand-white-10 hover:bg-brand-white-10 backdrop-blur-sm transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-brand-white text-lg font-bold sm:text-xl">
                    🤝 Community Partner
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-grey mb-4 text-sm sm:text-base">
                    Partner with us to bring coding bootcamps and workshops
                    directly to your organization or community.
                  </p>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="bg-brand-sky-mint h-2 w-2 rounded-full"></div>
                      <span className="text-brand-white text-xs sm:text-sm">
                        Custom training programs
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-brand-sky-mint h-2 w-2 rounded-full"></div>
                      <span className="text-brand-white text-xs sm:text-sm">
                        Group discounts available
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-brand-sky-mint h-2 w-2 rounded-full"></div>
                      <span className="text-brand-white text-xs sm:text-sm">
                        Ongoing partnership support
                      </span>
                    </div>
                  </div>
                  <Button className="bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary group w-full py-2 text-xs font-semibold sm:py-3 sm:text-sm">
                    <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    Partner with us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
