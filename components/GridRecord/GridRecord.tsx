import Image from "next/image";

import { Release } from "@/types";
import {
  formatArtists,
  formatReleaseDescription,
  getRecordColor,
} from "@/utils";

type GridRecordProps = {
  release: Release;
};

export const GridRecord = ({ release }: GridRecordProps) => {
  const {
    basic_information: { title, cover_image, artists, formats },
  } = release;

  return (
    <div className="group relative col-span-1 max-w-full max-h-auto">
      <Image
        src={cover_image}
        alt="cover_image"
        className="aspect-square object-cover"
        width={500}
        height={500}
      />
      <div className="absolute bottom-0 z-20 w-full p-3 gap-2 flex flex-col bg-black text-blue-50 text-xs opacity-0 group-hover:opacity-80 transition-opacity duration-300">
        <div>
          <div
            className="text-ellipsis whitespace-nowrap overflow-hidden font-bold"
            title={title}
          >
            {title}
          </div>
          <div
            className="text-ellipsis whitespace-nowrap overflow-hidden"
            title={formatArtists(artists)}
          >
            {formatArtists(artists)}
          </div>
        </div>
        <div
          className="text-ellipsis whitespace-nowrap overflow-hidden"
          title={formatReleaseDescription(formats[0])}
        >
          {formatReleaseDescription(formats[0])}
        </div>
      </div>

      {getRecordColor(formats[0]) !== "black" && (
        <div
          className="absolute top-3 right-3 rounded-full w-8 h-8 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: getRecordColor(formats[0]) }}
        />
      )}
    </div>
  );
};
