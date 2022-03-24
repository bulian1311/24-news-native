import styled, { css } from "styled-components/native";

export const StyledView = styled.View<{ active?: boolean }>`
  ${({ theme, active }) => css`
    background-color: ${active
      ? theme.colors.ui.primary
      : theme.colors.ui.ghost};

    align-items: center;
    justify-content: center;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 15px;
  `}
`;
