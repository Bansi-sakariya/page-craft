"use client";

import InsertLayerContext from "@/context/insert-layer-context";
import { useState } from "react";

type InsertLayerProviderProps = {
  children: React.ReactNode;
};

const InsertLayerProvider = ({ children }: InsertLayerProviderProps) => {
  const [Openis, setOpenis] = useState(false);
  return (
    <InsertLayerContext.Provider value={{ Openis, setOpenis }}>
      {children}
    </InsertLayerContext.Provider>
  );
}

export default InsertLayerProvider