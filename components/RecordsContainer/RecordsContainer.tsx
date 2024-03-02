"use client";

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { FilterGroup } from "@/components/FilterGroup";
import { RecordsGrid } from "@/components/RecordsGrid";
import { RecordsList } from "@/components/RecordsList";
import { getCollections, getFolders } from "@/app/actions";
import { INITIAL_FILTERS } from "@/constants";
import { CollectionOptions, Folder, Option, Release } from "@/types";
import { getRecordColor } from "@/utils";
import { Container, FiltersContainer, Header, Section } from "./styles";

export const RecordsContainer = () => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [availableFolders, setAvailableFolders] = useState<Folder[]>([]);
  const [view, setView] = useState<string>("grid");
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [isLoading, setIsLoading] = useState(true);
  const [colorFilter, setColorFilter] = useState("all");

  const RecordsView = view === "grid" ? RecordsGrid : RecordsList;

  const filterByColor = (releases: Release[]) => {
    switch (colorFilter) {
      case "colorAll":
        return releases;
      case "black":
        return releases.filter(
          (release) =>
            getRecordColor(release.basicInformation.formats[0]) === "black"
        );
      case "color":
        return releases.filter(
          (release) =>
            getRecordColor(release.basicInformation.formats[0]) !== "black"
        );
    }

    return releases;
  };

  const fetchFoldersRequest = async () => {
    const folders: Folder[] = await getFolders();
    setAvailableFolders(folders);
  };

  const fetchCollectionRequest = async (
    params: CollectionOptions,
    currentPage: number
  ) => {
    setIsLoading(true);
    const collection = await getCollections({
      ...params,
      page: currentPage,
    });
    setReleases((prev) => [...prev, ...collection.releases]);
    setPages(collection.pagination.pages);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFoldersRequest();
  }, []);

  useEffect(() => setCurrentPage(1), [filters]);

  useEffect(() => {
    if (currentPage !== 0) {
      fetchCollectionRequest(filters, currentPage);
    }
  }, [filters, currentPage]);

  const filtersArray = [
    {
      title: "View",
      data: [
        { id: "grid", name: "Grid" },
        { id: "list", name: "List" },
      ],
      activeOption: view,
      handleClick: (option: Option<string>) => {
        setView(option.id);
      },
      fullRow: true,
    },
    {
      title: "Format",
      data: availableFolders,
      activeOption: filters.folder,
      handleClick: (option: Option<number>) => {
        setReleases([]);
        setFilters((prev) => ({ ...prev, folder: option.id }));
      },
    },
    {
      title: "Color",
      data: [
        { id: "all", name: "All" },
        { id: "black", name: "Black" },
        { id: "color", name: "Color" },
      ],
      activeOption: colorFilter,
      handleClick: (option: Option<string>) => {
        setColorFilter(option.id);
      },
    },
  ];

  const sortArray = [
    {
      title: "Sort by",
      data: [
        { id: "added", name: "Date added" },
        { id: "artist", name: "Artists" },
        { id: "title", name: "Title" },
      ],
      activeOption: filters.sort,
      handleClick: (option: Option<string>) => {
        setReleases([]);
        setFilters((prev) => ({ ...prev, sort: option.id }));
      },
    },
    {
      title: "Sort order",
      data: [
        { id: "desc", name: "Desc" },
        { id: "asc", name: "Asc" },
      ],
      activeOption: filters.sortOrder,
      handleClick: (option: Option<string>) => {
        setReleases([]);
        setFilters((prev) => ({ ...prev, sortOrder: option.id }));
      },
    },
  ];

  return (
    <Container>
      <Header>
        <Section>
          <FiltersContainer>
            {filtersArray.map((filter) => (
              <FilterGroup {...filter} key={filter.title} />
            ))}
          </FiltersContainer>
        </Section>
        <Section>
          <FiltersContainer>
            {sortArray.map((sortOption) => (
              <FilterGroup {...sortOption} key={sortOption.title} />
            ))}
          </FiltersContainer>
        </Section>
      </Header>
      <InfiniteScroll
        dataLength={releases.length}
        next={() => setCurrentPage((prev) => prev + 1)}
        hasMore={currentPage < pages}
        loader={<RecordsGrid loader />}
        endMessage={
          !!releases.length ? (
            <p className="text-center">End</p>
          ) : (
            <RecordsGrid loader />
          )
        }
        scrollThreshold={0.9}
      >
        <RecordsView releases={filterByColor(releases)} />
      </InfiniteScroll>
    </Container>
  );
};
