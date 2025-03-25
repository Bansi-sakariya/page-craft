"use client";

import { type InsertLayerContext } from "@/types/editor";
import { createContext } from "react";

const InsertLayerContext = createContext<InsertLayerContext>({
  Openis: false,
  setOpenis: () => {},
});

export default InsertLayerContext;
