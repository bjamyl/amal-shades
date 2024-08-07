"use client";
import React, { useRef, useState } from "react";
import { Image as Img } from "sanity";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Products } from "@/typings";

export default function ProductSwiper({ product }: { product: Products }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <div className="">
      <Swiper
        loop={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className=""
      >
        {product.gallery.map((image, i) => (
          <SwiperSlide key={i} className="">
            <div className="w-full h-72 lg:h-96  overflow-hidden border rounded-lg">
              <Image
                src={urlForImage(image)}
                alt="product-image"
                height={700}
                width={1280}
                priority={true}
                className="object-cover object-center w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-4 hover:cursor-pointer"
      >
        {product.gallery.map((image, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-20 lg:h-32 overflow-hidden border rounded-lg">
              <Image
                src={urlForImage(image)}
                alt="product-image"
                height={700}
                width={1280}
                priority = {true}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
