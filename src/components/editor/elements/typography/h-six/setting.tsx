"use client";

import TooltipButton from "@/components/common/TooltipButton";
import SettingsSidePannel from "@/components/editor/board/tools/settings-side-panel";

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
import { StyleSettings } from "../h-one/settings";
import DeviceContext from "@/context/device-context";
import { useEditorViewPort } from "@/provider/editor-viewport-provider";

const HSixSettings = () => {
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
                          nodeProps?.cssProperties
                            ?.[currentViewport]?.fontFamily as keyof typeof fontObj
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



export default HSixSettings;
