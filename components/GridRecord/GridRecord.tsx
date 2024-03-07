import { ReleaseLink } from "@/components/ReleaseLink";
import { Color } from "@/constants/enums";
import type { Release } from "@/types";
import {
  formatArtists,
  formatReleaseDescription,
  getRecordColor,
} from "@/utils";

import {
  Container,
  Image,
  Overlay,
  RecordColor,
  RecordText,
  RecordTitle,
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

        {getRecordColor(formats[0]) !== Color.black && (
          <RecordColor color={getRecordColor(formats[0])} />
        )}
      </Container>
    </ReleaseLink>
  );
};
