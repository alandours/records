import Image from "next/image";

import { RecordIcons } from "@/components/RecordIcons";
import { ReleaseLink } from "@/components/ReleaseLink";
import { Release } from "@/types";
import { formatArtists, formatReleaseDescription } from "@/utils";

import { Container, Content, Description, RecordTitle } from "./styles";

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
          width={230}
          height={230}
        />
        <Content>
          <div>
            <RecordTitle title={title}>{title}</RecordTitle>
            <div>{formatArtists(artists)}</div>
          </div>
          {formats.map((format, index) => (
            <Description key={index}>
              {formatReleaseDescription(format) && (
                <RecordIcons format={format} />
              )}
              {formatReleaseDescription(format)}
            </Description>
          ))}
        </Content>
      </Container>
    </ReleaseLink>
  );
};
