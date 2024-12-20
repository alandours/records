import { theme } from "@/constants/theme";
import styled from "styled-components";

export const Links = styled.button`
  display: flex;
  gap: 1rem;
  position: absolute;
  right: 1rem;
  top: 1rem;

  @media (min-width: 640px) {
    right: 1.5rem;
    top: 1.5rem;
  }

  @media (min-width: 1400px) {
    position: fixed;
  }

  @media (prefers-color-scheme: dark) {
    & svg {
      fill: ${theme.common.white.background};
    }
  }
`;
