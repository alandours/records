import { Icons } from "@/constants";

export * from "./folders";
export * from "./releases";

export type OptionIconType = { name: Icons; size?: string };

export type Option<T> = {
  id: T;
  name: string;
  icon?: OptionIconType;
  a11yLabel?: string;
};
