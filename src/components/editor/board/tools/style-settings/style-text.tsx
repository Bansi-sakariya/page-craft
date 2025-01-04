import FormSelectSearch from "@/components/common/form-select-search";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import InputDropDowns from "../input-dropdowns";
import { Button } from "@/components/ui/button";
import {
  CaseLower,
  CaseSensitive,
  CaseUpper,
  ChevronDown,
  Slash,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TooltipButton from "@/components/common/TooltipButton";
import ColorPickerModal from "@/components/common/color-picker-modal";
import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
} from "react-icons/fa";
import StyleInput from "./style-input";
import { IColor } from "react-color-palette";
import { cn } from "@/lib/utils";

type StyleTextProps = {
  fontFamilyProp: string;
  fontSizeProp: string;
  fontWeightProp: string;
  fontStyleProp: string;
  colorProp: string;
  textAlignProp: string;
  lineHeightProp: string;
  letterSpaceProp: string;
  textTransformProp: string;
  textIndentProp: string;
  decorationLineProp: string;
  decorationColorProp: string;
  decorationStyleProp: string;
  decorationThicknessProp: string;
  setProp: (key: string, val: string) => void;
};

const StyleText = ({
  fontFamilyProp,
  fontSizeProp,
  fontWeightProp,
  fontStyleProp,
  colorProp,
  textAlignProp,
  lineHeightProp,
  letterSpaceProp,
  textTransformProp,
  textIndentProp,
  decorationLineProp,
  decorationColorProp,
  decorationStyleProp,
  decorationThicknessProp,
  setProp,
}: StyleTextProps) => {
  return (
    <AccordionItem value="text">
      <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
        Text
      </AccordionTrigger>
      <AccordionContent className="p-2">
        <div className="mb-3">
          <p className="text-black text-xs font-bold ml-1 mb-1">Font</p>
          <Label className="text-gray-500 text-xs ml-1">Font Family</Label>
          <FormSelectSearch
            data={[
              {
                label: "Inter",
                value: "var(--font-inter)",
              },
              {
                label: "Roboto",
                value: "var(--font-roboto)",
              },
              {
                label: "Poppins",
                value: "var(--font-poppins)",
              },
            ]}
            emptyText="No Fonts Found"
            value={fontFamilyProp}
            setValue={(val: string) => setProp("fontFamily", val)}
            btnClassName="h-8 hover:bg-white"
            inputClassName="h-9"
            width="w-[250px]"
            margin="mt-1"
          />
        </div>
        <div className="flex justify-between mb-4">
          <div className="mr-2 relative">
            <StyleInput
              title="Font Size"
              dropdown
              type="text"
              top="top-[25px]"
              mainval={fontSizeProp}
              handleVal={(val: string) => setProp("fontSize", val)}
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
              ]?.map((el) => {
                if (fontSizeProp?.includes(el?.value)) {
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
              title={"Line Height"}
              type="text"
              dropdown
              top="top-[25px]"
              handleVal={(val: string) => setProp("lineHeight", val)}
              mainval={lineHeightProp}
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
                if (lineHeightProp?.includes(el?.value)) {
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
        <div className="flex items-center mb-3">
          <div className="mr-2 relative">
            <Label className="text-gray-500 text-xs ml-1">Font Weight</Label>
            <div className="mt-1">
              <InputDropDowns
                value={fontWeightProp}
                setValue={(val: string) => setProp("fontWeight", val)}
                data={[
                  {
                    label: <>Thin</>,
                    value: "100",
                  },
                  {
                    label: <>Extra Light</>,
                    value: "200",
                  },
                  {
                    label: <>Light</>,
                    value: "300",
                  },
                  {
                    label: <>Normal</>,
                    value: "400",
                  },
                  {
                    label: <>Medium</>,
                    value: "500",
                  },
                  {
                    label: <>Semibold</>,
                    value: "600",
                  },
                  {
                    label: <>Bold</>,
                    value: "700",
                  },
                  {
                    label: <>Bolder</>,
                    value: "800",
                  },
                  {
                    label: <>Extra Bold</>,
                    value: "900",
                  },
                ]?.map((el) => {
                  if (fontWeightProp == el?.value) {
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
                height="h-56"
                width="w-40"
                customContent={
                  <Button className="h-7 w-32 flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                    {fontWeightProp}
                    <ChevronDown size={12} />
                  </Button>
                }
              />
            </div>
          </div>
          <div>
            <Label className="text-gray-500 text-xs ml-1">Font Style</Label>
            <Tabs defaultValue="normal">
              <TabsList className="p-0 h-8">
                <TabsTrigger value="normal" asChild>
                  <TooltipButton
                    onClick={() => setProp("fontStyle", "normal")}
                    text="Normal"
                    className={cn(
                      "h-6 w-6 mr-2 data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-gray-600 hover:bg-transparent",
                      fontStyleProp == "normal" ? "bg-primary text-white" : ""
                    )}
                    side="top"
                    btnContent={<>I</>}
                  />
                </TabsTrigger>
                <TabsTrigger value="italic" asChild className="italic">
                  <TooltipButton
                    onClick={() => setProp("fontStyle", "italic")}
                    text="Italic"
                    className={cn(
                      "h-6 w-6 data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-gray-600 hover:bg-transparent",
                      fontStyleProp == "italic" ? "bg-primary text-white" : ""
                    )}
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
            <ColorPickerModal
              colorProp={colorProp as string}
              setColorProp={(val) => {
                setProp("color", val);
              }}
            />
          </div>
        </div>
        <div className="relative mb-3">
          <Label className="text-gray-500 text-xs ml-1">Text Align</Label>
          <Tabs defaultValue="left" className="w-[100%]">
            <TabsList className="w-[100%]">
              <TabsTrigger value="left" asChild>
                <TooltipButton
                  onClick={() => setProp("textAlign", "left")}
                  className={cn(
                    "h-8 px-3 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-r-none border-r border-slate-300 text-xs",
                    textAlignProp == "left" ? "bg-primary text-white" : ""
                  )}
                  btnContent={<FaAlignLeft size={15} className="font-bold" />}
                  side="top"
                  text="left"
                />
              </TabsTrigger>
              <TabsTrigger value="center" asChild>
                <TooltipButton
                  onClick={() => setProp("textAlign", "center")}
                  className={cn(
                    "h-8 px-3 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-none border-r border-slate-300 text-xs",
                    textAlignProp == "center" ? "bg-primary text-white" : ""
                  )}
                  btnContent={<FaAlignCenter size={15} className="font-bold" />}
                  side="top"
                  text="center"
                />
              </TabsTrigger>
              <TabsTrigger value="right" asChild>
                <TooltipButton
                  onClick={() => setProp("textAlign", "right")}
                  className={cn(
                    "h-8 px-3 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-none border-r border-slate-300 text-xs",
                    textAlignProp == "right" ? "bg-primary text-white" : ""
                  )}
                  btnContent={<FaAlignRight size={15} className="font-bold" />}
                  side="top"
                  text="right"
                />
              </TabsTrigger>
              <TabsTrigger value="justify" asChild>
                <TooltipButton
                  onClick={() => setProp("textAlign", "justify")}
                  className={cn(
                    "h-8 px-3 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-l-none border-slate-300 text-xs",
                    textAlignProp == "justify" ? "bg-primary text-white" : ""
                  )}
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
            <StyleInput
              title="Letter Spacing"
              type="text"
              dropdown
              top="top-[25px]"
              handleVal={(val: string) => setProp("letterSpacing", val)}
              mainval={letterSpaceProp}
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
                if (letterSpaceProp?.includes(el?.value)) {
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
          <div className="">
            <Label className="text-gray-500 text-xs ml-1">Text Transform</Label>
            <Tabs defaultValue="left">
              <TabsList>
                <TabsTrigger value="uppercase" asChild>
                  <TooltipButton
                    onClick={() => setProp("textTransform", "uppercase")}
                    className={cn(
                      "h-8 px-2 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-r-none border-r border-slate-300 text-xs",
                      textTransformProp == "uppercase"
                        ? "bg-primary text-white"
                        : ""
                    )}
                    btnContent={<CaseUpper size={15} className="font-bold" />}
                    side="top"
                    text="uppercase"
                  />
                </TabsTrigger>
                <TabsTrigger value="capitalize" asChild>
                  <TooltipButton
                    onClick={() => setProp("textTransform", "capitalize")}
                    className={cn(
                      "h-8 px-2 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-none border-r border-slate-300 text-xs",
                      textTransformProp == "capitalize"
                        ? "bg-primary text-white"
                        : ""
                    )}
                    btnContent={
                      <CaseSensitive size={15} className="font-bold" />
                    }
                    side="top"
                    text="capitalize"
                  />
                </TabsTrigger>
                <TabsTrigger value="lowercase" asChild>
                  <TooltipButton
                    onClick={() => setProp("textTransform", "lowercase")}
                    className={cn(
                      "h-8 px-2 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-none border-r border-slate-300 text-xs",
                      textTransformProp == "lowercase"
                        ? "bg-primary text-white"
                        : ""
                    )}
                    btnContent={<CaseLower size={15} className="font-bold" />}
                    side="top"
                    text="lowercase"
                  />
                </TabsTrigger>
                <TabsTrigger value="justify" asChild>
                  <TooltipButton
                    onClick={() => setProp("textTransform", "none")}
                    className={cn(
                      "h-8 px-2 w-[25%] data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 rounded-l-none border-slate-300 text-xs",
                      textTransformProp == "none" ? "bg-primary text-white" : ""
                    )}
                    btnContent={<Slash size={15} className="font-bold" />}
                    side="top"
                    text="none"
                  />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        <p className="text-black text-xs font-bold ml-1 mb-1">
          Text Decoration
        </p>
        <div className="flex items-center mb-3 mt-1">
          <div className="mr-2 w-[49%]">
            <Label className="text-gray-500 text-xs ml-1">
              Decoration Line
            </Label>
            <div className="mt-1">
              <InputDropDowns
                value={decorationLineProp}
                setValue={(val: string) => setProp("textDecorationLine", val)}
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
                    value: "none",
                  },
                ]}
                width="w-40"
                customContent={
                  <Button className="h-7 w-[100%] flex justify-between px-2 text-xs bg-white hover:bg-white text-gray-500">
                    <span className="mr-3">{decorationLineProp}</span>
                    <ChevronDown size={12} />
                  </Button>
                }
              />
            </div>
          </div>
          <div className="relative w-[49%]">
            <Label className="text-gray-500 text-xs ml-1">
              Decoration Color
            </Label>
            <Input placeholder="rgb(0,0,0)" className="h-8 pl-8 text-xs" />
            <div className="absolute top-[23px] left-2">
              <ColorPickerModal
                colorProp={decorationColorProp}
                setColorProp={(val) => setProp("textDecorationColor", val)}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-center mb-3 mt-1">
            <div className="relative mr-2 w-[49%]">
              <Label className="text-gray-500 text-xs ml-1">
                Decoration Style
              </Label>
              <div className="mt-1">
                <InputDropDowns
                  value={decorationStyleProp}
                  setValue={(val: string) =>
                    setProp("textDecorationStyle", val)
                  }
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
                      <span className="mr-3">{decorationStyleProp}</span>
                      <ChevronDown size={12} />
                    </Button>
                  }
                />
              </div>
            </div>
            <div className="relative w-[49%]">
              <StyleInput
                title="Decoration Thickness"
                type="text"
                dropdown
                top="top-[25px]"
                handleVal={(val: string) =>
                  setProp("textDecorationThickness", val)
                }
                mainval={decorationThicknessProp}
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
                  if (decorationThicknessProp?.includes(el?.value)) {
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
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default StyleText;
