import styled from "styled-components";

type LinkProps = {
  span?: number;
};

export const Link = styled.a<LinkProps>`
  display: flex;
  width: 100%;

  ${({ span }) => span && `grid-column: span ${span}`};
`;
