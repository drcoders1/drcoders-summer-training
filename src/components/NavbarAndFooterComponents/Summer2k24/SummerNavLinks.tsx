import { ScrollerLink } from "@/components/MotionComponents";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import React from "react";
import { SideBarField } from "./NavbarHamburgerAndSidebar";
import { ImageAssets } from "@/assets/ImageAssets";

const SummerNavLinks = ({ varient }: { varient: "base" | "mobile" }) => {
  if (varient === "base")
    return (
      <div className="flex items-center gap-5 lg:gap-10">
        {SummerNavLinksData.map((link, index) => (
          <ScrollerLink
            key={index}
            to={link.link}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-base-lime-green before:absolute before:bottom-0 before:h-[2px] before:w-full before:rounded-full before:bg-base-lime-green"
            className={cn("relative cursor-pointer font-semibold lg:text-lg")}
          >
            {link.Name}
          </ScrollerLink>
        ))}
      </div>
    );

  if (varient === "mobile")
    return (
      <div className="mt-10 flex w-full flex-col items-start gap-2">
        {SummerNavLinksData.map((Item, index) => {
          return (
            <ScrollerLink
              href={Item.link}
              key={index}
              to={Item.link}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-base-lime-green"
              className={cn("relative cursor-pointer text-xl font-semibold")}
            >
              <SheetClose className="w-full ">
                <SideBarField text={Item.Name} Img={Item.img} />
              </SheetClose>
            </ScrollerLink>
          );
        })}
      </div>
    );
};

export default SummerNavLinks;

export const SummerNavLinksData = [
  { Name: "Home", link: "home", img: ImageAssets.Icons.Home },
  {
    Name: "Course Details",
    link: "detail",
    img: ImageAssets.Icons.ListCollapse,
  },
  { Name: "Benefits", link: "features", img: ImageAssets.Icons.LayoutGrid },
  // { Name: "Enroll", link: "enroll", img: ImageAssets.Icons.NotebookPen },
  { Name: "Ambassadors", link: "ambassadors", img: ImageAssets.Icons.User },
];
