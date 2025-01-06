import { cn } from "@/lib/utils";
import { HTagElProps } from "@/types/element";
import { useEditor, useNode } from "@craftjs/core";
import React from "react";
import Placeholders from "../placeholders";
import { BsTypeH5 } from "react-icons/bs";

export const HFivePlaceholder = () => {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <Placeholders
      ref={(ref) => {
        create(
          ref as HTMLElement,
          <H5 title="Lorem Ipsum" styles="text-2xl font-bold" cssProperties={{
            fontFamily: "var(--font-poppins)",
            fontSize: "20px",
            fontWeight: "800",
            width: "100%",
          }}></H5>
        );
      }}
      icon={<BsTypeH5 className="text-3xl" />}
      text="H-Five"
      element={<></>}
    />
  );
};

const H5 = ({ styles, cssProperties, ...props }: HTagElProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <h5
      className={cn(styles)}
      style={{ ...cssProperties }}
      ref={(ref) => {
        connect(drag(ref as HTMLElement));
      }}
    >
      {props.title}
    </h5>
  );
};

export default H5;

H5.craft = {
  displayName: "H-Five",
  props: {
    styles: "text-2xl font-bold",
  },
  related: {},
};
