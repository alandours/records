import { FilterOption } from "@/components/FilterOption";

type FilterGroupProps = {
  data: { id: any; name: string }[];
  title: string;
  handleClick: (value: any) => void;
  activeKey: any;
};

export const FilterGroup = ({
  data,
  handleClick,
  title,
  activeKey,
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
      {data.map((option: { id: number; name: string }) => (
        <FilterOption
          id={`${title.toLowerCase()}-${option.id}`}
          key={option.id}
          value={option.name}
          name={title}
          active={activeKey === option.id}
          handleClick={() => handleClick(option)}
        />
      ))}
    </div>
  </div>
);
