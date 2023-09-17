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
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";

const Sidebar = ({ isSidebarCollapsed, toggleSidebar }) => {
  const pathName = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  console.log(theme);

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
          src={
            theme === "dark" ? "/markets_icon_black.png" : "/markets_icon.png"
          }
          alt="markets icon"
          width={65}
          height={65}
          className="w-full"
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
      className={`min-h-screen border-r ease-linear duration-300 dark:bg-[#1C1C25] dark:border-none bg-white ${
        isSidebarCollapsed ? "w-24" : "w-24 lg:w-60"
      }`}
    >
      <div className="flex justify-end pt-3 px-2 space-x-3">
        <Link href="/">
          <FcHome
            className="self-center"
            style={{ width: "20px", height: "20px" }}
          />
        </Link>

        <div>
          <button
            className={`w-fit rounded-md hover:scale-110 active:scale-100 duration-200`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "light" ? (
              <BsMoon
                className="dark:text-white text-[#17286136]"
                style={{ width: "20px", height: "20px" }}
              />
            ) : (
              <BsSun
                className="dark:text-white text-[#17286136]"
                style={{ width: "20px", height: "20px" }}
              />
            )}
          </button>
        </div>

        <button onClick={toggleSidebar} className="hidden md:block">
          {isSidebarCollapsed ? (
            <PiArrowFatLinesRightFill
              className="dark:text-white  text-[#17286136]"
              style={{ width: "20px", height: "20px" }}
            />
          ) : (
            <PiArrowFatLinesLeftFill
              className="dark:text-white  text-[#172861a6]"
              style={{ width: "20px", height: "20px" }}
            />
          )}
        </button>
      </div>

      <div className="flex pb-7 px-6 pt-8">
        <Image
          src={
            isSidebarCollapsed
              ? "/logo.png"
              : theme === "dark"
              ? "/logo_full_dark.png"
              : "/logo_full.png"
          }
          alt="Profile Photo"
          width={1000}
          height={1000}
          className="w-full rounded-xl hidden md:block"
        />

        <Image
          src={
            isSidebarCollapsed
              ? "/logo.png"
              : theme === "dark"
              ? "/logo.png"
              : "/logo.png"
          }
          alt="Profile Photo"
          width={1000}
          height={1000}
          className="w-full rounded-xl block md:hidden"
        />
      </div>

      <div className="flex flex-col duration-300 ease-linear">
        <nav className="mt-3 py-4 px-4 lg:mt-5 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {menuItems.map((menuItem) => (
                <li key={menuItem.id}>
                  {menuItem.isDivider ? (
                    <hr
                      className={`my-10 border-t-2 dark:border-[#ffffff1a] border-gray-200 ${
                        isSidebarCollapsed ? "mx-0" : "mx-0 lg:mx-5"
                      } `}
                    />
                  ) : (
                    <div
                      onClick={() => handlenavigate(menuItem)}
                      className={`group  cursor-pointer flex items-center gap-2.5 rounded-lg py-3 font-medium duration-300 ease-in-out ${
                        isSidebarCollapsed ? "px-0" : "px-0 lg:px-8"
                      }
                             ${
                               currentPath.includes(menuItem.id)
                                 ? "dark:bg-[#062141] dark:text-[#0060FF] bg-[#D5E6FB] text-[#0060FF]"
                                 : "dark:hover:bg-[#0621413a] dark:hover:text-[#0062ffb9] hover:bg-[#d5e6fb62] hover:text-[#0062ffb9] transition-all duration-200"
                             }
                            `}
                    >
                      <div
                        className={`${
                          isSidebarCollapsed
                            ? // ? "w-full flex justify-center items-center"
                              "mx-auto"
                            : "mx-auto lg:mx-0"
                        } `}
                      >
                        {menuItem.icon}
                      </div>
                      <p
                        className={`${
                          isSidebarCollapsed ? "hidden" : "hidden lg:block"
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
