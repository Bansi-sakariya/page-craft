"use client";

import React, { useContext, useState } from "react";
import { Check, ChevronDown, ChevronsDown, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FormSelectSearchProps {
  data: Array<{
    label: string | JSX.Element;
    value: string | undefined;
  }>;
  emptyText: string;
  value?: string | undefined;
  setValue: Function;
  margin?: string;
  width?: string;
  inputClassName?: string;
  btnClassName?: string;
}

const FormSelectSearch = ({
  data,
  emptyText,
  value,
  setValue,
  margin,
  width,
  inputClassName,
  btnClassName,
}: FormSelectSearchProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Popover open={open} onOpenChange={() => setOpen(!open)}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-[100%] justify-between bg-white text-gray-500",
              btnClassName
            )}
            style={{
              marginTop: margin ? "5px" : "",
            }}
          >
            {value
              ? data.find((el) => el.value === value)?.label
              : "Please Choose..."}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={cn(
            "p-0 w-inherit",
            width ? width : " w-[350px] border-slate-100"
          )}
        >
          <Command className={cn("bg-white border-slate-100")}>
            <CommandInput placeholder="Search..." className={inputClassName} />
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {data?.map((el) => (
                  <CommandItem
                    key={el?.value}
                    value={el?.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    className="text-black hover:cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === el?.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {el?.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default FormSelectSearch;
