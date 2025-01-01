"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

const ColorPickerModal = () => {
  const [color, setColor] = useColor("none");

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            className="h-5 w-4 px-2.5 rounded-sm"
            style={{ backgroundColor: color.hex }}
          ></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[5rem] w-72 p-0">
          <ColorPicker hideInput={["hsv"]} color={color} onChange={setColor} />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ColorPickerModal;
