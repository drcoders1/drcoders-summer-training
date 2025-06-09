import { Button } from "@/components/ui/button";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <p>Coming Soon</p>
      <p className="ml-4">|</p>
      <Button variant={"link"}>
        <Link href={"/"} className="">
          Back to Home
        </Link>
      </Button>
    </section>
  );
};

export default ComingSoon;
