"use client";

import React, { useContext } from "react";
import { GlobalContext } from "@/context";
import Sidebar from "@/components/DashboardComponent/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  const { isSidebarCollapsed, setIsSidebarCollapsed } = useContext(GlobalContext);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  console.log(isSidebarCollapsed);
  return (
    <div className="flex bg-[#f0f8ff]">
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar}
      />

      {/* Dashboard main content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
