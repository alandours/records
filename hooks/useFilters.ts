import { useEffect, useState } from "react";

import { FILTER_OPTIONS, INITIAL_FILTERS } from "@/constants";
import type { CollectionOptions, Folder, Option, Release } from "@/types";
import { getCollections, getFolders } from "@/app/actions";
import { Color, View } from "@/constants/enums";
import { filterByColor } from "@/utils";

export const useFilters = () => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [availableFolders, setAvailableFolders] = useState<Folder[]>([]);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [colorFilter, setColorFilter] = useState<Color>(Color.all);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [view, setView] = useState<View>(View.grid);

  const filtersOptions = [
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
      data: FILTER_OPTIONS.color,
      activeOption: colorFilter,
      handleClick: (option: Option<Color>) => {
        setColorFilter(option.id);
      },
    },
  ];

  const sortOptions = [
    {
      title: "Sort",
      data: FILTER_OPTIONS.sort,
      activeOption: filters.sort,
      handleClick: (option: Option<string>) => {
        setReleases([]);
        setFilters((prev) => ({ ...prev, sort: option.id }));
      },
    },
    {
      title: "",
      data: FILTER_OPTIONS.sortOrder,
      activeOption: filters.sortOrder,
      handleClick: (option: Option<string>) => {
        setReleases([]);
        setFilters((prev) => ({ ...prev, sortOrder: option.id }));
      },
      minWidth: "2.25rem",
    },
  ];

  const viewOptions = [
    {
      title: "View",
      data: [
        { id: View.grid, name: "Grid", a11yLabel: "View as grid" },
        { id: View.list, name: "List", a11yLabel: "View as list" },
      ],
      activeOption: view,
      handleClick: (option: Option<View>) => {
        setView(option.id);
      },
    },
  ];

  const loadMore = () => setCurrentPage((prev) => prev + 1);

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

  useEffect(() => {
    if (currentPage !== 0) {
      fetchCollectionRequest(filters, currentPage);
    }
  }, [filters, currentPage]);

  useEffect(() => setCurrentPage(1), [filters]);

  return {
    releases: filterByColor(releases, colorFilter),
    dataLength: releases.length,
    view,
    filtersOptions,
    sortOptions,
    viewOptions,
    hasMore: currentPage < pages,
    loadMore,
  };
};
