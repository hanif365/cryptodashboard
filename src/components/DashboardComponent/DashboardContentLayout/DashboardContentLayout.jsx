import React from "react";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import CryptoStatus from "./CryptoStatus/CryptoStatus";
import CryptoChart from "./CryptoChart/CryptoChart";
import CryptoMarkets from "./CryptoMarkets/CryptoMarkets";
import AssetsChart from "./AssetsChart/AssetsChart";
import ConvertCurrency from "./ConvertCurrency/ConvertCurrency";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

const DashboardContentLayout = () => {
  return (
    <div>
      <DashboardHeader />
      <CryptoStatus />
      <div className="flex flex-col lg:flex-row m-5 space-y-2 lg:space-y-0 lg:space-x-4 ">
        <CryptoChart />
        <CryptoMarkets />
      </div>
      <div className="flex flex-col lg:flex-row m-5 space-y-2 lg:space-y-0 lg:space-x-2">
        <AssetsChart />
        <ConvertCurrency />
        <TransactionHistory />
      </div>
    </div>
  );
};

export default DashboardContentLayout;
