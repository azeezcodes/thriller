"use client";
import React from "react";
import Image from "next/image";
import "react-range-slider-input/dist/style.css";
import RangeSlider from "./Slider";

type Props = {};

const FlightRange = (props: Props) => {
   return (
      <div className="parent bg-[#425C5A] rounded-[30px] pt-6">
         <div className="where flex justify-between text-white items-end px-10">
            <div className="grid">
               <p className="text-sm font-light">FROM</p>
               <p className="text-[24px]">JFK</p>
            </div>
            <p className="text-sm font-light">NON STOP</p>
            <div className="grid">
               <p className="text-sm font-light">TO</p>
               <p className=" text-[24px]">BOM</p>
            </div>
         </div>
         <Image
            className="object-cover mt-0 "
            src="/map2.png"
            alt="man"
            width={350}
            height={10}
            priority
         />
         <div className="flex text-white font-light justify-between px-8 text-xs items-center">
            <div className="bg-[#C99C37] rounded-[50px] px-5 py-2">
               NON STOP
            </div>
            <p>ONE STOP</p>
            <p>MORE STOP</p>
         </div>

         <p className="text-white font-light text-[12px] mt-8 pl-8">PRICE</p>
         <div className="mx-auto px-8">
            <RangeSlider />
         </div>
      </div>
   );
};

export default FlightRange;
