import styled from "styled-components";

import { theme } from "@/constants/theme";

export const Container = styled.div`
  background: ${theme.light.secondary.background};
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  color: ${theme.light.secondary.color};
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (prefers-color-scheme: dark) {
    background: ${theme.dark.secondary.background};
    color: ${theme.dark.secondary.color};
  }

  @media (min-width: 400px) {
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.375rem;
    flex-direction: row;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
  gap: 0.75rem;
  overflow: hidden;
  padding: 1.125rem;
  width: 100%;
`;

export const RecordTitle = styled.div`
  font-weight: 700;
  margin-bottom: 0.125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (min-width: 678px) {
    gap: 1rem;
  }
`;

type DescriptionProps = {
  $fullRow: boolean;
};

export const Description = styled.div<DescriptionProps>`
  align-items: center;
  display: flex;
  gap: 0.25rem;
  overflow: hidden;

  ${({ $fullRow }) => $fullRow && "flex-basis: 100%"};
`;
