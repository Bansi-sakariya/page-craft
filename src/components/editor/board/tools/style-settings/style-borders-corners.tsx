import ColorPickerModal from "@/components/common/color-picker-modal";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { IoLockClosed } from "react-icons/io5";
import InputDropDowns from "../input-dropdowns";

const StyleBordersCorners = () => {
  return (
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
  );
};

export default StyleBordersCorners;
