import { Icon } from "@/components/Icon";
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
  sort: Sort.added,
  sortOrder: SortOrder.desc,
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
    { id: Sort.added, name: "Date added" },
    { id: Sort.artist, name: "Artist" },
    { id: Sort.title, name: "Album" },
  ],
  sortOrder: [
    {
      id: SortOrder.asc,
      name: "↑",
      icon: <Icon name={Icons.asc} />,
      a11yLabel: "Ascending",
    },
    {
      id: SortOrder.desc,
      name: "↓",
      icon: <Icon name={Icons.desc} />,
      a11yLabel: "Descending",
    },
  ],
};
