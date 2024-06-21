import "@/styles/globals.css";
import Navbar from "@/components/NavbarAndFooterComponents/Navbar";
import Footer from "@/components/NavbarAndFooterComponents/Footer";
import ResponsiveTester from "@/components/ResponsiveTester";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-base-blue">
      <div className="relative h-full font-medium text-base-blue text-white antialiased">
        <main className="relative flex min-h-screen flex-col">
          <Navbar />

          <div className="flex-1 flex-grow">{children}</div>
          <Footer />
        </main>
      </div>

      {/* TODO: remove ResponsiveTester before production */}
      <ResponsiveTester />
    </section>
  );
}
