"use client";

import DeviceContext from "@/context/device-context";
import { Device } from "@/types/editor";
import { useState } from "react";

const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
  const [device, setDevice] = useState<Device>({
    type: "Laptop Large",
    width: 1280,
    height: 800,
    zoom: 1,
  });

  const setDeviceWidth = (val: number) => {
    setDevice({
      ...device,
      width: val,
    });
  };

  const setDeviceHeight = (val: number) => {
    setDevice({
      ...device,
      height: val,
    });
  };

  const setDeviceScale = (val: number) => {
    setDevice({
      ...device,
      zoom: val,
    });
  };

  return (
    <DeviceContext.Provider
      value={{
        device,
        setDevice,
        setDeviceWidth,
        setDeviceHeight,
        setDeviceScale,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceProvider;
