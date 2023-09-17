import React, { useState } from "react";
import { marketData } from "../../../../data/marketData";

const CryptoMarkets = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? marketData
      : marketData.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-white dark:bg-[#1C1C25] pt-5 rounded-xl">
        <h4 className="text-base lg:text-xl 2xl:text-2xl font-bold pb-5 px-5">
          Markets
        </h4>

        <div className="flex justify-center space-x-1 pb-5 flex-wrap">
          <button
            className={`${
              selectedCategory === "All"
                ? "bg-[#c0d9fd5e] dark:bg-[#131313] dark:text-[#1971FF]"
                : "bg-[#F8F8F9] dark:bg-[#1E2027]"
            } py-1 px-2 lg:px-3 rounded-xl font-semibold text-xs`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          <button
            className={`${
              selectedCategory === "Metaverse"
                ? "bg-[#c0d9fd5e] dark:bg-[#131313] dark:text-[#1971FF]"
                : "bg-[#F8F8F9] dark:bg-[#1E2027]"
            } py-1 px-2 lg:px-3 rounded-xl font-semibold text-xs`}
            onClick={() => setSelectedCategory("Metaverse")}
          >
            Metaverse
          </button>
          <button
            className={`${
              selectedCategory === "Gaming"
                ? "bg-[#c0d9fd5e] dark:bg-[#131313] dark:text-[#1971FF]"
                : "bg-[#F8F8F9] dark:bg-[#1E2027]"
            } py-1 px-2 lg:px-3 rounded-xl font-semibold text-xs`}
            onClick={() => setSelectedCategory("Gaming")}
          >
            Gaming
          </button>
          <button
            className={`${
              selectedCategory === "Defi"
                ? "bg-[#c0d9fd5e] dark:bg-[#131313] dark:text-[#1971FF]"
                : "bg-[#F8F8F9] dark:bg-[#1E2027]"
            } py-1 px-2 lg:px-3 rounded-xl font-semibold text-xs`}
            onClick={() => setSelectedCategory("Defi")}
          >
            Defi
          </button>
          <button
            className={`${
              selectedCategory === "NFT"
                ? "bg-[#c0d9fd5e] dark:bg-[#131313] dark:text-[#1971FF]"
                : "bg-[#F8F8F9] dark:bg-[#1E2027]"
            } py-1 px-2 lg:px-3 rounded-xl font-semibold text-xs`}
            onClick={() => setSelectedCategory("NFT")}
          >
            NFT
          </button>
        </div>

        <table className="w-full lg:min-w-full">
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={`space-y-20 h-16 hover:bg-gray-100 dark:hover:bg-[#14141d] cursor-pointer  ${
                  index !== filteredData.length - 1
                    ? "border-b dark:border-b-[#ffffff0c]"
                    : ""
                }`}
              >
                <td className="text-center text-sm font-semibold">
                  {item.name}
                </td>
                <td className="text-center font-semibold text-[#5E6E78] text-sm">
                  {item.currency}
                </td>
                <td className="text-center text-sm font-semibold">
                  {item.value}
                </td>
                <td className="text-center text-sm font-semibold">
                  <p
                    className={
                      item?.percentage.includes("+")
                        ? "text-[#219653] bg-[#D3EADD] py-1 mx-2 rounded-xl"
                        : "text-[#EB5757] bg-[#FBDDDD] py-1 mx-2 rounded-xl"
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
          <button className="border dark:border-[#ffffff0c] text-[#999999] font-bold text-sm my-3 mx-5 px-5 py-2 rounded-lg hover:bg-[#87b9ff4b] hover:text-blue-400 transition-all">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoMarkets;
