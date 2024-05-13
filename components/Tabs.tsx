"use client";
import React from "react";
import { useState } from "react";
import { Products } from "@/typings";

export default function Works({ product }: { product: Products }) {
  const [toggle, setToggle] = useState(1);

  const description = product.description;

  // Function to change index
  const toggleTab = (index: number) => {
    setToggle(index);
  };

  const displayContent = () => {
    if (toggle === 1) {
      return (
        <div>
          <p>{description}</p>
        </div>
      );
    } else if (toggle === 2) {
      return (
        <div className="flex gap-x-6">
          <ul className="font-bold space-y-3">
            <li>Size:</li>
            <li>Color:</li>
            <li>Shape:</li>
            <li>Rim:</li>
          </ul>
          <ul className="space-y-3">
            <li>{product.size[0]}</li>
            <li>{product.color}</li>
            <li>{product.shape}</li>
            <li>{product.rim}</li>
          </ul>
        </div>
      );
    }
  };
  return (
    <div className="mt-12">
      <div>
        <ul className="text-2xl xl:text-3xl flex gap-10  mt-5">
          <li
            onClick={() => toggleTab(1)}
            className={`${
              toggle === 1 ? "font-bold underline" : "text-slate-500"
            } hover:cursor-pointer text-lg `}
          >
            Description
          </li>
          <li
            onClick={() => toggleTab(2)}
            className={`${
              toggle === 2 ? "font-bold underline" : "text-slate-500"
            } hover:cursor-pointer text-lg `}
          >
            Details
          </li>
        </ul>
      </div>
      <div className="">{displayContent()}</div>
    </div>
  );
}
