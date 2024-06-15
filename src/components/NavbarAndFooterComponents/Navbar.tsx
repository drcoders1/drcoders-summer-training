import MaxContainer from "../MaxContainer";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-base-nav py-4 shadow-sm backdrop-blur-[8px]">
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
          <NavLinks />

          <Button
            className={cn("px-8 text-base font-medium text-base-background")}
          >
            Join Us
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
