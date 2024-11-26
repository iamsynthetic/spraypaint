"use client";
// import type { Metadata } from "next";

import { AppWrapper } from "./context";
import localFont from "next/font/local";
import "./globals.css";
import ViewCanvas from "./components/view-canvas";
import FollowCursor from "./components/follow-cursor/follow-cursor";
import { ReactLenis } from "./utils/lenis";

const opensans = localFont({
  src: "../../public/fonts/OpenSans-VariableFont_wdth,wght.ttf",
  weight: "100 900",
  display: "swap",
  variable: "--font-opensans",
});

const permanentmarker = localFont({
  src: "../../public/fonts/PermanentMarker-Regular.ttf",
  weight: "400",
  variable: "--font-permanentmarker",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body
          className={`${opensans.variable} ${permanentmarker.variable} antialiased`}
        >
          <div className="min-h-screen flex flex-col relative">
            <AppWrapper>
              <div className="follow-cursor">
                <FollowCursor />
              </div>
              <main className="flex-1 flex flex-col">
                {children} <ViewCanvas />
              </main>
            </AppWrapper>
          </div>
        </body>
      </html>
    </ReactLenis>
  );
}
