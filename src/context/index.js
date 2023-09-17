"use client";

import { createContext, useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const isMobileDevice = window.innerWidth < 768;
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(isMobileDevice);
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

  return (
    <GlobalContext.Provider
      value={{ isSidebarCollapsed, setIsSidebarCollapsed }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
