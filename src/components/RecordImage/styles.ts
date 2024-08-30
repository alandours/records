import styled, { css } from "styled-components";
import NextImage from "next/image";

export const Image = styled(NextImage)<{ $blur: boolean; $list: boolean }>`
  aspect-ratio: 1 / 1;
  object-fit: cover;

  ${({ $blur }) => $blur && `filter: blur(6px)`};

  ${({ $list }) =>
    $list &&
    css`
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      max-width: 100%;

      @media (min-width: 400px) {
        max-width: 150px;
      }
    `};
`;
