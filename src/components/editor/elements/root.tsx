"use client";

import DeviceContext from "@/context/device-context";
import { cn } from "@/lib/utils";
import { useNode } from "@craftjs/core";
import React, { useContext } from "react";

const Root = ({
  children,
  styles,
  cssProperties,
  ...props
}: {
  children?: React.ReactNode;
  cssProperties?: React.CSSProperties;
  styles: string;
}) => {
  const { device } = useContext(DeviceContext);

  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      {...props}
      style={{
        width: device.width + "px",
        height: device.height + "px",
        scale: device.zoom,
        ...cssProperties,
      }}
      ref={(ref) => {
        connect(drag(ref as HTMLElement));
      }}
      className={cn(
        "border relative z-40 bg-white rounded-md shadow-md overflow-y-scroll p-3",
        styles
      )}
    >
      {children}
    </div>
  );
};

export default Root;

Root.craft = {
  props: {},
  related: {},
};
