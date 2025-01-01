"use client";

import { type InsertSidebarToggleContext } from "@/types/editor";
import { createContext } from "react";

const InsertSidebarToggleContext = createContext<InsertSidebarToggleContext>({
  isOpen: false,
  setIsOpen: () => {},
});

export default InsertSidebarToggleContext;
