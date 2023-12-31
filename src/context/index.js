"use client";

import { createContext, useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  if (loader) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <PropagateLoader
          color="#2E81ED"
          loading={loader}
          size={25}
          data-textid="Loader"
        />
      </div>
    );
  }

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <GlobalContext.Provider
      value={{ isSidebarCollapsed, setIsSidebarCollapsed, toggleSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
