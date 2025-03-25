import { cn } from "@/lib/utils";
  import { DivElProps } from "@/types/element";
  import React, { useContext } from "react";
  import Placeholders from "../placeholders";
  import { TbRectangle } from "react-icons/tb";
  import { Element, useEditor, useNode } from "@craftjs/core";
  import DeviceContext from "@/context/device-context";
  import { useEditorViewPort } from "@/provider/editor-viewport-provider";
  
  export const SususPlaceholder = () => {
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
            create(ref as HTMLElement, <Element cssProperties={{"4XpwTgugTK":{"laptop":{},"tablet":{},"mobile":{}},"SLbrQM92Qf":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"16px","fontWeight":"800","width":"100%"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"16px","fontWeight":"800","width":"100%"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"16px","fontWeight":"800","width":"100%"}},"oZz1dnCiDH":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%"}}}} styles="p-3 border rounded-sm" is={susus} canvas />);
          }
        }}
        icon={<TbRectangle className="text-3xl" />}
        text="susus"
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
  
  const susus = ({ children, styles, cssProperties = {"4XpwTgugTK":{"laptop":{},"tablet":{},"mobile":{}},"SLbrQM92Qf":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"16px","fontWeight":"800","width":"100%"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"16px","fontWeight":"800","width":"100%"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"16px","fontWeight":"800","width":"100%"}},"oZz1dnCiDH":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%"}}}, ...props }: 
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
        <div className="p-3 border rounded-sm"  id="4XpwTgugTK" style={{ ...(cssProperties["4XpwTgugTK"]?.[currentViewport] || {}) }}><p className="text-base font-normal"   id="SLbrQM92Qf" style={{ ...(cssProperties["SLbrQM92Qf"]?.[currentViewport] || {}) }}>Sample paragraph text</p><h2 className="text-5xl font-bold"   id="oZz1dnCiDH" style={{ ...(cssProperties["oZz1dnCiDH"]?.[currentViewport] || {}) }}>Lorem Ipsum</h2></div>
      </div>
    );
  };
  
  export default susus;
  