"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialCardProps } from "@/typings";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TestimonialsSwiper = ({
  testimonials,
}: {
  testimonials: TestimonialCardProps[];
}) => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="w-[500px"
      >
        {testimonials.map((item: TestimonialCardProps, i) => (
          <SwiperSlide>
            <TestimonialCard
              image={item.image}
              message={item.message}
              name={item.name}
              key={i}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSwiper;
