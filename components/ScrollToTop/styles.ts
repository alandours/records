import styled from "styled-components";

import { theme } from "@/constants/theme";

export const ScrollTopButton = styled.button`
  background: ${theme.common.white.background};
  border-radius: 100%;
  bottom: 1rem;
  box-shadow: 0px 0px 30px 0 rgb(100 100 100 / 0.2);
  color: ${theme.common.white.color};
  height: 3.5rem;
  width: 3.5rem;
  position: fixed;
  right: 1rem;
  z-index: 100;

  @media (min-width: 640px) {
    bottom: 1.5rem;
    height: 3rem;
    right: 1.5rem;
    width: 3rem;
  }

  @media (prefers-color-scheme: dark) {
    background: ${theme.common.black.background};
    color: ${theme.common.black.color};
  }
`;
