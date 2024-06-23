import { ImageAssets } from "@/assets/ImageAssets";
import MaxContainer from "../MaxContainer";
import { HoverEffect } from "../ui/card-hover-effect";

const SummerCardGrid = () => {
  return (
    <MaxContainer className="" id="features">
      <h1 className="pb-4 pt-20 text-center text-5xl font-bold text-base-lime-green lg:text-7xl">
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
    detail:
      "Internship Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis reprehenderit nostrum dicta ipsam odit accusamus ipsa tempore nihil ipsum, sed mollitia cumque assumenda aliquam itaque quia fugiat sunt magni deleniti! Velit in beatae, eaque qui nam natus, totam labore non dignissimos iure pariatur modi voluptatibus quasi distinctio tempora! Deserunt?",
  },
  {
    img: ImageAssets.Summer2k24.Certification,
    title: "Certification",
    description: "All students will receive a certificate of completion.",
    detail:
      "Certification Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis reprehenderit nostrum dicta ipsam odit accusamus ipsa tempore nihil ipsum, sed mollitia cumque assumenda aliquam itaque quia fugiat sunt magni deleniti! Velit in beatae, eaque qui nam natus, totam labore non dignissimos iure pariatur modi voluptatibus quasi distinctio tempora! Deserunt?",
  },
  {
    img: ImageAssets.Summer2k24.Project,
    title: "Project Based Learning",
    description:
      "Learn by doing, with real-world projects and other hands-on exercises.",
    detail:
      "Project Based Learning Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis reprehenderit nostrum dicta ipsam odit accusamus ipsa tempore nihil ipsum, sed mollitia cumque assumenda aliquam itaque quia fugiat sunt magni deleniti! Velit in beatae, eaque qui nam natus, totam labore non dignissimos iure pariatur modi voluptatibus quasi distinctio tempora! Deserunt?",
  },
  {
    img: ImageAssets.Summer2k24.Recording,
    title: "Recordings",
    description: "All sessions will be recorded and shared with the students.",
    detail:
      "Recordings Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis reprehenderit nostrum dicta ipsam odit accusamus ipsa tempore nihil ipsum, sed mollitia cumque assumenda aliquam itaque quia fugiat sunt magni deleniti! Velit in beatae, eaque qui nam natus, totam labore non dignissimos iure pariatur modi voluptatibus quasi distinctio tempora! Deserunt?",
  },
  {
    img: ImageAssets.Summer2k24.Instructor,
    title: "Expert Mentors",
    description: "Learn from the best in the industry with our expert mentors.",
    detail:
      "Expert Mentors Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis reprehenderit nostrum dicta ipsam odit accusamus ipsa tempore nihil ipsum, sed mollitia cumque assumenda aliquam itaque quia fugiat sunt magni deleniti! Velit in beatae, eaque qui nam natus, totam labore non dignissimos iure pariatur modi voluptatibus quasi distinctio tempora! Deserunt?",
  },
  {
    img: ImageAssets.Summer2k24.Evaluation,
    title: "Assessment & Evaluation",
    description: "Regular assessments and evaluations to track your progress.",
    detail:
      "Assessment & Evaluation Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis reprehenderit nostrum dicta ipsam odit accusamus ipsa tempore nihil ipsum, sed mollitia cumque assumenda aliquam itaque quia fugiat sunt magni deleniti! Velit in beatae, eaque qui nam natus, totam labore non dignissimos iure pariatur modi voluptatibus quasi distinctio tempora! Deserunt?",
  },
];
