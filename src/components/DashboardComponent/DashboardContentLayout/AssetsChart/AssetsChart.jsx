import React from "react";
import ReactApexChart from "react-apexcharts";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const AssetsChart = () => {
  const chartData = [15, 10, 5, 60];
  const chartLabels = ["ETH", "Ada", "Others", "BTC"];

  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#B1D3FF", "#00C4DF", "#155AB6", "#3380FF"],
    fill: {
      type: "gradient",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        offsetY: 0,
        donut: {
          size: "65%",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
    },
    labels: chartLabels,
  };

  return (
    <div className="w-3/12 bg-white dark:bg-[#1C1C25] py-5 px-4 rounded-xl">
      <div className="flex justify-between mb-5">
        <h4 className="text-base lg:text-xl 2xl:text-2xl font-bold">Assets</h4>

        <button className="border dark:border-[#ffffff0c] dark:text-[#999999] text-[#CCD0D7] font-bold px-3 py-1 rounded-lg hover:bg-[#87b9ff4b] hover:text-blue-400 transition-all">
          <PiDotsThreeOutlineFill
            className="self-center"
            style={{ width: "20px", height: "20px" }}
          />
        </button>
      </div>
      <div className="w-full">
        <ReactApexChart
          options={options}
          series={chartData}
          type="donut"
          height="350"
        />
      </div>
    </div>
  );
};

export default AssetsChart;
