import { cn } from "@/lib/utils";
import { HTagElProps } from "@/types/element";
import { useEditor, useNode } from "@craftjs/core";
import React, { useContext } from "react";
import { BsTypeH2 } from "react-icons/bs";
import Placeholders from "../../placeholders";
import HTwoSettings from "./setting";
import DeviceContext from "@/context/device-context";
import { useEditorViewPort } from "@/provider/editor-viewport-provider";

export const HTwoPlaceholder = () => {
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
          <H2 title="Lorem Ipsum" styles="text-5xl font-bold" 
          cssProperties={{
            laptop: {
              fontFamily: "var(--font-poppins)",
              fontSize: "35px",
              fontWeight: "800",
              width: "100%",
            },
            tablet: {
              fontFamily: "var(--font-poppins)",
              fontSize: "35px",
              fontWeight: "800",
              width: "100%",
            },
            mobile: {
              fontFamily: "var(--font-poppins)",
              fontSize: "35px",
              fontWeight: "800",
              width: "100%",
            },
          }}
          ></H2>
        );
      }}
      icon={<BsTypeH2 className="text-3xl" />}
      text="H-Two"
      element={<></>}
    />
  );
};

const H2 = ({  styles, cssProperties = {  laptop: {}, tablet: {}, mobile: {} }, ...props }: HTagElProps & { cssProperties: { laptop: React.CSSProperties, tablet: React.CSSProperties, mobile: React.CSSProperties } }) => {
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
    <h2
      className={cn(styles)}
      style={{ ...cssProperties , ...cssProperties[currentViewport] }} 
      ref={(ref) => {
        connect(drag(ref as HTMLElement));
      }}
    >
      {props.title}
    </h2>
  );
};

export default H2;

H2.craft = {
  displayName: "H-Two",
  props: {
    styles: "text-5xl font-bold",
  },
  related: {
    toolbar: HTwoSettings,
  },
};
