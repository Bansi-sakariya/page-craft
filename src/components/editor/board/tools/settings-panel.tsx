"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TooltipButton from "@/components/common/TooltipButton";
import FormSelectSearch from "@/components/common/form-select-search";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BoxSelect,
  CaseLower,
  CaseSensitive,
  CaseUpper,
  ChevronDown,
  Focus,
  PanelTopDashed,
  ScanLine,
  Slash,
  SquareDashedBottom,
  StretchHorizontal,
  StretchVertical,
} from "lucide-react";
import { FaSliders } from "react-icons/fa6";
import {
  MdRectangle,
  MdViewArray,
  MdViewCarousel,
  MdViewColumn,
  MdViewModule,
  MdDoNotDisturb,
  MdStyle,
  MdDescription,
} from "react-icons/md";
import { IoIosArrowRoundForward, IoIosArrowRoundDown } from "react-icons/io";
import {
  PiAlignTopSimpleBold,
  PiAlignCenterVerticalSimpleBold,
  PiAlignBottomSimpleBold,
  PiAlignLeftSimpleBold,
  PiAlignRightSimpleBold,
  PiAlignCenterHorizontalSimpleBold,
  PiMouseScrollBold,
} from "react-icons/pi";
import {
  LuAlignVerticalJustifyStart,
  LuAlignVerticalJustifyEnd,
  LuAlignVerticalSpaceAround,
  LuAlignVerticalSpaceBetween,
  LuAlignVerticalDistributeCenter,
  LuAlignHorizontalJustifyStart,
  LuAlignHorizontalJustifyEnd,
  LuAlignHorizontalSpaceAround,
  LuAlignHorizontalSpaceBetween,
  LuAlignHorizontalDistributeCenter,
  LuAlignHorizontalJustifyCenter,
  LuAlignVerticalJustifyCenter,
  LuArrowRightLeft,
  LuBaseline,
} from "react-icons/lu";
import { IoEyeOutline, IoEyeOffOutline, IoLockClosed } from "react-icons/io5";
import {
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaAlignJustify,
} from "react-icons/fa6";
import { useColor } from "react-color-palette";
import "react-color-palette/css";
import ColorPickerModal from "@/components/common/color-picker-modal";
import InputDropDowns from "./input-dropdowns";
import CustomTabs from "./custom-tabs";
import SettingsSidePannel from "./settings-side-panel";
import StyleSettingsSidePannel from "./style-settings-panel";
import { useEditor } from "@craftjs/core";

const SettingsPanel = () => {
  const { active, related } = useEditor((state, query) => {
    // TODO: handle multiple selected elements
    const currentlySelectedNodeId = query.getEvent("selected").first();
    return {
      active: currentlySelectedNodeId,
      related:
        currentlySelectedNodeId && state.nodes[currentlySelectedNodeId].related,
    };
  });

  return (
    <>
      {active && related.toolbar && React.createElement(related.toolbar)}
      {/* <SettingsSidePannel
        title="Properties"
        isOpen={propertiesIsOpen}
        sidebarContent={
          <>
            <div className="mb-2">
              <div className="flex items-start p-2">
                <Checkbox className="mr-3 mt-1" />
                <div className="text-xs">
                  <Label className="text-sm">Children</Label>
                  <p className="mb-1.5">React.ReactNode</p>
                  <Input className="h-8"></Input>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex items-start p-2">
                <Checkbox className="mr-3 mt-1" />
                <div className="text-xs">
                  <Label className="text-sm">Disabled</Label>
                  <p className="mb-1.5">boolean</p>
                  <div className="mt-2">
                    <Button className="h-8 bg-slate-200 text-slate-800 rounded-r-none border-r border-slate-300">
                      True
                    </Button>
                    <Button className="h-8 rounded-l-none">False</Button>
                  </div>
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
                      <p className=" text-black">300px</p>
                    </div>
                    <div className="flex justify-between mb-4">
                      <p className=" text-gray-500">height</p>
                      <p className=" text-black text-start">100px</p>
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
                      <p className=" text-black">Calibiri</p>
                    </div>
                    <div className="flex justify-between mb-4">
                      <p className=" text-gray-500">font-size</p>
                      <p className=" text-black text-start">20px</p>
                    </div>
                    <div className="flex justify-between mb-4">
                      <p className=" text-gray-500">font-weight</p>
                      <p className=" text-black text-start">500</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
                  Border & Corners
                </AccordionTrigger>
                <AccordionContent className="p-2">
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </>
        }
      />

      <StyleSettingsSidePannel isOpen={stylesIsOpen} />

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
      </div> */}
    </>
  );
};

export default SettingsPanel;
