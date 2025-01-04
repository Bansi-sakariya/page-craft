import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import InputDropDowns from "../input-dropdowns";
import { cn } from "@/lib/utils";

type StyleInputProps = {
  title: string;
  type: string;
  top?: string;
  dropdown: boolean;
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
  data,
}: StyleInputProps) => {
  const [value, setValue] = useState("");
  const [dataVal, setDataVal] = useState<string>("");

  useEffect(() => {
    const dataValue = data?.find((el) => el?.selected == true)?.value as string;
    const mainValue = mainval?.split(dataValue)[0];
    console.log(mainValue, mainval);
    setValue(mainValue);
    setDataVal(dataValue);
  }, []);

  console.log(dataVal);

  return (
    <div className="mr-2 relative group">
      <Label className="text-gray-500 text-xs ml-1">{title}</Label>
      <Input
        type={type}
        placeholder="auto"
        className="h-8"
        value={value}
        onChange={(e) => {
          if (dataVal != "auto") {
            setValue(e.target.value);
            handleVal(e.target.value + dataVal);
          } else {
            setValue("0");
            handleVal(0);
          }
        }}
      />
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
