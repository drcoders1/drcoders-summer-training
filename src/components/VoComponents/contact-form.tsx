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
      className="bg-brand-primary relative overflow-hidden py-20"
    >
      {/* Gradient blob effects */}
      <div className="bg-brand-sky-mint-10 absolute bottom-10 left-10 h-80 w-80 rounded-full blur-3xl filter"></div>
      <div className="bg-brand-sky-mint-5 absolute right-10 top-10 h-96 w-96 rounded-full blur-3xl filter"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-brand-white mb-4 text-3xl font-bold md:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="text-brand-grey mx-auto max-w-2xl text-lg">
            Get in touch with us to learn more about our courses and enrollment
            process
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <Card className="bg-brand-white-5 border-brand-white-10 h-full backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-brand-white mb-6 text-2xl font-bold">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-brand-sky-mint-20 inline-flex h-12 w-12 items-center justify-center rounded-full">
                    <Mail className="text-brand-sky-mint h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-brand-white font-semibold">Email</p>
                    <p className="text-brand-grey">hello@drcoders.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-brand-sky-mint-20 inline-flex h-12 w-12 items-center justify-center rounded-full">
                    <Phone className="text-brand-sky-mint h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-brand-white font-semibold">Phone</p>
                    <p className="text-brand-grey">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-brand-sky-mint-20 inline-flex h-12 w-12 items-center justify-center rounded-full">
                    <MapPin className="text-brand-sky-mint h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-brand-white font-semibold">Location</p>
                    <p className="text-brand-grey">San Francisco, CA</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-brand-white mb-4 font-semibold">
                    Why Choose Us?
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-brand-sky-mint-20 text-brand-sky-mint rounded-full px-3 py-1 text-sm">
                      🚀 Fast Track Learning
                    </span>
                    <span className="bg-brand-sky-mint-20 text-brand-sky-mint rounded-full px-3 py-1 text-sm">
                      💼 Job Placement
                    </span>
                    <span className="bg-brand-sky-mint-20 text-brand-sky-mint rounded-full px-3 py-1 text-sm">
                      🏆 Industry Certified
                    </span>
                    <span className="bg-brand-sky-mint-20 text-brand-sky-mint rounded-full px-3 py-1 text-sm">
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
                <CardTitle className="text-brand-white text-2xl font-bold">
                  Enroll Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-brand-white">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-brand-white-10 border-brand-white-20 text-brand-white placeholder:text-brand-grey focus:border-brand-sky-mint"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-brand-white">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-brand-white-10 border-brand-white-20 text-brand-white placeholder:text-brand-grey focus:border-brand-sky-mint"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-brand-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-brand-white-10 border-brand-white-20 text-brand-white placeholder:text-brand-grey focus:border-brand-sky-mint"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-brand-white">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      className="bg-brand-white-10 border-brand-white-20 text-brand-white placeholder:text-brand-grey focus:border-brand-sky-mint"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course" className="text-brand-white">
                      Interested Course
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-brand-white-10 border-brand-white-20 text-brand-white focus:border-brand-sky-mint">
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

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-brand-white">
                      Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your goals and experience..."
                      className="bg-brand-white-10 border-brand-white-20 text-brand-white placeholder:text-brand-grey focus:border-brand-sky-mint min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary group w-full py-3 font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
