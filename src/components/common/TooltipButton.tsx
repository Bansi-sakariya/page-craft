"use client";

import React, { forwardRef } from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button, ButtonProps } from "@/components/ui/button";

interface TooltipButtonProps extends ButtonProps {
  className?: string;
  side?: "left" | "top" | "right" | "bottom";
  text: string;
  btnContent: JSX.Element;
}

// Use forwardRef to allow the component to properly handle refs
const TooltipButton = forwardRef<HTMLButtonElement, TooltipButtonProps>(
  ({ className, btnContent, side = "top", text, ...props }, ref) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {/* Forward the ref to the Button component */}
            <Button ref={ref} className={className} {...props}>
              {btnContent}
            </Button>
          </TooltipTrigger>
          <TooltipContent side={side}>
            <p>{text}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
);

TooltipButton.displayName = "TooltipButton"; // Required for forwardRef components

export default TooltipButton;
