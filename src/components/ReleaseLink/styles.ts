import styled from "styled-components";
import NextLink from "next/link";

type LinkProps = {
  span?: number;
};

export const Link = styled(NextLink)<LinkProps>`
  display: flex;
  width: 100%;

  ${({ span }) => span && `grid-column: span ${span}`};
`;
