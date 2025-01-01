"use client";

import InsertSidebarToggleContext from "@/context/insert-sidebar-toggle-context";
import { useState } from "react";

type InsertSidebarProviderProps = {
  children: React.ReactNode;
};

const InsertSidebarProvider = ({ children }: InsertSidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <InsertSidebarToggleContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </InsertSidebarToggleContext.Provider>
  );
};

export default InsertSidebarProvider;
