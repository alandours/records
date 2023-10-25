import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { getCollections, getFolders } from "@/app/actions";
import { FILTER_OPTIONS, INITIAL_FOLDERS } from "@/constants";
import { Color, Icons, Sort, SortOrder, View } from "@/constants";
import { Icon } from "@/components/Icon";
import type {
  CollectionOptions,
  Folder,
  Option,
  Release,
  SearchParamsType,
} from "@/types";
import { filterByColor, getInitialFilters, getInitialView } from "@/utils";

export const useFilters = (searchParams: SearchParamsType) => {
  const router = useRouter();
  const pathname = usePathname();

  const [releases, setReleases] = useState<Release[]>([]);
  const [availableFolders, setAvailableFolders] =
    useState<Folder[]>(INITIAL_FOLDERS);
  const [filters, setFilters] = useState(getInitialFilters(searchParams));
  const [colorFilter, setColorFilter] = useState<Color>(Color.all);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [view, setView] = useState<View>(getInitialView(searchParams));

  const filtersOptions = [
    {
      name: "format",
      title: "Format",
      data: availableFolders,
      activeOption: filters.folder,
      handleClick: (option: Option<number>) => {
        setReleases([]);
        setFilters((prev) => ({ ...prev, folder: option.id }));
      },
    },
    {
      name: "color",
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
      name: "sort",
      title: "Sort",
      data: FILTER_OPTIONS.sort,
      activeOption: filters.sort,
      handleClick: (option: Option<Sort>) => {
        setReleases([]);
        setFilters((prev) => ({ ...prev, sort: option.id }));
      },
    },
    {
      name: "sortOrder",
      data: FILTER_OPTIONS.sortOrder,
      activeOption: filters.sortOrder,
      handleClick: (option: Option<SortOrder>) => {
        setReleases([]);
        setFilters((prev) => ({ ...prev, sortOrder: option.id }));
      },
      minWidth: "2.25rem",
    },
  ];

  const viewOptions = [
    {
      name: "view",
      title: "View",
      data: [
        {
          id: View.grid,
          name: "Grid",
          icon: <Icon name={Icons.grid} size="1.125rem" />,
          a11yLabel: "View as grid",
        },
        {
          id: View.list,
          name: "List",
          icon: <Icon name={Icons.list} size="1.125rem" />,
          a11yLabel: "View as list",
        },
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

  const addFiltersToUrl = useCallback(
    (view: View, filters: CollectionOptions) => {
      const filtersKeyValue = Object.entries(filters).filter(
        ([key]) => key !== "page" && key !== "folder"
      );

      const filtersQuery = [["view", view], ...filtersKeyValue]
        .map((keyValue) => keyValue.join("="))
        .join("&");

      router.replace(`${pathname}?${filtersQuery}`);
    },
    [pathname, router]
  );

  useEffect(() => {
    fetchFoldersRequest();
  }, []);

  useEffect(() => {
    if (currentPage !== 0) {
      fetchCollectionRequest(filters, currentPage);
    }
  }, [filters, currentPage]);

  useEffect(() => setCurrentPage(1), [filters]);

  useEffect(() => {
    addFiltersToUrl(view, filters);
  }, [view, filters, addFiltersToUrl]);

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
