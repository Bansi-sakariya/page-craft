"use client";

import { Button } from "@/components/ui/button";
import { PlaceholderProps } from "@/types/editor";
import { useEditor, useNode } from "@craftjs/core";
import React from "react";

const Placeholders = React.forwardRef<HTMLButtonElement, PlaceholderProps>(
  ({ icon, text, element }, ref) => {
    return (
      <Button
        ref={ref}
        className="bg-white text-slate-700 border py-4 h-20 flex justify-center flex-col hover:bg-primary hover:text-white"
      >
        <span className="mb-1">{icon}</span>
        <span className="font-bold">{text}</span>
      </Button>
    );
  }
);

export default Placeholders;
