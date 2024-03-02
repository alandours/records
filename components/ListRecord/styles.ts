import NextImage from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  background: lightgrey;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  display: flex;
  width: 100%;
`;

export const Image = styled(NextImage)`
  aspect-ratio: 1 / 1;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  gap: 0.5rem;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
`;

export const RecordTitle = styled.div`
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

type DescriptionProps = {
  fullRow: boolean;
};

export const Description = styled.div<DescriptionProps>`
  align-items: center;
  display: flex;
  gap: 0.25rem;

  ${({ fullRow }) => fullRow && "flex-basis: 100%"};
`;
