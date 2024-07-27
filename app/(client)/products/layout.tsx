import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>
    <Navbar/>
    {children}
    </div>;
};

export default ProductsLayout;
