"use client";
import React from "react";
import MaxContainer from "../MaxContainer";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const AdminNavbar = () => {
  const pathName = usePathname();
  return (
    <section className="bg-base-lime-green font-semibold text-background">
      <MaxContainer className="flex justify-center">
        {AdminNavItems.map((Item, index) => {
          return (
            <Link
              key={index}
              href={Item.link}
              className={cn("px-10 py-5", {
                "bg-base-background text-white": pathName === Item.link,
              })}
            >
              {Item.name}
            </Link>
          );
        })}
      </MaxContainer>
    </section>
  );
};

export default AdminNavbar;

const AdminNavItems = [
  { name: "Admin", link: "/admin" },
  { name: "New Features", link: "/admin/newfeatures" },
  { name: "Admin 4", link: "/admin/admin4" },
  { name: "Admin 5", link: "/admin/admin5" },
  { name: "Website", link: "/" },
];
