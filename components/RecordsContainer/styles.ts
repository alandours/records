import styled from "styled-components";

export const Container = styled.div`
  margin: 0.5rem;
  max-width: 1200px;
`;

export const Section = styled.section`
  & + & {
    margin: 2rem 0;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4;
  justify-content: space-between;
`;
