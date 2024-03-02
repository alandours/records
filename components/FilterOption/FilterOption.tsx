import { FilterCheckbox, FilterLabel, FilterText, MotionSpan } from "./styles";

type FilterOptionProps = {
  id: string;
  label: string;
  name: string;
  active: boolean;
  handleClick: () => void;
};

export const FilterOption = ({
  id,
  label,
  name,
  active,
  handleClick,
}: FilterOptionProps) => (
  <FilterLabel htmlFor={id}>
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
    />
    <FilterText active={active}>{label}</FilterText>
  </FilterLabel>
);
