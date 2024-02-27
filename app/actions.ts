"use server";

import { CollectionResponse } from "@/types";

export type CollectionOptions = {
  folder: number;
  sort: string;
  sort_order: string;
  page: number;
};

export const fetchCollection = async ({
  folder,
  sort,
  sort_order,
  page,
}: CollectionOptions) => {
  const response = await fetch(
    `https://api.discogs.com/users/${process.env.DISCOGS_USERNAME}/collection/folders/${folder}/releases?sort=${sort}&sort_order=${sort_order}&page=${page}&per_page=100`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Discogs token=${process.env.DISCOGS_TOKEN}`,
      },
    }
  );

  const { pagination, releases }: CollectionResponse = await response.json();

  const filteredReleases = releases.map(
    ({ instance_id, date_added, basic_information, folder_id }) => ({
      instance_id,
      date_added,
      basic_information,
      folder_id,
    })
  );

  return { pagination, releases: filteredReleases };
};
