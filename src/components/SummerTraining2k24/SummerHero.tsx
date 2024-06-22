import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { MotionDiv } from "../MotionComponents";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import MaxContainer from "../MaxContainer";

const SummerHero = () => {
  return (
    <HeroHighlight
      containerClassName="bg-base-background"
      childrenNotHorizontallyCentered
      dotHoverColor="bg-dot-thick-lime-400"
    >
      <MaxContainer>
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
          className="lg:10 flex flex-col gap-6 sm:max-w-xl sm:gap-7 md:max-w-2xl md:gap-8"
        >
          <div className=" text-3xl font-bold text-white md:text-5xl md:leading-[60px] lg:text-6xl lg:leading-[75px]">
            Summer Web <span className="text-base-lime-green">{`(MERN)`}</span>
            <br /> Training Program
          </div>

          <div className="text-xl font-medium">
            Join our exclusive{" "}
            <span className="text-base-lime-green">
              3-month web training program!
            </span>{" "}
            to be Junior MERN stack developer!
          </div>
          <Button
            className={cn(
              "max-w-min bg-base-lime-green px-8 text-base font-medium text-base-background hover:bg-base-lime-green/90",
            )}
          >
            Enroll Now
          </Button>
        </MotionDiv>
      </MaxContainer>
    </HeroHighlight>
  );
};

export default SummerHero;
