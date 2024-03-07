"use client";

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { FilterGroup } from "@/components/FilterGroup";
import { RecordsGrid } from "@/components/RecordsGrid";
import { RecordsGridLoader } from "@/components/RecordsGridLoader";
import { RecordsList } from "@/components/RecordsList";
import { getCollections, getFolders } from "@/app/actions";
import { INITIAL_FILTERS } from "@/constants";
import { CollectionOptions, Folder, Option, Release } from "@/types";
import { getRecordColor } from "@/utils";
import { Container, FiltersContainer, Header, Main } from "./styles";

export const RecordsContainer = () => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [availableFolders, setAvailableFolders] = useState<Folder[]>([]);
  const [view, setView] = useState<string>("grid");
  const [filters, setFilters] = useState(INITIAL_FILTERS);
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
    const collection = await getCollections({
      ...params,
      page: currentPage,
    });
    setReleases((prev) => [...prev, ...collection.releases]);
    setPages(collection.pagination.pages);
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
      title: "Sort",
      data: [
        { id: "added", name: "Date added" },
        { id: "artist", name: "Artist" },
        { id: "title", name: "Album" },
      ],
      activeOption: filters.sort,
      handleClick: (option: Option<string>) => {
        setReleases([]);
        setFilters((prev) => ({ ...prev, sort: option.id }));
      },
    },
    {
      title: "",
      data: [
        { id: "desc", name: "↓", a11yLabel: "Descending" },
        { id: "asc", name: "↑", a11yLabel: "Ascending" },
      ],
      activeOption: filters.sortOrder,
      handleClick: (option: Option<string>) => {
        setReleases([]);
        setFilters((prev) => ({ ...prev, sortOrder: option.id }));
      },
      minWidth: "2.25rem",
    },
  ];

  const viewArray = [
    {
      title: "View",
      data: [
        { id: "grid", name: "Grid", a11yLabel: "View as grid" },
        { id: "list", name: "List", a11yLabel: "View as list" },
      ],
      activeOption: view,
      handleClick: (option: Option<string>) => {
        setView(option.id);
      },
    },
  ];

  return (
    <Main>
      <Container>
        <Header>
          <FiltersContainer>
            {filtersArray.map((filter) => (
              <FilterGroup {...filter} key={filter.title} />
            ))}
          </FiltersContainer>
          <FiltersContainer>
            <FiltersContainer>
              {sortArray.map((sortOption) => (
                <FilterGroup {...sortOption} key={sortOption.title} />
              ))}
            </FiltersContainer>
            {viewArray.map((sortOption) => (
              <FilterGroup {...sortOption} key={sortOption.title} />
            ))}
          </FiltersContainer>
        </Header>
        <InfiniteScroll
          dataLength={releases.length}
          next={() => setCurrentPage((prev) => prev + 1)}
          hasMore={currentPage < pages}
          loader={<RecordsGridLoader />}
          endMessage={
            !!releases.length ? (
              <p className="text-center">End</p>
            ) : (
              <RecordsGridLoader />
            )
          }
          scrollThreshold={0.9}
        >
          <RecordsView releases={filterByColor(releases)} />
        </InfiniteScroll>
      </Container>
    </Main>
  );
};
