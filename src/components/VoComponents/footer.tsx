"use client"

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

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
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export default function Footer() {
  return (
    <footer className="bg-brand-primary border-t border-brand-grey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-brand-sky-mint mb-4">EduPlatform</h3>
            <p className="text-brand-grey mb-6 max-w-md">
              Transform your career with industry-leading courses taught by experts. Join thousands of students who have
              successfully transitioned into tech.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-brand-grey">
                <Mail className="h-5 w-5 text-brand-sky-mint" />
                <span>hello@eduplatform.com</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-grey">
                <Phone className="h-5 w-5 text-brand-sky-mint" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-grey">
                <MapPin className="h-5 w-5 text-brand-sky-mint" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-brand-white font-semibold mb-4">Courses</h4>
            <ul className="space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-brand-grey hover:text-brand-sky-mint transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-brand-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-brand-grey hover:text-brand-sky-mint transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-brand-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-brand-grey hover:text-brand-sky-mint transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-grey/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-grey text-sm mb-4 md:mb-0">© 2024 EduPlatform. All rights reserved.</p>

          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-brand-grey hover:text-brand-sky-mint transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
