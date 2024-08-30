import { useEffect, useState } from "react";

import { RecordImage } from "@/components/RecordImage";
import { ReleaseLink } from "@/components/ReleaseLink";
import { ALL_MEDIA } from "@/constants";
import type { Release } from "@/types";
import { formatArtists, formatReleaseDescription, isFormat } from "@/utils";

import {
  Container,
  Overlay,
  RecordIconsContainer,
  RecordText,
  RecordTitle,
  StyledRecordIcons,
} from "./styles";

type GridRecordProps = {
  release: Release;
};

export const GridRecord = ({ release }: GridRecordProps) => {
  const {
    basicInformation: { id, title, coverImage, thumb, artists, formats },
  } = release;

  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (imageError) {
      timeout = setTimeout(() => {
        setImageError(false);
      }, 1000 * 60);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [imageError]);

  return (
    <ReleaseLink id={id}>
      <Container>
        <RecordImage
          title={title}
          image={coverImage}
          fallbackImage={thumb}
          size={500}
        />
        <Overlay>
          <div>
            <RecordTitle title={title}>{title}</RecordTitle>
            <RecordText title={formatArtists(artists)}>
              {formatArtists(artists)}
            </RecordText>
          </div>
          <RecordText title={formatReleaseDescription(formats[0])}>
            {formatReleaseDescription(formats[0])}
          </RecordText>
        </Overlay>
        <RecordIconsContainer>
          {formats.map(
            (format, index) =>
              formatReleaseDescription(format) &&
              !isFormat(format.name, ALL_MEDIA) && (
                <StyledRecordIcons format={format} key={index} />
              )
          )}
        </RecordIconsContainer>
      </Container>
    </ReleaseLink>
  );
};
