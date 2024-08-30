import { Home } from "@/components/Home";
import { SearchParamsType } from "@/types";
import { getInitialFilters, getInitialView } from "@/utils";

import { getCollections } from "./actions";

type HomePageProps = {
  searchParams: SearchParamsType;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const searchParamsData = {
    currentPage: 1,
    filters: getInitialFilters(searchParams),
    view: getInitialView(searchParams),
  };

  const collection = await getCollections({
    ...searchParamsData.filters,
    page: searchParamsData.currentPage,
  });

  const initialData = {
    ...searchParamsData,
    releases: collection.releases,
    pages: collection.pagination.pages,
  };

  return <Home initialData={initialData} />;
}
