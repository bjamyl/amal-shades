import React from "react";
import Image from "next/image";

const GFA = () => {
  return (
    <section className="layout__all">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-cyan-200 relative hover:cursor-pointer ">
          <p className="absolute bottom-3 left-5 text-2xl font-bold text-slate-700">
            FOR LADIES
          </p>
          <div className="w-full h-64 md:h-80 xl:h-96 overflow-hidden">
            <Image
              src="/images/women.png"
              alt="product-image"
              height={700}
              width={1280}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="bg-blue-300 relative hover:cursor-pointer">
          <p className="absolute bottom-3 left-5 text-2xl font-bold text-white">
            FOR GENTS
          </p>
          <div className="w-full h-64 md:h-80 xl:h-96 overflow-hidden">
            <Image
              src="/images/men.png"
              alt="product-image"
              height={700}
              width={1280}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GFA;
