"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathName = usePathname();

  return (
    <div className="flex items-center gap-10">
      {NavLinksData.map((link, index) => (
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

export default NavLinks;

export const NavLinksData = [
  { Name: "Home", route: "/" },
  { Name: "About", route: "/about" },
  { Name: "Community", route: "/community" },
  { Name: "Academy", route: "/academy" },
];
