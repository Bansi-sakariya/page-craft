"use client";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MdOutlineHelpOutline } from "react-icons/md";

interface SettingsPannelSidebarProps {
  isOpen: boolean;
  sidebarContent: JSX.Element;
  title: string;
  tabs?: JSX.Element;
}

const SettingsSidePannel = ({
  isOpen,
  title,
  sidebarContent,
  tabs,
}: SettingsPannelSidebarProps) => {
  return (
    <>
      <div
        className={cn(
          " z-50 w-80 bg-slate-100 fixed h-[92vh] right-[57px] transition-all duration-200 ease-in-out",
          isOpen ? "translate-x-1" : "translate-x-[24rem]"
        )}
      >
        <h4 className="p-4 text-xm text-muted-foreground flex justify-between items-center">
          <span>{title}</span>
          <span>
            <MdOutlineHelpOutline className="text-lg" />
          </span>
        </h4>
        <Separator className="bg-slate-300" />
        <ScrollArea className="h-[81vh] p-3">
          <div className="mt-2">{sidebarContent}</div>
        </ScrollArea>
      </div>
    </>
  );
};

export default SettingsSidePannel;
