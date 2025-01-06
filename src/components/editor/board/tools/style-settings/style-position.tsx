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
import StyleInput from "./style-input";

type StylePositionProps = {
  positionProp: string;
  topProp: string;
  bottomProp: string;
  leftProp: string;
  rightProp: string;
  zIndexProp: string;
  setProp: (key: string, val: string) => void;
};

const StylePosition = ({
  positionProp,
  topProp,
  bottomProp,
  leftProp,
  rightProp,
  zIndexProp,
  setProp,
}: StylePositionProps) => {
  return (
    <>
      <AccordionItem value="position">
        <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
          Position
        </AccordionTrigger>
        <AccordionContent className="p-2 text-xs">
          <CustomTabs
            value={positionProp}
            setValue={(val: string) => setProp("position", val)}
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
          <div className="flex justify-between my-3">
            <div className="mr-2 relative">
              <StyleInput
                title="Top"
                type="text"
                dropdown
                mainval={topProp}
                handleVal={(val: string) => setProp("top", val)}
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
                    label: <>none</>,
                    value: "auto",
                  },
                ]?.map((el) => {
                  if (topProp.includes(el?.value)) {
                    return {
                      ...el,
                      selected: true,
                    };
                  } else {
                    return {
                      ...el,
                    };
                  }
                })}
              />
            </div>
            <div className="relative">
              <StyleInput
                title="Bottom"
                type="text"
                dropdown
                mainval={bottomProp}
                handleVal={(val: string) => setProp("bottom", val)}
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
                    label: <>none</>,
                    value: "auto",
                  },
                ]?.map((el) => {
                  if (bottomProp.includes(el?.value)) {
                    return {
                      ...el,
                      selected: true,
                    };
                  } else {
                    return {
                      ...el,
                    };
                  }
                })}
              />
            </div>
          </div>
          <div className="flex justify-between mb-3">
            <div className="mr-2 relative">
              <StyleInput
                title="Right"
                type="text"
                dropdown
                mainval={rightProp}
                handleVal={(val: string) => setProp("right", val)}
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
                    label: <>none</>,
                    value: "auto",
                  },
                ]?.map((el) => {
                  if (rightProp.includes(el?.value)) {
                    return {
                      ...el,
                      selected: true,
                    };
                  } else {
                    return {
                      ...el,
                    };
                  }
                })}
              />
            </div>
            <div className="relative">
            <StyleInput
                title="Right"
                type="text"
                dropdown
                mainval={leftProp}
                handleVal={(val: string) => setProp("left", val)}
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
                    label: <>none</>,
                    value: "auto",
                  },
                ]?.map((el) => {
                  if (leftProp.includes(el?.value)) {
                    return {
                      ...el,
                      selected: true,
                    };
                  } else {
                    return {
                      ...el,
                    };
                  }
                })}
              />
            </div>
          </div>
          <div className="mb-3">
            <Label className="text-gray-500 text-xs ml-1">Z-Index</Label>
            <Input
              placeholder="auto"
              className="h-8"
              value={zIndexProp}
              onChange={(e) => setProp("zIndex", e.target.value)}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default StylePosition;
