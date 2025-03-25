import { cn } from "@/lib/utils";
import { HTagElProps } from "@/types/element";
import { useEditor, useNode } from "@craftjs/core";
import React, { useContext } from "react";
import Placeholders from "../../placeholders";
import { BsTypeH4 } from "react-icons/bs";
import HFourSettings from "./setting";
import DeviceContext from "@/context/device-context";
import { useEditorViewPort } from "@/provider/editor-viewport-provider";

export const HFourPlaceholder = () => {
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
  const {
    connectors: { create },
  } = useEditor();

  return (
    <Placeholders
      ref={(ref) => {
        create(
          ref as HTMLElement,
          <H4 title="Lorem Ipsum" styles="text-3xl font-bold" 
          cssProperties={{
            laptop: {
              fontFamily: "var(--font-poppins)",
              fontSize: "25px",
              fontWeight: "800",
              width: "100%",
            },
            tablet: {
              fontFamily: "var(--font-poppins)",
              fontSize: "25px",
              fontWeight: "800",
              width: "100%",
            },
            mobile: {
              fontFamily: "var(--font-poppins)",
              fontSize: "25px",
              fontWeight: "800",
              width: "100%",
            },
          }}
          ></H4>
        );
      }}
      icon={<BsTypeH4 className="text-3xl" />}
      text="H-Four"
      element={<></>}
    />
  );
};

const H4 = ({  styles, cssProperties = {  laptop: {}, tablet: {}, mobile: {} }, ...props }: HTagElProps & { cssProperties: { laptop: React.CSSProperties, tablet: React.CSSProperties, mobile: React.CSSProperties } }) => {
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
    <h4
      className={cn(styles)}
      style={{ ...cssProperties , ...cssProperties[currentViewport] }}
      ref={(ref) => {
        connect(drag(ref as HTMLElement));
      }}
    >
      {props.title}
    </h4>
  );
};

export default H4;

H4.craft = {
  displayName: "H-Four",
  props: {
    styles: "text-3xl font-bold",
  },
  related: {
    toolbar: HFourSettings,
  },
};
