import React from "react";
import MaxContainer from "../MaxContainer";
import { ImageAssets } from "@/assets/ImageAssets";
import Image from "next/image";

const Details = () => {
  return (
    <MaxContainer id="detail">
      <h1 className="pb-14 pt-16 text-center text-5xl font-bold text-base-lime-green lg:text-7xl">
        Details
      </h1>

      <section className="mx-3 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mx-0 lg:grid-cols-3">
        {detailsData.map((data, index) => (
          <div
            key={index}
            className="cursorpointer group relative cursor-pointer overflow-hidden rounded-lg border-2 border-base-lime-green p-10 shadow-md transition duration-300 ease-in-out hover:shadow-xl"
          >
            <Image
              src={data.img}
              alt={data.title}
              className="mx-auto mb-4 h-40 w-40 md:h-48 md:w-48"
              placeholder="blur"
            />
            <h2 className="pt-4 text-center text-2xl font-bold text-base-lime-green md:text-4xl">
              {data.title}
            </h2>

            <div className="invisible absolute left-0 top-0 z-10 h-full w-full bg-background/80 p-10 text-xl text-base-lime-green opacity-0 backdrop-blur-sm transition-opacity duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
              {data.description}
            </div>
          </div>
        ))}
      </section>
    </MaxContainer>
  );
};

export default Details;

const detailsData = [
  {
    title: "HTML",
    img: ImageAssets.Summer2k24.HTML,
    description:
      "HTML is used to create the structure of web pages using elements like headings, paragraphs, and images.",
  },
  {
    title: "CSS",
    img: ImageAssets.Summer2k24.CSS,
    description:
      "CSS is responsible for styling the appearance of HTML elements on web pages.",
  },
  {
    title: "Javascript",
    img: ImageAssets.Summer2k24.JS,
    description:
      "JavaScript is a programming language used to make web pages interactive.",
  },
  {
    title: "React",
    img: ImageAssets.Summer2k24.React,
    description:
      "React is a JavaScript library for building user interfaces, developed by Facebook.",
  },
  {
    title: "Node & Express",
    img: ImageAssets.Summer2k24.Node,
    description:
      "Node.js is a server-side JavaScript runtime, while Express is a minimal and flexible Node.js web application framework.",
  },
  {
    title: "Mongodb",
    img: ImageAssets.Summer2k24.Mongo,
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.",
  },
];
