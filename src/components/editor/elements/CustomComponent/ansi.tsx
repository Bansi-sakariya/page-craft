import { cn } from "@/lib/utils";
      import { DivElProps } from "@/types/element";
      import React, { useContext } from "react";
      import Placeholders from "../placeholders";
      import { MdOutlineDashboardCustomize } from "react-icons/md";
      import { Element, useEditor, useNode } from "@craftjs/core";
      import DeviceContext from "@/context/device-context";
      import { useEditorViewPort } from "@/provider/editor-viewport-provider";
      
      export const AnsiPlaceholder = () => {
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
                create(ref as HTMLElement, <Element cssProperties={{"mk7ImDOpmj":{"laptop":{},"tablet":{},"mobile":{}},"ndZibpMp9e":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%","color":"#e62d2d"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%","color":"#19cd98"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%","color":"#6d19cd"}},"25MYU1nnv0":{"laptop":{},"tablet":{},"mobile":{}},"xJ-Gd4kTOH":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"16px","fontWeight":"800","width":"100%","color":"#fcd07d"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"16px","fontWeight":"800","width":"100%","color":"#7dfcd4"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"16px","fontWeight":"800","width":"100%","color":"#b97dfc"}}}} styles="p-3 border rounded-sm" is={ansi} canvas />);
              }
            }}
            icon={<MdOutlineDashboardCustomize  className="text-3xl" />}
            text="ansi"
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
      
      const ansi = ({ children, styles, cssProperties = {"mk7ImDOpmj":{"laptop":{},"tablet":{},"mobile":{}},"ndZibpMp9e":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%","color":"#e62d2d"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%","color":"#19cd98"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"35px","fontWeight":"800","width":"100%","color":"#6d19cd"}},"25MYU1nnv0":{"laptop":{},"tablet":{},"mobile":{}},"xJ-Gd4kTOH":{"laptop":{"fontFamily":"var(--font-poppins)","fontSize":"16px","fontWeight":"800","width":"100%","color":"#fcd07d"},"tablet":{"fontFamily":"var(--font-poppins)","fontSize":"16px","fontWeight":"800","width":"100%","color":"#7dfcd4"},"mobile":{"fontFamily":"var(--font-poppins)","fontSize":"16px","fontWeight":"800","width":"100%","color":"#b97dfc"}}}, ...props }: 
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
            <div className="p-3 border rounded-sm"  id="mk7ImDOpmj" style={{ ...(cssProperties["mk7ImDOpmj"]?.[currentViewport] || {}) }}><h2 className="text-5xl font-bold"   id="ndZibpMp9e" style={{ ...(cssProperties["ndZibpMp9e"]?.[currentViewport] || {}) }}>Bansiii</h2><div className="p-3 border rounded-sm"  id="25MYU1nnv0" style={{ ...(cssProperties["25MYU1nnv0"]?.[currentViewport] || {}) }}><p className="text-base font-normal"   id="xJ-Gd4kTOH" style={{ ...(cssProperties["xJ-Gd4kTOH"]?.[currentViewport] || {}) }}>Sakariya</p></div></div>
          </div>
        );
      };
      
      export default ansi;
      