import { cn } from "@/lib/utils";
import { DivElProps } from "@/types/element";
import React from "react";
import Placeholders from "../placeholders";
import { TbRectangle } from "react-icons/tb";
import { Element, useEditor, useNode } from "@craftjs/core";

export const DivPlaceholder = () => {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <Placeholders
      ref={(ref) => {
        create(ref as HTMLElement, <Element styles="p-3 border rounded-sm" is={Div} canvas ></Element>);
      }}
      icon={<TbRectangle className="text-3xl" />}
      text="Div"
      element={<></>}
    />
  );
};

const Div = ({ children, styles, cssProperties, ...props }: DivElProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      style={{
        ...cssProperties,
      }}
      ref={(ref) => {
        connect(drag(ref as HTMLElement));
      }}
      className={cn(styles)}
    >
      {children}
    </div>
  );
};

export default Div;

Div.craft = {
  displayName: "Div",
  props: {
    styles: "p-3 border rounded-sm",
  },
  related: {},
};
