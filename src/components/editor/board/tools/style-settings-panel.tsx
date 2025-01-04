"use client";

import { useState } from "react";
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
  MdOutlineHelpOutline,
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
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SettingsPannelSidebarProps {
  isOpen: boolean;
  sidebarContent?: JSX.Element;
  title?: string;
  tabs?: JSX.Element;
}

export const StyleSettings = () => {
  const [display, setDisplay] = useState("");

  return (
    <Accordion
      type="multiple"
      className="w-full"
      defaultValue={[
        "size",
        "layout",
        "self-layout",
        "position",
        "display",
        "padding-margin",
        "text",
        "backgrounds",
        "border-corners",
      ]}
    >
      <AccordionItem value="size">
        <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
          Size
        </AccordionTrigger>
        <AccordionContent className="p-2 text-xs">
          <div className="py-2">
            <div className="flex justify-between mb-4">
              <div className="mr-2 relative group">
                <Label className="text-gray-500 text-xs ml-1">Width</Label>
                <Input placeholder="auto" className="h-8" />
                <div className="absolute top-[22px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                      {
                        label: <>vw</>,
                        value: "vw",
                      },
                      {
                        label: <>vh</>,
                        value: "vh",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="relative">
                <Label className="text-gray-500 text-xs ml-1">Height</Label>
                <Input placeholder="auto" className="h-8" />
                <div className="absolute top-[22px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                      {
                        label: <>vw</>,
                        value: "vw",
                      },
                      {
                        label: <>vh</>,
                        value: "vh",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="mr-2 relative">
                <Label className="text-gray-500 text-xs ml-1">Min Width</Label>
                <Input placeholder="auto" className="h-8" />
                <div className="absolute top-[22px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                      {
                        label: <>vw</>,
                        value: "vw",
                      },
                      {
                        label: <>vh</>,
                        value: "vh",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="relative">
                <Label className="text-gray-500 text-xs ml-1">Min Height</Label>
                <Input placeholder="auto" className="h-8" />
                <div className="absolute top-[22px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                      {
                        label: <>vw</>,
                        value: "vw",
                      },
                      {
                        label: <>vh</>,
                        value: "vh",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="mr-2 relative">
                <Label className="text-gray-500 text-xs ml-1">Max Width</Label>
                <Input placeholder="auto" className="h-8" />
                <div className="absolute top-[22px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                      {
                        label: <>vw</>,
                        value: "vw",
                      },
                      {
                        label: <>vh</>,
                        value: "vh",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="relative">
                <Label className="text-gray-500 text-xs ml-1">Max Height</Label>
                <Input placeholder="auto" className="h-8" />
                <div className="absolute top-[22px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                      {
                        label: <>vw</>,
                        value: "vw",
                      },
                      {
                        label: <>vh</>,
                        value: "vh",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="layout">
        <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
          Layout
        </AccordionTrigger>
        <AccordionContent className="p-2 text-xs">
          <div className="mb-4">
            <Label className="text-gray-500 text-xs ml-1">Display</Label>
            <FormSelectSearch
              margin="mt-1"
              btnClassName="h-8 hover:bg-white"
              inputClassName="h-9"
              data={[
                {
                  label: (
                    <>
                      <div className="flex items-center">
                        <MdRectangle size={16} className="mr-2 text-gray-600" />
                        <span className="text-gray-600">block</span>
                      </div>
                    </>
                  ),
                  value: "block",
                },
                {
                  label: (
                    <>
                      <div className="flex items-center">
                        <MdViewArray size={16} className="mr-2 text-gray-600" />
                        <span className="text-gray-600">inline-block</span>
                      </div>
                    </>
                  ),
                  value: "inline-block",
                },
                {
                  label: (
                    <>
                      <div className="flex items-center">
                        <MdViewCarousel
                          size={16}
                          className="mr-2 text-gray-600"
                        />
                        <span className="text-gray-600">inline</span>
                      </div>
                    </>
                  ),
                  value: "inline",
                },
                {
                  label: (
                    <>
                      <div className="flex items-center">
                        <MdViewColumn
                          size={16}
                          className="mr-2 text-gray-600"
                        />
                        <span className="text-gray-600">flex</span>
                      </div>
                    </>
                  ),
                  value: "flex",
                },
                {
                  label: (
                    <>
                      <div className="flex items-center">
                        <MdViewModule
                          size={16}
                          className="mr-2 text-gray-600"
                        />
                        <span className="text-gray-600">grid</span>
                      </div>
                    </>
                  ),
                  value: "grid",
                },
                {
                  label: (
                    <>
                      <div className="flex items-center">
                        <MdDoNotDisturb
                          size={16}
                          className="mr-2 text-gray-600"
                        />
                        <span className="text-gray-600">none</span>
                      </div>
                    </>
                  ),
                  value: "none",
                },
              ]}
              emptyText="No keyword found"
              width="w-[250px]"
              setValue={(val: string) => setDisplay(val)}
              value={display}
            />
          </div>
          <p className="text-black text-xs font-bold ml-1 mb-1">Flex Flow</p>
          <div className="mb-3">
            <Label className="text-gray-500 text-xs ml-1">Flex Direction</Label>
            <div className="flex items-center mt-1">
              <div className="mr-2">
                <CustomTabs
                  data={[
                    {
                      label: (
                        <>
                          <span className="mr-1.5">Horizontal</span>
                          <span>
                            <IoIosArrowRoundForward size={25} />
                          </span>
                        </>
                      ),
                      value: "horizontal",
                      padding: "px-2.5",
                    },
                    {
                      label: (
                        <>
                          <span className="mr-1.5">Vertical</span>
                          <span>
                            <IoIosArrowRoundDown size={25} />
                          </span>
                        </>
                      ),
                      value: "vertical",
                      padding: "px-2.5",
                    },
                  ]}
                  defaultValue="horizontal"
                />
              </div>
              <div>
                <Button className="h-8 w-8 p-0 bg-white text-slate-800 hover:bg-slate-200 text-xs">
                  <LuArrowRightLeft size={15} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <Label className="text-gray-500 text-xs ml-1">Flex Wrap</Label>
            <div className="flex items-center mt-1">
              <div className="mr-2">
                <CustomTabs
                  data={[
                    {
                      label: <>Wrap</>,
                      value: "wrap",
                      padding: "px-2.5",
                      width: "w-[50%]",
                    },
                    {
                      label: <>No Wrap</>,
                      value: "no-wrap",
                      padding: "px-2.5",
                      width: "w-[50%]",
                    },
                  ]}
                  width="w-[210px]"
                  tablistwidth="w-[100%]"
                  defaultValue="wrap"
                />
              </div>
              <div>
                <Button
                  disabled
                  className="h-8 w-8 p-0 bg-white text-slate-800 hover:bg-slate-200 text-xs"
                >
                  <LuArrowRightLeft size={15} />
                </Button>
              </div>
            </div>
          </div>
          <p className="text-black text-xs font-bold ml-1 mb-1">Place Items</p>
          <div className="mb-3">
            <Label className="text-gray-500 text-xs ml-1">Align</Label>
            <CustomTabs
              data={[
                {
                  label: (
                    <PiAlignTopSimpleBold size={15} className="font-bold" />
                  ),
                  value: "start",
                  width: "w-[20%]",
                  tooltip: true,
                },
                {
                  label: (
                    <PiAlignCenterVerticalSimpleBold
                      size={15}
                      className="font-bold"
                    />
                  ),
                  value: "center",
                  width: "w-[20%]",
                  tooltip: true,
                },
                {
                  label: (
                    <PiAlignBottomSimpleBold size={15} className="font-bold" />
                  ),
                  value: "end",
                  width: "w-[20%]",
                  tooltip: true,
                },
                {
                  label: <StretchVertical size={15} className="font-bold" />,
                  value: "stretch",
                  width: "w-[20%]",
                  tooltip: true,
                },
                {
                  label: <LuBaseline size={15} className="font-bold" />,
                  value: "baseline",
                  width: "w-[20%]",
                  tooltip: true,
                },
              ]}
              defaultValue="start"
              width="w-[100%]"
              tablistwidth="w-[100%]"
            />
          </div>
          <div className="mb-3">
            <Label className="text-gray-500 text-xs ml-1">Justify</Label>
            <CustomTabs
              data={[
                {
                  label: (
                    <PiAlignLeftSimpleBold size={15} className="font-bold" />
                  ),
                  value: "start",
                  width: "w-[20%]",
                  tooltip: true,
                },
                {
                  label: (
                    <PiAlignCenterHorizontalSimpleBold
                      size={15}
                      className="font-bold"
                    />
                  ),
                  value: "center",
                  width: "w-[20%]",
                  tooltip: true,
                },
                {
                  label: (
                    <PiAlignRightSimpleBold size={15} className="font-bold" />
                  ),
                  value: "end",
                  width: "w-[20%]",
                  tooltip: true,
                },
                {
                  label: <StretchHorizontal size={15} className="font-bold" />,
                  value: "stretch",
                  width: "w-[20%]",
                  tooltip: true,
                },
                {
                  label: (
                    <LuBaseline size={15} className="font-bold -rotate-90" />
                  ),
                  value: "baseline",
                  width: "w-[20%]",
                  tooltip: true,
                },
              ]}
              defaultValue="start"
              width="w-[100%]"
              tablistwidth="w-[100%]"
            />
          </div>
          <p className="text-black text-xs font-bold ml-1 mb-1">
            Place Contents
          </p>
          <div className="mb-3">
            <Label className="text-gray-500 text-xs ml-1">Align</Label>
            <CustomTabs
              data={[
                {
                  label: (
                    <LuAlignVerticalJustifyStart
                      size={15}
                      className="font-bold"
                    />
                  ),
                  value: "start",
                  width: "w-[16.5%]",
                  tooltip: true,
                },
                {
                  label: (
                    <LuAlignVerticalJustifyCenter
                      size={15}
                      className="font-bold"
                    />
                  ),
                  value: "center",
                  width: "w-[16.5%]",
                  tooltip: true,
                },
                {
                  label: (
                    <LuAlignVerticalJustifyEnd
                      size={15}
                      className="font-bold"
                    />
                  ),
                  value: "end",
                  width: "w-[16.5%]",
                  tooltip: true,
                },
                {
                  label: (
                    <LuAlignVerticalSpaceAround
                      size={15}
                      className="font-bold"
                    />
                  ),
                  value: "space-around",
                  width: "w-[16.5%]",
                  tooltip: true,
                },
                {
                  label: (
                    <LuAlignVerticalSpaceBetween
                      size={15}
                      className="font-bold"
                    />
                  ),
                  value: "space-between",
                  width: "w-[16.5%]",
                  tooltip: true,
                },
                {
                  label: (
                    <LuAlignVerticalDistributeCenter
                      size={15}
                      className="font-bold"
                    />
                  ),
                  value: "space-evenly",
                  width: "w-[16.5%]",
                  tooltip: true,
                },
              ]}
              defaultValue="start"
              width="w-[100%]"
              tablistwidth="w-[100%]"
            />
          </div>
          <div className="mb-3">
            <Label className="text-gray-500 text-xs ml-1">Justify</Label>
            <CustomTabs
              data={[
                {
                  label: (
                    <LuAlignHorizontalJustifyStart
                      size={15}
                      className="font-bold"
                    />
                  ),
                  value: "start",
                  width: "w-[16.5%]",
                  tooltip: true,
                },
                {
                  label: (
                    <LuAlignHorizontalJustifyCenter
                      size={15}
                      className="font-bold"
                    />
                  ),
                  value: "center",
                  width: "w-[16.5%]",
                  tooltip: true,
                },
                {
                  label: (
                    <LuAlignHorizontalJustifyEnd
                      size={15}
                      className="font-bold"
                    />
                  ),
                  value: "end",
                  width: "w-[16.5%]",
                  tooltip: true,
                },
                {
                  label: (
                    <LuAlignHorizontalSpaceAround
                      size={15}
                      className="font-bold"
                    />
                  ),
                  value: "space-around",
                  width: "w-[16.5%]",
                  tooltip: true,
                },
                {
                  label: (
                    <LuAlignHorizontalSpaceBetween
                      size={15}
                      className="font-bold"
                    />
                  ),
                  value: "space-between",
                  width: "w-[16.5%]",
                  tooltip: true,
                },
                {
                  label: (
                    <LuAlignHorizontalDistributeCenter
                      size={15}
                      className="font-bold"
                    />
                  ),
                  value: "space-evenly",
                  width: "w-[16.5%]",
                  tooltip: true,
                },
              ]}
              defaultValue="start"
              width="w-[100%]"
              tablistwidth="w-[100%]"
            />
          </div>
          <p className="text-black text-xs font-bold ml-1 mb-1">Overflow</p>
          <div className="mb-3">
            <CustomTabs
              data={[
                {
                  label: <IoEyeOutline size={15} className="font-bold" />,
                  value: "visible",
                  width: "w-[25%]",
                  tooltip: true,
                },
                {
                  label: <IoEyeOffOutline size={15} className="font-bold" />,
                  value: "hidden",
                  width: "w-[25%]",
                  tooltip: true,
                },
                {
                  label: <PiMouseScrollBold size={15} className="font-bold" />,
                  value: "scroll",
                  width: "w-[25%]",
                  tooltip: true,
                },
                {
                  label: <PiMouseScrollBold size={15} className="font-bold" />,
                  value: "scroll",
                  width: "w-[25%]",
                  tooltip: true,
                },
                {
                  label: <>Auto</>,
                  value: "auto",
                  width: "w-[25%]",
                  tooltip: true,
                },
              ]}
              defaultValue="visible"
              width="w-[100%]"
              tablistwidth="w-[100%]"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="self-layout">
        <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
          Self-layout
        </AccordionTrigger>
        <AccordionContent className="p-2">
          <Tabs defaultValue="flex-child" className="w-[100%]">
            <TabsList className="w-[100%]">
              <TabsTrigger
                value="flex-child"
                className="w-[50%] data-[state=active]:text-primary data-[state=active]:bg-transparent text-xs rounded-none border-b data-[state=active]:border-primary"
              >
                Flex Child
              </TabsTrigger>
              <TabsTrigger
                value="grid-child"
                className="w-[50%] data-[state=active]:text-primary data-[state=active]:bg-transparent text-xs rounded-none border-b data-[state=active]:border-primary"
              >
                Grid Child
              </TabsTrigger>
            </TabsList>
            <TabsContent value="flex-child" className="w-[100%]">
              <p className="text-black text-xs font-bold ml-1 mb-1">Flex</p>
              <div className="flex items-center mb-3">
                <div className="mr-2">
                  <Label className="text-gray-500 text-xs ml-1">
                    Flex Grow
                  </Label>
                  <Input placeholder="auto" className="h-8" />
                </div>
                <div>
                  <Label className="text-gray-500 text-xs ml-1">
                    Flex Shrink
                  </Label>
                  <Input placeholder="auto" className="h-8" />
                </div>
              </div>
              <div className="relative mb-3">
                <Label className="text-gray-500 text-xs ml-1">Basis</Label>
                <Input placeholder="auto" className="h-8" />
                <div className="absolute top-[26px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="mb-3">
                <Label className="text-gray-500 text-xs ml-1">Align Self</Label>
                <CustomTabs
                  data={[
                    {
                      label: (
                        <PiAlignTopSimpleBold size={15} className="font-bold" />
                      ),
                      value: "start",
                      width: "w-[20%]",
                      tooltip: true,
                    },
                    {
                      label: (
                        <PiAlignCenterVerticalSimpleBold
                          size={15}
                          className="font-bold"
                        />
                      ),
                      value: "center",
                      width: "w-[20%]",
                      tooltip: true,
                    },
                    {
                      label: (
                        <PiAlignBottomSimpleBold
                          size={15}
                          className="font-bold"
                        />
                      ),
                      value: "end",
                      width: "w-[20%]",
                      tooltip: true,
                    },
                    {
                      label: (
                        <StretchVertical size={15} className="font-bold" />
                      ),
                      value: "stretch",
                      width: "w-[20%]",
                      tooltip: true,
                    },
                    {
                      label: <LuBaseline size={15} className="font-bold" />,
                      value: "baseline",
                      width: "w-[20%]",
                      tooltip: true,
                    },
                  ]}
                  defaultValue="start"
                  width="w-[100%]"
                  tablistwidth="w-[100%]"
                />
              </div>
              <div className="relative mb-3">
                <Label className="text-gray-500 text-xs ml-1">Order</Label>
                <Input placeholder="0" className="h-8" />
              </div>
            </TabsContent>
          </Tabs>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="position">
        <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
          Position
        </AccordionTrigger>
        <AccordionContent className="p-2">
          <div className="mb-3">
            <Label className="text-gray-500 text-xs ml-1">Position</Label>
            <CustomTabs
              data={[
                {
                  label: <BoxSelect size={15} className="font-bold" />,
                  value: "static",
                  width: "w-[20%]",
                  tooltip: true,
                },
                {
                  label: <ScanLine size={15} className="font-bold" />,
                  value: "relative",
                  width: "w-[20%]",
                  tooltip: true,
                },
                {
                  label: <Focus size={15} className="font-bold" />,
                  value: "absolute",
                  width: "w-[20%]",
                  tooltip: true,
                },
                {
                  label: <PanelTopDashed size={15} className="font-bold" />,
                  value: "fixed",
                  width: "w-[20%]",
                  tooltip: true,
                },
                {
                  label: <SquareDashedBottom size={15} className="font-bold" />,
                  value: "sticky",
                  width: "w-[20%]",
                  tooltip: true,
                },
              ]}
              defaultValue="static"
              width="w-[100%]"
              tablistwidth="w-[100%]"
            />
          </div>
          <div className="flex justify-between mb-3">
            <div className="mr-2 relative">
              <Label className="text-gray-500 text-xs ml-1">Top</Label>
              <Input placeholder="auto" className="h-8" />
              <div className="absolute top-[26px] right-1 flex items-center justify-center">
                <InputDropDowns
                  data={[
                    {
                      label: <>px</>,
                      value: "px",
                    },
                    {
                      label: <>%</>,
                      value: "%",
                    },
                    {
                      label: <>em</>,
                      value: "em",
                    },
                    {
                      label: <>rem</>,
                      value: "rem",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="relative">
              <Label className="text-gray-500 text-xs ml-1">Bottom</Label>
              <Input placeholder="auto" className="h-8" />
              <div className="absolute top-[26px] right-1 flex items-center justify-center">
                <InputDropDowns
                  data={[
                    {
                      label: <>px</>,
                      value: "px",
                    },
                    {
                      label: <>%</>,
                      value: "%",
                    },
                    {
                      label: <>em</>,
                      value: "em",
                    },
                    {
                      label: <>rem</>,
                      value: "rem",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-3">
            <div className="mr-2 relative">
              <Label className="text-gray-500 text-xs ml-1">Left</Label>
              <Input placeholder="auto" className="h-8" />
              <div className="absolute top-[26px] right-1 flex items-center justify-center">
                <InputDropDowns
                  data={[
                    {
                      label: <>px</>,
                      value: "px",
                    },
                    {
                      label: <>%</>,
                      value: "%",
                    },
                    {
                      label: <>em</>,
                      value: "em",
                    },
                    {
                      label: <>rem</>,
                      value: "rem",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="relative">
              <Label className="text-gray-500 text-xs ml-1">Right</Label>
              <Input placeholder="auto" className="h-8" />
              <div className="absolute top-[26px] right-1 flex items-center justify-center">
                <InputDropDowns
                  data={[
                    {
                      label: <>px</>,
                      value: "px",
                    },
                    {
                      label: <>%</>,
                      value: "%",
                    },
                    {
                      label: <>em</>,
                      value: "em",
                    },
                    {
                      label: <>rem</>,
                      value: "rem",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <Label className="text-gray-500 text-xs ml-1">Z-Index</Label>
            <Input placeholder="auto" className="h-8" />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="padding-margin">
        <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
          Padding & Margin
        </AccordionTrigger>
        <AccordionContent className="p-2">
          <div className="mb-3">
            <div className="flex justify-between items-center">
              <Label className="text-gray-500 text-xs ml-1">Padding</Label>
              <Button className="h-5 w-5 p-1 bg-transparent text-gray-500 hover:bg-transparent">
                <IoLockClosed size={25} />
                {/* <IoLockOpen size={25} /> */}
              </Button>
            </div>
            <div className="flex items-center">
              <div className="relative mr-1">
                <Label className="text-gray-500 text-xs ml-1">Top</Label>
                <Input placeholder="0" className="h-8 pl-1.5" />
                <div className="absolute top-[26px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="relative mr-1">
                <Label className="text-gray-500 text-xs ml-1">Right</Label>
                <Input placeholder="0" className="h-8 pl-1.5" />
                <div className="absolute top-[26px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="relative mr-1">
                <Label className="text-gray-500 text-xs ml-1">Bottom</Label>
                <Input placeholder="0" className="h-8 pl-1.5" />
                <div className="absolute top-[26px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="relative mr-1">
                <Label className="text-gray-500 text-xs ml-1">Left</Label>
                <Input placeholder="0" className="h-8 pl-1.5" />
                <div className="absolute top-[26px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex justify-between items-center">
              <Label className="text-gray-500 text-xs ml-1">Margin</Label>
              <Button className="h-5 w-5 p-1 bg-transparent text-gray-500 hover:bg-transparent">
                <IoLockClosed size={25} />
                {/* <IoLockOpen size={25} /> */}
              </Button>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <Label className="text-gray-500 text-xs ml-1">Top</Label>
                <Input placeholder="0" className="h-8 pl-1.5 rounded-r-none" />
                <div className="absolute top-[26px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="relative">
                <Label className="text-gray-500 text-xs ml-1">Right</Label>
                <Input placeholder="0" className="h-8 pl-1.5 rounded-none" />
                <div className="absolute top-[26px] right-0.5 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="relative">
                <Label className="text-gray-500 text-xs ml-1">Bottom</Label>
                <Input placeholder="0" className="h-8 pl-1.5 rounded-none" />
                <div className="absolute top-[26px] right-0.5 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="relative">
                <Label className="text-gray-500 text-xs ml-1">Left</Label>
                <Input placeholder="0" className="h-8 pl-1.5 rounded-l-none" />
                <div className="absolute top-[26px] right-0.5 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="h-[100%] flex justify-center items-center">
          <div className="relative h-[60%] w-[60%]">
            <div className="w-[100%] absolute top-0">
              <Separator
                orientation="horizontal"
                className="h-[10px] rounded-2xl"
              />
            </div>
            <div className="h-[100%] absolute left-0 top-0">
              <Separator
                orientation="vertical"
                className="w-[10px] rounded-2xl"
              />
            </div>
            <div className="h-[100%] absolute right-0 top-0">
              <Separator
                orientation="vertical"
                className="w-[10px] rounded-2xl"
              />
            </div>
            <div className="w-[100%] absolute left-0 bottom-0">
              <Separator
                orientation="horizontal"
                className="h-[10px] rounded-2xl"
              />
            </div>
          </div>
        </div> */}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="text">
        <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
          Text
        </AccordionTrigger>
        <AccordionContent className="p-2">
          <div className="mb-3">
            <p className="text-black text-xs font-bold ml-1 mb-1">Font</p>
            <Label className="text-gray-500 text-xs ml-1">Font Family</Label>
            <FormSelectSearch
              data={[]}
              emptyText="No Fonts Found"
              value=""
              setValue={(val: string) => {}}
              btnClassName="h-8 hover:bg-white"
              inputClassName="h-9"
              width="w-[250px]"
              margin="mt-1"
            />
          </div>
          <div className="flex justify-between mb-4">
            <div className="mr-2 relative">
              <Label className="text-gray-500 text-xs ml-1">Font Size</Label>
              <Input placeholder="auto" className="h-8" />
              <div className="absolute top-[26px] right-1 flex items-center justify-center">
                <InputDropDowns
                  data={[
                    {
                      label: <>px</>,
                      value: "px",
                    },
                    {
                      label: <>%</>,
                      value: "%",
                    },
                    {
                      label: <>em</>,
                      value: "em",
                    },
                    {
                      label: <>rem</>,
                      value: "rem",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="relative">
              <Label className="text-gray-500 text-xs ml-1">Line Height</Label>
              <Input placeholder="auto" className="h-8" />
              <div className="absolute top-[26px] right-1 flex items-center justify-center">
                <InputDropDowns
                  data={[
                    {
                      label: <>px</>,
                      value: "px",
                    },
                    {
                      label: <>%</>,
                      value: "%",
                    },
                    {
                      label: <>em</>,
                      value: "em",
                    },
                    {
                      label: <>rem</>,
                      value: "rem",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="mr-2 relative">
              <Label className="text-gray-500 text-xs ml-1">Font Weight</Label>
              <div className="mt-1">
                <InputDropDowns
                  data={[
                    {
                      label: <>Thin</>,
                      value: "thin",
                    },
                    {
                      label: <>Extra Light</>,
                      value: "extralight",
                    },
                    {
                      label: <>Light</>,
                      value: "light",
                    },
                    {
                      label: <>Normal</>,
                      value: "normal",
                    },
                    {
                      label: <>Medium</>,
                      value: "medium",
                    },
                    {
                      label: <>Semibold</>,
                      value: "semibold",
                    },
                    {
                      label: <>Bold</>,
                      value: "bold",
                    },
                    {
                      label: <>Extra Bold</>,
                      value: "extrabold",
                    },
                  ]}
                  height="h-56"
                  width="w-40"
                  customContent={
                    <Button className="h-7 w-32 flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                      <span className="mr-3">700 - Bold</span>
                      <ChevronDown size={12} />
                    </Button>
                  }
                />
                {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="h-7 w-32 flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                    <span className="mr-3">700 - Bold</span>
                    <ChevronDown size={12} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[5rem] w-36 ml-2">
                  <ScrollArea className="h-56">
                    <DropdownMenuItem className="cursor-pointer">
                      100 - Thin
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      200 - Extra Light
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      300 - Light
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      400 - Normal
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      500 - Medium
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      600 - Semibold
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      700 - Bold
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      800 - Extra Bold
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      900 - Black
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      lighter
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      bolder
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      inherit
                    </DropdownMenuItem>
                  </ScrollArea>
                </DropdownMenuContent>
              </DropdownMenu> */}
              </div>
            </div>
            <div>
              <Label className="text-gray-500 text-xs ml-1">Font Style</Label>
              <Tabs defaultValue="normal">
                <TabsList className="p-0 h-8">
                  <TabsTrigger value="normal" asChild>
                    <TooltipButton
                      text="Normal"
                      className="h-6 w-6 mr-2 data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-gray-600 hover:bg-transparent"
                      side="top"
                      btnContent={<>I</>}
                    />
                  </TabsTrigger>
                  <TabsTrigger value="italic" asChild className="italic">
                    <TooltipButton
                      text="Italic"
                      className="h-6 w-6 data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-gray-600 hover:bg-transparent"
                      side="top"
                      btnContent={<>I</>}
                    />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          <div className="relative mb-3">
            <Label className="text-gray-500 text-xs ml-1">Color</Label>
            <Input placeholder="rgb(0,0,0)" className="h-8 pl-8 text-xs" />
            <div className="absolute top-[23px] left-2">
              <ColorPickerModal />
            </div>
          </div>
          <div className="relative mb-3">
            <Label className="text-gray-500 text-xs ml-1">Text Align</Label>
            <Tabs defaultValue="left" className="w-[100%]">
              <TabsList className="w-[100%]">
                <TabsTrigger value="left" asChild>
                  <TooltipButton
                    className="h-8 px-3 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-r-none border-r border-slate-300 text-xs"
                    btnContent={<FaAlignLeft size={15} className="font-bold" />}
                    side="top"
                    text="left"
                  />
                </TabsTrigger>
                <TabsTrigger value="center" asChild>
                  <TooltipButton
                    className="h-8 px-3 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-none border-r border-slate-300 text-xs"
                    btnContent={
                      <FaAlignCenter size={15} className="font-bold" />
                    }
                    side="top"
                    text="center"
                  />
                </TabsTrigger>
                <TabsTrigger value="right" asChild>
                  <TooltipButton
                    className="h-8 px-3 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-none border-r border-slate-300 text-xs"
                    btnContent={
                      <FaAlignRight size={15} className="font-bold" />
                    }
                    side="top"
                    text="right"
                  />
                </TabsTrigger>
                <TabsTrigger value="justify" asChild>
                  <TooltipButton
                    className="h-8 px-3 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-l-none border-slate-300 text-xs"
                    btnContent={
                      <FaAlignJustify size={15} className="font-bold" />
                    }
                    side="top"
                    text="justify"
                  />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="flex items-center mb-3">
            <div className="relative mr-2">
              <Label className="text-gray-500 text-xs ml-1">
                Letter Spacing
              </Label>
              <Input placeholder="auto" className="h-8" />
              <div className="absolute top-[26px] right-1 flex items-center justify-center">
                <InputDropDowns
                  data={[
                    {
                      label: <>px</>,
                      value: "px",
                    },
                    {
                      label: <>%</>,
                      value: "%",
                    },
                    {
                      label: <>em</>,
                      value: "em",
                    },
                    {
                      label: <>rem</>,
                      value: "rem",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="">
              <Label className="text-gray-500 text-xs ml-1">
                Text Transform
              </Label>
              <Tabs defaultValue="left">
                <TabsList>
                  <TabsTrigger value="uppercase" asChild>
                    <TooltipButton
                      className="h-8 px-2 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-r-none border-r border-slate-300 text-xs"
                      btnContent={<CaseUpper size={15} className="font-bold" />}
                      side="top"
                      text="uppercase"
                    />
                  </TabsTrigger>
                  <TabsTrigger value="capitalize" asChild>
                    <TooltipButton
                      className="h-8 px-2 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-none border-r border-slate-300 text-xs"
                      btnContent={
                        <CaseSensitive size={15} className="font-bold" />
                      }
                      side="top"
                      text="capitalize"
                    />
                  </TabsTrigger>
                  <TabsTrigger value="lowercase" asChild>
                    <TooltipButton
                      className="h-8 px-2 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-none border-r border-slate-300 text-xs"
                      btnContent={<CaseLower size={15} className="font-bold" />}
                      side="top"
                      text="lowercase"
                    />
                  </TabsTrigger>
                  <TabsTrigger value="justify" asChild>
                    <TooltipButton
                      className="h-8 px-2 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-l-none border-slate-300 text-xs"
                      btnContent={<Slash size={15} className="font-bold" />}
                      side="top"
                      text="none"
                    />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          <div className="mb-3 relative">
            <Label className="text-gray-500 text-xs ml-1">Line Height</Label>
            <Input placeholder="auto" className="h-8" />
            <div className="absolute top-[26px] right-1 flex items-center justify-center">
              <InputDropDowns
                data={[
                  {
                    label: <>px</>,
                    value: "px",
                  },
                  {
                    label: <>%</>,
                    value: "%",
                  },
                  {
                    label: <>em</>,
                    value: "em",
                  },
                  {
                    label: <>rem</>,
                    value: "rem",
                  },
                ]}
              />
            </div>
          </div>
          <p className="text-black text-xs font-bold ml-1 mb-1">
            Text Decoration
          </p>
          <div className="flex items-center mb-3 mt-1">
            <div className="mr-2">
              <Label className="text-gray-500 text-xs ml-1">
                Decoration Line
              </Label>
              <div className="mt-1">
                <InputDropDowns
                  data={[
                    {
                      label: <>underline</>,
                      value: "underline",
                    },
                    {
                      label: <>overline</>,
                      value: "overline",
                    },
                    {
                      label: <>line-through</>,
                      value: "line-through",
                    },
                    {
                      label: <>no-underline</>,
                      value: "no-underline",
                    },
                  ]}
                  width="w-40"
                  customContent={
                    <Button className="h-7 w-[100%] flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                      <span className="mr-3">no-underline</span>
                      <ChevronDown size={12} />
                    </Button>
                  }
                />
              </div>
            </div>
            <div className="relative">
              <Label className="text-gray-500 text-xs ml-1">
                Decoration Color
              </Label>
              <Input placeholder="rgb(0,0,0)" className="h-8 pl-8 text-xs" />
              <div className="absolute top-[23px] left-2">
                <ColorPickerModal />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <Label className="text-gray-500 text-xs ml-1">
              Decoration Style
            </Label>
            <div className="mt-1">
              <InputDropDowns
                data={[
                  {
                    label: <>solid</>,
                    value: "solid",
                  },
                  {
                    label: <>doubled</>,
                    value: "doubled",
                  },
                  {
                    label: <>dotted</>,
                    value: "dotted",
                  },
                  {
                    label: <>dashed</>,
                    value: "dashed",
                  },
                  {
                    label: <>wavy</>,
                    value: "wavy",
                  },
                ]}
                width="w-40"
                customContent={
                  <Button className="h-7 w-[100%] flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                    <span className="mr-3">solid</span>
                    <ChevronDown size={12} />
                  </Button>
                }
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="backgrounds">
        <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
          Backgrounds
        </AccordionTrigger>
        <AccordionContent className="p-2">
          <div className="mb-3 relative">
            <Label className="text-gray-500 text-xs ml-1">
              Background Color
            </Label>
            <Input placeholder="rgb(0,0,0)" className="h-8 pl-8 text-xs mt-1" />
            <div className="absolute top-[27px] left-2">
              <ColorPickerModal />
            </div>
          </div>
          <div className="mb-3">
            <Label className="text-gray-500 text-xs ml-1">
              Background Image
            </Label>
            <Input
              placeholder="url('image-url')"
              className="h-8 text-xs mt-1"
            />
          </div>
          <div className="mb-3 flex items-center">
            <div className="mr-2">
              <Label className="text-gray-500 text-xs ml-1">Bg. Position</Label>
              <div className="mt-1">
                <InputDropDowns
                  data={[
                    {
                      label: <>center</>,
                      value: "center",
                    },
                    {
                      label: <>bottom</>,
                      value: "bottom",
                    },
                    {
                      label: <>left</>,
                      value: "left",
                    },
                    {
                      label: <>left-bottom</>,
                      value: "left-bottom",
                    },
                    {
                      label: <>left-top</>,
                      value: "left-top",
                    },
                    {
                      label: <>right</>,
                      value: "right",
                    },
                    {
                      label: <>right-bottom</>,
                      value: "right-bottom",
                    },
                    {
                      label: <>right-top</>,
                      value: "right-top",
                    },
                    {
                      label: <>top</>,
                      value: "top",
                    },
                  ]}
                  width="w-40"
                  customContent={
                    <Button className="h-7 w-[100%] flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                      <span className="mr-3">center</span>
                      <ChevronDown size={12} />
                    </Button>
                  }
                />
              </div>
            </div>
            <div className="">
              <Label className="text-gray-500 text-xs ml-1">Bg. Repeat</Label>
              <div className="mt-1">
                <InputDropDowns
                  data={[
                    {
                      label: <>repeat</>,
                      value: "repeat",
                    },
                    {
                      label: <>no-repeat</>,
                      value: "no-repeat",
                    },
                    {
                      label: <>repeat-x</>,
                      value: "repeat-x",
                    },
                    {
                      label: <>repeat-y</>,
                      value: "repeat-y",
                    },
                    {
                      label: <>repeat-round</>,
                      value: "repeat-round",
                    },
                    {
                      label: <>repeat-space</>,
                      value: "repeat-space",
                    },
                  ]}
                  width="w-40"
                  customContent={
                    <Button className="h-7 w-[100%] flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                      <span className="mr-3">no-repeat</span>
                      <ChevronDown size={12} />
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="mr-2">
              <Label className="text-gray-500 text-xs ml-1">
                Background Size
              </Label>
              <div className="mt-1">
                <InputDropDowns
                  data={[
                    {
                      label: <>auto</>,
                      value: "auto",
                    },
                    {
                      label: <>cover</>,
                      value: "cover",
                    },
                    {
                      label: <>contain</>,
                      value: "contain",
                    },
                  ]}
                  width="w-40"
                  customContent={
                    <Button className="h-7 w-[100%] flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                      <span className="mr-3">auto</span>
                      <ChevronDown size={12} />
                    </Button>
                  }
                />
              </div>
            </div>
            <div>
              <Label className="text-gray-500 text-xs ml-1">
                Background Clip
              </Label>
              <div className="mt-1">
                <InputDropDowns
                  data={[
                    {
                      label: <>clip-border</>,
                      value: "clip-border",
                    },
                    {
                      label: <>clip-padding</>,
                      value: "clip-padding",
                    },
                    {
                      label: <>clip-content</>,
                      value: "clip-content",
                    },
                    {
                      label: <>clip-text</>,
                      value: "clip-text",
                    },
                  ]}
                  width="w-40"
                  customContent={
                    <Button className="h-7 w-[100%] flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                      <span className="mr-3">auto</span>
                      <ChevronDown size={12} />
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <Label className="text-gray-500 text-xs ml-1">
              Background Gradient
            </Label>
            <div className="mb-3 flex items-center">
              <div className="relative mr-2">
                <Input placeholder="33.33%" className="h-8 pl-8 text-xs mt-1" />
                <div className="absolute top-[6px] left-1.5">
                  <ColorPickerModal />
                </div>
              </div>
              <div className="relative mr-2">
                <Input placeholder="33.33%" className="h-8 pl-8 text-xs mt-1" />
                <div className="absolute top-[6px] left-1.5">
                  <ColorPickerModal />
                </div>
              </div>
              <div className="relative">
                <Input placeholder="33.33%" className="h-8 pl-8 text-xs mt-1" />
                <div className="absolute top-[6px] left-1.5">
                  <ColorPickerModal />
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="border-corners">
        <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
          Border & Corners
        </AccordionTrigger>
        <AccordionContent className="p-2">
          <div className="mb-3">
            <p className="text-black flex items-center justify-between text-xs font-bold ml-1 mb-1">
              <span>Borders</span>
              <Button className="bg-transparent hover:bg-transparent h-6 w-6 p-0 text-gray-800">
                <IoLockClosed size={14} />
              </Button>
            </p>
            <div className="flex items-center mb-2">
              <div className="mr-2 relative">
                <Label className="text-gray-500 text-xs ml-1">Top</Label>
                <Input placeholder="1" className="h-8 pl-8 text-xs mt-1" />
                <div className="absolute top-[26px] left-1.5">
                  <ColorPickerModal />
                </div>
                <div className="absolute top-[30px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="relative">
                <Label className="text-gray-500 text-xs ml-1">Right</Label>
                <Input placeholder="1" className="h-8 pl-8 text-xs mt-1" />
                <div className="absolute top-[26px] left-1.5">
                  <ColorPickerModal />
                </div>
                <div className="absolute top-[30px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="mr-2 relative">
                <Label className="text-gray-500 text-xs ml-1">Bottom</Label>
                <Input placeholder="1" className="h-8 pl-8 text-xs mt-1" />
                <div className="absolute top-[26px] left-1.5">
                  <ColorPickerModal />
                </div>
                <div className="absolute top-[30px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="relative">
                <Label className="text-gray-500 text-xs ml-1">Left</Label>
                <Input placeholder="1" className="h-8 pl-8 text-xs mt-1" />
                <div className="absolute top-[26px] left-1.5">
                  <ColorPickerModal />
                </div>
                <div className="absolute top-[30px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <p className="text-black flex items-center justify-between text-xs font-bold ml-1 mb-1">
              <span>Corners</span>
              <Button className="bg-transparent hover:bg-transparent h-6 w-6 p-0 text-gray-800">
                <IoLockClosed size={14} />
              </Button>
            </p>
            <div className="flex items-center mb-2">
              <div className="mr-2 relative">
                <Label className="text-gray-500 text-xs ml-1">Top-Left</Label>
                <Input placeholder="1" className="h-8 text-xs mt-1" />
                <div className="absolute top-[30px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="relative">
                <Label className="text-gray-500 text-xs ml-1">Top-Right</Label>
                <Input placeholder="1" className="h-8 text-xs mt-1" />
                <div className="absolute top-[30px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="mr-2 relative">
                <Label className="text-gray-500 text-xs ml-1">
                  Bottom-Right
                </Label>
                <Input placeholder="1" className="h-8 text-xs mt-1" />
                <div className="absolute top-[30px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="relative">
                <Label className="text-gray-500 text-xs ml-1">
                  Bottom-Left
                </Label>
                <Input placeholder="1" className="h-8 text-xs mt-1" />
                <div className="absolute top-[30px] right-1 flex items-center justify-center">
                  <InputDropDowns
                    data={[
                      {
                        label: <>px</>,
                        value: "px",
                      },
                      {
                        label: <>%</>,
                        value: "%",
                      },
                      {
                        label: <>em</>,
                        value: "em",
                      },
                      {
                        label: <>rem</>,
                        value: "rem",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const StyleSettingsSidePannel = ({
  isOpen,
  tabs,
}: SettingsPannelSidebarProps) => {
  return (
    <>
      <div
        className={cn(
          " z-50 w-80 bg-slate-100 fixed h-[92vh] right-[57px] transition-all duration-200 ease-in-out",
          isOpen ? "translate-x-1" : "translate-x-[24rem]"
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
              <StyleSettings />
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default StyleSettingsSidePannel;
