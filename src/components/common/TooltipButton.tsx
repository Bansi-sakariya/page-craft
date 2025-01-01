"use client";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button, ButtonProps } from "@/components/ui/button";

interface TooltipButtonProps extends ButtonProps {
  className: string;
  side: "left" | "top" | "right" | "bottom" | undefined;
  text: string;
  btnContent: JSX.Element;
}

const TooltipButton = ({
  className,
  btnContent,
  side,
  text,
  ...props
}: TooltipButtonProps) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className={className} {...props}>
              {btnContent}
            </Button>
          </TooltipTrigger>
          <TooltipContent side={side}>
            <p>{text}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default TooltipButton;
