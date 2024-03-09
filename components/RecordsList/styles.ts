import styled from "styled-components";

type ListContainerProps = {
  isEmpty?: boolean;
};

export const ListContainer = styled.div<ListContainerProps>`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin: 0 0.5rem;

  @media (min-width: 640px) {
    gap: 1rem;
    margin: 0.5rem 1rem;

    ${({ isEmpty }) => isEmpty && "margin: 0 1rem"};
  }
`;
