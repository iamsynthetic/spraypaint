"use client";
import { createContext, useState, useContext } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("Chris");
  const [hovering, setHovering] = useState(false);
  const [mainNavHovering, setMainNavHovering] = useState(false);
  const [insection2, setinsection2] = useState(false);
  const [insection3, setinsection3] = useState(false);

  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        hovering,
        setHovering,
        mainNavHovering,
        setMainNavHovering,
        insection2,
        setinsection2,
        insection3,
        setinsection3,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
