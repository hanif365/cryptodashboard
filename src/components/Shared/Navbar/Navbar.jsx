"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEquals, FaXmark } from "react-icons/fa6";
import Image from "next/image";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav
        className={`w-full bg-white md:bg-transparent top-0 left-0 right-0 z-10 fixed md:-translate-y-0 transform transition-all duration-1000 `}
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl 2xl:max-w-screen-2xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-8 md:block">
              <Link href="/" onClick={() => {}}>
                <div className="flex items-center">
                  <Image
                    src="/logo-white.svg"
                    width={150}
                    height={150}
                    alt="logo-white"
                    className="h-16 hidden md:block"
                  />

                  <Image
                    src="/main_logo.svg"
                    width={100}
                    height={100}
                    alt="main_logo"
                    className="h-16 block md:hidden"
                  />
                </div>
              </Link>

              <div className="md:hidden">
                <button
                  className="text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar((prev) => !prev)}
                >
                  {navbar ? (
                    <FaXmark
                      style={{
                        width: "35px",
                        height: "35px",
                        color: "red",
                      }}
                    />
                  ) : (
                    <FaEquals
                      style={{
                        width: "35px",
                        height: "35px",
                        color: "#000000",
                      }}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li
                  className={`text-xl font-bold py-2 md:px-6 text-center border-b-2 md:border-b-0 text-blue-500 md:text-white transition duration-700 ease-in-out`}
                >
                  <Link
                    className={``}
                    href="/"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={`text-xl font-bold py-2 md:px-6 text-center border-b-2 md:border-b-0 text-green-500 md:text-white transition duration-700 ease-in-out`}
                >
                  <Link
                    className={``}
                    href="/dashboard"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
