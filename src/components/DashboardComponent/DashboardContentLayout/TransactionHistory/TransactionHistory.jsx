import React, { useState } from "react";
import { historyData } from "../../../../data/historyData";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const TransactionHistory = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? historyData
      : historyData.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-5/12 px-1">
      <div className="bg-white dark:bg-[#1C1C25] pt-5 pb-9 rounded-xl">
        <div className="flex justify-between mx-5 mb-3">
          <h4 className="text-base lg:text-xl 2xl:text-2xl font-bold">
            History
          </h4>

          <button className="border dark:border-[#ffffff0c] text-[#999999] font-bold text-sm px-5 py-2 rounded-lg hover:bg-[#87b9ff4b] hover:text-blue-400 transition-all">
            View All
          </button>
        </div>

        <table className="min-w-full">
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={`h-16 hover:bg-gray-100 dark:hover:bg-[#14141d] cursor-pointer ${
                  index !== filteredData.length - 1
                    ? "border-b dark:border-b-[#ffffff0c]"
                    : ""
                }`}
              >
                <td className="text-sm  px-3 font-semibold">
                  {index % 2 !== 0 ? (
                    <FaArrowUp
                      className="text-[#EB5757] bg-[#FBDDDD] p-2 rounded-full"
                      style={{ width: "30px", height: "30px" }}
                    />
                  ) : (
                    <FaArrowDown
                      className="text-[#219653] bg-[#D3EADD] p-2 rounded-full"
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}
                </td>
                <td className="text-sm font-semibold">{item.name}</td>
                {/* <td className="text-center text-sm">{item.value}</td> */}
                <td
                  className={
                    item?.value.includes("+")
                      ? "text-[#219653] font-semibold text-center"
                      : "text-[#EB5757] font-semibold text-center"
                  }
                >
                  {item.value}
                </td>
                <td className="text-center text-sm font-semibold">
                  {item.time}
                </td>
                <td className="text-center text-sm font-semibold">
                  <p
                    className={
                      item?.status == "done"
                        ? "text-[#219653] bg-[#D3EADD] py-1 mx-2 rounded-xl"
                        : "text-[#F2994A] bg-[#FCF4DB] py-1 mx-2 rounded-xl"
                    }
                  >
                    {item.status}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="flex justify-end">
          <button className="border font-bold text-sm m-3 px-5 py-2 rounded-lg hover:bg-[#87b9ff4b] hover:text-blue-400 transition-all">
            View All
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default TransactionHistory;
