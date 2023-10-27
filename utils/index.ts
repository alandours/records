import {
  HIDDEN_FLAGS,
  HIDDEN_FREE_TEXT,
  COMMA_SEPARATOR,
  FLAGS_SEPARATOR,
  COLORS,
  ALL_MEDIA,
  INITIAL_FILTERS,
  EXCLUDE_COLORS,
  Color,
  Sort,
  SortOrder,
  View,
} from "@/constants";
import type {
  CollectionOptions,
  Release,
  ReleaseArtist,
  ReleaseFormat,
  SearchParamsType,
} from "@/types";

const removeArtistInstanceNumber = (artist: ReleaseArtist): string =>
  artist.name.replace(/\W\([0-9]+\)$/, "");

const normalize = (str: string): string => str.toLowerCase().replace(" ", "");

export const formatArtists = (artists: ReleaseArtist[]): string =>
  artists.map(removeArtistInstanceNumber).join(COMMA_SEPARATOR);

export const formatReleaseFlags = (format: ReleaseFormat): string => {
  const allowedDescriptions = format.descriptions?.filter(
    (description) =>
      !HIDDEN_FLAGS.some((hiddenFlag) =>
        normalize(description).includes(hiddenFlag)
      )
  );

  return allowedDescriptions ? allowedDescriptions.join(COMMA_SEPARATOR) : "";
};

const formatFreeText = (freeText: string, removeColorKey = true): string => {
  const filterColorKey = (text: string): boolean =>
    removeColorKey ? !getColorKey(text) : true;

  const allowedFreeText = (text: string): boolean =>
    !HIDDEN_FREE_TEXT.some((hiddenFreeText) =>
      normalize(text).includes(normalize(hiddenFreeText))
    ) && filterColorKey(text);

  return freeText
    .split(COMMA_SEPARATOR)
    .filter(allowedFreeText)
    .join(FLAGS_SEPARATOR);
};

export const formatReleaseDescription = (format: ReleaseFormat): string => {
  const flags = formatReleaseFlags(format);
  const text = formatFreeText(format.text || "");

  let description = isFormat(format.name, ALL_MEDIA) ? "" : format.name;

  if (flags) {
    description += description ? `${FLAGS_SEPARATOR}${flags}` : flags;
  }

  if (text) {
    description += description ? `${FLAGS_SEPARATOR}${text}` : text;
  }

  return description;
};

const getColorKey = (text: string): string | undefined =>
  Object.keys(COLORS).find(
    (color) =>
      normalize(text).includes(normalize(color)) &&
      !EXCLUDE_COLORS.some((color) =>
        normalize(text).includes(normalize(color))
      )
  );

export const getRecordColor = (format: ReleaseFormat): string => {
  const text = formatFreeText(format.text || "", false);

  const colorKey = getColorKey(text);

  return colorKey ? COLORS[colorKey] : "black";
};

export const getReleaseUrl = (id: number): string =>
  `https://www.discogs.com/release/${id}`;

export const isFormat = (formatName: string, format: string) =>
  formatName.toLowerCase() === format;

// export const getAllFormats = (formats: ReleaseFormat[]): ReleaseFormat[] => {
//   const allowedFormats = formats.filter(
//     (format) => !isFormat(format.name, ALL_MEDIA)
//   );

//   return allowedFormats;
// };

export const filterByColor = (releases: Release[], color: Color): Release[] => {
  switch (color) {
    case Color.color:
      return releases.filter((release) =>
        release.basicInformation.formats.some(
          (format) => getRecordColor(format) !== Color.black
        )
      );
    case Color.black:
      return releases.filter((release) =>
        release.basicInformation.formats.some(
          (format) => getRecordColor(format) === Color.black
        )
      );
    default:
      return releases;
  }
};

export const getInitialFilters = ({
  sort,
  sortOrder,
}: SearchParamsType): CollectionOptions => ({
  ...INITIAL_FILTERS,
  sort: Object.values(Sort).includes(sort) ? sort : INITIAL_FILTERS.sort,
  sortOrder: Object.values(SortOrder).includes(sortOrder)
    ? sortOrder
    : INITIAL_FILTERS.sortOrder,
});

export const getInitialView = ({ view }: SearchParamsType): View =>
  view && Object.values(View).includes(view) ? view : View.grid;
