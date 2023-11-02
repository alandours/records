import { ReactNode } from "react";

export * from "./folders";
export * from "./releases";

export type Option<T> = {
  id: T;
  name: string;
  icon?: ReactNode;
  a11yLabel?: string;
};
