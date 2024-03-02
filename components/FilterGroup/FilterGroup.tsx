import { FilterOption } from "@/components/FilterOption";
import { Option } from "@/types";

import { FilterGroupTitle, FilterOptions } from "./styles";

type FilterGroupProps = {
  title: string;
  data: Option<string | number>[];
  handleClick: (option: Option<string | number>) => void;
  activeOption: string | number;
  minWidth?: string;
};

export const FilterGroup = ({
  data,
  handleClick,
  title,
  activeOption,
  minWidth,
}: FilterGroupProps) => (
  <div
    role="radiogroup"
    aria-labelledby={`filter-group-${title.toLowerCase()}`}
  >
    <FilterGroupTitle id={`filter-group-${title.toLowerCase()}`}>
      {title}
    </FilterGroupTitle>
    <FilterOptions>
      {data.map((option) => (
        <FilterOption
          id={`${title.toLowerCase()}-${option.id}`}
          key={option.id}
          label={option.name}
          name={title}
          active={activeOption === option.id}
          handleClick={() => handleClick(option)}
          minWidth={minWidth}
          a11yLabel={option.a11yLabel}
        />
      ))}
    </FilterOptions>
  </div>
);
