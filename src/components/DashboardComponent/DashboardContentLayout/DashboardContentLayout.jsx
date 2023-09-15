import React from "react";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import CryptoStatus from "./CryptoStatus/CryptoStatus";
import CryptoChart from "./CryptoChart/CryptoChart";
import CryptoMarkets from "./CryptoMarkets/CryptoMarkets";

const DashboardContentLayout = () => {
  return (
    <div>
      <DashboardHeader />
      <CryptoStatus />
      <div className="flex m-5 space-x-2 ">
        <CryptoChart />
        <CryptoMarkets />
      </div>
    </div>
  );
};

export default DashboardContentLayout;
