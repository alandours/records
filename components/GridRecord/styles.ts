import NextImage from "next/image";
import styled from "styled-components";

import { RecordIcons } from "@/components/RecordIcons";
import { theme } from "@/constants/theme";

export const Image = styled(NextImage)`
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const Overlay = styled.div`
  background: ${theme.common.black.background};
  bottom: 0;
  color: ${theme.common.black.color};
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  gap: 0.5rem;
  opacity: 0;
  padding: 0.75rem;
  position: absolute;
  width: 100%;
  z-index: 20;

  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
`;

export const RecordText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const RecordTitle = styled(RecordText)`
  font-weight: 500;
`;

export const RecordIconsContainer = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  opacity: 0;
  right: 0.75rem;
  top: 0.75rem;

  &,
  & div {
    gap: 0.75rem;
  }

  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
`;

export const Container = styled.div`
  background: ${theme.light.secondary.background};
  font-weight: 300;
  max-height: auto;
  max-width: 100%;
  position: relative;

  @media (prefers-color-scheme: dark) {
    background: ${theme.dark.secondary.background};
  }

  &:hover ${Overlay}, &:active ${Overlay} {
    opacity: 0.8;
  }

  &:hover ${RecordIconsContainer}, &:active ${RecordIconsContainer} {
    opacity: 1;
  }
`;

export const StyledRecordIcons = styled(RecordIcons)`
  transform: scale(1.5);
`;
