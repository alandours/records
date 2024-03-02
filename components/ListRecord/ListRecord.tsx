import { RecordIcons } from "@/components/RecordIcons";
import { ReleaseLink } from "@/components/ReleaseLink";
import { ALL_MEDIA } from "@/constants";
import { Release } from "@/types";
import { formatArtists, formatReleaseDescription, isFormat } from "@/utils";

import {
  Container,
  Content,
  Description,
  DescriptionContainer,
  Image,
  RecordTitle,
} from "./styles";

type ListRecordProps = {
  release: Release;
};

export const ListRecord = ({ release }: ListRecordProps) => {
  const {
    basicInformation: { id, title, coverImage, artists, formats },
  } = release;

  return (
    <ReleaseLink id={id}>
      <Container>
        <Image
          src={coverImage}
          alt={`${title} album cover`}
          width={150}
          height={150}
        />
        <Content>
          <div>
            <RecordTitle title={title}>{title}</RecordTitle>
            <div>{formatArtists(artists)}</div>
          </div>
          <DescriptionContainer>
            {formats.map((format, index) => (
              <Description
                key={index}
                fullRow={isFormat(format.name, ALL_MEDIA)}
              >
                {formatReleaseDescription(format) && (
                  <RecordIcons format={format} />
                )}
                {formatReleaseDescription(format)}
              </Description>
            ))}
          </DescriptionContainer>
        </Content>
      </Container>
    </ReleaseLink>
  );
};
