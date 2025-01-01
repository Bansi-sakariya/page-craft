import { ReactNode } from "react";

export type DefaultElementProps = {
  styles: string;
  cssProperties?: React.CSSProperties;
  children?: ReactNode;
};

export type DivElProps = DefaultElementProps & {};
