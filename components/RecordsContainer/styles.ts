import styled from "styled-components";

export const Container = styled.div`
  margin: 0.5rem;
  max-width: 1200px;
`;

export const Section = styled.section`
  & + & {
    margin: 1rem 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4;
  justify-content: space-between;
`;
