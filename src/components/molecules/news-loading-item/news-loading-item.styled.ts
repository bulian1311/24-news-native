import styled, { css } from "styled-components/native";

export const StyledWrapper = styled.View`
  flex-direction: row;
`;

export const StyledView = styled.View``;

export const StyledViewImage = styled.View`
  ${({ theme }) => css`
    width: 140px;
    height: 140px;
    background-color: ${theme.colors.ui.ghost};
    margin-right: 16px;
  `}
`;

export const StyledViewText = styled.View`
  ${({ theme }) => css`
    width: 140px;
    height: 18px;
    background-color: ${theme.colors.ui.ghost};
    margin-bottom: 16px;
  `}
`;
