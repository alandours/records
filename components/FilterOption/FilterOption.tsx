import { Icon } from "@/components/Icon";
import { OptionIconType } from "@/types";

import { FilterCheckbox, FilterLabel, FilterText, MotionSpan } from "./styles";

type FilterOptionProps = {
  id: string;
  label: string;
  name: string;
  active: boolean;
  handleClick: () => void;
  minWidth?: string;
  icon?: OptionIconType;
  a11yLabel?: string;
};

export const FilterOption = ({
  id,
  label,
  name,
  active,
  handleClick,
  minWidth,
  icon,
  a11yLabel,
}: FilterOptionProps) => (
  <FilterLabel htmlFor={id} $minWidth={minWidth} title={a11yLabel}>
    {active && (
      <MotionSpan
        layoutId={name}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
    <FilterCheckbox
      type="radio"
      id={id}
      name={name}
      checked={active}
      onChange={handleClick}
      aria-label={a11yLabel}
    />
    <FilterText $active={active}>
      {icon?.name ? <Icon name={icon.name} size={icon.size} /> : label}
    </FilterText>
  </FilterLabel>
);
