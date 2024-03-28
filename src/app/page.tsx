import FlightRange from "@/components/FlightRange";
import ResultTable from "@/components/ResultTable";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
   return (
      <main className="bg-[#E1ECEB] w-full flex ">
         <div>
            <Sidebar />
         </div>
         <div className="p-6 w-full">
            <Topbar />
            <div className="flex justify-between my-4 items-center">
               <p>RESULT (25)</p>
               <div className="flex gap-5 text-sm">
                  <div className="bg-white rounded-3xl flex items-center py-2 px-10">
                     FILTER
                  </div>
                  <div className="bg-white rounded-3xl flex items-center gap-2 py-2 px-8">
                     TICKET OF CLASS
                     <IoIosArrowDown size={20} color="#425C5A" />
                  </div>
               </div>
         </div>
         <div className="flex justify-between mt-6">
           <ResultTable />
           <FlightRange />
         </div>
         </div>
      </main>
   );
}
