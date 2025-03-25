import { cn } from "@/lib/utils";
import { HTagElProps } from "@/types/element";
import { useEditor, useNode } from "@craftjs/core";
import React, { useContext } from "react";
import Placeholders from "../../placeholders";
import { BsTypeH6 } from "react-icons/bs";
import HSixSettings from "./setting";
import DeviceContext from "@/context/device-context";
import { useEditorViewPort } from "@/provider/editor-viewport-provider";

export const HSixPlaceholder = () => {
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
        create(
          ref as HTMLElement,
          <H6 title="Lorem Ipsum" styles="text-xl font-bold"
          cssProperties={{
            laptop: {
              fontFamily: "var(--font-poppins)",
              fontSize: "15px",
              fontWeight: "800",
              width: "100%",
            },
            tablet: {
              fontFamily: "var(--font-poppins)",
              fontSize: "15px",
              fontWeight: "800",
              width: "100%",
            },
            mobile: {
              fontFamily: "var(--font-poppins)",
              fontSize: "15px",
              fontWeight: "800",
              width: "100%",
            },
          }}
          ></H6>
        );
      }}
      icon={<BsTypeH6 className="text-3xl" />}
      text="H-Six"
      element={<></>}
    />
  );
};

const H6 = ({  styles, cssProperties = {  laptop: {}, tablet: {}, mobile: {} }, ...props }: HTagElProps & { cssProperties: { laptop: React.CSSProperties, tablet: React.CSSProperties, mobile: React.CSSProperties } }) => {
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
    <h6
      className={cn(styles)}
      style={{ ...cssProperties , ...cssProperties[currentViewport] }}
      ref={(ref) => {
        connect(drag(ref as HTMLElement));
      }}
    >
      {props.title}
    </h6>
  );
};

export default H6;

H6.craft = {
  displayName: "H-Six",
  props: {
    styles: "text-xl font-bold",
  },
  related: {
    toolbar:HSixSettings,
  },
};
