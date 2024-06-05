import React from "react";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <section className="">
      <div className="container__layout">
        <div className="layout__all">
          <h2 className="text-3xl md:text-5xl font-bold">
            Look Good. Feel Good in Amal!
          </h2>
          <p className="mt-3 mb-10 text-slate-600">
            We have the best looking clients! Get you some Amal Shades and slay
            with confidence!
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-10">
        <Marquee>
          <img
            src="/images/marquee/1.jpg"
            alt=""
            className=" w-64 md:w-[450px] object-cover h-64 md:h-[450px]"
          />
          <img
            src="/images/marquee/2.jpg"
            alt=""
            className=" w-64 md:w-[450px] object-cover h-64 md:h-[450px]"
          />
          <img
            src="/images/marquee/3.jpg"
            alt=""
            className=" w-64 md:w-[450px] object-cover h-64 md:h-[450px]"
          />
          <img
            src="/images/marquee/4.jpg"
            alt=""
            className=" w-64 md:w-[450px] object-cover h-64 md:h-[450px]"
          />
        </Marquee>
        <Marquee direction="right">
          <img
            src="/images/marquee/5.jpg"
            alt=""
            className=" w-64 md:w-[450px] object-cover h-64 md:h-[450px]"
          />
          <img
            src="/images/marquee/6.jpg"
            alt=""
            className=" w-64 md:w-[450px] object-cover h-64 md:h-[450px]"
          />
          <img
            src="/images/marquee/7.jpg"
            alt=""
            className=" w-64 md:w-[450px] object-cover h-64 md:h-[450px]"
          />
          <img
            src="/images/marquee/8.jpg"
            alt=""
            className=" w-64 md:w-[450px] object-cover h-64 md:h-[450px]"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default Gallery;
