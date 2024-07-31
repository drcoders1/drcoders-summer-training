import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { MotionDiv, ScrollerLink } from "../MotionComponents";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import MaxContainer from "../MaxContainer";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
import Link from "next/link";

const SummerHero = () => {
  return (
    <HeroHighlight
      containerClassName="bg-base-background"
      childrenNotHorizontallyCentered
      dotHoverColor="bg-dot-thick-lime-400"
      id="home"
    >
      <MaxContainer className="flex flex-col items-center justify-between gap-4 gap-y-10 md:flex-row">
        <MotionDiv
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="flex flex-col gap-6 sm:max-w-xl sm:gap-7 md:max-w-lg md:gap-8 lg:max-w-2xl"
        >
          <div className=" text-3xl font-bold text-white md:text-4xl md:leading-[50px] lg:text-5xl lg:leading-[70px]">
            Summer Mobile{" "}
            <span className="text-base-lime-green">{`(Flutter)`}</span>
            <br /> Training Program
          </div>

          <div className="text-xl font-medium">
            Join our exclusive{" "}
            <span className="text-base-lime-green">
              3-month mobile training program!
            </span>{" "}
            to strat your career in mbiel app development.
          </div>

          <Link
            href="https://forms.gle/34kuhgsASRiYPhfL9"
            target="_blank"
            className={cn(
              "max-w-32 cursor-pointer rounded-lg bg-base-lime-green py-2 text-center text-base font-medium text-base-background hover:bg-base-lime-green/90",
            )}
          >
            Enroll Now
          </Link>
          {/* <ScrollerLink
            to="enroll"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={cn(
              "max-w-32 cursor-pointer rounded-lg bg-base-lime-green py-2 text-center text-base font-medium text-base-background hover:bg-base-lime-green/90",
            )}
          >
            Enroll Now
          </ScrollerLink> */}
        </MotionDiv>

        <MotionDiv
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="h-72 w-72 md:h-96 md:w-96 "
        >
          <Image
            src={ImageAssets.Summer2k24.Summer2k24Hero}
            alt="Summer 2k24 Hero"
            className="h-full w-full object-contain object-center"
          />
        </MotionDiv>
      </MaxContainer>
    </HeroHighlight>
  );
};

export default SummerHero;
