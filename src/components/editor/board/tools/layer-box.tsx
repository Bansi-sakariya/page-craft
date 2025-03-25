"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import InsertLayerContext from "@/context/insert-layer-context";
import { cn } from "@/lib/utils";
import React, { useContext, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import {Layers} from "@craftjs/layers"

 
 

const LayerBox = () => {
  const {Openis, setOpenis } = useContext(InsertLayerContext);
  const [elementType, setElementType] = useState("basic");
 

  return (
    <div
      className={cn(
        "bg-gray-50 w-[20%] h-[100%] fixed z-50 border-r border-gray-300 transition-all duration-300 ease-in-out",
        Openis ? "translate-x-0" : "-translate-x-[35rem]"
      )}
    >
      <div className="p-4 border-b border-gray-300 flex justify-between items-center">
        <h3 className="text-xl font-semibold">Layers</h3>
        <div className="flex items-center">
          {/* <div className="relative mr-3">
            <Input placeholder="Search" className="pl-8" />
            <IoSearch className="absolute top-3 left-2 text-gray-400" />
          </div> */}
          <Button className="h-8 w-8" onClick={() => setOpenis(false) }>
            <p className="text-slate-100 text-xl font-bold">
              <IoClose />
            </p>
          </Button>
        </div>
      </div>
      <div>
        <Layers />
      </div>
    </div>
  );
};

export default LayerBox;
