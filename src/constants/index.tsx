import { AvailableFolders } from "./filters";

export * from "./icons";
export * from "./filters";
export * from "./site";

export const AVAILABLE_FOLDERS = [
  AvailableFolders.LPS,
  AvailableFolders.SINGLES,
];

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
  "17203",
  "180",
  "address",
  "cut",
  "gatefold",
  "gz media",
  "heavyweight",
  "includes poster",
  "matte sleeve",
  "pressing",
  "translucent text",
  "rpm",
];

export const ALL_MEDIA = "all media";

export const COMMA_SEPARATOR = ", ";
export const FLAGS_SEPARATOR = " • ";

type ColorsMap = Record<string, string>;

export const COLORS: ColorsMap = {
  "Clear w/ Black Swirl [Black Smoke]": "#7D7A74",
  "Black / White Marbled": "#3C3C3C",
  "Black Ice": "#372818",
  "Blue / White Marbled": "#0C29C1",
  "Blue [Deep Sea]": "#0900B4",
  "Blue [Light Blue] Translucent": "#3EF0F4",
  "Blue [Sea Blue]": "#006688",
  "Blue With Black & White Swirl [Safe Place Swirl]": "#366196",
  "Blue with Pink splatter": "#91BFD5",
  "Blood Moon Marbled": "#F18E00",
  "Clear W/ Yellow Splatter": "#F8F1B4",
  "Clear With Light Blue Hi-Melt": "#007FED",
  "Clear With Red & Yellow Swirl": "#E3BD2D",
  "Coke Bottle": "#B1F3D1",
  "Dark Pink": "#F32B1B",
  "Dark Yellow": "#E5AC03",
  "Fruit Punch": "#8E2045",
  "Green Lime": "#ADE90E",
  "Green Translucent [Bathwater]": "#A0E2C0",
  "Green Translucent": "#019D40",
  "[Light Blue] Translucent": "#3EF0F4",
  "Coral [My Kink Is Coral]": "#DD6622",
  "Orange/Yellow/Brown": "#F18E00",
  "Picture Disc":
    "radial-gradient(circle, rgba(255,0,0,1) 8%, rgba(255,139,0,1) 14%, rgba(0,255,51,1) 32%, rgba(0,251,255,1) 48%, rgba(0,24,255,1) 64%, rgba(220,0,255,1) 77%, rgba(255,0,101,1) 88%)",
  "Red Marble": "#BA122B",
  "Red / White Marbled": "#D30C06",
  "Red Velvet": "#AA3333",
  "Seafoam Green": "#8BE5AD",
  "Translucent Green": "#37CBA1",
  bathwater: "#7BD1BC",
  blue: "#0354F6",
  bone: "#FFEEEE",
  brown: "#A87138",
  clear: "#F0EFE9",
  copper: "#DD5522",
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
  translucent: "#F0EFE9", // Last
};

export const EXCLUDE_COLORS = [
  "Dark Blue Labels",
  "mastered",
  "Orange Labels",
  "remastered",
  "silver edition",
];
