import { RecordText } from "@/components/GridRecord/styles";
import { RecordIcons } from "@/components/RecordIcons";
import { RecordImage } from "@/components/RecordImage";
import { ReleaseLink } from "@/components/ReleaseLink";
import { ALL_MEDIA } from "@/constants";
import type { Release } from "@/types";
import { formatArtists, formatReleaseDescription, isFormat } from "@/utils";

import {
  Container,
  Content,
  Description,
  DescriptionContainer,
  RecordTitle,
} from "./styles";

type ListRecordProps = {
  release: Release;
};

export const ListRecord = ({ release }: ListRecordProps) => {
  const {
    basicInformation: { id, title, coverImage, thumb, artists, formats },
  } = release;

  return (
    <ReleaseLink id={id}>
      <Container>
        <RecordImage
          title={title}
          image={coverImage}
          fallbackImage={thumb}
          size={400}
          list
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
                $fullRow={isFormat(format.name, ALL_MEDIA)}
              >
                {formatReleaseDescription(format) && (
                  <RecordIcons format={format} />
                )}
                <RecordText>{formatReleaseDescription(format)}</RecordText>
              </Description>
            ))}
          </DescriptionContainer>
        </Content>
      </Container>
    </ReleaseLink>
  );
};
