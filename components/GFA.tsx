import React from "react";
import Image from "next/image";

const GFA = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="relative hover:cursor-pointer ">
          <p className="absolute bottom-3 right-5 md:bottom-5 lg:left-10 text-2xl md:text-5xl font-bold text-white z-50">
            FOR LADIES
          </p>
          <div className="w-full h-96 md:h-[60vh] overflow-hidden">
            <Image
              src="/images/marquee/10.jpg"
              alt="product-image"
              height={700}
              width={1280}
              className="object-cover brightness-50 w-full h-full"
            />
          </div>
        </div>
        <div className="relative hover:cursor-pointer">
          <p className="absolute bottom-3 left-5 md:bottom-5 lg:left-10 text-2xl md:text-5xl font-bold z-50 text-white">
            FOR GENTS
          </p>
          <div className="w-full h-96 md:h-[60vh]  overflow-hidden">
            <Image
              src="/images/marquee/6.jpg"
              alt="for-gents img"
              height={700}
              width={1280}
              className="object-cover w-full brightness-50 h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GFA;
