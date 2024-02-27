import Image from "next/image";

import { Release } from "@/types";
import {
  formatArtists,
  formatReleaseDescription,
  getRecordColor,
} from "@/utils";

type ListRecordProps = {
  release: Release;
};

export const ListRecord = ({ release }: ListRecordProps) => {
  const {
    basic_information: { title, cover_image, artists, formats },
  } = release;

  return (
    <div className="col-span-1 flex bg-gray-50 rounded-r-md shadow-sm">
      <Image
        src={cover_image}
        alt="cover_image"
        className="aspect-square object-cover shadow-sm"
        width={150}
        height={150}
      />
      <div className=" w-full text-sm p-4 flex flex-col gap-2">
        <div>
          <div className="text-ellipsis whitespace-nowrap overflow-hidden font-bold">
            {title}
          </div>
          <div>{formatArtists(artists)}</div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="rounded-full w-4 h-4 flex justify-center items-center shadow-md"
            style={{ background: getRecordColor(formats[0]) }}
          />
          {formatReleaseDescription(formats[0])}
        </div>
      </div>
    </div>
  );
};
