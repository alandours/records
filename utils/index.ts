import {
  HIDDEN_ARTISTS,
  HIDDEN_FLAGS,
  HIDDEN_FREE_TEXT,
  COMMA_SEPARATOR,
  FLAGS_SEPARATOR,
  COLORS,
} from "@/constants";
import { ReleaseArtist, ReleaseFormat } from "@/types";

const removeArtistInstanceNumber = (artist: ReleaseArtist): string =>
  artist.name.replace(/\W\([0-9]+\)$/, "");

const normalize = (str: string): string => str.toLowerCase().replace(" ", "");

export const formatArtists = (artists: ReleaseArtist[]): string => {
  const allowedArtists = artists.filter(
    (artist) => !HIDDEN_ARTISTS.includes(normalize(artist.name))
  );

  return allowedArtists.map(removeArtistInstanceNumber).join(COMMA_SEPARATOR);
};

export const formatReleaseFlags = (format: ReleaseFormat): string => {
  const allowedDescriptions = format.descriptions.filter(
    (description) =>
      !HIDDEN_FLAGS.some((hiddenFlag) =>
        normalize(description).includes(hiddenFlag)
      )
  );

  return allowedDescriptions.join(COMMA_SEPARATOR);
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

  let description = format.name;

  if (flags) {
    description += `${FLAGS_SEPARATOR}${flags}`;
  }

  if (text) {
    description += `${FLAGS_SEPARATOR}${text}`;
  }

  return description;
};

const getColorKey = (text: string): string | undefined =>
  Object.keys(COLORS).find((color) =>
    normalize(text).includes(normalize(color))
  );

export const getRecordColor = (format: ReleaseFormat): string => {
  const text = formatFreeText(format.text || "", false);

  const colorKey = getColorKey(text);

  return colorKey ? COLORS[colorKey] : "black";
};

export const getReleaseUrl = (id: number): string =>
  `https://www.discogs.com/release/${id}`;
