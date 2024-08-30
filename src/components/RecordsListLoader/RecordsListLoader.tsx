import { ListContainer } from "@/components/RecordsList/styles";

import { ListPlaceholder } from "./styles";

export const RecordsListLoader = () => {
  const items = [...Array(10)].map((_, index) => (
    <ListPlaceholder key={index} />
  ));

  return <ListContainer>{items}</ListContainer>;
};
