import { cn } from "@/lib/utils";
      import { DivElProps } from "@/types/element";
      import React, { useContext } from "react";
      import Placeholders from "../placeholders";
      import { MdOutlineDashboardCustomize } from "react-icons/md";
      import { Element, useEditor, useNode } from "@craftjs/core";
      import DeviceContext from "@/context/device-context";
      import { useEditorViewPort } from "@/provider/editor-viewport-provider";
      
      export const ParthPlaceholder = () => {
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
                create(ref as HTMLElement, <Element cssProperties={{"7iZ3-KWsib":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%","color":"#cf1717"}}}} styles="p-3 border rounded-sm" is={parth} canvas />);
              }
            }}
            icon={<MdOutlineDashboardCustomize  className="text-3xl" />}
            text="parth"
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
      
      const parth = ({ children, styles, cssProperties = {"7iZ3-KWsib":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%","color":"#cf1717"}}}, ...props }: 
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
            <h2 className="text-5xl font-bold"   id="7iZ3-KWsib" style={{ ...(cssProperties["7iZ3-KWsib"]?.[currentViewport] || {}) }}>Lorem Ipsum</h2>
          </div>
        );
      };
      
      export default parth;
      