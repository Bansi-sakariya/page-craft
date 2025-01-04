"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColorPicker, IColor, useColor } from "react-color-palette";
import "react-color-palette/css";

const ColorPickerModal = ({
  colorProp,
  setColorProp,
}: {
  colorProp: string;
  setColorProp: (val: string) => void;
}) => {
  const [color, setColor] = useColor("none");

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            className="h-5 w-4 px-2.5 rounded-sm"
            style={{ backgroundColor: colorProp }}
          ></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[5rem] w-72 p-0">
          <ColorPicker
            hideInput={["hsv"]}
            color={color}
            onChange={(val: IColor) => {
              setColor(val);
              setColorProp(val.hex);
            }}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ColorPickerModal;
