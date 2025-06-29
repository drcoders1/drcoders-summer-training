import ContactForm from "@/components/VoComponents/contact-form";
import CourseDetails from "@/components/VoComponents/course-details";
import CoursesOffered from "@/components/VoComponents/courses-offered";
import EnrollNowForm from "@/components/VoComponents/enrollnow-form";
import FaqSection from "@/components/VoComponents/faq-section";
import HeroSection from "@/components/VoComponents/hero-section";
import PartnerSection from "@/components/VoComponents/partner-section";
import ProjectsSection from "@/components/VoComponents/projects-section";
import QuizSection from "@/components/VoComponents/QuizSection";
import StatsSection from "@/components/VoComponents/stats-section";
import TestimonialSection from "@/components/VoComponents/testimonial-section";
import WhyChooseUs from "@/components/VoComponents/why-choose-us";
import React from "react";
import ReactGA from "react-ga4";

const SummerTraining = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/summertraining2k25",
    title: "SummerTraniningPage",
  });

  return (
    <section className="mt-14 md:mt-8">
      <HeroSection />
      <QuizSection />

      {/* <div className="invisible h-28" aria-hidden></div>
      <SummerCardGrid /> */}

      {/* <div className="invisible h-28" aria-hidden></div>
      <Enroll /> */}

      {/* <div className="invisible h-28" aria-hidden></div>
      <Ambassador /> */}

      {/* <div className="invisible h-28" aria-hidden></div> */}
      {/* <CommunityPartners /> */}
      {/* <PartnerSection /> */}
      <WhyChooseUs />

      <StatsSection />
      <CoursesOffered />
      <CourseDetails />
      {/* <TestimonialSection /> */}
      <EnrollNowForm />
      {/* <ProjectsSection /> */}
      <FaqSection />
      <ContactForm />
    </section>
  );
};

export default SummerTraining;

// Purpose of these divs are to maintain spacing so that the scroll from navbar is no more than needed
