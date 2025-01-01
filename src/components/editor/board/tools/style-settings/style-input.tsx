import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import InputDropDowns from "../input-dropdowns";

type StyleInputProps = {
  title: string;
  type: string;
  dropdown: boolean;
  handleVal: Function;
  data: Array<{
    label: JSX.Element;
    value: string;
  }>;
};

const StyleInput = ({
  title,
  type,
  dropdown,
  handleVal,
  data,
}: StyleInputProps) => {
  const [value, setValue] = useState("");
  const [dataVal, setDataVal] = useState("");

  return (
    <div className="mr-2 relative group">
      <Label className="text-gray-500 text-xs ml-1">{title}</Label>
      <Input
        type={type}
        placeholder="auto"
        className="h-8"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleVal(e.target.value + dataVal);
        }}
      />
      {dropdown && (
        <div className="absolute top-[22px] right-1 flex items-center justify-center">
          <InputDropDowns
            data={data}
            value={dataVal}
            setValue={(val: string) => setDataVal(val)}
          />
        </div>
      )}
    </div>
  );
};

export default StyleInput;
