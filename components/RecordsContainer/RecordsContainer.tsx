"use client";

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { RecordsGrid } from "@/components/RecordsGrid";
import { Release } from "@/types";
import { INITIAL_FILTERS } from "@/constants";
import { CollectionOptions, fetchCollection } from "@/app/actions";
import { GridLoader } from "../GridLoader";

export const RecordsContainer = () => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => setCurrentPage(1), []);

  useEffect(() => {
    if (currentPage !== 0) {
      fetchCollectionRequest(INITIAL_FILTERS, currentPage);
    }
  }, [currentPage]);

  return (
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
        <RecordsGrid releases={releases} />
      </InfiniteScroll>
    </div>
  );
};
