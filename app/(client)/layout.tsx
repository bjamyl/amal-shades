import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lato } from "next/font/google";
import "../globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["100" ,"300", "700", "400"] });

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
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
