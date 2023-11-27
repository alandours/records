import styled from "styled-components";

import { theme } from "@/constants/theme";

export const FilterGroupTitle = styled.div`
  margin-bottom: 0.5rem;
  min-height: 1.5rem;
`;

export const FilterOptions = styled.div`
  background: ${theme.light.secondary.background};
  border-radius: 0.375rem;
  display: flex;
  min-height: 2.8rem;
  padding: 0.375rem;
  width: fit-content;

  @media (prefers-color-scheme: dark) {
    background: ${theme.dark.secondary.background};
  }
`;

export const FilterGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
