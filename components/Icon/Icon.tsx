import { Icons, icons } from "@/constants";

type IconProps = {
  name: Icons;
  color?: string;
  size?: string;
};

export const Icon = ({ name, color = "#000", size = "1.25rem" }: IconProps) => {
  const IconComponent = icons[name];

  return <IconComponent color={color} size={size} role="presentation" />;
};
