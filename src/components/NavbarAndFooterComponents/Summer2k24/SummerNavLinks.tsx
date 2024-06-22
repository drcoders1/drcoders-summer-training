import { ScrollerLink } from "@/components/MotionComponents";
import { cn } from "@/lib/utils";
import React from "react";

const SummerNavLinks = () => {
  return (
    <div className="flex items-center gap-10">
      {SummerNavLinksData.map((link, index) => (
        <ScrollerLink
          key={index}
          to={link.link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="text-base-lime-green before:absolute before:bottom-0 before:h-[2px] before:w-full before:rounded-full before:bg-base-lime-green"
          className={cn("relative cursor-pointer text-lg font-semibold")}
        >
          {link.Name}
        </ScrollerLink>
      ))}
    </div>
  );
};

export default SummerNavLinks;

export const SummerNavLinksData = [
  { Name: "Home", link: "home" },
  { Name: "Features", link: "features" },
  { Name: "Details", link: "" },
  { Name: "Partners", link: "" },
];
