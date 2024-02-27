import { ListRecord } from "@/components/ListRecord";
import { Release } from "@/types";

type RecordsListProps = {
  releases: Release[];
};

export const RecordsList = ({ releases }: RecordsListProps) => (
  <div className="grid grid-cols-2 gap-4">
    {releases.map((release) => (
      <ListRecord release={release} key={release.instance_id} />
    ))}
  </div>
);
