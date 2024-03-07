import styled from "styled-components";

import { theme } from "@/constants/theme";

export const FilterGroupTitle = styled.div`
  margin-bottom: 0.5rem;
  min-height: 1.5rem;
`;

export const FilterOptions = styled.div`
  display: flex;
  background: ${theme.light.secondary.background};
  padding: 0.375rem;
  border-radius: 0.375rem;
  width: fit-content;

  @media (prefers-color-scheme: dark) {
    background: ${theme.dark.secondary.background};
  }
`;
