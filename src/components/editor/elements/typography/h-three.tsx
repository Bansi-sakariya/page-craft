import { cn } from "@/lib/utils";
import { HTagElProps } from "@/types/element";
import { useEditor, useNode } from "@craftjs/core";
import React from "react";
import Placeholders from "../placeholders";
import { BsTypeH3 } from "react-icons/bs";

export const HThreePlaceholder = () => {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <Placeholders
      ref={(ref) => {
        create(
          ref as HTMLElement,
          <H3 title="Lorem Ipsum" styles="text-4xl font-bold" cssProperties={{
            fontFamily: "var(--font-poppins)",
            fontSize: "30px",
            fontWeight: "800",
            width: "100%",
          }}></H3>
        );
      }}
      icon={<BsTypeH3 className="text-3xl" />}
      text="H-Three"
      element={<></>}
    />
  );
};

const H3 = ({ styles, cssProperties, ...props }: HTagElProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <h3
      className={cn(styles)}
      style={{ ...cssProperties }}
      ref={(ref) => {
        connect(drag(ref as HTMLElement));
      }}
    >
      {props.title}
    </h3>
  );
};

export default H3;

H3.craft = {
  displayName: "H-Three",
  props: {
    styles: "text-4xl font-bold",
  },
  related: {},
};
