import "@/styles/globals.css";
import Navbar from "@/components/NavbarAndFooterComponents/Navbar";
import Footer from "@/components/NavbarAndFooterComponents/Footer";
import ResponsiveTester from "@/components/ResponsiveTester";
import SummerNavbar from "@/components/NavbarAndFooterComponents/SummerNavbar";

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
          {/* <Footer /> */}
        </main>
      </div>

      {/* TODO: remove ResponsiveTester before production */}
      <ResponsiveTester />
    </section>
  );
}
