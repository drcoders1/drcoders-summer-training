import React from "react";
import MaxContainer from "../MaxContainer";
import { ImageAssets } from "@/assets/ImageAssets";
import Image from "next/image";
import EnrollButtons from "./EnrollButtons";
import { MotionDiv } from "../MotionComponents";
import { Scale } from "lucide-react";

const Enroll = () => {
  return (
    <MaxContainer id="enroll">
      <h1 className="pb-14 pt-4 text-center text-5xl font-bold text-base-lime-green md:pt-12 lg:text-7xl">
        Enroll
      </h1>

      <section className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
        {enrollData.map((Item, index) => {
          return (
            <MotionDiv
              whileHover={{ scale: 1.03 }}
              key={index}
              className="flex cursor-pointer flex-col items-center gap-7 rounded-lg border-2 border-base-lime-green p-10"
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

              <EnrollButtons link={Item.link} title={Item.title} />
            </MotionDiv>
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
  },
  {
    title: "Solo",
    description: "Join solo and apply code if you have any to get discount.",
    image: ImageAssets.Summer2k24.Solo,
    link: "https://forms.gle/ytMSLp44rKb14k24A",
  },
];
