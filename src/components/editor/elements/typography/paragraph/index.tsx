import { cn } from "@/lib/utils";
import { HTagElProps } from "@/types/element";
import { useEditor, useNode } from "@craftjs/core";
import React, { useContext } from "react";
import { BsTextParagraph } from "react-icons/bs";
import Placeholders from "../../placeholders";
import ParagraphSettings from "./setting"; // Update to the actual settings file for Paragraph
import DeviceContext from "@/context/device-context";
import { useEditorViewPort } from "@/provider/editor-viewport-provider";

export const ParagraphPlaceholder = () => {
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
          <Paragraph
            title="Sample paragraph text"
            styles="text-base font-normal"
            cssProperties={{
              laptop: {
                fontFamily: "var(--font-poppins)",
                fontSize: "16px",
                fontWeight: "800",
                width: "100%",
              },
              tablet: {
                fontFamily: "var(--font-poppins)",
                fontSize: "16px",
                fontWeight: "800",
                width: "100%",
              },
              mobile: {
                fontFamily: "var(--font-poppins)",
                fontSize: "16px",
                fontWeight: "800",
                width: "100%",
              },
            }}
          ></Paragraph>
        );
      }}
      icon={<BsTextParagraph className="text-2xl" />}
      text="Paragraph"
      element={<></>}
    />
  );
};

const Paragraph = ({  styles, cssProperties = {  laptop: {}, tablet: {}, mobile: {} }, ...props }: HTagElProps & { cssProperties: { laptop: React.CSSProperties, tablet: React.CSSProperties, mobile: React.CSSProperties } }) => {
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
    <p
      className={cn(styles)}
      style={{ ...cssProperties , ...cssProperties[currentViewport] }}
      ref={(ref) => {
        connect(drag(ref as HTMLElement));
      }}
    >
      {props.title}
    </p>
  );
};

export default Paragraph;

Paragraph.craft = {
  displayName: "Paragraph",
  props: {
    styles: "text-base font-normal",
  },
  related: {
    toolbar: ParagraphSettings, // Link to the settings file for Paragraph
  },
};
