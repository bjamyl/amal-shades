import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import React from "react";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import GFA from "@/components/GFA";

const Home = () => {
  return (
    <ShoppingCartProvider>
      <main className="pt-10 ">
        <Hero />
        <Latest />
        <GFA/>
      </main>
    </ShoppingCartProvider>
  );
};

export default Home;
