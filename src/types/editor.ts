// Context

import { NodeTree } from "@craftjs/core";
import { ReactNode } from "react";

export type InsertSidebarToggleContext = {
  isOpen: boolean;
  setIsOpen: Function;
};
export type InsertLayerContext = {
  Openis: boolean;
  setOpenis: Function;
};


export type DeviceType =
  | "Desktop"
  | "Desktop Large"
  | "IPhone SE"
  | "IPhone XR"
  | "IPhone 12 Pro"
  | "IPhone 14 Pro Max"
  | "Pixel 7"
  | "Galaxy S8+"
  | "iPad Mini"
  | "iPad Air"
  | "iPad Pro"
  | "Surface Pro 7"
  | "Surface Duo"
  | "Galaxy Fold"
  | "Galaxy A51/71"
  | "Laptop Small"
  | "Laptop Large"
  | "HD"
  | "QHD"
  | "UHD (4k)";

export type Device = {
  type: DeviceType;
  width: number;
  height: number;
  zoom?: number;
};

export type PlaceholderProps = {
  icon: JSX.Element;
  text: string;
  element?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | (() => NodeTree | React.ReactElement);
};
