"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SummerNavLinks = () => {
  const pathName = usePathname();

  return (
    <div className="flex items-center gap-10">
      {SummerNavLinksData.map((link, index) => (
        <Link
          key={index}
          href={link.route}
          className={cn("relative text-lg font-semibold", {
            "text-primary before:absolute before:bottom-0 before:h-[2px] before:w-full before:rounded-full before:bg-primary":
              link.route === pathName,
          })}
        >
          {link.Name}
        </Link>
      ))}
    </div>
  );
};

export default SummerNavLinks;

export const SummerNavLinksData = [
  { Name: "Home", route: "/" },
  { Name: "Features", route: "/" },
  { Name: "Details", route: "/" },
  { Name: "Partners", route: "/" },
];
