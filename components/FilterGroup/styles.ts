import styled from "styled-components";

import { theme } from "@/constants/theme";

export const FilterGroupTitle = styled.div`
  margin-bottom: 0.5rem;
  min-height: 1.5rem;
`;

export const FilterOptions = styled.div`
  display: flex;
  background: ${theme.colors.grey.light};
  padding: 0.375rem;
  border-radius: 0.375rem;
  width: fit-content;
`;
