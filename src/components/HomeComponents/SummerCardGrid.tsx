import { ImageAssets } from "@/assets/ImageAssets";
import MaxContainer from "../MaxContainer";
import { HoverEffect } from "../ui/card-hover-effect";

const SummerCardGrid = () => {
  return (
    <MaxContainer className="" id="features">
      <h1 className="pb-4 pt-4 text-center text-5xl font-bold text-base-lime-green md:pt-12 lg:text-7xl">
        Benefits
      </h1>

      <HoverEffect
        items={projects}
        cardImgContainerClassName="h-24"
        cardContainerClassName="border border-white flex flex-col items-center"
        cardTitleClassName="text-center mt-8"
        cardDescriptionClassName="mt-4 mb-16"
      />
    </MaxContainer>
  );
};
export default SummerCardGrid;

export const projects = [
  {
    img: ImageAssets.Summer2k24.Internship,
    title: "Internship",
    description:
      "Our top-performing students will have the exclusive opportunity to secure internships with leading software houses, based on their performance.",
    benefits: [
      {
        heading: "Real-World Experience:",
        detail: "Gain practical experience in a professional setting.",
      },
      {
        heading: "Career Advancement: ",
        detail: "Build a strong resume with relevant work experience.",
      },
      {
        heading: "Networking:",
        detail: " Connect with industry professionals and potential employers.",
      },
      {
        heading: "Job Opportunities:",
        detail:
          " Increase your chances of receiving job offers post-internship.",
      },
    ],
  },
  {
    img: ImageAssets.Summer2k24.Certification,
    title: "Certification",
    description:
      "At the end of our comprehensive web development course, you'll receive a recognized certificate of completion.",
    benefits: [
      {
        heading: "Professional Recognition: ",
        detail: "Enhance your resume with a recognized certificate.",
      },
      {
        heading: "Credibility: ",
        detail:
          "Demonstrate your skills and commitment to potential employers.",
      },
      {
        heading: "Career Opportunities: ",
        detail: "Increase your chances of securing job interviews and offers.",
      },
      {
        heading: "Personal Achievement: ",
        detail: "Achieve a sense of accomplishment and boost your confidence.",
      },
    ],
  },
  {
    img: ImageAssets.Summer2k24.Project,
    title: "Project Based Learning",
    description:
      "Our Summer Training Program emphasizes real-world applications, allowing you to work on comprehensive projects that mirror industry scenarios.",
    benefits: [
      {
        heading: "Practical Skills:",
        detail: "Develop hands-on experience with real-world projects.",
      },
      {
        heading: "Portfolio Development:",
        detail:
          "Create a portfolio of work to showcase to potential employers.",
      },
      {
        heading: "Problem-Solving:",
        detail: "Enhance your ability to tackle real-world challenges.",
      },
      {
        heading: "Collaboration:",
        detail:
          "Gain experience working in team settings, similar to industry environments.",
      },
    ],
  },
  {
    img: ImageAssets.Summer2k24.Evaluation,
    title: "Assessment & Evaluation",
    description:
      "Our Summer Training Program includes regular assessments and personalized feedback to help you identify strengths and areas for improvement.",
    benefits: [
      {
        heading: "Continuous Improvement: ",
        detail: "Receive ongoing feedback to improve your skills.",
      },
      {
        heading: "Self-Awareness: ",
        detail: "Understand your strengths and areas needing improvement.",
      },
      {
        heading: "Goal Setting: ",
        detail:
          "Set clear goals and track your progress throughout the course.",
      },
      {
        heading: "Personalized Learning: ",
        detail:
          "Benefit from tailored advice to maximize your learning experience.",
      },
    ],
  },
  {
    img: ImageAssets.Summer2k24.Instructor,
    title: "Expert Instructors",
    description:
      "Learn from the best in the industry with our expert instructors.",
    benefits: [
      {
        heading: "Quality Education:",
        detail:
          "Learn from instructors with real-world experience and industry knowledge.",
      },
      {
        heading: "Mentorship:",
        detail: "Receive guidance and mentorship from seasoned professionals.",
      },
      {
        heading: "Up-to-Date Knowledge:",
        detail:
          "Gain insights into the latest industry trends and technologies.",
      },
      {
        heading: "Inspiration:",
        detail:
          "Be inspired by instructors who have successfully navigated the tech industry.",
      },
    ],
  },
  {
    img: ImageAssets.Summer2k24.Recording,
    title: "Recordings",
    description:
      "We provide recordings of all lectures, so you can learn at your own pace and revisit any topic whenever you need.",

    benefits: [
      {
        heading: "Flexible Learning: ",
        detail: "Study at your own convenience and schedule.",
      },
      {
        heading: "Reinforcement: ",
        detail: "Review complex topics as many times as needed.",
      },
      {
        heading: "Accessibility:",
        detail:
          "Ensure you don't miss out on any content due to scheduling conflicts.",
      },
      {
        heading: "Resource Library: ",
        detail:
          "Build a personal library of educational resources for future reference.",
      },
    ],
  },
];
