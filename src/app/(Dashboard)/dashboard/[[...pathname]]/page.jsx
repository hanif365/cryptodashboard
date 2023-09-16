"use client";

import DashboardContentLayout from "@/components/DashboardComponent/DashboardContentLayout/DashboardContentLayout";
import HelpContentLayout from "@/components/DashboardComponent/HelpContentLayout/HelpContentLayout";
import LogoutContentLayout from "@/components/DashboardComponent/LogoutContentLayout/LogoutContentLayout";
import MarketsContentLayout from "@/components/DashboardComponent/MarketsContentLayout/MarketsContentLayout";
import NotfoundContentLayout from "@/components/DashboardComponent/NotfoundContentLayout/NotfoundContentLayout";
import ProfileContentLayout from "@/components/DashboardComponent/ProfileContentLayout/ProfileContentLayout";
import SettingContentLayout from "@/components/DashboardComponent/SettingContentLayout/SettingContentLayout";
import TransactionContentLayout from "@/components/DashboardComponent/TransactionContentLayout/TransactionContentLayout";
import React from "react";

const Dashboard = ({ params }) => {
  const path = params?.pathname ? params?.pathname[0] : "/";

  let content = null;
  switch (path) {
    case "/":
      content = <DashboardContentLayout />;
      break;
    case "markets":
      content = <MarketsContentLayout />;
      break;
    case "transactions":
      content = <TransactionContentLayout />;
      break;
    case "profile":
      content = <ProfileContentLayout />;
      break;
    case "setting":
      content = <SettingContentLayout />;
      break;
    case "help":
      content = <HelpContentLayout />;
      break;
    case "logout":
      content = <LogoutContentLayout />;
      break;
    default:
      content = <NotfoundContentLayout />;
  }

  return (
    <div className="">
      <div className="">{content}</div>
    </div>
  );
};

export default Dashboard;
