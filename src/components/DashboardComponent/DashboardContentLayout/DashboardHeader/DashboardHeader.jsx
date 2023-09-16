import Image from "next/image";
import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { LuBellDot } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";

const DashboardHeader = () => {
  return (
    <div className={`p-6 flex justify-between dark:bg-[#1C1C25] bg-white`}>
      <div className="w-1/2 self-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className={`dark:bg-[#1C1C25] dark:border-[#ffffff1a] dark:focus:ring-[#f0f8ff13] bg-white border border-[#C4CACD] focus:ring-[#f0f8ff] focus:ring-2 focus:outline-none rounded-3xl py-3 px-8 w-full pr-10`}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-8 pointer-events-none">
            <RiSearchLine className="w-6 h-6 text-[#C4CACD]" />
          </div>
        </div>
      </div>

      <div className="self-center w-1/3 ">
        <div className="flex ">
          <div className="self-center pr-10">
            {/* <Image
              src="/notification_photo.png"
              alt="notification icon"
              width={25}
              height={25}
              className="cursor-pointer"
            /> */}

            <LuBellDot
              className={`w-6 h-6 dark:text-[#ffffff] text-[#0060FF] cursor-pointer `}
            />
          </div>
          <div
            className={`flex justify-evenly self-center dark:bg-[#131313] bg-[#f0f8ff] py-2 px-10 rounded-xl`}
          >
            <Image
              src="/profile_photo.png"
              alt="profile_photo icon"
              width={50}
              height={50}
              className=""
            />
            <div className="self-center pl-3">
              <h5 className="font-bold text-sm">Andy Warhol</h5>
              <p className="text-xs text-[#5E6E78] font-semibold">
                andywarhol@mail.com
              </p>
            </div>
            <div className="pl-10 self-center">
              <HiDotsVertical className="w-5 h-10 text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
