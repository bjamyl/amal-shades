import type { Metadata } from "next";
import { Lato } from "next/font/google";
import localFont from "next/font/local";

import "../globals.css";
import {
  ShoppingCartProvider,
} from "@/context/ShoppingCartContext";
import { Toaster } from "@/components/ui/sonner"


const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "700", "400"] });

const PPNeueMontreal = localFont({
  src: [
    {
      path: "../fonts/montreal-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/montreal-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/montreal-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/montreal-thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
});


export const metadata: Metadata = {
  title: "Amal-Shades: Affordable, Quality Eyewear for All",
  description: "The one Stop shop for all eyewear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={PPNeueMontreal.className}>
        <ShoppingCartProvider>
          
          {children}
          
        </ShoppingCartProvider>
        <Toaster />
      </body>
    </html>
  );
}