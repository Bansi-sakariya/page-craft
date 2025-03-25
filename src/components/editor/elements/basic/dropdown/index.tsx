"use client"
import { cn } from "@/lib/utils";
import { DivElProps } from "@/types/element";
import React, { useContext } from "react";
import Placeholders from "../../placeholders";
import DropdownSettings from "./setting";
import { Element, useEditor, useNode } from "@craftjs/core";

import DeviceContext from "@/context/device-context";
import { useEditorViewPort } from "@/provider/editor-viewport-provider";
import { RiDropdownList } from "react-icons/ri";

 

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,

} from "@/components/ui/dropdown-menu"

import Link from "next/link"; // Import Next.js Link


export const DropdownPlaceholder = () => {
  const {
    connectors: { create },
  } = useEditor();
  const { device } = useContext(DeviceContext);
  const { editorViewport } = useEditorViewPort();
  
  let currentViewport: "laptop" | "tablet" | "mobile";
  if (editorViewport.selectedType === "mobile") {
    currentViewport = "mobile";
  } else if (editorViewport.selectedType === "tablet") {
    currentViewport = "tablet";
  } else {
    currentViewport = "laptop";
  }

  // Override based on actual device width
  if (device.width >= 1024) {
    currentViewport = "laptop";
  } else if (device.width >= 500 && device.width < 1024) {
    currentViewport = "tablet";
  } else {
    currentViewport = "mobile";
  }
  return (
    <Placeholders
      ref={(ref) => {
        create(ref as HTMLElement, <Element cssProperties={{ laptop: {}, tablet: {}, mobile: {} }} styles="p-3 border rounded-sm" is={Dropdown} canvas ></Element>);
      }}
      icon={<RiDropdownList  className="text-3xl" />}
      text="Dropdown"
      element={<></>}
    />
  );
};

interface DropdownProps {
  cssProperties: { laptop: React.CSSProperties, tablet: React.CSSProperties, mobile: React.CSSProperties };
  title?: string;
  link?: string;
  submenus?: Array<{ name: string; link: string }>;
  styles?: string;
  children?: React.ReactNode;
  
}

const Dropdown = ({ children, styles, cssProperties = { laptop: {}, tablet: {}, mobile: {} }, ...props }: DropdownProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const { device } = useContext(DeviceContext);
  const { editorViewport } = useEditorViewPort();
  const [position, setPosition] = React.useState("bottom")
  let currentViewport: "laptop" | "tablet" | "mobile";
  if (editorViewport.selectedType === "mobile") {
    currentViewport = "mobile";
  } else if (editorViewport.selectedType === "tablet") {
    currentViewport = "tablet";
  } else {
    currentViewport = "laptop";
  }

  // Override based on actual device width
  if (device.width >= 1024) {
    currentViewport = "laptop";
  } else if (device.width >= 500 && device.width < 1024) {
    currentViewport = "tablet";
  } else {
    currentViewport = "mobile";

  }
  
  return (
 

    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        ref={(ref: HTMLButtonElement | null) => {
          if (ref) connect(drag(ref));
        }}
      >
      <Button variant="outline" >
      <Link href={props?.link || "#"} passHref>
        {props?.title}
      </Link>
      </Button>
         
      </DropdownMenuTrigger>
   
     {props?.submenus && props?.submenus?.length > 0 &&   
      <DropdownMenuContent className="">
        {props?.submenus?.map((submenu , index) => (
          <div key={index}>
            <DropdownMenuItem asChild>
              <Link href={submenu.link} className=" ">
                {submenu.name}
              </Link>
            </DropdownMenuItem>
            {index < (props.submenus ?? []).length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
        </DropdownMenuContent>
        }
    </DropdownMenu>
    
      
    
  );
};

export default Dropdown;

Dropdown.craft = {
  displayName: "Dropdown",
  props: {
    styles: "",
  },
  related: {
    toolbar: DropdownSettings,
  },
};
