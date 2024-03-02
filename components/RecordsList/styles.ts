import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin: 0 0.5rem;

  @media (min-width: 640px) {
    gap: 1rem;
    margin: 0 1rem;
  }
`;
