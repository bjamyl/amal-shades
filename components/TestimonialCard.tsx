import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { TestimonialCardProps } from "@/typings";

const TestimonialCard = ({ message, name, image }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="flex border flex-col w-fit items-center space-y-8 p-6">
        <p className="text-slate-600 md:text-lg max-w-[500px]">{message}</p>
        <div className="flex justify-between">
          <div>
            <p className="font-medium md:text-lg text-[#1a4848]">{name}</p>
          </div>
          {/* <img
            src={urlForImage(image)}
            alt=""
            className="h-12 w-12 rounded-full object-cover"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
