import { GridRecord } from "@/components/GridRecord";
import { Release } from "@/types";

type RecordsGridProps =
  | {
      releases: Release[];
      loader?: never;
    }
  | {
      releases?: never;
      loader: boolean;
    };

export const RecordsGrid = ({ releases, loader = false }: RecordsGridProps) => {
  const items = Array(20).fill(
    <div className="col-span-1 bg-blue-500">
      <div className="aspect-square w-[500px] max-w-full h-auto" />
    </div>
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
      {loader
        ? items
        : releases?.map((release) => (
            <GridRecord release={release} key={release.instance_id} />
          ))}
    </div>
  );
};
