import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <p>404 Page Not Found</p>
      <p className="mx-4">|</p>
      <button className="text-base-yellow">
        <Link href={"/"} className="">
          Back to Home
        </Link>
      </button>
    </section>
  );
};

export default notFound;
