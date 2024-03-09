import { GridRecord } from "@/components/GridRecord";
import type { Release } from "@/types";

import { GridContainer } from "./styles";

type RecordsGridProps = {
  releases: Release[];
};

export const RecordsGrid = ({ releases }: RecordsGridProps) => (
  <GridContainer $isEmpty={!releases.length}>
    {releases?.map((release) => (
      <GridRecord release={release} key={release.instanceId} />
    ))}
  </GridContainer>
);
