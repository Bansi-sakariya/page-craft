import { cn } from "@/lib/utils";
  import { DivElProps } from "@/types/element";
  import React, { useContext } from "react";
  import Placeholders from "../placeholders";
  import { TbRectangle } from "react-icons/tb";
  import { Element, useEditor, useNode } from "@craftjs/core";
  import DeviceContext from "@/context/device-context";
  import { useEditorViewPort } from "@/provider/editor-viewport-provider";
  
  export const BurhanPlaceholder = () => {
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
            create(ref as HTMLElement, <Element cssProperties={{"FFzfESSNJF":{"laptop":{},"tablet":{},"mobile":{}},"sGchfNL8i_":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"40px","fontWeight":"800","width":"100%","color":"#e3e86a"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"40px","fontWeight":"800","width":"100%","color":"#e86aba"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"40px","fontWeight":"800","width":"100%","color":"#6a88e8"}}}} styles="p-3 border rounded-sm" is={burhan} canvas />);
          }
        }}
        icon={<TbRectangle className="text-3xl" />}
        text="burhan"
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
  
  const burhan = ({ children, styles, cssProperties = {"FFzfESSNJF":{"laptop":{},"tablet":{},"mobile":{}},"sGchfNL8i_":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"40px","fontWeight":"800","width":"100%","color":"#e3e86a"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"40px","fontWeight":"800","width":"100%","color":"#e86aba"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"40px","fontWeight":"800","width":"100%","color":"#6a88e8"}}}, ...props }: 
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
        <div className="p-3 border rounded-sm"  id="FFzfESSNJF" style={{ ...(cssProperties["FFzfESSNJF"]?.[currentViewport] || {}) }}><h1 className=""   id="sGchfNL8i_" style={{ ...(cssProperties["sGchfNL8i_"]?.[currentViewport] || {}) }}>burhan</h1></div>
      </div>
    );
  };
  
  export default burhan;
  