import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { IoLockClosed } from "react-icons/io5";
import InputDropDowns from "../input-dropdowns";

type StylePaddingMarginProps = {};

const StylePaddingMargin = ({}: StylePaddingMarginProps) => {
  return (
    <AccordionItem value={"padding-margin"}>
      <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
        Padding & Margin
      </AccordionTrigger>
      <AccordionContent className="p-2 text-xs">
        <div className="mb-3">
          <div className="flex justify-between items-center">
            <Label className="text-gray-500 text-xs ml-1">Padding</Label>
            <Button className="h-5 w-5 p-1 bg-transparent text-gray-500 hover:bg-transparent">
              <IoLockClosed size={25} />
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
      </AccordionContent>
    </AccordionItem>
  );
};

export default StylePaddingMargin;
