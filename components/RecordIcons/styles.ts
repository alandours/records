import styled from "styled-components";

import { theme } from "@/constants/theme";

type RecordIconProps = {
  color?: string;
};

export const IconsContainer = styled.div`
  display: flex;
  margin-right: 0.25rem;

  @media (prefers-color-scheme: dark) {
    & svg {
      fill: ${theme.common.white.background};
    }
  }
`;

export const RecordIcon = styled.div<RecordIconProps>`
  align-items: center;
  border: 0;
  border-radius: 100%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  display: flex;
  height: 1rem;
  justify-content: center;
  width: 1rem;

  & + & {
    margin-left: 0.125rem;
  }
`;

export const VinylIcon = styled(RecordIcon)`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 50%,
    rgba(2, 0, 36, 1) 100%
  );
  border: 6px solid ${({ color }) => color};
`;

export const CdIcon = styled(RecordIcon)`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 10%,
    rgba(209, 219, 211, 1) 20%
  );
`;

export const BoxsetIcon = styled(RecordIcon)`
  background: ${theme.common.black.background};
  border-radius: 0;
`;

export const AllMediaIcon = styled(RecordIcon)`
  border: 2px solid ${theme.light.secondary.color};
  font-size: 0.5rem;
  padding: 0.25rem;

  @media (prefers-color-scheme: dark) {
    border: 2px solid ${theme.dark.secondary.color};
  }
`;
