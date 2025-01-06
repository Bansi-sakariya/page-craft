import { cn } from "@/lib/utils";
import { HTagElProps } from "@/types/element";
import { useEditor, useNode } from "@craftjs/core";
import React from "react";
import Placeholders from "../placeholders";
import { BsTypeH6 } from "react-icons/bs";

export const HSixPlaceholder = () => {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <Placeholders
      ref={(ref) => {
        create(
          ref as HTMLElement,
          <H6 title="Lorem Ipsum" styles="text-xl font-bold" cssProperties={{
            fontFamily: "var(--font-poppins)",
            fontSize: "15px",
            fontWeight: "800",
            width: "100%",
          }}></H6>
        );
      }}
      icon={<BsTypeH6 className="text-3xl" />}
      text="H-Six"
      element={<></>}
    />
  );
};

const H6 = ({ styles, cssProperties, ...props }: HTagElProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <h6
      className={cn(styles)}
      style={{ ...cssProperties }}
      ref={(ref) => {
        connect(drag(ref as HTMLElement));
      }}
    >
      {props.title}
    </h6>
  );
};

export default H6;

H6.craft = {
  displayName: "H-Six",
  props: {
    styles: "text-xl font-bold",
  },
  related: {},
};
