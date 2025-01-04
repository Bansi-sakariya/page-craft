"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown } from "lucide-react";

interface InputDropDownsProps {
  data: Array<{
    label: JSX.Element;
    value: string;
  }>;
  width?: string;
  height?: string;
  value?: string;
  customContent?: JSX.Element;
  setValue: Function;
}

const InputDropDowns = ({
  data,
  width,
  height,
  customContent,
  value,
  setValue,
}: InputDropDownsProps) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {customContent ? (
            customContent
          ) : (
            <Button className="p-1 h-5 w-5 bg-white hover:bg-white text-black">
              {value ? <p className="">{value}</p> : <ChevronDown size={20} />}
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={cn("min-w-[6rem] ml-2", width ? width : "w-20")}
        >
          <ScrollArea className={height}>
            {data?.map((el, index) => {
              return (
                <DropdownMenuItem
                  onClick={() => setValue(el?.value)}
                  key={index + 1}
                  className="cursor-pointer"
                >
                  {el?.label}
                </DropdownMenuItem>
              );
            })}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default InputDropDowns;
