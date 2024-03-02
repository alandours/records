import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  gap: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
    margin: 1rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export const GridPlaceholder = styled.div`
  background-color: lightgrey;
  grid-column: span 1;
`;

export const GridPlaceholderInner = styled.div`
  aspect-ratio: 1 / 1;
  height: auto;
  max-width: 100%;
  width: 500px;
`;
