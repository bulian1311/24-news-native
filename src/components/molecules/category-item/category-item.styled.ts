import styled, { css } from "styled-components/native";

export const StyledView = styled.View<{ active?: boolean }>`
  ${({ theme, active }) => css`
    background-color: ${active
      ? theme.colors.ui.primary
      : theme.colors.ui.ghost};

    padding: 0 15px;
    height: 28px;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
  `}
`;
