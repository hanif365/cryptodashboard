import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const CryptoChart = () => {
  const [timeFrame, setTimeFrame] = useState("1H");
  const [chartOptions, setChartOptions] = useState({});
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    loadChartData(timeFrame);
  }, [timeFrame]);

  useEffect(() => {
    setChartOptions({
      chart: {
        type: "candlestick",
        height: 350,
      },
      xaxis: {
        type: "datetime",
        labels: {
          formatter: function (value) {
            return formatXAxisLabel(value);
          },
        },
        tickAmount: "dataPoints",
      },
      yaxis: {
        tooltip: {
          enabled: false,
        },
        labels: {
          formatter: function (value) {
            return "$ " + value;
          },
        },
      },
      tooltip: {
        custom: function ({ seriesIndex, dataPointIndex, w }) {
          const candlestickData =
            w.globals.seriesCandleO[seriesIndex][dataPointIndex];
          const open = candlestickData;

          const tooltipContent = `
            <div class="custom-tooltip py-3 px-8 font-bold text-black bg-white dark:text-white dark:bg-black">
              <div>$ ${open}</div>
            </div>
          `;

          return tooltipContent;
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#3380FF",
            downward: "#87B9FF",
          },
          states: {
            hover: {
              enabled: false,
            },
          },
          wick: {
            useFillColor: true,
          },
        },
      },
    });
  }, []);

  const formatXAxisLabel = (value) => {
    const date = new Date(value);
    const options = { month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("default", options);
    return formattedDate;
  };

  const loadChartData = async (selectedTimeFrame) => {
    const data = await getChartDataForTimeFrame(selectedTimeFrame);
    setChartData(data);
  };

  const getChartDataForTimeFrame = (selectedTimeFrame) => {
    const chartDataMap = {
      "1H": [
        {
          x: new Date(1631880000000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1631880000000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1631881800000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1631883600000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1631885400000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1631887200000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1631889000000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1631890800000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1631892600000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1631894400000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1631896200000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1631898000000),
          y: [6608.02, 6620.0, 6605.0, 6615.0],
        },
        {
          x: new Date(1631899800000),
          y: [6614.5, 6618.4, 6609.26, 6613.02],
        },
        {
          x: new Date(1631901600000),
          y: [6613.02, 6615.0, 6607.0, 6614.47],
        },
        {
          x: new Date(1631903400000),
          y: [6614.47, 6620.0, 6612.68, 6618.24],
        },
        {
          x: new Date(1631905200000),
          y: [6618.24, 6623.0, 6617.0, 6620.11],
        },
      ],

      "3H": [
        {
          x: new Date(1631750400000),
          y: [6610.22, 6635.05, 6608.01, 6626.02],
        },
        {
          x: new Date(1631761200000),
          y: [6626.02, 6630, 6614.95, 6625.54],
        },
        {
          x: new Date(1631772000000),
          y: [6625.56, 6645.4, 6623.89, 6638.99],
        },
        {
          x: new Date(1631782800000),
          y: [6638.99, 6650, 6637.12, 6647.52],
        },
        {
          x: new Date(1631793600000),
          y: [6647.52, 6653.49, 6637.66, 6645.55],
        },
      ],

      "5H": [
        {
          x: new Date(1631764800000),
          y: [6606.56, 6640.6, 6606.56, 6630.44],
        },
        {
          x: new Date(1631772000000),
          y: [6630.44, 6645, 6630.42, 6639.99],
        },
        {
          x: new Date(1631779200000),
          y: [6639.99, 6645.63, 6635.56, 6642.49],
        },
        {
          x: new Date(1631786400000),
          y: [6642.49, 6653.13, 6639.21, 6647.93],
        },
        {
          x: new Date(1631793600000),
          y: [6647.93, 6653.38, 6642.33, 6647.81],
        },
      ],

      "1D": [
        {
          x: new Date(1631750400000),
          y: [6601.32, 6629.95, 6600.13, 6626.02],
        },
        {
          x: new Date(1631836800000),
          y: [6626.02, 6660, 6626.01, 6648.99],
        },
        {
          x: new Date(1631923200000),
          y: [6648.99, 6655.55, 6630.42, 6647.99],
        },
        {
          x: new Date(1632009600000),
          y: [6647.99, 6653.13, 6639.21, 6645.93],
        },
        {
          x: new Date(1632096000000),
          y: [6645.93, 6657.44, 6645.62, 6656.41],
        },
      ],

      "1W": [
        {
          x: new Date(1631212800000),
          y: [6610.22, 6635.05, 6608.01, 6626.02],
        },
        {
          x: new Date(1631812800000),
          y: [6626.02, 6630, 6614.95, 6625.54],
        },
        {
          x: new Date(1632412800000),
          y: [6625.56, 6645.4, 6623.89, 6638.99],
        },
        {
          x: new Date(1633012800000),
          y: [6638.99, 6650, 6637.12, 6647.52],
        },
        {
          x: new Date(1633612800000),
          y: [6647.52, 6653.49, 6637.66, 6645.55],
        },
      ],

      "1M": [
        {
          x: new Date(1630339200000),
          y: [6601.32, 6629.95, 6600.13, 6626.02],
        },
        {
          x: new Date(1630944000000),
          y: [6626.02, 6660, 6626.01, 6648.99],
        },
        {
          x: new Date(1631558400000),
          y: [6648.99, 6655.55, 6630.42, 6647.99],
        },
        {
          x: new Date(1632172800000),
          y: [6647.99, 6653.13, 6639.21, 6645.93],
        },
        {
          x: new Date(1632787200000),
          y: [6645.93, 6657.44, 6645.62, 6656.41],
        },
      ],
    };

    const accumulatedData = [];
    const timeFrames = ["1H", "3H", "5H", "1D", "1W", "1M"];

    for (let i = timeFrames.indexOf(selectedTimeFrame); i >= 0; i--) {
      accumulatedData.unshift(...chartDataMap[timeFrames[i]]);
    }

    return accumulatedData;
  };

  return (
    <div className="w-2/3 bg-white dark:bg-[#1C1C25] py-6 px-5 rounded-xl">
      <div className="flex justify-between pb-5">
        <div className="w-64 2xl:w-80">
          <div className="flex justify-between bg-[#f7f4f483] dark:bg-[#17171A] px-5 py-5 rounded-2xl">
            <div>
              <h4 className="text-base lg:text-xl 2xl:text-2xl font-bold">
                BTCUSDT
              </h4>
              <p className="text-sm py-1 mt-1 text-[#626D7D]">Bitcoin</p>
            </div>
            <div>
              <h5 className="text-sm lg:text-lg 2xl:text-xl font-bold">
                $23,738
              </h5>
              <p className="text-xs text-center bg-[#21965438] text-green-600 font-bold py-1 mt-1 rounded-xl">
                +23.6%
              </p>
            </div>
          </div>
        </div>

        <div className="space-x-2">
          <button
            className={`${
              timeFrame === "1H"
                ? "bg-[#c0d9fd5e] dark:bg-[#131313] dark:text-[#1971FF]"
                : "bg-[#F8F8F9] dark:bg-[#1E2027]"
            } py-2 px-4 rounded-xl font-semibold text-sm`}
            onClick={() => {
              setTimeFrame("1H");
            }}
          >
            1H
          </button>

          <button
            className={`${
              timeFrame === "3H"
                ? "bg-[#c0d9fd5e] dark:bg-[#131313] dark:text-[#1971FF]"
                : "bg-[#F8F8F9] dark:bg-[#1E2027]"
            } py-2 px-4 rounded-xl font-semibold text-sm`}
            onClick={() => {
              setTimeFrame("3H");
            }}
          >
            3H
          </button>

          <button
            className={`${
              timeFrame === "5H"
                ? "bg-[#c0d9fd5e] dark:bg-[#131313] dark:text-[#1971FF]"
                : "bg-[#F8F8F9] dark:bg-[#1E2027]"
            } py-2 px-4 rounded-xl font-semibold text-sm`}
            onClick={() => {
              setTimeFrame("5H");
            }}
          >
            5H
          </button>

          <button
            className={`${
              timeFrame === "1D"
                ? "bg-[#c0d9fd5e] dark:bg-[#131313] dark:text-[#1971FF]"
                : "bg-[#F8F8F9] dark:bg-[#1E2027]"
            } py-2 px-4 rounded-xl font-semibold text-sm`}
            onClick={() => {
              setTimeFrame("1D");
            }}
          >
            1D
          </button>

          <button
            className={`${
              timeFrame === "1W"
                ? "bg-[#c0d9fd5e] dark:bg-[#131313] dark:text-[#1971FF]"
                : "bg-[#F8F8F9] dark:bg-[#1E2027]"
            } py-2 px-4 rounded-xl font-semibold text-sm`}
            onClick={() => {
              setTimeFrame("1W");
            }}
          >
            1W
          </button>

          <button
            className={`${
              timeFrame === "1M"
                ? "bg-[#c0d9fd5e] dark:bg-[#131313] dark:text-[#1971FF]"
                : "bg-[#F8F8F9] dark:bg-[#1E2027]"
            } py-2 px-4 rounded-xl font-semibold text-sm`}
            onClick={() => {
              setTimeFrame("1M");
            }}
          >
            1M
          </button>
        </div>
      </div>

      <ReactApexChart
        options={chartOptions}
        series={[{ data: chartData }]}
        type="candlestick"
        height={360}
      />
    </div>
  );
};

export default CryptoChart;
