import { ReleaseLink } from "@/components/ReleaseLink";
import { ALL_MEDIA } from "@/constants";
import type { Release } from "@/types";
import { formatArtists, formatReleaseDescription, isFormat } from "@/utils";

import {
  Container,
  Image,
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
    basicInformation: { id, title, coverImage, artists, formats },
  } = release;

  return (
    <ReleaseLink id={id}>
      <Container>
        <Image
          src={coverImage}
          alt={`${title} album cover`}
          width={500}
          height={500}
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
