import "@/styles/globals.css";
import ResponsiveTester from "@/components/ResponsiveTester";
import SummerNavbar from "@/components/NavbarAndFooterComponents/Summer2k24/SummerNavbar";
import SummerFooter from "@/components/NavbarAndFooterComponents/Summer2k24/SummerFooter";
import { Today } from "@/lib/utils";
import Link from "next/link";

export default function SummerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-base-blue">
      <div className="relative h-full font-medium text-base-blue text-white antialiased">
        <main className="relative flex min-h-screen flex-col">
          <SummerNavbar />

          <div className="flex-1 flex-grow">{children}</div>
          <SummerFooter />

          <p className="bg-base-lime-green py-4 text-center text-sm font-semibold text-base-background">
            Copyright © <span>{Today.getFullYear()}</span>{" "}
            <Link href={"/"} className="hidden md:inline-block">
              Drcoders
            </Link>
            <span className="px-2">|</span> All Rights Reserved
          </p>
        </main>
      </div>

      {/* TODO: remove ResponsiveTester before production */}
      <ResponsiveTester />
    </section>
  );
}
