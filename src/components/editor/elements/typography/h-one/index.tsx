import { cn } from "@/lib/utils";
import { HTagElProps } from "@/types/element";
import { useEditor, useNode } from "@craftjs/core";
import React, { useContext } from "react";
import Placeholders from "../../placeholders";
import { BsTypeH1 } from "react-icons/bs";
import HOneSettings from "./settings";
import DeviceContext from "@/context/device-context";
import { useEditorViewPort } from "@/provider/editor-viewport-provider";

export const HOnePlaceholder = () => {
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
          <H1
            title="Lorem Ipsum"
            styles=""
            cssProperties={{
              laptop: {
                fontFamily: "var(--font-poppins)",
                fontSize: "40px",
                fontWeight: "800",
                width: "100%",
              },
              tablet: {
                fontFamily: "var(--font-poppins)",
                fontSize: "40px",
                fontWeight: "800",
                width: "100%",
              },
              mobile: {
                fontFamily: "var(--font-poppins)",
                fontSize: "40px",
                fontWeight: "800",
                width: "100%",
              },
            }}
          ></H1>
        );
      }}
      icon={<BsTypeH1 className="text-3xl" />}
      text="H-One"
      element={<></>}
    />
  );
};

const H1 = ({ styles, cssProperties = {  laptop: {}, tablet: {}, mobile: {} }, ...props }: HTagElProps & { cssProperties: { laptop: React.CSSProperties, tablet: React.CSSProperties, mobile: React.CSSProperties } }) => {
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
    connectors: { connect, drag },
  } = useNode();

  return (
    <h1
      className={cn(styles)}
      style={{ ...cssProperties , ...cssProperties[currentViewport] }} // Corrected syntax
      ref={(ref) => {
        connect(drag(ref as HTMLElement));
      }}
    >
      {props.title}
    </h1>
  );
};

export default H1;


H1.craft = {
  displayName: "H-One",
  props: {
    styles: "text-6xl font-bold",
  },
  related: {
    toolbar: HOneSettings,
  },
};
