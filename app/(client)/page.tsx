import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import React from "react";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import GFA from "@/components/GFA";
import LatestGlasses from "@/components/LatestGlasses";
import LatestAccessories from "@/components/LatestAccessories";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <ShoppingCartProvider>
      <main className="pt-10 ">
        <Hero />
        <LatestGlasses />
        <GFA />
        <LatestAccessories />
        <Testimonials/>
      </main>
    </ShoppingCartProvider>
  );
};

export default Home;
