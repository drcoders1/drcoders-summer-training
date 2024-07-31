import React from "react";
import MaxContainer from "../MaxContainer";
import { ImageAssets } from "@/assets/ImageAssets";
import Image from "next/image";

const Details = () => {
  return (
    <MaxContainer id="detail">
      <h1 className="pb-10 pt-16 text-center text-5xl font-bold text-base-lime-green md:pb-14 lg:text-7xl">
        Course Details
      </h1>

      {/* <p className="text-lg text-zinc-400">
        This program is designed to equip you with the essential skills needed
        to become a proficient web developer. Over the course of 8 weeks, you'll
        engage in interactive sessions, hands-on projects, and receive
        mentorship from industry experts. By the end of the program, you will
        have built a portfolio of projects and gained the confidence to start
        your career in web development.
      </p>

      <h1 className="pb-14 pt-16 text-center text-5xl font-bold text-base-lime-green lg:text-7xl">
        Key Information
      </h1> */}

      <ul className="flex flex-col gap-5 text-lg font-semibold text-zinc-400 md:gap-5 md:text-xl lg:text-2xl">
        <li className="flex">
          <span className="mr-2 w-[32%] text-base-lime-green md:w-44 ">
            Duration:
          </span>{" "}
          <span className="w-[68%]">8 weeks</span>
        </li>
        <li className="flex">
          <span className="mr-2 w-[32%] text-base-lime-green md:w-44 ">
            Time:
          </span>{" "}
          <span className="w-[68%]">
            Saturdays and Sundays, {`(3 PM - 5 PM)`}
          </span>
        </li>
        <li className="flex">
          <span className="mr-2 w-[32%] text-base-lime-green md:w-44 ">
            Classes:
          </span>{" "}
          <span className="w-[68%]">
            Live online sessions with recordings available
          </span>
        </li>
        <li className="flex">
          <span className="mr-2 w-[32%] text-base-lime-green md:w-44 ">
            Starting Date:
          </span>{" "}
          <span className="w-[68%]">AUGUST 10, 2024</span>
        </li>
      </ul>

      <h1 className="pb-14 pt-16 text-center text-5xl font-bold text-base-lime-green lg:text-7xl">
        What to Cover
      </h1>

      <section className="mx-3 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mx-0 lg:grid-cols-3">
        {mobiledetailsData.map((data, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg border-2 border-base-lime-green p-10 shadow-md transition duration-300 ease-in-out hover:shadow-xl"
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

// const detailsData = [
//   {
//     title: "HTML",
//     img: ImageAssets.Summer2k24.HTML,
//     description:
//       "HTML is used to create the structure of web pages using elements like headings, paragraphs, and images.",
//   },
//   {
//     title: "CSS",
//     img: ImageAssets.Summer2k24.CSS,
//     description:
//       "CSS is responsible for styling the appearance of HTML elements on web pages.",
//   },
//   {
//     title: "Javascript",
//     img: ImageAssets.Summer2k24.JS,
//     description:
//       "JavaScript is a programming language used to make web pages interactive.",
//   },
//   {
//     title: "React",
//     img: ImageAssets.Summer2k24.React,
//     description:
//       "React is a JavaScript library for building user interfaces, developed by Facebook.",
//   },
//   {
//     title: "Node & Express",
//     img: ImageAssets.Summer2k24.Node,
//     description:
//       "Node.js is a server-side JavaScript runtime, while Express is a minimal and flexible Node.js web application framework.",
//   },
//   {
//     title: "Mongodb",
//     img: ImageAssets.Summer2k24.Mongo,
//     description:
//       "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.",
//   },
// ];
const mobiledetailsData = [
  {
    title: "Flutter",
    img: ImageAssets.Summer2k24.Flutter,
    description:
      "We will be using flutter in our app traingin program",
  },
  {
    title: "CSS",
    img: ImageAssets.Summer2k24.Flutter,
    description:
      "CSS is responsible for styling the appearance of HTML elements on web pages.",
  },
];
