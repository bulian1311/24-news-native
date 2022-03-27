import styled, { css } from "styled-components/native";

export const StyledView = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 10px;
    padding-top: 10px;
    border-radius: 22px;
    background-color: ${theme.colors.ui.ghost};
  `}
`;

export const StyledTextInput = styled.TextInput`
  ${({ theme }) => css`
    padding-left: 18px;
    flex: 1;
    color: ${theme.colors.text.disabled};
  `}
`;

export const StyledTouchableOpacity = styled.TouchableOpacity``;
