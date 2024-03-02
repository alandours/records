import { motion } from "framer-motion";
import styled from "styled-components";

type FilterTextProps = {
  active: boolean;
};

export const FilterLabel = styled.label`
  cursor: pointer;
  display: flex;
  min-width: 6rem;
  position: relative;
  width: auto;
  -webkit-tap-highlight-color: transparent;
`;

export const MotionSpan = styled(motion.span)`
  background: darkblue;
  border-radius: 0.25rem;
  inset: 0;
  position: absolute;
  z-index: 10;
`;

export const FilterCheckbox = styled.input`
  height: 0;
  width: 0;
`;

export const FilterText = styled.div<FilterTextProps>`
  color: ${({ active }) => (active ? "white" : "black")};
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
`;
