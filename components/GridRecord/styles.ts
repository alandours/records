import NextImage from "next/image";
import styled from "styled-components";

import { theme } from "@/constants/theme";

export const Image = styled(NextImage)`
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const Overlay = styled.div`
  background: ${theme.colors.black.base};
  bottom: 0;
  color: ${theme.colors.white.base};
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
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
  font-weight: 700;
`;

type RecordColorProps = {
  color: string;
};

export const RecordColor = styled.div<RecordColorProps>`
  background: ${({ color }) => color};
  border-radius: 100%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  height: 2rem;
  opacity: 0;
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
  width: 2rem;

  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
`;

export const Container = styled.div`
  background: ${theme.colors.grey.light};
  max-height: auto;
  max-width: 100%;
  position: relative;

  &:hover ${Overlay}, &:active ${Overlay} {
    opacity: 0.8;
  }

  &:hover ${RecordColor}, &:active ${RecordColor} {
    opacity: 1;
  }
`;
