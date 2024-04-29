import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="">
      <div className=" flex flex-col justify-end  gap-4 items-center md:items-start border p-4 xl:p-20 bg-cover bg-[url('/images/image-5.jpg')] h-[500px] bg-center lg:h-[700px] xl:h-[820px]">
        <div className="">
          <h2 className="text-5xl font-bold text-center md:text-left xl:text-7xl text-white">
            Find your perfect fit. <br /> Find your perfect style
          </h2>
          <p className="text-center text-white md:text-left">
            Stylish eyewear offering fashionable options beyond just corrective
            lenses.
          </p>
        </div>
        <Button>Shop Now</Button>
      </div>
    </section>
  );
};

export default Hero;
