import { FilterOption } from "@/components/FilterOption";
import type { Option } from "@/types";

import {
  FilterGroupContainer,
  FilterGroupTitle,
  FilterOptions,
} from "./styles";

type FilterGroupProps = {
  name: string;
  title?: string;
  data: Option<string>[] | Option<number>[];
  handleClick: (option: Option<any>) => void;
  activeOption: string | number;
  minWidth?: string;
};

export const FilterGroup = ({
  data,
  handleClick,
  name,
  title,
  activeOption,
  minWidth,
}: FilterGroupProps) => (
  <FilterGroupContainer
    role="radiogroup"
    aria-labelledby={`filter-group-${name.toLowerCase()}`}
  >
    {title && (
      <FilterGroupTitle id={`filter-group-${name.toLowerCase()}`}>
        {title}
      </FilterGroupTitle>
    )}
    <FilterOptions>
      {data.map((option) => (
        <FilterOption
          id={`${name.toLowerCase()}-${option.id}`}
          key={option.id}
          label={option.name}
          name={name}
          active={activeOption === option.id}
          handleClick={() => handleClick(option)}
          minWidth={minWidth}
          a11yLabel={option.a11yLabel}
        />
      ))}
    </FilterOptions>
  </FilterGroupContainer>
);
