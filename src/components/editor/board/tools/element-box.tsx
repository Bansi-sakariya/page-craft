"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import InsertSidebarToggleContext from "@/context/insert-sidebar-toggle-context";
import { cn } from "@/lib/utils";
import React, { useContext, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { DivPlaceholder } from "../../elements/basic/div";
import { HOnePlaceholder } from "../../elements/typography/h-one";
import { HTwoPlaceholder } from "../../elements/typography/h-two";
import { HThreePlaceholder } from "../../elements/typography/h-three";
import { HFourPlaceholder } from "../../elements/typography/h-four";
import { HFivePlaceholder } from "../../elements/typography/h-five";
import { HSixPlaceholder } from "../../elements/typography/h-six";

const ElementsToolbox = () => {
  const { isOpen, setIsOpen } = useContext(InsertSidebarToggleContext);
  const [elementType, setElementType] = useState("basic");

  return (
    <div
      className={cn(
        "bg-gray-50 w-[35%] h-[100%] fixed z-50 border-r border-gray-300 transition-all duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-[35rem]"
      )}
    >
      <div className="p-4 border-b border-gray-300 flex justify-between items-center">
        <h3 className="text-xl font-semibold">Insert Elements</h3>
        <div className="flex items-center">
          <div className="relative mr-3">
            <Input placeholder="Search" className="pl-8" />
            <IoSearch className="absolute top-3 left-2 text-gray-400" />
          </div>
          <Button className="h-8 w-8" onClick={() => setIsOpen(false)}>
            <p className="text-slate-100 text-xl font-bold">
              <IoClose />
            </p>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div>
          <ScrollArea className="border-r border-gray-300 h-[80vh]">
            <p className="px-4 pt-3 py-2 text-xs text-muted-foreground">
              HTML Elements
            </p>
            <ul className="px-2 mb-2">
              <li className="p-2 mb-1 text-sm bg-primary text-white hover:bg-primary/90 rounded-md cursor-pointer">
                Basic
              </li>
              <li className="p-2 mb-1 text-sm hover:bg-slate-100 rounded-md cursor-pointer">
                Typography
              </li>
              <li className="p-2 mb-1 text-sm hover:bg-slate-100 rounded-md cursor-pointer">
                Forms
              </li>
              <li className="p-2 mb-1 text-sm hover:bg-slate-100 rounded-md cursor-pointer">
                All Elements
              </li>
            </ul>
            <p className="px-4 py-3 text-xs text-muted-foreground ">Media</p>
            <ul className="px-2 mb-2">
              <li className="p-2 mb-1 text-sm hover:bg-slate-100 rounded-md cursor-pointer">
                Images
              </li>
              <li className="p-2 mb-1 text-sm hover:bg-slate-100 rounded-md cursor-pointer">
                Icons
              </li>
            </ul>
            <p className="px-4 py-3 text-xs text-muted-foreground">
              Components
            </p>
            <ul className="px-2 mb-2">
              <li className="p-2 mb-1 text-sm hover:bg-slate-100 rounded-md cursor-pointer">
                Menu
              </li>
              <li className="p-2 mb-1 text-sm hover:bg-slate-100 rounded-md cursor-pointer">
                Sections
              </li>
              <li className="p-2 mb-1 text-sm hover:bg-slate-100 rounded-md cursor-pointer">
                Containers
              </li>
              <li className="p-2 mb-1 text-sm hover:bg-slate-100 rounded-md cursor-pointer">
                Text
              </li>
              <li className="p-2 mb-1 text-sm hover:bg-slate-100 rounded-md cursor-pointer">
                Buttons
              </li>
              <li className="p-2 mb-1 text-sm hover:bg-slate-100 rounded-md cursor-pointer">
                Components
              </li>
            </ul>
          </ScrollArea>
        </div>
        <div className="col-span-2">
          <ScrollArea className="h-[80vh]">
            <div className="p-3">
              <div className="grid gap-x-3 gap-y-3 grid-cols-4">
                <HOnePlaceholder />
                <HTwoPlaceholder />
                <HThreePlaceholder />
                <HFourPlaceholder />
                <HFivePlaceholder />
                <HSixPlaceholder />
                <DivPlaceholder />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default ElementsToolbox;
