import { FilterOption } from "@/components/FilterOption";
import { Option } from "@/types";

type FilterGroupProps = {
  title: string;
  data: Option<string | number>[];
  handleClick: (option: Option<string | number>) => void;
  activeOption: string | number;
};

export const FilterGroup = ({
  data,
  handleClick,
  title,
  activeOption,
}: FilterGroupProps) => (
  <div
    className=""
    role="radiogroup"
    aria-labelledby={`filter-group-${title.toLowerCase()}`}
  >
    <div id={`filter-group-${title.toLowerCase()}`} className="mb-2">
      {title}
    </div>
    <div className="flex bg-blue-100 p-1.5 rounded-md w-80">
      {data.map((option) => (
        <FilterOption
          id={`${title.toLowerCase()}-${option.id}`}
          key={option.id}
          label={option.name}
          name={title}
          active={activeOption === option.id}
          handleClick={() => handleClick(option)}
        />
      ))}
    </div>
  </div>
);
