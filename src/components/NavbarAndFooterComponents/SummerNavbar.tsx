import MaxContainer from "../MaxContainer";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
import Link from "next/link";

const SummerNavbar = () => {
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

        <Link href={"/summertraining2k24/form"}>
          <Button
            className={cn(
              "bg-base-lime-green px-8 text-base font-medium text-base-background hover:bg-base-lime-green/90",
            )}
          >
            Join Us
          </Button>
        </Link>
      </MaxContainer>
    </nav>
  );
};

export default SummerNavbar;
