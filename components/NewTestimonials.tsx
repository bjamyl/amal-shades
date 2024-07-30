import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { TestimonialCardProps } from "@/typings";
import { getTestimonials } from "@/sanity/sanity.query";
import NewTestimonialCard from "./NewTestimonialsCard";

type Reviews = {
  testimonials: TestimonialCardProps[];
};

const NewTestimonials = ({ testimonials }: Reviews) => {
  return (
    <section className="relative">
      <Swiper
        className="xl:h-[355px] h-[518px]"
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        pagination={true}
        modules={[Pagination, Navigation]}
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <NewTestimonialCard
              image={testimonial.image}
              message={testimonial.message}
              name={testimonial.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="">
        <img
          src="btn-left.svg"
          alt="arrow-left"
          className="swiper-button-prev  arrow-right cursor-pointer hidden md:block"
        />
        <img
          src="btn-right.svg"
          alt="arrow-left"
          className="swiper-button-next arrow-left  cursor-pointer hidden md:block"
        />
      </div>
    </section>
  );
};

export default NewTestimonials;
