import { cn } from "@/lib/utils";
import { HTagElProps } from "@/types/element";
import { useEditor, useNode } from "@craftjs/core";
import React from "react";
import Placeholders from "../placeholders";
import { BsTypeH4 } from "react-icons/bs";

export const HFourPlaceholder = () => {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <Placeholders
      ref={(ref) => {
        create(
          ref as HTMLElement,
          <H4 title="Lorem Ipsum" styles="text-3xl font-bold" cssProperties={{
            fontFamily: "var(--font-poppins)",
            fontSize: "25px",
            fontWeight: "800",
            width: "100%",
          }}></H4>
        );
      }}
      icon={<BsTypeH4 className="text-3xl" />}
      text="H-Four"
      element={<></>}
    />
  );
};

const H4 = ({ styles, cssProperties, ...props }: HTagElProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <h4
      className={cn(styles)}
      style={{ ...cssProperties }}
      ref={(ref) => {
        connect(drag(ref as HTMLElement));
      }}
    >
      {props.title}
    </h4>
  );
};

export default H4;

H4.craft = {
  displayName: "H-Four",
  props: {
    styles: "text-3xl font-bold",
  },
  related: {},
};
