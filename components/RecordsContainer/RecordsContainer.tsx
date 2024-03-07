"use client";

import InfiniteScroll from "react-infinite-scroll-component";

import { FilterGroup } from "@/components/FilterGroup";
import { RecordsGrid } from "@/components/RecordsGrid";
import { RecordsGridLoader } from "@/components/RecordsGridLoader";
import { RecordsList } from "@/components/RecordsList";
import { View } from "@/constants/enums";
import { useFilters } from "@/hooks/useFilters";

import { Container, FiltersContainer, Header, Main } from "./styles";

export const RecordsContainer = () => {
  const {
    releases,
    view,
    filtersOptions,
    sortOptions,
    viewOptions,
    dataLength,
    hasMore,
    loadMore,
  } = useFilters();

  const RecordsView = view === View.grid ? RecordsGrid : RecordsList;

  return (
    <Main>
      <Container>
        <Header>
          <FiltersContainer>
            {filtersOptions.map((filter) => (
              <FilterGroup {...filter} key={filter.title} />
            ))}
          </FiltersContainer>
          <FiltersContainer>
            <FiltersContainer>
              {sortOptions.map((sortOption) => (
                <FilterGroup {...sortOption} key={sortOption.title} />
              ))}
            </FiltersContainer>
            {viewOptions.map((viewOption) => (
              <FilterGroup {...viewOption} key={viewOption.title} />
            ))}
          </FiltersContainer>
        </Header>
        <InfiniteScroll
          dataLength={dataLength}
          next={loadMore}
          hasMore={hasMore}
          loader={<RecordsGridLoader />}
          endMessage={
            !!dataLength ? (
              <p className="text-center">End</p>
            ) : (
              <RecordsGridLoader />
            )
          }
          scrollThreshold={0.9}
        >
          <RecordsView releases={releases} />
        </InfiniteScroll>
      </Container>
    </Main>
  );
};
