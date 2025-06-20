import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/lib/utils";
import Script from "next/script";
import ReactGA from "react-ga4";

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
  ReactGA.initialize("G-1WLDJ85260");

  return (
    <html lang="en" className="h-full text-foreground">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1WLDJ85260"
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
                
          gtag('config', 'G-1WLDJ85260');`}
      </Script>
      <body className={cn("", GeistSans.variable)}>
        <TRPCReactProvider>
          <div className="relative h-full font-medium text-base-blue text-white antialiased">
            <main className="relative flex min-h-screen flex-col">
              <div className="flex-1 flex-grow">{children}</div>
            </main>
          </div>
        </TRPCReactProvider>
        {/* <Analytics /> */}

        {/*  remove ResponsiveTester before production */}
        {/* <ResponsiveTester /> */}
      </body>
    </html>
  );
}
