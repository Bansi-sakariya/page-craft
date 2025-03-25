import { cn } from "@/lib/utils";
import { DivElProps } from "@/types/element";
import React, { useContext } from "react";
import Placeholders from "../../placeholders";
import { TbRectangle } from "react-icons/tb";
import { Element, useEditor, useNode } from "@craftjs/core";
import DivSettings from "./setting";
import DeviceContext from "@/context/device-context";
import { useEditorViewPort } from "@/provider/editor-viewport-provider";

export const DivPlaceholder = () => {
  const {
    connectors: { create },
  } = useEditor();
  const { device } = useContext(DeviceContext);
  const { editorViewport } = useEditorViewPort();
  
  let currentViewport: "laptop" | "tablet" | "mobile";
  if (editorViewport.selectedType === "mobile") {
    currentViewport = "mobile";
  } else if (editorViewport.selectedType === "tablet") {
    currentViewport = "tablet";
  } else {
    currentViewport = "laptop";
  }

  // Override based on actual device width
  if (device.width >= 1024) {
    currentViewport = "laptop";
  } else if (device.width >= 500 && device.width < 1024) {
    currentViewport = "tablet";
  } else {
    currentViewport = "mobile";
  }
  return (
    <Placeholders
      ref={(ref) => {
        create(ref as HTMLElement, <Element cssProperties={{ laptop: {}, tablet: {}, mobile: {} }} styles="p-3 border rounded-sm" is={Div} canvas ></Element>);
      }}
      icon={<TbRectangle className="text-3xl" />}
      text="Div"
      element={<></>}
    />
  );
};

const Div = ({ children, styles, cssProperties = {  laptop: {}, tablet: {}, mobile: {} }, ...props }: DivElProps &{ cssProperties: { laptop: React.CSSProperties, tablet: React.CSSProperties, mobile: React.CSSProperties } }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { device } = useContext(DeviceContext);
  const { editorViewport } = useEditorViewPort();
  
  let currentViewport: "laptop" | "tablet" | "mobile";
  if (editorViewport.selectedType === "mobile") {
    currentViewport = "mobile";
  } else if (editorViewport.selectedType === "tablet") {
    currentViewport = "tablet";
  } else {
    currentViewport = "laptop";
  }

  // Override based on actual device width
  if (device.width >= 1024) {
    currentViewport = "laptop";
  } else if (device.width >= 500 && device.width < 1024) {
    currentViewport = "tablet";
  } else {
    currentViewport = "mobile";
  }
  return (
    <div
    style={{ ...cssProperties , ...cssProperties[currentViewport] }}
      ref={(ref) => {
        connect(drag(ref as HTMLElement));
      }}
      className={cn(styles)}
    >
      {children}
    </div>
  );
};

export default Div;

Div.craft = {
  displayName: "Div",
  props: {
    styles: "p-3 border rounded-sm",
  },
  related: {
   toolbar: DivSettings,
  },
};
