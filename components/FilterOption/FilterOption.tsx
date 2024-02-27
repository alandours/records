import { motion } from "framer-motion";

type FilterOptionProps = {
  id: any;
  value: any;
  name: string;
  active: boolean;
  handleClick: () => void;
};

export const FilterOption = ({
  id,
  value,
  name,
  active,
  handleClick,
}: FilterOptionProps) => (
  <label
    htmlFor={id}
    className="flex relative w-full cursor-pointer"
    style={{
      WebkitTapHighlightColor: "transparent",
    }}
  >
    {active && (
      <motion.span
        layoutId={name}
        className="absolute inset-0 z-10 bg-blue-800"
        style={{ borderRadius: 4 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
    <input
      type="radio"
      id={id}
      name={name}
      checked={active}
      onChange={handleClick}
      className="w-0 h-0"
    />
    <div
      className={`relative z-30 text-sm font-medium text-center text-${
        active ? "white" : "black"
      } px-2.5 py-1.5 transition-colors w-full`}
    >
      {value}
    </div>
  </label>
);
