import type { Folder } from "@/types";

import { Color, Sort, SortOrder } from "./enums";

export const AVAILABLE_FOLDERS = [0, 6467602, 6467605];

export const HIDDEN_FLAGS = [
  '12"',
  "45rpm",
  "album",
  "ep",
  "lp",
  "reissue",
  "remastered",
  "repress",
  "single",
  "rpm",
  "stereo",
  "vinyl",
];

export const HIDDEN_FREE_TEXT = [
  "(r) on label",
  "140",
  "180",
  "address",
  "cut",
  "gatefold",
  "gz media",
  "heavyweight",
  "includes poster",
  "pressing",
  "rpm",
];

export const ALL_MEDIA = "all media";

export const COMMA_SEPARATOR = ", ";
export const FLAGS_SEPARATOR = " • ";

type ColorsMap = Record<string, string>;

export const COLORS: ColorsMap = {
  "Black / White Marbled": "#3C3C3C",
  "Blue / White Marbled": "#0C29C1",
  "Blue [Deep Sea]": "#0900B4",
  "Blue [Light Blue] Transparent": "#3EF0F4",
  "Blood Moon Marbled": "#F18E00",
  "Clear W/ Yellow Splatter": "#F8F1B4",
  "Clear With Light Blue Hi-Melt": "#007FED",
  "Clear With Red & Yellow Swirl": "#F8F1B4",
  "Coke Bottle": "#B1F3D1",
  "Dark Pink": "#F32B1B",
  "Dark Yellow": "#E5AC03",
  "Green Lime": "#ADE90E",
  "[Light Blue] Translucent": "#3EF0F4",
  "Picture Disc":
    "radial-gradient(circle, rgba(255,0,0,1) 8%, rgba(255,139,0,1) 14%, rgba(0,255,51,1) 32%, rgba(0,251,255,1) 48%, rgba(0,24,255,1) 64%, rgba(220,0,255,1) 77%, rgba(255,0,101,1) 88%)",
  "Red Marble": "#BA122B",
  "Red / White Marbled": "#D30C06",
  "Seafoam Green": "#8BE5AD",
  "Translucent Green": "#37CBA1",
  blue: "#0354F6",
  brown: "#A87138",
  clear: "#F0EFE9",
  cream: "#F8F1B4",
  custard: "#FAD461",
  gold: "#E3BD2D",
  green: "#4AD322",
  grey: "#9F9F9F",
  lavender: "#E5B3FF",
  magenta: "#F842D2",
  orange: "#F18E00",
  orchid: "#BB2287",
  oxblood: "#951646",
  peach: "#F8E168",
  pink: "#FF70AF",
  purple: "#9E02EC",
  red: "#F32B1B",
  violet: "#BB2287",
  white: "#FFFFFF",
  yellow: "#F5DF00",
};

export const EXCLUDE_COLORS = [
  "Dark Blue Labels",
  "mastered",
  "Orange Labels",
  "remastered",
  "silver edition",
];

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
    { id: SortOrder.desc, name: "↓", a11yLabel: "Descending" },
    { id: SortOrder.asc, name: "↑", a11yLabel: "Ascending" },
  ],
};
