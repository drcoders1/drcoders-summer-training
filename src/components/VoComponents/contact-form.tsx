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
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
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
          <h2 className="text-brand-white mb-2 text-2xl font-bold xs:text-3xl sm:mb-4 sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="text-brand-grey mx-auto max-w-xs text-base xs:max-w-md xs:text-lg sm:max-w-2xl">
            Get in touch with us to learn more about our courses and enrollment
            process
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
                <div className="pt-4 sm:pt-6">
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

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <Card className="bg-brand-white-5 border-brand-white-10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-brand-white text-lg font-bold sm:text-2xl">
                  Enroll Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2">
                    <div className="space-y-1 sm:space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-brand-white text-xs sm:text-base"
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-brand-white-10 border-brand-white-20 text-brand-white placeholder:text-brand-grey focus:border-brand-sky-mint text-xs sm:text-base"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-brand-white text-xs sm:text-base"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-brand-white-10 border-brand-white-20 text-brand-white placeholder:text-brand-grey focus:border-brand-sky-mint text-xs sm:text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-brand-white text-xs sm:text-base"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-brand-white-10 border-brand-white-20 text-brand-white placeholder:text-brand-grey focus:border-brand-sky-mint text-xs sm:text-base"
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-brand-white text-xs sm:text-base"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      className="bg-brand-white-10 border-brand-white-20 text-brand-white placeholder:text-brand-grey focus:border-brand-sky-mint text-xs sm:text-base"
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <Label
                      htmlFor="course"
                      className="text-brand-white text-xs sm:text-base"
                    >
                      Interested Course
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-brand-white-10 border-brand-white-20 text-brand-white focus:border-brand-sky-mint text-xs sm:text-base">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent className="bg-brand-primary border-brand-white-20">
                        <SelectItem
                          value="fullstack"
                          className="text-brand-white hover:bg-brand-sky-mint-20"
                        >
                          Full Stack Development
                        </SelectItem>
                        <SelectItem
                          value="mobile"
                          className="text-brand-white hover:bg-brand-sky-mint-20"
                        >
                          Mobile App Development
                        </SelectItem>
                        <SelectItem
                          value="frontend"
                          className="text-brand-white hover:bg-brand-sky-mint-20"
                        >
                          Frontend Development
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-brand-white text-xs sm:text-base"
                    >
                      Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your goals and experience..."
                      className="bg-brand-white-10 border-brand-white-20 text-brand-white placeholder:text-brand-grey focus:border-brand-sky-mint min-h-[80px] text-xs sm:min-h-[100px] sm:text-base"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary group w-full py-2 text-xs font-semibold sm:py-3 sm:text-base"
                  >
                    <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
