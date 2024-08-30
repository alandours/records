"use client";

import { useEffect, useState } from "react";
import {
  Backdrop,
  ReleaseContainer,
  Modal,
  ReleaseData,
  ReleaseTitle,
  ArtistThumbnail,
  ArtistLink,
  ReleaseImage,
  TrackRow,
  TrackData,
  ReleaseFormat,
} from "./styles";
import { getRelease } from "@/app/actions";
import { formatReleaseDescription, isFormat } from "@/utils";
import { RecordIcons } from "@/components/RecordIcons";
import { ALL_MEDIA } from "@/constants";

interface RecordModalProps {
  params: { id: string };
}

export default function RecordModal({ params }: RecordModalProps) {
  const [release, setRelease] = useState(null);

  useEffect(() => {
    const fetchRelease = async () => {
      const rel = await getRelease(params.id);
      setRelease(rel);
    };
    fetchRelease();
  }, [params.id]);

  console.log("release", release);

  const { title, artists, extraartists, images, tracklist, formats } =
    release || {};

  return (
    <Backdrop>
      <Modal>
        {release ? (
          <ReleaseContainer>
            <ReleaseImage src={images[0].resourceUrl} />
            <ReleaseData>
              <ReleaseTitle>{title}</ReleaseTitle>
              <ReleaseFormat>
                {formats.map(
                  (format, index) =>
                    formatReleaseDescription(format) &&
                    !isFormat(format.name, ALL_MEDIA) && (
                      <RecordIcons format={format} key={index} />
                    )
                )}
                {formatReleaseDescription(formats[0])}
              </ReleaseFormat>

              {artists.map((artist) => (
                <ArtistLink
                  href={`https://www.discogs.com/artist/${artist.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={artist.id}
                >
                  {/* <ArtistThumbnail src={artist.thumbnailUrl} alt="pic" /> */}
                  <div>{artist.name}</div>
                </ArtistLink>
              ))}
              {/* <div>{release.country}</div>
              {extraartists.map((artist) => (
                <a
                  href={`https://www.discogs.com/artist/${artist.id}`}
                  target="_blank"
                  key={artist.id}
                  style={{ display: "flex" }}
                >
                  <div>{artist.name}</div>
                </a>
              ))} */}
              <table>
                {tracklist.map((track) => (
                  <TrackRow>
                    <TrackData>{track.position}</TrackData>
                    <TrackData>{track.title}</TrackData>
                    <TrackData>{track.duration}</TrackData>
                  </TrackRow>
                ))}
              </table>
            </ReleaseData>
          </ReleaseContainer>
        ) : (
          "loading..."
        )}
      </Modal>
    </Backdrop>
  );
}
