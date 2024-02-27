import { HIDDEN_ARTISTS, COMMA_SEPARATOR } from "@/constants";
import { ReleaseArtist } from "@/types";

const removeArtistInstanceNumber = (artist: ReleaseArtist): string =>
  artist.name.replace(/\W\([0-9]+\)$/, "");

const normalize = (str: string): string => str.toLowerCase().replace(" ", "");

export const formatArtists = (artists: ReleaseArtist[]): string => {
  const allowedArtists = artists.filter(
    (artist) => !HIDDEN_ARTISTS.includes(normalize(artist.name))
  );

  return allowedArtists.map(removeArtistInstanceNumber).join(COMMA_SEPARATOR);
};
