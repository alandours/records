import { GridRecord } from "@/components/GridRecord";
import { Release } from "@/types";

import { GridContainer, GridPlaceholder, GridPlaceholderInner } from "./styles";

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
  const items = [...Array(20)].map((_, index) => (
    <GridPlaceholder key={index}>
      <GridPlaceholderInner />
    </GridPlaceholder>
  ));

  return (
    <GridContainer>
      {loader
        ? items
        : releases?.map((release) => (
            <GridRecord release={release} key={release.instanceId} />
          ))}
    </GridContainer>
  );
};
