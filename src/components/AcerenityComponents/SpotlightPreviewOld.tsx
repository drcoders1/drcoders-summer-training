import { Button } from "../ui/button";
import { Spotlight } from "../ui/Spotlight";

const SpotlightPreview = () => {
  return (
    <div className="bg-grid-white/[0.02] relative flex h-[50rem] w-full overflow-hidden rounded-md bg-base-background antialiased md:items-center md:justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className=" relative z-10  mx-auto w-full max-w-7xl  p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
        <div className=" mt-5 flex items-center justify-center gap-5">
          <Button>Join Community</Button>
          <Button variant={"outline"}>Explore Courses</Button>
        </div>
      </div>
    </div>
  );
};
export default SpotlightPreview;

const words = ["trend", "cute", "beauty", "modern"];
