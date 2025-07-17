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
import { formatReleaseDescription, getReleaseUrl, isFormat } from "@/utils";
import { RecordIcons } from "@/components/RecordIcons";
import { ALL_MEDIA } from "@/constants";
import Link from "next/link";
import { ReleaseLink } from "@/components/ReleaseLink";
import { ReleaseResponse } from "@/types";
import { Camelized } from "humps";
import { notFound } from "next/navigation";

interface RecordModalProps {
  params: { id: string };
}

export default function RecordModal({ params }: RecordModalProps) {
  const [release, setRelease] = useState<Camelized<ReleaseResponse> | null>(
    null
  );

  useEffect(() => {
    const fetchRelease = async () => {
      const rel = await getRelease(params.id);
      setRelease(rel);
    };
    fetchRelease();
  }, [params.id]);

  if (!release) {
    notFound();
  }

  const { id, title, artists, images, tracklist, formats } = release || {};

  return (
    <Backdrop>
      <Modal>
        {release ? (
          <ReleaseContainer>
            <ReleaseImage src={images[0].resourceUrl} />
            <ReleaseData>
              <a
                href={getReleaseUrl(id)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <ReleaseTitle>{title}</ReleaseTitle>
              </a>
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
              <table>
                {tracklist.map((track) => (
                  <TrackRow key={track.position}>
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
