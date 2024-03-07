import { Color } from "./enums";

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
  "Blood Moon Marbled": "orange",
  "Clear With Red & Yellow Swirl": "sandybrown",
  "Clear W/ Yellow Splatter": "beige",
  "Dark Pink": "tomato",
  "Picture Disc":
    "radial-gradient(circle, rgba(255,0,0,1) 8%, rgba(255,139,0,1) 14%, rgba(0,255,51,1) 32%, rgba(0,251,255,1) 48%, rgba(0,24,255,1) 64%, rgba(220,0,255,1) 77%, rgba(255,0,101,1) 88%)",
  blue: "royalblue",
  brown: "brown",
  clear: "whitesmoke",
  cream: "beige",
  gold: "gold",
  green: "limegreen",
  grey: "grey",
  lavender: "lavender",
  magenta: "magenta",
  orange: "orange",
  orchid: "orchid",
  peach: "yellow",
  pink: "pink",
  purple: "purple",
  red: "red",
  violet: "purple",
  white: "white",
  yellow: "yellow",
};

export const INITIAL_FILTERS = {
  folder: 0,
  sort: "added",
  sortOrder: "desc",
  page: 1,
};

export const FILTER_OPTIONS = {
  color: [
    { id: Color.all, name: "All" },
    { id: Color.black, name: "Black" },
    { id: Color.color, name: "Color" },
  ],
  sort: [
    { id: "added", name: "Date added" },
    { id: "artist", name: "Artist" },
    { id: "title", name: "Album" },
  ],
  sortOrder: [
    { id: "desc", name: "↓", a11yLabel: "Descending" },
    { id: "asc", name: "↑", a11yLabel: "Ascending" },
  ],
};
