import { cn } from "@/lib/utils";
import { HTagElProps } from "@/types/element";
import { useEditor, useNode } from "@craftjs/core";
import React from "react";
import Placeholders from "../placeholders";
import { BsTypeH2 } from "react-icons/bs";

export const HTwoPlaceholder = () => {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <Placeholders
      ref={(ref) => {
        create(
          ref as HTMLElement,
          <H2 title="Lorem Ipsum" styles="text-5xl font-bold" cssProperties={{
            fontFamily: "var(--font-poppins)",
            fontSize: "35px",
            fontWeight: "800",
            width: "100%",
          }}></H2>
        );
      }}
      icon={<BsTypeH2 className="text-3xl" />}
      text="H-Two"
      element={<></>}
    />
  );
};

const H2 = ({ styles, cssProperties, ...props }: HTagElProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <h2
      className={cn(styles)}
      style={{ ...cssProperties }}
      ref={(ref) => {
        connect(drag(ref as HTMLElement));
      }}
    >
      {props.title}
    </h2>
  );
};

export default H2;

H2.craft = {
  displayName: "H-Two",
  props: {
    styles: "text-5xl font-bold",
  },
  related: {},
};
