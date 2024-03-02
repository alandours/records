import styled from "styled-components";

import { theme } from "@/constants/theme";

export const GridPlaceholder = styled.div`
  background-color: ${theme.colors.grey.light};
  grid-column: span 1;
`;

export const GridPlaceholderInner = styled.div`
  aspect-ratio: 1 / 1;
  height: auto;
  max-width: 100%;
  width: 500px;
`;
