"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  courses: [
    { name: "Web Development", href: "#" },
    { name: "Data Science", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Digital Marketing", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Student Portal", href: "#" },
    { name: "Community", href: "#" },
    { name: "Blog", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-primary border-brand-grey/20 border-t">
      <div className="mx-auto max-w-7xl px-2 py-10 sm:px-4 sm:py-16 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-brand-sky-mint mb-2 text-xl font-bold sm:mb-4 sm:text-2xl">
              EduPlatform
            </h3>
            <p className="text-brand-grey mb-4 max-w-md text-sm sm:mb-6 sm:text-base">
              Transform your career with industry-leading courses taught by
              experts. Join thousands of students who have successfully
              transitioned into tech.
            </p>
            <div className="space-y-2">
              <div className="text-brand-grey flex items-center space-x-2 text-sm sm:space-x-3 sm:text-base">
                <Mail className="text-brand-sky-mint h-4 w-4 sm:h-5 sm:w-5" />
                <span>hello@eduplatform.com</span>
              </div>
              <div className="text-brand-grey flex items-center space-x-2 text-sm sm:space-x-3 sm:text-base">
                <Phone className="text-brand-sky-mint h-4 w-4 sm:h-5 sm:w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="text-brand-grey flex items-center space-x-2 text-sm sm:space-x-3 sm:text-base">
                <MapPin className="text-brand-sky-mint h-4 w-4 sm:h-5 sm:w-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          {/* Courses */}
          <div>
            <h4 className="text-brand-white mb-2 text-base font-semibold sm:mb-4 sm:text-lg">
              Courses
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-grey hover:text-brand-sky-mint text-sm transition-colors sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="text-brand-white mb-2 text-base font-semibold sm:mb-4 sm:text-lg">
              Company
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-grey hover:text-brand-sky-mint text-sm transition-colors sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Support */}
          <div>
            <h4 className="text-brand-white mb-2 text-base font-semibold sm:mb-4 sm:text-lg">
              Support
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-grey hover:text-brand-sky-mint text-sm transition-colors sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-brand-grey/20 mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:mt-12 sm:flex-row sm:gap-0 sm:pt-8">
          <p className="text-brand-grey mb-2 text-xs sm:mb-0 sm:text-sm">
            © 2024 EduPlatform. All rights reserved.
          </p>
          <div className="flex space-x-3 sm:space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-brand-grey hover:text-brand-sky-mint transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
