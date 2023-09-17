import Image from "next/image";
import React from "react";
import { BsEye } from "react-icons/bs";

const CryptoStatus = () => {
  const cryptoArray = [
    {
      id: 1,
      name: "Estimated Balance",
      currency: "",
      icon: "/wallet_icon.png",
      eyeIcon: <BsEye className="w-10 h-6 text-[#4c7188] self-center" />,
      balance: "$123,987",
      chart: "",
      profitType: "Monthly Profit",
      profit: "+$2560.78",
      percentage: "+14.67%",
    },
    {
      id: 2,
      name: "BTCUSDT",
      currency: "Bitcoin",
      icon: "/bitcoin_icon.png",
      eyeIcon: "",
      balance: "$23,738",
      chart: "/bitcoin_chart.png",
      profitType: "PNL Daily",
      profit: "-$16.78",
      percentage: "+14.67%",
    },
    {
      id: 3,
      name: "ETHUSDT",
      currency: "Ethereum",
      icon: "/eth_icon.png",
      eyeIcon: "",
      balance: "$23,738",
      chart: "/eth_chart.png",
      profitType: "PNL Daily",
      profit: "+$189.91",
      percentage: "+24.68%",
    },
    {
      id: 4,
      name: "SOLUSDT",
      currency: "Solana",
      icon: "/solana_icon.png",
      eyeIcon: "",
      balance: "$23,738",
      chart: "/solana_chart.png",
      profitType: "PNL Daily",
      profit: "+$556.14",
      percentage: "+64.11%",
    },
  ];

  return (
    <div className="m-5 space-y-5 md:flex md:space-x-3 md:space-y-0">
      {cryptoArray.map((crypto, index) => (
        <div className="flex-1" key={index}>
          <div className="bg-white dark:bg-[#1C1C25] rounded-lg py-5 px-3 flex flex-col h-full group">
            <div className="flex space-x-3">
              <Image
                src={crypto?.icon}
                alt="wallet_icon"
                width={30}
                height={30}
                className="self-center"
              />
              <div className="self-center">
                <h5 className="text-sm font-bold">{crypto?.name}</h5>
                {crypto.currency && (
                  <p className="text-xs text-[#626D7D]">{crypto?.currency}</p>
                )}
              </div>
              <div className="self-center cursor-pointer">
                {crypto?.eyeIcon}
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <h2
                  className={`font-bold self-center ${
                    index === 0
                      ? "text-lg lg:text-3xl 2xl:text-5xl"
                      : "text-base lg:text-xl 2xl:text-2xl"
                  }  py-5`}
                >
                  {crypto?.balance}
                </h2>
                {crypto?.chart && (
                  <Image
                    src={crypto?.chart}
                    alt="chart"
                    width={110}
                    height={80}
                    className="self-center 2xl:w-[200px] 2xl:h-full transform transition-transform group-hover:scale-110 duration-300 cursor-pointer"
                  />
                )}
              </div>
            </div>

            <div className="flex-grow">
              <div className="flex text-xs justify-between">
                <p className="py-1">{crypto?.profitType}</p>
                <p
                  className={
                    crypto?.profit.includes("+")
                      ? "text-green-600 font-bold py-1"
                      : "text-red-500 font-bold py-1"
                  }
                >
                  {crypto?.profit}
                </p>
                <p className="bg-[#21965438] text-green-600 font-bold px-2 py-1 rounded-xl">
                  {crypto?.percentage}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoStatus;
