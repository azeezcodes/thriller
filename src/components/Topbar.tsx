import { MdLocationOn } from "react-icons/md";
import { RiExchangeFill } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { PiArmchairFill } from "react-icons/pi";
type Props = {};

const Topbar = (props: Props) => {
   return (
      <div className="w-full bg-[#FFFFFF] rounded-[30px] p-10">
         <div className="upper-block flex flex-row justify-between gap-5 ">
            <div className="basis-1/2 rounded-[30px] justify-evenly bg-[#E1ECEB] flex h-12 items-center px-4 py-2 text-[#425C5A] text-sm">
               <MdLocationOn size={16} color="#425C5A" />
               <p>NEW YORK (JFK)</p>
               <RiExchangeFill size={32} color="#425C5A" className="mx-14" />
               <MdLocationOn size={16} color="#425C5A" />
               <p>MUMBAI (BOM)</p>
            </div>
            <div className="basis-1/4 rounded-[30px] justify-evenly bg-[#E1ECEB] flex h-12 items-center px-4 py-2 text-[#425C5A] text-sm">
               <IoCalendarOutline size={16} color="#425C5A" />
               <p>29 JULY 2019</p>
            </div>
            <div className="basis-1/4 rounded-[30px] justify-evenly bg-[#E1ECEB] flex h-12 items-center px-4 py-2 text-[#425C5A] text-sm">
               <FaUser size={16} color="#425C5A" />
               <p>2 TRAVELER</p>
            </div>
         </div>
         <div className="upper-block flex flex-row justify-between gap-5 mt-10 ">
            <div className="basis-1/2 rounded-[30px] justify-between bg-[#E1ECEB] flex h-12 items-center  text-[#425C5A] text-sm py-[3px] pl-[3px] pr-10">
               <div className="h-full rounded-[30px]  bg-[#425C5A] grid place-content-center px-10">
                  {" "}
                  <p className="text-white ">ONE WAY</p>
               </div>

               <p>ROUND TRIP</p>
               <p>MULTI CITY</p>
            </div>
            <div className="basis-1/4 rounded-[30px] justify-evenly bg-[#E1ECEB] flex h-12 items-center px-4 py-2 text-[#425C5A] text-sm">
               <PiArmchairFill size={16} color="#425C5A" />
               <p>FIRST CLASS</p>
            </div>
            <div className="basis-1/4 rounded-[30px] justify-evenly bg-[#C99C37] flex h-12 items-center px-4 py-2 text-white text-sm">
               <p>SEARCH</p>
            </div>
         </div>
      </div>
   );
};

export default Topbar;
