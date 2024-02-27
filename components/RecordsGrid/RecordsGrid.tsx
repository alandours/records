import { GridRecord } from "@/components/GridRecord";
import { Release } from "@/types";

type RecordsGridProps = {
  releases: Release[];
};

export const RecordsGrid = ({ releases }: RecordsGridProps) => (
  <div className="grid grid-cols-5 gap-4">
    {releases.map((release) => (
      <GridRecord release={release} key={release.instance_id} />
    ))}
  </div>
);
