import { theme } from "@/constants/theme";
import styled from "styled-components";

export const Header = styled.header`
  margin: 3rem 1rem 2rem;

  @media (min-width: 640px) {
    margin: 3rem 1rem;
  }
`;

export const Main = styled.main`
  align-items: center;
  background: ${theme.light.main.background};
  color: ${theme.light.main.color};
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;

  @media (prefers-color-scheme: dark) {
    background: ${theme.dark.main.background};
    color: ${theme.dark.main.color};
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
  width: 100%;

  & + & {
    margin-top: 1rem;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;
