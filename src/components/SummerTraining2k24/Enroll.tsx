import React from "react";
import MaxContainer from "../MaxContainer";
import { ImageAssets } from "@/assets/ImageAssets";
import Image from "next/image";
import EnrollButtons from "./EnrollButtons";

const Enroll = () => {
  return (
    <MaxContainer id="enroll">
      <h1 className="pb-14 pt-32 text-center text-5xl font-bold text-base-lime-green md:pt-40 lg:text-7xl">
        Enroll
      </h1>

      <section className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
        {enrollData.map((Item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-7 rounded-lg border-2 border-base-lime-green p-10"
            >
              <div className="h-40">
                <Image
                  src={Item.image}
                  alt={`${Item.title} img`}
                  className="h-full w-full object-contain object-center"
                />
              </div>

              <h1 className="text-5xl font-bold text-base-lime-green">
                {Item.title}
              </h1>

              <p className="text-center text-xl">{Item.description}</p>

              <EnrollButtons
                details={Item.details}
                link={Item.link}
                title={Item.title}
              />
            </div>
          );
        })}
      </section>
    </MaxContainer>
  );
};

export default Enroll;

const enrollData = [
  {
    title: "Team Up",
    description: "Join as a team of three and avail a discount of 20% each.",
    image: ImageAssets.Summer2k24.Teamup,
    link: "https://forms.gle/xc6i9sbndpnXnRtE6",
    details:
      "Team up Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis reprehenderit nostrum dicta ipsam odit accusamus ipsa tempore nihil ipsum, sed mollitia cumque assumenda aliquam itaque quia fugiat sunt magni deleniti! Velit in beatae, eaque qui nam natus, totam labore non dignissimos iure pariatur modi voluptatibus quasi distinctio tempora! Deserunt?",
  },
  {
    title: "Solo",
    description: "Join solo and apply code if you have any to get discount.",
    image: ImageAssets.Summer2k24.Solo,
    link: "https://forms.gle/ytMSLp44rKb14k24A",
    details:
      "Solo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis reprehenderit nostrum dicta ipsam odit accusamus ipsa tempore nihil ipsum, sed mollitia cumque assumenda aliquam itaque quia fugiat sunt magni deleniti! Velit in beatae, eaque qui nam natus, totam labore non dignissimos iure pariatur modi voluptatibus quasi distinctio tempora! Deserunt?",
  },
];
