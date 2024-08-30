import styled from "styled-components";

import { theme } from "@/constants/theme";

export const GridPlaceholder = styled.div`
  background: ${theme.light.secondary.background};
  grid-column: span 1;

  @media (prefers-color-scheme: dark) {
    background: ${theme.dark.secondary.background};
  }
`;

export const GridPlaceholderInner = styled.div`
  aspect-ratio: 1 / 1;
  height: auto;
  max-width: 100%;
  width: 500px;
`;
