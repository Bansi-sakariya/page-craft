import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import StyleInput from "./style-input";

type StyleSizeProps = {
  widthProp: string;
  heightProp: string;
  minWidthProp: string;
  minHeightProp: string;
  maxWidthProp: string;
  maxHeightProp: string;
  setProp: (key: string, val: string) => void;
};

const StyleSize = ({
  widthProp,
  heightProp,
  minWidthProp,
  minHeightProp,
  maxWidthProp,
  maxHeightProp,
  setProp,
}: StyleSizeProps) => {
  return (
    <>
      <AccordionItem value="size">
        <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
          Size
        </AccordionTrigger>
        <AccordionContent className="p-2 text-xs">
          <div className="py-2">
            <div className="flex justify-between mb-4">
              <div className="mr-2 relative group">
                <StyleInput
                  title={"Width"}
                  type="text"
                  dropdown
                  handleVal={(val: string) => setProp("width", val)}
                  mainval={widthProp}
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
                  ]?.map((el) => {
                    if (widthProp?.includes(el?.value)) {
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
                  title={"Height"}
                  type="text"
                  dropdown
                  mainval={heightProp}
                  handleVal={(val: string) => setProp("height", val)}
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
                  ]?.map((el) => {
                    if (heightProp?.includes(el?.value)) {
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
            <div className="flex justify-between mb-4">
              <div className="mr-2 relative">
                <StyleInput
                  title={"Min. Width"}
                  type="text"
                  dropdown
                  mainval={minWidthProp}
                  handleVal={(val: string) => setProp("minWidth", val)}
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
                  ]?.map((el) => {
                    if (minWidthProp?.includes(el?.value)) {
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
                  title={"Min. Height"}
                  type="text"
                  dropdown
                  mainval={minHeightProp}
                  handleVal={(val: string) => setProp("minHeight", val)}
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
                  ]?.map((el) => {
                    if (minHeightProp?.includes(el?.value)) {
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
            <div className="flex justify-between mb-4">
              <div className="mr-2 relative">
                <StyleInput
                  title={"Max Width"}
                  type="text"
                  dropdown
                  mainval={maxWidthProp}
                  handleVal={(val: string) => setProp("maxWidth", val)}
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
                  ]?.map((el) => {
                    if (maxWidthProp?.includes(el?.value)) {
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
                  title={"Max Height"}
                  type="text"
                  dropdown
                  mainval={maxHeightProp}
                  handleVal={(val: string) => setProp("maxHeight", val)}
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
                  ]?.map((el) => {
                    if (maxHeightProp?.includes(el?.value)) {
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
    </>
  );
};

export default StyleSize;
