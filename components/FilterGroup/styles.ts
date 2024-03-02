import styled from "styled-components";

type FilterGroupContainerProps = {
  fullRow: boolean;
};

export const FilterGroupContainer = styled.div<FilterGroupContainerProps>`
  ${({ fullRow }) => fullRow && "flex-basis: 100%;"}
  margin: 0.5rem 0;
`;

export const FilterGroupTitle = styled.div`
  margin-bottom: 0.5rem;
`;

export const FilterOptions = styled.div`
  display: flex;
  background-color: lightblue;
  padding: 0.375rem;
  border-radius: 0.375rem;
  width: fit-content;
`;
