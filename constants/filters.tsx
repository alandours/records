import type { Folder } from "@/types";

import { Icons } from "./icons";

export enum View {
  grid = "grid",
  list = "list",
}

export enum Color {
  black = "black",
  color = "color",
  all = "all",
}

export enum Sort {
  added = "added",
  artist = "artist",
  title = "title",
}

export enum SortOrder {
  asc = "asc",
  desc = "desc",
}

export const INITIAL_FILTERS = {
  folder: 0,
  sort: Sort.artist,
  sortOrder: SortOrder.asc,
  page: 1,
};

export const INITIAL_FOLDERS = [{ id: 0 }, { id: 1 }, { id: 2 }] as Folder[];

export const FILTER_OPTIONS = {
  color: [
    { id: Color.all, name: "All" },
    { id: Color.black, name: "Black" },
    { id: Color.color, name: "Color" },
  ],
  sort: [
    { id: Sort.artist, name: "Artist" },
    { id: Sort.title, name: "Album" },
    { id: Sort.added, name: "Date added" },
  ],
  sortOrder: [
    {
      id: SortOrder.asc,
      name: "↑",
      icon: { name: Icons.asc },
      a11yLabel: "Ascending",
    },
    {
      id: SortOrder.desc,
      name: "↓",
      icon: { name: Icons.desc },
      a11yLabel: "Descending",
    },
  ],
};
