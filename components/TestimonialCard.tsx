import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { TestimonialCardProps } from "@/typings";

const TestimonialCard = ({ message, name, image }: TestimonialCardProps) => {
  return (
    <div className="bg-[#F5F5FF] border p-6">
      <div className="flex flex-col space-y-8">
        <p className="text-slate-600">{message}</p>
        <div className="flex justify-between">
          <div>
            <p className="font-medium">{name}</p>
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
