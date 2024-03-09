import { ListRecord } from "@/components/ListRecord";
import type { Release } from "@/types";

import { ListContainer } from "./styles";

type RecordsListProps = {
  releases: Release[];
};

export const RecordsList = ({ releases }: RecordsListProps) => (
  <ListContainer $isEmpty={!releases.length}>
    {releases.map((release) => (
      <ListRecord release={release} key={release.instanceId} />
    ))}
  </ListContainer>
);
