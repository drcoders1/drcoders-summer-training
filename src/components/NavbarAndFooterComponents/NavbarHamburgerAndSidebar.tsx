import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ImageAssets } from "@/assets/ImageAssets";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import SummerNavLinks from "./SummerNavLinks";
import Link from "next/link";
import { ScrollerLink } from "@/components/MotionComponents";

const NavbarHamburgerAndSidebar = () => {
  return (
    <div className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger>
          <ImageAssets.Icons.AlignJustify />
        </SheetTrigger>
        <SheetContent className="flex w-[250px] flex-col justify-between sm:w-[300px]">
          <SheetHeader className="flex w-full flex-col items-start gap-8">
            <Link href={"/"} className=" w-full">
              <SheetClose className="mt-4 flex w-full flex-col items-center gap-2 self-center">
                <Image
                  src={ImageAssets.Navbar.Logo}
                  alt="Drcoders Logo"
                  className="h-14 w-auto"
                />
              </SheetClose>
            </Link>
            <section className="flex w-full flex-col items-start gap-2">
              <Separator className=" bg-zinc-400" />
              <SummerNavLinks varient="mobile" />
            </section>
          </SheetHeader>

          <SheetFooter className="flex w-full flex-col items-start gap-4">
            <Separator className="bg-zinc-400" />

            <ScrollerLink
              to="enroll"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mx-auto w-full "
            >
              <SheetClose className="w-full ">
                <Button
                  type="submit"
                  variant={"ghost"}
                  className="w-full rounded-[12px] bg-base-lime-green text-base font-medium text-base-background hover:bg-base-lime-green/90 hover:text-base-background/90"
                >
                  Enroll Now
                </Button>
              </SheetClose>
            </ScrollerLink>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarHamburgerAndSidebar;

export const SideBarField = ({
  className,
  text,
  Img,
}: {
  className?: string;
  text: string;
  Img: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <Button
      type="submit"
      variant={"ghost"}
      className={`flex w-full items-center justify-start gap-4 text-base font-medium hover:bg-indigo-950 ${className}`}
    >
      <Img className="h-4 w-4" />
      <h1>{text}</h1>
    </Button>
  );
};
