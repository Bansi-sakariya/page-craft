import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { MdLock } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import InputDropDowns from "../input-dropdowns";
import StyleInput from "./style-input";

type StylePaddingMarginProps = {
  paddingTopProp: string;
  paddingBottomProp: string;
  paddingLeftProp: string;
  paddingRightProp: string;
  marginTopProp: string;
  marginBottomProp: string;
  marginLeftProp: string;
  marginRightProp: string;
  setProp: (key: string, val: string) => void;
};

const StylePaddingMargin = ({
  paddingTopProp,
  paddingBottomProp,
  paddingLeftProp,
  paddingRightProp,
  marginTopProp,
  marginBottomProp,
  marginLeftProp,
  marginRightProp,
  setProp,
}: StylePaddingMarginProps) => {
  const [paddingLocked, setPaddingLocked] = useState(true);
  const [marginLocked, setMarginLocked] = useState(true);

  return (
    <AccordionItem value={"padding-margin"}>
      <AccordionTrigger className="hover:no-underline bg-slate-200 p-2 px-4 border-t border-slate-300 text-xs">
        Padding & Margin
      </AccordionTrigger>
      <AccordionContent className="p-2 text-xs">
        <div className="mb-3">
          <div className="flex justify-between items-center">
            <Label className="text-gray-500 text-xs ml-1">Padding</Label>
            <Button
              className="h-6 w-6 p-1 bg-transparent text-gray-500 hover:bg-transparent"
              onClick={() => setPaddingLocked(!paddingLocked)}
            >
              {paddingLocked ? <MdLock size={40} /> : <IoMdUnlock size={40} />}
            </Button>
          </div>
          <div className="flex items-center">
            <div className="relative mr-1">
              <StyleInput
                title="Top"
                type="text"
                placeholder="0"
                dropdown
                handleVal={(val: string) => {
                  if (paddingLocked) {
                    setProp("paddingTop", val);
                    setProp("paddingBottom", val);
                    setProp("paddingLeft", val);
                    setProp("paddingRight", val);
                  } else {
                    setProp("paddingTop", val);
                  }
                }}
                mainval={paddingTopProp}
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
                  if (paddingTopProp?.includes(el?.value)) {
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
            <div className="relative mr-1">
              <StyleInput
                title="Right"
                type="text"
                placeholder="0"
                dropdown
                handleVal={(val: string) => {
                  if (paddingLocked) {
                    setProp("paddingTop", val);
                    setProp("paddingBottom", val);
                    setProp("paddingLeft", val);
                    setProp("paddingRight", val);
                  } else {
                    setProp("paddingRight", val);
                  }
                }}
                mainval={paddingRightProp}
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
                  if (paddingRightProp?.includes(el?.value)) {
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
            <div className="relative mr-1">
              <StyleInput
                title="Bottom"
                type="text"
                placeholder="0"
                dropdown
                handleVal={(val: string) => {
                  if (paddingLocked) {
                    setProp("paddingTop", val);
                    setProp("paddingBottom", val);
                    setProp("paddingLeft", val);
                    setProp("paddingRight", val);
                  } else {
                    setProp("paddingBottom", val);
                  }
                }}
                mainval={paddingBottomProp}
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
                  if (paddingBottomProp?.includes(el?.value)) {
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
            <div className="relative mr-1">
              <StyleInput
                title="Left"
                type="text"
                placeholder="0"
                dropdown
                handleVal={(val: string) => {
                  if (paddingLocked) {
                    setProp("paddingTop", val);
                    setProp("paddingBottom", val);
                    setProp("paddingLeft", val);
                    setProp("paddingRight", val);
                  } else {
                    setProp("paddingLeft", val);
                  }
                }}
                mainval={paddingLeftProp}
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
                  if (paddingLeftProp?.includes(el?.value)) {
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
          <div className="flex justify-between items-center">
            <Label className="text-gray-500 text-xs ml-1">Margin</Label>
            <Button
              className="h-6 w-6 p-1 bg-transparent text-gray-500 hover:bg-transparent"
              onClick={() => setMarginLocked(!marginLocked)}
            >
              {marginLocked ? <MdLock size={40} /> : <IoMdUnlock size={40} />}
            </Button>
          </div>
          <div className="flex items-center">
            <div className="relative mr-1">
              <StyleInput
                title="Top"
                type="text"
                placeholder="0"
                dropdown
                handleVal={(val: string) => {
                  if (marginLocked) {
                    setProp("marginTop", val);
                    setProp("marginBottom", val);
                    setProp("marginLeft", val);
                    setProp("marginRight", val);
                  } else {
                    setProp("marginTop", val);
                  }
                }}
                mainval={marginTopProp}
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
                  if (marginTopProp?.includes(el?.value)) {
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
            <div className="relative mr-1">
              <StyleInput
                title="Right"
                type="text"
                placeholder="0"
                dropdown
                handleVal={(val: string) => {
                  if (marginLocked) {
                    setProp("marginTop", val);
                    setProp("marginBottom", val);
                    setProp("marginLeft", val);
                    setProp("marginRight", val);
                  } else {
                    setProp("marginRight", val);
                  }
                }}
                mainval={marginRightProp}
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
                  if (marginRightProp?.includes(el?.value)) {
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
            <div className="relative mr-1">
              <StyleInput
                title="Bottom"
                type="text"
                placeholder="0"
                dropdown
                handleVal={(val: string) => {
                  if (marginLocked) {
                    setProp("marginTop", val);
                    setProp("marginBottom", val);
                    setProp("marginLeft", val);
                    setProp("marginRight", val);
                  } else {
                    setProp("marginBottom", val);
                  }
                }}
                mainval={marginBottomProp}
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
                  if (marginBottomProp?.includes(el?.value)) {
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
            <div className="relative mr-1">
              <StyleInput
                title="Left"
                type="text"
                placeholder="0"
                dropdown
                handleVal={(val: string) => {
                  if (marginLocked) {
                    setProp("marginTop", val);
                    setProp("marginBottom", val);
                    setProp("marginLeft", val);
                    setProp("marginRight", val);
                  } else {
                    setProp("marginLeft", val);
                  }
                }}
                mainval={marginLeftProp}
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
                  if (marginLeftProp?.includes(el?.value)) {
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

export default StylePaddingMargin;
