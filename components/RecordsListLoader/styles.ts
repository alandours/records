import styled from "styled-components";

import { theme } from "@/constants/theme";

export const ListPlaceholder = styled.div`
  background: ${theme.light.secondary.background};
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  width: 100%;
  height: 30rem;

  @media (prefers-color-scheme: dark) {
    background: ${theme.dark.secondary.background};
    color: ${theme.dark.secondary.color};
  }

  @media (min-width: 400px) {
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.375rem;
    height: 9.375rem;
  }
`;
