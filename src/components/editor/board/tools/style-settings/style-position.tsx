"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BoxSelect,
  Focus,
  PanelTopDashed,
  ScanLine,
  SquareDashedBottom,
} from "lucide-react";
import CustomTabs from "../custom-tabs";
import InputDropDowns from "../input-dropdowns";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const StylePosition = () => {
  return (
    <>
      <AccordionItem value="position">
        <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
          Position
        </AccordionTrigger>
        <AccordionContent className="p-2 text-xs">
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
    </>
  );
};

export default StylePosition;
