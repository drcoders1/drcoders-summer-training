import { ImageAssets } from "@/assets/ImageAssets";
import MaxContainer from "../MaxContainer";
import { HoverEffect } from "../ui/card-hover-effect";

const SummerCardGrid = () => {
  return (
    <MaxContainer className="" id="features">
      <h1 className="pb-12 pt-20 text-center text-5xl font-bold text-base-lime-green lg:text-7xl">
        Features
      </h1>

      <HoverEffect
        items={projects}
        cardImgContainerClassName="h-24"
        cardContainerClassName="border border-white"
        cardTitleClassName="text-center mt-8"
        cardDescriptionClassName="text-center mt-4"
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
      "An opportunity for students to gain practical experience in a professional setting.",
  },
  {
    img: ImageAssets.Summer2k24.Certification,
    title: "Certification",
    description: "All students will receive a certificate of completion.",
  },
  {
    img: ImageAssets.Summer2k24.Project,
    title: "Project Based Learning",
    description:
      "Learn by doing, with real-world projects and other hands-on exercises.",
  },
  {
    img: ImageAssets.Summer2k24.Recording,
    title: "Recordings",
    description: "All sessions will be recorded and shared with the students.",
  },
  {
    img: ImageAssets.Summer2k24.Instructor,
    title: "Expert Mentors",
    description: "Learn from the best in the industry.",
  },
  {
    img: ImageAssets.Summer2k24.Evaluation,
    title: "Assessment & Evaluation",
    description: "Regular assessments and evaluations to track your progress.",
  },
];
