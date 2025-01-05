"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import FormSelectSearch from "@/components/common/form-select-search";
import { StretchHorizontal, StretchVertical } from "lucide-react";
import { FaSliders } from "react-icons/fa6";
import {
  MdRectangle,
  MdViewArray,
  MdViewCarousel,
  MdViewColumn,
  MdViewModule,
  MdDoNotDisturb,
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
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import "react-color-palette/css";
import CustomTabs from "../custom-tabs";
import { Input } from "@/components/ui/input";
import InputDropDowns from "../input-dropdowns";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StyleInput from "./style-input";
import { cn } from "@/lib/utils";

type StyleDisplayProps = {
  displayProp: "block" | "inline-block" | "inline" | "none" | "flex" | "grid";
  alignPlaceItemsProp: string;
  justifyPlaceItemsProp: string;
  alignPlaceContentProp: string;
  justifyPlaceContentProp: string;
  overflowProp: string;
  grid: {
    rowProp: string;
    columnProp: string;
    autoFlowProp: string;
    rowGapProp: string;
    columnGapProp: string;
  };
  flex: {
    flexDirectionProp: string;
    flexWrapProp: string;
  };
  gridChild: {
    rowStartProp: string;
    columnStartProp: string;
    rowEndProp: string;
    columnEndProp: string;
    alignSelfProp: string;
    justifySelfProp: string;
    orderProp: string;
  };
  flexChild: {
    flexGrowProp: string;
    flexShrinkProp: string;
    basisProp: string;
    alignSelfProp: string;
    orderProp: string;
  };
  setProp: (key: string, val: string) => void;
};

const StyleDisplay = ({
  displayProp,
  setProp,
  alignPlaceItemsProp,
  justifyPlaceItemsProp,
  alignPlaceContentProp,
  justifyPlaceContentProp,
  overflowProp,
  grid,
  flex,
  gridChild,
  flexChild,
}: StyleDisplayProps) => {
  let displayArray = [
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
            <MdViewCarousel size={16} className="mr-2 text-gray-600" />
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
            <MdViewColumn size={16} className="mr-2 text-gray-600" />
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
            <MdViewModule size={16} className="mr-2 text-gray-600" />
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
            <MdDoNotDisturb size={16} className="mr-2 text-gray-600" />
            <span className="text-gray-600">none</span>
          </div>
        </>
      ),
      value: "none",
    },
  ]?.map((el) => {
    if (displayProp?.includes(el?.value)) {
      return {
        ...el,
        selected: true,
      };
    } else {
      return {
        ...el,
      };
    }
  });

  return (
    <>
      <AccordionItem value="display">
        <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
          Display
        </AccordionTrigger>
        <AccordionContent className="p-2 text-xs">
          <FormSelectSearch
            margin="mt-1 mb-3"
            btnClassName="h-8 hover:bg-white"
            inputClassName="h-9"
            data={displayArray}
            emptyText="No keyword found"
            width="w-[250px]"
            setValue={(val: string) => setProp("display", val)}
            value={displayProp}
          />
          {displayProp == "flex" && (
            <>
              <p className="text-black text-xs font-bold ml-1 mb-1 mt-3">
                Flex Flow
              </p>
              <div className="mb-3">
                <Label className="text-gray-500 text-xs ml-1">
                  Flex Direction
                </Label>
                <div className="flex items-center mt-1">
                  <div className="mr-2">
                    <CustomTabs
                      value={flex.flexDirectionProp}
                      setValue={(val: string) => {
                        console.log(val);
                        setProp("flexDirection", val);
                      }}
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
                          value: "row",
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
                          value: "column",
                          padding: "px-2.5",
                        },
                      ]}
                      defaultValue={flex.flexDirectionProp}
                    />
                  </div>
                  <div>
                    <Button
                      onClick={() => {
                        if (flex.flexDirectionProp == "row-reverse") {
                          setProp("flexDirection", "row");
                        } else if (flex.flexDirectionProp == "column-reverse") {
                          setProp("flexDirection", "column");
                        } else {
                          if (flex.flexDirectionProp == "row") {
                            setProp("flexDirection", "row-reverse");
                          }
                          if (flex.flexDirectionProp == "column") {
                            setProp("flexDirection", "column-reverse");
                          }
                        }
                      }}
                      className={cn(
                        "h-8 w-8 p-0 bg-white text-slate-800 hover:bg-slate-200 text-xs",
                        flex.flexDirectionProp?.includes("reverse")
                          ? "bg-primary text-white"
                          : ""
                      )}
                    >
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
                      value={flex.flexWrapProp}
                      setValue={(val: string) => setProp("flexWrap", val)}
                      data={[
                        {
                          label: <>Wrap</>,
                          value: "wrap",
                          padding: "px-2.5",
                          width: "w-[50%]",
                        },
                        {
                          label: <>No Wrap</>,
                          value: "nowrap",
                          padding: "px-2.5",
                          width: "w-[50%]",
                        },
                      ]}
                      width="w-[210px]"
                      tablistwidth="w-[100%]"
                      defaultValue={flex.flexWrapProp}
                    />
                  </div>
                  <div>
                    <Button
                      disabled={flex.flexWrapProp == "nowrap"}
                      onClick={() => {
                        if (flex.flexWrapProp == "wrap-reverse") {
                          setProp("flexWrap", "wrap");
                        } else {
                          if (flex.flexWrapProp == "wrap") {
                            setProp("flexWrap", "wrap-reverse");
                          }
                        }
                      }}
                      className={cn(
                        "h-8 w-8 p-0 bg-white text-slate-800 hover:bg-slate-200 text-xs",
                        flex.flexWrapProp?.includes("reverse")
                          ? "bg-primary text-white"
                          : ""
                      )}
                    >
                      <LuArrowRightLeft size={15} />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
          {displayProp == "grid" && (
            <>
              <p className="text-black text-xs font-bold ml-1 mb-1 mt-3">
                Grid
              </p>
              <div className="mb-3">
                <div className="flex items-center mb-3">
                  <div className="mr-2">
                    <Label className="text-gray-500 text-xs ml-1">Row</Label>
                    <Input placeholder="" className="h-8" />
                  </div>
                  <div>
                    <Label className="text-gray-500 text-xs ml-1">Column</Label>
                    <Input placeholder="" className="h-8" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <Label className="text-gray-500 text-xs ml-1">Auto Flow</Label>
                <div className="flex items-center mt-1">
                  <div className="mr-2">
                    <CustomTabs
                      data={[
                        {
                          label: (
                            <>
                              <span className="mr-1.5">Column</span>
                            </>
                          ),
                          value: "grid-flow-col",
                          padding: "px-2.5",
                        },
                        {
                          label: (
                            <>
                              <span className="mr-1.5">Row</span>
                            </>
                          ),
                          value: "grid-flow-row",
                          padding: "px-2.5",
                        },
                      ]}
                      defaultValue={grid.autoFlowProp}
                    />
                  </div>
                  <div>
                    <Button
                      disabled
                      className="h-8 w-8 p-0 bg-white text-slate-800 hover:bg-slate-200 text-xs"
                    >
                      Dense
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-black text-xs font-bold ml-1 mb-1">Gap</p>
                <div className="flex items-center mb-3">
                  <div className="mr-2">
                    <StyleInput
                      title="Row"
                      type="text"
                      handleVal={(val: string) => setProp("rowGap", val)}
                      mainval=""
                      dropdown
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
                          label: <>vh</>,
                          value: "vh",
                        },
                        {
                          label: <>vw</>,
                          value: "vw",
                        },
                        {
                          label: <>none</>,
                          value: "auto",
                        },
                      ]?.map((el) => {
                        if (grid.rowGapProp?.includes(el?.value)) {
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
                  <div>
                    <div className="mr-2">
                      <StyleInput
                        title="Column"
                        type="text"
                        handleVal={(val: string) => setProp("columnGap", val)}
                        mainval=""
                        dropdown
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
                            label: <>vh</>,
                            value: "vh",
                          },
                          {
                            label: <>vw</>,
                            value: "vw",
                          },
                          {
                            label: <>none</>,
                            value: "auto",
                          },
                        ]?.map((el) => {
                          if (grid.columnGapProp?.includes(el?.value)) {
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
              </div>
            </>
          )}
          {(displayProp != "block" ||
            displayProp != "inline-block" ||
            displayProp != "inline" ||
            displayProp != "none") && (
            <p className="text-black text-xs font-bold ml-1 mb-1 mt-3">
              Place Items
            </p>
          )}
          {(displayProp != "block" ||
            displayProp != "inline-block" ||
            displayProp != "inline" ||
            displayProp != "none") && (
            <div className="mb-3">
              <Label className="text-gray-500 text-xs ml-1">Align</Label>
              <CustomTabs
                value={alignPlaceItemsProp}
                setValue={(val: string) => setProp("alignItems", val)}
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
                defaultValue={alignPlaceItemsProp}
                width="w-[100%]"
                tablistwidth="w-[100%]"
              />
            </div>
          )}
          {(displayProp != "block" ||
            displayProp != "inline-block" ||
            displayProp != "inline" ||
            displayProp != "flex" ||
            displayProp != "none") && (
            <div className="mb-3">
              <Label className="text-gray-500 text-xs ml-1">Justify</Label>
              <CustomTabs
                value={justifyPlaceItemsProp}
                setValue={(val: string) => setProp("justifyItems", val)}
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
                    label: (
                      <StretchHorizontal size={15} className="font-bold" />
                    ),
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
                defaultValue={justifyPlaceItemsProp}
                width="w-[100%]"
                tablistwidth="w-[100%]"
              />
            </div>
          )}
          {displayProp != "none" && (
            <p className="text-black text-xs font-bold ml-1 mb-1">
              Place Contents
            </p>
          )}
          {displayProp != "none" && (
            <div className="mb-3">
              <Label className="text-gray-500 text-xs ml-1">Align</Label>
              <CustomTabs
                value={alignPlaceContentProp}
                setValue={(val: string) => setProp("alignContent", val)}
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
                defaultValue={alignPlaceContentProp}
                width="w-[100%]"
                tablistwidth="w-[100%]"
              />
            </div>
          )}
          {(displayProp != "block" ||
            displayProp != "inline-block" ||
            displayProp != "inline" ||
            displayProp != "none") && (
            <div className="mb-3">
              <Label className="text-gray-500 text-xs ml-1">Justify</Label>
              <CustomTabs
                value={justifyPlaceContentProp}
                setValue={(val: string) => setProp("justifyContent", val)}
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
                defaultValue={justifyPlaceContentProp}
                width="w-[100%]"
                tablistwidth="w-[100%]"
              />
            </div>
          )}
          <p className="text-black text-xs font-bold ml-1 mb-1">Overflow</p>
          <div className="mb-3">
            <CustomTabs
              value={overflowProp}
              setValue={(val: string) => setProp("overflow", val)}
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
                  label: <>Auto</>,
                  value: "auto",
                  width: "w-[25%]",
                  tooltip: true,
                },
              ]}
              defaultValue={overflowProp}
              width="w-[100%]"
              tablistwidth="w-[100%]"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default StyleDisplay;
