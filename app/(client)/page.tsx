import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import React from "react";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

const Home = () => {
  return (
    <ShoppingCartProvider>
      <main className="pt-10 ">
        <Hero />
        <Latest />
      </main>
    </ShoppingCartProvider>
  );
};

export default Home;
