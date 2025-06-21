"use client";
import MaxContainer from "../MaxContainer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
import Link from "next/link";
import SummerNavLinks from "./SummerNavLinks";
import { ScrollerLink } from "@/components/MotionComponents";
import { Button } from "@/components/ui/button";
import { useSwitchCourseStore } from "@/stores/SwitchCourse";
import NavbarHamburgerAndSidebar from "./NavbarHamburgerAndSidebar";

const Navbar = () => {
  const switchCourse = useSwitchCourseStore((state) => state.switch);
  const currentCourse = useSwitchCourseStore((state) => state.course);

  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent py-4 shadow-sm backdrop-blur-[10px]">
      <MaxContainer className="flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={ImageAssets.Navbar.Logo}
            alt={ImageAssets.Navbar.alt}
            priority
            className="h-10 w-auto md:h-14"
          />
        </Link>

        <Button onClick={switchCourse}>
          {currentCourse === "web" ? "Is Web" : "Is Mobile"}
        </Button>

        <div className="hidden items-center gap-10 md:flex">
          <SummerNavLinks varient="base" />

          <Link
            className={cn(
              "hover:bg-base-skymint-90 cursor-pointer rounded-lg bg-base-skyMint px-3 py-2 text-sm font-medium text-base-background lg:px-5 lg:text-base",
            )}
            href="https://forms.gle/34kuhgsASRiYPhfL9"
            target="_blank"
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
              "cursor-pointer rounded-lg bg-base-lime-green px-3 py-2 text-sm font-medium text-base-background hover:bg-base-lime-green/90 lg:px-5 lg:text-base",
            )}
          >
            Enroll Now
          </ScrollerLink> */}
        </div>

        <div className="md:hidden">
          <NavbarHamburgerAndSidebar />
        </div>
      </MaxContainer>
    </nav>
  );
};

export default Navbar;
