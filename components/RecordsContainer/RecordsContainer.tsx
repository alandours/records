"use client";

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { RecordsGrid } from "@/components/RecordsGrid";
import { RecordsList } from "@/components/RecordsList";
import { Folder, Release } from "@/types";
import { INITIAL_FILTERS } from "@/constants";
import {
  CollectionOptions,
  fetchCollection,
  fetchFolders,
} from "@/app/actions";
import { getRecordColor } from "@/utils";
import { GridLoader } from "../GridLoader";
import { FilterGroup } from "@/components/FilterGroup";

export const RecordsContainer = () => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [availableFolders, setAvailableFolders] = useState<Folder[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [isLoading, setIsLoading] = useState(true);
  const [colorFilter, setColorFilter] = useState("all");

  const RecordsView = view === "grid" ? RecordsGrid : RecordsList;

  const filterByColor = (releases: Release[]) => {
    switch (colorFilter) {
      case "color_all":
        return releases;
      case "black":
        return releases.filter(
          (release) =>
            getRecordColor(release.basic_information.formats[0]) === "black"
        );
      case "color":
        return releases.filter(
          (release) =>
            getRecordColor(release.basic_information.formats[0]) !== "black"
        );
    }

    return releases;
  };

  const fetchFoldersRequest = async () => {
    const folders: Folder[] = await fetchFolders();
    setAvailableFolders(folders);
  };

  const fetchCollectionRequest = async (
    params: CollectionOptions,
    currentPage: number
  ) => {
    setIsLoading(true);
    const collection = await fetchCollection({ ...params, page: currentPage });
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
      activeKey: view,
      handleClick: (option: any) => {
        setView(option.id);
      },
    },
    {
      title: "Format",
      data: availableFolders,
      activeKey: filters.folder,
      handleClick: (option: any) => {
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
      activeKey: colorFilter,
      handleClick: (option: any) => {
        setColorFilter(option.id);
      },
    },
  ];

  return (
    <div>
      <section>
        <h2 className="text-lg font-bold mb-2">Filters</h2>
        <div className="flex gap-4">
          {filtersArray.map((filter) => (
            <FilterGroup {...filter} key={filter.title} />
          ))}
        </div>
      </section>
      <div style={{ opacity: isLoading ? "0.5" : "1" }}>
        <InfiniteScroll
          dataLength={releases.length}
          next={() => setCurrentPage((prev) => prev + 1)}
          hasMore={currentPage < pages}
          loader={<GridLoader />}
          endMessage={
            !!releases.length ? (
              <p className="text-center">End</p>
            ) : (
              <GridLoader />
            )
          }
          scrollThreshold={0.9}
        >
          <RecordsView releases={filterByColor(releases)} />
        </InfiniteScroll>
      </div>
    </div>
  );
};
