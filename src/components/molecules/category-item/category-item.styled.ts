import styled, { css } from "styled-components/native";

export const StyledView = styled.View<{ active?: boolean }>`
  ${({ theme, active }) => css`
    background-color: ${active
      ? theme.colors.ui.primary
      : theme.colors.ui.ghost};

    align-items: center;
    justify-content: center;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 15px;
  `}
`;
