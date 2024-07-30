import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Image from "next/image";
import { Image as SanityImage, Slug } from "sanity";
import { urlForImage } from "@/sanity/lib/image";

type TestimonialCardProps = {
  message: string;
  name: string;
  image: string;
};

const NewTestimonialCard = ({ message, name, image }: TestimonialCardProps) => {
  console.log('The image',image)
  return (
    <div className="mx-4 flex flex-col justify-center items-center">
      <p className="text-center text-slate-600 md:text-lg mx-4 my-8 xl:w-[768px] md:w-[600px]">
        {message}
      </p>
      <div className="flex flex-col lg:flex-row lg:gap-5 items-center justify-center lg:justify-between ">
        {/* Text and profile image */}
        <div className="flex flex-col lg:flex-row lg:gap-x-3 items-center">
          <img
            src={image}
            alt="profile-image"
            className="rounded-full h-14 w-14 border object-cover"
          />
          {/* Text */}
          <div className="text-center lg:text-left">
            <p className="font-semibold text-base">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTestimonialCard;
