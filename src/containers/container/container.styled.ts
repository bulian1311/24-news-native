import { Platform } from "react-native";
import styled, { css } from "styled-components/native";

const os = Platform.OS;

export const StyledContainer = styled.SafeAreaView<{
  fullHeight: boolean;
  safeArea: boolean;
}>`
  ${({ theme, fullHeight, safeArea }) => css`
    ${os === "android" && safeArea && "padding-top: 30px"};
    ${fullHeight && "flex: 1"};

    padding-left: ${theme.spacing.space[4]};
    padding-right: ${theme.spacing.space[4]};
    background-color: ${theme.colors.bg.primary};
  `}
`;
