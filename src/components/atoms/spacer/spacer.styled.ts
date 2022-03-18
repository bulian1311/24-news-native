import styled, { css } from "styled-components/native";
import { Props } from "./spacer.props";

const sizes = {
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xl: 5,
  xxl: 6,
};

const positions = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

export const StyledView = styled.View<Props>`
  ${({ pos = "top", size = "m", theme }) => css`
    ${positions[pos]}: ${theme.spacing.space[sizes[size]]};
  `};
`;
