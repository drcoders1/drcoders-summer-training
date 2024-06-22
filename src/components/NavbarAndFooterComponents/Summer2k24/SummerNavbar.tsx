import MaxContainer from "../../MaxContainer";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import NavLinks from "../NavLinks";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
import Link from "next/link";
import SummerNavLinks from "./SummerNavLinks";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent py-4 shadow-sm backdrop-blur-[10px]">
      <MaxContainer className="flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={ImageAssets.Navbar.Logo}
            alt={ImageAssets.Navbar.alt}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <SummerNavLinks />

          <Button
            className={cn(
              "bg-base-lime-green px-8 text-base font-medium text-base-background hover:bg-base-lime-green/90",
            )}
          >
            Enroll Now
          </Button>
        </div>

        <div className="md:hidden">
          <ImageAssets.Icons.AlignJustify />
        </div>
      </MaxContainer>
    </nav>
  );
};

export default Navbar;
