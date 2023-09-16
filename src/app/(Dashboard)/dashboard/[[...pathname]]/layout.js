"use client";

import React, { useContext } from "react";
import { GlobalContext } from "@/context";
import Sidebar from "@/components/DashboardComponent/Sidebar/Sidebar";
import { useTheme } from "next-themes";

export default function DashboardLayout({ children }) {
  const { isSidebarCollapsed, setIsSidebarCollapsed } = useContext(GlobalContext);
  const { theme, setTheme } = useTheme();

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  console.log(isSidebarCollapsed);
  return (
    <div className={`flex  ${theme === "dark" ? 'bg-[#12131A]' : 'bg-[#f0f8ff]'}`}>
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar}
      />

      {/* Dashboard main content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
