import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";

const HeaderComponent = () => {
  return (
    <div className="pt-48 h-screen bg-[url('/home-banner.png')] bg-center bg-cover bg-no-repeat">
      <h1 className="text-white tracking-wide font-semibold mx-2 md:mx-0 text-xl lg:text-6xl lg:leading-tight 2xl:text-8xl 2xl:leading-relaxed text-center">
        Transforming Enterprises with Web 3.0 Solutions & Consulting Services
      </h1>

      <div className="flex justify-center mt-20">
        <div className="flex space-x-8">
          <button className="text-blue-500 flex group transition-all ease-in delay-200 text-base lg:text-xl 2xl:text-2xl font-semibold bg-white py-1 lg:py-3 px-5 lg:px-10 rounded-t-xl rounded-bl-xl relative">
            Learn More
            <HiArrowLongRight
              className="text-blue-500 ml-5 self-center transition-transform transform translate-x-0 group-hover:translate-x-2"
              style={{ width: "30px", height: "30px" }}
            />
          </button>

          <button className="text-white hover:text-blue-500 transition-all ease-in delay-200 text-base border lg:text-xl 2xl:text-2xl font-semibold bg-transparent hover:bg-white py-1 lg:py-3 px-5 lg:px-16 rounded-t-xl rounded-bl-xl relative">
            Contact Us
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <FaChevronDown
          className="text-white font-bold self-center animate-bounce"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
