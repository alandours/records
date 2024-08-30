import { GridContainer } from "@/components/RecordsGrid/styles";

import { GridPlaceholder, GridPlaceholderInner } from "./styles";

export const RecordsGridLoader = () => {
  const items = [...Array(20)].map((_, index) => (
    <GridPlaceholder key={index}>
      <GridPlaceholderInner />
    </GridPlaceholder>
  ));

  return <GridContainer>{items}</GridContainer>;
};
