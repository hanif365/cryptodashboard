"use client";

import React, { useContext } from "react";
import { GlobalContext } from "@/context";
import Sidebar from "@/components/DashboardComponent/Sidebar/Sidebar";
import { useTheme } from "next-themes";

export default function DashboardLayout({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`flex  ${theme === "dark" ? "bg-[#12131A]" : "bg-[#f0f8ff]"}`}
    >
      <Sidebar />

      {/* Dashboard main content */}
      <main className="flex-1">
        {children}
        <p className="text-center py-3">&copy; 2023 All Rights Reserved. Build By <a href="https://hanif.netlify.app/" target="_blank" className="text-orange-600 font-bold">M.A.Hanif</a></p>
      </main>
    </div>
  );
}
