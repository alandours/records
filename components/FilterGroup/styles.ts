import styled from "styled-components";

import { theme } from "@/constants/theme";

export const FilterGroupTitle = styled.div`
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  min-height: 1.5rem;
`;

export const FilterOptions = styled.div`
  background: ${theme.light.secondary.background};
  border-radius: 0.375rem;
  display: flex;
  min-height: 2.9rem;
  padding: 0.375rem;
  width: 100%;

  @media (prefers-color-scheme: dark) {
    background: ${theme.dark.secondary.background};
  }

  @media (min-width: 640px) {
    width: fit-content;
  }
`;

export const FilterGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;

  @media (min-width: 640px) {
    width: auto;
  }
`;
