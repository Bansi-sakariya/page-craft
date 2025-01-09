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
import { useEditorViewPort } from "@/provider/editor-viewport-provider";
import { useEditor } from "@craftjs/core";

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

  const { editorViewport, setEditorViewport } = useEditorViewPort();
  const { query } = useEditor();

  const handleLaptop = () => {
    // if (
    //   editorViewport.state["laptop"] == null &&
    //   Object.keys(query.getSerializedNodes()).length == 1
    // ) {
    //   if (editorViewport.state["tablet"] != null) {
    //     setEditorViewport({
    //       selectedType: "laptop",
    //       state: {
    //         laptop: editorViewport.state["tablet"],
    //         tablet: editorViewport.state["tablet"],
    //         mobile: editorViewport.state["mobile"],
    //       },
    //     });
    //   }
    //   if (editorViewport.state["mobile"] != null) {
    //     setEditorViewport({
    //       selectedType: "laptop",
    //       state: {
    //         laptop: editorViewport.state["mobile"],
    //         tablet: editorViewport.state["tablet"],
    //         mobile: editorViewport.state["mobile"],
    //       },
    //     });
    //   }
    // } else {
    setEditorViewport({
      selectedType: "laptop",
      state: {
        laptop: editorViewport.state["laptop"],
        tablet:
          editorViewport.selectedType == "tablet"
            ? query.getSerializedNodes()
            : editorViewport.state["tablet"],
        mobile:
          editorViewport.selectedType == "mobile"
            ? query.getSerializedNodes()
            : editorViewport.state["mobile"],
      },
    });
    // }
  };

  const handleTablet = () => {
    // if (
    //   editorViewport.state["tablet"] == null &&
    //   Object.keys(query.getSerializedNodes()).length == 1
    // ) {
    //   if (editorViewport.state["laptop"] != null) {
    //     setEditorViewport({
    //       selectedType: "tablet",
    //       state: {
    //         laptop: editorViewport.state["laptop"],
    //         tablet: editorViewport.state["laptop"],
    //         mobile: editorViewport.state["mobile"],
    //       },
    //     });
    //   }
    //   if (editorViewport.state["mobile"] != null) {
    //     setEditorViewport({
    //       selectedType: "tablet",
    //       state: {
    //         laptop: editorViewport.state["laptop"],
    //         tablet: editorViewport.state["mobile"],
    //         mobile: editorViewport.state["mobile"],
    //       },
    //     });
    //   }
    // } else {
    setEditorViewport({
      selectedType: "tablet",
      state: {
        laptop:
          editorViewport.selectedType == "laptop"
            ? query.getSerializedNodes()
            : editorViewport.state["laptop"],
        tablet: editorViewport.state["tablet"],
        mobile:
          editorViewport.selectedType == "mobile"
            ? query.getSerializedNodes()
            : editorViewport.state["mobile"],
      },
    });
    // }
  };

  const handleMobile = () => {
    // if (
    //   editorViewport.state["mobile"] == null &&
    //   Object.keys(query.getSerializedNodes()).length == 1
    // ) {
    //   if (editorViewport.state["laptop"] != null) {
    //     setEditorViewport({
    //       selectedType: "mobile",
    //       state: {
    //         laptop: editorViewport.state["laptop"],
    //         tablet: editorViewport.state["tablet"],
    //         mobile: editorViewport.state["laptop"],
    //       },
    //     });
    //   }
    //   if (editorViewport.state["tablet"] != null) {
    //     setEditorViewport({
    //       selectedType: "mobile",
    //       state: {
    //         laptop: editorViewport.state["laptop"],
    //         tablet: editorViewport.state["tablet"],
    //         mobile: editorViewport.state["tablet"],
    //       },
    //     });
    //   }
    // } else {
    setEditorViewport({
      selectedType: "mobile",
      state: {
        laptop:
          editorViewport.selectedType == "laptop"
            ? query.getSerializedNodes()
            : editorViewport.state["laptop"],
        tablet:
          editorViewport.selectedType == "tablet"
            ? query.getSerializedNodes()
            : editorViewport.state["tablet"],
        mobile: editorViewport.state["mobile"],
      },
    });
    // }
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
      {/* <DropdownMenu>
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
      </DropdownMenu> */}
      <div className="flex justify-between items-center">
        <Button
          className="bg-transparent px-1 ml-3 mr-1"
          onClick={() => {
            setDevice({
              type: "Laptop Large",
              width: 1280,
              height: 800,
              zoom: 1,
            });
            handleLaptop();
          }}
        >
          <MdOutlineDesktopWindows className="h-6 w-6 text-white" />
        </Button>
        <Button
          className="bg-transparent px-1 mx-1"
          onClick={() => {
            setDevice({
              type: "iPad Air",
              width: 820,
              height: 1180,
              zoom: 1,
            });
            handleTablet();
          }}
        >
          <MdOutlineTabletMac className="h-5 w-5 text-white" />
        </Button>
        <Button
          className="bg-transparent px-1 ml-1 mr-3"
          onClick={() => {
            setDevice({
              type: "Pixel 7",
              width: 412,
              height: 915,
              zoom: 1,
            });
            handleMobile();
          }}
        >
          <FaMobileAlt className="h-5 w-5 text-white" />
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <Input
          type="number"
          className="h-6 w-14 px-1 text-xs text-white bg-transparent border rounded-md font-semibold"
          value={device.width}
          onChange={(e) => {
            // let timeout = setTimeout(() => {
              setDeviceWidth(parseInt(e.target.value));
            // }, 2000);
            // clearTimeout(timeout);
          }}
        />
        <p className="text-slate-400 mx-1.5 font-bold">
          <IoClose />
        </p>
        <Input
          type="number"
          className="h-6 w-14 px-1 text-xs text-white bg-transparent border rounded-md font-semibold"
          value={device.height}
          onChange={(e) => {
            // let timeout = setTimeout(() => {
              setDeviceHeight(parseInt(e.target.value));
            // }, 2000);
            // clearTimeout(timeout);
          }}
        />
      </div>
    </div>
  );
};

export default MiddleHeader;
