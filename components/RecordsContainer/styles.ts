import styled from "styled-components";

export const Header = styled.header`
  margin: 0.5rem;

  @media (min-width: 640px) {
    margin: 3rem 1rem;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
`;

export const FiltersContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;

  & + & {
    margin-top: 1rem;
  }
`;
