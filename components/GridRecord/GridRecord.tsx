import Image from "next/image";

import { Release } from "@/types";
import { formatArtists } from "@/utils";

type GridRecordProps = {
  release: Release;
};

export const GridRecord = ({ release }: GridRecordProps) => {
  const {
    basic_information: { title, cover_image, artists },
  } = release;

  return (
    <div className="group relative col-span-1 bg-blue-500">
      <Image
        src={cover_image}
        alt="cover_image"
        className="aspect-square object-cover"
        width={250}
        height={250}
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
      </div>
    </div>
  );
};
