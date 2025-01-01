"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StretchHorizontal, StretchVertical } from "lucide-react";
import {
  PiAlignTopSimpleBold,
  PiAlignCenterVerticalSimpleBold,
  PiAlignBottomSimpleBold,
  PiAlignLeftSimpleBold,
  PiAlignCenterHorizontalSimpleBold,
  PiAlignRightSimpleBold,
} from "react-icons/pi";
import { LuBaseline } from "react-icons/lu";
import InputDropDowns from "../input-dropdowns";
import CustomTabs from "../custom-tabs";

type StyleSelfLayoutProps = {
  display: string;
};

const StyleSelfLayout = ({ display }: StyleSelfLayoutProps) => {
  return (
    <>
      <Tabs
        defaultValue={display == "flex" ? "flex-child" : "grid-child"}
        className="w-[100%]"
      >
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
              <Label className="text-gray-500 text-xs ml-1">Flex Grow</Label>
              <Input placeholder="auto" className="h-8" />
            </div>
            <div>
              <Label className="text-gray-500 text-xs ml-1">Flex Shrink</Label>
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
          <div className="relative mb-3">
            <Label className="text-gray-500 text-xs ml-1">Order</Label>
            <Input placeholder="0" className="h-8" />
          </div>
        </TabsContent>
        <TabsContent value="grid-child">
          <Label className="text-gray-500 text-xs ml-1">Select Child</Label>
          <div className="mb-3"></div>
          <p className="text-black text-xs font-bold ml-1 mb-1">Row</p>
          <div className="flex items-center mb-3">
            <div className="mr-2">
              <Label className="text-gray-500 text-xs ml-1">Start</Label>
              <Input placeholder="auto" className="h-8" />
            </div>
            <div>
              <Label className="text-gray-500 text-xs ml-1">End</Label>
              <Input placeholder="auto" className="h-8" />
            </div>
          </div>
          <p className="text-black text-xs font-bold ml-1 mb-1">Column</p>
          <div className="flex items-center mb-3">
            <div className="mr-2">
              <Label className="text-gray-500 text-xs ml-1">Start</Label>
              <Input placeholder="auto" className="h-8" />
            </div>
            <div>
              <Label className="text-gray-500 text-xs ml-1">End</Label>
              <Input placeholder="auto" className="h-8" />
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
            <Label className="text-gray-500 text-xs ml-1">Justify Self</Label>
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
          <div className="relative mb-3">
            <Label className="text-gray-500 text-xs ml-1">Order</Label>
            <Input placeholder="0" className="h-8" />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default StyleSelfLayout;
