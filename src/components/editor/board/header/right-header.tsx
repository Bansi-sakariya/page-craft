"use client";

import { Button } from "@/components/ui/button";
import { useEditor } from "@craftjs/core";
import { Redo2, Undo2 } from "lucide-react";
import { IoMdEye, IoMdSettings } from "react-icons/io";
import { TbReload } from "react-icons/tb";

const RightHeader = () => {
  const { enabled, canUndo, canRedo, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  return (
    <div className="flex items-center">
      <Button
        disabled={!canUndo}
        onClick={() => actions.history.undo()}
        className="bg-transparent hover:bg-transparent px-1 h-8 group/layout"
      >
        <span className="rounded-lg p-1.5 bg-slate-100 group-hover/layout:bg-slate-200">
          <Undo2 className="h-5 w-5 text-primary" />
        </span>
      </Button>
      <Button
        disabled={!canRedo}
        onClick={() => actions.history.redo()}
        className="bg-transparent hover:bg-transparent px-1 h-8 group/layout"
      >
        <span className="rounded-lg p-1.5 bg-slate-100 group-hover/layout:bg-slate-200 mr-1.5">
          <Redo2 className="h-5 w-5 text-primary" />
        </span>
      </Button>
      <Button className="bg-transparent hover:bg-transparent px-1 h-8 group/layout mr-2">
        <span className="rounded-lg p-1.5 bg-blue-600 group-hover/layout:bg-slate-50 mr-1.5">
          <IoMdEye className="h-5 w-5 text-white group-hover/layout:text-primary" />
        </span>
      </Button>
      <Button className="h-8 text-xs bg-slate-50 text-black hover:bg-blue-600 hover:text-white">
        Publish
      </Button>
    </div>
  );
};

export default RightHeader;
