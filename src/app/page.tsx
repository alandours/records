import { Home } from "@/components/Home";
import { SearchParamsType } from "@/types";
import { getInitialFilters, getInitialView } from "@/utils";

import { getCollections, getFolders } from "./actions";

interface HomePageProps {
  searchParams: SearchParamsType;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const searchParamsData = {
    currentPage: 1,
    filters: getInitialFilters(searchParams),
    view: getInitialView(searchParams),
  };

  const collectionPromise = getCollections({
    ...searchParamsData.filters,
    page: searchParamsData.currentPage,
  });

  const foldersPromise = getFolders();

  const [collection, folders] = await Promise.all([
    collectionPromise,
    foldersPromise,
  ]);

  const initialData = {
    ...searchParamsData,
    releases: collection.releases,
    folders,
    pages: collection.pagination.pages,
  };

  return <Home initialData={initialData} />;
}
