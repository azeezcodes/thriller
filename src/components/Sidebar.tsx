import Image from "next/image";
import { MdOutlineHouse } from "react-icons/md";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlinePieChart } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { ReactNode } from "react";
import  "./../app/globals.css"

type Props = {};
type Datatype = {
   icon: ReactNode;
   name: string;
};

const data: Datatype[] = [
   {
      icon: <MdOutlineHouse color="#C99C37"  size={18} />,
      name: "DASHBOARD",
   },
   {
      icon: <PiAirplaneTiltThin color="#C99C37" size={18} />,
      name: "FLIGHTS",
   },
   {
      icon: <IoWalletOutline color="#C99C37" size={18} />,
      name: "WALLETS",
   },
   {
      icon: <IoNewspaperOutline color="#C99C37" size={18} />,
      name: "REPORTS",
   },
   {
      icon: <AiOutlinePieChart color="#C99C37" size={18} />,
      name: "STATISTICS",
   },
   {
      icon: <GoGear color="#C99C37" size={18} />,
      name: "SETTINGS",
   },
];

const Sidebar = (props: Props) => {
   const icon = (
      <div className="flex -space-x-1 overflow-hidden">
         <img
            className="inline-block h-6 w-6 rounded-full ring-2 ring-[#425C5A]"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
         />
         <img
            className="inline-block h-6 w-6 rounded-full ring-2 ring-[#425C5A]"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
         />
         <img
            className="inline-block h-6 w-6 rounded-full ring-2 ring-[#425C5A]"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
         />
         <img
            className="inline-block h-6 w-6 rounded-full ring-2 ring-[#425C5A]"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
         />
         <div className="bg-[#C99C37] border border-[#425C5A] shrink-0 grow-0 rounded-full grid place-content-center p-0.5">
            <span className="text-sm font-extralight">+70</span>
         </div>
      </div>
   );
   return (
      <div className=" w-60 h-screen transition-transform -translate-x-full sm:translate-x-0 ">
         <div className=" text-white h-[180px]  flex flex-col justify-center text-center bg-[#3D5654]  rounded-tr-[30px] ">
            <div className="border rounded-full border-[#C99C37] mx-auto w-fit p-1">
               <Image
                  className="rounded-full aspect-square object-cover"
                  src="/man1.jpeg"
                  alt="man"
                  width={50}
                  height={50}
                  priority
               />
            </div>
            <p className="text-base font-[300]">ALEX JOHNSON</p>
            <p className="text-[9px]">alex.johnson@gmail.com</p>
         </div>

         <div className="bg-[#425C5A] pl-8 rounded-br-[30px]  ">
            <div className=" grid h-[350px] pt-10">
               {data?.map((item, index) => (
                  <div
                     key={index}
                     className=" flex  items-center gap-2 text-white hover:text-[#425C5A] hover:bg-[#E1ECEB]  font-light pl-4  rounded-tl-lg rounded-bl-lg text-sm "
                  >
                     {item.icon} {item.name}
                  </div>
               ))}
            </div>

            <div className="h-[285px] flex flex-col justify-center py-10">
               <p className="text-[#C99C37] text-[10px]">ACTIVE USERS</p>
               <div className="mt-4">{icon}</div>
               <Image
                  className="object-cover mt-12 "
                  src="/map1.png"
                  alt="man"
                  width={180}
                  height={100}
                  priority
               />
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
