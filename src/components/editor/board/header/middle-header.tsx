"use client";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { devices } from "@/utils/device";
import { useContext, useState } from "react";
import DeviceContext from "@/context/device-context";
import { IoClose } from "react-icons/io5";
import { MdOutlineDesktopWindows, MdOutlineTabletMac } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

const MiddleHeader = () => {
  const { device, setDeviceWidth, setDevice, setDeviceHeight, setDeviceScale } =
    useContext(DeviceContext);

  const [zoomActive, setZoomActive] = useState<number | string>("fit");

  const handleZoom = (val: number | string) => {
    setZoomActive(val);
    if (val == "fit") {
      const findZoom = devices?.find((el) => el.type == device.type);
      setDeviceScale(findZoom?.zoom);
    } else {
      setDeviceScale(val);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="mr-2" asChild>
          <Button className="flex justify-center bg-transparent hover:bg-slate-800 px-1 h-8">
            <span className="rounded-lg p-1.5 mr-0.5 text-sm">
              {(device.zoom as number) * 100}%
            </span>
            <span>
              <ChevronDown size={12} />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52 ml-2">
          <DropdownMenuLabel>Zoom</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => handleZoom(0.5)}
            className={cn(
              "cursor-pointer",
              zoomActive == 0.5 ? "bg-primary text-white" : ""
            )}
          >
            <span>50%</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleZoom(0.75)}
            className={cn(
              "cursor-pointer",
              zoomActive == 0.75 ? "bg-primary text-white" : ""
            )}
          >
            <span>75%</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleZoom(1)}
            className={cn(
              "cursor-pointer",
              zoomActive == 1 ? "bg-primary text-white" : ""
            )}
          >
            <span>100%</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleZoom("fit")}
            className={cn(
              "cursor-pointer",
              zoomActive == "fit" ? "bg-primary text-white" : ""
            )}
          >
            <span>Scale to fit</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Separator orientation="vertical" className="bg-slate-600 h-4" />
      <DropdownMenu>
        <DropdownMenuTrigger className="ml-2 mr-2" asChild>
          <Button className="flex justify-center bg-transparent hover:bg-slate-800 px-1 h-8">
            <span className="rounded-lg p-1.5 mr-0.5">
              {device?.width < 600 ? (
                <FaMobileAlt className="h-5 w-5 text-white" />
              ) : device?.width < 1024 || device?.type == "iPad Pro" ? (
                <MdOutlineTabletMac className="h-5 w-5 text-white" />
              ) : (
                <MdOutlineDesktopWindows className="h-5 w-5 text-white" />
              )}
            </span>
            <span>
              <ChevronDown size={12} />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 pt-0 ml-2">
          <DropdownMenuLabel>Screens</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <ScrollArea className="h-72 p-2">
            {devices?.map((el) => {
              return (
                <DropdownMenuItem
                  key={el?.type}
                  className={cn(
                    "cursor-pointer",
                    device.width == el?.width && device.height == el?.height
                      ? "bg-primary text-white"
                      : ""
                  )}
                  onClick={() => setDevice(el)}
                >
                  <span>{el?.type}</span>
                  <DropdownMenuShortcut className="text-xs font-semibold">
                    {`${el?.width} x ${el?.height}`}
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              );
            })}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex justify-center items-center">
        <Input
          type="number"
          className="h-6 w-14 px-1 text-xs text-white bg-transparent border rounded-md font-semibold"
          value={device.width}
          onChange={(e) => setDeviceWidth(e.target.value)}
        />
        <p className="text-slate-400 mx-1.5 font-bold">
          <IoClose />
        </p>
        <Input
          type="number"
          className="h-6 w-14 px-1 text-xs text-white bg-transparent border rounded-md font-semibold"
          value={device.height}
          onChange={(e) => setDeviceHeight(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MiddleHeader;
