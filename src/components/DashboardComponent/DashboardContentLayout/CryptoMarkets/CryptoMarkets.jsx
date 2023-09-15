import React, { useState } from "react";
import { marketData } from "../../../../data/marketData";

const CryptoMarkets = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? marketData
      : marketData.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-1/3 px-1">
      <div className="bg-white pt-5 rounded-xl">
        <h4 className="text-base lg:text-xl 2xl:text-2xl font-bold pb-5 px-5">
          Markets
        </h4>

        <div className="flex justify-center space-x-1 pb-5">
          <button
            className={`${
              selectedCategory === "All"
                ? "bg-[#c0d9fd5e] text-[#3380FF]"
                : "bg-[#F8F8F9]"
            } py-1 px-3 rounded-xl font-semibold text-xs`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          <button
            className={`${
              selectedCategory === "Metaverse"
                ? "bg-[#c0d9fd5e] text-[#3380FF]"
                : "bg-[#F8F8F9]"
            } py-1 px-3 rounded-xl font-semibold text-xs`}
            onClick={() => setSelectedCategory("Metaverse")}
          >
            Metaverse
          </button>
          <button
            className={`${
              selectedCategory === "Gaming"
                ? "bg-[#c0d9fd5e] text-[#3380FF]"
                : "bg-[#F8F8F9]"
            } py-1 px-3 rounded-xl font-semibold text-xs`}
            onClick={() => setSelectedCategory("Gaming")}
          >
            Gaming
          </button>
          <button
            className={`${
              selectedCategory === "Defi"
                ? "bg-[#c0d9fd5e] text-[#3380FF]"
                : "bg-[#F8F8F9]"
            } py-1 px-3 rounded-xl font-semibold text-xs`}
            onClick={() => setSelectedCategory("Defi")}
          >
            Defi
          </button>
          <button
            className={`${
              selectedCategory === "NFT"
                ? "bg-[#c0d9fd5e] text-[#3380FF]"
                : "bg-[#F8F8F9]"
            } py-1 px-3 rounded-xl font-semibold text-xs`}
            onClick={() => setSelectedCategory("NFT")}
          >
            NFT
          </button>
        </div>

        <table className="min-w-full ">
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={`space-y-20 h-16 hover:bg-gray-100 cursor-pointer ${
                  index !== filteredData.length - 1 ? "border-b" : ""
                }`}
              >
                <td className="text-center text-sm font-semibold">
                  {item.name}
                </td>
                <td className="text-center text-sm">{item.currency}</td>
                <td className="text-center text-sm font-semibold">
                  {item.value}
                </td>
                <td className="text-center text-sm font-semibold">
                  <p
                    className={
                      item?.percentage.includes("+")
                        ? "text-green-600 bg-[#21965438] mx-2 rounded-xl"
                        : "text-red-500 bg-[#ff1d1d38] mx-2 rounded-xl"
                    }
                  >
                    {item.percentage}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end">
          <button className="border font-bold text-sm m-3 px-5 py-2 rounded-lg hover:bg-[#87b9ff4b] hover:text-blue-400 transition-all">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoMarkets;
