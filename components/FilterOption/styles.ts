import { motion } from "framer-motion";
import styled from "styled-components";

import { theme } from "@/constants/theme";

type FilterLabelProps = {
  minWidth?: string;
};

export const FilterLabel = styled.label<FilterLabelProps>`
  cursor: pointer;
  display: flex;
  min-width: ${({ minWidth }) => minWidth || "6.25rem"};
  position: relative;
  width: auto;
  -webkit-tap-highlight-color: transparent;
`;

export const MotionSpan = styled(motion.span)`
  background: ${theme.light.secondary.color};
  border-radius: 0.25rem;
  inset: 0;
  position: absolute;
  z-index: 10;

  @media (prefers-color-scheme: dark) {
    background: ${theme.dark.secondary.color};
  }
`;

export const FilterCheckbox = styled.input`
  height: 0;
  width: 0;
`;

type FilterTextProps = {
  active: boolean;
};

export const FilterText = styled.div<FilterTextProps>`
  color: ${({ active }) =>
    active ? theme.light.secondary.background : theme.light.secondary.color};
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.375rem 0.75rem;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 30;

  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 600ms;

  @media (prefers-color-scheme: dark) {
    color: ${({ active }) =>
      active ? theme.dark.secondary.background : theme.dark.secondary.color};
  }
`;
