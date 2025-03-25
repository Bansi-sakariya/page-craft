import { cn } from "@/lib/utils";
  import { DivElProps } from "@/types/element";
  import React, { useContext } from "react";
  import Placeholders from "../placeholders";
  import { MdOutlineDashboardCustomize } from "react-icons/md";
  import { Element, useEditor, useNode } from "@craftjs/core";
  import DeviceContext from "@/context/device-context";
  import { useEditorViewPort } from "@/provider/editor-viewport-provider";
  
  export const BbbbPlaceholder = () => {
    const {
      connectors: { create },
    } = useEditor();
    const { device } = useContext(DeviceContext);
    const { editorViewport } = useEditorViewPort();
    
    let currentViewport: "laptop" | "tablet" | "mobile" = editorViewport.selectedType || "laptop";
  
    if (device.width >= 1024) {
      currentViewport = "laptop";
    } else if (device.width >= 500) {
      currentViewport = "tablet";
    } else {
      currentViewport = "mobile";
    }
  
    return (
      <Placeholders
        ref={(ref) => {
          if (ref) {
            create(ref as HTMLElement, <Element cssProperties={{"7D4FwOlwuy":{"laptop":{},"tablet":{},"mobile":{}},"FeM-knpV8x":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"25px","fontWeight":"800","width":"100%"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"25px","fontWeight":"800","width":"100%"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"25px","fontWeight":"800","width":"100%"}}}} styles="p-3 border rounded-sm" is={bbbb} canvas />);
          }
        }}
        icon={<MdOutlineDashboardCustomize  className="text-3xl" />}
        text="bbbb"
        element={<></>}
      />
    );
  };
  
  type CustomCSSProperties = {
    [key: string]: {
      laptop: React.CSSProperties;
      tablet: React.CSSProperties;
      mobile: React.CSSProperties;
    };
  };
  
  const bbbb = ({ children, styles, cssProperties = {"7D4FwOlwuy":{"laptop":{},"tablet":{},"mobile":{}},"FeM-knpV8x":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"25px","fontWeight":"800","width":"100%"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"25px","fontWeight":"800","width":"100%"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"25px","fontWeight":"800","width":"100%"}}}, ...props }: 
     DivElProps & { cssProperties: CustomCSSProperties }) => {
    const {
      connectors: { connect, drag },
    } = useNode();
    const { device } = useContext(DeviceContext);
    const { editorViewport } = useEditorViewPort();
  
    let currentViewport: "laptop" | "tablet" | "mobile" = editorViewport.selectedType || "laptop";
  
    if (device.width >= 1024) {
      currentViewport = "laptop";
    } else if (device.width >= 500) {
      currentViewport = "tablet";
    } else {
      currentViewport = "mobile";
    }
  
    return (
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref as HTMLElement));
          }
        }}
        className={cn(styles)}
      >
        <div className="p-3 border rounded-sm"  id="7D4FwOlwuy" style={{ ...(cssProperties["7D4FwOlwuy"]?.[currentViewport] || {}) }}><h4 className="text-3xl font-bold"   id="FeM-knpV8x" style={{ ...(cssProperties["FeM-knpV8x"]?.[currentViewport] || {}) }}>Lorem Ipsum</h4></div>
      </div>
    );
  };
  
  export default bbbb;
  