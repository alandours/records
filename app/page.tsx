import { RecordsContainer } from "@/components/RecordsContainer";

import { HomeContainer } from "./styles";

export default async function Home() {
  return (
    <HomeContainer>
      <RecordsContainer />
    </HomeContainer>
  );
}
