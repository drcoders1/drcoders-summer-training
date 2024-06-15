import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/NavbarAndFooterComponents/Navbar";
import Footer from "@/components/NavbarAndFooterComponents/Footer";
import ResponsiveTester from "@/components/ResponsiveTester";

export const metadata = {
  title: "Drcoders",
  description: "Fastest growing tech community",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full text-foreground">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={cn("bg-base-blue", GeistSans.variable)}>
        <TRPCReactProvider>
          <div className="relative h-full font-medium text-base-blue text-white antialiased">
            <main className="relative flex min-h-screen flex-col">
              <Navbar />

              <div className="flex-1 flex-grow">{children}</div>
              <Footer />
            </main>
          </div>
        </TRPCReactProvider>
        {/* <Analytics /> */}

        {/* TODO: remove ResponsiveTester before production */}
        <ResponsiveTester />
      </body>
    </html>
  );
}
