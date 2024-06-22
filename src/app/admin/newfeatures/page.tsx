import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NewFeatures = () => {
  return (
    <section className="mt-20 flex flex-col items-center gap-10">
      <Link href={"/admin/newfeatures/form"}>
        <Button>Course Application Form</Button>
      </Link>
    </section>
  );
};

export default NewFeatures;
