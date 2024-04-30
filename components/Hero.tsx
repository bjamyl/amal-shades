import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col justify-end gap-4 items-center md:items-start border p-10 xl:p-40 bg-cover bg-[url('/images/3.jpg')] h-[500px] bg-center lg:h-[700px] xl:h-[820px]">
        <div className="">
          <h2 className="text-5xl md:text-6xl text-center md:text-left xl:text-8xl text-slate-800">
            Find your perfect fit.
          </h2>
          <p className="text-center text-slate-800 md:text-left">
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
