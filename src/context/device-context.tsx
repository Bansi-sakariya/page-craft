"use client";
import { Device } from "@/types/editor";
import { createContext } from "react";

const DeviceContext = createContext<{
  device: Device;
  setDevice: Function;
  setDeviceWidth: Function;
  setDeviceHeight: Function;
  setDeviceScale: Function;
}>({
  device: {
    type: "Laptop Large",
    width: 1280,
    height: 800,
    zoom: 1,
  },
  setDevice: () => {},
  setDeviceWidth: () => {},
  setDeviceHeight: () => {},
  setDeviceScale: () => {},
});

export default DeviceContext;
