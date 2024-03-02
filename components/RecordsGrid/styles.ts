import styled from "styled-components";

type GridContainerProps = {
  isEmpty: boolean;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  gap: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
    margin: 0.5rem 1rem;

    ${({ isEmpty }) => isEmpty && "margin: 0 1rem"};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;
