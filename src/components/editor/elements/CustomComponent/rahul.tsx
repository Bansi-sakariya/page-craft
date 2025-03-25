import { cn } from "@/lib/utils";
      import { DivElProps } from "@/types/element";
      import React, { useContext } from "react";
      import Placeholders from "../placeholders";
      import { MdOutlineDashboardCustomize } from "react-icons/md";
      import { Element, useEditor, useNode } from "@craftjs/core";
      import DeviceContext from "@/context/device-context";
      import { useEditorViewPort } from "@/provider/editor-viewport-provider";
      
      export const RahulPlaceholder = () => {
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
                create(ref as HTMLElement, <Element cssProperties={{"pa1uwyQrIf":{"laptop":{},"tablet":{},"mobile":{}},"LSUHT4r9AS":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%","backgroundColor":"#780898","color":"#e01616"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%","backgroundColor":"#06757d"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"15px","fontWeight":"800","width":"100%","backgroundColor":"#157d06"}}}} styles="p-3 border rounded-sm" is={rahul} canvas />);
              }
            }}
            icon={<MdOutlineDashboardCustomize  className="text-3xl" />}
            text="rahul"
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
      
      const rahul = ({ children, styles, cssProperties = {"pa1uwyQrIf":{"laptop":{},"tablet":{},"mobile":{}},"LSUHT4r9AS":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%","backgroundColor":"#780898","color":"#e01616"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%","backgroundColor":"#06757d"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"15px","fontWeight":"800","width":"100%","backgroundColor":"#157d06"}}}, ...props }: 
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
            <div className="p-3 border rounded-sm"  id="pa1uwyQrIf" style={{ ...(cssProperties["pa1uwyQrIf"]?.[currentViewport] || {}) }}><h2 className="text-5xl font-bold"   id="LSUHT4r9AS" style={{ ...(cssProperties["LSUHT4r9AS"]?.[currentViewport] || {}) }}>babnsjuunnnnnnnnnnnnnnnnn</h2></div>
          </div>
        );
      };
      
      export default rahul;
      