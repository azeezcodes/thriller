import React from "react";
import { SiQatarairways } from "react-icons/si";
import { SiEmirates } from "react-icons/si";
import { SiLufthansa } from "react-icons/si";

type Props = {};

const ResultTable = (props: Props) => {
   return (
      <div className="parent bg-white rounded-[30px] pt-6">
         <div className="child flex justify-between items-center gap-14 py-5 px-8 ">
            <div className="company grid justify-items-center">
               <SiEmirates size={40} color="#425C5A " />
               <p className="text-base font-medium text-[#425C5A]">Emirates</p>
            </div>
            <div className="times grid justify-items-center">
               <p className="text-[30px] font-[400] text-[#425C5A]">JFK</p>
               <p className="text-base font-light text-[#425C5A]">13:00</p>
            </div>
            <div className="detail grid justify-items-center">
               <p className="text-xs font-[500] text-[#425C5A]">EMIRATES</p>
               <p className="text-sm font-light text-[#C99C37]">11H 20M</p>
               <p className="text-sm font-light text-[#425C5A]">NON STOP</p>
            </div>
            <div className="BOM grid justify-items-end">
               <p className="text-[30px] font-[400] text-[#425C5A]">BOM</p>
               <p className="text-base font-light text-[#425C5A]">14:20</p>
            </div>
            <div className="BOOK grid justify-items-end">
               <p className="text-sm font-[600] text-[#425C5A] mb-3">$1,204</p>
               <div className="bg-[#C99C37] text-xs rounded-[40px] py-3 px-6 text-white">
                  BOOK NOW
               </div>
            </div>
         </div>
         <div className="bg-[#E1ECEB] w-full h-[2px]"></div>
         <div className="child flex justify-between items-center gap-14 py-5 px-8 ">
            <div className="company flex items-center">
               <div className="grid ">
                  <p className="text-base font-medium text-[#425C5A]">QATAR</p>
                  <p className="text-[8px] font-semibold text-[#425C5A] -mt-2 ml-5">
                     Airway
                  </p>
               </div>

               <SiQatarairways size={40} color="#425C5A " />
            </div>
            <div className="times grid justify-items-center">
               <p className="text-[30px] font-[400] text-[#425C5A]">JFK</p>
               <p className="text-base font-light text-[#425C5A]">13:00</p>
            </div>
            <div className="detail grid justify-items-center">
               <p className="text-xs font-[500] text-[#425C5A] uppercase">
                  QATAR Airways
               </p>
               <p className="text-sm font-light text-[#C99C37]">11H 20M</p>
               <p className="text-sm font-light text-[#425C5A]">NON STOP</p>
            </div>
            <div className="BOM grid justify-items-end">
               <p className="text-[30px] font-[400] text-[#425C5A]">BOM</p>
               <p className="text-base font-light text-[#425C5A]">14:20</p>
            </div>
            <div className="BOOK grid justify-items-end">
               <p className="text-sm font-[600] text-[#425C5A] mb-3">$2,072</p>
               <div className="bg-[#C99C37] text-xs rounded-[40px] py-3 px-6 text-white">
                  BOOK NOW
               </div>
            </div>
         </div>
         <div className="bg-[#E1ECEB] w-full h-[2px]"></div>
         <div className="child flex justify-between items-center gap-14 py-5 px-8 ">
            <div className="company grid justify-items-center">
               <SiLufthansa size={40} color="#425C5A " />
               <p className="text-base font-medium text-[#425C5A]">Lufthansa</p>
            </div>
            <div className="times grid justify-items-center">
               <p className="text-[30px] font-[400] text-[#425C5A]">JFK</p>
               <p className="text-base font-light text-[#425C5A]">13:00</p>
            </div>
            <div className="detail grid justify-items-center">
               <p className="text-xs font-[500] uppercase text-[#425C5A]">Lufthansa</p>
               <p className="text-sm font-light text-[#C99C37]">11H 20M</p>
               <p className="text-sm font-light text-[#425C5A]">NON STOP</p>
            </div>
            <div className="BOM grid justify-items-end">
               <p className="text-[30px] font-[400] text-[#425C5A]">BOM</p>
               <p className="text-base font-light text-[#425C5A]">14:20</p>
            </div>
            <div className="BOOK grid justify-items-end">
               <p className="text-sm font-[600] text-[#425C5A] mb-3">$1,872</p>
               <div className="bg-[#C99C37] text-xs rounded-[40px] py-3 px-6 text-white">
                  BOOK NOW
               </div>
            </div>
         </div>
         <div className="bg-[#E1ECEB] w-full h-[2px]"></div>
         <div className="child flex justify-between items-center gap-14 py-5 px-8 ">
            <div className="company grid justify-items-center">
               <SiEmirates size={40} color="#425C5A " />
               <p className="text-base font-medium text-[#425C5A]">Emirates</p>
            </div>
            <div className="times grid justify-items-center">
               <p className="text-[30px] font-[400] text-[#425C5A]">JFK</p>
               <p className="text-base font-light text-[#425C5A]">13:00</p>
            </div>
            <div className="detail grid justify-items-center">
               <p className="text-xs font-[500] text-[#425C5A]">EMIRATES</p>
               <p className="text-sm font-light text-[#C99C37]">11H 20M</p>
               <p className="text-sm font-light text-[#425C5A]">NON STOP</p>
            </div>
            <div className="BOM grid justify-items-end">
               <p className="text-[30px] font-[400] text-[#425C5A]">BOM</p>
               <p className="text-base font-light text-[#425C5A]">14:20</p>
            </div>
            <div className="BOOK grid justify-items-end">
               <p className="text-sm font-[600] text-[#425C5A] mb-3">$1,872</p>
               <div className="bg-[#C99C37] text-xs rounded-[40px] py-3 px-6 text-white">
                  BOOK NOW
               </div>
            </div>
         </div>
      </div>
   );
};

export default ResultTable;
