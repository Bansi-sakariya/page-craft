import ColorPickerModal from "@/components/common/color-picker-modal";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { IoLockClosed } from "react-icons/io5";
import InputDropDowns from "../input-dropdowns";
import StyleInput from "./style-input";
import { MdLock } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";

type StyleBordersCornersProps = {
  borderTopWidthProp: string;
  borderTopColorProp: string;
  borderRightWidthProp: string;
  borderRightColorProp: string;
  borderBottomWidthProp: string;
  borderBottomColorProp: string;
  borderLeftWidthProp: string;
  borderLeftColorProp: string;
  borderTopLeftProp: string;
  borderTopRightProp: string;
  borderBottomRightProp: string;
  borderBottomLeftProp: string;
  setProp: (key: string, val: string) => void;
};

const StyleBordersCorners = ({
  borderTopWidthProp,
  borderTopColorProp,
  borderRightWidthProp,
  borderRightColorProp,
  borderBottomWidthProp,
  borderBottomColorProp,
  borderLeftWidthProp,
  borderLeftColorProp,
  borderTopLeftProp,
  borderTopRightProp,
  borderBottomRightProp,
  borderBottomLeftProp,
  setProp,
}: StyleBordersCornersProps) => {
  const [borderWidthLock, setBorderWidthLock] = useState(true);
  const [borderCornerLock, setBorderCornerLock] = useState(true);

  console.log(borderTopWidthProp);

  return (
    <AccordionItem value="border-corners">
      <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
        Border & Corners
      </AccordionTrigger>
      <AccordionContent className="p-2">
        <div className="mb-3">
          <p className="text-black flex items-center justify-between text-xs font-bold ml-1 mb-1">
            <span>Borders</span>
            <Button
              onClick={() => setBorderWidthLock(!borderWidthLock)}
              className="bg-transparent hover:bg-transparent h-6 w-6 p-0 text-gray-800"
            >
              {borderWidthLock ? (
                <MdLock size={40} />
              ) : (
                <IoMdUnlock size={40} />
              )}
            </Button>
          </p>
          <div className="flex items-center mb-2">
            <div className="mr-2 relative">
              <StyleInput
                placeholder="0"
                top="top-[25px]"
                title="Top"
                type="text"
                dropdown
                color
                handleVal={(val: string) => {
                  if (borderWidthLock) {
                    setProp("borderTopWidth", val);
                    setProp("borderRightWidth", val);
                    setProp("borderBottomWidth", val);
                    setProp("borderLeftWidth", val);
                  } else {
                    setProp("borderTopWidth", val);
                  }
                }}
                mainval={borderTopWidthProp}
                colorProp={borderTopColorProp}
                setColorProp={(val: string) => setProp("borderTopColor", val)}
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
                  if (borderTopWidthProp?.includes(el?.value)) {
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
                top="top-[25px]"
                type="text"
                placeholder="0"
                dropdown
                color
                handleVal={(val: string) => {
                  if (borderWidthLock) {
                    setProp("borderTopWidth", val);
                    setProp("borderRightWidth", val);
                    setProp("borderBottomWidth", val);
                    setProp("borderLeftWidth", val);
                  } else {
                    setProp("borderRightWidth", val);
                  }
                }}
                mainval={borderRightWidthProp}
                colorProp={borderRightColorProp}
                setColorProp={(val: string) => setProp("borderRightColor", val)}
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
                  if (borderRightWidthProp?.includes(el?.value)) {
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
          <div className="flex items-center mb-2">
            <div className="mr-2 relative">
              <StyleInput
                title="Bottom"
                placeholder="0"
                top="top-[25px]"
                type="text"
                dropdown
                color
                handleVal={(val: string) => {
                  if (borderWidthLock) {
                    setProp("borderTopWidth", val);
                    setProp("borderRightWidth", val);
                    setProp("borderBottomWidth", val);
                    setProp("borderLeftWidth", val);
                  } else {
                    setProp("borderBottomWidth", val);
                  }
                }}
                mainval={borderBottomWidthProp}
                colorProp={borderBottomColorProp}
                setColorProp={(val: string) =>
                  setProp("borderBottomColor", val)
                }
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
                  if (borderBottomWidthProp?.includes(el?.value)) {
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
                title="Left"
                top="top-[25px]"
                type="text"
                placeholder="0"
                dropdown
                color
                handleVal={(val: string) => {
                  if (borderWidthLock) {
                    setProp("borderTopWidth", val);
                    setProp("borderRightWidth", val);
                    setProp("borderBottomWidth", val);
                    setProp("borderLeftWidth", val);
                  } else {
                    setProp("borderLeftWidth", val);
                  }
                }}
                mainval={borderLeftWidthProp}
                colorProp={borderLeftColorProp}
                setColorProp={(val: string) => setProp("borderLeftColor", val)}
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
                  if (borderLeftWidthProp?.includes(el?.value)) {
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
        <div className="mb-3">
          <p className="text-black flex items-center justify-between text-xs font-bold ml-1 mb-1">
            <span>Corners</span>
            <Button
              onClick={() => setBorderCornerLock(!borderCornerLock)}
              className="bg-transparent hover:bg-transparent h-6 w-6 p-0 text-gray-800"
            >
              {borderCornerLock ? (
                <MdLock size={40} />
              ) : (
                <IoMdUnlock size={40} />
              )}
            </Button>
          </p>
          <div className="flex items-center mb-2">
            <div className="mr-2 relative">
              <StyleInput
                title="Top-Left"
                top="top-[25px]"
                type="text"
                placeholder="0"
                dropdown
                handleVal={(val: string) => {
                  if (borderCornerLock) {
                    setProp("borderTopLeftRadius", val);
                    setProp("borderTopRightRadius", val);
                    setProp("borderBottomRightRadius", val);
                    setProp("borderBottomLeftRadius", val);
                  } else {
                    setProp("borderTopLeftRadius", val);
                  }
                }}
                mainval={borderTopLeftProp}
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
                  if (borderTopLeftProp?.includes(el?.value)) {
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
                title="Top-Right"
                top="top-[25px]"
                type="text"
                placeholder="0"
                dropdown
                handleVal={(val: string) => {
                  if (borderCornerLock) {
                    setProp("borderTopLeftRadius", val);
                    setProp("borderTopRightRadius", val);
                    setProp("borderBottomRightRadius", val);
                    setProp("borderBottomLeftRadius", val);
                  } else {
                    setProp("borderTopRightRadius", val);
                  }
                }}
                mainval={borderTopRightProp}
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
                  if (borderTopRightProp?.includes(el?.value)) {
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
          <div className="flex items-center mb-2">
            <div className="mr-2 relative">
              <StyleInput
                title="Bottom-Right"
                top="top-[25px]"
                type="text"
                placeholder="0"
                dropdown
                handleVal={(val: string) => {
                  if (borderCornerLock) {
                    setProp("borderTopLeftRadius", val);
                    setProp("borderTopRightRadius", val);
                    setProp("borderBottomRightRadius", val);
                    setProp("borderBottomLeftRadius", val);
                  } else {
                    setProp("borderBottomRightRadius", val);
                  }
                }}
                mainval={borderBottomRightProp}
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
                  if (borderBottomRightProp?.includes(el?.value)) {
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
                title="Bottom-Left"
                top="top-[25px]"
                type="text"
                placeholder="0"
                dropdown
                handleVal={(val: string) => {
                  if (borderCornerLock) {
                    setProp("borderTopLeftRadius", val);
                    setProp("borderTopRightRadius", val);
                    setProp("borderBottomRightRadius", val);
                    setProp("borderBottomLeftRadius", val);
                  } else {
                    setProp("borderBottomLeftRadius", val);
                  }
                }}
                mainval={borderBottomLeftProp}
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
                  if (borderBottomLeftProp?.includes(el?.value)) {
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

export default StyleBordersCorners;
