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
          className="max-w-2xl text-2xl font-bold leading-relaxed text-white md:text-4xl lg:text-7xl lg:leading-[85px]"
        >
          Summer Web <br /> Training Program
          <div className="pt-7 text-xl font-medium">
            Join our exclusive{" "}
            <span className="text-base-lime-green">
              3-month web training program!
            </span>{" "}
            to be Junior MERN stack developer!
          </div>
          <Button
            className={cn(
              "bg-base-lime-green px-8 text-base font-medium text-base-background hover:bg-base-lime-green/90",
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
