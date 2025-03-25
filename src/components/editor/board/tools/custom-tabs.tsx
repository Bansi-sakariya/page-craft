"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import TooltipButton from "@/components/common/TooltipButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CustomTabsProps {
  data: Array<{
    label: JSX.Element;
    value: string;
    padding?: string;
    width?: string;
    tooltip?: boolean;
  }>;
  defaultValue: string;
  width?: string;
  tablistwidth?: string;
  value: string;
  setValue: (val: string) => void;
}

const CustomTabs = ({
  data,
  defaultValue,
  width,
  tablistwidth,
  value,
  setValue = () => {},
}: CustomTabsProps) => {
  return (
    <>
      <Tabs defaultValue={defaultValue} className={width}>
        <TabsList className={tablistwidth}>
          {data?.map((el, index) => {
            return (
              <TabsTrigger key={el?.value} value={el?.value} asChild>
                {el?.tooltip ? (
                  <TooltipButton
                    className={cn(
                      "h-8 data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 border-slate-300 text-xs",
                      el?.padding ? el?.padding : "px-3",
                      el?.width,
                      index == 0
                        ? "rounded-r-none border-r"
                        : index + 1 == data?.length
                        ? "rounded-l-none"
                        : "rounded-none border-r",
                      value == el?.value ? "bg-primary text-white" : ""
                    )}
                    onClick={() => setValue(el?.value)}
                    btnContent={el?.label}
                    side="top"
                    text={el?.value}
                  />
                ) : (
                  <Button
                    className={cn(
                      "h-8 data-[state=active]:bg-primary data-[state=active]:text-white bg-white text-slate-800 hover:bg-slate-200 hover:text-gray-800 border-slate-300 text-xs",
                      el?.padding ? el?.padding : "px-3",
                      el?.width,
                      index == 0
                        ? "rounded-r-none border-r"
                        : index + 1 == data?.length
                        ? "rounded-l-none"
                        : "rounded-none border-r",
                      value == el?.value ? "bg-primary text-white" : ""
                    )}
                    onClick={() => setValue(el?.value)}
                  >
                    {el?.label}
                  </Button>
                )}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </>
  );
};

export default CustomTabs;
