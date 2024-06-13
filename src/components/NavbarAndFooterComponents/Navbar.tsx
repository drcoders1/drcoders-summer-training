import MaxContainer from "../MaxContainer";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="py-7">
      <MaxContainer className="flex items-center justify-between">
        <div>Logo</div>

        <div className="flex items-center gap-10">
          <NavLinks />

          <Button className={cn("px-8 text-base font-medium")}>Join Us</Button>
        </div>
      </MaxContainer>
    </nav>
  );
};

export default Navbar;
