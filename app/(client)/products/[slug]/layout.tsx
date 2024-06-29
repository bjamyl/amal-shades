import Footer from "@/components/Footer";
import Head from "next/head";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Amal Shades: Product",
};

const SingleProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default SingleProductLayout;
