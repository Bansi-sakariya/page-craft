import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import InputDropDowns from "../input-dropdowns";
import { cn } from "@/lib/utils";
import ColorPickerModal from "@/components/common/color-picker-modal";

type StyleInputProps = {
  title: string;
  type: string;
  top?: string;
  dropdown: boolean;
  placeholder?: string;
  color?: boolean;
  colorProp?: string;
  setColorProp?: (val: string) => void;
  handleVal: Function;
  mainval: string;
  data: Array<{
    label: JSX.Element;
    value: string;
    selected?: boolean;
  }>;
};

const StyleInput = ({
  title,
  type,
  top,
  dropdown,
  handleVal,
  mainval,
  color,
  colorProp,
  setColorProp,
  placeholder,
  data,
}: StyleInputProps) => {
  const [value, setValue] = useState("");
  const [dataVal, setDataVal] = useState<string>("px");

  console.log("Style Input Vals: ", mainval);

  useEffect(() => {
    const dataValue = data?.find((el) => el?.selected == true)?.value as string;
    let mainValue = "";
    if (mainval?.includes("undefined")) {
      mainValue = mainval?.split("px")[0];
    } else {
      mainValue = mainval?.split(dataValue)[0];
    }
    setValue(mainValue);
    setDataVal(dataValue);
  }, [mainval]);

  return (
    <div className="mr-1 relative group">
      <Label className="text-gray-500 text-xs ml-1">{title}</Label>
      <Input
        type={type}
        placeholder={placeholder ? placeholder : "auto"}
        className={cn("h-8 text-xs", color ? "pl-8" : "")}
        value={value}
        onChange={(e) => {
          if (dataVal != "auto") {
            const val = dataVal == undefined ? "" : dataVal;
            setValue(e.target.value);
            handleVal(e.target.value + val);
          } else {
            setValue("0");
            handleVal(0);
          }
        }}
      />
      {color && (
        <div className="absolute top-[26px] left-1.5">
          <ColorPickerModal
            colorProp={colorProp}
            setColorProp={(val: string) => setColorProp(val)}
          />
        </div>
      )}
      {dropdown && (
        <div
          className={cn(
            "absolute top-[22px] right-1 flex items-center justify-center",
            top
          )}
        >
          <InputDropDowns
            data={data}
            value={dataVal}
            setValue={(val: string) => {
              if (val == "auto") {
                setValue("0");
                setDataVal("");
                handleVal(0);
              } else {
                setDataVal(val);
                handleVal(value + val);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default StyleInput;
