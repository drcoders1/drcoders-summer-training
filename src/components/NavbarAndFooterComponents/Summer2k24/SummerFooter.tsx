import { ImageAssets } from "@/assets/ImageAssets";
import MaxContainer from "@/components/MaxContainer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SummerFooter = () => {
  return (
    <section>
      {/* <MaxContainer className="mb-[65px] mt-[130px] grid grid-cols-2 gap-y-16 md:grid-cols-4"> */}
      <MaxContainer className="mb-[65px] mt-[130px] flex-col ">
        {/* <div>
          <h1 className="text-xl font-semibold md:text-2xl">Quick Links</h1>

          <div className="ml-1 mt-5 flex flex-col gap-2 text-sm md:ml-2 md:text-base">
            <Link href={"/comingsoon"}>About Us</Link>
            <Link href={"/comingsoon"}>Events</Link>
            <Link href={"/comingsoon"}>Partners</Link>
            <Link href={"/comingsoon"}>Courses</Link>
          </div>
        </div>

        <div className="lg:justify-self-center">
          <h1 className="text-xl font-semibold md:text-2xl">Resourses</h1>

          <div className="ml-1 mt-5 flex flex-col gap-2 text-sm md:ml-2 md:text-base">
            <Link href={"/comingsoon"}>Article</Link>
            <Link href={"/comingsoon"}>Tutorials</Link>
            <Link href={"/comingsoon"}>Case Studies</Link>
            <Link href={"/comingsoon"}>Newsletter</Link>
          </div>
        </div>

        <div className="lg:justify-self-end lg:pr-10">
          <h1 className="text-xl font-semibold md:text-2xl">Contact Us</h1>
          <div className="ml-1 mt-5 flex flex-col gap-2 text-sm md:ml-2 md:text-base">
            <Link href={"/comingsoon"}>Contact Page</Link>
            <Link href="mailto:drcoders1@gmail.com">Email Us</Link>
          </div>
        </div> */}

        <h1 className="pb-5 text-center text-4xl font-bold text-base-lime-green md:pb-10 md:pt-16 lg:text-6xl">
          Follow Us
        </h1>
        <div className="  flex flex-col justify-center md:flex-row md:gap-40">
          <div className="mt-5 flex gap-2">
            <h1 className="text-xl font-semibold md:text-2xl">Dr coders: </h1>
            {/* <Link href={"/comingsoon"}>
              <Image src={ImageAssets.Summer2k24.Whatsapp} alt="whatsapp" />
            </Link> */}

            <Link href={"https://www.instagram.com/dr.coders/"} target="#">
              <Image src={ImageAssets.Summer2k24.Instagram} alt="instagram" />
            </Link>

            <Link
              href={"https://www.linkedin.com/company/dr-coders/"}
              target="#"
            >
              <Image src={ImageAssets.Summer2k24.Linkedin} alt="linkedin" />
            </Link>
          </div>

          <div className="mt-5 flex items-center gap-2 ">
            <h1 className="text-xl font-semibold md:text-2xl">
              Dr coders Academy:
            </h1>
            {/* <Link href={"/comingsoon"}>
              <Image src={ImageAssets.Summer2k24.Whatsapp} alt="whatsapp" />
            </Link> */}

            <Link
              href={"https://www.instagram.com/drcoders_academy/"}
              target="#"
            >
              <Image src={ImageAssets.Summer2k24.Instagram} alt="instagram" />
            </Link>

            <Link
              href={"https://www.linkedin.com/company/dr-coders-academy/"}
              target="#"
            >
              <Image src={ImageAssets.Summer2k24.Linkedin} alt="linkedin" />
            </Link>
          </div>
        </div>
      </MaxContainer>
    </section>
  );
};

export default SummerFooter;
