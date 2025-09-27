import styled from "styled-components";

import { theme } from "@/constants/theme";
import { Icon } from "../Icon";

type RecordIconProps = {
  color?: string;
};

export const IconsContainer = styled.div`
  display: flex;
  margin-right: 0.25rem;
  margin-top: -0.125rem;

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
  box-shadow: 0 1px 2px -1px rgb(0 0 0 / 0.75);
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

export const BoxsetIcon = styled(Icon)`
  fill: #9e5c35;
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
