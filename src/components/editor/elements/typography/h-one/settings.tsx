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
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { fontObj } from "@/lib/font";
import { cn } from "@/lib/utils";
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
                        {nodeProps?.cssProperties?.width}
                      </p>
                    </div>
                    <div className="flex justify-between mb-4">
                      <p className=" text-gray-500">height</p>
                      <p className=" text-black text-start">
                        {nodeProps?.cssProperties?.height}
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
                        {fontObj[nodeProps?.cssProperties?.fontFamily]}
                      </p>
                    </div>
                    <div className="flex justify-between mb-4">
                      <p className=" text-gray-500">font-size</p>
                      <p className=" text-black text-start">
                        {nodeProps?.cssProperties?.fontSize}
                      </p>
                    </div>
                    <div className="flex justify-between mb-4">
                      <p className=" text-gray-500">font-weight</p>
                      <p className=" text-black text-start">
                        {nodeProps?.cssProperties?.fontWeight}
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
                nodeProps={nodeProps}
                setProp={(key, val) =>
                  setProp((prop) => (prop.cssProperties[key] = val), 500)
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

export const StyleSettings = ({
  nodeProps,
  parentProps,
  setProp,
}: {
  parentProps: any;
  nodeProps: any;
  setProp: (key: string, val: string) => void;
}) => {
  console.log("Node Props Properties: ", nodeProps?.cssProperties);

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
        <StyleText
          fontFamilyProp={
            nodeProps?.cssProperties?.fontFamily
              ? nodeProps?.cssProperties?.fontFamily
              : ""
          }
          fontSizeProp={
            nodeProps?.cssProperties?.fontSize
              ? nodeProps?.cssProperties?.fontSize
              : ""
          }
          fontWeightProp={
            nodeProps?.cssProperties?.fontWeight
              ? nodeProps?.cssProperties?.fontWeight
              : ""
          }
          fontStyleProp={
            nodeProps?.cssProperties?.fontStyle
              ? nodeProps?.cssProperties?.fontStyle
              : ""
          }
          colorProp={
            nodeProps?.cssProperties?.color
              ? nodeProps?.cssProperties?.color
              : ""
          }
          textAlignProp={
            nodeProps?.cssProperties?.textAlign
              ? nodeProps?.cssProperties?.textAlign
              : ""
          }
          textTransformProp={
            nodeProps?.cssProperties?.textTransform
              ? nodeProps?.cssProperties?.textTransform
              : ""
          }
          lineHeightProp={
            nodeProps?.cssProperties?.lineHeight
              ? nodeProps?.cssProperties?.lineHeight
              : ""
          }
          letterSpaceProp={
            nodeProps?.cssProperties?.letterSpacing
              ? nodeProps?.cssProperties?.letterSpacing
              : ""
          }
          textIndentProp={
            nodeProps?.cssProperties?.textIndent
              ? nodeProps?.cssProperties?.textIndent
              : ""
          }
          decorationLineProp={
            nodeProps?.cssProperties?.textDecorationLine
              ? nodeProps?.cssProperties?.textDecorationLine
              : ""
          }
          decorationColorProp={
            nodeProps?.cssProperties?.textDecorationColor
              ? nodeProps?.cssProperties?.textDecorationColor
              : ""
          }
          decorationStyleProp={
            nodeProps?.cssProperties?.textDecorationStyle
              ? nodeProps?.cssProperties?.textDecorationStyle
              : ""
          }
          setProp={(key: string, val: string) => setProp(key, val)}
        />

        <StylePaddingMargin
          paddingTopProp={
            nodeProps?.cssProperties?.paddingTop
              ? nodeProps?.cssProperties?.paddingTop
              : ""
          }
          paddingBottomProp={
            nodeProps?.cssProperties?.paddingBottom
              ? nodeProps?.cssProperties?.paddingBottom
              : ""
          }
          paddingLeftProp={
            nodeProps?.cssProperties?.paddingLeft
              ? nodeProps?.cssProperties?.paddingLeft
              : ""
          }
          paddingRightProp={
            nodeProps?.cssProperties?.paddingRight
              ? nodeProps?.cssProperties?.paddingRight
              : ""
          }
          marginTopProp={
            nodeProps?.cssProperties?.marginTop
              ? nodeProps?.cssProperties?.marginTop
              : ""
          }
          marginBottomProp={
            nodeProps?.cssProperties?.marginBottom
              ? nodeProps?.cssProperties?.marginBottom
              : ""
          }
          marginLeftProp={
            nodeProps?.cssProperties?.marginLeft
              ? nodeProps?.cssProperties?.marginLeft
              : ""
          }
          marginRightProp={
            nodeProps?.cssProperties?.marginRight
              ? nodeProps?.cssProperties?.marginRight
              : ""
          }
          setProp={(key: string, val: string) => setProp(key, val)}
        />

        <StyleBordersCorners
          borderTopWidthProp={
            nodeProps?.cssProperties?.borderTopWidth
              ? nodeProps?.cssProperties?.borderTopWidth
              : ""
          }
          borderTopColorProp={
            nodeProps?.cssProperties?.borderTopColor
              ? nodeProps?.cssProperties?.borderTopColor
              : ""
          }
          borderRightWidthProp={
            nodeProps?.cssProperties?.borderBottomWidth
              ? nodeProps?.cssProperties?.borderBottomWidth
              : ""
          }
          borderRightColorProp={
            nodeProps?.cssProperties?.borderRightColor
              ? nodeProps?.cssProperties?.borderRightColor
              : ""
          }
          borderBottomWidthProp={
            nodeProps?.cssProperties?.borderBottomWidth
              ? nodeProps?.cssProperties?.borderBottomWidth
              : ""
          }
          borderBottomColorProp={
            nodeProps?.cssProperties?.borderBottomColor
              ? nodeProps?.cssProperties?.borderBottomColor
              : ""
          }
          borderLeftWidthProp={
            nodeProps?.cssProperties?.borderLeftWidth
              ? nodeProps?.cssProperties?.borderLeftWidth
              : ""
          }
          borderLeftColorProp={
            nodeProps?.cssProperties?.borderLeftColor
              ? nodeProps?.cssProperties?.borderLeftColor
              : ""
          }
          borderTopLeftProp={
            nodeProps?.cssProperties?.borderTopLeftRadius
              ? nodeProps?.cssProperties?.borderTopLeftRadius
              : ""
          }
          borderTopRightProp={
            nodeProps?.cssProperties?.borderTopRightRadius
              ? nodeProps?.cssProperties?.borderTopRightRadius
              : ""
          }
          borderBottomRightProp={
            nodeProps?.cssProperties?.borderBottomRightRadius
              ? nodeProps?.cssProperties?.borderBottomRightRadius
              : ""
          }
          borderBottomLeftProp={
            nodeProps?.cssProperties?.borderBottomLeftRadius
              ? nodeProps?.cssProperties?.borderBottomLeftRadius
              : ""
          }
          setProp={(key: string, val: string) => setProp(key, val)}
        />

        <StyleDisplay
          displayProp={
            nodeProps?.cssProperties?.display
              ? nodeProps?.cssProperties?.display
              : ""
          }
          alignPlaceContentProp={
            nodeProps?.cssProperties?.alignContent
              ? nodeProps?.cssProperties?.alignContent
              : ""
          }
          justifyPlaceContentProp={
            nodeProps?.cssProperties?.justifyContent
              ? nodeProps?.cssProperties?.justifyContent
              : ""
          }
          alignPlaceItemsProp={
            nodeProps?.cssProperties?.alignItems
              ? nodeProps?.cssProperties?.alignItems
              : ""
          }
          justifyPlaceItemsProp={
            nodeProps?.cssProperties?.justifyItems
              ? nodeProps?.cssProperties?.justifyItems
              : ""
          }
          overflowProp={
            nodeProps?.cssProperties?.overflow
              ? nodeProps?.cssProperties?.overflow
              : ""
          }
          grid={{
            rowProp: nodeProps?.cssProperties?.gridRow
              ? nodeProps?.cssProperties?.gridRow
              : "",
            columnProp: nodeProps?.cssProperties?.gridColumn
              ? nodeProps?.cssProperties?.gridColumn
              : "",
            rowGapProp: nodeProps?.cssProperties?.rowGap
              ? nodeProps?.cssProperties?.rowGap
              : "",
            columnGapProp: nodeProps?.cssProperties?.columnGap
              ? nodeProps?.cssProperties?.columnGap
              : "",
            autoFlowProp: nodeProps?.cssProperties?.gridAutoFlow
              ? nodeProps?.cssProperties?.gridAutoFlow
              : "",
          }}
          gridChild={{
            rowStartProp: nodeProps?.cssProperties?.gridRowStart
              ? nodeProps?.cssProperties?.gridRowStart
              : "",
            columnStartProp: nodeProps?.cssProperties?.gridColumnStart
              ? nodeProps?.cssProperties?.gridColumnStart
              : "",
            rowEndProp: nodeProps?.cssProperties?.gridRowEnd
              ? nodeProps?.cssProperties?.gridRowEnd
              : "",
            columnEndProp: nodeProps?.cssProperties?.gridColumnEnd
              ? nodeProps?.cssProperties?.gridColumnEnd
              : "",
            alignSelfProp: nodeProps?.cssProperties?.alignSelf
              ? nodeProps?.cssProperties?.alignSelf
              : "",
            justifySelfProp: nodeProps?.cssProperties?.justifySelf
              ? nodeProps?.cssProperties?.justifySelf
              : "",
            orderProp: nodeProps?.cssProperties?.order
              ? nodeProps?.cssProperties?.order
              : "",
          }}
          flex={{
            flexDirectionProp: nodeProps?.cssProperties?.flexDirection
              ? nodeProps?.cssProperties?.flexDirection
              : "",
            flexWrapProp: nodeProps?.cssProperties?.flexWrap
              ? nodeProps?.cssProperties?.flexWrap
              : "",
          }}
          flexChild={{
            flexGrowProp: nodeProps?.cssProperties?.flexGrow
              ? nodeProps?.cssProperties?.flexGrow
              : "",
            flexShrinkProp: nodeProps?.cssProperties?.flexShrink
              ? nodeProps?.cssProperties?.flexShrink
              : "",
            basisProp: nodeProps?.cssProperties?.flexBasis
              ? nodeProps?.cssProperties?.flexBasis
              : "",
            alignSelfProp: nodeProps?.cssProperties?.alignSelf
              ? nodeProps?.cssProperties?.alignSelf
              : "",
            orderProp: nodeProps?.cssProperties?.order
              ? nodeProps?.cssProperties?.order
              : "",
          }}
          setProp={(key: string, val: string) => setProp(key, val)}
        />
        <StyleSelfLayout
          parentdisplay={parentProps?.cssProperties?.display}
          display={nodeProps?.cssProperties?.display}
          flexGrowProp={
            nodeProps?.cssProperties?.flexGrow
              ? nodeProps?.cssProperties?.flexGrow
              : ""
          }
          flexShrinkProp={
            nodeProps?.cssProperties?.flexShrink
              ? nodeProps?.cssProperties?.flexShrink
              : ""
          }
          flexBasisProp={
            nodeProps?.cssProperties?.flexBasis
              ? nodeProps?.cssProperties?.flexBasis
              : ""
          }
          alignSelfProp={
            nodeProps?.cssProperties?.alignSelf
              ? nodeProps?.cssProperties?.alignSelf
              : ""
          }
          orderProp={
            nodeProps?.cssProperties?.order
              ? nodeProps?.cssProperties?.order
              : ""
          }
          setProp={(key: string, val: string) => setProp(key, val)}
        />
        <StyleBackground
          backgroundImageProp={
            nodeProps?.cssProperties?.backgroundImage
              ? nodeProps?.cssProperties?.backgroundImage
              : ""
          }
          backgroundColorProp={
            nodeProps?.cssProperties?.backgroundColor
              ? nodeProps?.cssProperties?.backgroundColor
              : ""
          }
          backgroundPositionProp={
            nodeProps?.cssProperties?.backgroundPosition
              ? nodeProps?.cssProperties?.backgroundPosition
              : ""
          }
          backgroundRepeatProp={
            nodeProps?.cssProperties?.backgroundRepeat
              ? nodeProps?.cssProperties?.backgroundRepeat
              : ""
          }
          backgroundSizeProp={
            nodeProps?.cssProperties?.backgroundSize
              ? nodeProps?.cssProperties?.backgroundSize
              : ""
          }
          backgroundClipProp={
            nodeProps?.cssProperties?.backgroundClip
              ? nodeProps?.cssProperties?.backgroundClip
              : ""
          }
          backgroundGradientProp={
            nodeProps?.cssProperties?.background
              ? nodeProps?.cssProperties?.background
              : ""
          }
          setProp={(key: string, val: string) => setProp(key, val)}
        />
        <StylePosition
          positionProp={
            nodeProps?.cssProperties?.position
              ? nodeProps?.cssProperties?.position
              : ""
          }
          topProp={
            nodeProps?.cssProperties?.top ? nodeProps?.cssProperties?.top : ""
          }
          bottomProp={
            nodeProps?.cssProperties?.bottom
              ? nodeProps?.cssProperties?.bottom
              : ""
          }
          leftProp={
            nodeProps?.cssProperties?.left ? nodeProps?.cssProperties?.left : ""
          }
          rightProp={
            nodeProps?.cssProperties?.right
              ? nodeProps?.cssProperties?.right
              : ""
          }
          zIndexProp={
            nodeProps?.cssProperties?.zIndex
              ? nodeProps?.cssProperties?.zIndex
              : ""
          }
          setProp={(key: string, val: string) => setProp(key, val)}
        />
      </Accordion>
    </>
  );
};

export default HOneSettings;
