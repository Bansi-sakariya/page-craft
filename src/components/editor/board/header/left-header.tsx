"use client";

import {
  AppWindow,
  ChevronDown,
  Database,
  Eye,
  History,
  LayoutDashboard,
  LayoutGrid,
  MonitorUp,
  MoveRight,
  Save,
  Settings,
  Share2,
  View,
  Wrench,
} from "lucide-react";
import { RiSeoLine } from "react-icons/ri";
import { GrFormAdd } from "react-icons/gr";
import { BsDatabaseFill } from "react-icons/bs";
import { RiLayout2Fill } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconType } from "react-icons/lib";
import Link from "next/link";
import { useContext } from "react";
import InsertSidebarToggleContext from "@/context/insert-sidebar-toggle-context";
import { IoLayers } from "react-icons/io5";
import { cn } from "@/lib/utils";

type SubMenuProps = {
  title: string;
  icon: JSX.Element;
  data: Array<{
    isSeperator?: boolean;
    name?: string;
    link?: string;
    icon?: JSX.Element;
  }>;
};

const SubMenu = ({ title, icon, data }: SubMenuProps) => {
  return (
    <>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className="cursor-pointer">
          {icon}
          {title}
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent className="w-56">
          {data?.map((el) => {
            if (el?.isSeperator) {
              return <DropdownMenuSeparator />;
            } else {
              return (
                <Link key={el?.name} href={el?.link || "#"}>
                  <DropdownMenuItem>
                    {el?.icon}
                    <span>{el?.name}</span>
                  </DropdownMenuItem>
                </Link>
              );
            }
          })}
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </>
  );
};

const LeftHeader = () => {
  const { isOpen, setIsOpen } = useContext(InsertSidebarToggleContext);

  return (
    <div className="flex items-center">
      {/* Logo */}
      <DropdownMenu>
        <DropdownMenuTrigger className="mr-5" asChild>
          <Button className="flex justify-center px-2 h-8">
            <span className="mr-2">
              <LayoutGrid className="h-4 w-4" />
            </span>
            <span>
              <ChevronDown size={12} />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 ml-2">
          <DropdownMenuItem className="cursor-pointer">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </DropdownMenuItem>
          <SubMenu
            title="Site"
            icon={<AppWindow className="mr-2 h-4 w-4" />}
            data={[
              {
                name: "Preview",
                icon: <Eye className="mr-2 h-4 w-4" />,
                link: "#",
              },
              {
                name: "Publish",
                icon: <MonitorUp className="mr-2 h-4 w-4" />,
                link: "#",
              },
              {
                name: "Save",
                icon: <Save className="mr-2 h-4 w-4" />,
                link: "#",
              },
              {
                isSeperator: true,
              },
              {
                name: "Settings",
                icon: <Settings className="mr-2 h-4 w-4" />,
                link: "#",
              },
              {
                name: "SEO",
                icon: <RiSeoLine className="mr-2 h-4 w-4" />,
                link: "#",
              },
              {
                name: "Site History",
                icon: <History className="mr-2 h-4 w-4" />,
                link: "#",
              },
              {
                name: "Social Shares",
                icon: <Share2 className="mr-2 h-4 w-4" />,
                link: "#",
              },
            ]}
          />
          <DropdownMenuItem className="cursor-pointer">
            <Wrench className="mr-2 h-4 w-4" />
            <span>Tools</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <View className="mr-2 h-4 w-4" />
            <span>View</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <MoveRight className="mr-2 h-4 w-4" />
            <span>Go to Sites</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        className={cn(
          "bg-transparent hover:bg-transparent px-2 h-8 group/insert mr-3",
          isOpen ? "text-white" : ""
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={cn(
            "rounded-sm text-slate-900 group-hover/insert:bg-white mr-1.5",
            isOpen ? "bg-white" : "bg-muted-foreground"
          )}
        >
          <GrFormAdd className="h-5 w-5" />
        </span>
        <span
          className={cn(
            "group-hover/insert:text-white font-bold",
            isOpen ? "text-white" : "text-muted-foreground"
          )}
        >
          Insert
        </span>
      </Button>

      <Button className="bg-transparent hover:bg-transparent px-2 h-8 group/layout mr-3">
        <span className="rounded-sm p-1 bg-muted-foreground text-slate-900 group-hover/layout:bg-white mr-1.5">
          <IoLayers className="h-3.5 w-3.5" />
        </span>
        <span className="text-muted-foreground group-hover/layout:text-white font-bold">
          Layers
        </span>
      </Button>

      <Button className="bg-transparent hover:bg-transparent px-2 h-8 group/cms mr-3">
        <span className="rounded-sm p-1 bg-muted-foreground text-slate-900 group-hover/cms:bg-white mr-1.5">
          <BsDatabaseFill className="h-3.5 w-3.5" />
        </span>
        <span className="text-muted-foreground group-hover/cms:text-white font-bold">
          CMS
        </span>
      </Button>
    </div>
  );
};

export default LeftHeader;
