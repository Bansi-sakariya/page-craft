import { cn } from "@/lib/utils";
import { HTagElProps } from "@/types/element";
import { useEditor, useNode } from "@craftjs/core";
import React from "react";
import Placeholders from "../placeholders";
import { BsTypeH1 } from "react-icons/bs";

export const HOnePlaceholder = () => {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <Placeholders
      ref={(ref) => {
        create(
          ref as HTMLElement,
          <H1 title="Lorem Ipsum" styles="text-4xl font-bold"></H1>
        );
      }}
      icon={<BsTypeH1 className="text-3xl" />}
      text="H-One"
      element={<></>}
    />
  );
};

const H1 = ({ styles, cssProperties, ...props }: HTagElProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <h1
      className={cn(styles)}
      style={{ ...cssProperties }}
      ref={(ref) => {
        connect(drag(ref as HTMLElement));
      }}
    >
      {props.title}
    </h1>
  );
};

export default H1;

H1.craft = {
  displayName: "H-One",
  props: {
    styles: "text-6xl font-bold",
  },
  related: {},
};
