"use client";

import TooltipButton from "@/components/common/TooltipButton";
import SettingsSidePannel from "@/components/editor/board/tools/settings-side-panel";
import StyleBackground from "@/components/editor/board/tools/style-settings/style-background";
import StyleBordersCorners from "@/components/editor/board/tools/style-settings/style-borders-corners";
import StyleDisplay from "@/components/editor/board/tools/style-settings/style-display";
import StylePaddingMargin from "@/components/editor/board/tools/style-settings/style-padding-margin";
import StylePosition from "@/components/editor/board/tools/style-settings/style-position";
import StyleSelfLayout from "@/components/editor/board/tools/style-settings/style-self-layout";
import StyleSize from "@/components/editor/board/tools/style-settings/style-size";
import StyleText from "@/components/editor/board/tools/style-settings/style-text";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import DeviceContext from "@/context/device-context";
import { fontObj } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useEditorViewPort } from "@/provider/editor-viewport-provider";
import { useEditor, useNode } from "@craftjs/core";
import React, { useContext, useEffect, useState } from "react";
import { FaSliders } from "react-icons/fa6";
import { MdDescription, MdOutlineHelpOutline, MdStyle } from "react-icons/md";

const HOneSettings = () => {
  const [propertiesIsOpen, setPropertiesIsOpen] = useState(false);
  const [defaultStyleIsOpen, setDefaultStyleIsOpen] = useState(false);
  const [stylesIsOpen, setStyleIsOpen] = useState(false);

  const props = ["title", "cssProperties"];

  const { nodeProps, setProp, parent } = useNode((node) => ({
    nodeProps:
      props &&
      props.reduce((res: any, key: any) => {
        res[key] = node.data.props[key] || null;
        return res;
      }, {}),
    parent: node.data.parent,
  }));

  const { query } = useEditor();
  const parentProps = query.node(parent as string).get()?.data?.props;
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
    <>


      <SettingsSidePannel
        title="Properties"
        isOpen={propertiesIsOpen}
        sidebarContent={
          <>
            <div className="mb-2">
              <div className="flex items-start p-2">
                <div className="text-xs">
                  <Label className="text-sm">Text</Label>
                  <Textarea
                    className="h-8 bg-white"
                    value={nodeProps.title}
                    onChange={(e) => {
                      setProp((prop) => (prop.title = e.target.value), 500);
                    }}
                  ></Textarea>
                </div>
              </div>
            </div>
          </>
        }
      />

      <SettingsSidePannel
        title="Default Styles"
        isOpen={defaultStyleIsOpen}
        sidebarContent={
          <>
            <Accordion
              type="multiple"
              className="w-full"
              defaultValue={["item-1", "item-2", "item-3"]}
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
                  Size
                </AccordionTrigger>
                <AccordionContent className="p-2 text-xs">
                  <div className="p-5 py-2">
                    <div className="flex justify-between mb-4">
                      <p className=" text-gray-500">width</p>
                      <p className=" text-black">
                        {nodeProps?.cssProperties?.[currentViewport]?.width}
                      </p>
                    </div>
                    <div className="flex justify-between mb-4">
                      <p className=" text-gray-500">height</p>
                      <p className=" text-black text-start">
                        {nodeProps?.cssProperties?.[currentViewport]?.height}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
                  Text
                </AccordionTrigger>
                <AccordionContent className="p-2 text-xs">
                  <div className="p-5 py-2">
                    <div className="flex justify-between mb-4">
                      <p className=" text-gray-500">font-family</p>
                      <p className=" text-black">
                        {
                          fontObj[
                          nodeProps?.cssProperties?.[currentViewport]
                            ?.fontFamily as keyof typeof fontObj
                          ]
                        }
                      </p>
                    </div>
                    <div className="flex justify-between mb-4">
                      <p className=" text-gray-500">font-size</p>
                      <p className=" text-black text-start">
                        {nodeProps?.cssProperties?.[currentViewport]?.fontSize}
                      </p>
                    </div>
                    <div className="flex justify-between mb-4">
                      <p className=" text-gray-500">font-weight</p>
                      <p className=" text-black text-start">
                        {nodeProps?.cssProperties?.[currentViewport]?.fontWeight}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
                  Border & Corners
                </AccordionTrigger>
                <AccordionContent className="p-2">
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem> */}
            </Accordion>
          </>
        }
      />

      <div
        className={cn(
          " z-50 w-80 bg-slate-100 fixed h-[92vh] right-[57px] transition-all duration-200 ease-in-out",
          stylesIsOpen ? "translate-x-1" : "translate-x-[24rem]"
        )}
      >
        <h4 className="p-4 text-xm text-muted-foreground flex justify-between items-center">
          <span>Styles</span>
          <span>
            <MdOutlineHelpOutline className="text-lg" />
          </span>
        </h4>
        <Separator className="bg-slate-300" />
        <Tabs defaultValue="styles">
          <TabsList defaultValue={"styles"} className="w-[100%] p-3 py-0">
            <TabsTrigger
              value="styles"
              className="w-[50%] data-[state=active]:text-primary data-[state=active]:bg-transparent rounded-none border-b data-[state=active]:border-primary"
            >
              CSS
            </TabsTrigger>
            <TabsTrigger
              value="animation"
              className="w-[50%] data-[state=active]:text-primary data-[state=active]:bg-transparent rounded-none border-b data-[state=active]:border-primary"
            >
              Animation
            </TabsTrigger>
          </TabsList>
          <TabsContent value="styles">
            <ScrollArea className="h-[78vh] p-3">

              <StyleSettings
                parentProps={parentProps}
                nodeProps={{
                  ...nodeProps, // Ensure base styles exist, // Merge viewport-specific styles
                }}
                setProp={(key, val) =>
                  setProp((prop) => {
                    if (!prop.cssProperties) prop.cssProperties = {};
                    if (!prop.cssProperties[currentViewport]) prop.cssProperties[currentViewport] = {};
                    prop.cssProperties[currentViewport][key] = val;
                  }, 500)
                }
              />



            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>

      <div className=" bg-slate-100 fixed z-50 h-[92vh] right-0 border-l border-gray-300">
        <div className="p-2 flex flex-col">
          <TooltipButton
            side="left"
            className={cn(
              "px-2.5 h-9 mb-2",
              propertiesIsOpen
                ? ""
                : "bg-transparent hover:bg-slate-200 text-slate-600"
            )}
            btnContent={<FaSliders className="text-lg" />}
            text="Properties"
            onClick={() => {
              setDefaultStyleIsOpen(false);
              setStyleIsOpen(false);
              setPropertiesIsOpen(!propertiesIsOpen);
            }}
          />
          <TooltipButton
            side="left"
            className={cn(
              "px-2.5 h-9 mb-2",
              defaultStyleIsOpen
                ? ""
                : "bg-transparent hover:bg-slate-200 text-slate-600"
            )}
            btnContent={<MdDescription className="text-lg" />}
            text="Default Styles"
            onClick={() => {
              setPropertiesIsOpen(false);
              setStyleIsOpen(false);
              setDefaultStyleIsOpen(!defaultStyleIsOpen);
            }}
          />
          <TooltipButton
            side="left"
            className={cn(
              "px-2.5 h-9 mb-2",
              stylesIsOpen
                ? ""
                : "bg-transparent hover:bg-slate-200 text-slate-600"
            )}
            btnContent={<MdStyle className="text-lg" />}
            text="Styles"
            onClick={() => {
              setPropertiesIsOpen(false);
              setDefaultStyleIsOpen(false);
              setStyleIsOpen(!stylesIsOpen);
            }}
          />
        </div>
      </div>
    </>
  );
};




export default HOneSettings;



////////////////
/////////////////
/////////////
//////////////////////


export const StyleSettings = ({
  nodeProps,
  parentProps,
  setProp,
  disabledItems = [],
}: {
  parentProps: any;
  nodeProps: any;
  setProp: (key: string, val: string) => void;
  disabledItems?: string[] | undefined;
}) => {
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
  // console.log("CSS Properties abbbb:", nodeProps?.cssProperties);
  // console.log("Viewport-Specific CSS Properties: abbbb", nodeProps?.cssProperties?.[currentViewport]);
  return (
    <>
      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={[
          "size",
          "layout",
          "display",
          "self-layout",
          "position",
          "padding-margin",
          "text",
          "backgrounds",
          "border-corners",
        ]}
      >
        {!disabledItems.includes("size") && (
          <AccordionItem value="size" >
            <StyleSize
              widthProp={
                nodeProps?.cssProperties?.width
                  ? nodeProps?.cssProperties?.width
                  : ""
              }
              heightProp={
                nodeProps?.cssProperties?.height
                  ? nodeProps?.cssProperties?.height
                  : ""
              }
              minWidthProp={
                nodeProps?.cssProperties?.minWidth
                  ? nodeProps?.cssProperties?.minWidth
                  : ""
              }
              minHeightProp={
                nodeProps?.cssProperties?.minHeight
                  ? nodeProps?.cssProperties?.minHeight
                  : ""
              }
              maxWidthProp={
                nodeProps?.cssProperties?.maxWidth
                  ? nodeProps?.cssProperties?.maxWidth
                  : ""
              }
              maxHeightProp={
                nodeProps?.cssProperties?.maxHeight
                  ? nodeProps?.cssProperties?.maxHeight
                  : ""
              }
              setProp={(key: string, val: string) => setProp(key, val)}
            />
          </AccordionItem>
        )}
        {!disabledItems.includes("layout") && (
          <AccordionItem value="layout">
            <StyleText
              fontFamilyProp={
                nodeProps?.cssProperties?.[currentViewport]?.fontFamily
                  ? nodeProps?.cssProperties?.[currentViewport]?.fontFamily
                  : ""
              }
              fontSizeProp={
                nodeProps?.cssProperties?.[currentViewport]?.fontSize
                  ? nodeProps?.cssProperties?.[currentViewport]?.fontSize
                  : ""
              }
              fontWeightProp={
                nodeProps?.cssProperties?.[currentViewport]?.fontWeight
                  ? nodeProps?.cssProperties?.[currentViewport]?.fontWeight
                  : ""
              }
              fontStyleProp={
                nodeProps?.cssProperties?.[currentViewport]?.fontStyle
                  ? nodeProps?.cssProperties?.[currentViewport]?.fontStyle
                  : ""
              }
              colorProp={
                nodeProps?.cssProperties?.[currentViewport]?.color
                  ? nodeProps?.cssProperties?.[currentViewport].color
                  : ""
              }
              textAlignProp={
                nodeProps?.cssProperties?.[currentViewport]?.textAlign
                  ? nodeProps?.cssProperties?.[currentViewport]?.textAlign
                  : ""
              }
              textTransformProp={
                nodeProps?.cssProperties?.[currentViewport]?.textTransform
                  ? nodeProps?.cssProperties?.[currentViewport]?.textTransform
                  : ""
              }
              lineHeightProp={
                nodeProps?.cssProperties?.[currentViewport]?.lineHeight
                  ? nodeProps?.cssProperties?.[currentViewport]?.lineHeight
                  : ""
              }
              letterSpaceProp={
                nodeProps?.cssProperties?.[currentViewport]?.letterSpacing
                  ? nodeProps?.cssProperties?.[currentViewport]?.letterSpacing
                  : ""
              }
              textIndentProp={
                nodeProps?.cssProperties?.[currentViewport]?.textIndent
                  ? nodeProps?.cssProperties?.[currentViewport]?.textIndent
                  : ""
              }
              decorationLineProp={
                nodeProps?.cssProperties?.[currentViewport]?.textDecorationLine
                  ? nodeProps?.cssProperties?.[currentViewport]?.textDecorationLine
                  : ""
              }
              decorationColorProp={
                nodeProps?.cssProperties?.[currentViewport]?.textDecorationColor
                  ? nodeProps?.cssProperties?.[currentViewport]?.textDecorationColor
                  : ""
              }
              decorationStyleProp={
                nodeProps?.cssProperties?.[currentViewport]?.textDecorationStyle
                  ? nodeProps?.cssProperties?.[currentViewport]?.textDecorationStyle
                  : ""
              }
              setProp={(key: string, val: string) => setProp(key, val)}
              decorationThicknessProp={""}
            />
          </AccordionItem>
        )}
        {!disabledItems.includes("padding-margin") && (
          <AccordionItem value="padding-margin">
            <StylePaddingMargin
              paddingTopProp={
                nodeProps?.cssProperties?.[currentViewport]?.paddingTop
                  ? nodeProps?.cssProperties?.[currentViewport]?.paddingTop
                  : ""
              }
              paddingBottomProp={
                nodeProps?.cssProperties?.[currentViewport]?.paddingBottom
                  ? nodeProps?.cssProperties?.[currentViewport]?.paddingBottom
                  : ""
              }
              paddingLeftProp={
                nodeProps?.cssProperties?.[currentViewport]?.paddingLeft
                  ? nodeProps?.cssProperties?.[currentViewport]?.paddingLeft
                  : ""
              }
              paddingRightProp={
                nodeProps?.cssProperties?.[currentViewport]?.paddingRight
                  ? nodeProps?.cssProperties?.[currentViewport]?.paddingRight
                  : ""
              }
              marginTopProp={
                nodeProps?.cssProperties?.[currentViewport]?.marginTop
                  ? nodeProps?.cssProperties?.[currentViewport]?.marginTop
                  : ""
              }
              marginBottomProp={
                nodeProps?.cssProperties?.[currentViewport]?.marginBottom
                  ? nodeProps?.cssProperties?.[currentViewport]?.marginBottom
                  : ""
              }
              marginLeftProp={
                nodeProps?.cssProperties?.[currentViewport]?.marginLeft
                  ? nodeProps?.cssProperties?.[currentViewport]?.marginLeft
                  : ""
              }
              marginRightProp={
                nodeProps?.cssProperties?.[currentViewport]?.marginRight
                  ? nodeProps?.cssProperties?.[currentViewport]?.marginRight
                  : ""
              }
              setProp={(key: string, val: string) => setProp(key, val)}
            />
          </AccordionItem>
        )}
        {!disabledItems.includes("border-corners") && (
          <AccordionItem value="border-corners">
            <StyleBordersCorners
              borderTopWidthProp={
                nodeProps?.cssProperties?.[currentViewport]?.borderTopWidth
                  ? nodeProps?.cssProperties?.[currentViewport]?.borderTopWidth
                  : ""
              }
              borderTopColorProp={
                nodeProps?.cssProperties?.[currentViewport]?.borderTopColor
                  ? nodeProps?.cssProperties?.[currentViewport]?.borderTopColor
                  : ""
              }
              borderRightWidthProp={
                nodeProps?.cssProperties?.[currentViewport]?.borderBottomWidth
                  ? nodeProps?.cssProperties?.[currentViewport]?.borderBottomWidth
                  : ""
              }
              borderRightColorProp={
                nodeProps?.cssProperties?.[currentViewport]?.borderRightColor
                  ? nodeProps?.cssProperties?.[currentViewport]?.borderRightColor
                  : ""
              }
              borderBottomWidthProp={
                nodeProps?.cssProperties?.[currentViewport]?.borderBottomWidth
                  ? nodeProps?.cssProperties?.[currentViewport]?.borderBottomWidth
                  : ""
              }
              borderBottomColorProp={
                nodeProps?.cssProperties?.[currentViewport]?.borderBottomColor
                  ? nodeProps?.cssProperties?.[currentViewport]?.borderBottomColor
                  : ""
              }
              borderLeftWidthProp={
                nodeProps?.cssProperties?.[currentViewport]?.borderLeftWidth
                  ? nodeProps?.cssProperties?.[currentViewport]?.borderLeftWidth
                  : ""
              }
              borderLeftColorProp={
                nodeProps?.cssProperties?.[currentViewport]?.borderLeftColor
                  ? nodeProps?.cssProperties?.[currentViewport]?.borderLeftColor
                  : ""
              }
              borderTopLeftProp={
                nodeProps?.cssProperties?.[currentViewport]?.borderTopLeftRadius
                  ? nodeProps?.cssProperties?.[currentViewport]?.borderTopLeftRadius
                  : ""
              }
              borderTopRightProp={
                nodeProps?.cssProperties?.[currentViewport]?.borderTopRightRadius
                  ? nodeProps?.cssProperties?.[currentViewport]?.borderTopRightRadius
                  : ""
              }
              borderBottomRightProp={
                nodeProps?.cssProperties?.[currentViewport]?.borderBottomRightRadius
                  ? nodeProps?.cssProperties?.[currentViewport]?.borderBottomRightRadius
                  : ""
              }
              borderBottomLeftProp={
                nodeProps?.cssProperties?.[currentViewport]?.borderBottomLeftRadius
                  ? nodeProps?.cssProperties?.[currentViewport]?.borderBottomLeftRadius
                  : ""
              }
              setProp={(key: string, val: string) => setProp(key, val)}
            />
          </AccordionItem>
        )}
        {!disabledItems.includes("display") && (

          <AccordionItem value="display">
            <StyleDisplay
              displayProp={
                nodeProps?.cssProperties?.[currentViewport]?.display
                  ? nodeProps?.cssProperties?.[currentViewport]?.display
                  : ""
              }
              alignPlaceContentProp={
                nodeProps?.cssProperties?.[currentViewport]?.alignContent
                  ? nodeProps?.cssProperties?.[currentViewport]?.alignContent
                  : ""
              }
              justifyPlaceContentProp={
                nodeProps?.cssProperties?.[currentViewport]?.justifyContent
                  ? nodeProps?.cssProperties?.[currentViewport]?.justifyContent
                  : ""
              }
              alignPlaceItemsProp={
                nodeProps?.cssProperties?.[currentViewport]?.alignItems
                  ? nodeProps?.cssProperties?.[currentViewport]?.alignItems
                  : ""
              }
              justifyPlaceItemsProp={
                nodeProps?.cssProperties?.[currentViewport]?.justifyItems
                  ? nodeProps?.cssProperties?.[currentViewport]?.justifyItems
                  : ""
              }
              overflowProp={
                nodeProps?.cssProperties?.[currentViewport]?.overflow
                  ? nodeProps?.cssProperties?.[currentViewport]?.overflow
                  : ""
              }
              grid={{
                rowProp: nodeProps?.cssProperties?.[currentViewport]?.gridRow
                  ? nodeProps?.cssProperties?.[currentViewport]?.gridRow
                  : "",
                columnProp: nodeProps?.cssProperties?.[currentViewport]?.gridColumn
                  ? nodeProps?.cssProperties?.[currentViewport]?.gridColumn
                  : "",
                rowGapProp: nodeProps?.cssProperties?.rowGap
                  ? nodeProps?.cssProperties?.[currentViewport]?.rowGap
                  : "",
                columnGapProp: nodeProps?.cssProperties?.columnGap
                  ? nodeProps?.cssProperties?.[currentViewport]?.columnGap
                  : "",
                autoFlowProp: nodeProps?.cssProperties?.gridAutoFlow
                  ? nodeProps?.cssProperties?.[currentViewport]?.gridAutoFlow
                  : "",
              }}
              gridChild={{
                rowStartProp: nodeProps?.cssProperties?.[currentViewport]?.gridRowStart
                  ? nodeProps?.cssProperties?.[currentViewport]?.gridRowStart
                  : "",
                columnStartProp: nodeProps?.cssProperties?.[currentViewport]?.gridColumnStart
                  ? nodeProps?.cssProperties?.[currentViewport]?.gridColumnStart
                  : "",
                rowEndProp: nodeProps?.cssProperties?.[currentViewport]?.gridRowEnd
                  ? nodeProps?.cssProperties?.[currentViewport]?.gridRowEnd
                  : "",
                columnEndProp: nodeProps?.cssProperties?.[currentViewport]?.gridColumnEnd
                  ? nodeProps?.cssProperties?.[currentViewport]?.gridColumnEnd
                  : "",
                alignSelfProp: nodeProps?.cssProperties?.[currentViewport]?.alignSelf
                  ? nodeProps?.cssProperties?.[currentViewport]?.alignSelf
                  : "",
                justifySelfProp: nodeProps?.cssProperties?.[currentViewport]?.justifySelf
                  ? nodeProps?.cssProperties?.[currentViewport]?.justifySelf
                  : "",
                orderProp: nodeProps?.cssProperties?.[currentViewport]?.order
                  ? nodeProps?.cssProperties?.[currentViewport]?.order
                  : "",
              }}
              flex={{
                flexDirectionProp: nodeProps?.cssProperties?.[currentViewport]?.flexDirection
                  ? nodeProps?.cssProperties?.[currentViewport]?.flexDirection
                  : "",
                flexWrapProp: nodeProps?.cssProperties?.[currentViewport]?.flexWrap
                  ? nodeProps?.cssProperties?.[currentViewport]?.flexWrap
                  : "",
              }}
              flexChild={{
                flexGrowProp: nodeProps?.cssProperties?.[currentViewport]?.flexGrow
                  ? nodeProps?.cssProperties?.[currentViewport]?.flexGrow
                  : "",
                flexShrinkProp: nodeProps?.cssProperties?.[currentViewport]?.flexShrink
                  ? nodeProps?.cssProperties?.[currentViewport]?.flexShrink
                  : "",
                basisProp: nodeProps?.cssProperties?.[currentViewport]?.flexBasis
                  ? nodeProps?.cssProperties?.[currentViewport]?.flexBasis
                  : "",
                alignSelfProp: nodeProps?.cssProperties?.[currentViewport]?.alignSelf
                  ? nodeProps?.cssProperties?.[currentViewport]?.alignSelf
                  : "",
                orderProp: nodeProps?.cssProperties?.[currentViewport]?.order
                  ? nodeProps?.cssProperties?.[currentViewport]?.order
                  : "",
              }}
              setProp={(key: string, val: string) => setProp(key, val)}
            />
          </AccordionItem>
        )}
        {!disabledItems.includes("self-layout") && (

          <AccordionItem value="self-layout">
            <StyleSelfLayout
              parentdisplay={parentProps?.cssProperties?.[currentViewport]?.display}
              display={nodeProps?.cssProperties?.[currentViewport]?.display}
              flexGrowProp={
                nodeProps?.cssProperties?.[currentViewport]?.flexGrow
                  ? nodeProps?.cssProperties?.[currentViewport]?.flexGrow
                  : ""
              }
              flexShrinkProp={
                nodeProps?.cssProperties?.[currentViewport]?.flexShrink
                  ? nodeProps?.cssProperties?.[currentViewport]?.flexShrink
                  : ""
              }
              flexBasisProp={
                nodeProps?.cssProperties?.[currentViewport]?.flexBasis
                  ? nodeProps?.cssProperties?.[currentViewport]?.flexBasis
                  : ""
              }
              alignSelfProp={
                nodeProps?.cssProperties?.[currentViewport]?.alignSelf
                  ? nodeProps?.cssProperties?.[currentViewport]?.alignSelf
                  : ""
              }
              orderProp={
                nodeProps?.cssProperties?.[currentViewport]?.order
                  ? nodeProps?.cssProperties?.[currentViewport]?.order
                  : ""
              }
              gridRowStartProp={
                nodeProps?.cssProperties?.[currentViewport]?.gridRowStart
                  ? nodeProps?.cssProperties?.[currentViewport]?.gridRowStart
                  : ""
              }
              gridRowEndProp={
                nodeProps?.cssProperties?.[currentViewport]?.gridRowEnd
                  ? nodeProps?.cssProperties?.[currentViewport]?.gridRowEnd
                  : ""
              }
              gridColumnStartProp={
                nodeProps?.cssProperties?.[currentViewport]?.gridColumnStart
                  ? nodeProps?.cssProperties?.[currentViewport]?.gridColumnStart
                  : ""
              }
              gridColumnEndProp={
                nodeProps?.cssProperties?.[currentViewport]?.gridColumnEnd
                  ? nodeProps?.cssProperties?.[currentViewport]?.gridColumnEnd
                  : ""
              }
              justifySelfProp={
                nodeProps?.cssProperties?.[currentViewport]?.justifySelf
                  ? nodeProps?.cssProperties?.[currentViewport]?.justifySelf
                  : ""
              }
              setProp={(key: string, val: string) => setProp(key, val)}
            />
          </AccordionItem>
        )}
        {!disabledItems.includes("backgrounds") && (

          <AccordionItem value="backgrounds">

            <StyleBackground
              backgroundImageProp={
                nodeProps?.cssProperties?.[currentViewport]?.backgroundImage
                  ? nodeProps?.cssProperties?.[currentViewport]?.backgroundImage
                  : ""
              }
              backgroundColorProp={
                nodeProps?.cssProperties?.[currentViewport]?.backgroundColor
                  ? nodeProps?.cssProperties?.[currentViewport]?.backgroundColor
                  : ""
              }
              backgroundPositionProp={
                nodeProps?.cssProperties?.[currentViewport]?.backgroundPosition
                  ? nodeProps?.cssProperties?.[currentViewport]?.backgroundPosition
                  : ""
              }
              backgroundRepeatProp={
                nodeProps?.cssProperties?.[currentViewport]?.backgroundRepeat
                  ? nodeProps?.cssProperties?.[currentViewport]?.backgroundRepeat
                  : ""
              }
              backgroundSizeProp={
                nodeProps?.cssProperties?.[currentViewport]?.backgroundSize
                  ? nodeProps?.cssProperties?.[currentViewport]?.backgroundSize
                  : ""
              }
              backgroundClipProp={
                nodeProps?.cssProperties?.[currentViewport]?.backgroundClip
                  ? nodeProps?.cssProperties?.[currentViewport]?.backgroundClip
                  : ""
              }
              backgroundGradientProp={
                nodeProps?.cssProperties?.[currentViewport]?.background
                  ? nodeProps?.cssProperties?.[currentViewport]?.background
                  : ""
              }
              setProp={(key: string, val: string) => setProp(key, val)}
            />
          </AccordionItem>
        )}
        {!disabledItems.includes("position") && (
          <AccordionItem value="position">
            <StylePosition
              positionProp={
                nodeProps?.cssProperties?.[currentViewport]?.position
                  ? nodeProps?.cssProperties?.[currentViewport]?.position
                  : ""
              }
              topProp={
                nodeProps?.cssProperties?.[currentViewport]?.top ? nodeProps?.cssProperties?.[currentViewport]?.top : ""
              }
              bottomProp={
                nodeProps?.cssProperties?.[currentViewport]?.bottom
                  ? nodeProps?.cssProperties?.[currentViewport]?.bottom
                  : ""
              }
              leftProp={
                nodeProps?.cssProperties?.[currentViewport]?.left ? nodeProps?.cssProperties?.[currentViewport]?.left : ""
              }
              rightProp={
                nodeProps?.cssProperties?.[currentViewport]?.right
                  ? nodeProps?.cssProperties?.[currentViewport]?.right
                  : ""
              }
              zIndexProp={
                nodeProps?.cssProperties?.[currentViewport]?.zIndex
                  ? nodeProps?.cssProperties?.[currentViewport]?.zIndex
                  : ""
              }
              setProp={(key: string, val: string) => setProp(key, val)}
            />
          </AccordionItem>
        )}

      </Accordion>
    </>
  );
};
