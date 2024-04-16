"use server";

import { Camelized, camelizeKeys } from "humps";

import { AVAILABLE_FOLDERS } from "@/constants";
import type {
  CollectionOptions,
  CollectionResponse,
  FoldersResponse,
} from "@/types";

const BASE_URL = "https://api.discogs.com";

const RESULTS_PER_PAGE = 20;

const PATHS = {
  folders: `/users/${process.env.DISCOGS_USERNAME}/collection/folders`,
  collection: ({ folder, sort, sortOrder, page }: CollectionOptions) =>
    `/users/${process.env.DISCOGS_USERNAME}/collection/folders/${folder}/releases?sort=${sort}&sort_order=${sortOrder}&page=${page}&per_page=${RESULTS_PER_PAGE}`,
};

const HEADERS = {
  "Content-Type": "application/json",
  Authorization: `Discogs token=${process.env.DISCOGS_TOKEN}`,
};

const client = async <T>(endpoint: string): Promise<Camelized<T>> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: HEADERS,
  });

  return camelizeKeys(await response.json());
};

export const getFolders = async () => {
  const { folders } = await client<FoldersResponse>(PATHS.folders);

  return folders.filter((folder) => AVAILABLE_FOLDERS.includes(folder.id));
};

export const getCollections = async (params: CollectionOptions) => {
  const { pagination, releases } = await client<CollectionResponse>(
    PATHS.collection(params)
  );

  const filteredReleases = releases.map(
    ({ instanceId, dateAdded, basicInformation, folderId }) => ({
      instanceId,
      dateAdded,
      basicInformation,
      folderId,
    })
  );

  return { pagination, releases: filteredReleases };
};
