import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import React from "react";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import GFA from "@/components/GFA";
import LatestGlasses from "@/components/LatestGlasses";
import LatestAccessories from "@/components/LatestAccessories";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <ShoppingCartProvider>
      <main className="">
        <Navbar />
        <Hero />
        <LatestGlasses />
        <GFA />
        <LatestAccessories />
        <Testimonials />
        <FAQ />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </ShoppingCartProvider>
  );
};

export default Home;
