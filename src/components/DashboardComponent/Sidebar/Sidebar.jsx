"use client";

import React from "react";
import { RiDashboardFill, RiSettings5Fill } from "react-icons/ri";
import { CgArrowsExchange } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import {
  PiArrowFatLinesLeftFill,
  PiArrowFatLinesRightFill,
} from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FcHome } from "react-icons/fc";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <RiDashboardFill size={25} />,
  },
  {
    id: "markets",
    label: "Markets",
    path: "/dashboard/markets",
    icon: (
      <Image
        src="/markets_icon.png"
        alt="markets icon"
        width={65}
        height={65}
        className="w-full hover:text-red-500"
      />
    ),
  },
  {
    id: "transactions",
    label: "Transactions",
    path: "/dashboard/transactions",
    icon: <CgArrowsExchange size={25} />,
  },
  {
    id: "profile",
    label: "Profile",
    path: "/dashboard/profile",
    icon: <AiOutlineUser size={25} />,
  },
  {
    id: "setting",
    label: "Setting",
    path: "/dashboard/setting",
    icon: <RiSettings5Fill size={25} />,
  },
  {
    id: "divider",
    isDivider: true,
  },
  {
    id: "help",
    label: "Help",
    path: "/dashboard/help",
    icon: <BiHelpCircle size={25} />,
  },
  {
    id: "logout",
    label: "Log Out",
    path: "/dashboard/logout",
    icon: <MdLogout size={25} />,
  },
];

const Sidebar = ({ isSidebarCollapsed, toggleSidebar }) => {
  const pathName = usePathname();
  const router = useRouter();

  const getLastWord = (path) => {
    const pathParts = path.split("/");
    return pathParts[pathParts.length - 1];
  };

  const currentPath = getLastWord(pathName);

  const handlenavigate = (getMenuItem) => {
    router.push(getMenuItem.path);
  };

  return (
    <aside
      className={`min-h-screen border-r bg-white ease-linear duration-300 ${
        isSidebarCollapsed ? "w-24" : "w-60"
      }`}
    >
      <div className="flex justify-end pt-3 px-3 space-x-3">
        <Link href="/">
          <FcHome
            className="self-center"
            style={{ width: "20px", height: "20px" }}
          />
        </Link>
        <button onClick={toggleSidebar}>
          {isSidebarCollapsed ? (
            <PiArrowFatLinesRightFill
              className="text-[#17286136]"
              style={{ width: "20px", height: "20px" }}
            />
          ) : (
            <PiArrowFatLinesLeftFill
              className="text-[#172861a6]"
              style={{ width: "20px", height: "20px" }}
            />
          )}
        </button>
      </div>

      <div className="flex pb-7 px-6 pt-8">
        <Image
          src="/logo.png"
          alt="Profile Photo"
          width={1000}
          height={1000}
          className="w-full rounded-xl"
        />
      </div>
      <hr />

      <div className="flex flex-col duration-300 ease-linear">
        <nav className="mt-3 py-4 px-4 lg:mt-5 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {menuItems.map((menuItem) => (
                <li key={menuItem.id}>
                  {menuItem.isDivider ? (
                    <hr className="my-10 mx-5 border-t-2 border-gray-200" />
                  ) : (
                    <div
                      onClick={() => handlenavigate(menuItem)}
                      className={`group  cursor-pointer flex items-center gap-2.5 rounded-lg py-3 font-medium duration-300 ease-in-out ${
                        isSidebarCollapsed ? "px-0" : "px-8"
                      }
                             ${
                               currentPath.includes(menuItem.id)
                                 ? "bg-[#D5E6FB] text-[#0060FF]"
                                 : "hover:bg-[#d5e6fb62] hover:text-[#0062ffb9] transition-all duration-200"
                             }
                            `}
                    >
                      <div
                        className={`${
                          isSidebarCollapsed
                            ? "w-full flex justify-center items-center"
                            : ""
                        } `}
                      >
                        {menuItem.icon}
                      </div>
                      <p
                        className={`${
                          isSidebarCollapsed ? "hidden" : ""
                        } font-bold`}
                      >
                        {menuItem.label}
                      </p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div></div>
    </aside>
  );
};

export default Sidebar;
