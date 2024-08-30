"use client";

import InfiniteScroll from "react-infinite-scroll-component";

import { EndVideo } from "@/components/EndVideo";
import { FilterGroup } from "@/components/FilterGroup";
import { RecordsGrid } from "@/components/RecordsGrid";
import { RecordsGridLoader } from "@/components/RecordsGridLoader";
import { RecordsList } from "@/components/RecordsList";
import { RecordsListLoader } from "@/components/RecordsListLoader";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SocialLinks } from "@/components/SocialLinks";
import { View } from "@/constants";
import { useFilters } from "@/hooks/useFilters";
import { InitialData } from "@/types";

import { Container, FiltersContainer, Header, Main } from "./styles";

type HomeProps = {
  initialData: InitialData;
};

export const Home = ({ initialData }: HomeProps) => {
  const {
    releases,
    view,
    filtersOptions,
    sortOptions,
    viewOptions,
    dataLength,
    hasMore,
    loadMore,
  } = useFilters(initialData);

  const RecordsView = view === View.grid ? RecordsGrid : RecordsList;
  const Loader = view === View.grid ? RecordsGridLoader : RecordsListLoader;

  return (
    <Main>
      <Container>
        <Header>
          <FiltersContainer>
            {filtersOptions.map((filter) => (
              <FilterGroup {...filter} key={filter.name} />
            ))}
          </FiltersContainer>
          <FiltersContainer>
            <FiltersContainer>
              {sortOptions.map((sortOption) => (
                <FilterGroup {...sortOption} key={sortOption.name} />
              ))}
            </FiltersContainer>
            {viewOptions.map((viewOption) => (
              <FilterGroup {...viewOption} key={viewOption.name} />
            ))}
          </FiltersContainer>
        </Header>
        <InfiniteScroll
          dataLength={dataLength}
          next={loadMore}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={!!dataLength ? <EndVideo /> : <Loader />}
          scrollThreshold={0.75}
        >
          <RecordsView releases={releases} />
        </InfiniteScroll>
      </Container>
      <ScrollToTop />
      <SocialLinks />
    </Main>
  );
};
