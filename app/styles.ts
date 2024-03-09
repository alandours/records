import { theme } from "@/constants/theme";
import styled from "styled-components";

export const Header = styled.header`
  margin: 0.5rem;

  @media (min-width: 640px) {
    margin: 3rem 1rem;
  }
`;

export const Main = styled.main`
  color: ${theme.light.main.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.light.main.background};

  @media (prefers-color-scheme: dark) {
    color: ${theme.dark.main.color};
    background: ${theme.dark.main.background};
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
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
