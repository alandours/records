import { ReactNode } from "react";

import { FilterCheckbox, FilterLabel, FilterText, MotionSpan } from "./styles";

type FilterOptionProps = {
  id: string;
  label: string;
  name: string;
  active: boolean;
  handleClick: () => void;
  minWidth?: string;
  icon?: ReactNode;
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
    <FilterText $active={active}>{icon || label}</FilterText>
  </FilterLabel>
);
