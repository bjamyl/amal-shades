"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { urlForImage } from "@/sanity/lib/image";
import { BannerType } from "@/typings";
import { getBanner } from "@/sanity/sanity.query";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { BeatLoader } from "react-spinners";

const Hero = () => {
  const images = [
    "/hero/hero1.jpg",
    "/hero/hero2.jpg",
    "/hero/hero3.jpg",
    "/hero/hero4.jpg",
  ];

  return (
    <section className="relative">
      <Swiper
        effect="fade"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        <SwiperSlide className="z-10">
          <div className="w-screen h-[75vh] xl:h-[95vh] overflow-hidden">
            <img
              src="/hero/hero3.jpg"
              alt="banner-image"
              className="object-cover w-full h-full brightness-50"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="z-10">
          <div className="w-screen h-[75vh] xl:h-[95vh] overflow-hidden">
            <img
              src="/hero/hero1.jpg"
              alt="banner-image"
              className="object-cover md:object-md-fix  w-full h-full brightness-50"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="z-10">
          <div className="w-screen h-[75vh] xl:h-[95vh] overflow-hidden">
            <img
              src="/hero/hero2.jpg"
              alt="banner-image"
              className="object-cover md:object-md-center w-full h-full brightness-50"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="z-10">
          <div className="w-screen h-[75vh] xl:h-[95vh] overflow-hidden">
            <img
              src="/hero/hero4.jpg"
              alt="banner-image"
              className="object-cover object-center md:object-md-center w-full h-full brightness-50"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute z-30 bottom-8 xl:bottom-36 xl:left-36 mx-6">
        <h1 className="text-white text-5xl font-bold lg:text-7xl">
          Find your <br className="md:hidden" /> perfect fit
        </h1>
        <p className="mt-2 mb-5 lg:text-lg text-slate-50">
          Stylish eyewear offering fashionable options{" "}
          <br className="md:hidden" /> beyond just corrective lenses.
        </p>
        <Button
          className="px-8 text-white rounded-none bg-transparent border-slate-50 border-2"
          variant="outline"
        >
          Shop now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
