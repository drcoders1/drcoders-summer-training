import MaxContainer from "../MaxContainer";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-7">
      <MaxContainer className="flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={ImageAssets.Navbar.Logo}
            alt={ImageAssets.Navbar.alt}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <div className="flex items-center gap-10">
          <NavLinks />

          <Button className={cn("px-8 text-base font-medium")}>Join Us</Button>
        </div>
      </MaxContainer>
    </nav>
  );
};

export default Navbar;
