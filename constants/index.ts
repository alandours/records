export const HIDDEN_ARTISTS = [];

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
  "140",
  "180",
  "address",
  "gatefold",
  "heavyweight",
  "includes poster",
  "pressing",
  "rpm",
];

export const COMMA_SEPARATOR = ", ";
export const FLAGS_SEPARATOR = " • ";

type ColorsMap = Record<string, string>;

export const COLORS: ColorsMap = {
  "Blood Moon Marbled": "orange",
  "Clear With Red & Yellow Swirl": "sandybrown",
  "Clear W/ Yellow Splatter": "beige",
  "Dark Pink": "tomato",
  blue: "royalblue",
  brown: "brown",
  clear: "whitesmoke",
  cream: "beige",
  gold: "gold",
  green: "limegreen",
  grey: "grey",
  lavender: "lavender",
  orange: "orange",
  orchid: "orchid",
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
  sort_order: "desc",
  page: 1,
};
